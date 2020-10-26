/**
 * Task assistant.
 */
module.exports = function (grunt) {

    /**
     * Actions for CONFIG.XML file.
     */
    grunt.registerMultiTask("assistant", "Task Assistant", function () {

        try {
            switch (grunt.config("prompt.assistant")) {
                case "master":
                    if (grunt.config("prompt.assistant-confirm")) {
                        grunt.task.run("master");
                    }
                    break;

                case "development-test-master":
                    if (grunt.config("prompt.assistant-confirm")) {
                        grunt.task.run("development-test-master");
                    }
                    break;

                case "development-rollback":
                    if (grunt.config("prompt.assistant-confirm")) {
                        grunt.task.run("development-rollback");
                    }
                    break;

                case "sass":
                    grunt.task.run("sass");
                    break;

                case "responsiveImages":
                    grunt.task.run("imagemagick-convert");
                    grunt.task.run("responsive_images");
                    break;

                case "quit": default:
                    grunt.log.ok("Quiting.");
                    break;
            }
        } catch (error) {
            grunt.log.error(error);
            grunt.warn("Task failed.");
        }
    });
};
