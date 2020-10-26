module.exports = function (grunt) {

    // Project configuration
    grunt.initConfig({
        "pkg": grunt.file.readJSON("package.json"),
        "devBranch": "development",

        /**
         * "watch" command.
         */
        "watch": {
            "css": {
                "files": ["css/*.scss"],
                "tasks": ["sass"]
            }
        },

        /**
         * UI assistant.
         */
        "prompt": {
            "assistant": {
                "options": {
                    "questions": [
                        {
                            "config": "prompt.assistant",
                            "type": "list",
                            "message": 'M-Procer environment builder.',
                            "default": "sass",
                            "choices": [
                                "---",
                                {
                                    "name": "Build and Push (master)",
                                    "value": "master"
                                },
                                {
                                   "name": "Build in development branch (development-test-master)",
                                   "value": "development-test-master"
                                },
                                {
                                   "name": "Undo 'development-test-master' (development-rollback)",
                                   "value": "development-rollback"
                                },
                                "---",
                                {
                                   "name": "Compile CSS with SASS (sass)",
                                   "value": "sass"
                                },
                                {
                                   "name": "Generate Icons",
                                   "value": "responsiveImages"
                                },
                                "---",
                                {
                                   "name": "Quit",
                                   "value": "quit"
                                }
                            ]
                        },
                        {
                           "config": "prompt.assistant-confirm",
                           "type": "confirm",
                           "message": "WARNING! This task includes repo related and destructive actions (commit|push|checkout|rm). Are you sure?",
                           "default": "no",
                           "when": function (res) {

                                var matches = ["master", "development-test-master", "development-rollback"];

                                return matches.indexOf(res["prompt.assistant"]) > -1;
                            }
                        }
                    ]
                }
            }
        },

        /**
         * Shell tasks.
         *
         * ---
         * Notes:
         * 
         * -> GIT related operations.
         */
        "shell": {
            "mergeDevelopmentToMaster": {
                "command": [
                    "git checkout <%= devBranch %>",
                    "git merge -s ours master",
                    "git push",
                    "git checkout master",
                    "git merge <%= devBranch %>"
                ].join("&&")
            },
            "pushDevelopment": {
                "command": [
                    "git add -A",
                    "git commit -m 'GRUNT Automatic commit to <%= devBranch %>'",
                    "git push"
                ].join("&&")
            },
            "pushMaster": {
                "command": [
                    "git add -A",
                    "git commit -m 'GRUNT Automatic merge from <%= devBranch %> to master'",
                    "git push"
                ].join("&&")
            },
            "coDevelopment": {
                "command": [
                    "git checkout <%= devBranch %>"
                ].join("&&")
            },
            "undoDevelopment": {
                "command": [
                    "git checkout css js index.html config.xml"
                ].join("&&")
            }
        },

        /**
         * JS obfuscation.
         */
        "uglify": {
            "options": {
                "banner": '/*! Generated on <%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %> */\n'
            },
            "master": {
                "files": [{
                    "expand": true,
                    "cwd": "js",
                    "src": "*.js",
                    "dest": "js/min"
                }]
            }
        },

        /**
         * Remove unnecessary files depending on the environment.
         */
        "clean": {
            "all": {
                "src": [
                    "**/*.*~",
                    "**/.*.swp"
                ],
            },
            "master": {
                "src": [
                    "js/*.js",
                    "css/*.css"
                ]
            },
            "development": {
                "src": [
                    "js/min/*.js",
                    "css/min/*.css"
                ]
            }
        },

        /**
         * CSS minification.
         */
        "cssmin": {
            "options": {
                "banner": '/*! Generated on <%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %> */\n'
            },
            "master": {
                "files": [{
                    "expand": true,
                    "cwd": "css",
                    "src": "*.css",
                    "dest": "css/min"
                }]
            }
        },

        /**
         * Custom tasks (tasks/<name>.js).
         */
        "css": {
            "master": {
                "files": [{
                    "expand": true,
                    "cwd": "css/min",
                    "src": "*.css",
                    "dest": "css/min"
                }]
            },
            "development": {
                "files": [{
                    "expand": true,
                    "cwd": "css",
                    "src": "*.css",
                    "dest": "css"
                }]
            }
        },
        "index": {
            "master": {
                "src": "index.html"
            },
            "development": {
                "src": "index.html"
            }
        },
        "config": {
            "master": {
                "src": "config.xml"
            }
        },
        "assistant": {
            "run": {}
        },

        /**
         * SASS format conversion to CSS.
         */
        "sass": {
             "run": {
                "options": {
                    "sourcemap": "none",
                    "style": "expanded",
                    "noCache": true
                },
                "files": [{
                    "expand": true,
                    "cwd": "css",
                    "src": "*.scss",
                    "dest": "css",
                    "ext": ".css",
                    "extDot": "last"
                }]
            }
        },

        /**
         * Imagemagick operations.
         */
        "imagemagick-convert": {

            ////
            // App Icons.
            ////

            "mainIconFlatten": {
                "args": [
                    "res/raw/original/icon.png",
                    "(", "-alpha", "remove", "-gravity", "center", "-extent", "110%x110%", "-resize", "1024x1024", ")",
                    "res/raw/distribution/resources/icon-1024-pad-flat.png"
                ]
            },
            "mainIconRounded": {
                "args": [
                    "res/raw/distribution/resources/icon-1024-pad-flat.png",
                    "(",
                        "+clone",
                        "-alpha", "extract",
                        "-draw", "fill black polygon 0,0 0,90 90,0 fill white circle 90,90 90,0",
                        "(",
                            "+clone", "-flip",
                        ")",
                        "-compose", "Multiply", "-composite",
                        "(",
                            "+clone", "-flop",
                        ")", "-compose", "Multiply", "-composite",
                    ")",
                    "-alpha", "off",
                    "-compose", "CopyOpacity",
                    "-composite",
                    "res/raw/distribution/resources/icon.png"
                ]
            },

            ////
            // Graphic Logo (res/raw/original/logo.png) related images.
            ////

            "androidFeatureGraphic": {
                "args": [
                    "res/raw/original/logo.png",
                    "(", "-resize", ((500 * .9) + "x" + (500 * .9)), "-gravity", "center", "-extent", "1024x500",")",
                    "res/raw/distribution/resources/logo-1024x500.png"
                ]
            },
            "androidScreenshotSampleSmartphone": { // Android Smartphone
                "args": [
                    "res/raw/original/logo.png",
                    "(", "-resize", ((1080 * .9) + "x" + (1080 * .9)), "-gravity", "center", "-extent", "1080x1920",")",
                    "res/raw/distribution/screenshots/android/smartphone/1-1080x1920-sample.png"
                ]
            },
            "androidScreenshotSampleTablet7": { // Android Tablet 7 inch
                "args": [
                    "res/raw/original/logo.png",
                    "(", "-resize", ((600 * .9) + "x" + (600 * .9)), "-gravity", "center", "-extent", "600x1024",")",
                    "res/raw/distribution/screenshots/android/tablet/1-600x1024-sample-7inch.png"
                ]
            },
            "iosScreenshotSampleSmartphone35": { // iOS Smartphone 3.5 inch
                "args": [
                    "res/raw/original/logo.png",
                    "(", "-resize", ((640 * .9) + "x" + (640 * .9)), "-gravity", "center", "-extent", "640x960",")",
                    "res/raw/distribution/screenshots/ios/smartphone/1-640x960-sample-35inch.png"
                ]
            },
            "iosScreenshotSampleSmartphone4": { // iOS Smartphone 4 inch
                "args": [
                    "res/raw/original/logo.png",
                    "(", "-resize", ((640 * .9) + "x" + (640 * .9)), "-gravity", "center", "-extent", "640x1136",")",
                    "res/raw/distribution/screenshots/ios/smartphone/1-640x1136-sample-4inch.png"
                ]
            },
            "iosScreenshotSampleSmartphone47": { // iOS Smartphone 4.7 inch
                "args": [
                    "res/raw/original/logo.png",
                    "(", "-resize", ((750 * .9) + "x" + (750 * .9)), "-gravity", "center", "-extent", "750x1334",")",
                    "res/raw/distribution/screenshots/ios/smartphone/1-750x1334-sample-47inch.png"
                ]
            },
            "iosScreenshotSampleSmartphone55": { // iOS Smartphone 5.5 inch
                "args": [
                    "res/raw/original/logo.png",
                    "(", "-resize", ((1242 * .9) + "x" + (1242 * .9)), "-gravity", "center", "-extent", "1242x2208",")",
                    "res/raw/distribution/screenshots/ios/smartphone/1-1242x2208-sample-55inch.png"
                ]
            },
            "iosScreenshotSampleTablet": { // iOS Tablet
                "args": [
                    "res/raw/original/logo.png",
                    "(", "-resize", ((1536 * .9) + "x" + (1536 * .9)), "-gravity", "center", "-extent", "1536x2048",")",
                    "res/raw/distribution/screenshots/ios/tablet/1-1536x2048-sample.png"
                ]
            },
            "iosScreenshotSampleTablet2": { // iOS Tablet (Pro)
                "args": [
                    "res/raw/original/logo.png",
                    "(", "-resize", ((2048 * .9) + "x" + (2048 * .9)), "-gravity", "center", "-extent", "2048x2732",")",
                    "res/raw/distribution/screenshots/ios/tablet/1-2048x2732-sample.png"
                ]
            },

            ////
            // Splash Screens.
            ////

            // Generic
            "splashscreenDefault": { // splash (360x480)
                "args": [
                    "res/raw/original/logo.png",
                    "(", "-resize", ((360 * .9) + "x" + (360 * .9)), "-gravity", "center", "-extent", "360x480",")",
                    "splash.png"
                ]
            },

            // Splash Screens for Android
            "splashscreenAndroidHdpiLandscape": { // hdpi-landscape (800x480)
                "args": [
                    "res/raw/original/logo.png",
                    "(", "-resize", ((480 * .9) + "x" + (480 * .9)), "-gravity", "center", "-extent", "800x480",")",
                    "res/screen/android/screen-hdpi-landscape.png"
                ]
            },
            "splashscreenAndroidHdpiPortrait": { // hdpi-portrait (480x800)
                "args": [
                    "res/raw/original/logo.png",
                    "(", "-resize", ((480 * .9) + "x" + (480 * .9)), "-gravity", "center", "-extent", "480x800",")",
                    "res/screen/android/screen-hdpi-portrait.png"
                ]
            },
            "splashscreenAndroidLdpiLandscape": { // ldpi-landscape (320x200)
                "args": [
                    "res/raw/original/logo.png",
                    "(", "-resize", ((200 * .9) + "x" + (200 * .9)), "-gravity", "center", "-extent", "320x200",")",
                    "res/screen/android/screen-ldpi-landscape.png"
                ]
            },
            "splashscreenAndroidLdpiPortrait": { // ldpi-portrait (200x320)
                "args": [
                    "res/raw/original/logo.png",
                    "(", "-resize", ((200 * .9) + "x" + (200 * .9)), "-gravity", "center", "-extent", "200x320",")",
                    "res/screen/android/screen-ldpi-portrait.png"
                ]
            },
            "splashscreenAndroidMdpiLandscape": { // mdpi-landscape (480x320)
                "args": [
                    "res/raw/original/logo.png",
                    "(", "-resize", ((320 * .9) + "x" + (320 * .9)), "-gravity", "center", "-extent", "480x320",")",
                    "res/screen/android/screen-mdpi-landscape.png"
                ]
            },
            "splashscreenAndroidMdpiPortrait": { // mdpi-portrait (320x480)
                "args": [
                    "res/raw/original/logo.png",
                    "(", "-resize", ((320 * .9) + "x" + (320 * .9)), "-gravity", "center", "-extent", "320x480",")",
                    "res/screen/android/screen-mdpi-portrait.png"
                ]
            },
            "splashscreenAndroidXhdpiLandscape": { // xhdpi-landscape (1280x720)
                "args": [
                    "res/raw/original/logo.png",
                    "(", "-resize", ((720 * .9) + "x" + (720 * .9)), "-gravity", "center", "-extent", "1280x720",")",
                    "res/screen/android/screen-xhdpi-landscape.png"
                ]
            },
            "splashscreenAndroidXhdpiPortrait": { // xhdpi-portrait (720x1280)
                "args": [
                    "res/raw/original/logo.png",
                    "(", "-resize", ((720 * .9) + "x" + (720 * .9)), "-gravity", "center", "-extent", "720x1280",")",
                    "res/screen/android/screen-xhdpi-portrait.png"
                ]
            },
            "splashscreenAndroidXxhdpiLandscape": { // xxhdpi-landscape (1440x960)
                "args": [
                    "res/raw/original/logo.png",
                    "(", "-resize", ((960 * .9) + "x" + (960 * .9)), "-gravity", "center", "-extent", "1440x960",")",
                    "res/screen/android/screen-xxhdpi-landscape.png"
                ]
            },
            "splashscreenAndroidXxhdpiPortrait": { // xxhdpi-portrait (960x1440)
                "args": [
                    "res/raw/original/logo.png",
                    "(", "-resize", ((960 * .9) + "x" + (960 * .9)), "-gravity", "center", "-extent", "960x1440",")",
                    "res/screen/android/screen-xxhdpi-portrait.png"
                ]
            },
            "splashscreenAndroidXxxhdpiLandscape": { // xxxhdpi-landscape (1920x1200)
                "args": [
                    "res/raw/original/logo.png",
                    "(", "-resize", ((1200 * .9) + "x" + (1200 * .9)), "-gravity", "center", "-extent", "1920x1200",")",
                    "res/screen/android/screen-xxxhdpi-landscape.png"
                ]
            },
            "splashscreenAndroidXxxhdpiPortrait": { // xxxhdpi-portrait (1200x1920)
                "args": [
                    "res/raw/original/logo.png",
                    "(", "-resize", ((1200 * .9) + "x" + (1200 * .9)), "-gravity", "center", "-extent", "1200x1920",")",
                    "res/screen/android/screen-xxxhdpi-portrait.png"
                ]
            },

            // Splash Screens for iOS
            "splashscreenIosIpadLandscape": { // ipad-landscape (1024x768)
                "args": [
                    "res/raw/original/logo.png",
                    "(", "-resize", ((768 * .9) + "x" + (768 * .9)), "-gravity", "center", "-extent", "1024x768",")",
                    "res/screen/ios/screen-ipad-landscape.png"
                ]
            },
            "splashscreenIosIpadPortrait": { // ipad-portrait (768x1024)
                "args": [
                    "res/raw/original/logo.png",
                    "(", "-resize", ((768 * .9) + "x" + (768 * .9)), "-gravity", "center", "-extent", "768x1024",")",
                    "res/screen/ios/screen-ipad-portrait.png"
                ]
            },
            "splashscreenIosIpadLandscape2x": { // ipad-landscape-2x (2048x1536)
                "args": [
                    "res/raw/original/logo.png",
                    "(", "-resize", ((1536 * .9) + "x" + (1536 * .9)), "-gravity", "center", "-extent", "2048x1536",")",
                    "res/screen/ios/screen-ipad-landscape-2x.png"
                ]
            },
            "splashscreenIosIpadPortrait2x": { // ipad-portrait (1536x2048)
                "args": [
                    "res/raw/original/logo.png",
                    "(", "-resize", ((1536 * .9) + "x" + (1536 * .9)), "-gravity", "center", "-extent", "1536x2048",")",
                    "res/screen/ios/screen-ipad-portrait-2x.png"
                ]
            },
            "splashscreenIosIphonePortrait": { // iphone-portrait (320x480)
                "args": [
                    "res/raw/original/logo.png",
                    "(", "-resize", ((320 * .9) + "x" + (320 * .9)), "-gravity", "center", "-extent", "320x480",")",
                    "res/screen/ios/screen-iphone-portrait.png"
                ]
            },
            "splashscreenIosIphonePortrait2x": { // iphone-portrait-2x (640x960)
                "args": [
                    "res/raw/original/logo.png",
                    "(", "-resize", ((640 * .9) + "x" + (640 * .9)), "-gravity", "center", "-extent", "640x960",")",
                    "res/screen/ios/screen-iphone-portrait-2x.png"
                ]
            },
            "splashscreenIosIphonePortrait568h2x": { // iphone-portrait-568h-2x (640x1136)
                "args": [
                    "res/raw/original/logo.png",
                    "(", "-resize", ((640 * .9) + "x" + (640 * .9)), "-gravity", "center", "-extent", "640x1136",")",
                    "res/screen/ios/screen-iphone-portrait-568h-2x.png"
                ]
            },
            "splashscreenIosIphonePortrait667h2x": { // iphone-portrait-667h-2x (750x1334)
                "args": [
                    "res/raw/original/logo.png",
                    "(", "-resize", ((750 * .9) + "x" + (750 * .9)), "-gravity", "center", "-extent", "750x1334",")",
                    "res/screen/ios/screen-iphone-portrait-667h-2x.png"
                ]
            },
            "splashscreenIosIphonePortrait736h3x": { // iphone-portrait-736h-3x (1242x2208)
                "args": [
                    "res/raw/original/logo.png",
                    "(", "-resize", ((1242 * .9) + "x" + (1242 * .9)), "-gravity", "center", "-extent", "1242x2208",")",
                    "res/screen/ios/screen-iphone-portrait-736h-3x.png"
                ]
            },
            "splashscreenIosIphoneLandscape736h3x": { // iphone-landscape-736h-3x (2208x1242)
                "args": [
                    "res/raw/original/logo.png",
                    "(", "-resize", ((1242 * .9) + "x" + (1242 * .9)), "-gravity", "center", "-extent", "2208x1242",")",
                    "res/screen/ios/screen-iphone-landscape-736h-3x.png"
                ]
            }
        },

        /**
         * Generate icon and splashscreen images images.
         *
         * ---
         * Notes:
         * 
         * -> For icon related images, the source image is /res/raw/distribution/resources/icon.png
         * -> For Android, the badge/pin image for messages received in the tray (like push messages)
         *    is /res/raw/original/pin.png
         */
        "responsive_images": {
            "options": {
                "engine": "gm",
                "newFilesOnly": false
            },
            "resizeIco": {
                "options": {
                    "engine": "im",
                    "sizes": [{
                        "width": 57,
                        "rename": false
                    }]
                },
                "files": { "favicon.ico": "res/raw/distribution/resources/icon.png" }
            },
            "resizeRoot": {
                "options": { "sizes": [{ "width": 57, "rename": false }] },
                "files": { "icon.png": "res/raw/distribution/resources/icon.png" }
            },
            "resizeAndroidStore": {
                "options": {
                    "sizes": [
                        { "width": 512, "name": "512-original" },
                    ]
                },
                "files": [{
                    "expand": true,
                    "cwd": "res/raw/original",
                    "src": "icon.png",
                    "dest": "res/raw/distribution/resources/"
                }]
            },
            "resizeAndroidIcon": {
                "options": {
                    "sizes": [
                        { "width": 36, "name": "36-ldpi" },
                        { "width": 48, "name": "48-mdpi" },
                        { "width": 72, "name": "72-hdpi" },
                        { "width": 96, "name": "96-xhdpi" },
                        { "width": 144, "name": "144-xxhdpi" },
                        { "width": 192, "name": "192-xxxhdpi" }
                    ]
                },
                "files": [{
                    "expand": true,
                    "cwd": "res/raw/distribution/resources",
                    "src": "icon.png",
                    "dest": "res/icon/android/"
                }]
            },
            "resizeAndroidPin": {
                "options": {
                    "sizes": [
                        { "width": 96, "directory": "drawable" },
                        { "width": 18, "directory": "drawable-ldpi" },
                        { "width": 24, "directory": "drawable-mdpi" },
                        { "width": 36, "directory": "drawable-hdpi" },
                        { "width": 48, "directory": "drawable-xhdpi" },
                        { "width": 72, "directory": "drawable-xxhdpi" },
                        { "width": 96, "directory": "drawable-xxxhdpi" }
                    ]
                },
                "files": [{
                    "expand": true,
                    "cwd": "res/raw/original",
                    "src": "pin.png",
                    "custom_dest": "locales/android/{%= directory %}"
                }]
            },
            "resizeIos": {
                "options": {
                    "sizes": [
                        { "width": 57, "name": "57" },
                        { "width": 114, "name": "57", "suffix": "-2x" },
                        { "width": 60, "name": "60" },
                        { "width": 120, "name": "60", "suffix": "-2x" },
                        { "width": 72, "name": "72" },
                        { "width": 144, "name": "72", "suffix": "-2x" },
                        { "width": 76, "name": "76" },
                        { "width": 152, "name": "76", "suffix": "-2x" },
                    ]
                },
                "files": [{
                    "expand": true,
                    "cwd": "res/raw/distribution/resources",
                    "src": "icon.png",
                    "dest": "res/icon/ios/"
                }]
            }
        }
    });

    // Load plugins
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-prompt");
    grunt.loadNpmTasks("grunt-shell");
    grunt.loadNpmTasks("grunt-responsive-images");
    grunt.loadNpmTasks('grunt-imagemagick');
    grunt.loadTasks("tasks");

    ////
    // Register tasks
    ////

    // DEFAULT (assistant)
    grunt.registerTask("default", [ "prompt:assistant", "assistant" ]);

    // MASTER:
    // Execute all tasks to merge and push to master branch.
    grunt.registerTask("master", [
        "config",
        "css:development",
        "index:development",
        "shell:coDevelopment",
        "shell:pushDevelopment",
        "shell:mergeDevelopmentToMaster",
        "uglify",
        "cssmin",
        "css:master",
        "index:master",
        "clean:all",
        "clean:master",
        "shell:pushMaster",
        "shell:coDevelopment"
    ]);

    // DEVELOPMENT-TEST-MASTER:
    // Set development environment to look like master (you can undo this action with "development-rollback").
    grunt.registerTask("development-test-master", [
        "uglify",
        "cssmin",
        "config",
        "css",
        "index",
        "clean:master"
    ]);

    // DEVELOPMENT-ROLLBACK:
    // Rollback development environment.
    grunt.registerTask("development-rollback", [
        "clean:development",
        "shell:undoDevelopment"
    ]);
};
