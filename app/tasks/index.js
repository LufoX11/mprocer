/**
 * Actions for INDEX.HTML file.
 */
module.exports = function (grunt) {

    grunt.registerMultiTask("index", "Action tasks for INDEX.HTML file.", function () {

        try {
            var oFile = this.files[0],
                file = grunt.file.read(oFile.src),
                target = this.target;

            grunt.log.ok('Updating file "' + oFile.src + '".');
            if (target == "development") {
                file = versionate(file);
            } else if (target == "master") {
                file = fixPaths(file);
            }
            grunt.file.write(oFile.src[0], file);
        } catch (error) {
            grunt.log.error(error);
            grunt.warn("Task failed.");
        }

        /**
         * Fix CSS & JS paths.
         * For this to work, first tag attribute for <script> and <link> MUST BE "data-pathmin".
         * It's safe, it doesn't brake the source if it has already been replaced.
         *
         * @param file string File as string.
         * @return string.
         */
        function fixPaths(file) {

            grunt.log.ok("Fixing paths.");
            file = file.replace(
                /(<[link|script]+ data-pathmin+ [a-z\.=" \/]*[src|href]=")(css|js)(\/min)?(.*?>)/gmi, "$1$2/min$4");

            return file;
        }

        /**
         * Sources versioning.
         *
         * @param file string File as string.
         * @return string.
         */
        function versionate(file) {

            grunt.log.ok("Versioning.");
            file = file.replace(/(\.[a-z]{2,3}\?)([0-9]+)/gmi, function (a, b, c) { return b + (parseInt(c) + 1); });

            return file;
        }
    });
};
