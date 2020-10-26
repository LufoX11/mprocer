/**
 * Actions for CSS files.
 */
module.exports = function (grunt) {

    grunt.registerMultiTask("css", "Action tasks for CSS files.", function () {

        var target = this.target;

        try {
            this.files.forEach(function (v) {

                var file = grunt.file.read(v.src);

                grunt.log.ok('Updating file "' + v.src + '".');
                if (target == "development") {
                    file = versionate(file);
                } else if (target == "master") {
                    file = fixImagePaths(file);
                }
                grunt.file.write(v.dest, file);
            });
        } catch (error) {
            grunt.log.error(error);
            grunt.warn("Task failed.");
        }

        /**
         * Fix image paths.
         * It's safe, it doesn't brake the source if it has already been replaced.
         *
         * @param file string File as string.
         * @return string.
         */
        function fixImagePaths(file) {

            grunt.log.ok("Fixing paths.");
            file = file.replace(/(\.\.\/)?(\.\.\/img|\.\.\/font)/gmi, "../$2");

            return file;
        }

        /**
         * Images versioning.
         *
         * @param file string File as string.
         * @return string.
         */
        function versionate(file) {

            grunt.log.ok("Versioning.");
            file = file.replace(/(\.[a-z]{3}\?)([0-9]+)/gmi,
                function (a, b, c) { return b + (parseInt(c) + 1); });

            return file;
        }
    });
};

