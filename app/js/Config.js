/**
 * System config.
 */
var Config = (function () {

    var self;

    return self = {

        /**
         * @var object Config for Production environment.
         */
        _: {
            environment: "production", // Application main environment [production|development]
            version: "1.10", // TODO: Check version to force app update
            ajax: {
                timeout: 120000
            },
            debugging: {
                enabled: false, // External debugger (Weinre)
                service: "weinre",
                services: {
                    weinre: {
                        source: "http://192.168.0.4:8080/target/target-script-min.js#anonymous"
                    }
                }
            },
            api: { // API for external requests
                core: { // Main API (Services)
                    domain: "http://api.mprocer.imaat.com.ar",
                    service: "secontur" // api.core.service
                },
                google: { // Google API data
                    projectNumber: "87994900416"
                }
            },
            service: { // Current service data
                name: "Secontur Lufthansa City Center", // service.name
                shortName: "Secontur LCC", // service.shortName
                corporateName: "Secontur SRL", // service.corporateName
                address: "Suipacha 207, 2° Piso Of. 213", // service.address
                zipCode: "C1008AAE", // service.zipCode
                city: "Buenos Aires", // service.city
                country: "Argentina", // service.country
                phone: "(+54) 11 4321-1000", // service.phone
                www: "http://www.seconturlcc.tur.ar", // service.www
                officeGeoCoordinates: {
                    lat: "-34.605873", // service.officeGeoCoordinates.lat
                    lng: "-58.37932" // service.officeGeoCoordinates.lng
                },
                email: {
                    info: "info@seconturlcc.tur.ar", // service.email.info
                    sales: "webibe@seconturlcc.tur.ar" // service.email.sales
                }
            },
            custom: { // Custom data
                header: {

                    // Displayed in header's Toolbar 
                    title: "Secontur LCC" // custom.header.title
                }
            }
        },

        /**
         * Gets a key from config.
         *
         * @param key string Access key.
         * @return mixed.
         */
        get: function (key) {

            var res = self._,
                key = key.split(".");

            try {
                $.each(key, function (k, v) {

                    if (typeof res[v] == "undefined") {
                        res = null;

                        return;
                    }

                    res = res[v];
                });
            } catch (e) {
                res = null;
            }

            return res;
        }
    }
})();
