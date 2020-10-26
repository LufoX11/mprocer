/**
 * Actions for CONFIG.XML file.
 */
module.exports = function (grunt) {

    /**
     * Actions for CONFIG.XML file.
     */
    grunt.registerMultiTask("config", "Post action tasks for config.xml file", function () {

        try {
            var oFile = this.files[0],
                file = grunt.file.read(oFile.src);

            grunt.log.ok('Updating file "' + oFile.src + '".');

            // Versioning (version & versionName)
            grunt.log.ok("Versioning: version & versionName.");
            file = file.replace(/(^\s{8}[version|versionName]+=")([0-9\.]{2})([0-9\.]{3})([0-9]{4})/gmi,
                function (a, b, c, d, e) { return b + c + d + String(parseInt(e) + 1).pad(4); });

            // Versioning (versionCode)
            grunt.log.ok("Versioning: versionCode.");
            file = file.replace(/(^\s{8}versionCode=")([0-9]{1,6})/gmi,
                function (a, b, c) { return b + (parseInt(c) + 1); });

            grunt.file.write(oFile.src[0], file);
        } catch (error) {
            grunt.log.error(error);
            grunt.warn("Task failed.");
        }
    });
};
