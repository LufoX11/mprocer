/**
 * This is a data file.
 */

var Data = {

    /**
     * @var array Holidays.
     */
    holidays: {
        argentina: [
            {
                d: new Date(2015, 4, 1),
                text: "Trabajador",
                color: "fixed"
            },
            {
                d: new Date(2015, 4, 25),
                text: "Revolución",
                color: "fixed"
            },
            {
                d: new Date(2015, 5, 20),
                text: "Inm. Manuel Belgrano",
                color: "fixed"
            },
            {
                d: new Date(2015, 6, 9),
                text: "Independencia",
                color: "fixed"
            },
            {
                d: new Date(2015, 7, 17),
                text: "Inm. San Martín",
                color: "nofixed"
            },
            {
                d: new Date(2015, 8, 15),
                text: "Año Nuevo Judío",
                color: "nowork"
            },
            {
                d: new Date(2015, 8, 23),
                text: "Perdón",
                color: "nowork"
            },
            {
                d: new Date(2015, 9, 12),
                text: "Div. Cultural",
                color: "nofixed"
            },
            {
                d: new Date(2015, 10, 23),
                text: "Soberanía Nacional",
                color: "nofixed"
            },
            {
                d: new Date(2015, 11, 7),
                text: "Puente Turístico",
                icon: "material-flight",
                color: "bridge"
            },
            {
                d: new Date(2015, 11, 8),
                text: "Inm. Concepción de María",
                color: "fixed"
            },
            {
                d: new Date(2015, 11, 25),
                text: "Navidad",
                icon: "material-local-bar",
                color: "fixed"
            },
            {
                d: new Date(2016, 0, 1),
                text: "Año Nuevo",
                color: "fixed"
            },
            {
                d: new Date(2016, 1, 8),
                text: "Carnaval",
                color: "fixed"
            },
            {
                d: new Date(2016, 1, 9),
                text: "Carnaval",
                color: "fixed"
            },
            {
                d: new Date(2016, 2, 24),
                text: "Memoria, Verdad y Justicia",
                color: "fixed"
            },
            {
                d: new Date(2016, 2, 25),
                text: "Viernes Santo",
                color: "fixed"
            },
            {
                d: new Date(2016, 3, 2),
                text: "Malvinas",
                color: "fixed"
            },
            {
                d: new Date(2016, 3, 22),
                text: "Pascua Judía",
                color: "nowork"
            },
            {
                d: new Date(2016, 3, 23),
                text: "Pascua Judía",
                color: "nowork"
            },
            {
                d: new Date(2016, 3, 24),
                text: "Pascua Judía",
                color: "nowork"
            },
            {
                d: new Date(2016, 3, 28),
                text: "Pascua Judía",
                color: "nowork"
            },
            {
                d: new Date(2016, 3, 29),
                text: "Pascua Judía",
                color: "nowork"
            },
            {
                d: new Date(2016, 3, 30),
                text: "Pascua Judía",
                color: "nowork"
            },
            {
                d: new Date(2016, 4, 1),
                text: "Trabajador",
                color: "fixed"
            },
            {
                d: new Date(2016, 4, 25),
                text: "Revolución",
                color: "fixed"
            },
            {
                d: new Date(2016, 5, 20),
                text: "Inm. Manuel Belgrano",
                color: "fixed"
            },
            {
                d: new Date(2016, 6, 8),
                text: "Puente Turístico",
                icon: "material-flight",
                color: "bridge"
            },
            {
                d: new Date(2016, 6, 9),
                text: "Independencia",
                color: "fixed"
            },
            {
                d: new Date(2016, 7, 15),
                text: "Inm. San Martín",
                color: "nofixed"
            },
            {
                d: new Date(2016, 9, 4),
                text: "Año Nuevo Judío",
                color: "nowork"
            },
            {
                d: new Date(2016, 9, 10),
                text: "Div. Cultural",
                color: "nofixed"
            },
            {
                d: new Date(2016, 9, 12),
                text: "Perdón",
                color: "nowork"
            },
            {
                d: new Date(2016, 10, 28),
                text: "Soberanía Nacional",
                color: "nofixed"
            },
            {
                d: new Date(2016, 11, 8),
                text: "Inm. Concepción de María",
                color: "fixed"
            },
            {
                d: new Date(2016, 11, 9),
                text: "Puente Turístico",
                icon: "material-flight",
                color: "bridge"
            },
            {
                d: new Date(2016, 11, 25),
                text: "Navidad",
                icon: "material-local-bar",
                color: "fixed"
            }
        ]
    },

    /**
     * @var array Flight salesmen.
     */
    flightSalesmen: [
        "Engraff, Adriana",
        "Eleta, Alejandro",
        "Diaz, Ariel",
        "Caride, Beatriz",
        "Bonzo, Cecilia",
        "Buchanan, Elaine",
        "Alvarez, Fernanda",
        "Riccio, Fernando",
        "Casas Ponce, Fernando",
        "Olivo, Gisela",
        "Sancho, Graciela",
        "De La Sota, Guadalupe",
        "Mori, Guido",
        "Mori, Hector",
        "Mori, Ignacio",
        "Lentini, Jaqueline",
        "Bursztin, Javier",
        "D Acunto, Juan Francisco",
        "Billinghurst, Laura",
        "Nakamura, Marcela",
        "Besso, Maria Ines",
        "Acevedo, Mariana",
        "Petric, Mariana",
        "Perinelli Mónica",
        "Rojo, Monica",
        "Fraga, Myrian",
        "Kraiquer, Nadina",
        "Lord, Natalia",
        "Schiaffino, Rosana",
        "Nadal, Silvia",
        "Mattera, Susana",
        "Barquin, Vicky"
    ],

    /**
     * @var array Countries and Cities for weather function.
     *            Format: { Country: [ City1, City2, ... ] }
     */
    weatherCities: {
        "Abkhazia": [ "Sukhumi" ],
        "Afghanistan": [ "Kabul" ],
        "Akrotiri_and_Dhekelia": [ "Episkopi_Cantonment" ],
        "Albania": [ "Tirana" ],
        "Algeria": [ "Algiers" ],
        "American_Samoa": [ "Pago_Pago" ],
        "Andorra": [ "Andorra_la_Vella" ],
        "Angola": [ "Luanda" ],
        "Anguilla": [ "The_Valley" ],
        "Antigua_and_Barbuda": [ "St_John's" ],
        "Argentina": [ "Buenos_Aires" ],
        "Armenia": [ "Yerevan" ],
        "Aruba": [ "Oranjestad" ],
        "Ascension_Island": [ "Georgetown" ],
        "Australia": [ "Canberra" ],
        "Austria": [ "Vienna" ],
        "Azerbaijan": [ "Baku" ],
        "Bahamas": [ "Nassau" ],
        "Bahrain": [ "Manama" ],
        "Bangladesh": [ "Dhaka" ],
        "Barbados": [ "Bridgetown" ],
        "Belarus": [ "Minsk" ],
        "Belgium": [ "Brussels" ],
        "Belize": [ "Belmopan" ],
        "Benin": [ "Porto-Novo" ],
        "Bermuda": [ "Hamilton" ],
        "Bhutan": [ "Thimphu" ],
        "Bolivia": [ "La_Paz" ],
        "Bosnia_and_Herzegovina": [ "Sarajevo" ],
        "Botswana": [ "Gaborone" ],
        "Brazil": [ "Brasília" ],
        "British_Virgin_Islands": [ "Road_Town" ],
        "Brunei": [ "Bandar_Seri_Begawan" ],
        "Bulgaria": [ "Sofia" ],
        "Burkina_Faso": [ "Ouagadougou" ],
        "Burundi": [ "Bujumbura" ],
        "CA": [ "New_York", "Washington", "Charlotte_Amalie" ],
        "Cambodia": [ "Phnom_Penh" ],
        "Cameroon": [ "Yaoundé" ],
        "Canada": [ "Ottawa" ],
        "Cape_Verde": [ "Praia" ],
        "Cayman_Islands": [ "George_Town" ],
        "Central_African_Republic": [ "Bangui" ],
        "Chad": [ "N'Djamena" ],
        "Chile": [ "Santiago" ],
        "China": [ "Beijing" ],
        "Christmas_Island": [ "Flying_Fish_Cove" ],
        "Cocos_(Keeling)_Islands": [ "West_Island" ],
        "Colombia": [ "Bogotá" ],
        "Comoros": [ "Moroni" ],
        "Cook_Islands": [ "Avarua" ],
        "Costa_Rica": [ "San_José" ],
        "Croatia": [ "Zagreb" ],
        "Cuba": [ "Havana" ],
        "Curaçao": [ "Willemstad" ],
        "Cyprus": [ "Nicosia" ],
        "Czech_Republic": [ "Prague" ],
        "Democratic_Republic_of_the_Congo": [ "Kinshasa" ],
        "Denmark": [ "Copenhagen" ],
        "Djibouti": [ "Djibouti" ],
        "Dominica": [ "Roseau" ],
        "Dominican_Republic": [ "Santo_Domingo" ],
        "East_Timor": [ "Dili" ],
        "Easter_Island": [ "Hanga_Roa" ],
        "Ecuador": [ "Quito" ],
        "Egypt": [ "Cairo" ],
        "El_Salvador": [ "San_Salvador" ],
        "England": [ "London" ],
        "Equatorial_Guinea": [ "Malabo" ],
        "Eritrea": [ "Asmara" ],
        "Estonia": [ "Tallinn" ],
        "Ethiopia": [ "Addis_Ababa" ],
        "Falkland_Islands": [ "Stanley" ],
        "Faroe_Islands": [ "Tórshavn" ],
        "Federated_States_of_Micronesia": [ "Palikir" ],
        "Fiji": [ "Suva" ],
        "Finland": [ "Helsinki" ],
        "France": [ "Paris" ],
        "French_Guiana": [ "Cayenne" ],
        "French_Polynesia": [ "Papeete" ],
        "Gabon": [ "Libreville" ],
        "Gambia": [ "Banjul" ],
        "Georgia": [ "Tbilisi" ],
        "Germany": [ "Berlin" ],
        "Ghana": [ "Accra" ],
        "Gibraltar": [ "Gibraltar" ],
        "Greece": [ "Athens" ],
        "Greenland": [ "Nuuk" ],
        "Grenada": [ "St_George's" ],
        "Guam": [ "Hagåtña" ],
        "Guatemala": [ "Guatemala" ],
        "Guernsey": [ "St_Peter_Port" ],
        "Guinea": [ "Conakry" ],
        "Guinea_Bissau": [ "Bissau" ],
        "Guyana": [ "Georgetown" ],
        "Haiti": [ "Port_au_Prince" ],
        "Honduras": [ "Tegucigalpa" ],
        "Hungary": [ "Budapest" ],
        "Iceland": [ "Reykjavík" ],
        "India": [ "New_Delhi" ],
        "Indonesia": [ "Jakarta" ],
        "Iran": [ "Tehran" ],
        "Iraq": [ "Baghdad" ],
        "Ireland": [ "Dublin" ],
        "Isle_of_Man": [ "Douglas" ],
        "Israel": [ "Jerusalem" ],
        "Italy": [ "Rome" ],
        "Ivory_Coast": [ "Yamoussoukro" ],
        "Jamaica": [ "Kingston" ],
        "Japan": [ "Tokyo" ],
        "Jersey": [ "St_Helier" ],
        "Jordan": [ "Amman" ],
        "Kazakhstan": [ "Astana" ],
        "Kenya": [ "Nairobi" ],
        "Kiribati": [ "Tarawa" ],
        "Kosovo": [ "Pristina" ],
        "Kuwait": [ "Kuwait" ],
        "Kyrgyzstan": [ "Bishkek" ],
        "Laos": [ "Vientiane" ],
        "Latvia": [ "Riga" ],
        "Lebanon": [ "Beirut" ],
        "Lesotho": [ "Maseru" ],
        "Liberia": [ "Monrovia" ],
        "Libya": [ "Tripoli" ],
        "Liechtenstein": [ "Vaduz" ],
        "Lithuania": [ "Vilnius" ],
        "Luxembourg": [ "Luxembourg" ],
        "Macedonia": [ "Skopje" ],
        "Madagascar": [ "Antananarivo" ],
        "Malawi": [ "Lilongwe" ],
        "Malaysia": [ "Kuala_Lumpur" ],
        "Maldives": [ "Malé" ],
        "Mali": [ "Bamako" ],
        "Malta": [ "Valletta" ],
        "Marshall_Islands": [ "Majuro" ],
        "Mauritania": [ "Nouakchott" ],
        "Mauritius": [ "Port_Louis" ],
        "Mexico": [ "Mexico" ],
        "Moldova": [ "Chisinau" ],
        "Monaco": [ "Monaco" ],
        "Mongolia": [ "Ulan_Bator" ],
        "Montenegro": [ "Podgorica" ],
        "Montserrat": [ "Plymouth" ],
        "Morocco": [ "Rabat" ],
        "Mozambique": [ "Maputo" ],
        "Myanmar": [ "Naypyidaw" ],
        "Nagorno_Karabakh_Republic": [ "Stepanakert" ],
        "Namibia": [ "Windhoek" ],
        "Nauru": [ "Yaren" ],
        "Nepal": [ "Kathmandu" ],
        "Netherlands": [ "Amsterdam" ],
        "New_Caledonia": [ "Nouméa" ],
        "New_Zealand": [ "Wellington" ],
        "Nicaragua": [ "Managua" ],
        "Niger": [ "Niamey" ],
        "Nigeria": [ "Abuja" ],
        "Niue": [ "Alofi" ],
        "Norfolk_Island": [ "Kingston" ],
        "North_Korea": [ "Pyongyang" ],
        "Northern_Cyprus": [ "Nicosia" ],
        "Northern_Ireland": [ "Belfast" ],
        "Northern_Mariana_Islands": [ "Saipan" ],
        "Norway": [ "Oslo" ],
        "Oman": [ "Muscat" ],
        "Pakistan": [ "Islamabad" ],
        "Palau": [ "Melekeok" ],
        "Panama": [ "Panama" ],
        "Papua_New_Guinea": [ "Port_ Moresby" ],
        "Paraguay": [ "Asunción" ],
        "Peru": [ "Lima" ],
        "Philippines": [ "Manila" ],
        "Pitcairn_Islands": [ "Adamstown" ],
        "Poland": [ "Warsaw" ],
        "Portugal": [ "Lisbon" ],
        "Puerto_Rico": [ "San_Juan" ],
        "Qatar": [ "Doha" ],
        "Republic_of_the_Congo": [ "Brazzaville" ],
        "Romania": [ "Bucharest" ],
        "Russia": [ "Moscow" ],
        "Rwanda": [ "Kigali" ],
        "Sahrawi_Arab_Democratic_Republic": [ "El_Aaiún" ],
        "Saint_ Martin": [ "Marigot" ],
        "Saint_Barthélemy": [ "Gustavia" ],
        "Saint_Helena": [ "Jamestown" ],
        "Saint_Kittsand_Nevis": [ "Basseterre" ],
        "Saint_Lucia": [ "Castries" ],
        "Saint_Pierre_and_Miquelon": [ "St_Pierre" ],
        "Saint_Vincent_and_the_Grenadines": [ "Kingstown" ],
        "Samoa": [ "Apia" ],
        "San_Marino": [ "San_Marino" ],
        "São_Toméand_Príncipe": [ "São Tomé" ],
        "Saudi_Arabia": [ "Riyadh" ],
        "Scotland": [ "Edinburgh" ],
        "Senegal": [ "Dakar" ],
        "Serbia": [ "Belgrade" ],
        "Seychelles": [ "Victoria" ],
        "Sierra_Leone": [ "Freetown" ],
        "Singapore": [ "Singapore" ],
        "Sint_Maarten": [ "Philipsburg" ],
        "Slovakia": [ "Bratislava" ],
        "Slovenia": [ "Ljubljana" ],
        "Solomon_Islands": [ "Honiara" ],
        "Somalia": [ "Mogadishu" ],
        "Somaliland": [ "Hargeisa" ],
        "South_Africa": [ "Pretoria" ],
        "South_Georgia_and_the_South_Sandwich_Islands": [ "Grytviken" ],
        "South_Korea": [ "Seoul" ],
        "South_Ossetia": [ "Tskhinvali" ],
        "South_Sudan": [ "Juba" ],
        "Spain": [ "Madrid" ],
        "Sri_Lanka": [ "Colombo" ],
        "State_of_Palestine": [ "Jerusalem" ],
        "Sudan": [ "Khartoum" ],
        "Suriname": [ "Paramaribo" ],
        "Swaziland": [ "Lobamba" ],
        "Sweden": [ "Stockholm" ],
        "Switzerland": [ "Bern" ],
        "Syria": [ "Damascus" ],
        "Taiwan": [ "Taipei" ],
        "Tajikistan": [ "Dushanbe" ],
        "Tanzania": [ "Dodoma" ],
        "Thailand": [ "Bangkok" ],
        "Togo": [ "Lomé" ],
        "Tonga": [ "Nuku alofa" ],
        "Transnistria": [ "Tiraspol" ],
        "Trinidad_and_Tobago": [ "Port_of_Spain" ],
        "Tristanda_Cunha": [ "Edinburgh_of_the_Seven_Seas" ],
        "Tunisia": [ "Tunis" ],
        "Turkey": [ "Ankara" ],
        "Turkmenistan": [ "Ashgabat" ],
        "Turks_and_Caicos_Islands": [ "Cockburn_ Town" ],
        "Tuvalu": [ "Funafuti" ],
        "Uganda": [ "Kampala" ],
        "Ukraine": [ "Kiev" ],
        "United_Arab_Emirates": [ "Abu_Dhabi" ],
        "Uruguay": [ "Montevideo" ],
        "Uzbekistan": [ "Tashkent" ],
        "Vanuatu": [ "Port Vila" ],
        "Vatican": [ "Vatican" ],
        "Venezuela": [ "Caracas" ],
        "Vietnam": [ "Hanoi" ],
        "Wales": [ "Cardiff" ],
        "Wallis_and_Futuna": [ "Mata_Utu" ],
        "Yemen": [ "Sanaá" ],
        "Zambia": [ "Lusaka" ],
        "Zimbabwe": [ "Harare" ]
    },

    /**
     * @var array Phrases to use in a conversation.
     *            Format: FromLang { ToLang { FromPhrase { ToPhrase }}}
     */
    phrases: {
        "es": {
            "en": {
                "Sí": "Yes",
                "No": "No",
                "Gracias": "Thank you",
                "De nada": "You're welcome",
                "Adios": "Goodbye",
                "Hola": "Hello",
                "Por favor": "Please",
                "Disculpe": "Sorry",
                "Buenos días": "Good morning",
                "Buenas tardes": "Good afternoon/Good evening",
                "Buenas noches": "Good night",
                "No entiendo": "I beg your pardon",
                "Encantado de conocerle": "Nice to meet you!",
                "¿Cómo estás?": "How are you?",
                "Bien": "Fine",
                "Mal": "Not very well",
                "De acuerdo": "All right",
                "¿Dónde está el mostrador de objetos perdidos?": "Where is the lost and found desk?",
                "¿Dónde puedo alquilar un coche?": "Where can I rent a car?",
                "¿Dónde puedo sacar dinero?": "Where can I get cash?",
                "¿Dónde están los servicios?": "Where is the toilet?",
                "Billetes, Tickets": "Tickets",
                "¿A qué hora sale...?": "What time does the...leave?",
                "El tren": "Train",
                "El avión": "Plane",
                "El autobús": "Bus",
                "El barco": "Boat/ship",
                "Aeropuerto": "Airport",
                "Metro": "Underground",
                "Estación de": "Station",
                "Salidas": "Departures",
                "Llegadas": "Arrivals",
                "Aparcamiento": "Car park",
                "Alquiler de coches": "Rent a car",
                "Hotel": "Hotel",
                "Habitación": "Room",
                "Reservas": "Reservations",
                "Pasaporte": "Passport",
                "Terminal": "Terminal",
                "Taxi": "Taxi",
                "¿Está libre?": "Is it free?",
                "Lléveme a...": "Take me to...",
                "¡Pare aquí!": "Stop here!",
                "¡Tengo prisa!": "I am in a hurry",
                "Queremos ver la carta.": "We would like to see the menu.",
                "Una mesa para dos, por favor.": "A table for two, please.",
                "Me gusta la carne...": "I would like my meat...",
                "Muy hecha": "Well done",
                "Poco hecha": "Rare",
                "En su punto": "Medium",
                "Primer plato": "Appetizers",
                "Segundo plato": "Main course",
                "Postre": "Dessert",
                "Camarero": "Waiter",
                "¡La cuenta!": "The bill!",
                "Me gustaría reservar una mesa": "I would like to book a table",
                "Menú": "Menu",
                "Tenedor": "Fork",
                "Cuchara": "Spoon",
                "Cuchillo": "Knife",
                "Botella": "Bottle",
                "Copa": "Wine Glass",
                "Vaso": "Glass",
                "Servilletas": "Table napkins",
                "Quisiera tomar...": "I would like to have...",
                "Sal": "Salt",
                "Azúcar": "Sugar",
                "Pan": "Bread",
                "Carne": "Meat",
                "Ternera": "Beef",
                "Cerdo": "Pork",
                "Ave": "Poultry",
                "Pescado": "Fish",
                "Fruta": "Fruit",
                "Pasta": "Pasta",
                "Arroz": "Rice",
                "Verdura": "Vegetables",
                "Patata": "Potato",
                "Agua": "Water",
                "Vino": "Wine",
                "Cerveza": "Beer",
                "Café": "Coffee",
                "Té": "Tea",
                "Sin alcohol": "Non-alcoholic",
                "Refrescos, Zumo": "Soft drinks, Juice",
                "Cero": "Zero",
                "Uno": "One",
                "Dos": "Two",
                "Tres": "Three",
                "Cuatro": "Four",
                "Cinco": "Five",
                "Seis": "Six",
                "Siete": "Seven",
                "Ocho": "Eight",
                "Nueve": "Nine",
                "Diez": "Ten",
                "Once": "Eleven",
                "Doce": "Twelve",
                "Trece": "Thirteen",
                "Catorce": "Fourteen",
                "Quince": "Fifteen",
                "Dieciseis": "Sixteen",
                "Diecisiete": "Seventeen",
                "Dieciocho": "Eighteen",
                "Diecinueve": "Nineteen",
                "Veinte": "Twenty",
                "Veintiuno": "Twenty one",
                "Treinta": "Thirty",
                "Cuarenta": "Forty",
                "Cincuenta": "Fifty",
                "Sesenta": "Sixty",
                "Setenta": "Seventy",
                "Ochenta": "Eighty",
                "Noventa": "Ninety",
                "Cien": "One hundred",
                "Mil": "One thousand",
                "Millón": "One million",
                "Mi número de teléfono es...": "My phone number is...",
                "El número de mi hotel es...": "The number at my hotel is...",
                "Son las tres y media.": "It's half past three.",
                "Son las once.": "It's eleven o'clock.",
                "¿Dónde puedo cambiar dinero?": "Where can I change currency?",
                "¿Necesita mi identificación?": "Do you need my identification?",
                "Necesito ver a un médico.": "I need to see a doctor.",
                "Tengo dolor de cabeza.": "I have a headache.",
                "¡Llame a una ambulancia!": "Call an ambulance!",
                "Tengo dolor de muelas.": "I have a toothache.",
                "¿Dónde está...más cercana?": "Where is the nearest...?",
                "La sala de urgencias": "Emergency room",
                "El dentista": "Dentist",
                "La farmacia": "Pharmacy / Chemist's",
                "Tengo alergia a la penicilina.": "I am allergic to penicillin.",
                "Quisiera aspirinas.": "I would like some aspirin.",
                "Necesito un analgésico": "I need a painkiller.",
                "Me duele...": "My...hurts.",
                "El estómago": "Stomach",
                "El brazo": "Arm",
                "La pierna": "Leg",
                "Los oídos": "Ears",
                "La garganta": "Throat",
                "Tengo ganas de vomitar.": "I'm going to vomit.",
                "Correos": "Post Office",
                "El museo": "Museum",
                "El banco": "Bank",
                "La policía": "Police Station",
                "El hospital": "Hospital",
                "La tienda": "Shop",
                "El restaurante": "Restaurant",
                "La iglesia": "Church",
                "Los servicios": "Restrooms / Toilets",
                "La calle": "Street",
                "La plaza": "Square",
                "La piscina": "Swimming pool",
                "El mar": "Sea",
                "La montaña": "Mountain",
                "Tengo una reserva.": "I have a reservation.",
                "Quisiera una habitación.": "I would like a room.",
                "Me gustaría ver la habitación.": "I would like to see the room.",
                "Sábana": "Sheet",
                "Manta": "Blanket",
                "Toalla": "Towel",
                "Gel": "Gel",
                "Champú": "Shampoo",
                "Papel higiénico": "Toilet paper",
                "Recepción": "Reception desk",
                "Llave": "Key",
                "¿A qué hora sirven...?": "What time do you serve...?",
                "El desayuno": "Breakfast",
                "La comida": "Lunch",
                "La cena": "Dinner",
                "¿Tienen caja de seguridad?": "Do you have a safe?",
                "¿Tienen servicio de habitaciones?": "Do you have room service?",
                "¿Cómo puedo llamar al extranjero?": "How do I call a foreign number?",
                "Quiero cancelar la reserva a nombre de...": "I would like to cancel the reservation for (Mr./Ms...)",
                "¿Dónde está...?/Busco...": "Where is...?/ I am looking for...",
                "Izquierda": "Left",
                "Derecha": "Right",
                "Directo, derecho": "Straight on/Go ahead",
                "Arriba": "Up",
                "Abajo": "Down",
                "Vaya a la izquierda": "Go left",
                "Vaya a la derecha": "Go right",
                "Necesito un plano.": "I need a map.",
                "Mapa/Plano": "Map/Plan",
                "Información turística": "Tourist information",
                "¿Qué hora es?": "What time is it?",
                "Hoy": "Today",
                "Ayer": "Yesterday",
                "Mañana": "Tomorrow",
                "Feliz cumpleaños": "Happy birthday",
                "El lunes": "Monday",
                "El martes": "Tuesday",
                "El miércoles": "Wednesday",
                "El jueves": "Thursday",
                "El viernes": "Friday",
                "El sábado": "Saturday",
                "El domingo": "Sunday",
                "¿Cuánto cuesta?": "How much does it cost?",
                "¿Aceptan tarjetas de crédito?": "Do you accept credit cards?",
                "¿A qué hora abre / cierra?": "What time do you open/close?",
                "¿Qué horario tienen?": "What hours are you open?",
                "Abierto": "Open",
                "Cerrado": "Closed",
                "Postal": "Postcard",
                "Sellos": "Stamps",
                "Caro": "Expensive",
                "Barato": "Cheap",
                "Más": "More",
                "Menos": "Less",
                "Me gustaría comprar/alquilar": "I would like to buy/rent",
                "Sólo estoy mirando": "I am just looking",
                "¿Puede enseñarme esto?": "Could you show it to me?",
                "¿Puede enviármelo?": "Could you send it to me?",
                "¿Podría probarme...?": "Can I try on...?",
                "Este traje": "This suit",
                "Esos zapatos": "Those shoes",
                "Este vestido": "This dress",
                "Necesito una talla...": "I need this in a...size.",
                "Más grande": "Larger",
                "Más pequeña": "Smaller"
            },
            "fr": {
                "Sí": "Oui",
                "No": "Non",
                "Gracias": "Merci",
                "De nada": "De rien",
                "Adios": "Au revoir",
                "Hola": "Bonjour",
                "Por favor": "S'il vous plaît",
                "Disculpe": "Excusez-moi",
                "Buenos días": "Bonjour",
                "Buenas tardes": "Bonjour/Bonsoir",
                "Buenas noches": "Bonsoir/Bonne nuit",
                "No entiendo": "Je ne comprends pas",
                "Encantado de conocerle": "Enchanté de vous connaître.",
                "¿Cómo estás?": "Comment vas-tu?",
                "Bien": "Bien",
                "Mal": "Mal",
                "De acuerdo": "D'accord",
                "¿Dónde está el mostrador de objetos perdidos?": "Où est le guichet des objets perdus?",
                "¿Dónde puedo alquilar un coche?": "Où puis-je louer une voiture?",
                "¿Dónde puedo sacar dinero?": "Où puis-je retirer de l'argent?",
                "¿Dónde están los servicios?": "Où sont les toilettes?",
                "Billetes, Tickets": "Billets, Tickets",
                "¿A qué hora sale...?": "A quelle heure part...?",
                "El tren": "Le train",
                "El avión": "L'avion",
                "El autobús": "Le bus",
                "El barco": "Le bateau",
                "Aeropuerto": "Aéroport",
                "Metro": "Métro",
                "Estación de": "Gare",
                "Salidas": "Départs",
                "Llegadas": "Arrivées",
                "Aparcamiento": "Parking",
                "Alquiler de coches": "Location de voitures",
                "Hotel": "Hôtel",
                "Habitación": "Chambre",
                "Reservas": "Réservations",
                "Pasaporte": "Passeport",
                "Terminal": "Terminal",
                "Taxi": "Taxi",
                "¿Está libre?": "Vous êtes libre?",
                "Lléveme a...": "Emmenez-moi à...",
                "¡Pare aquí!": "Arrêtez-vous ici!",
                "¡Tengo prisa!": "Je suis pressé!",
                "Queremos ver la carta.": "Nous voudrions voir la carte.",
                "Una mesa para dos, por favor.": "Une table pour deux, s'il vous plaît.",
                "Me gusta la carne...": "J'aime la viande...",
                "Muy hecha": "Bien cuite",
                "Poco hecha": "Saignante",
                "En su punto": "à point",
                "Primer plato": "Entrée",
                "Segundo plato": "Plat de résistance",
                "Postre": "Dessert",
                "Camarero": "Serveur",
                "¡La cuenta!": "L'addition!",
                "Me gustaría reservar una mesa": "J'aimerais réserver une table",
                "Menú": "Menu",
                "Tenedor": "Fourchette",
                "Cuchara": "Cuillère",
                "Cuchillo": "Couteau",
                "Botella": "Bouteille",
                "Copa": "Verre",
                "Vaso": "Verre",
                "Servilletas": "Serviettes",
                "Quisiera tomar...": "J'aimerais prendre...",
                "Sal": "Sel",
                "Azúcar": "Sucre",
                "Pan": "Pain",
                "Carne": "Viande",
                "Ternera": "Veau",
                "Cerdo": "Porc",
                "Ave": "Volaille",
                "Pescado": "Poisson",
                "Fruta": "Fruit",
                "Pasta": "Pâtes",
                "Arroz": "Riz",
                "Verdura": "Légume",
                "Patata": "Pomme de terre",
                "Agua": "Eau",
                "Vino": "Vin",
                "Cerveza": "Bière",
                "Café": "Café",
                "Té": "Thé",
                "Sin alcohol": "Sans alcool",
                "Refrescos, Zumo": "Boissons fraîches, Jus",
                "Cero": "Zéro",
                "Uno": "Un(e)",
                "Dos": "Deux",
                "Tres": "Trois",
                "Cuatro": "Quatre",
                "Cinco": "Cinq",
                "Seis": "Six",
                "Siete": "Sept",
                "Ocho": "Huit",
                "Nueve": "Neuf",
                "Diez": "Dix",
                "Once": "Onze",
                "Doce": "Douze",
                "Trece": "Treize",
                "Catorce": "Quatorze",
                "Quince": "Quinze",
                "Dieciseis": "Seize",
                "Diecisiete": "Dix-sept",
                "Dieciocho": "Dix-huit",
                "Diecinueve": "Dix-neuf",
                "Veinte": "Vingt",
                "Veintiuno": "Vingt-et-un(e)",
                "Treinta": "Trente",
                "Cuarenta": "Quarante",
                "Cincuenta": "Cinquante",
                "Sesenta": "Soixante",
                "Setenta": "Soixante-dix",
                "Ochenta": "Quatre-vingts",
                "Noventa": "Quatre-vingt-dix",
                "Cien": "Cent",
                "Mil": "Mille",
                "Millón": "Un million",
                "Mi número de teléfono es...": "Mon numéro de téléphone est le...",
                "El número de mi hotel es...": "Le numéro de mon hôtel est le...",
                "Son las tres y media.": "Il est trois heures et demie",
                "Son las once.": "Il est onze heures",
                "¿Dónde puedo cambiar dinero?": "Où puis-je changer de l'argent?",
                "¿Necesita mi identificación?": "D'identité?",
                "Necesito ver a un médico.": "Je dois voir un médecin",
                "Tengo dolor de cabeza.": "J'ai mal à la tête",
                "¡Llame a una ambulancia!": "Appelez une ambulance!",
                "Tengo dolor de muelas.": "J'ai mal aux dents",
                "¿Dónde está...más cercana?": "Où est le/la... le/la plus proche?",
                "La sala de urgencias": "Le service des urgences",
                "El dentista": "Le dentiste",
                "La farmacia": "La pharmacie",
                "Tengo alergia a la penicilina.": "Je suis allergique à la pénicilline",
                "Quisiera aspirinas.": "Je voudrais de l'aspirine",
                "Necesito un analgésico": "J'ai besoin d'un analgésique",
                "Me duele...": "J'ai mal...",
                "El estómago": "à l'estomac",
                "El brazo": "Au bras",
                "La pierna": "à la jambe",
                "Los oídos": "Aux oreilles",
                "La garganta": "à la gorge",
                "Tengo ganas de vomitar.": "J'ai envie de vomir.",
                "Correos": "La poste",
                "El museo": "Le musée",
                "El banco": "La banque",
                "La policía": "La police",
                "El hospital": "L'hôpital",
                "La tienda": "Le magasin",
                "El restaurante": "Le restaurant",
                "La iglesia": "L'eglise",
                "Los servicios": "Les toilettes",
                "La calle": "La rue",
                "La plaza": "La place",
                "La piscina": "La piscine",
                "El mar": "La mer",
                "La montaña": "La montagne",
                "Tengo una reserva.": "J'ai réservé.",
                "Quisiera una habitación.": "J'aimerais une chambre.",
                "Me gustaría ver la habitación.": "J'aimerais voir la chambre.",
                "Sábana": "Drap",
                "Manta": "Couverture",
                "Toalla": "Serviette",
                "Gel": "Gel",
                "Champú": "Shampoing",
                "Papel higiénico": "Papier toilette",
                "Recepción": "Réception",
                "Llave": "Clé",
                "¿A qué hora sirven...?": "A quelle heure servez-vous... ?",
                "El desayuno": "Le petit déjeuner",
                "La comida": "Le déjeuner",
                "La cena": "Le dîner",
                "¿Tienen caja de seguridad?": "Avez-vous un coffre-fort ?",
                "¿Tienen servicio de habitaciones?": "Avez-vous un service de chambre ?",
                "¿Cómo puedo llamar al extranjero?": "L'étranger ?",
                "Quiero cancelar la reserva a nombre de...": "J'aimerais annuler la réservation au nom de...",
                "¿Dónde está...?/Busco...": "Où est... ?/Je cherche",
                "Izquierda": "Gauche",
                "Derecha": "Droite",
                "Directo, derecho": "Tout droit",
                "Arriba": "En-haut",
                "Abajo": "En-bas",
                "Vaya a la izquierda": "Allez à gauche",
                "Vaya a la derecha": "Allez à droite",
                "Necesito un plano.": "J'ai besoin d'un plan.",
                "Mapa/Plano": "Carte/Plan",
                "Información turística": "Informations touristiques",
                "¿Qué hora es?": "Quelle heure est-il?",
                "Hoy": "Aujourd'hui",
                "Ayer": "Hier",
                "Mañana": "Demain",
                "Feliz cumpleaños": "Joyeux anniversaire",
                "El lunes": "Lundi",
                "El martes": "Mardi",
                "El miércoles": "Mercredi",
                "El jueves": "Jeudi",
                "El viernes": "Vendredi",
                "El sábado": "Samedi",
                "El domingo": "Dimanche",
                "¿Cuánto cuesta?": "Combien ça coûte?",
                "¿Aceptan tarjetas de crédito?": "Vous acceptez les cartes de crédit?",
                "¿A qué hora abre / cierra?": "A quelle heure ouvrez / fermez vous?",
                "¿Qué horario tienen?": "Quels sont vos horaires?",
                "Abierto": "Ouvert",
                "Cerrado": "Fermé",
                "Postal": "Carte postale",
                "Sellos": "Timbres",
                "Caro": "Cher",
                "Barato": "Bon marché",
                "Más": "Plus",
                "Menos": "Moins",
                "Me gustaría comprar/alquilar": "J'aimerais acheter/louer",
                "Sólo estoy mirando": "Je regarde, c'est tout",
                "¿Puede enseñarme esto?": "Vous pouvez me montrer cela?",
                "¿Puede enviármelo?": "Vous pouvez me l'envoyer?",
                "¿Podría probarme...?": "Puis-je essayer...?",
                "Este traje": "Ce costume / ce tailleur",
                "Esos zapatos": "Ces chaussures",
                "Este vestido": "Cette robe",
                "Necesito una talla...": "Il me faut une taille...",
                "Más grande": "Plus grande",
                "Más pequeña": "Plus petite"
            },
            "de": {
                "Sí": "Ja",
                "No": "Nein",
                "Gracias": "Danke",
                "De nada": "Bitte",
                "Adios": "Auf Wiedersehen",
                "Hola": "Hallo",
                "Por favor": "Bitte",
                "Disculpe": "Entschuldigung",
                "Buenos días": "Guten Morgen",
                "Buenas tardes": "Guten Tag / Guten Abend",
                "Buenas noches": "Gute Nacht",
                "No entiendo": "Ich verstehe Sie nicht.",
                "Encantado de conocerle": "Ich freue mich, Sie kennenzulernen.",
                "¿Cómo estás?": "Wie geht's?",
                "Bien": "Gut",
                "Mal": "Schlecht",
                "De acuerdo": "Einverstanden",
                "¿Dónde está el mostrador de objetos perdidos?": "Wo ist der Schalter für Fundsachen?",
                "¿Dónde puedo alquilar un coche?": "Wo kann ich ein Auto mieten?",
                "¿Dónde puedo sacar dinero?": "Wo kann ich Geld abheben?",
                "¿Dónde están los servicios?": "Wo sind die Toiletten?",
                "Billetes, Tickets": "Tickets",
                "¿A qué hora sale...?": "Um wieviel Uhr geht...?",
                "El tren": "Der Zug",
                "El avión": "Das Flugzeug",
                "El autobús": "Der Bus",
                "El barco": "Das Schiff",
                "Aeropuerto": "Flughafen",
                "Metro": "U-Bahn",
                "Estación de": "Bahnhof",
                "Salidas": "Abflug /Abfahrt",
                "Llegadas": "Ankunft",
                "Aparcamiento": "Parkplatz",
                "Alquiler de coches": "Autovermietung",
                "Hotel": "Hotel",
                "Habitación": "Zimmer",
                "Reservas": "Reservierungen",
                "Pasaporte": "Pass",
                "Terminal": "Terminal / Bahnsteig",
                "Taxi": "Taxi",
                "¿Está libre?": "Ist hier frei?",
                "Lléveme a...": "Bringen Sie mich zu...",
                "¡Pare aquí!": "Bleiben Sie hier stehen!",
                "¡Tengo prisa!": "Ich habe es eilig!",
                "Queremos ver la carta.": "Wir möchten gerne die Karte sehen...",
                "Una mesa para dos, por favor.": "Bitte einen Tisch für zwei Personen",
                "Me gusta la carne...": "Ich hätte gerne das Fleisch...",
                "Muy hecha": "Gut durchgebraten",
                "Poco hecha": "Nicht durchgebraten",
                "En su punto": "Medium",
                "Primer plato": "Vorspeise",
                "Segundo plato": "Hauptgang",
                "Postre": "Nachtisch",
                "Camarero": "Ober / Kellner",
                "¡La cuenta!": "Die Rechnung",
                "Me gustaría reservar una mesa": "Ich würde gerne einen Tisch bestellen",
                "Menú": "Speisekarte",
                "Tenedor": "Gabel",
                "Cuchara": "Löffel",
                "Cuchillo": "Messer",
                "Botella": "Flasche",
                "Copa": "Glas",
                "Vaso": "Becher",
                "Servilletas": "Servietten",
                "Quisiera tomar...": "Ich hätte gerne...",
                "Sal": "Salz",
                "Azúcar": "Zucker",
                "Pan": "Brot",
                "Carne": "Fleisch",
                "Ternera": "Rindfleisch",
                "Cerdo": "Schweinefleisch",
                "Ave": "Geflügel",
                "Pescado": "Fisch",
                "Fruta": "Obst",
                "Pasta": "Nudeln",
                "Arroz": "Reis",
                "Verdura": "Gemüse",
                "Patata": "Kartoffel",
                "Agua": "Wasser",
                "Vino": "Wein",
                "Cerveza": "Bier",
                "Café": "Kaffee",
                "Té": "Tee",
                "Sin alcohol": "Alkoholfrei",
                "Refrescos, Zumo": "Erfrischungsgetränke, Saft",
                "Cero": "Null",
                "Uno": "Eins",
                "Dos": "Zwei",
                "Tres": "Drei",
                "Cuatro": "Vier",
                "Cinco": "Fünf",
                "Seis": "Sechs",
                "Siete": "Sieben",
                "Ocho": "Acht",
                "Nueve": "Neun",
                "Diez": "Zehn",
                "Once": "Elf",
                "Doce": "Zwölf",
                "Trece": "Dreizehn",
                "Catorce": "Vierzehn",
                "Quince": "Fünfzehn",
                "Dieciseis": "Sechzehn",
                "Diecisiete": "Siebzehn",
                "Dieciocho": "Achtzehn",
                "Diecinueve": "Neunzehn",
                "Veinte": "Zwanzig",
                "Veintiuno": "Einundzwanzig",
                "Treinta": "Dreissig",
                "Cuarenta": "Vierzig",
                "Cincuenta": "Fünfzig",
                "Sesenta": "Sechzig",
                "Setenta": "Siebzig",
                "Ochenta": "Achtzig",
                "Noventa": "Neunzig",
                "Cien": "Hundert",
                "Mil": "Tausend",
                "Millón": "Million",
                "Mi número de teléfono es...": "Meine Telefonnummer ist...",
                "El número de mi hotel es...": "Die Nummer meines Hotels ist...",
                "Son las tres y media.": "Es ist halb vier",
                "Son las once.": "Es ist elf Uhr",
                "¿Dónde puedo cambiar dinero?": "Wo kann ich Geld umtauschen?",
                "¿Necesita mi identificación?": "Brauchen Sie meinen Ausweis?",
                "Necesito ver a un médico.": "Ich brauche einen Arzt",
                "Tengo dolor de cabeza.": "Ich habe Kopfschmerzen",
                "¡Llame a una ambulancia!": "Rufen Sie einen Notarztwagen",
                "Tengo dolor de muelas.": "Ich habe Zahnschmerzen",
                "¿Dónde está...más cercana?": "Wo ist das/der/die nächste...?",
                "La sala de urgencias": "Die Notaufnahme",
                "El dentista": "Der Zahnarzt",
                "La farmacia": "Apotheke",
                "Tengo alergia a la penicilina.": "Ich bin gegen Penizillin allergisch",
                "Quisiera aspirinas.": "Ich hätte gerne Aspirin",
                "Necesito un analgésico": "Ich hätte gerne ein Schmerzmittel",
                "Me duele...": "Mir tut...weh",
                "El estómago": "Der Magen",
                "El brazo": "Der Arm",
                "La pierna": "Das Bein",
                "Los oídos": "Die Ohren",
                "La garganta": "Der Hals",
                "Tengo ganas de vomitar.": "Ich muss mich übergeben",
                "Correos": "Postamt",
                "El museo": "Museum",
                "El banco": "Bank",
                "La policía": "Polizei",
                "El hospital": "Krankenhaus",
                "La tienda": "Geschäft",
                "El restaurante": "Restaurant",
                "La iglesia": "Kirche",
                "Los servicios": "Toiletten",
                "La calle": "Strasse",
                "La plaza": "Platz",
                "La piscina": "Schwimmbad",
                "El mar": "Meer",
                "La montaña": "Berg",
                "Tengo una reserva.": "Ich habe eine Reservierung.",
                "Quisiera una habitación.": "Ich möchte gerne ein Zimmer.",
                "Me gustaría ver la habitación.": "Ich würde gerne das Zimmer sehen.",
                "Sábana": "Betttuch",
                "Manta": "Decke",
                "Toalla": "Handtuch",
                "Gel": "Gel",
                "Champú": "Shampoo",
                "Papel higiénico": "Toilettenpapier",
                "Recepción": "Empfang",
                "Llave": "Schlüssel",
                "¿A qué hora sirven...?": "Um wieviel Uhr wird...serviert?",
                "El desayuno": "Das Frühstück",
                "La comida": "Das Essen",
                "La cena": "Das Abendessen",
                "¿Tienen caja de seguridad?": "Haben Sie ein Safe?",
                "¿Tienen servicio de habitaciones?": "Haben Sie Zimmerservice?",
                "¿Cómo puedo llamar al extranjero?": "Wie kann ich ins Ausland anrufen?",
                "Quiero cancelar la reserva a nombre de...": "Ich möchte die Reservierung im Namen von...annullieren",
                "¿Dónde está...?/Busco...": "Wo ist...?/Ich suche...",
                "Izquierda": "Links",
                "Derecha": "Rechts",
                "Directo, derecho": "Geradeaus",
                "Arriba": "Oben",
                "Abajo": "Unten",
                "Vaya a la izquierda": "Gehen Sie nach links",
                "Vaya a la derecha": "Gehen Sie nach rechts",
                "Necesito un plano.": "Ich brauche eine Karte.",
                "Mapa/Plano": "Stadtplan / Landkarte",
                "Información turística": "Fremdenverkehrsinformation",
                "¿Qué hora es?": "Wie viel Uhr ist es?",
                "Hoy": "Heute",
                "Ayer": "Gestern",
                "Mañana": "Morgen",
                "Feliz cumpleaños": "Alles Gute zum Geburtstag",
                "El lunes": "Montag",
                "El martes": "Dienstag",
                "El miércoles": "Mittwoch",
                "El jueves": "Donnerstag",
                "El viernes": "Freitag",
                "El sábado": "Samstag",
                "El domingo": "Sonntag",
                "¿Cuánto cuesta?": "Was kostet das?",
                "¿Aceptan tarjetas de crédito?": "Kann ich mit Kreditkarte bezahlen?",
                "¿A qué hora abre / cierra?": "Um wieviel Uhr macht auf/zu?",
                "¿Qué horario tienen?": "Welche Öffnungszeiten haben Sie?",
                "Abierto": "Geöffnet",
                "Cerrado": "Geschlossen",
                "Postal": "Postkarte",
                "Sellos": "Briefmarken",
                "Caro": "Teuer",
                "Barato": "Billig",
                "Más": "Mehr",
                "Menos": "Weniger",
                "Me gustaría comprar/alquilar": "Ich würde gerne kaufen / mieten.",
                "Sólo estoy mirando": "Ich sehe mich nur um.",
                "¿Puede enseñarme esto?": "Könnten Sie mir das zeigen?",
                "¿Puede enviármelo?": "Können Sie mir das schicken?",
                "¿Podría probarme...?": "Könnte ich...anprobieren?",
                "Este traje": "Diesen Anzug",
                "Esos zapatos": "Diese Schuhe",
                "Este vestido": "Dieses Kleid",
                "Necesito una talla...": "Ich benötige eine...Grösse",
                "Más grande": "Grössere",
                "Más pequeña": "Kleinere"
            },
            "it": {
                "Sí": "Si",
                "No": "No",
                "Gracias": "Grazie",
                "De nada": "Prego",
                "Adios": "Arrivederci",
                "Hola": "Salve",
                "Por favor": "Per favore",
                "Disculpe": "Mi scusi",
                "Buenos días": "Buon giorno",
                "Buenas tardes": "Buona sera",
                "Buenas noches": "Buona notte",
                "No entiendo": "Prego?",
                "Encantado de conocerle": "Lieto di conoscerla.",
                "¿Cómo estás?": "Come sta?",
                "Bien": "Bene",
                "Mal": "Male",
                "De acuerdo": "D'accordo",
                "¿Dónde está el mostrador de objetos perdidos?": "Dove si trova lo sportello degli oggetti persi?",
                "¿Dónde puedo alquilar un coche?": "Dove posso noleggiare una macchina?",
                "¿Dónde puedo sacar dinero?": "Dove posso trovare un Bancomat?",
                "¿Dónde están los servicios?": "Dov'è il bagno?",
                "Billetes, Tickets": "Biglietti, tickets",
                "¿A qué hora sale...?": "A che ora parte...?",
                "El tren": "Il treno",
                "El avión": "L' aereo",
                "El autobús": "L' autobus",
                "El barco": "Il traghetto",
                "Aeropuerto": "Aeroporto",
                "Metro": "Metropolitana",
                "Estación de": "Stazione di",
                "Salidas": "Partenze",
                "Llegadas": "Arrivi",
                "Aparcamiento": "Parcheggio",
                "Alquiler de coches": "Noleggio auto",
                "Hotel": "Hotel",
                "Habitación": "Stanza",
                "Reservas": "Prenotazioni",
                "Pasaporte": "Passaporto",
                "Terminal": "Terminal",
                "Taxi": "Taxi",
                "¿Está libre?": "È libero?",
                "Lléveme a...": "Mi porti a...",
                "¡Pare aquí!": "Si fermi qui!",
                "¡Tengo prisa!": "Ho fretta!",
                "Queremos ver la carta.": "Vorremmo vedere il menu",
                "Una mesa para dos, por favor.": "Un tavolo per due persone, per favore",
                "Me gusta la carne...": "Mi piace la carne...",
                "Muy hecha": "Molto cotta",
                "Poco hecha": "Poco cotta",
                "En su punto": "Cotta al punto giusto",
                "Primer plato": "Il primo",
                "Segundo plato": "Piatto principale",
                "Postre": "Il dessert",
                "Camarero": "Cameriere",
                "¡La cuenta!": "Il conto!",
                "Me gustaría reservar una mesa": "Desidererei prenotare un tavolo",
                "Menú": "Menu",
                "Tenedor": "Forchetta",
                "Cuchara": "Cucchiaio",
                "Cuchillo": "Coltello",
                "Botella": "Bottiglia",
                "Copa": "Coppa",
                "Vaso": "Bicchiere",
                "Servilletas": "Tovaglioli",
                "Quisiera tomar...": "Vorrei ...",
                "Sal": "Sale",
                "Azúcar": "Zucchero",
                "Pan": "Pane",
                "Carne": "Carne",
                "Ternera": "Manzo",
                "Cerdo": "Maiale",
                "Ave": "Pollame",
                "Pescado": "Pesce",
                "Fruta": "Frutta",
                "Pasta": "Pasta",
                "Arroz": "Riso",
                "Verdura": "Verdura",
                "Patata": "Patata",
                "Agua": "Acqua",
                "Vino": "Vino",
                "Cerveza": "Birra",
                "Café": "Caffè",
                "Té": "Té",
                "Sin alcohol": "Senza alcol",
                "Refrescos, Zumo": "Bibita, Succo",
                "Cero": "Zero",
                "Uno": "Uno",
                "Dos": "Due",
                "Tres": "Tre",
                "Cuatro": "Quattro",
                "Cinco": "Cinque",
                "Seis": "Sei",
                "Siete": "Sette",
                "Ocho": "Otto",
                "Nueve": "Nove",
                "Diez": "Dieci",
                "Once": "Undici",
                "Doce": "Dodici",
                "Trece": "Tredici",
                "Catorce": "Quattordici",
                "Quince": "Quindici",
                "Dieciseis": "Sedici",
                "Diecisiete": "Diciassette",
                "Dieciocho": "Diciotto",
                "Diecinueve": "Diciannove",
                "Veinte": "Venti",
                "Veintiuno": "Ventuno",
                "Treinta": "Trenta",
                "Cuarenta": "Quaranta",
                "Cincuenta": "Cinquanta",
                "Sesenta": "Sessanta",
                "Setenta": "Settanta",
                "Ochenta": "Ottanta",
                "Noventa": "Novanta",
                "Cien": "Cento",
                "Mil": "Mille",
                "Millón": "Un milione",
                "Mi número de teléfono es...": "Il mio numero di telefono è...",
                "El número de mi hotel es...": "Il numero di telefono del mio hotel è..",
                "Son las tres y media.": "Sono le tre e mezza",
                "Son las once.": "Sono le undici",
                "¿Dónde puedo cambiar dinero?": "Dove posso cambiare valuta?",
                "¿Necesita mi identificación?": "Ha bisogno della mia identificazione?",
                "Necesito ver a un médico.": "Ho bisogno di un medico",
                "Tengo dolor de cabeza.": "Mi fa male la testa",
                "¡Llame a una ambulancia!": "Chiamate un' ambulanza!",
                "Tengo dolor de muelas.": "Ho mal di denti",
                "¿Dónde está...más cercana?": "Dov' è .... piú vicino?",
                "La sala de urgencias": "Il pronto soccorso",
                "El dentista": "Il dentista",
                "La farmacia": "Farmacia",
                "Tengo alergia a la penicilina.": "Sono allergico alla penicillina",
                "Quisiera aspirinas.": "Vorrei un' aspirina",
                "Necesito un analgésico": "Ho bisogno di un analgesico",
                "Me duele...": "Mi fa male...",
                "El estómago": "Lo stomaco",
                "El brazo": "Il braccio",
                "La pierna": "La gamba",
                "Los oídos": "Le orecchie",
                "La garganta": "La gola",
                "Tengo ganas de vomitar.": "Ho un conato di vomito",
                "Correos": "Ufficio Postale",
                "El museo": "Museo",
                "El banco": "Banca",
                "La policía": "Polizia",
                "El hospital": "Ospedale",
                "La tienda": "Negozio",
                "El restaurante": "Ristorante",
                "La iglesia": "Chiesa",
                "Los servicios": "Bagno",
                "La calle": "Via/Strada",
                "La plaza": "Piazza",
                "La piscina": "Piscina",
                "El mar": "Mare",
                "La montaña": "Montagna",
                "Tengo una reserva.": "Ho una prenotazione.",
                "Quisiera una habitación.": "Vorrei una stanza.",
                "Me gustaría ver la habitación.": "Mi piacerebbe vedere la stanza.",
                "Sábana": "Lenzuola",
                "Manta": "Coperta",
                "Toalla": "Asciugamano",
                "Gel": "Bagnoschiuma",
                "Champú": "Shampoo",
                "Papel higiénico": "Carta igienica",
                "Recepción": "Reception",
                "Llave": "Chiave",
                "¿A qué hora sirven...?": "A che ora si serve... ?",
                "El desayuno": "La colazione",
                "La comida": "Il pranzo",
                "La cena": "La cena",
                "¿Tienen caja de seguridad?": "Avete una cassaforte ?",
                "¿Tienen servicio de habitaciones?": "Avete servizio in camera ?",
                "¿Cómo puedo llamar al extranjero?": "Come faccio per telefonare all' estero?",
                "Quiero cancelar la reserva a nombre de...": "Vorrei annullare la prenotazione a nome di...",
                "¿Dónde está...?/Busco...": "Dov'è...?/Cerco...",
                "Izquierda": "Sinistra",
                "Derecha": "Destra",
                "Directo, derecho": "Diritto, dritto",
                "Arriba": "Sopra",
                "Abajo": "Sotto",
                "Vaya a la izquierda": "Vai a sinistra",
                "Vaya a la derecha": "Vai a destra",
                "Necesito un plano.": "Ho bisogno di una cartina.",
                "Mapa/Plano": "Mappa/Piano stradale",
                "Información turística": "Informazione turistica",
                "¿Qué hora es?": "Che ora è?",
                "Hoy": "Oggi",
                "Ayer": "Ieri",
                "Mañana": "Domani",
                "Feliz cumpleaños": "Auguri per il tuo compleanno",
                "El lunes": "Lunedí",
                "El martes": "Martedí",
                "El miércoles": "Mercoledí",
                "El jueves": "Giovedí",
                "El viernes": "Venerdí",
                "El sábado": "Sabato",
                "El domingo": "Domenica",
                "¿Cuánto cuesta?": "Quanto costa?",
                "¿Aceptan tarjetas de crédito?": "Accettate carte di credito?",
                "¿A qué hora abre / cierra?": "A che ora apre / chiude?",
                "¿Qué horario tienen?": "Che orario fate?",
                "Abierto": "Aperto",
                "Cerrado": "Chiuso",
                "Postal": "Cartolina",
                "Sellos": "Francobolli",
                "Caro": "Caro",
                "Barato": "A buon mercato",
                "Más": "Più",
                "Menos": "Meno",
                "Me gustaría comprar/alquilar": "Mi piacerebbe acquistare/affittare.",
                "Sólo estoy mirando": "Stò solo dando un'occhiata.",
                "¿Puede enseñarme esto?": "Può farmi vedere questo?",
                "¿Puede enviármelo?": "Può spedirmelo?",
                "¿Podría probarme...?": "Posso provare...?",
                "Este traje": "Questo completo",
                "Esos zapatos": "Quelle scarpe",
                "Este vestido": "Questo vestito",
                "Necesito una talla...": "Mi serve una taglia...",
                "Más grande": "Piú grande",
                "Más pequeña": "Piú piccola"
            },
            "pt": {
                "Sí": "Sim",
                "No": "Não",
                "Gracias": "Obrigado",
                "De nada": "De nada",
                "Adios": "Adeus",
                "Hola": "Olá",
                "Por favor": "Por favor",
                "Disculpe": "Desculpe",
                "Buenos días": "Bom dia",
                "Buenas tardes": "Boa tarde",
                "Buenas noches": "Boa noite",
                "No entiendo": "Não percebo",
                "Encantado de conocerle": "É um prazer conhecê-lo.",
                "¿Cómo estás?": "Como está?",
                "Bien": "Bem",
                "Mal": "Mal",
                "De acuerdo": "Está bem",
                "¿Dónde está el mostrador de objetos perdidos?": "Onde está o balcão de objectos perdidos?",
                "¿Dónde puedo alquilar un coche?": "Onde posso alugar um carro?",
                "¿Dónde puedo sacar dinero?": "Onde posso levantar dinheiro?",
                "¿Dónde están los servicios?": "Onde está a casa de banho?",
                "Billetes, Tickets": "Bilhetes, Tickets",
                "¿A qué hora sale...?": "A que hora parte...?",
                "El tren": "O comboio",
                "El avión": "O avião",
                "El autobús": "O autocarro",
                "El barco": "O barco",
                "Aeropuerto": "Aeroporto",
                "Metro": "Metro",
                "Estación de": "Estação de",
                "Salidas": "Saídas",
                "Llegadas": "Chegadas",
                "Aparcamiento": "Estacionamento",
                "Alquiler de coches": "Aluguer de automóveis",
                "Hotel": "Hotel",
                "Habitación": "Quarto",
                "Reservas": "Reservas",
                "Pasaporte": "Passaporte",
                "Terminal": "Terminal",
                "Taxi": "Taxi",
                "¿Está libre?": "Está livre?",
                "Lléveme a...": "Leve-me a...",
                "¡Pare aquí!": "Pare aqui!",
                "¡Tengo prisa!": "Tenho pressa!",
                "Queremos ver la carta.": "Queremos ver a ementa",
                "Una mesa para dos, por favor.": "Uma mesa para dois, por favor",
                "Me gusta la carne...": "Gosto da carne...",
                "Muy hecha": "Bem passada",
                "Poco hecha": "Mal passada",
                "En su punto": "Normal",
                "Primer plato": "Entrada",
                "Segundo plato": "Prato principal",
                "Postre": "Sobremesa",
                "Camarero": "Empregado de mesa",
                "¡La cuenta!": "A conta!",
                "Me gustaría reservar una mesa": "Gostava de reservar uma mesa",
                "Menú": "Ementa",
                "Tenedor": "Garfo",
                "Cuchara": "Colher",
                "Cuchillo": "Faca",
                "Botella": "Garrafa",
                "Copa": "Aça",
                "Vaso": "Copo",
                "Servilletas": "Guardanapos",
                "Quisiera tomar...": "Queria...",
                "Sal": "Sal",
                "Azúcar": "Açúcar",
                "Pan": "Pão",
                "Carne": "Carne",
                "Ternera": "Vaca",
                "Cerdo": "Porco",
                "Ave": "Ave",
                "Pescado": "Peixe",
                "Fruta": "Fruta",
                "Pasta": "Massa",
                "Arroz": "Arroz",
                "Verdura": "Legumes",
                "Patata": "Batata",
                "Agua": "Água",
                "Vino": "Vinho",
                "Cerveza": "Cerveja",
                "Café": "Café",
                "Té": "Chá",
                "Sin alcohol": "Sem Álcool",
                "Refrescos, Zumo": "Refrescos, Sumo",
                "Cero": "Zero",
                "Uno": "Um, uma",
                "Dos": "Dois, duas",
                "Tres": "Três",
                "Cuatro": "Quatro",
                "Cinco": "Cinco",
                "Seis": "Seis",
                "Siete": "Sete",
                "Ocho": "Oito",
                "Nueve": "Nove",
                "Diez": "Dez",
                "Once": "Onze",
                "Doce": "Doze",
                "Trece": "Treze",
                "Catorce": "Catorze",
                "Quince": "Quinze",
                "Dieciseis": "Dezasseis",
                "Diecisiete": "Dezassete",
                "Dieciocho": "Dezoito",
                "Diecinueve": "Dezanove",
                "Veinte": "Vinte",
                "Veintiuno": "Vinte e um",
                "Treinta": "Trinta",
                "Cuarenta": "Quarenta",
                "Cincuenta": "Cinquenta",
                "Sesenta": "Sessenta",
                "Setenta": "Setenta",
                "Ochenta": "Oitenta",
                "Noventa": "Noventa",
                "Cien": "Cem",
                "Mil": "Mil",
                "Millón": "Un milhão",
                "Mi número de teléfono es...": "O meu número de telefone é...",
                "El número de mi hotel es...": "O número do meu hotel é...",
                "Son las tres y media.": "São três e meia",
                "Son las once.": "São onze horas",
                "¿Dónde puedo cambiar dinero?": "Donde posso trocar dinheiro?",
                "¿Necesita mi identificación?": "Precisa da minha identificação?",
                "Necesito ver a un médico.": "Preciso ver um médico",
                "Tengo dolor de cabeza.": "Tenho dor de cabeça",
                "¡Llame a una ambulancia!": "Chame uma ambulância",
                "Tengo dolor de muelas.": "Tenho dor de dentes",
                "¿Dónde está...más cercana?": "Onde está...mais próxima?",
                "La sala de urgencias": "A sala de urgências",
                "El dentista": "O dentista",
                "La farmacia": "Farmácia",
                "Tengo alergia a la penicilina.": "Tenho alergia à penicilina",
                "Quisiera aspirinas.": "Queria aspirinas",
                "Necesito un analgésico": "Preciso um analgésico",
                "Me duele...": "Dói-me...",
                "El estómago": "O estômago",
                "El brazo": "O braço",
                "La pierna": "A perna",
                "Los oídos": "Os ouvidos",
                "La garganta": "A garganta",
                "Tengo ganas de vomitar.": "Tenho vontade de vomitar",
                "Correos": "Correios",
                "El museo": "Museu",
                "El banco": "Banco",
                "La policía": "Policia",
                "El hospital": "Hospital",
                "La tienda": "Loja",
                "El restaurante": "Restaurante",
                "La iglesia": "Igreja",
                "Los servicios": "Casas de banho",
                "La calle": "Rua",
                "La plaza": "Praça",
                "La piscina": "Piscina",
                "El mar": "Mar",
                "La montaña": "Montanha",
                "Tengo una reserva.": "Tenho uma reserva.",
                "Quisiera una habitación.": "Queria um quarto.",
                "Me gustaría ver la habitación.": "Gostava de ver o quarto.",
                "Sábana": "Lençol",
                "Manta": "Cobertor",
                "Toalla": "Toalha",
                "Gel": "Gel",
                "Champú": "Champô",
                "Papel higiénico": "Papel Higiénico",
                "Recepción": "Recepção",
                "Llave": "Chave",
                "¿A qué hora sirven...?": "A que hora servem...?",
                "El desayuno": "O pequeno-almoço",
                "La comida": "O almoço",
                "La cena": "O jantar",
                "¿Tienen caja de seguridad?": "Têm caixa de segurança?",
                "¿Tienen servicio de habitaciones?": "Têm serviço de quartos?",
                "¿Cómo puedo llamar al extranjero?": "Como posso telefonar para o estrangeiro?",
                "Quiero cancelar la reserva a nombre de...": "Quero cancelar a reserva a nome de...",
                "¿Dónde está...?/Busco...": "Donde está...?/Procuro...",
                "Izquierda": "Esquerda",
                "Derecha": "Direita",
                "Directo, derecho": "Directo, direito",
                "Arriba": "Em cima",
                "Abajo": "Em baixo",
                "Vaya a la izquierda": "Vá para a esquerda",
                "Vaya a la derecha": "Vá para a direita",
                "Necesito un plano.": "Preciso de um mapa.",
                "Mapa/Plano": "Mapa/Plano",
                "Información turística": "Informação Turística",
                "¿Qué hora es?": "Que hora é?",
                "Hoy": "Hoje",
                "Ayer": "Ontem",
                "Mañana": "Amanhã",
                "Feliz cumpleaños": "Parabéns",
                "El lunes": "Segunda",
                "El martes": "Terça",
                "El miércoles": "Quarta",
                "El jueves": "Quinta",
                "El viernes": "Sexta",
                "El sábado": "Sábado",
                "El domingo": "Domingo",
                "¿Cuánto cuesta?": "Quanto custa?",
                "¿Aceptan tarjetas de crédito?": "Aceitam cartões de crédito?",
                "¿A qué hora abre / cierra?": "A que hora abre / fecha?",
                "¿Qué horario tienen?": "Que horário têm?",
                "Abierto": "Aberto",
                "Cerrado": "Fechado",
                "Postal": "Postal",
                "Sellos": "Selos",
                "Caro": "Caro",
                "Barato": "Barato",
                "Más": "Mais",
                "Menos": "Menos",
                "Me gustaría comprar/alquilar": "Gostava de comprar/alugar",
                "Sólo estoy mirando": "Só estou a ver",
                "¿Puede enseñarme esto?": "Pode mostrar-me isto?",
                "¿Puede enviármelo?": "Pode mandar-me isto?",
                "¿Podría probarme...?": "Poderia provar...",
                "Este traje": "Este fato",
                "Esos zapatos": "Esses sapatos",
                "Este vestido": "Este vestido",
                "Necesito una talla...": "Preciso um tamanho...",
                "Más grande": "Maior",
                "Más pequeña": "Mais pequeno"
            }
        },
        "en": {
            "fr": {
                "Yes": "Oui",
                "No": "Non",
                "Thank you": "Merci",
                "You're welcome": "De rien",
                "Goodbye": "Au revoir",
                "Hello": "Bonjour",
                "Please": "S'il vous plaît",
                "Sorry": "Excusez-moi",
                "Good morning": "Bonjour",
                "Good afternoon/Good evening": "Bonjour/Bonsoir",
                "Good night": "Bonsoir/Bonne nuit",
                "I beg your pardon": "Je ne comprends pas",
                "Nice to meet you!": "Enchanté de vous connaître.",
                "How are you?": "Comment vas-tu?",
                "Fine": "Bien",
                "Not very well": "Mal",
                "All right": "D'accord",
                "Where is the lost and found desk?": "Où est le guichet des objets perdus?",
                "Where can I rent a car?": "Où puis-je louer une voiture?",
                "Where can I get cash?": "Où puis-je retirer de l'argent?",
                "Where is the toilet?": "Où sont les toilettes?",
                "Tickets": "Billets, Tickets",
                "What time does the...leave?": "A quelle heure part...?",
                "Train": "Le train",
                "Plane": "L'avion",
                "Bus": "Le bus",
                "Boat/ship": "Le bateau",
                "Airport": "Aéroport",
                "Underground": "Métro",
                "Station": "Gare",
                "Departures": "Départs",
                "Arrivals": "Arrivées",
                "Car park": "Parking",
                "Rent a car": "Location de voitures",
                "Hotel": "Hôtel",
                "Room": "Chambre",
                "Reservations": "Réservations",
                "Passport": "Passeport",
                "Terminal": "Terminal",
                "Taxi": "Taxi",
                "Is it free?": "Vous êtes libre?",
                "Take me to...": "Emmenez-moi à...",
                "Stop here!": "Arrêtez-vous ici!",
                "I am in a hurry": "Je suis pressé!",
                "We would like to see the menu.": "Nous voudrions voir la carte.",
                "A table for two, please.": "Une table pour deux, s'il vous plaît.",
                "I would like my meat...": "J'aime la viande...",
                "Well done": "Bien cuite",
                "Rare": "Saignante",
                "Medium": "à point",
                "Appetizers": "Entrée",
                "Main course": "Plat de résistance",
                "Dessert": "Dessert",
                "Waiter": "Serveur",
                "The bill!": "L'addition!",
                "I would like to book a table": "J'aimerais réserver une table",
                "Menu": "Menu",
                "Fork": "Fourchette",
                "Spoon": "Cuillère",
                "Knife": "Couteau",
                "Bottle": "Bouteille",
                "Wine Glass": "Verre",
                "Glass": "Verre",
                "Table napkins": "Serviettes",
                "I would like to have...": "J'aimerais prendre...",
                "Salt": "Sel",
                "Sugar": "Sucre",
                "Bread": "Pain",
                "Meat": "Viande",
                "Beef": "Veau",
                "Pork": "Porc",
                "Poultry": "Volaille",
                "Fish": "Poisson",
                "Fruit": "Fruit",
                "Pasta": "Pâtes",
                "Rice": "Riz",
                "Vegetables": "Légume",
                "Potato": "Pomme de terre",
                "Water": "Eau",
                "Wine": "Vin",
                "Beer": "Bière",
                "Coffee": "Café",
                "Tea": "Thé",
                "Non-alcoholic": "Sans alcool",
                "Soft drinks, Juice": "Boissons fraîches, Jus",
                "Zero": "Zéro",
                "One": "Un(e)",
                "Two": "Deux",
                "Three": "Trois",
                "Four": "Quatre",
                "Five": "Cinq",
                "Six": "Six",
                "Seven": "Sept",
                "Eight": "Huit",
                "Nine": "Neuf",
                "Ten": "Dix",
                "Eleven": "Onze",
                "Twelve": "Douze",
                "Thirteen": "Treize",
                "Fourteen": "Quatorze",
                "Fifteen": "Quinze",
                "Sixteen": "Seize",
                "Seventeen": "Dix-sept",
                "Eighteen": "Dix-huit",
                "Nineteen": "Dix-neuf",
                "Twenty": "Vingt",
                "Twenty one": "Vingt-et-un(e)",
                "Thirty": "Trente",
                "Forty": "Quarante",
                "Fifty": "Cinquante",
                "Sixty": "Soixante",
                "Seventy": "Soixante-dix",
                "Eighty": "Quatre-vingts",
                "Ninety": "Quatre-vingt-dix",
                "One hundred": "Cent",
                "One thousand": "Mille",
                "One million": "Un million",
                "My phone number is...": "Mon numéro de téléphone est le...",
                "The number at my hotel is...": "Le numéro de mon hôtel est le...",
                "It's half past three.": "Il est trois heures et demie",
                "It's eleven o'clock.": "Il est onze heures",
                "Where can I change currency?": "Où puis-je changer de l'argent?",
                "Do you need my identification?": "Vous avez besoin de mes papiers d'identité?",
                "I need to see a doctor.": "Je dois voir un médecin",
                "I have a headache.": "J'ai mal à la tête",
                "Call an ambulance!": "Appelez une ambulance!",
                "I have a toothache.": "J'ai mal aux dents",
                "Where is the nearest...?": "Où est le/la... le/la plus proche?",
                "Emergency room": "Le service des urgences",
                "Dentist": "Le dentiste",
                "Pharmacy": "La pharmacie",
                "I am allergic to penicillin.": "Je suis allergique à la pénicilline",
                "I would like some aspirin.": "Je voudrais de l'aspirine",
                "I need a painkiller.": "J'ai besoin d'un analgésique",
                "My...hurts.": "J'ai mal...",
                "Stomach": "à l'estomac",
                "Arm": "Au bras",
                "Leg": "à la jambe",
                "Ears": "Aux oreilles",
                "Throat": "à la gorge",
                "I'm going to vomit.": "J'ai envie de vomir.",
                "Post Office": "La poste",
                "Museum": "Le musée",
                "Bank": "La banque",
                "Police Station": "La police",
                "Hospital": "L'hôpital",
                "Pharmacy / Chemist's": "La pharmacie",
                "Shop": "Le magasin",
                "Restaurant": "Le restaurant",
                "Church": "L'eglise",
                "Restrooms / Toilets": "Les toilettes",
                "Street": "La rue",
                "Square": "La place",
                "Swimming pool": "La piscine",
                "Sea": "La mer",
                "Mountain": "La montagne",
                "I have a reservation.": "J'ai réservé.",
                "I would like a room.": "J'aimerais une chambre.",
                "I would like to see the room.": "J'aimerais voir la chambre.",
                "Sheet": "Drap",
                "Blanket": "Couverture",
                "Towel": "Serviette",
                "Gel": "Gel",
                "Shampoo": "Shampoing",
                "Toilet paper": "Papier toilette",
                "Reception desk": "Réception",
                "Key": "Clé",
                "What time do you serve...?": "A quelle heure servez-vous... ?",
                "Breakfast": "Le petit déjeuner",
                "Lunch": "Le déjeuner",
                "Dinner": "Le dîner",
                "Do you have a safe?": "Avez-vous un coffre-fort ?",
                "Do you have room service?": "Avez-vous un service de chambre ?",
                "How do I call a foreign number?": "Comment faut-il faire pour appeler à l'étranger ?",
                "I would like to cancel the reservation for (Mr./Ms...)": "J'aimerais annuler la réservation au nom de...",
                "Where is...?/ I am looking for...": "Où est... ?/Je cherche",
                "Left": "Gauche",
                "Right": "Droite",
                "Straight on/Go ahead": "Tout droit",
                "Up": "En-haut",
                "Down": "En-bas",
                "Go left": "Allez à gauche",
                "Go right": "Allez à droite",
                "I need a map.": "J'ai besoin d'un plan.",
                "Map/Plan": "Carte/Plan",
                "Tourist information": "Informations touristiques",
                "What time is it?": "Quelle heure est-il?",
                "Today": "Aujourd'hui",
                "Yesterday": "Hier",
                "Tomorrow": "Demain",
                "Happy birthday": "Joyeux anniversaire",
                "Monday": "Lundi",
                "Tuesday": "Mardi",
                "Wednesday": "Mercredi",
                "Thursday": "Jeudi",
                "Friday": "Vendredi",
                "Saturday": "Samedi",
                "Sunday": "Dimanche",
                "How much does it cost?": "Combien ça coûte?",
                "Do you accept credit cards?": "Vous acceptez les cartes de crédit?",
                "What time do you open/close?": "A quelle heure ouvrez / fermez vous?",
                "What hours are you open?": "Quels sont vos horaires?",
                "Open": "Ouvert",
                "Closed": "Fermé",
                "Postcard": "Carte postale",
                "Stamps": "Timbres",
                "Expensive": "Cher",
                "Cheap": "Bon marché",
                "More": "Plus",
                "Less": "Moins",
                "I would like to buy/rent": "J'aimerais acheter/louer",
                "I am just looking": "Je regarde, c'est tout",
                "Could you show it to me?": "Vous pouvez me montrer cela?",
                "Could you send it to me?": "Vous pouvez me l'envoyer?",
                "Can I try on...?": "Puis-je essayer...?",
                "This suit": "Ce costume / ce tailleur",
                "Those shoes": "Ces chaussures",
                "This dress": "Cette robe",
                "I need this in a...size.": "Il me faut une taille...",
                "Larger": "Plus grande",
                "Smaller": "Plus petite"
            },
            "de": {
                "Yes": "Ja",
                "No": "Nein",
                "Thank you": "Danke",
                "You're welcome": "Bitte",
                "Goodbye": "Auf Wiedersehen",
                "Hello": "Hallo",
                "Please": "Bitte",
                "Sorry": "Entschuldigung",
                "Good morning": "Guten Morgen",
                "Good afternoon/Good evening": "Guten Tag / Guten Abend",
                "Good night": "Gute Nacht",
                "I beg your pardon": "Ich verstehe Sie nicht.",
                "Nice to meet you!": "Ich freue mich, Sie kennenzulernen.",
                "How are you?": "Wie geht's?",
                "Fine": "Gut",
                "Not very well": "Schlecht",
                "All right": "Einverstanden",
                "Where is the lost and found desk?": "Wo ist der Schalter für Fundsachen?",
                "Where can I rent a car?": "Wo kann ich ein Auto mieten?",
                "Where can I get cash?": "Wo kann ich Geld abheben?",
                "Where is the toilet?": "Wo sind die Toiletten?",
                "Tickets": "Tickets",
                "What time does the...leave?": "Um wieviel Uhr geht...?",
                "Train": "Der Zug",
                "Plane": "Das Flugzeug",
                "Bus": "Der Bus",
                "Boat/ship": "Das Schiff",
                "Airport": "Flughafen",
                "Underground": "U-Bahn",
                "Station": "Bahnhof",
                "Departures": "Abflug /Abfahrt",
                "Arrivals": "Ankunft",
                "Car park": "Parkplatz",
                "Rent a car": "Autovermietung",
                "Hotel": "Hotel",
                "Room": "Zimmer",
                "Reservations": "Reservierungen",
                "Passport": "Pass",
                "Terminal": "Terminal / Bahnsteig",
                "Taxi": "Taxi",
                "Is it free?": "Ist hier frei?",
                "Take me to...": "Bringen Sie mich zu...",
                "Stop here!": "Bleiben Sie hier stehen!",
                "I am in a hurry": "Ich habe es eilig!",
                "We would like to see the menu.": "Wir möchten gerne die Karte sehen...",
                "A table for two, please.": "Bitte einen Tisch für zwei Personen",
                "I would like my meat...": "Ich hätte gerne das Fleisch...",
                "Well done": "Gut durchgebraten",
                "Rare": "Nicht durchgebraten",
                "Medium": "Medium",
                "Appetizers": "Vorspeise",
                "Main course": "Hauptgang",
                "Dessert": "Nachtisch",
                "Waiter": "Ober / Kellner",
                "The bill!": "Die Rechnung",
                "I would like to book a table": "Ich würde gerne einen Tisch bestellen",
                "Menu": "Speisekarte",
                "Fork": "Gabel",
                "Spoon": "Löffel",
                "Knife": "Messer",
                "Bottle": "Flasche",
                "Wine Glass": "Glas",
                "Glass": "Becher",
                "Table napkins": "Servietten",
                "I would like to have...": "Ich hätte gerne...",
                "Salt": "Salz",
                "Sugar": "Zucker",
                "Bread": "Brot",
                "Meat": "Fleisch",
                "Beef": "Rindfleisch",
                "Pork": "Schweinefleisch",
                "Poultry": "Geflügel",
                "Fish": "Fisch",
                "Fruit": "Obst",
                "Pasta": "Nudeln",
                "Rice": "Reis",
                "Vegetables": "Gemüse",
                "Potato": "Kartoffel",
                "Water": "Wasser",
                "Wine": "Wein",
                "Beer": "Bier",
                "Coffee": "Kaffee",
                "Tea": "Tee",
                "Non-alcoholic": "Alkoholfrei",
                "Soft drinks, Juice": "Erfrischungsgetränke, Saft",
                "Zero": "Null",
                "One": "Eins",
                "Two": "Zwei",
                "Three": "Drei",
                "Four": "Vier",
                "Five": "Fünf",
                "Six": "Sechs",
                "Seven": "Sieben",
                "Eight": "Acht",
                "Nine": "Neun",
                "Ten": "Zehn",
                "Eleven": "Elf",
                "Twelve": "Zwölf",
                "Thirteen": "Dreizehn",
                "Fourteen": "Vierzehn",
                "Fifteen": "Fünfzehn",
                "Sixteen": "Sechzehn",
                "Seventeen": "Siebzehn",
                "Eighteen": "Achtzehn",
                "Nineteen": "Neunzehn",
                "Twenty": "Zwanzig",
                "Twenty one": "Einundzwanzig",
                "Thirty": "Dreissig",
                "Forty": "Vierzig",
                "Fifty": "Fünfzig",
                "Sixty": "Sechzig",
                "Seventy": "Siebzig",
                "Eighty": "Achtzig",
                "Ninety": "Neunzig",
                "One hundred": "Hundert",
                "One thousand": "Tausend",
                "One million": "Million",
                "My phone number is...": "Meine Telefonnummer ist...",
                "The number at my hotel is...": "Die Nummer meines Hotels ist...",
                "It's half past three.": "Es ist halb vier",
                "It's eleven o'clock.": "Es ist elf Uhr",
                "Where can I change currency?": "Wo kann ich Geld umtauschen?",
                "Do you need my identification?": "Brauchen Sie meinen Ausweis?",
                "I need to see a doctor.": "Ich brauche einen Arzt",
                "I have a headache.": "Ich habe Kopfschmerzen",
                "Call an ambulance!": "Rufen Sie einen Notarztwagen",
                "I have a toothache.": "Ich habe Zahnschmerzen",
                "Where is the nearest...?": "Wo ist das/der/die nächste...?",
                "Emergency room": "Die Notaufnahme",
                "Dentist": "Der Zahnarzt",
                "Pharmacy": "Die Apotheke",
                "I am allergic to penicillin.": "Ich bin gegen Penizillin allergisch",
                "I would like some aspirin.": "Ich hätte gerne Aspirin",
                "I need a painkiller.": "Ich hätte gerne ein Schmerzmittel",
                "My...hurts.": "Mir tut...weh",
                "Stomach": "Der Magen",
                "Arm": "Der Arm",
                "Leg": "Das Bein",
                "Ears": "Die Ohren",
                "Throat": "Der Hals",
                "I'm going to vomit.": "Ich muss mich übergeben",
                "Post Office": "Postamt",
                "Museum": "Museum",
                "Bank": "Bank",
                "Police Station": "Polizei",
                "Hospital": "Krankenhaus",
                "Pharmacy / Chemist's": "Apotheke",
                "Shop": "Geschäft",
                "Restaurant": "Restaurant",
                "Church": "Kirche",
                "Restrooms / Toilets": "Toiletten",
                "Street": "Strasse",
                "Square": "Platz",
                "Swimming pool": "Schwimmbad",
                "Sea": "Meer",
                "Mountain": "Berg",
                "I have a reservation.": "Ich habe eine Reservierung.",
                "I would like a room.": "Ich möchte gerne ein Zimmer.",
                "I would like to see the room.": "Ich würde gerne das Zimmer sehen.",
                "Sheet": "Betttuch",
                "Blanket": "Decke",
                "Towel": "Handtuch",
                "Gel": "Gel",
                "Shampoo": "Shampoo",
                "Toilet paper": "Toilettenpapier",
                "Reception desk": "Empfang",
                "Key": "Schlüssel",
                "What time do you serve...?": "Um wieviel Uhr wird...serviert?",
                "Breakfast": "Das Frühstück",
                "Lunch": "Das Essen",
                "Dinner": "Das Abendessen",
                "Do you have a safe?": "Haben Sie ein Safe?",
                "Do you have room service?": "Haben Sie Zimmerservice?",
                "How do I call a foreign number?": "Wie kann ich ins Ausland anrufen?",
                "I would like to cancel the reservation for (Mr./Ms...)": "Ich möchte die Reservierung im Namen von...annullieren",
                "Where is...?/ I am looking for...": "Wo ist...?/Ich suche...",
                "Left": "Links",
                "Right": "Rechts",
                "Straight on/Go ahead": "Geradeaus",
                "Up": "Oben",
                "Down": "Unten",
                "Go left": "Gehen Sie nach links",
                "Go right": "Gehen Sie nach rechts",
                "I need a map.": "Ich brauche eine Karte.",
                "Map/Plan": "Stadtplan / Landkarte",
                "Tourist information": "Fremdenverkehrsinformation",
                "What time is it?": "Wie viel Uhr ist es?",
                "Today": "Heute",
                "Yesterday": "Gestern",
                "Tomorrow": "Morgen",
                "Happy birthday": "Alles Gute zum Geburtstag",
                "Monday": "Montag",
                "Tuesday": "Dienstag",
                "Wednesday": "Mittwoch",
                "Thursday": "Donnerstag",
                "Friday": "Freitag",
                "Saturday": "Samstag",
                "Sunday": "Sonntag",
                "How much does it cost?": "Was kostet das?",
                "Do you accept credit cards?": "Kann ich mit Kreditkarte bezahlen?",
                "What time do you open/close?": "Um wieviel Uhr macht auf/zu?",
                "What hours are you open?": "Welche Öffnungszeiten haben Sie?",
                "Open": "Geöffnet",
                "Closed": "Geschlossen",
                "Postcard": "Postkarte",
                "Stamps": "Briefmarken",
                "Expensive": "Teuer",
                "Cheap": "Billig",
                "More": "Mehr",
                "Less": "Weniger",
                "I would like to buy/rent": "Ich würde gerne kaufen / mieten.",
                "I am just looking": "Ich sehe mich nur um.",
                "Could you show it to me?": "Könnten Sie mir das zeigen?",
                "Could you send it to me?": "Können Sie mir das schicken?",
                "Can I try on...?": "Könnte ich...anprobieren?",
                "This suit": "Diesen Anzug",
                "Those shoes": "Diese Schuhe",
                "This dress": "Dieses Kleid",
                "I need this in a...size.": "Ich benötige eine...Grösse",
                "Larger": "Grössere",
                "Smaller": "Kleinere"
            },
            "it": {
                "Yes": "Si",
                "No": "No",
                "Thank you": "Grazie",
                "You're welcome": "Prego",
                "Goodbye": "Arrivederci",
                "Hello": "Salve",
                "Please": "Per favore",
                "Sorry": "Mi scusi",
                "Good morning": "Buon giorno",
                "Good afternoon/Good evening": "Buona sera",
                "Good night": "Buona notte",
                "I beg your pardon": "Prego?",
                "Nice to meet you!": "Lieto di conoscerla.",
                "How are you?": "Come sta?",
                "Fine": "Bene",
                "Not very well": "Male",
                "All right": "D'accordo",
                "Where is the lost and found desk?": "Dove si trova lo sportello degli oggetti persi?",
                "Where can I rent a car?": "Dove posso noleggiare una macchina?",
                "Where can I get cash?": "Dove posso trovare un Bancomat?",
                "Where is the toilet?": "Dov'è il bagno?",
                "Tickets": "Biglietti, tickets",
                "What time does the...leave?": "A che ora parte...?",
                "Train": "Il treno",
                "Plane": "L' aereo",
                "Bus": "L' autobus",
                "Boat/ship": "Il traghetto",
                "Airport": "Aeroporto",
                "Underground": "Metropolitana",
                "Station": "Stazione di",
                "Departures": "Partenze",
                "Arrivals": "Arrivi",
                "Car park": "Parcheggio",
                "Rent a car": "Noleggio auto",
                "Hotel": "Hotel",
                "Room": "Stanza",
                "Reservations": "Prenotazioni",
                "Passport": "Passaporto",
                "Terminal": "Terminal",
                "Taxi": "Taxi",
                "Is it free?": "È libero?",
                "Take me to...": "Mi porti a...",
                "Stop here!": "Si fermi qui!",
                "I am in a hurry": "Ho fretta!",
                "We would like to see the menu.": "Vorremmo vedere il menu",
                "A table for two, please.": "Un tavolo per due persone, per favore",
                "I would like my meat...": "Mi piace la carne...",
                "Well done": "Molto cotta",
                "Rare": "Poco cotta",
                "Medium": "Cotta al punto giusto",
                "Appetizers": "Il primo",
                "Main course": "Piatto principale",
                "Dessert": "Il dessert",
                "Waiter": "Cameriere",
                "The bill!": "Il conto!",
                "I would like to book a table": "Desidererei prenotare un tavolo",
                "Menu": "Menu",
                "Fork": "Forchetta",
                "Spoon": "Cucchiaio",
                "Knife": "Coltello",
                "Bottle": "Bottiglia",
                "Wine Glass": "Coppa",
                "Glass": "Bicchiere",
                "Table napkins": "Tovaglioli",
                "I would like to have...": "Vorrei ...",
                "Salt": "Sale",
                "Sugar": "Zucchero",
                "Bread": "Pane",
                "Meat": "Carne",
                "Beef": "Manzo",
                "Pork": "Maiale",
                "Poultry": "Pollame",
                "Fish": "Pesce",
                "Fruit": "Frutta",
                "Pasta": "Pasta",
                "Rice": "Riso",
                "Vegetables": "Verdura",
                "Potato": "Patata",
                "Water": "Acqua",
                "Wine": "Vino",
                "Beer": "Birra",
                "Coffee": "Caffè",
                "Tea": "Té",
                "Non-alcoholic": "Senza alcol",
                "Soft drinks, Juice": "Bibita, Succo",
                "Zero": "Zero",
                "One": "Uno",
                "Two": "Due",
                "Three": "Tre",
                "Four": "Quattro",
                "Five": "Cinque",
                "Six": "Sei",
                "Seven": "Sette",
                "Eight": "Otto",
                "Nine": "Nove",
                "Ten": "Dieci",
                "Eleven": "Undici",
                "Twelve": "Dodici",
                "Thirteen": "Tredici",
                "Fourteen": "Quattordici",
                "Fifteen": "Quindici",
                "Sixteen": "Sedici",
                "Seventeen": "Diciassette",
                "Eighteen": "Diciotto",
                "Nineteen": "Diciannove",
                "Twenty": "Venti",
                "Twenty one": "Ventuno",
                "Thirty": "Trenta",
                "Forty": "Quaranta",
                "Fifty": "Cinquanta",
                "Sixty": "Sessanta",
                "Seventy": "Settanta",
                "Eighty": "Ottanta",
                "Ninety": "Novanta",
                "One hundred": "Cento",
                "One thousand": "Mille",
                "One million": "Un milione",
                "My phone number is...": "Il mio numero di telefono è...",
                "The number at my hotel is...": "Il numero di telefono del mio hotel è...",
                "It's half past three.": "Sono le tre e mezza",
                "It's eleven o'clock.": "Sono le undici",
                "Where can I change currency?": "Dove posso cambiare valuta?",
                "Do you need my identification?": "Ha bisogno della mia identificazione?",
                "I need to see a doctor.": "Ho bisogno di un medico",
                "I have a headache.": "Mi fa male la testa",
                "Call an ambulance!": "Chiamate un' ambulanza!",
                "I have a toothache.": "Ho mal di denti",
                "Where is the nearest...?": "Dov' è .... piú vicino?",
                "Emergency room": "Il pronto soccorso",
                "Dentist": "Il dentista",
                "Pharmacy": "La farmacia",
                "I am allergic to penicillin.": "Sono allergico alla penicillina",
                "I would like some aspirin.": "Vorrei un' aspirina",
                "I need a painkiller.": "Ho bisogno di un analgesico",
                "My...hurts.": "Mi fa male...",
                "Stomach": "Lo stomaco",
                "Arm": "Il braccio",
                "Leg": "La gamba",
                "Ears": "Le orecchie",
                "Throat": "La gola",
                "I'm going to vomit.": "Ho un conato di vomito",
                "Post Office": "Ufficio Postale",
                "Museum": "Museo",
                "Bank": "Banca",
                "Police Station": "Polizia",
                "Hospital": "Ospedale",
                "Pharmacy / Chemist's": "Farmacia",
                "Shop": "Negozio",
                "Restaurant": "Ristorante",
                "Church": "Chiesa",
                "Restrooms / Toilets": "Bagno",
                "Street": "Via/Strada",
                "Square": "Piazza",
                "Swimming pool": "Piscina",
                "Sea": "Mare",
                "Mountain": "Montagna",
                "I have a reservation.": "Ho una prenotazione.",
                "I would like a room.": "Vorrei una stanza.",
                "I would like to see the room.": "Mi piacerebbe vedere la stanza.",
                "Sheet": "Lenzuola",
                "Blanket": "Coperta",
                "Towel": "Asciugamano",
                "Gel": "Bagnoschiuma",
                "Shampoo": "Shampoo",
                "Toilet paper": "Carta igienica",
                "Reception desk": "Reception",
                "Key": "Chiave",
                "What time do you serve...?": "A che ora si serve... ?",
                "Breakfast": "La colazione",
                "Lunch": "Il pranzo",
                "Dinner": "La cena",
                "Do you have a safe?": "Avete una cassaforte ?",
                "Do you have room service?": "Avete servizio in camera ?",
                "How do I call a foreign number?": "Come faccio per telefonare all' estero?",
                "I would like to cancel the reservation for (Mr./Ms...)": "Vorrei annullare la prenotazione a nome di...",
                "Where is...?/ I am looking for...": "Dov'è...?/Cerco...",
                "Left": "Sinistra",
                "Right": "Destra",
                "Straight on/Go ahead": "Diritto, dritto",
                "Up": "Sopra",
                "Down": "Sotto",
                "Go left": "Vai a sinistra",
                "Go right": "Vai a destra",
                "I need a map.": "Ho bisogno di una cartina.",
                "Map/Plan": "Mappa/Piano stradale",
                "Tourist information": "Informazione turistica",
                "What time is it?": "Che ora è?",
                "Today": "Oggi",
                "Yesterday": "Ieri",
                "Tomorrow": "Domani",
                "Happy birthday": "Auguri per il tuo compleanno",
                "Monday": "Lunedí",
                "Tuesday": "Martedí",
                "Wednesday": "Mercoledí",
                "Thursday": "Giovedí",
                "Friday": "Venerdí",
                "Saturday": "Sabato",
                "Sunday": "Domenica",
                "How much does it cost?": "Quanto costa?",
                "Do you accept credit cards?": "Accettate carte di credito?",
                "What time do you open/close?": "A che ora apre / chiude?",
                "What hours are you open?": "Che orario fate?",
                "Open": "Aperto",
                "Closed": "Chiuso",
                "Postcard": "Cartolina",
                "Stamps": "Francobolli",
                "Expensive": "Caro",
                "Cheap": "A buon mercato",
                "More": "Più",
                "Less": "Meno",
                "I would like to buy/rent": "Mi piacerebbe acquistare/affittare.",
                "I am just looking": "Stò solo dando un'occhiata.",
                "Could you show it to me?": "Può farmi vedere questo?",
                "Could you send it to me?": "Può spedirmelo?",
                "Can I try on...?": "Posso provare...?",
                "This suit": "Questo completo",
                "Those shoes": "Quelle scarpe",
                "This dress": "Questo vestito",
                "I need this in a...size.": "Mi serve una taglia...",
                "Larger": "Piú grande",
                "Smaller": "Piú piccola"
            },
            "pt": {
                "Yes": "Sim",
                "No": "Não",
                "Thank you": "Obrigado",
                "You're welcome": "De nada",
                "Goodbye": "Adeus",
                "Hello": "Olá",
                "Please": "Por favor",
                "Sorry": "Desculpe",
                "Good morning": "Bom dia",
                "Good afternoon/Good evening": "Boa tarde",
                "Good night": "Boa noite",
                "I beg your pardon": "Não percebo",
                "Nice to meet you!": "É um prazer conhecê-lo.",
                "How are you?": "Como está?",
                "Fine": "Bem",
                "Not very well": "Mal",
                "All right": "Está bem",
                "Where is the lost and found desk?": "Onde está o balcão de objectos perdidos?",
                "Where can I rent a car?": "Onde posso alugar um carro?",
                "Where can I get cash?": "Onde posso levantar dinheiro?",
                "Where is the toilet?": "Onde está a casa de banho?",
                "Tickets": "Bilhetes, Tickets",
                "What time does the...leave?": "A que hora parte...?",
                "Train": "O comboio",
                "Plane": "O avião",
                "Bus": "O autocarro",
                "Boat/ship": "O barco",
                "Airport": "Aeroporto",
                "Underground": "Metro",
                "Station": "Estação de",
                "Departures": "Saídas",
                "Arrivals": "Chegadas",
                "Car park": "Estacionamento",
                "Rent a car": "Aluguer de automóveis",
                "Hotel": "Hotel",
                "Room": "Quarto",
                "Reservations": "Reservas",
                "Passport": "Passaporte",
                "Terminal": "Terminal",
                "Taxi": "Taxi",
                "Is it free?": "Está livre?",
                "Take me to...": "Leve-me a...",
                "Stop here!": "Pare aqui!",
                "I am in a hurry": "Tenho pressa!",
                "We would like to see the menu.": "Queremos ver a ementa",
                "A table for two, please.": "Uma mesa para dois, por favor",
                "I would like my meat...": "Gosto da carne...",
                "Well done": "Bem passada",
                "Rare": "Mal passada",
                "Medium": "Normal",
                "Appetizers": "Entrada",
                "Main course": "Prato principal",
                "Dessert": "Sobremesa",
                "Waiter": "Empregado de mesa",
                "The bill!": "A conta!",
                "I would like to book a table": "Gostava de reservar uma mesa",
                "Menu": "Ementa",
                "Fork": "Garfo",
                "Spoon": "Colher",
                "Knife": "Faca",
                "Bottle": "Garrafa",
                "Wine Glass": "Aça",
                "Glass": "Copo",
                "Table napkins": "Guardanapos",
                "I would like to have...": "Queria...",
                "Salt": "Sal",
                "Sugar": "Açúcar",
                "Bread": "Pão",
                "Meat": "Carne",
                "Beef": "Vaca",
                "Pork": "Porco",
                "Poultry": "Ave",
                "Fish": "Peixe",
                "Fruit": "Fruta",
                "Pasta": "Massa",
                "Rice": "Arroz",
                "Vegetables": "Legumes",
                "Potato": "Batata",
                "Water": "Água",
                "Wine": "Vinho",
                "Beer": "Cerveja",
                "Coffee": "Café",
                "Tea": "Chá",
                "Non-alcoholic": "Sem Álcool",
                "Soft drinks, Juice": "Refrescos, Sumo",
                "Zero": "Zero",
                "One": "Um, uma",
                "Two": "Dois, duas",
                "Three": "Três",
                "Four": "Quatro",
                "Five": "Cinco",
                "Six": "Seis",
                "Seven": "Sete",
                "Eight": "Oito",
                "Nine": "Nove",
                "Ten": "Dez",
                "Eleven": "Onze",
                "Twelve": "Doze",
                "Thirteen": "Treze",
                "Fourteen": "Catorze",
                "Fifteen": "Quinze",
                "Sixteen": "Dezasseis",
                "Seventeen": "Dezassete",
                "Eighteen": "Dezoito",
                "Nineteen": "Dezanove",
                "Twenty": "Vinte",
                "Twenty one": "Vinte e um",
                "Thirty": "Trinta",
                "Forty": "Quarenta",
                "Fifty": "Cinquenta",
                "Sixty": "Sessenta",
                "Seventy": "Setenta",
                "Eighty": "Oitenta",
                "Ninety": "Noventa",
                "One hundred": "Cem",
                "One thousand": "Mil",
                "One million": "Un milhão",
                "My phone number is...": "O meu número de telefone é...",
                "The number at my hotel is...": "O número do meu hotel é...",
                "It's half past three.": "São três e meia",
                "It's eleven o'clock.": "São onze horas",
                "Where can I change currency?": "Donde posso trocar dinheiro?",
                "Do you need my identification?": "Precisa da minha identificação?",
                "I need to see a doctor.": "Preciso ver um médico",
                "I have a headache.": "Tenho dor de cabeça",
                "Call an ambulance!": "Chame uma ambulância",
                "I have a toothache.": "Tenho dor de dentes",
                "Where is the nearest...?": "Onde está...mais próxima?",
                "Emergency room": "A sala de urgências",
                "Dentist": "O dentista",
                "Pharmacy": "A farmácia",
                "I am allergic to penicillin.": "Tenho alergia à penicilina",
                "I would like some aspirin.": "Queria aspirinas",
                "I need a painkiller.": "Preciso um analgésico",
                "My...hurts.": "Dói-me...",
                "Stomach": "O estômago",
                "Arm": "O braço",
                "Leg": "A perna",
                "Ears": "Os ouvidos",
                "Throat": "A garganta",
                "I'm going to vomit.": "Tenho vontade de vomitar",
                "Post Office": "Correios",
                "Museum": "Museu",
                "Bank": "Banco",
                "Police Station": "Policia",
                "Hospital": "Hospital",
                "Pharmacy / Chemist's": "Farmácia",
                "Shop": "Loja",
                "Restaurant": "Restaurante",
                "Church": "Igreja",
                "Restrooms / Toilets": "Casas de banho",
                "Street": "Rua",
                "Square": "Praça",
                "Swimming pool": "Piscina",
                "Sea": "Mar",
                "Mountain": "Montanha",
                "I have a reservation.": "Tenho uma reserva.",
                "I would like a room.": "Queria um quarto.",
                "I would like to see the room.": "Gostava de ver o quarto.",
                "Sheet": "Lençol",
                "Blanket": "Cobertor",
                "Towel": "Toalha",
                "Gel": "Gel",
                "Shampoo": "Champô",
                "Toilet paper": "Papel Higiénico",
                "Reception desk": "Recepção",
                "Key": "Chave",
                "What time do you serve...?": "A que hora servem...?",
                "Breakfast": "O pequeno-almoço",
                "Lunch": "O almoço",
                "Dinner": "O jantar",
                "Do you have a safe?": "Têm caixa de segurança?",
                "Do you have room service?": "Têm serviço de quartos?",
                "How do I call a foreign number?": "Como posso telefonar para o estrangeiro?",
                "I would like to cancel the reservation for (Mr./Ms...)": "Quero cancelar a reserva a nome de...",
                "Where is...?/ I am looking for...": "Donde está...?/Procuro...",
                "Left": "Esquerda",
                "Right": "Direita",
                "Straight on/Go ahead": "Directo, direito",
                "Up": "Em cima",
                "Down": "Em baixo",
                "Go left": "Vá para a esquerda",
                "Go right": "Vá para a direita",
                "I need a map.": "Preciso de um mapa.",
                "Map/Plan": "Mapa/Plano",
                "Tourist information": "Informação Turística",
                "What time is it?": "Que hora é?",
                "Today": "Hoje",
                "Yesterday": "Ontem",
                "Tomorrow": "Amanhã",
                "Happy birthday": "Parabéns",
                "Monday": "Segunda",
                "Tuesday": "Terça",
                "Wednesday": "Quarta",
                "Thursday": "Quinta",
                "Friday": "Sexta",
                "Saturday": "Sábado",
                "Sunday": "Domingo",
                "How much does it cost?": "Quanto custa?",
                "Do you accept credit cards?": "Aceitam cartões de crédito?",
                "What time do you open/close?": "A que hora abre / fecha?",
                "What hours are you open?": "Que horário têm?",
                "Open": "Aberto",
                "Closed": "Fechado",
                "Postcard": "Postal",
                "Stamps": "Selos",
                "Expensive": "Caro",
                "Cheap": "Barato",
                "More": "Mais",
                "Less": "Menos",
                "I would like to buy/rent": "Gostava de comprar/alugar",
                "I am just looking": "Só estou a ver",
                "Could you show it to me?": "Pode mostrar-me isto?",
                "Could you send it to me?": "Pode mandar-me isto?",
                "Can I try on...?": "Poderia provar...",
                "This suit": "Este fato",
                "Those shoes": "Esses sapatos",
                "This dress": "Este vestido",
                "I need this in a...size.": "Preciso um tamanho...",
                "Larger": "Maior",
                "Smaller": "Mais pequeno"
            }
        },
        "fr": {
            "de": {
                "Oui": "Ja",
                "Non": "Nein",
                "Merci": "Danke",
                "De rien": "Bitte",
                "Au revoir": "Auf Wiedersehen",
                "Bonjour": "Guten Morgen",
                "S'il vous plaît": "Bitte",
                "Excusez-moi": "Entschuldigung",
                "Bonjour/Bonsoir": "Guten Tag / Guten Abend",
                "Bonsoir/Bonne nuit": "Gute Nacht",
                "Je ne comprends pas": "Ich verstehe Sie nicht.",
                "Enchanté de vous connaître.": "Ich freue mich, Sie kennenzulernen.",
                "Comment vas-tu?": "Wie geht's?",
                "Bien": "Gut",
                "Mal": "Schlecht",
                "D'accord": "Einverstanden",
                "Où est le guichet des objets perdus?": "Wo ist der Schalter für Fundsachen?",
                "Où puis-je louer une voiture?": "Wo kann ich ein Auto mieten?",
                "Où puis-je retirer de l'argent?": "Wo kann ich Geld abheben?",
                "Où sont les toilettes?": "Wo sind die Toiletten?",
                "Billets, Tickets": "Tickets",
                "A quelle heure part...?": "Um wieviel Uhr geht...?",
                "Le train": "Der Zug",
                "L'avion": "Das Flugzeug",
                "Le bus": "Der Bus",
                "Le bateau": "Das Schiff",
                "Aéroport": "Flughafen",
                "Métro": "U-Bahn",
                "Gare": "Bahnhof",
                "Départs": "Abflug /Abfahrt",
                "Arrivées": "Ankunft",
                "Parking": "Parkplatz",
                "Location de voitures": "Autovermietung",
                "Hôtel": "Hotel",
                "Chambre": "Zimmer",
                "Réservations": "Reservierungen",
                "Passeport": "Pass",
                "Terminal": "Terminal / Bahnsteig",
                "Taxi": "Taxi",
                "Vous êtes libre?": "Ist hier frei?",
                "Emmenez-moi à...": "Bringen Sie mich zu...",
                "Arrêtez-vous ici!": "Bleiben Sie hier stehen!",
                "Je suis pressé!": "Ich habe es eilig!",
                "Nous voudrions voir la carte.": "Wir möchten gerne die Karte sehen...",
                "Une table pour deux, s'il vous plaît.": "Bitte einen Tisch für zwei Personen",
                "J'aime la viande...": "Ich hätte gerne das Fleisch...",
                "Bien cuite": "Gut durchgebraten",
                "Saignante": "Nicht durchgebraten",
                "à point": "Medium",
                "Entrée": "Vorspeise",
                "Plat de résistance": "Hauptgang",
                "Dessert": "Nachtisch",
                "Serveur": "Ober / Kellner",
                "L'addition!": "Die Rechnung",
                "J'aimerais réserver une table": "Ich würde gerne einen Tisch bestellen",
                "Menu": "Speisekarte",
                "Fourchette": "Gabel",
                "Cuillère": "Löffel",
                "Couteau": "Messer",
                "Bouteille": "Flasche",
                "Verre": "Becher",
                "Serviettes": "Servietten",
                "J'aimerais prendre...": "Ich hätte gerne...",
                "Sel": "Salz",
                "Sucre": "Zucker",
                "Pain": "Brot",
                "Viande": "Fleisch",
                "Veau": "Rindfleisch",
                "Porc": "Schweinefleisch",
                "Volaille": "Geflügel",
                "Poisson": "Fisch",
                "Fruit": "Obst",
                "Pâtes": "Nudeln",
                "Riz": "Reis",
                "Légume": "Gemüse",
                "Pomme de terre": "Kartoffel",
                "Eau": "Wasser",
                "Vin": "Wein",
                "Bière": "Bier",
                "Café": "Kaffee",
                "Thé": "Tee",
                "Sans alcool": "Alkoholfrei",
                "Boissons fraîches, Jus": "Erfrischungsgetränke, Saft",
                "Zéro": "Null",
                "Un(e)": "Eins",
                "Deux": "Zwei",
                "Trois": "Drei",
                "Quatre": "Vier",
                "Cinq": "Fünf",
                "Six": "Sechs",
                "Sept": "Sieben",
                "Huit": "Acht",
                "Neuf": "Neun",
                "Dix": "Zehn",
                "Onze": "Elf",
                "Douze": "Zwölf",
                "Treize": "Dreizehn",
                "Quatorze": "Vierzehn",
                "Quinze": "Fünfzehn",
                "Seize": "Sechzehn",
                "Dix-sept": "Siebzehn",
                "Dix-huit": "Achtzehn",
                "Dix-neuf": "Neunzehn",
                "Vingt": "Zwanzig",
                "Vingt-et-un(e)": "Einundzwanzig",
                "Trente": "Dreissig",
                "Quarante": "Vierzig",
                "Cinquante": "Fünfzig",
                "Soixante": "Sechzig",
                "Soixante-dix": "Siebzig",
                "Quatre-vingts": "Achtzig",
                "Quatre-vingt-dix": "Neunzig",
                "Cent": "Hundert",
                "Mille": "Tausend",
                "Un million": "Million",
                "Mon numéro de téléphone est le...": "Meine Telefonnummer ist...",
                "Le numéro de mon hôtel est le...": "Die Nummer meines Hotels ist...",
                "Il est trois heures et demie": "Es ist halb vier",
                "Il est onze heures": "Es ist elf Uhr",
                "Où puis-je changer de l'argent?": "Wo kann ich Geld umtauschen?",
                "Vous avez besoin de mes papiers": "",
                "D'identité?": "Brauchen Sie meinen Ausweis?",
                "Je dois voir un médecin": "Ich brauche einen Arzt",
                "J'ai mal à la tête": "Ich habe Kopfschmerzen",
                "Appelez une ambulance!": "Rufen Sie einen Notarztwagen",
                "J'ai mal aux dents": "Ich habe Zahnschmerzen",
                "Où est le/la... le/la plus proche?": "Wo ist das/der/die nächste...?",
                "Le service des urgences": "Die Notaufnahme",
                "Le dentiste": "Der Zahnarzt",
                "La pharmacie": "Apotheke",
                "Je suis allergique à la pénicilline": "Ich bin gegen Penizillin allergisch",
                "Je voudrais de l'aspirine": "Ich hätte gerne Aspirin",
                "J'ai besoin d'un analgésique": "Ich hätte gerne ein Schmerzmittel",
                "J'ai mal...": "Mir tut...weh",
                "à l'estomac": "Der Magen",
                "Au bras": "Der Arm",
                "à la jambe": "Das Bein",
                "Aux oreilles": "Die Ohren",
                "à la gorge": "Der Hals",
                "J'ai envie de vomir.": "Ich muss mich übergeben",
                "La poste": "Postamt",
                "Le musée": "Museum",
                "La banque": "Bank",
                "La police": "Polizei",
                "L'hôpital": "Krankenhaus",
                "Le magasin": "Geschäft",
                "Le restaurant": "Restaurant",
                "L'eglise": "Kirche",
                "Les toilettes": "Toiletten",
                "La rue": "Strasse",
                "La place": "Platz",
                "La piscine": "Schwimmbad",
                "La mer": "Meer",
                "La montagne": "Berg",
                "J'ai réservé.": "Ich habe eine Reservierung.",
                "J'aimerais une chambre.": "Ich möchte gerne ein Zimmer.",
                "J'aimerais voir la chambre.": "Ich würde gerne das Zimmer sehen.",
                "Drap": "Betttuch",
                "Couverture": "Decke",
                "Serviette": "Handtuch",
                "Gel": "Gel",
                "Shampoing": "Shampoo",
                "Papier toilette": "Toilettenpapier",
                "Réception": "Empfang",
                "Clé": "Schlüssel",
                "A quelle heure servez-vous... ?": "Um wieviel Uhr wird...serviert?",
                "Le petit déjeuner": "Das Frühstück",
                "Le déjeuner": "Das Essen",
                "Le dîner": "Das Abendessen",
                "Avez-vous un coffre-fort ?": "Haben Sie ein Safe?",
                "Avez-vous un service de chambre ?": "Haben Sie Zimmerservice?",
                "Comment faut-il faire pour appeler à l'étranger ?": "Wie kann ich ins Ausland anrufen?",
                "J'aimerais annuler la réservation au nom de...": "Ich möchte die Reservierung im Namen von...annullieren",
                "Où est... ?/Je cherche": "Wo ist...?/Ich suche...",
                "Gauche": "Links",
                "Droite": "Rechts",
                "Tout droit": "Geradeaus",
                "En-haut": "Oben",
                "En-bas": "Unten",
                "Allez à gauche": "Gehen Sie nach links",
                "Allez à droite": "Gehen Sie nach rechts",
                "J'ai besoin d'un plan.": "Ich brauche eine Karte.",
                "Carte/Plan": "Stadtplan / Landkarte",
                "Informations touristiques": "Fremdenverkehrsinformation",
                "Quelle heure est-il?": "Wie viel Uhr ist es?",
                "Aujourd'hui": "Heute",
                "Hier": "Gestern",
                "Demain": "Morgen",
                "Joyeux anniversaire": "Alles Gute zum Geburtstag",
                "Lundi": "Montag",
                "Mardi": "Dienstag",
                "Mercredi": "Mittwoch",
                "Jeudi": "Donnerstag",
                "Vendredi": "Freitag",
                "Samedi": "Samstag",
                "Dimanche": "Sonntag",
                "Combien ça coûte?": "Was kostet das?",
                "Vous acceptez les cartes de crédit?": "Kann ich mit Kreditkarte bezahlen?",
                "A quelle heure ouvrez / fermez vous?": "Um wieviel Uhr macht auf/zu?",
                "Quels sont vos horaires?": "Welche Öffnungszeiten haben Sie?",
                "Ouvert": "Geöffnet",
                "Fermé": "Geschlossen",
                "Carte postale": "Postkarte",
                "Timbres": "Briefmarken",
                "Cher": "Teuer",
                "Bon marché": "Billig",
                "Plus": "Mehr",
                "Moins": "Weniger",
                "J'aimerais acheter/louer": "Ich würde gerne kaufen / mieten.",
                "Je regarde, c'est tout": "Ich sehe mich nur um.",
                "Vous pouvez me montrer cela?": "Könnten Sie mir das zeigen?",
                "Vous pouvez me l'envoyer?": "Können Sie mir das schicken?",
                "Puis-je essayer...?": "Könnte ich...anprobieren?",
                "Ce costume / ce tailleur": "Diesen Anzug",
                "Ces chaussures": "Diese Schuhe",
                "Cette robe": "Dieses Kleid",
                "Il me faut une taille...": "Ich benötige eine...Grösse",
                "Plus grande": "Grössere",
                "Plus petite": "Kleinere"
            },
            "it": {
                "Oui": "Si",
                "Non": "No",
                "Merci": "Grazie",
                "De rien": "Prego",
                "Au revoir": "Arrivederci",
                "Bonjour": "Buon giorno",
                "S'il vous plaît": "Per favore",
                "Excusez-moi": "Mi scusi",
                "Bonjour/Bonsoir": "Buona sera",
                "Bonsoir/Bonne nuit": "Buona notte",
                "Je ne comprends pas": "Prego?",
                "Enchanté de vous connaître.": "Lieto di conoscerla.",
                "Comment vas-tu?": "Come sta?",
                "Bien": "Bene",
                "Mal": "Male",
                "D'accord": "D'accordo",
                "Où est le guichet des objets perdus?": "Dove si trova lo sportello degli oggetti persi?",
                "Où puis-je louer une voiture?": "Dove posso noleggiare una macchina?",
                "Où puis-je retirer de l'argent?": "Dove posso trovare un Bancomat?",
                "Où sont les toilettes?": "Dov'è il bagno?",
                "Billets, Tickets": "Biglietti, tickets",
                "A quelle heure part...?": "A che ora parte...?",
                "Le train": "Il treno",
                "L'avion": "L' aereo",
                "Le bus": "L' autobus",
                "Le bateau": "Il traghetto",
                "Aéroport": "Aeroporto",
                "Métro": "Metropolitana",
                "Gare": "Stazione di",
                "Départs": "Partenze",
                "Arrivées": "Arrivi",
                "Parking": "Parcheggio",
                "Location de voitures": "Noleggio auto",
                "Hôtel": "Hotel",
                "Chambre": "Stanza",
                "Réservations": "Prenotazioni",
                "Passeport": "Passaporto",
                "Terminal": "Terminal",
                "Taxi": "Taxi",
                "Vous êtes libre?": "È libero?",
                "Emmenez-moi à...": "Mi porti a...",
                "Arrêtez-vous ici!": "Si fermi qui!",
                "Je suis pressé!": "Ho fretta!",
                "Nous voudrions voir la carte.": "Vorremmo vedere il menu",
                "Une table pour deux, s'il vous plaît.": "Un tavolo per due persone, per favore",
                "J'aime la viande...": "Mi piace la carne...",
                "Bien cuite": "Molto cotta",
                "Saignante": "Poco cotta",
                "à point": "Cotta al punto giusto",
                "Entrée": "Il primo",
                "Plat de résistance": "Piatto principale",
                "Dessert": "Il dessert",
                "Serveur": "Cameriere",
                "L'addition!": "Il conto!",
                "J'aimerais réserver une table": "Desidererei prenotare un tavolo",
                "Menu": "Menu",
                "Fourchette": "Forchetta",
                "Cuillère": "Cucchiaio",
                "Couteau": "Coltello",
                "Bouteille": "Bottiglia",
                "Verre": "Bicchiere",
                "Serviettes": "Tovaglioli",
                "J'aimerais prendre...": "Vorrei ...",
                "Sel": "Sale",
                "Sucre": "Zucchero",
                "Pain": "Pane",
                "Viande": "Carne",
                "Veau": "Manzo",
                "Porc": "Maiale",
                "Volaille": "Pollame",
                "Poisson": "Pesce",
                "Fruit": "Frutta",
                "Pâtes": "Pasta",
                "Riz": "Riso",
                "Légume": "Verdura",
                "Pomme de terre": "Patata",
                "Eau": "Acqua",
                "Vin": "Vino",
                "Bière": "Birra",
                "Café": "Caffè",
                "Thé": "Té",
                "Sans alcool": "Senza alcol",
                "Boissons fraîches, Jus": "Bibita, Succo",
                "Zéro": "Zero",
                "Un(e)": "Uno",
                "Deux": "Due",
                "Trois": "Tre",
                "Quatre": "Quattro",
                "Cinq": "Cinque",
                "Six": "Sei",
                "Sept": "Sette",
                "Huit": "Otto",
                "Neuf": "Nove",
                "Dix": "Dieci",
                "Onze": "Undici",
                "Douze": "Dodici",
                "Treize": "Tredici",
                "Quatorze": "Quattordici",
                "Quinze": "Quindici",
                "Seize": "Sedici",
                "Dix-sept": "Diciassette",
                "Dix-huit": "Diciotto",
                "Dix-neuf": "Diciannove",
                "Vingt": "Venti",
                "Vingt-et-un(e)": "Ventuno",
                "Trente": "Trenta",
                "Quarante": "Quaranta",
                "Cinquante": "Cinquanta",
                "Soixante": "Sessanta",
                "Soixante-dix": "Settanta",
                "Quatre-vingts": "Ottanta",
                "Quatre-vingt-dix": "Novanta",
                "Cent": "Cento",
                "Mille": "Mille",
                "Un million": "Un milione",
                "Mon numéro de téléphone est le...": "Il mio numero di telefono è...",
                "Le numéro de mon hôtel est le...": "Il numero di telefono del mio hotel è..",
                "Il est trois heures et demie": "Sono le tre e mezza",
                "Il est onze heures": "Sono le undici",
                "Où puis-je changer de l'argent?": "Dove posso cambiare valuta?",
                "Vous avez besoin de mes papiers d'identité?": "Ha bisogno della mia identificazione?",
                "Je dois voir un médecin": "Ho bisogno di un medico",
                "J'ai mal à la tête": "Mi fa male la testa",
                "Appelez une ambulance!": "Chiamate un' ambulanza!",
                "J'ai mal aux dents": "Ho mal di denti",
                "Où est le/la... le/la plus proche?": "Dov' è .... piú vicino?",
                "Le service des urgences": "Il pronto soccorso",
                "Le dentiste": "Il dentista",
                "La pharmacie": "Farmacia",
                "Je suis allergique à la pénicilline": "Sono allergico alla penicillina",
                "Je voudrais de l'aspirine": "Vorrei un' aspirina",
                "J'ai besoin d'un analgésique": "Ho bisogno di un analgesico",
                "J'ai mal...": "Mi fa male...",
                "à l'estomac": "Lo stomaco",
                "Au bras": "Il braccio",
                "à la jambe": "La gamba",
                "Aux oreilles": "Le orecchie",
                "à la gorge": "La gola",
                "J'ai envie de vomir.": "Ho un conato di vomito",
                "La poste": "Ufficio Postale",
                "Le musée": "Museo",
                "La banque": "Banca",
                "La police": "Polizia",
                "L'hôpital": "Ospedale",
                "Le magasin": "Negozio",
                "Le restaurant": "Ristorante",
                "L'eglise": "Chiesa",
                "Les toilettes": "Bagno",
                "La rue": "Via/Strada",
                "La place": "Piazza",
                "La piscine": "Piscina",
                "La mer": "Mare",
                "La montagne": "Montagna",
                "J'ai réservé.": "Ho una prenotazione.",
                "J'aimerais une chambre.": "Vorrei una stanza.",
                "J'aimerais voir la chambre.": "Mi piacerebbe vedere la stanza.",
                "Drap": "Lenzuola",
                "Couverture": "Coperta",
                "Serviette": "Asciugamano",
                "Gel": "Bagnoschiuma",
                "Shampoing": "Shampoo",
                "Papier toilette": "Carta igienica",
                "Réception": "Reception",
                "Clé": "Chiave",
                "A quelle heure servez-vous... ?": "A che ora si serve... ?",
                "Le petit déjeuner": "La colazione",
                "Le déjeuner": "Il pranzo",
                "Le dîner": "La cena",
                "Avez-vous un coffre-fort ?": "Avete una cassaforte ?",
                "Avez-vous un service de chambre ?": "Avete servizio in camera ?",
                "Comment faut-il faire pour appeler à l'étranger ?": "Come faccio per telefonare all' estero?",
                "J'aimerais annuler la réservation au nom de...": "Vorrei annullare la prenotazione a nome di...",
                "Où est... ?/Je cherche": "Dov'è...?/Cerco...",
                "Gauche": "Sinistra",
                "Droite": "Destra",
                "Tout droit": "Diritto, dritto",
                "En-haut": "Sopra",
                "En-bas": "Sotto",
                "Allez à gauche": "Vai a sinistra",
                "Allez à droite": "Vai a destra",
                "J'ai besoin d'un plan.": "Ho bisogno di una cartina.",
                "Carte/Plan": "Mappa/Piano stradale",
                "Informations touristiques": "Informazione turistica",
                "Quelle heure est-il?": "Che ora è?",
                "Aujourd'hui": "Oggi",
                "Hier": "Ieri",
                "Demain": "Domani",
                "Joyeux anniversaire": "Auguri per il tuo compleanno",
                "Lundi": "Lunedí",
                "Mardi": "Martedí",
                "Mercredi": "Mercoledí",
                "Jeudi": "Giovedí",
                "Vendredi": "Venerdí",
                "Samedi": "Sabato",
                "Dimanche": "Domenica",
                "Combien ça coûte?": "Quanto costa?",
                "Vous acceptez les cartes de crédit?": "Accettate carte di credito?",
                "A quelle heure ouvrez / fermez vous?": "A che ora apre / chiude?",
                "Quels sont vos horaires?": "Che orario fate?",
                "Ouvert": "Aperto",
                "Fermé": "Chiuso",
                "Carte postale": "Cartolina",
                "Timbres": "Francobolli",
                "Cher": "Caro",
                "Bon marché": "A buon mercato",
                "Plus": "Più",
                "Moins": "Meno",
                "J'aimerais acheter/louer": "Mi piacerebbe acquistare/affittare.",
                "Je regarde, c'est tout": "Stò solo dando un'occhiata.",
                "Vous pouvez me montrer cela?": "Può farmi vedere questo?",
                "Vous pouvez me l'envoyer?": "Può spedirmelo?",
                "Puis-je essayer...?": "Posso provare...?",
                "Ce costume / ce tailleur": "Questo completo",
                "Ces chaussures": "Quelle scarpe",
                "Cette robe": "Questo vestito",
                "Il me faut une taille...": "Mi serve una taglia...",
                "Plus grande": "Piú grande",
                "Plus petite": "Piú piccola"
            },
            "pt": {
                "Oui": "Sim",
                "Non": "Não",
                "Merci": "Obrigado",
                "De rien": "De nada",
                "Au revoir": "Adeus",
                "Bonjour": "Bom dia",
                "S'il vous plaît": "Por favor",
                "Excusez-moi": "Desculpe",
                "Bonjour/Bonsoir": "Boa tarde",
                "Bonsoir/Bonne nuit": "Boa noite",
                "Je ne comprends pas": "Não percebo",
                "Enchanté de vous connaître.": "É um prazer conhecê-lo.",
                "Comment vas-tu?": "Como está?",
                "Bien": "Bem",
                "Mal": "Mal",
                "D'accord": "Está bem",
                "Où est le guichet des objets perdus?": "Onde está o balcão de objectos perdidos?",
                "Où puis-je louer une voiture?": "Onde posso alugar um carro?",
                "Où puis-je retirer de l'argent?": "Onde posso levantar dinheiro?",
                "Où sont les toilettes?": "Onde está a casa de banho?",
                "Billets, Tickets": "Bilhetes, Tickets",
                "A quelle heure part...?": "A que hora parte...?",
                "Le train": "O comboio",
                "L'avion": "O avião",
                "Le bus": "O autocarro",
                "Le bateau": "O barco",
                "Aéroport": "Aeroporto",
                "Métro": "Metro",
                "Gare": "Estação de",
                "Départs": "Saídas",
                "Arrivées": "Chegadas",
                "Parking": "Estacionamento",
                "Location de voitures": "Aluguer de automóveis",
                "Hôtel": "Hotel",
                "Chambre": "Quarto",
                "Réservations": "Reservas",
                "Passeport": "Passaporte",
                "Terminal": "Terminal",
                "Taxi": "Taxi",
                "Vous êtes libre?": "Está livre?",
                "Emmenez-moi à...": "Leve-me a...",
                "Arrêtez-vous ici!": "Pare aqui!",
                "Je suis pressé!": "Tenho pressa!",
                "Nous voudrions voir la carte.": "Queremos ver a ementa",
                "Une table pour deux, s'il vous plaît.": "Uma mesa para dois, por favor",
                "J'aime la viande...": "Gosto da carne...",
                "Bien cuite": "Bem passada",
                "Saignante": "Mal passada",
                "à point": "Normal",
                "Entrée": "Entrada",
                "Plat de résistance": "Prato principal",
                "Dessert": "Sobremesa",
                "Serveur": "Empregado de mesa",
                "L'addition!": "A conta!",
                "J'aimerais réserver une table": "Gostava de reservar uma mesa",
                "Menu": "Ementa",
                "Fourchette": "Garfo",
                "Cuillère": "Colher",
                "Couteau": "Faca",
                "Bouteille": "Garrafa",
                "Verre": "Copo",
                "Serviettes": "Guardanapos",
                "J'aimerais prendre...": "Queria...",
                "Sel": "Sal",
                "Sucre": "Açúcar",
                "Pain": "Pão",
                "Viande": "Carne",
                "Veau": "Vaca",
                "Porc": "Porco",
                "Volaille": "Ave",
                "Poisson": "Peixe",
                "Fruit": "Fruta",
                "Pâtes": "Massa",
                "Riz": "Arroz",
                "Légume": "Legumes",
                "Pomme de terre": "Batata",
                "Eau": "Água",
                "Vin": "Vinho",
                "Bière": "Cerveja",
                "Café": "Café",
                "Thé": "Chá",
                "Sans alcool": "Sem Álcool",
                "Boissons fraîches, Jus": "Refrescos, Sumo",
                "Zéro": "Zero",
                "Un(e)": "Um, uma",
                "Deux": "Dois, duas",
                "Trois": "Três",
                "Quatre": "Quatro",
                "Cinq": "Cinco",
                "Six": "Seis",
                "Sept": "Sete",
                "Huit": "Oito",
                "Neuf": "Nove",
                "Dix": "Dez",
                "Onze": "Onze",
                "Douze": "Doze",
                "Treize": "Treze",
                "Quatorze": "Catorze",
                "Quinze": "Quinze",
                "Seize": "Dezasseis",
                "Dix-sept": "Dezassete",
                "Dix-huit": "Dezoito",
                "Dix-neuf": "Dezanove",
                "Vingt": "Vinte",
                "Vingt-et-un(e)": "Vinte e um",
                "Trente": "Trinta",
                "Quarante": "Quarenta",
                "Cinquante": "Cinquenta",
                "Soixante": "Sessenta",
                "Soixante-dix": "Setenta",
                "Quatre-vingts": "Oitenta",
                "Quatre-vingt-dix": "Noventa",
                "Cent": "Cem",
                "Mille": "Mil",
                "Un million": "Un milhão",
                "Mon numéro de téléphone est le...": "O meu número de telefone é...",
                "Le numéro de mon hôtel est le...": "O número do meu hotel é...",
                "Il est trois heures et demie": "São três e meia",
                "Il est onze heures": "São onze horas",
                "Où puis-je changer de l'argent?": "Donde posso trocar dinheiro?",
                "Vous avez besoin de mes papiers d'identité?": "Precisa da minha identificação?",
                "Je dois voir un médecin": "Preciso ver um médico",
                "J'ai mal à la tête": "Tenho dor de cabeça",
                "Appelez une ambulance!": "Chame uma ambulância",
                "J'ai mal aux dents": "Tenho dor de dentes",
                "Où est le/la... le/la plus proche?": "Onde está...mais próxima?",
                "Le service des urgences": "A sala de urgências",
                "Le dentiste": "O dentista",
                "La pharmacie": "Farmácia",
                "Je suis allergique à la pénicilline": "Tenho alergia à penicilina",
                "Je voudrais de l'aspirine": "Queria aspirinas",
                "J'ai besoin d'un analgésique": "Preciso um analgésico",
                "J'ai mal...": "Dói-me...",
                "à l'estomac": "O estômago",
                "Au bras": "O braço",
                "à la jambe": "A perna",
                "Aux oreilles": "Os ouvidos",
                "à la gorge": "A garganta",
                "J'ai envie de vomir.": "Tenho vontade de vomitar",
                "La poste": "Correios",
                "Le musée": "Museu",
                "La banque": "Banco",
                "La police": "Policia",
                "L'hôpital": "Hospital",
                "Le magasin": "Loja",
                "Le restaurant": "Restaurante",
                "L'eglise": "Igreja",
                "Les toilettes": "Casas de banho",
                "La rue": "Rua",
                "La place": "Praça",
                "La piscine": "Piscina",
                "La mer": "Mar",
                "La montagne": "Montanha",
                "J'ai réservé.": "Tenho uma reserva.",
                "J'aimerais une chambre.": "Queria um quarto.",
                "J'aimerais voir la chambre.": "Gostava de ver o quarto.",
                "Drap": "Lençol",
                "Couverture": "Cobertor",
                "Serviette": "Toalha",
                "Gel": "Gel",
                "Shampoing": "Champô",
                "Papier toilette": "Papel Higiénico",
                "Réception": "Recepção",
                "Clé": "Chave",
                "A quelle heure servez-vous... ?": "A que hora servem...?",
                "Le petit déjeuner": "O pequeno-almoço",
                "Le déjeuner": "O almoço",
                "Le dîner": "O jantar",
                "Avez-vous un coffre-fort ?": "Têm caixa de segurança?",
                "Avez-vous un service de chambre ?": "Têm serviço de quartos?",
                "Comment faut-il faire pour appeler à l'étranger ?": "Como posso telefonar para o estrangeiro?",
                "J'aimerais annuler la réservation au nom de...": "Quero cancelar a reserva a nome de...",
                "Où est... ?/Je cherche": "Donde está...?/Procuro...",
                "Gauche": "Esquerda",
                "Droite": "Direita",
                "Tout droit": "Directo, direito",
                "En-haut": "Em cima",
                "En-bas": "Em baixo",
                "Allez à gauche": "Vá para a esquerda",
                "Allez à droite": "Vá para a direita",
                "J'ai besoin d'un plan.": "Preciso de um mapa.",
                "Carte/Plan": "Mapa/Plano",
                "Informations touristiques": "Informação Turística",
                "Quelle heure est-il?": "Que hora é?",
                "Aujourd'hui": "Hoje",
                "Hier": "Ontem",
                "Demain": "Amanhã",
                "Joyeux anniversaire": "Parabéns",
                "Lundi": "Segunda",
                "Mardi": "Terça",
                "Mercredi": "Quarta",
                "Jeudi": "Quinta",
                "Vendredi": "Sexta",
                "Samedi": "Sábado",
                "Dimanche": "Domingo",
                "Combien ça coûte?": "Quanto custa?",
                "Vous acceptez les cartes de crédit?": "Aceitam cartões de crédito?",
                "A quelle heure ouvrez / fermez vous?": "A que hora abre / fecha?",
                "Quels sont vos horaires?": "Que horário têm?",
                "Ouvert": "Aberto",
                "Fermé": "Fechado",
                "Carte postale": "Postal",
                "Timbres": "Selos",
                "Cher": "Caro",
                "Bon marché": "Barato",
                "Plus": "Mais",
                "Moins": "Menos",
                "J'aimerais acheter/louer": "Gostava de comprar/alugar",
                "Je regarde, c'est tout": "Só estou a ver",
                "Vous pouvez me montrer cela?": "Pode mostrar-me isto?",
                "Vous pouvez me l'envoyer?": "Pode mandar-me isto?",
                "Puis-je essayer...?": "Poderia provar...",
                "Ce costume / ce tailleur": "Este fato",
                "Ces chaussures": "Esses sapatos",
                "Cette robe": "Este vestido",
                "Il me faut une taille...": "Preciso um tamanho...",
                "Plus grande": "Maior",
                "Plus petite": "Mais pequeno"
            }
        },
        "de": {
            "it": {
                "Ja": "Si",
                "Nein": "No",
                "Danke": "Grazie",
                "Bitte": "Per favore",
                "Auf Wiedersehen": "Arrivederci",
                "Hallo": "Salve",
                "Entschuldigung": "Mi scusi",
                "Guten Morgen": "Buon giorno",
                "Guten Tag / Guten Abend": "Buona sera",
                "Gute Nacht": "Buona notte",
                "Ich verstehe Sie nicht.": "Prego?",
                "Ich freue mich, Sie kennenzulernen.": "Lieto di conoscerla.",
                "Wie geht's?": "Come sta?",
                "Gut": "Bene",
                "Schlecht": "Male",
                "Einverstanden": "D'accordo",
                "Wo ist der Schalter für Fundsachen?": "Dove si trova lo sportello degli oggetti persi?",
                "Wo kann ich ein Auto mieten?": "Dove posso noleggiare una macchina?",
                "Wo kann ich Geld abheben?": "Dove posso trovare un Bancomat?",
                "Wo sind die Toiletten?": "Dov'è il bagno?",
                "Tickets": "Biglietti, tickets",
                "Um wieviel Uhr geht...?": "A che ora parte...?",
                "Der Zug": "Il treno",
                "Das Flugzeug": "L' aereo",
                "Der Bus": "L' autobus",
                "Das Schiff": "Il traghetto",
                "Flughafen": "Aeroporto",
                "U-Bahn": "Metropolitana",
                "Bahnhof": "Stazione di",
                "Abflug /Abfahrt": "Partenze",
                "Ankunft": "Arrivi",
                "Parkplatz": "Parcheggio",
                "Autovermietung": "Noleggio auto",
                "Hotel": "Hotel",
                "Zimmer": "Stanza",
                "Reservierungen": "Prenotazioni",
                "Pass": "Passaporto",
                "Terminal / Bahnsteig": "Terminal",
                "Taxi": "Taxi",
                "Ist hier frei?": "È libero?",
                "Bringen Sie mich zu...": "Mi porti a...",
                "Bleiben Sie hier stehen!": "Si fermi qui!",
                "Ich habe es eilig!": "Ho fretta!",
                "Wir möchten gerne die Karte sehen...": "Vorremmo vedere il menu",
                "Bitte einen Tisch für zwei Personen": "Un tavolo per due persone, per favore",
                "Ich hätte gerne das Fleisch...": "Mi piace la carne...",
                "Gut durchgebraten": "Molto cotta",
                "Nicht durchgebraten": "Poco cotta",
                "Medium": "Cotta al punto giusto",
                "Vorspeise": "Il primo",
                "Hauptgang": "Piatto principale",
                "Nachtisch": "Il dessert",
                "Ober / Kellner": "Cameriere",
                "Die Rechnung": "Il conto!",
                "Ich würde gerne einen Tisch bestellen": "Desidererei prenotare un tavolo",
                "Speisekarte": "Menu",
                "Gabel": "Forchetta",
                "Löffel": "Cucchiaio",
                "Messer": "Coltello",
                "Flasche": "Bottiglia",
                "Glas": "Coppa",
                "Becher": "Bicchiere",
                "Servietten": "Tovaglioli",
                "Ich hätte gerne...": "Vorrei ...",
                "Salz": "Sale",
                "Zucker": "Zucchero",
                "Brot": "Pane",
                "Fleisch": "Carne",
                "Rindfleisch": "Manzo",
                "Schweinefleisch": "Maiale",
                "Geflügel": "Pollame",
                "Fisch": "Pesce",
                "Obst": "Frutta",
                "Nudeln": "Pasta",
                "Reis": "Riso",
                "Gemüse": "Verdura",
                "Kartoffel": "Patata",
                "Wasser": "Acqua",
                "Wein": "Vino",
                "Bier": "Birra",
                "Kaffee": "Caffè",
                "Tee": "Té",
                "Alkoholfrei": "Senza alcol",
                "Erfrischungsgetränke, Saft": "Bibita, Succo",
                "Null": "Zero",
                "Eins": "Uno",
                "Zwei": "Due",
                "Drei": "Tre",
                "Vier": "Quattro",
                "Fünf": "Cinque",
                "Sechs": "Sei",
                "Sieben": "Sette",
                "Acht": "Otto",
                "Neun": "Nove",
                "Zehn": "Dieci",
                "Elf": "Undici",
                "Zwölf": "Dodici",
                "Dreizehn": "Tredici",
                "Vierzehn": "Quattordici",
                "Fünfzehn": "Quindici",
                "Sechzehn": "Sedici",
                "Siebzehn": "Diciassette",
                "Achtzehn": "Diciotto",
                "Neunzehn": "Diciannove",
                "Zwanzig": "Venti",
                "Einundzwanzig": "Ventuno",
                "Dreissig": "Trenta",
                "Vierzig": "Quaranta",
                "Fünfzig": "Cinquanta",
                "Sechzig": "Sessanta",
                "Siebzig": "Settanta",
                "Achtzig": "Ottanta",
                "Neunzig": "Novanta",
                "Hundert": "Cento",
                "Tausend": "Mille",
                "Million": "Un milione",
                "Meine Telefonnummer ist...": "Il mio numero di telefono è...",
                "Die Nummer meines Hotels ist...": "Il numero di telefono del mio hotel è...",
                "Es ist halb vier": "Sono le tre e mezza",
                "Es ist elf Uhr": "Sono le undici",
                "Wo kann ich Geld umtauschen?": "Dove posso cambiare valuta?",
                "Brauchen Sie meinen Ausweis?": "Ha bisogno della mia identificazione?",
                "Ich brauche einen Arzt": "Ho bisogno di un medico",
                "Ich habe Kopfschmerzen": "Mi fa male la testa",
                "Rufen Sie einen Notarztwagen": "Chiamate un' ambulanza!",
                "Ich habe Zahnschmerzen": "Ho mal di denti",
                "Wo ist das/der/die nächste...?": "Dov' è .... piú vicino?",
                "Die Notaufnahme": "Il pronto soccorso",
                "Der Zahnarzt": "Il dentista",
                "Die Apotheke": "La farmacia",
                "Ich bin gegen Penizillin allergisch": "Sono allergico alla penicillina",
                "Ich hätte gerne Aspirin": "Vorrei un' aspirina",
                "Ich hätte gerne ein Schmerzmittel": "Ho bisogno di un analgesico",
                "Mir tut...weh": "Mi fa male...",
                "Der Magen": "Lo stomaco",
                "Der Arm": "Il braccio",
                "Das Bein": "La gamba",
                "Die Ohren": "Le orecchie",
                "Der Hals": "La gola",
                "Ich muss mich übergeben": "Ho un conato di vomito",
                "Postamt": "Ufficio Postale",
                "Museum": "Museo",
                "Bank": "Banca",
                "Polizei": "Polizia",
                "Krankenhaus": "Ospedale",
                "Apotheke": "Farmacia",
                "Geschäft": "Negozio",
                "Restaurant": "Ristorante",
                "Kirche": "Chiesa",
                "Toiletten": "Bagno",
                "Strasse": "Via/Strada",
                "Platz": "Piazza",
                "Schwimmbad": "Piscina",
                "Meer": "Mare",
                "Berg": "Montagna",
                "Ich habe eine Reservierung.": "Ho una prenotazione.",
                "Ich möchte gerne ein Zimmer.": "Vorrei una stanza.",
                "Ich würde gerne das Zimmer sehen.": "Mi piacerebbe vedere la stanza.",
                "Betttuch": "Lenzuola",
                "Decke": "Coperta",
                "Handtuch": "Asciugamano",
                "Gel": "Bagnoschiuma",
                "Shampoo": "Shampoo",
                "Toilettenpapier": "Carta igienica",
                "Empfang": "Reception",
                "Schlüssel": "Chiave",
                "Um wieviel Uhr wird...serviert?": "A che ora si serve... ?",
                "Das Frühstück": "La colazione",
                "Das Essen": "Il pranzo",
                "Das Abendessen": "La cena",
                "Haben Sie ein Safe?": "Avete una cassaforte ?",
                "Haben Sie Zimmerservice?": "Avete servizio in camera ?",
                "Wie kann ich ins Ausland anrufen?": "Come faccio per telefonare all' estero?",
                "Ich möchte die Reservierung im Namen von...annullieren": "Vorrei annullare la prenotazione a nome di...",
                "Wo ist...?/Ich suche...": "Dov'è...?/Cerco...",
                "Links": "Sinistra",
                "Rechts": "Destra",
                "Geradeaus": "Diritto, dritto",
                "Oben": "Sopra",
                "Unten": "Sotto",
                "Gehen Sie nach links": "Vai a sinistra",
                "Gehen Sie nach rechts": "Vai a destra",
                "Ich brauche eine Karte.": "Ho bisogno di una cartina.",
                "Stadtplan / Landkarte": "Mappa/Piano stradale",
                "Fremdenverkehrsinformation": "Informazione turistica",
                "Wie viel Uhr ist es?": "Che ora è?",
                "Heute": "Oggi",
                "Gestern": "Ieri",
                "Morgen": "Domani",
                "Alles Gute zum Geburtstag": "Auguri per il tuo compleanno",
                "Montag": "Lunedí",
                "Dienstag": "Martedí",
                "Mittwoch": "Mercoledí",
                "Donnerstag": "Giovedí",
                "Freitag": "Venerdí",
                "Samstag": "Sabato",
                "Sonntag": "Domenica",
                "Was kostet das?": "Quanto costa?",
                "Kann ich mit Kreditkarte bezahlen?": "Accettate carte di credito?",
                "Um wieviel Uhr macht auf/zu?": "A che ora apre / chiude?",
                "Welche Öffnungszeiten haben Sie?": "Che orario fate?",
                "Geöffnet": "Aperto",
                "Geschlossen": "Chiuso",
                "Postkarte": "Cartolina",
                "Briefmarken": "Francobolli",
                "Teuer": "Caro",
                "Billig": "A buon mercato",
                "Mehr": "Più",
                "Weniger": "Meno",
                "Ich würde gerne kaufen / mieten.": "Mi piacerebbe acquistare/affittare.",
                "Ich sehe mich nur um.": "Stò solo dando un'occhiata.",
                "Könnten Sie mir das zeigen?": "Può farmi vedere questo?",
                "Können Sie mir das schicken?": "Può spedirmelo?",
                "Könnte ich...anprobieren?": "Posso provare...?",
                "Diesen Anzug": "Questo completo",
                "Diese Schuhe": "Quelle scarpe",
                "Dieses Kleid": "Questo vestito",
                "Ich benötige eine...Grösse": "Mi serve una taglia...",
                "Grössere": "Piú grande",
                "Kleinere": "Piú piccola"
            },
            "pt": {
                "Ja": "Sim",
                "Nein": "Não",
                "Danke": "Obrigado",
                "Bitte": "Por favor",
                "Auf Wiedersehen": "Adeus",
                "Hallo": "Olá",
                "Entschuldigung": "Desculpe",
                "Guten Morgen": "Bom dia",
                "Guten Tag / Guten Abend": "Boa tarde",
                "Gute Nacht": "Boa noite",
                "Ich verstehe Sie nicht.": "Não percebo",
                "Ich freue mich, Sie kennenzulernen.": "É um prazer conhecê-lo.",
                "Wie geht's?": "Como está?",
                "Gut": "Bem",
                "Schlecht": "Mal",
                "Einverstanden": "Está bem",
                "Wo ist der Schalter für Fundsachen?": "Onde está o balcão de objectos",
                "Wo kann ich ein Auto mieten?": "Onde posso alugar um carro?",
                "Wo kann ich Geld abheben?": "Onde posso levantar dinheiro?",
                "Wo sind die Toiletten?": "Onde está a casa de banho?",
                "Tickets": "Bilhetes, Tickets",
                "Um wieviel Uhr geht...?": "A que hora parte...?",
                "Der Zug": "O comboio",
                "Das Flugzeug": "O avião",
                "Der Bus": "O autocarro",
                "Das Schiff": "O barco",
                "Flughafen": "Aeroporto",
                "U-Bahn": "Metro",
                "Bahnhof": "Estação de",
                "Abflug /Abfahrt": "Saídas",
                "Ankunft": "Chegadas",
                "Parkplatz": "Estacionamento",
                "Autovermietung": "Aluguer de automóveis",
                "Hotel": "Hotel",
                "Zimmer": "Quarto",
                "Reservierungen": "Reservas",
                "Pass": "Passaporte",
                "Terminal / Bahnsteig": "Terminal",
                "Taxi": "Taxi",
                "Ist hier frei?": "Está livre?",
                "Bringen Sie mich zu...": "Leve-me a...",
                "Bleiben Sie hier stehen!": "Pare aqui!",
                "Ich habe es eilig!": "Tenho pressa!",
                "Wir möchten gerne die Karte sehen...": "Queremos ver a ementa",
                "Bitte einen Tisch für zwei Personen": "Uma mesa para dois, por favor",
                "Ich hätte gerne das Fleisch...": "Gosto da carne...",
                "Gut durchgebraten": "Bem passada",
                "Nicht durchgebraten": "Mal passada",
                "Medium": "Normal",
                "Vorspeise": "Entrada",
                "Hauptgang": "Prato principal",
                "Nachtisch": "Sobremesa",
                "Ober / Kellner": "Empregado de mesa",
                "Die Rechnung": "A conta!",
                "Ich würde gerne einen Tisch bestellen": "Gostava de reservar uma mesa",
                "Speisekarte": "Ementa",
                "Gabel": "Garfo",
                "Löffel": "Colher",
                "Messer": "Faca",
                "Flasche": "Garrafa",
                "Glas": "Aça",
                "Becher": "Copo",
                "Servietten": "Guardanapos",
                "Ich hätte gerne...": "Queria...",
                "Salz": "Sal",
                "Zucker": "Açúcar",
                "Brot": "Pão",
                "Fleisch": "Carne",
                "Rindfleisch": "Vaca",
                "Schweinefleisch": "Porco",
                "Geflügel": "Ave",
                "Fisch": "Peixe",
                "Obst": "Fruta",
                "Nudeln": "Massa",
                "Reis": "Arroz",
                "Gemüse": "Legumes",
                "Kartoffel": "Batata",
                "Wasser": "Água",
                "Wein": "Vinho",
                "Bier": "Cerveja",
                "Kaffee": "Café",
                "Tee": "Chá",
                "Alkoholfrei": "Sem Álcool",
                "Erfrischungsgetränke, Saft": "Refrescos, Sumo",
                "Null": "Zero",
                "Eins": "Um, uma",
                "Zwei": "Dois, duas",
                "Drei": "Três",
                "Vier": "Quatro",
                "Fünf": "Cinco",
                "Sechs": "Seis",
                "Sieben": "Sete",
                "Acht": "Oito",
                "Neun": "Nove",
                "Zehn": "Dez",
                "Elf": "Onze",
                "Zwölf": "Doze",
                "Dreizehn": "Treze",
                "Vierzehn": "Catorze",
                "Fünfzehn": "Quinze",
                "Sechzehn": "Dezasseis",
                "Siebzehn": "Dezassete",
                "Achtzehn": "Dezoito",
                "Neunzehn": "Dezanove",
                "Zwanzig": "Vinte",
                "Einundzwanzig": "Vinte e um",
                "Dreissig": "Trinta",
                "Vierzig": "Quarenta",
                "Fünfzig": "Cinquenta",
                "Sechzig": "Sessenta",
                "Siebzig": "Setenta",
                "Achtzig": "Oitenta",
                "Neunzig": "Noventa",
                "Hundert": "Cem",
                "Tausend": "Mil",
                "Million": "Un milhão",
                "Meine Telefonnummer ist...": "O meu número de telefone é...",
                "Die Nummer meines Hotels ist...": "O número do meu hotel é...",
                "Es ist halb vier": "São três e meia",
                "Es ist elf Uhr": "São onze horas",
                "Wo kann ich Geld umtauschen?": "Donde posso trocar dinheiro?",
                "Brauchen Sie meinen Ausweis?": "Precisa da minha identificação?",
                "Ich brauche einen Arzt": "Preciso ver um médico",
                "Ich habe Kopfschmerzen": "Tenho dor de cabeça",
                "Rufen Sie einen Notarztwagen": "Chame uma ambulância",
                "Ich habe Zahnschmerzen": "Tenho dor de dentes",
                "Wo ist das/der/die nächste...?": "Onde está...mais próxima?",
                "Die Notaufnahme": "A sala de urgências",
                "Der Zahnarzt": "O dentista",
                "Die Apotheke": "A farmácia",
                "Ich bin gegen Penizillin allergisch": "Tenho alergia à penicilina",
                "Ich hätte gerne Aspirin": "Queria aspirinas",
                "Ich hätte gerne ein Schmerzmittel": "Preciso um analgésico",
                "Mir tut...weh": "Dói-me...",
                "Der Magen": "O estômago",
                "Der Arm": "O braço",
                "Das Bein": "A perna",
                "Die Ohren": "Os ouvidos",
                "Der Hals": "A garganta",
                "Ich muss mich übergeben": "Tenho vontade de vomitar",
                "Postamt": "Correios",
                "Museum": "Museu",
                "Bank": "Banco",
                "Polizei": "Policia",
                "Krankenhaus": "Hospital",
                "Apotheke": "Farmácia",
                "Geschäft": "Loja",
                "Restaurant": "Restaurante",
                "Kirche": "Igreja",
                "Toiletten": "Casas de banho",
                "Strasse": "Rua",
                "Platz": "Praça",
                "Schwimmbad": "Piscina",
                "Meer": "Mar",
                "Berg": "Montanha",
                "Ich habe eine Reservierung.": "Tenho uma reserva.",
                "Ich möchte gerne ein Zimmer.": "Queria um quarto.",
                "Ich würde gerne das Zimmer sehen.": "Gostava de ver o quarto.",
                "Betttuch": "Lençol",
                "Decke": "Cobertor",
                "Handtuch": "Toalha",
                "Gel": "Gel",
                "Shampoo": "Champô",
                "Toilettenpapier": "Papel Higiénico",
                "Empfang": "Recepção",
                "Schlüssel": "Chave",
                "Um wieviel Uhr wird...serviert?": "A que hora servem...?",
                "Das Frühstück": "O pequeno-almoço",
                "Das Essen": "O almoço",
                "Das Abendessen": "O jantar",
                "Haben Sie ein Safe?": "Têm caixa de segurança?",
                "Haben Sie Zimmerservice?": "Têm serviço de quartos?",
                "Wie kann ich ins Ausland anrufen?": "Como posso telefonar para o estrangeiro?",
                "Ich möchte die Reservierung im Namen von...annullieren": "Quero cancelar a reserva a nome de...",
                "Wo ist...?/Ich suche...": "Donde está...?/Procuro...",
                "Links": "Esquerda",
                "Rechts": "Direita",
                "Geradeaus": "Directo, direito",
                "Oben": "Em cima",
                "Unten": "Em baixo",
                "Gehen Sie nach links": "Vá para a esquerda",
                "Gehen Sie nach rechts": "Vá para a direita",
                "Ich brauche eine Karte.": "Preciso de um mapa.",
                "Stadtplan / Landkarte": "Mapa/Plano",
                "Fremdenverkehrsinformation": "Informação Turística",
                "Wie viel Uhr ist es?": "Que hora é?",
                "Heute": "Hoje",
                "Gestern": "Ontem",
                "Morgen": "Amanhã",
                "Alles Gute zum Geburtstag": "Parabéns",
                "Montag": "Segunda",
                "Dienstag": "Terça",
                "Mittwoch": "Quarta",
                "Donnerstag": "Quinta",
                "Freitag": "Sexta",
                "Samstag": "Sábado",
                "Sonntag": "Domingo",
                "Was kostet das?": "Quanto custa?",
                "Kann ich mit Kreditkarte bezahlen?": "Aceitam cartões de crédito?",
                "Um wieviel Uhr macht auf/zu?": "A que hora abre / fecha?",
                "Welche Öffnungszeiten haben Sie?": "Que horário têm?",
                "Geöffnet": "Aberto",
                "Geschlossen": "Fechado",
                "Postkarte": "Postal",
                "Briefmarken": "Selos",
                "Teuer": "Caro",
                "Billig": "Barato",
                "Mehr": "Mais",
                "Weniger": "Menos",
                "Ich würde gerne kaufen / mieten.": "Gostava de comprar/alugar",
                "Ich sehe mich nur um.": "Só estou a ver",
                "Könnten Sie mir das zeigen?": "Pode mostrar-me isto?",
                "Können Sie mir das schicken?": "Pode mandar-me isto?",
                "Könnte ich...anprobieren?": "Poderia provar...",
                "Diesen Anzug": "Este fato",
                "Diese Schuhe": "Esses sapatos",
                "Dieses Kleid": "Este vestido",
                "Ich benötige eine...Grösse": "Preciso um tamanho...",
                "Grössere": "Maior",
                "Kleinere": "Mais pequeno"
            }
        }
    },

    /**
     * @var array World metros.
     *            Format: Country [
     *                City [0]
     *                Link [1]
     *                Map image [2]
     *                More images [3] [
     *                    image1.png,
     *                    image2.png,
     *                    ...
     *                ]
     *            ]
     */
    metros: {
        "Alemania": [
            [
                "Berlín",
                "http://urbanrail.net/eu/de/b/berlin.htm",
                "berlin-centre-map.png",
                [
                    "http://urbanrail.net/eu/de/b/fotos/U2-27-schoenhauser-al1.jpg",
                    "http://urbanrail.net/eu/de/b/fotos/U6-04-otisstr1.jpg",
                    "http://urbanrail.net/eu/de/b/fotos/U6-29-Alt-Mariendf1.jpg"
                ]
            ]
        ],
        "Algeria": [
            [
                "Algiers",
                "http://urbanrail.net/af/alg/algiers.htm",
                "algiers-map.png",
                [
                    "http://urbanrail.net/af/alg/metro_siemens1.jpg",
                    "http://urbanrail.net/af/alg/AlstomCitadisAlger.jpeg"
                ]
            ]
        ],
        "Argentina": [
            [
                "Buenos Aires",
                "http://urbanrail.net/am/buen/buenos-aires.htm",
                "buenos-aires-map.png",
                [
                    "http://urbanrail.net/am/buen/b-los-incas1x.jpg",
                    "http://urbanrail.net/am/buen/h-caseros1x.jpg",
                    "http://urbanrail.net/am/buen/b-tronador1x.jpg"
                ]
            ]
        ],
        "Australia": [
            [
                "Brisbane",
                "http://urbanrail.net/au/bris/brisbane.htm",
                "brisbane-map.gif",
                [
                    "http://urbanrail.net/au/bris/QR-BowenHills.jpg",
                    "http://urbanrail.net/au/bris/Manly1.jpg",
                    "http://urbanrail.net/au/bris/Northgate1.jpg"
                ]
            ],
            [
                "Melbourne",
                "http://urbanrail.net/au/melb/melbourne.htm",
                "melbourne-map.gif",
                [
                    "http://urbanrail.net/au/melb/Frankston1.jpg",
                    "http://urbanrail.net/au/melb/GlenWaverley1.jpg",
                    "http://urbanrail.net/au/melb/SouthernCross1.jpg"
                ]
            ],
            [
                "Perth",
                "http://urbanrail.net/au/perth/perth.htm",
                "perth-map.gif",
                [
                    "http://urbanrail.net/au/perth/leederville1.jpg",
                    "http://urbanrail.net/au/perth/canning-bridge1.jpg",
                    "http://urbanrail.net/au/perth/north-fremantle1.jpg"
                ]
            ],
            [
                "Sidney",
                "http://urbanrail.net/au/sydney/sydney.htm",
                "sydney-centre-map.gif",
                [
                    "http://urbanrail.net/au/sydney/bardwellpark-millennium1.jpg",
                    "http://urbanrail.net/au/sydney/central-oscar1.jpg",
                    "http://urbanrail.net/au/sydney/monorail-worldsq1.jpg"
                ]
            ]
        ],
        "Austria": [
            [
                "Viena",
                "http://urbanrail.net/eu/at/vienna/wien.htm",
                "wien-map.png",
                [
                    "http://urbanrail.net/eu/at/vienna/U2-Donaustadtbr1.jpg",
                    "http://urbanrail.net/eu/at/vienna/U1-08-Kaiserm%FChlen2-8.jpg",
                    "http://urbanrail.net/eu/at/vienna/U1-03-Aderklaaer1x.jpg"
                ]
            ]
        ],
        "Brasil": [
            [
                "San Pablo",
                "http://urbanrail.net/am/spau/sao-paulo.htm",
                "sao-paulo-map.gif",
                [
                    "http://urbanrail.net/am/spau/line3-pedro-II-1x.jpg",
                    "http://urbanrail.net/am/spau/line2-sumare-1x.jpg",
                    "http://urbanrail.net/am/spau/line7-santo-amaro1x.jpg"
                ]
            ]
        ],
        "Canadá": [
            [
                "Montreal",
                "http://urbanrail.net/am/monr/montreal.htm",
                "montreal-map.png",
                [
                    "http://urbanrail.net/am/monr/lionel-groulx1x.jpg",
                    "http://urbanrail.net/am/monr/monk-1x.jpg",
                    "http://urbanrail.net/am/monr/sthenri-1x.jpg"
                ]
            ],
            [
                "Toronto",
                "http://urbanrail.net/am/toro/toronto.htm",
                "toronto-map.gif",
                [
                    "http://urbanrail.net/am/toro/ttc24x.jpg",
                    "http://urbanrail.net/am/toro/ttc08x.jpg",
                    "http://urbanrail.net/am/toro/ttc17x.jpg"
                ]
            ],
            [
                "Vancuver",
                "http://urbanrail.net/am/vanc/vancouver.htm",
                "vancouver-map.gif",
                [
                    "http://urbanrail.net/am/vanc/E02-Burrard-33.JPG",
                    "http://urbanrail.net/am/vanc/E07-Nanaimo-02.JPG",
                    "http://urbanrail.net/am/vanc/E05-MainSt-SW-13.JPG"
                ]
            ]
        ],
        "Chile": [
            [
                "Santiago de Chile",
                "http://urbanrail.net/am/sant/santiago.htm",
                "santiago-map-future.gif",
                [
                    "http://urbanrail.net/am/sant/L4-quillayes1x.jpg",
                    "http://urbanrail.net/am/sant/L4-vicente-valdes1x.jpg",
                    "http://urbanrail.net/am/sant/L5-Santa-Ana1x.jpg"
                ]
            ]
        ],
        "China": [
            [
                "Beijing",
                "http://urbanrail.net/as/cn/beij/beijing.htm",
                "beijing-map.png",
                [
                    "http://urbanrail.net/as/cn/beij/line5-train.jpg",
                    "http://urbanrail.net/as/cn/beij/beijing2x.jpg",
                    "http://urbanrail.net/as/cn/beij/beijing3x.jpg"
                ]
            ],
            [
                "Guangzhou",
                "http://urbanrail.net/as/cn/guan/guangzhou.htm",
                "guangzhou-map-centre.png",
                [
                    "http://urbanrail.net/as/cn/guan/outside_kengkou_station1x.jpg",
                    "http://urbanrail.net/as/cn/guan/L1-new-train1x.jpg",
                    "http://urbanrail.net/as/cn/guan/Line4_2x.jpg"
                ]
            ],
            [
                "Hong Kong",
                "http://urbanrail.net/as/cn/hong/hong-kong.htm",
                "metro_HK.png",
                [
                    "http://urbanrail.net/as/cn/hong/hongkg-kowloonbay1x.jpg",
                    "http://urbanrail.net/as/cn/hong/hk-9x.jpg"
                ]
            ],
            [
                "Shangai",
                "http://urbanrail.net/as/cn/shan/shanghai.htm",
                "shanghai-map.png",
                [
                    "http://urbanrail.net/as/cn/shan/shan-line2-train1x.jpg",
                    "http://urbanrail.net/as/cn/shan/shan-line3-train2x.jpg",
                    "http://urbanrail.net/as/cn/shan/shan-line4-train1x.jpg"
                ]
            ]
        ],
        "Egipto": [
            [
                "Cairo",
                "http://urbanrail.net/af/cairo/cairo.htm",
                "cairo-map.gif",
                [
                    "http://urbanrail.net/af/cairo/L1-El-Malek-El-Saleh3x.jpg",
                    "http://urbanrail.net/af/cairo/L1-El-Malek-El-Saleh4x.jpg",
                    "http://urbanrail.net/af/cairo/L1-2-Sadat2x.jpg"
                ]
            ]
        ],
        "España": [
            [
                "Barcelona",
                "http://urbanrail.net/eu/es/bcn/barcelona.htm",
                "barcelona-map.gif",
                [
                    "http://urbanrail.net/eu/es/bcn/img/CAF5000-can-boixeres1x.jpg",
                    "http://urbanrail.net/eu/es/bcn/img/l8-espanya1x.jpg",
                    "http://urbanrail.net/eu/es/bcn/img/L3-valldaura4x.jpg"
                ]
            ],
            [
                "Madrid",
                "http://urbanrail.net/eu/es/mad/madrid.htm",
                "madrid-map.gif",
                [
                    "http://urbanrail.net/eu/es/mad/L5-casa-campo1k.jpg",
                    "http://urbanrail.net/eu/es/mad/L12-pradillo1k.jpg",
                    "http://urbanrail.net/eu/es/mad/ML1-Las-Tablas1x.jpg"
                ]
            ]
        ],
        "Estados Unidos": [
            [
                "Boston",
                "http://urbanrail.net/am/bost/boston.htm",
                "boston-center-map.png",
                [
                    "http://urbanrail.net/am/bost/pix/GR-C-ClevelandCircle1.jpg",
                    "http://urbanrail.net/am/bost/pix/GR-E-Riverway1.jpg",
                    "http://urbanrail.net/am/bost/pix/Blue-Suffolk-Downs1.jpg"
                ]
            ],
            [
                "Chicago",
                "http://urbanrail.net/am/chic/chicago.htm",
                "chicago-map.gif",
                [
                    "http://urbanrail.net/am/chic/chic-chicago1x.jpg",
                    "http://urbanrail.net/am/chic/chic-chicago2x.jpg"
                ]
            ],
            [
                "Los Angeles",
                "http://urbanrail.net/am/lsan/los-angeles.htm",
                "los-angeles-map.gif",
                [
                    "http://urbanrail.net/am/lsan/RD08-Wilshire-Western-09.JPG",
                    "http://urbanrail.net/am/lsan/BL-Long-Beach-Transit-Mall-10.JPG",
                    "http://urbanrail.net/am/lsan/GR14-Redondo-Beach-13.JPG"
                ]
            ],
            [
                "New York",
                "http://urbanrail.net/am/nyrk/new-york.htm",
                "new-york-map.png",
                [
                    "http://urbanrail.net/am/nyrk/subway/RD1-SouthFerry10.jpg",
                    "http://urbanrail.net/am/nyrk/subway/BL-42St-06.jpg",
                    "http://urbanrail.net/am/nyrk/subway/G-Broadway-05.jpg"
                ]
            ],
            [
                "San Francisco",
                "http://urbanrail.net/am/snfr/san-francisco.htm",
                "sf-bay-area-map.gif",
                [
                    "http://urbanrail.net/am/snfr/mm-castro2x.jpg",
                    "http://urbanrail.net/am/snfr/mm-west-portal1x.jpg",
                    "http://urbanrail.net/am/snfr/mm-n-terminus1x.jpg"
                ]
            ],
            [
                "Washington",
                "http://urbanrail.net/am/wash/washington.htm",
                "washington-map.gif",
                [
                    "http://urbanrail.net/am/wash/Silver-Spring1.jpg",
                    "http://urbanrail.net/am/wash/Anacostia1.jpg",
                    "http://urbanrail.net/am/wash/Largo-Town-Center1.jpg"
                ]
            ]
        ],
        "Francia": [
            [
                "París",
                "http://urbanrail.net/eu/fr/paris/paris.htm",
                "paris-full-map.png",
                [
                    "http://urbanrail.net/eu/fr/paris/fotos/ligne1/L1-17-bastille2x.jpg",
                    "http://urbanrail.net/eu/fr/paris/fotos/ligne2/L2-16-Jaures-03x.jpg",
                    "http://urbanrail.net/eu/fr/paris/fotos/ligne5/L5-04-Gare-Austerlitz-12x.jpg"
                ]
            ]
        ],
        "Holanda": [
            [
                "Amsterdam",
                "http://urbanrail.net/eu/nl/ams/amsterdam.htm",
                "amsterdam-map.gif",
                [
                    "http://urbanrail.net/eu/nl/ams/O01-CS2-01.jpg",
                    "http://urbanrail.net/eu/nl/ams/O03-Waterlooplein2-14.jpg",
                    "http://urbanrail.net/eu/nl/ams/O19-Ganzenhoef-20.jpg"
                ]
            ]
        ],
        "Hungría": [
            [
                "Budapest",
                "http://urbanrail.net/eu/hu/budapest/budapest.htm",
                "budapest-map.png",
                [
                    "http://urbanrail.net/eu/hu/budapest/pix/M1/M1-Bajcsy-Zsilinszky-ut1.jpg",
                    "http://urbanrail.net/eu/hu/budapest/pix/M3/m3-kalvinter2.JPG",
                    "http://urbanrail.net/eu/hu/budapest/pix/hev-batthyany-ter1.jpg"
                ]
            ]
        ],
        "India": [
            [
                "Delhi",
                "http://urbanrail.net/as/delh/delhi.htm",
                "delhi-map.png",
                [
                    "http://urbanrail.net/as/delh/delhi-metro1.jpg",
                    "http://urbanrail.net/as/delh/delhi-metro2.jpg"
                ]
            ]
        ],
        "Inglaterra": [
            [
                "Londres",
                "http://urbanrail.net/eu/uk/lon/london.htm",
                "all-london-map.gif",
                [
                    "http://urbanrail.net/eu/uk/lon/img/OG-DalstonJctn-01.JPG",
                    "http://urbanrail.net/eu/uk/lon/img/ml-baker-st1.jpg",
                    "http://urbanrail.net/eu/uk/lon/img/nl-clapham-north1.jpg"
                ]
            ]
        ],
        "Irán": [
            [
                "Tehrán",
                "http://urbanrail.net/as/tehr/tehran.htm",
                "tehran-map.png",
                [
                    "http://urbanrail.net/as/tehr/L1-javanmard2x.jpg",
                    "http://urbanrail.net/as/tehr/L1-javanmard1x.jpg",
                    "http://urbanrail.net/as/tehr/L1-panzdah1x.jpg"
                ]
            ]
        ],
        "Italia": [
            [
                "Milán",
                "http://urbanrail.net/eu/it/mil/milano.htm",
                "milano-map.png",
                [
                    "http://urbanrail.net/eu/it/mil/S-bovisa1x.jpg",
                    "http://urbanrail.net/eu/it/mil/T-cairoli1x.jpg",
                    "http://urbanrail.net/eu/it/mil/S-pta-garibaldi2x.jpg"
                ]
            ],
            [
                "Roma",
                "http://urbanrail.net/eu/it/rom/roma.htm",
                "roma-map.gif",
                [
                    "http://urbanrail.net/eu/it/rom/fotos/A-Vittorio-Emanuele3x.jpg",
                    "http://urbanrail.net/eu/it/rom/fotos/B-Colosseo1x.jpg",
                    "http://urbanrail.net/eu/it/rom/fotos/Roma-Nord-SaxaRubra1x.jpg"
                ]
            ]
        ],
        "Japón": [
            [
                "Osaka",
                "http://urbanrail.net/as/jp/osaka/osaka.htm",
                "osaka-centre-map.png",
                [
                    "http://urbanrail.net/as/jp/osaka/Midosuji-Line-Train2.jpg",
                    "http://urbanrail.net/as/jp/osaka/Yotsubashi-Line-Train.jpg",
                    "http://urbanrail.net/as/jp/osaka/NagahoriTsurumiRyokuchi-Line-OsakaBusinessPark3.jpg"
                ]
            ],
            [
                "Tokyo",
                "http://urbanrail.net/as/jp/tokyo/tokyo.htm",
                "tokyo-map.png",
                [
                    "http://urbanrail.net/as/jp/tokyo/tozai-train2x.jpg",
                    "http://urbanrail.net/as/jp/tokyo/trta05nx.jpg"
                ]
            ]
        ],
        "Corea del Sur": [
            [
                "Busan",
                "http://urbanrail.net/as/kr/busan/busan.htm",
                "busan-map.png",
                [
                    "http://urbanrail.net/as/kr/busan/L2-Haeundae1.jpg",
                    "http://urbanrail.net/as/kr/busan/L2-Haeundae2.jpg",
                    "http://urbanrail.net/as/kr/busan/L2-Suyeong1.jpg"
                ]
            ],
            [
                "Seoul",
                "http://urbanrail.net/as/kr/seoul/seoul.htm",
                "seoul-map.png",
                [
                    "http://urbanrail.net/as/kr/seoul/Seoul-Subway-L1-1.jpg",
                    "http://urbanrail.net/as/kr/seoul/Seoul-Subway-L2-1.jpg",
                    "http://urbanrail.net/as/kr/seoul/Seoul-Subway-L6-2.jpg"
                ]
            ]
        ],
        "México": [
            [
                "Ciudad de México",
                "http://urbanrail.net/am/mexi/mexico.htm",
                "mexico-map.png",
                [
                    "http://urbanrail.net/am/mexi/L5-Oceania1.jpg",
                    "http://urbanrail.net/am/mexi/L12-Olivos1.jpg",
                    "http://urbanrail.net/am/mexi/TL1.jpg"
                ]
            ]
        ],
        "República Checa": [
            [
                "Praga",
                "http://urbanrail.net/eu/cz/praha/praha.htm",
                "praha-map.gif",
                [
                    "http://urbanrail.net/eu/cz/praha/C-Strizkov1.jpg",
                    "http://urbanrail.net/eu/cz/praha/C-Kobylisy1.jpg"
                ]
            ]
        ],
        "Rusia": [
            [
                "Moscú",
                "http://urbanrail.net/eu/ru/mos/moskva.htm",
                "moskva-full-map.gif",
                [
                    "http://urbanrail.net/eu/ru/mos/img/M5-Belorusskaya1x.jpg",
                    "http://urbanrail.net/eu/ru/mos/img/M5-Komsomolskaya2x.jpg",
                    "http://urbanrail.net/eu/ru/mos/img/M4-Delovoy-Tsentr1x.jpg"
                ]
            ],
            [
                "Saint Petersburgo",
                "http://urbanrail.net/eu/ru/pet/petersburg.htm",
                "petersburg-map.png",
                [
                    "http://urbanrail.net/eu/ru/pet/M1-2_Technolog_Inst.2x.JPG",
                    "http://urbanrail.net/eu/ru/pet/pet-vosstaniya2x.jpg"
                ]
            ]
        ],
        "Singapur": [
            [
                "Singapur",
                "http://urbanrail.net/as/sing/singapore.htm",
                "singapore-centre-map.png",
                [
                    "http://urbanrail.net/as/sing/sengkang-lrt-04x.jpg",
                    "http://urbanrail.net/as/sing/nel-train1x.jpg"
                ]
            ]
        ],
        "Taiwán": [
            [
                "Taipei",
                "http://urbanrail.net/as/taip/taipei.htm",
                "taipei-map.gif",
                [
                    "http://urbanrail.net/as/taip/mucha1x.jpg",
                    "http://urbanrail.net/as/taip/Muzha-Line2x.jpg",
                    "http://urbanrail.net/as/taip/chiantan1x.jpg"
                ]
            ]
        ],
        "Tailandia": [
            [
                "Banglades",
                "http://urbanrail.net/as/bang/bangkok.htm",
                "bangkok-map.png",
                [
                    "http://urbanrail.net/as/bang/bangkok_ARL_1x.jpg",
                    "http://urbanrail.net/as/bang/bangkok_ARL_3x.jpg",
                    "http://urbanrail.net/as/bang/makkasan_CAT_1x.jpg"
                ]
            ]
        ],
        "Túnez": [
            [
                "Tunis",
                "http://urbanrail.net/af/tunis/tunis.htm",
                "tunis-map.gif",
                [
                    "http://urbanrail.net/af/tunis/Ligne3_2x.JPG",
                    "http://urbanrail.net/af/tunis/Lignex_1x.JPG",
                    "http://urbanrail.net/af/tunis/Citadis1x.jpg"
                ]
            ]
        ]
    },

    /**
     * @var array Countries for wikitravel.org.
     *            Format: Continent [ Name ]
     */
    tourism: {
        "Africa": [
            "Angola",
            "Argelia",
            "Benín",
            "Botswana",
            "Burkina Faso",
            "Burundi",
            "Cabo Verde (República)",
            "Chad",
            "Congo Brazzaville",
            "Costa de Marfil",
            "Egipto",
            "Eritrea",
            "Etiopía",
            "Gabón",
            "Gambia",
            "Ghana",
            "Guinea Bisseau",
            "Guinea Conakry",
            "Guinea Ecuatorial",
            "Islas Santo Tomé y Príncipe",
            "Kenia",
            "Lesotho",
            "Liberia",
            "Libia",
            "Madagascar",
            "Malaui",
            "Mali",
            "Marruecos",
            "Mauritania",
            "Mozambique",
            "Namibia",
            "Niger",
            "Nigeria",
            "República Camerún",
            "República Centro-Africana",
            "República Democrática del Congo",
            "Ruanda",
            "Sahara Occidental",
            "Senegal",
            "Sierra Leone",
            "Somalia",
            "Suazilandia",
            "Sudáfrica",
            "Sudán",
            "Sudán del Sur",
            "Tanzania",
            "Togo",
            "Túnez",
            "Uganda",
            "Yibuti",
            "Zambia",
            "Zimbabue"
        ],
        "América del Norte": [
            "Anguilla",
            "Antigua y Barbuda",
            "Aruba",
            "Bahamas",
            "Barbados",
            "Belice",
            "Bermudas",
            "Bonaire, San Eustaquio y Saba",
            "Canadá",
            "Costa Rica",
            "Cuba",
            "Curaçao",
            "Dominica",
            "El Salvador",
            "Estados Unidos",
            "Granada",
            "Guadalupe",
            "Guatemala",
            "Haití",
            "Honduras",
            "Isla St. Helena",
            "Islas Caimán",
            "Islas Malvinas",
            "Islas Turks y Caicos",
            "Islas Vírgenes (Británicas)",
            "Islas Vírgenes (EEUU)",
            "Jamaica",
            "Martinica",
            "México",
            "Montserrat",
            "Nicaragua",
            "Panamá",
            "Puerto Rico",
            "República Dominicana",
            "San Martín",
            "San Vicente y Las Granadinas",
            "Santa Lucía",
            "St. Kitts",
            "Trinidad y Tobago"
        ],
        "América del Sur": [
            "Argentina",
            "Bolivia",
            "Brasil",
            "Chile",
            "Colombia",
            "Ecuador",
            "Guayana",
            "Guayana Francesa",
            "Paraguay",
            "Perú",
            "Surinam",
            "Uruguay",
            "Venezuela"
        ],
        "Asia": [
            "Afganistán",
            "Antártida",
            "Arabia Saudí",
            "Armenia",
            "Azerbaiyán",
            "Bahrein",
            "Bangladesh",
            "Bielorusia",
            "Brunei Darussalam",
            "Bután",
            "Camboya Riel",
            "China",
            "Corea del Norte",
            "Corea del Sur (República)",
            "Emiratos Arabes Unidos (UAE)",
            "Filipinas",
            "Geogia",
            "Guam",
            "Hong Kong",
            "India",
            "Indonesia",
            "Irak",
            "Irán",
            "Isla de Christmas",
            "Isla Maldivas",
            "Isla Mauricio",
            "Isla Reunión",
            "Islas Cocos",
            "Islas Comores",
            "Islas Marianas",
            "Islas Marshall",
            "Islas Palau",
            "Islas Seychelles",
            "Islas Wallis y Futuna",
            "Israel",
            "Japón",
            "Jordania",
            "Kazajistán",
            "Kirguizistán",
            "Kuwait",
            "Laos",
            "Líbano",
            "Macao - SAR of China",
            "Malasya",
            "Mayotte",
            "Micronesia",
            "Moldavia",
            "Mongolia",
            "Myanmar",
            "Nauru",
            "Nepal",
            "Omán",
            "Pakistán",
            "Palestinian Occ. Territories",
            "Polinesia Francesa",
            "Qatar",
            "Rusia",
            "Singapur",
            "Siria",
            "Sri Lanka",
            "Tailandia",
            "Taiwán",
            "Tayikistán",
            "Timor Leste",
            "Tokelau",
            "Turkmenistán",
            "Turquía",
            "U.S. Minor Outlying Islands",
            "Ucrania",
            "Uzbekistán",
            "Vietnam",
            "Yemén"
        ],
        "Europa": [
            "Albania",
            "Alemania",
            "Andorra",
            "Austria",
            "Bélgica",
            "Bosnia-Herzegovina",
            "Bulgaria",
            "Chipre",
            "Croacia",
            "Dinamarca",
            "Eslovaquia",
            "Eslovenia",
            "España",
            "Estonia",
            "Finlandia",
            "Francia",
            "Gibraltar",
            "Gran Bretaña",
            "Grecia",
            "Groenlandia",
            "Hungría",
            "Islandia",
            "Islas Faroe",
            "Italia",
            "Letonia",
            "Liechtenstein",
            "Lituania",
            "Luxemburgo",
            "Macedonia - FYROM",
            "Malta",
            "Mónaco",
            "Montenegro",
            "Noruega",
            "Países Bajos",
            "Polonia",
            "Portugal",
            "República Checa",
            "República Irlanda",
            "Rumanía",
            "San Marino",
            "Serbia",
            "St. Pierre y Miquelon",
            "Suecia",
            "Suiza",
            "Vaticano"
        ],
        "Oceanía": [
            "Australia",
            "Fiji",
            "Isla Norfolk",
            "Islas Cook",
            "Islas Salomón",
            "Kiribati",
            "Nirue",
            "Nueva Caledonia",
            "Nueva Zelanda",
            "Papua Nueva Guinea",
            "Samoa Americana",
            "Samoa Occidental",
            "Tonga",
            "Tuvalu",
            "Vanuatu"
        ]
    },

    /**
     * @var array Outlets in Argentina.
     *            Format:
     *                Category [
     *                    Name [0]
     *                    Link [1]
     *                    {
     *                        [City]
     *                        {
     *                            [Direction, Tel, Schedule, etc...]
     *                            [Direction, Tel, Schedule, etc...]
     *                            ...
     *                        }
     *                    }
     *            ]
     */
    outlets: {
        "Artículos deportivos y Tiempo libre": [
            [
                "Adidas",
                "http://www.adidas.com",
                {
                    "Capital Federal": [
                        "Rivadavia 11065/99, local 12, Tel.: 4644-2491",
                        "Córdoba 4590, Palermo, Tel.: 5197-5336 (Lunes a Sábado de 10 a 20 Hs)",
                        "Factory Parque Brown: local 1055, Francisco Fernández de la Cruz 4602, Tel.: 4605-0339"
                    ],
                    "Pcia. De Buenos Aires": [
                        "Santa Fe 2797, Martínez, Tel.: 4798-5527"
                    ],
                    "Mendoza": [
                        "Aristides Villanueva 430"
                    ]
                }
            ],
            [
                "Alagua",
                "",
                {
                    "Capital Federal": [
                        "Av. Córdoba 5060, Tel.: 4773-2011 / 4773-1345, De lunes a sábado de 10 a 19.30"
                    ]
                }
            ],
            [
                "Alpargatas",
                "http://www.alpargatascalzado.com.ar",
                {
                    "Capital Federal": [
                        "California 1936, Barracas, Tel.: 4301-1531"
                    ],
                    "La Plata": [
                        "C.P. Centenario e/504 y 505, Tel.: 0221-4847599 / 4845973, Lunes a sábado de 10 a 20 hs"
                    ],
                    "Quilmes": [
                        "Calchaquí 3899, Tel.: 4878-0282/3, Lunes a sábado de 9.30 a 19.30 hs"
                    ],
                    "Adrogué": [
                        "Hip. Yrigoyen 13203, Tel.: 4214-3360, Lunes a sábado de 10 a 20. Domingos 16 a 20 hs"
                    ],
                    "San Isidro": [
                        "Av. Libertador 16101, Tel.: 5788-2202, Lunes a sábado de 9.30 a 19.30 hs"
                    ],
                    "Cruce Varela": [
                        "Camino Gral. Belgrano 6328, Tel.: 4139-4363/4"
                    ],
                    "Lomas De Zamora": [
                        "H.Irigoyen 8282, Tel.: 4392-0173"
                    ],
                    "Monte Grande": [
                        "B.Buenos Aires 170, Tel.: 4290-8280"
                    ],
                    "Morón": [
                        "Curuchet 1506 y Av.Vergara, Tel.: 4627-6052"
                    ],
                    "Ramos Mejía": [
                        "Av.Rivadavia 14832, Tel.: 4469-2684/4464-6702 Florencia Varela: Ruta 2 Km.34, Rot.Gutierrez, Tel.: 02229-491065/496313"
                    ],
                    "Mar Del Plata": [
                        "Brandsen 3226, Tel.: 0223-4755250"
                    ],
                    "Wilde": [
                        "Av. Mitre 6222, Tel.: 4353-2370"
                    ],
                    "Mendoza": [
                        "Av.San Martín 865, Godoy Cruz, Tel.: 0261 - 4249781"
                    ],
                    "La Pampa": [
                        "Av.Spinetto 948, Santa Rosa, Tel.: 02954-432067/431657"
                    ],
                    "Catamarca": [
                        "Mate de Luna 497, Tel.: 03833-435786/454364"
                    ],
                    "San Luis": [
                        "Pedernera 676, Villa Mercedes, Tel.: 02657-434262/437195"
                    ]
                }
            ],
            [
                "Alpine Skate",
                "http://www.alpineskate.com.ar",
                {
                    "Mar Del Plata": [
                        "Juan B. Justo 860, Tel.: (0223) 489-0400"
                    ]
                }
            ],
            [
                "And 1",
                "http://www.and1argentina.com.ar",
                {
                    "Capital Federal": [
                        "Av. Córdoba 3975, Tel.: 4863-1280"
                    ],
                    "Pcia. Buenos Aires": [
                        "Av. Rivadavia 16.430, Haedo, Tel.: 4460-5755, Lunes a viernes de 10 a 20 y Sábados de 10 a 13"
                    ]
                }
            ],
            [
                "Andreina Disegni Fitness",
                "www.andreinadisegni.com.ar",
                {
                    "Pcia. Buenos Aires": [
                        "Av. San Martín 1684, Ramos Mejía, Pcia. de Bs. As. Tel.: 4647-1976"
                    ]
                }
            ],
            [
                "Avia",
                "http://www.avia-argentina.com.ar",
                {
                    "Capital Federal": [
                        "Cabildo 4009, Nuñez, Tel.: 4704-0048",
                        "Cabildo 2438, Belgrano, Tel.:4782-2165",
                        "Vera 600, Villa Crespo, Tel.: 4854-7773, Lunes a sábado de 9 a 20"
                    ],
                    "Pcia. Buenos Aires": [
                        "Factory Deportivo: Av. Irigoyen 2681, Boulogne, R. Panamericana y Camino del Buen Ayre, Tel.: 4737-8139, Todos los días de 10 a 20"
                    ]
                }
            ],
            [
                "Buenos Aires Sports",
                "",
                {
                    "Capital Federal": [
                        "Av. Forest 334, Chacarita, Tel.: 4514-6170, Lunes a viernes de 10.30 a 19.30 y sábados de 10 a 15"
                    ]
                }
            ],
            [
                "Class Life",
                "http://www.classlife.com.ar",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4724, Palermo, Tel.: 4773-4664",
                        "Aguirre 880, Villa Crespo, Tel.: 4773-0390"
                    ]
                }
            ],
            [
                "Columbia (discontinuos)",
                "",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4886, Palermo (lunes a sábado 10 a 20), Tel.: 4773-4434",
                        "Loyola 690, Villa Crespo (lunes a sábado 10 a 20 - domingo y feriados 14 a 19)"
                    ]
                }
            ],
            [
                "Darling",
                "http://www.darlingsport.com.ar",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4861 , Palermo, Tel.: 4771-6242"
                    ],
                    "Pcia Buenos Aires": [
                        "Soleil Factory, Bernardo de Irigoyen 2647, Boulogne, Pcia. de Bs. As."
                    ]
                }
            ],
            [
                "Dash",
                "http://www.dash-deportes.com.ar",
                {
                    "Pcia. Buenos Aires": [
                        "Ruta Panamericana 535, esq. Edison, Martínez",
                        "Ruta Panamericana Km. 34 (Ramal Escobar), Grand Bourg",
                        "Ruta Panamericana Km. 53 (Ramal Pilar), Pilar"
                    ]
                }
            ],
            [
                "Dass Outlet",
                "",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4599, Palermo, Tel.: 4775-4566",
                        "Salta 1715, Constitución, Tel.: 4304-0678",
                        "Av. Fco. Lacroze 4114, Chacarita, Tel.: 4555-5798"
                    ],
                    "Pcia. Buenos. Aires": [
                        "Maipú 1942, Vicente López, 4795-3454",
                        "Av. Rolón 8 (y Av. Márquez), San Isidro, 4892-0029"
                    ],
                    "La Plata": [
                        "Calle 13 1657 (entre 515 y 516), Tel.: (0221) 4716520"
                    ]
                }
            ],
            [
                "Dexter",
                "http://www.dextershops.com",
                {
                    "Capital Federal": [
                        "Factory Parque Brown: Francisco Fernández de la Cruz 4602, local 1008"
                    ],
                    "Pcia. De Buenos. Aires.": [
                        "Soleil Factory: B. de Irigoyen 2647, Local 219, Boulogne",
                        "Factory Quilmes: Calchaquí 3950, local 1122, 1º nivel, Quilmes",
                        "Walmart Parque Avellaneda: Autopista Buenos Aires La Plata 9, Sarandí, Tel.: 4353-0598/0596"
                    ]
                }
            ],
            [
                "Diportto",
                "",
                {
                    "Capital Federal": [
                        "J.B. Alberdi 7016, mataderos"
                    ]
                }
            ],
            [
                "Draft",
                "",
                {
                    "Capital Federal": [
                        "Herrera 1747, Barracas"
                    ]
                }
            ],
            [
                "El Galpon Del Ski",
                "",
                {
                    "Capital Federal": [
                        "Soler 5722, Tel.: 4773-2027"
                    ],
                    "Pcia. Buenos Aires": [
                        "Savio 3041, Lomas de San Isidro, Tel.: 4700-8450, Lunes a viernes de 10 a 20. Sábados de 10 a 18"
                    ]
                }
            ],
            [
                "Factory Deportivo",
                "",
                {
                    "Pcia. Buenos Aires": [
                        "Bernardo de Irigoyen y Panamericana, Boulogne, (Predio Soleil Factory), Tel.: 4710-4413, Lunes a Domingo de 10 a 22"
                    ]
                }
            ],
            [
                "Fila",
                "",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4599, Palermo, Tel.: 4775-4566 Salta 1715, Constitución, Tel.: 4304-0678",
                        "Av. Fco. Lacroze 4114, Chacarita, Tel.: 4555-5798"
                    ],
                    "Pcia. Buenos. Aires": [
                        "Maipú 1942, Vicente López, 4795-3454",
                        "Av. Rolón 8 (y Av. Márquez), San Isidro, 4892-0029"
                    ],
                    "La Plata": [
                        "Calle 13 1657 (entre 515 y 516), Tel.: (0221) 4716520"
                    ]
                }
            ],
            [
                "Go",
                "Www.planetago.com",
                {
                    "Santa Fe": [
                        "Rosario, Pte. Roca 962"
                    ]
                }
            ],
            [
                "Gym Clothes",
                "http://www.gym-clothes.com.ar",
                {
                    "Capital Federal": [
                        "Terrada 529, Flores, Tel.: 4612-4959"
                    ]
                }
            ],
            [
                "Huemul",
                "",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4886, Palermo, Lunes a sábado 10 a 20, Tel.: 4773-4434",
                        "Loyola 690, Villa Crespo, Lunes a sábado 10 a 20 //domingo y feriados 14 a 19)"
                    ]
                }
            ],
            [
                "Kappa",
                "http://www.kappasportivo.com.ar",
                {
                    "Pcia. Buenos Aires": [
                        "Av. Fondo de la Legua 2110, Martínez, Tel.: 4766-0430 int.123, Lunes a sábado de 10 a 19.30 // Domingos de 11 a 19"
                    ]
                }
            ],
            [
                "Karen Oviano",
                "http://www.karenoviano.com",
                {
                    "Pcia. Buenos Aires": [
                        "Panama 2280, Martinez, Tel.: 4717-1847, Lunes a viernes de 9.30 a 17.30"
                    ]
                }
            ],
            [
                "Key Whoss",
                "http://www.keywhoss.com",
                {
                    "Capital Federal": [
                        "Av.Triunvirato 3495 esq. Donado, Tel.: 4552-5289 / 4555-1709",
                        "Juramento 2343, Belgrano"
                    ]
                }
            ],
            [
                "Kilowatt Fitness",
                "http://www.kilowattargentina.com.ar",
                {
                    "Capital Federal": [
                        "Zapiola 1530, Tel.: 4552-0045//2123//2511"
                    ]
                }
            ],
            [
                "Kombi Ski & Outdoor",
                "",
                {
                    "Capital Federal": [
                        "Av. F. Lacroze 2586, Tel.: 4554-5459, Lunes a viernes 10 a 20 y Sábado de 10 a 13.30"
                    ],
                    "Pcia. Buenos Aires": [
                        "Av. del Libertador 13.047, Martínez, Lunes a viernes de 10 a 20 y Sábado de 10 a 18"
                    ]
                }
            ],
            [
                "Ksi",
                "http://www.ksi.com.ar",
                {
                    "Cordoba": [
                        "Sarmiento 323"
                    ]
                }
            ],
            [
                "La Ardilla Ski",
                "",
                {
                    "Capital Federal": [
                        "Av. Juan B. Justo 831, Tel.: 4773-4510/4772-0426, Lunes a viernes de 9 a 19.30 y Sábados de 9 a 18"
                    ]
                }
            ],
            [
                "Libralatina",
                "",
                {
                    "Capital Federal": [
                        "Av. Forest 399, Chacarita, Tel.: 4551-6242"
                    ],
                    "Pcia. Buenos Aires": [
                        "Miramar: Calle 21 1050, Tel.: 02291-432816/508"
                    ]
                }
            ],
            [
                "Miro Sol",
                "http://www.miroargentina.com.ar",
                {
                    "Capital Federal": [
                        "Larrea 700, Lunes a viernes de 9 a 19 y sábados de 10 a 14"
                    ]
                }
            ],
            [
                "Montagne",
                "http://www.montagneoutdoors.com.ar",
                {
                    "Capital Federal": [
                        "Godoy Cruz 1316, Palermo, Tel.: 4773-0091",
                        "Paraná 772, Subsuelo, Barrio Norte",
                        "Juramento 2445, Belgrano",
                        "Av. Corrientes 2582, local 54 – Entrepiso, Once, Tel.: 4951-1897",
                        "Av. Santa Fe 1780, 1º piso, Recoleta, Tel.:4815-3858, Lunes a sábado de 10 a 20.30hs",
                        "Lunes a viernes de 10 a 19.30 / Sábado de 10 a 18"
                    ],
                    "Pcia. Buenos. Aires": [
                        "Av. Santa Fe 2101, Martínez, Tel.: 4798-3523, Lunes a viernes de 9 a 20 y sábados de 9.30 a 19"
                    ],
                    "Neuquén": [
                        "Lainez 392, 1º piso, Neuquén (Capital)"
                    ],
                    "Bariloche": [
                        "Moreno 976"
                    ]
                }
            ],
            [
                "Muni Depot",
                "",
                {
                    "Capital Federal": [
                        "Gurruchaga 870"
                    ]
                }
            ],
            [
                "Need Time",
                "",
                {
                    "Capital Federal": [
                        "Campana 3307, Villa del Parque, Tel.: 4505-0678, lunes a viernes 9 a 14 de 16 a 19 y sábado 10 a 14 - 16 a 19hs"
                    ]
                }
            ],
            [
                "Nike",
                "",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4660, Palermo, Tel.: 4773-1888",
                        "Av. Rivadavia 4015, Caballito, Tel.: 4958-5200/6816/6809",
                        "Corrientes 6433, Chacarita, Tel.: 4553-1269",
                        "J. B. Justo 9135, Liniers, Tel.: 4644-5777 - Lunes a sábado de 9.30 a 20"
                    ],
                    "Pcia. Buenos. Aires.": [
                        "Maipú 1901, Olivos, Tel.: 4795-6431"
                    ]
                }
            ],
            [
                "One Step Fitness",
                "http://www.one-step.com.ar",
                {
                    "Pcia. Buenos Aires": [
                        "Av. Mitre 2338, Munro, Tel. 4756-7300",
                        "Av. Maipú 1923, Olivos, Tel.:4796-1254"
                    ]
                }
            ],
            [
                "Open Sports",
                "http://www.open-sports.com.ar",
                {
                    "Pcia. Buenos. Aires.": [
                        "Villa Gesell: Calle 10 Nº 310, Tel.: (02255) 467877"
                    ],
                    "Pinamar": [
                        "Bunge 475, Tel.: (02254) 482732"
                    ],
                    "Bolívar": [
                        "San Martín 700 esq. Gral. Paz, Tel.: (02314) 426433"
                    ]
                }
            ],
            [
                "Outlet Rosario Deportes",
                "",
                {
                    "Santa Fe": [
                        "Rosario, Pte. Roca 981, Tel.:(0341) 421-0256"
                    ]
                }
            ],
            [
                "Penalty Club",
                "",
                {
                    "Capital Federal": [
                        "Viamonte 1517, Tel.: 5275-4732, Lunes a viernes de 10 a 19.30"
                    ],
                    "Pcia. Buenos. Aires.": [
                        "Bonifacini 6, San Martín, Tel.: 4753-8166, Lunes a sábado de 10 a 19.30"
                    ]
                }
            ],
            [
                "Pony",
                "",
                {
                    "Pcia. Buenos Aires": [
                        "Av. Maipú al 1900, Vte. López, Tel.: 4718-1868, Lunes a sábado 10 a 19"
                    ]
                }
            ],
            [
                "Puma",
                "http://www.puma.com",
                {
                    "Capital Federal": [
                        "Factory Parque Brown: Av. Francisco Fernández de la Cruz 4602, Villa Lugano, Tel.: 4605-8224, Todos los días de 10 a 20 hs",
                        "Gurruchaga 806, Villa Crespo, Tel.: 4776-4362, Lunes a sábados 10 a 19.30 hs - Domingos 14.30 a 18.30 hs"
                    ],
                    "Pcia. Buenos. Aires.": [
                        "Av. Mitre 2250, Munro",
                        "Calle 10 y 9 Parque industrial Pilar, Pilar",
                        "Factory Quilmes, Calchaquí 3950, Quilmes",
                        "Av. Hipólito Yrigoyen 8262, Lomas de Zamora",
                        "Soleil Factory: B. de Irigoyen 2647, Boulogne"
                    ],
                    "Mendoza": [
                        "Maxi Mall Deportivo: San Martín 1468"
                    ]
                }
            ],
            [
                "Punto 1",
                "http://www.punto1.com.ar",
                {
                    "Capital Federal": [
                        "Cabildo 2510, Belgrano, Tel.:4787-1261, Lunes a sábado de 9.30 a 20.30",
                        "Av. Corrientes 2793, Once, Tel.: 4963-8981"
                    ]
                }
            ],
            [
                "Reef",
                "http://www.reef.com.ar",
                {
                    "Capital. Federal": [
                        "Av.Córdoba 4965"
                    ],
                    "Pcia. Buenos Aires": [
                        "Juan B. Justo 1698, Mar del Plata, Tel.: 0223 491-3235"
                    ]
                }
            ],
            [
                "Rosario Deportes",
                "",
                {
                    "Santa Fe": [
                        "Rosario, Pte. Roca 981, tel.:0341 421-0256"
                    ]
                }
            ],
            [
                "Saffla",
                "http://www.saffla.com",
                {
                    "Capital Federal": [
                        "Manuela Pedraza 2173, Nuñez, Tel: 4702-1889"
                    ]
                }
            ],
            [
                "Salomon Y Wilson",
                "",
                {
                    "Capital. Federal": [
                        "Montes de Oca 1551, Barracas, Tel. 4360-7000, Lunes a sábado de 10 a 18",
                        "Cabildo 4396, Nuñez"
                    ]
                }
            ],
            [
                "Scandinavian",
                "http://www.scandinavian.com.ar",
                {
                    "Capital Federal": [
                        "Bmé. Mitre 1978 1º piso, Tel.: 4951-1993"
                    ],
                    "Mendoza": [
                        "Av. San Martín 69, Tel.: (0261) 424-1920"
                    ],
                    "Bariloche": [
                        "Av. Mitre 219, 1º P, Tel.: (02944) 40-0438"
                    ],
                    "Neuquen": [
                        "Ministro Gonzáles 40 - 1º P, Tel.: (0299) 447-1122"
                    ]
                }
            ],
            [
                "Stock Center",
                "",
                {
                    "Pcia. Buenos Aires": [
                        "Soleil Factory: Bernardo de Irigoyen 2647 Loc. 123, Boulogne"
                    ]
                }
            ],
            [
                "Swell",
                "http://www.swellstores.com.ar",
                {
                    "Capital Federal": [
                        "Factory Parque Brown: Av. Francisco Fernández de la Cruz 4602, Loc. 1077"
                    ],
                    "Pcia. Buenos Aires": [
                        "Soleil Factory: Bernardo de Irigoyen 2647, Loc. 1330. Boulogne",
                        "San Martín Factory: San Lorenzo 3773, San Martín, loc. 1011"
                    ]
                }
            ],
            [
                "The North Face",
                "",
                {
                    "Capital Federal": [
                        "Aguirre 759, Villa Crespo, Tel.: 5197-5547, Lunes a Sábado de 10 a 19.30 // Domingos de 14 a 18.30"
                    ]
                }
            ],
            [
                "Timberland",
                "",
                {
                    "Capital Federal": [
                        "Aguirre 761, Villa Crespo, Tel.: 5197-5396/5283/5547, Abierto de lunes a domingo"
                    ]
                }
            ],
            [
                "Toot",
                "http://www.toot.com.ar",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4318, Tel.: 4772- 9938",
                        "Parque Brown Factory, Av. Fernández de la Cruz 4602, Villa Lugano"
                    ],
                    "Pcia. Buenos. Aires": [
                        "Quilmes Factory, Av. Calchaquí 3950, Quilmes."
                    ]
                }
            ],
            [
                "Topper",
                "",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4694, Palermo, Tel.: 4100-0088, Lunes a Sábado de 10 a 20"
                    ],
                    "La Plata": [
                        "C.P. Centenario e/504 y 505, Tel.: 0221-4847599, Lunes a sábado de 10 a 20 hs"
                    ],
                    "Pcia. Buenos Aires": [
                        "Calchaquí 3899, Quilmes, Tel.: 4878-0282, Lunes a sábado de 9.30 a 19.30 hs",
                        "Hip. Yrigoyen 13.203, Adrogué, Tel.: 4214-3360, Lunes a sábado de 10 a 20. Domingos 16 a 20 hs",
                        "Av. Libertador 16101, San Isidro, Tel.: 5788-2202, Lunes a sábado de 9.30 a 19.30 hs",
                        "Maipú 1010, Vicente López"
                    ],
                    "Mendoza": [
                        "Av.San Martín 865, Godoy Cruz, Tel.: 0261 - 4249781, Lunes a viernes de 9 a 13 y desde las 17 hs"
                    ]
                }
            ],
            [
                "Travesia Argentina",
                "http://www.travesiaargentina.com.ar",
                {
                    "Capital Federal": [
                        "Guevara 500 (esq. Maure), Tel.: 4553-5725"
                    ]
                }
            ],
            [
                "Umbro Y Asics",
                "",
                {
                    "Pcia. Buenos Aires": [
                        "Av. Maipú 1940, Olivos, Tel.: 4795-0892"
                    ]
                }
            ],
            [
                "Vandalia",
                "http://www.vandalia.com.ar",
                {
                    "Capital Federal": [
                        "Crámer 3512, Belgrano"
                    ]
                }
            ],
            [
                "Wilson",
                "",
                {
                    "Capital Federal": [
                        "Montes de Oca 1551, Barracas, Tel. 4360-7000, Lunes a sábado de 10 a 18"
                    ]
                }
            ]
        ],
        "Artículos del hogar": [
            [
                "Bonaluce Fabrica Iluminación",
                "http://www.iluminacionbonaluce.com.ar",
                {
                    "Capital Federal": [
                        "Pje Atacalco 1743 (Alt Honduras 5300), Palermo Viejo, Tel.: 4832-0858/56"
                    ],
                    "Pcia. Buenos Aires": [
                        "Echeverría 1804, Colectora Panamericana, Florida, Tel/Fax: 4761-1920/4730-4454"
                    ]
                }
            ],
            [
                "Casaterra - Cerámicos Y Pisos",
                "http://www.casaterra.com.ar",
                {
                    "Santa Fe": [
                        "Rosario, Salta 2535, Tel.: (341) 435-8020, Lunes a viernes 8.30 a 12.30 y 15 a 19.30 // Sábados 8.30 a 13"
                    ]
                }
            ],
            [
                "Colombraro Directo De Fábrica",
                "http://www.colombraro.com.ar",
                {
                    "Capital Federal": [
                        "Medrano 41, Almagro, Tel.: 4982-7788",
                        "Av. Santa Fe 2628, Barrio Norte, Tel.: 4821-6565",
                        "Av. Cabildo 2755, Belgrano, Tel.: 4783-5115",
                        "Federico Lacroze 2628, Colegiales, Tel.: 4555-4149",
                        "Rivadavia 7318, Flores, Tel.: 4637-3263",
                        "Alvarez Jonte 3784, Floresta, Tel.: 4568-1037",
                        "Rivadavia 8674, Floresta, Tel.: 4636-3747",
                        "Cosquín 33, Liniers, Tel.: 4641-1126",
                        "Corrientes 2077, Once, Tel.: 4951-923",
                        "Rivadavia 3184, Once, Tel.: 4861-8160",
                        "San Martín 2110, Paternal, Tel.: 4581-9094"
                    ],
                    "Pcia. Buenos Aires": [
                        "Levenshon 24, Boulogne, Tel.: 4766-6001",
                        "Rivadavia 680, Escobar, Tel.: (03488) 433003",
                        "San Martín 464, Luján, Tel.: (02323) 442112",
                        "Velez Sarfield 4274, Munro, Tel.: 4762-0603",
                        "Av. Maipú 2437, Olivos, Tel.: 4794-0751",
                        "Centenario 234, San Isidro, Tel.: 4743-2824",
                        "San Martín 317, Bahía Blanca, Tel.: (0291) 4537388",
                        "Pellegrini 171, Chivilcoy, Tel.: (02346) 423917",
                        "Belgrano 149, Junín, Tel.: (02362) 434949"
                    ],
                    "La Plata": [
                        "Calle 12 Nº 1417, Tel.: (0221) 4539432"
                    ],
                    "Mar Del Plata": [
                        "Av. Luro 3341, Tel.: (0223) 4744339"
                    ]
                }
            ],
            [
                "Della Casa",
                "http://www.dellacasa.com.ar",
                {
                    "Capital Federal": [
                        "Av. Córdoba 5201, Palermo, Tel.: 4899-1483, Lunes a viernes 10 a 19 // Sáb 10 a 18",
                        "Av.Francisco Beiró 4502, Tel.: 4504-8389, Lunes a viernes de 10 a 19 y sábados de 10 a 19"
                    ],
                    "Pcia Buenos Aires": [
                        "Irigoyen esq. Las Heras, Quilmes, Tel.: 4257-4798, Lunes a viernes de 10 a 19 y sábado de 10 a 18."
                    ]
                }
            ],
            [
                "Electrolux",
                "http://www.electrolux.com.ar",
                {
                    "Capital Federal": [
                        "Herrera 2424, Barracas, Tel.: 4126-6100"
                    ]
                }
            ],
            [
                "Frávega",
                "",
                {
                    "Capital Federal": [
                        "Av. Sáenz 1253, Pompeya, Tel.: 4919-0045 / 0047"
                    ],
                    "Pcia. Buenos Aires": [
                        "Boedo 329, Lomas de Zamora, Tel.: 4392-4193/4122,Atención al cliente: 0-800-999-3728"
                    ]
                }
            ],
            [
                "Garbarino Outlet",
                "",
                {
                    "Capital Federal": [
                        "Cardenal Prímoli 7469, Mataderos, Tel.: 4687-6811/2, Lunes a Sábado de 10 a 19. Domingos de 10 a 17 hs"
                    ],
                    "Pcia. Buenos Aires": [
                        "Av. Crovara 1802, Tablada, Lunes a sábado de 10 a 19 //Domingo de 10 a 17 hs"
                    ]
                }
            ],
            [
                "Indelec Fabrica Iluminación",
                "http://www.indeleciluminación.com.ar",
                {
                    "Pcia. Buenos Aires": [
                        "San Martín 354"
                    ]
                }
            ],
            [
                "Kristallhaus",
                "",
                {
                    "Pcia. Buenos Aires": [
                        "Edison 970, Martínez, Tel: 4792-3281, Lunes a viernes de 9 a 18"
                    ]
                }
            ],
            [
                "Movistar Outlet",
                "",
                {
                    "Cordoba": [
                        "San Martín 224, Lunes a viernes de 9 a 20 y sábado de 9 a 14"
                    ]
                }
            ],
            [
                "Nikon",
                "http://nikon.com.ar/index_outlet.htm",
                {
                    "Capital Federal": [
                        "Ayacucho 1235, Tel.: 4811-1864, Lunes a viernes 9 a 19"
                    ]
                }
            ],
            [
                "Pc Discount",
                "",
                {
                    "Capital Federal": [
                        "México 3676, Tel.: 4957-1000"
                    ]
                }
            ],
            [
                "Samsonite",
                "http://www.samsonite-argentina.com.ar",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4261, Palermo, Tel.:4866-4113",
                        "Av. Cabildo 1925, Belgrano, Tel.:4511-2727",
                        "Av. Cabildo 3907, Nuñez, Tel. 5290-4132"
                    ],
                    "Cordoba": [
                        "Rafael Núñez 4450, Barrio Cerro de las Rosas, Tel.: (0351)4811298"
                    ]
                }
            ],
            [
                "Volf",
                "",
                {
                    "Capital Federal": [
                        "Carrefour: Monroe y Arribeños"
                    ]
                }
            ]
        ],
        "Bazar": [
            [
                "Beck & Martin",
                "http://www.outlet-bazar.com.ar",
                {
                    "Pcia. Buenos Aires": [
                        "José Ingenieros 1279, Beccar, San Isidro, Tel.: 4742-3266/4574, Lunes a viernes de 9 a 17. Sábado de 9 a 13"
                    ]
                }
            ],
            [
                "Geo Bazar",
                "",
                {
                    "Capital Federal": [
                        "Av. Cabildo 1865, Tel.: 4782-7011, Lunes a viernes de 10 a 20.30 // Sábados de 10 a 21."
                    ]
                }
            ],
            [
                "Kristallhaus",
                "",
                {
                    "Pcia. Buenos Aires": [
                        "Edison 970, Martínez, Tel: 4792-3281, Lunes a viernes de 9 a 18"
                    ]
                }
            ],
            [
                "Okko",
                "",
                {
                    "Capital Federal": [
                        "Santa Fe 2565"
                    ]
                }
            ]
        ],
        "Bebés": [
            [
                "Advanced",
                "http://www.advanced-adv.com/",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4878, Palermo",
                        "Pcia. Buenos Aires: Quilmes Factory: Av. Calchaquí 3900, Quilmes. Local 1050, Tel.: 4229- 4000",
                        "Av. Mitre y Ugarte, Munro."
                    ]
                }
            ],
            [
                "Azulino",
                "http://www.azulino.com.ar",
                {
                    "Capital Federal": [
                        "Crámer 3619, Tel.: 4702-3724"
                    ]
                }
            ],
            [
                "Baby Cottons",
                "",
                {
                    "Capital Federal": [
                        "Cuba 1893, 1º Piso, Belgrano, Tel.: 4780-1925, Lunes a viernes de 10 a 20 // Sábado de 10 a 13."
                    ]
                }
            ],
            [
                "Bukito Kids",
                "http://www.bukito.com",
                {
                    "Capital Federal": [
                        "Av. Corrientes 2699, Tel.: 4961-1112"
                    ]
                }
            ],
            [
                "Cheeky",
                "http://www.cheeky.com.ar",
                {
                    "Capital Federal": [
                        "Av. Alvarez Thomas 1432, Belgrano, Tel.: 4553-0907",
                        "Av. Alvarez Thomas 3320, Tel.: 4523-0400",
                        "Av. Córdoba 4801, Barrio Norte, Tel.: 4576-5490",
                        "Factory Parque Brown: Av. Francisco Fernández de la Cruz 4602, Villa Lugano, Tel.: 4604-1267",
                        "Spinetto Shopping: Matheu 220, Balvanera, Tel.: 4953-7450",
                        "Rivadavia 5096, Caballito, Tel.: 4902-4799",
                        "Aguirre 827, Palermo, Tel.: 4508-5810/11"
                    ],
                    "Pcia. Buenos Aires": [
                        "Av. Mitre 2494/6, Munro, Tel.: 4756-2895",
                        "San Martín Factory: San Lorenzo 3773, San Martín, Tel.: 4512-5791",
                        "Peatonal Belgrano 3631, San Martín, Tel.: 4512-5791",
                        "Lomas Center Factory: Av. Antártida Argentina 799 – Lomas de Zamora, Tel.: 4298-7566",
                        "Parque Comercial La Tablada: Crovara y Camino de Cintura, La Tablada, Tel.: 4699-6366",
                        "Parque Comercial Avellaneda: Autopista Bs. As. La Plata Km. 6, Avellaneda, Tel.:4353-1701",
                        "Coto Temperley: Hipolito Irigoyen 1656, Avellaneda, Tel.: 4298-9428",
                        "Coto Ciudadela: Comesaña 4089, Ciudadela, Loc. 19/20 Tel.:4647-0818",
                        "Soleil Factory: Bernardo de Irigoyen 2647, Boulogne, Tel.:4007-2500, Int. 1672",
                        "Quilmes Factory: Av. Calchaquí 3950, Quilmes, Tel.: 4280-6569",
                        "Alvear 2786, Villa Ballester, Tel.: 4767-7071",
                        "J.S. Fernández 55, Lomas de San Isidro, Tel.: 4723-3055",
                        "Cuyo 2944, Martínez, Tel.: 4513-8864/5",
                        "El Portal de Escobar: Ruta Prov. 25 y Colectora Oeste, Tel.: 03488-421194",
                        "Nine Shopping: Av. Victorica 1128, Moreno, Tel.: 463-7111",
                        "Av. Rivadavia 18229, Morón, Tel.: 4627-0864"
                    ],
                    "La Plata": [
                        "Calle 47 nº 656 (entre 8 y 9), Tel.: 0221 489.3500"
                    ],
                    "Formosa": [
                        "Rivadavia 769, Formosa, Tel.: 03717 425095/1"
                    ],
                    "Mendoza": [
                        "9 de Julio 965, Mendoza, Tel.: 0201 4204850"
                    ],
                    "San Miguel de Tucumán": [
                        "Buenos Aires 7, Tucumán Centro, San Miguel de Tucumán, Tel.: 0381 431-1630"
                    ]
                }
            ],
            [
                "Chibel",
                "http://www.chibel.com",
                {
                    "Capital Federal": [
                        "Av. Rivadavia 6433"
                    ],
                    "Pcia. Buenos Aires": [
                        "Carrefour San Martín: Av. San martín 420, esq. Gral. Paz."
                    ]
                }
            ],
            [
                "Chiribitil",
                "http://www.chiribitil.com.ar",
                {
                    "Capital Federal": [
                        "Alvarez Thomas 1505, Belgrano, Tel.: 4552-0754"
                    ]
                }
            ],
            [
                "Coala Kimbi",
                "http://www.coalakimbi.com.ar",
                {
                    "Capital Federal": [
                        "Córdoba 4242, Palermo, Tel.: 4867-0639, Lunes a Sábado 10 a 20"
                    ]
                }
            ],
            [
                "Coniglio",
                "http://www.conigliosa.com.ar",
                {
                    "Capital Federal": [
                        "Córdoba 4834, Palermo, Tel.: 4771-8998"
                    ]
                }
            ],
            [
                "Creciendo",
                "http://www.creciendo.com",
                {
                    "Capital Federal": [
                        "Av. Gral. Paz (salida Lope de Vega), Tel.: 4712-5986,Todos los días de 10 a 20"
                    ],
                    "Pcia. Buenos Aires": [
                        "Cuyo 2612, Martínez, Tel.: 4717-2700, Lunes a viernes de 9 a 19. Sábado 10 a 18"
                    ]
                }
            ],
            [
                "El Outlet Del PaÑal",
                "http://www.eloutletdelpanal.com",
                {
                    "Capital Federal": [
                        "José María Moreno 386, Caballito, Tel.: 4904-2555/2558",
                        "Cabildo 1253, Belgrano, Tel.: 4784-9554",
                        "Artigas 84, Flores, Tel.: 4637-3388",
                        "Medrano 539, Almagro, Tel.: 4867-1232/33,Delivery: 4295-9838"
                    ],
                    "Mar Del Plata": [
                        "Independencia 1653, Tel.: (0223) 494-3008"
                    ],
                    "San Pedro": [
                        "Pellegrini 1401, Tel.: (03329) 42-2700"
                    ],
                    "Santa Fe": [
                        "San Lorenzo, San Martin 2319, Tel.: (03476) 42-5910 / (15) 54-1699"
                    ],
                    "Venado Tuerto": [
                        "Mitre 850, Tel.: (03462) 43-0359"
                    ],
                    "Mendoza": [
                        "Juan B. Justo 264, Tel.: (0261) 444-6025 - (15) 51-1206"
                    ],
                    "Trelew": [
                        "Pellegrini 22, Tel.: (02965) 43-7400 - (15) 51-2696"
                    ],
                    "Formosa": [
                        "Padre Patiño 373"
                    ]
                }
            ],
            [
                "G De B Gabriela De Bianchetti",
                "http://www.gdeb.com.ar",
                {
                    "Capital Federal": [
                        "Scalabrini Ortiz 1305, Palermo",
                        "Av. Cabildo 4551, Nuñez, Tel.: 4701-6036, Lunes a sábado de 10 a 20"
                    ]
                }
            ],
            [
                "Gimos",
                "http://www.gimos.com.ar",
                {
                    "Capital Federal": [
                        "Córdoba 4930, Palermo, Tel.: 4777-6822",
                        "Charcas 4726, Palermo",
                        "Ciudad de la Paz 2899, Tel.: 4139-5136/5137",
                        "Sarmiento 4152, Almagro, Tel.: 4867-2222"
                    ],
                    "Pcia. Buenos Aires": [
                        "Soleil Factory: Bernardo de Irigoyen 2647, Boulogne. Loc. 602, Tel.: 4007-2500 int. 1602"
                    ]
                }
            ],
            [
                "Grisino",
                "http://www.grisino.com.ar",
                {
                    "Capital Federal": [
                        "Cabildo 4541, Belgrano",
                        "Cordoba 4880, Palermo"
                    ],
                    "Pcia. Buenos. Aires": [
                        "Soleil, Bernardo de Irigoyen 2647, Boulogne",
                        "H. Irigoyen 8202, Lomas de Zamora"
                    ],
                    "Santa Fe": [
                        "Rosario, Pellegrini 1910, Tel.: 0341 4243417"
                    ]
                }
            ],
            [
                "Hola Ma! Bebés Y Futura Mamá",
                "",
                {
                    "Capital Federal": [
                        "Scalabrini Ortiz 1189, Tel.: 4776-5506, Lunes a sábado de 10 a 20"
                    ]
                }
            ],
            [
                "Kiddy - Cunas, Coches, Paraguas",
                "",
                {
                    "Capital Federal": [
                        "Nicaragua 4748, Palermo, Tel.: 4832-2174/4831-8377, Lunes a viernes 13.30 a 18.30 //Sábados de 10 a 14"
                    ]
                }
            ],
            [
                "Le Papalú",
                "http://www.lepapalu.com.ar",
                {
                    "Capital Federal": [
                        "Larrea 431, Tel.: 4954-1944"
                    ]
                }
            ],
            [
                "Miele - Bebés & Niños",
                "http://www.mieleweb.com.ar",
                {
                    "Capital Federal": [
                        "Santa Fe y Scalabrini Ortiz, Palermo, Galería Nuevo Mundo Local 13"
                    ]
                }
            ],
            [
                "Mimo",
                "http://www.mimo.com.ar",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4956, Palermo, Tel.: 4773-4728",
                        "Factory Parque Brown: Av. Francisco Fernández de la Cruz 4602. Loc. 1068, Tel.: 4604-1319"
                    ],
                    "Pcia. Buenos Aires": [
                        "El Portal de Escobar: Ruta 9 y ruta 25, Escobar, Loc. 1020, Tel. (543488) 430-402",
                        "Lomas Center Factory: Av. Antártida Argentina 799, Lomas de Zamora Loc. 1039, Tel.: 4231-4700",
                        "Munro Factory: Av. Mitre 2454, Munro, Tel.: 4756-0110",
                        "Quilmes Factory: Av. Calchaquí 3950, Quilmes, Loc. 1032, Tel.: 4200-8028",
                        "San Martín Factory: San Lorenzo 3773, San Martín, Loc.1007, Tel.: 4849-1019",
                        "Soleil: Soleil, Bernardo Irigoyen 2647, Boulogne"
                    ]
                }
            ],
            [
                "Old Bunch",
                "http://www.oldbunchkids.com.ar",
                {
                    "Capital Federal": [
                        "Córdoba 4998, Galería Jardín"
                    ],
                    "Mar Del Plata": [
                        "Güemes 2574, Local 4"
                    ]
                }
            ],
            [
                "Owoko",
                "",
                {
                    "Capital Federal": [
                        "Echeverría 2427, Belgrano, Tel.: 4784-3144, Lunes a sábados 9.30 a 20"
                    ],
                    "Pcia. Buenos Aires": [
                        "Soleil, Bernardo Irigoyen 2647, Boulogne, Tel.: 4007-2500"
                    ]
                }
            ],
            [
                "Pioppa",
                "http://www.pioppa.com.ar",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4834, Tel.: 4899-0287, Abierto de lunes a sábado de 10 a 20"
                    ]
                }
            ],
            [
                "Ruba Factory",
                "http://www.ruba-factory.com.ar",
                {
                    "Capital Federal": [
                        "Mahatma Gandhi 325, Villa Crespo, Tel.: 4514-9720"
                    ],
                    "Pcia. Buenos Aires": [
                        "Gral. José María Paz 1336, Vte. López, Tel.: 4513-6140, Lunes a sábado de 10 a 14 / 15 a 19"
                    ]
                }
            ],
            [
                "Soft Red",
                "",
                {
                    "Capital Federal": [
                        "Av. Alvarez Thomas 1434, Tel.: 4553-4883, Lunes a viernes de 9.30 a 19.30 y sábados de 9.30 a 14"
                    ]
                }
            ],
            [
                "The Baby Company",
                "",
                {
                    "Capital. Federal": [
                        "Av. Balbín 4721, Tel.:4546-0657",
                        "Av. J. B. Alberdi 7487(casi General Paz), Mataderos, Tel.: 4139-0023"
                    ]
                }
            ],
            [
                "Urbanito",
                "http://www.urbanito.com.ar",
                {
                    "Capital Federal": [
                        "Camacuá 85, Flores, Tel.: 4633-4969, Lunes a viernes de 9.30 a 19.30 // Sábado de 10 a 18.30",
                        "Av. Córdoba 4657, Palermo, Tel.: 4774-6328, Lunes a sábado de 10 a 20"
                    ]
                }
            ]
        ],
        "Blanquerías": [
            [
                "Alpargatas Directo De Fábrica (palette)",
                "http://www.alpargatas.com.ar",
                {
                    "Capital Federal": [
                        "California 1936, Central Park, Barracas, Tel.: 4302-1157/4301-1531, Lunes a viernes 10 a 19 / sábado 10 a 20 / domingo 11 a 19"
                    ]
                }
            ],
            [
                "Alquimia",
                "",
                {
                    "Capital Federal": [
                        "Corrientes 5056, Chacarita, Lunes a viernes de 10 a 19 y sábado de 10 a 13.30"
                    ]
                }
            ],
            [
                "Arredo",
                "http://www.arredo.com.ar",
                {
                    "Capital Federal": [
                        "Medrano 498, Tel.: 4982-7854",
                        "Factory Parque Brown: Av. Francisco Fernández de la Cruz 4602, Tel.: 4605-9776, Lunes a domingo de 10 a 22",
                        "Av. Elcano 3367 Gurruchaga 760, Villa Crespo, Tel.: 5197-5300, Lunes a viernes de 9 a 20// Sábados de 13 a 20"
                    ],
                    "Pcia. Buenos Aires": [
                        "Parque Comercial Avellaneda, Autop. La Plata, km. 6, local 1038/9, Tel.: 4206-0091, Lunes a domingo 10 a 22"
                    ],
                    "Uruguay": [
                        "Montevideo, Soriano esq. Aguiles Lanza",
                        "Av. 18 de Julio 900, Montevideo",
                        "Peatonal Sarandí esq. Ventura Alegre, Maldonado"
                    ]
                }
            ],
            [
                "Biancheria Lf",
                "",
                {
                    "Capital Federal": [
                        "Elcano 3447"
                    ]
                }
            ],
            [
                "Complementos",
                "http://www.complementos.biz",
                {
                    "Capital Federal": [
                        "Rivadavia 1141/5, Tel.: 4383-5611/5699, Lunes a viernes de 9.30 a 18.30"
                    ]
                }
            ],
            [
                "Dormilon Factory",
                "",
                {
                    "Capital Federal": [
                        "Av. Cabildo 4301 (esq. Ruiz Huidobro)"
                    ]
                }
            ],
            [
                "Duvet AnchaÑo. Fábrica De Productos En Duvet",
                "http://www.duvetanchanio.com.ar",
                {
                    "Capital Federal": [
                        "Ravignani 1209, Tel.: 4772-2102, Lunes a viernes de 9 a 18. Sábado de 9 a 18"
                    ]
                }
            ],
            [
                "Grippa Y Gaddi",
                "",
                {
                    "Capital Federal": [
                        "Oro 1921, Palermo, Tel.: 4773-9241"
                    ]
                }
            ],
            [
                "Palette",
                "http://www.paletteonline.com.ar",
                {
                    "Capital Federal": [
                        "Av. Reg. Patricios 1054, Barracas, Tel.: 4124-2419/2488"
                    ],
                    "Pcia. Buenos Aires": [
                        "Quilmes: Calchaquí 3899, Tel.: 4878-0282/3, Lunes a sábado de 9.30 a 19.30 hs",
                        "Adrogué: Hip. Yrigoyen 13203, Tel.: 4214-3360, Lunes a sábado de 10 a 20. Domingos 16 a 20 hs",
                        "San Isidro: Av. Libertador 16101, Tel.: 5788-2202, Lunes a sábado de 9.30 a 19.30 hs",
                        "Cruce Varela: Camino Gral. Belgrano 6328, Tel.: 4139-4363/4",
                        "Lomas de Zamora: H.Irigoyen 8282, Tel.: 4392-0173",
                        "Monte Grande: B. Buenos Aires 170, Tel.: 4290-8280",
                        "Morón: Curuchet 1506 y Av.Vergara, Tel.: 4627-6052",
                        "Wilde: Av. Mitre 6222, Tel.: 4353-2370",
                        "Ramos Mejía: Av.Rivadavia 14832, Tel.: 4469-2684/4464-6702",
                        "Florencio Varela: Ruta 2 Km.34, Rot.Gutierrez, Tel.: 02229-491065/496313"
                    ],
                    "La Plata": [
                        "C.P. Centenario e/504 y 505, Tel.: 0221-4847599/ 4845973, Lunes a sábado de 10 a 20 hs"
                    ],
                    "Mar Del Plata": [
                        "Brandsen 3226, Tel.: 0223-4755250"
                    ],
                    "Mendoza": [
                        "Av.San Martín 865, Godoy Cruz, Tel.: 0261 - 4249781"
                    ],
                    "La Pampa": [
                        "Av.Spinetto 948, Santa Rosa, Tel.: 02954-432067/431657"
                    ],
                    "Catamarca": [
                        "Mate de Luna 497, Tel.: 03833-435786/454364"
                    ],
                    "San Luis": [
                        "Pedernera 676, Villa Mercedes, Tel.: 02657-434262/437195"
                    ]
                }
            ]
        ],
        "Calzado y Marroquinería": [
            [
                "Albany",
                "http://www.albanyshoes.com",
                {
                    "Capital Federal": [
                        "Céspedes 3073, Tel.: 4556-0524, Lunes a viernes de 9 a 13 / 15 a 20 y Sábado de 9 a 14"
                    ]
                }
            ],
            [
                "Alonso",
                "http://www.zapatosalonso.com.ar/castellano/home.ht",
                {
                    "Capital Federal": [
                        "Deán Funes 877, Tel.: 4931-4444"
                    ]
                }
            ],
            [
                "Alpargatas",
                "http://www.alpargatascalzado.com.ar",
                {
                    "Capital Federal": [
                        "California 1936, Barracas, Tel.: 4301-1531/4302-1157"
                    ]
                }
            ],
            [
                "Anca & Co",
                "",
                {
                    "": [
                        ". Rivadavia 11644, Liniers"
                    ]
                }
            ],
            [
                "And 1",
                "http://www.and1argentina.com.ar",
                {
                    "Capital Federal": [
                        "Av. Córdoba 3975, Tel.: 4863-1280"
                    ],
                    "Pcia. Buenos Aires": [
                        "Av. Rivadavia 16.430, Haedo, Tel.: 4460-5755, Lunes a viernes de 10 a 20 // Sábados de 10 a 13"
                    ]
                }
            ],
            [
                "Ash",
                "",
                {
                    "Capital Federal": [
                        "La Pampa 2321, Tel.: 6473-0194",
                        "Av. La Plata 37, Tel.: 3392-0891",
                        "Av. Las Heras 2285, Tel.: 6257-8018",
                        "Av. Corrientes 805, Tel.: 6257-8004"
                    ]
                }
            ],
            [
                "Atomik Outlet",
                "",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4914, Tel.: 4776-6877, Lunes a sábado de 10 a 20"
                    ],
                    "Pcia. Buenos Aires": [
                        "Hipólito Yrigoyen 1331, Avellaneda, Tel.: 4208-5777",
                        "Soleil, Bernardo Irigoyen 2647, Boulogne"
                    ]
                }
            ],
            [
                "Avia",
                "http://www.avia-argentina.com.ar",
                {
                    "Capital Federal": [
                        "Cabildo 4009, Nuñez, Tel.: 4704-0048",
                        "Cabildo 2438, Belgrano, Tel.:4782-2165",
                        "Vera 600, Villa Crespo, Tel.: 4854-7773, Lunes a sábado de 9 a 20"
                    ],
                    "Pcia. Buenos Aires": [
                        "Factory Deportivo: Av. Irigoyen 2681, Boulogne, R. Panamericana y Camino del Buen Ayre, Tel.: 4737-8139, Todos los días de 10 a 20"
                    ]
                }
            ],
            [
                "Blaque",
                "http://www.blaque.com.ar",
                {
                    "Capital Federal": [
                        "Scalabrini Ortiz 87, Tel.: 4854-4120",
                        "Gurruchaga 855, Palermo, Tel.:4775-2595, Lunes a viernes de 9 a 19.30 - Sábado de 9 a 14"
                    ]
                }
            ],
            [
                "Boating",
                "http://www.boating.com.ar",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4446, Tel.: 4777-1008"
                    ],
                    "Pcia. Buenos Aires": [
                        "Colectora Panamericana 273, Martínez, Tel.: 4836-1517"
                    ]
                }
            ],
            [
                "Boniface",
                "http://www.boniface.com.ar",
                {
                    "Capital Federal": [
                        "San José 559, Lunes a viernes de 9.30 a 20, sábados de 9.30 a 17 y domingos de 12.30 a 17.30"
                    ]
                }
            ],
            [
                "Botana",
                "",
                {
                    "Capital Federal": [
                        "Las Heras 4067, Zona Botánico, Tel.: 4804-0990, Lunes a viernes 10 a 20 - Sábado 10 a 14 hs"
                    ]
                }
            ],
            [
                "Bruno Manetti",
                "http://www.brunomanetti.com.ar",
                {
                    "Pcia. Buenos. Aires": [
                        "Constitución 761, San Fernando, Tel.: 4725-0072, Lunes a sábado 9 a 20 hs."
                    ]
                }
            ],
            [
                "Carla Danelli",
                "http://www.carladanelli.com",
                {
                    "Capital Federal": [
                        "Gurruchaga 889, Villa Crespo, Tel.: 4774-9403, Lunes a viernes 10 a 20 / sábado 10 a 20.30"
                    ]
                }
            ],
            [
                "Carteras Italianas",
                "",
                {
                    "Capital Federal": [
                        "Ramírez de Velasco 419"
                    ]
                }
            ],
            [
                "Cassius",
                "",
                {
                    "Capital Federal": [
                        "Saavedra 742"
                    ]
                }
            ],
            [
                "Chaumont",
                "",
                {
                    "Capital Federal": [
                        "Charcas 4994, Tel.:4772-5913"
                    ]
                }
            ],
            [
                "Chiarini",
                "http://www.chiariniweb.com.ar",
                {
                    "Capital Federal": [
                        "Gurruchaga 983, Palermo, Tel.: 4776-8057, Lunes a viernes de 10 a 19, sábados de 10 a 20 y domingos y feriados de 14 a 19"
                    ],
                    "Pcia. Buenos Aires": [
                        "Ruta Panamericana, Colectora Este Ramal Escobar Km 35, Tel.: 03327 411592"
                    ]
                }
            ],
            [
                "Clona Shoes",
                "http://www.clonashoes.com",
                {
                    "Capital Federal": [
                        "Corrientes 4083, Tel.: 4862-3180, Horarios: Lunes a viernes de 9.30 a 20.30 y Sábado de 9 a 20",
                        "Gurruchaga 888, Palermo, Tel.: 4778-5717, Lunes a domingo de 9 a 20."
                    ]
                }
            ],
            [
                "Colimen",
                "",
                {
                    "Capital Federal": [
                        "Av. Cabildo 2730, Belgrano, Tel.: 4787-5712"
                    ]
                }
            ],
            [
                "Converse",
                "",
                {
                    "Capital Federal": [
                        "Loyola 748, Villa Crespo, Tel.: 4777-7763, Lunes a sábado 10 a 29 - Domingo 13 a 19"
                    ],
                    "Pcia. Buenos Aires": [
                        "Soleil, Bernardo Irigoyen 2647, Boulogne"
                    ]
                }
            ],
            [
                "Corre Lola",
                "http://www.correlola.com.ar",
                {
                    "Capital Federal": [
                        "Vera 532, Villa Crespo, Tel.: 4858-3826, Lunes a viernes de 9 a 13 y de 14 a 17 - Sábados de 11 a 18"
                    ]
                }
            ],
            [
                "Cumbrex Outdoor",
                "",
                {
                    "Capital Federal": [
                        "California 2005, Barracas"
                    ]
                }
            ],
            [
                "Dass Outlet",
                "",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4599, Palermo, Tel.: 4775-4566",
                        "Salta 1715, Constitución, Tel.: 4304-0678",
                        "Av. Fco. Lacroze 4114, Chacarita, Tel.: 4555-5798"
                    ],
                    "Pcia. Buenos. Aires": [
                        "Maipú 1942, Vicente López, 47925-3454",
                        "Av. Rolón 8 (y Av. Márquez), San Isidro, 4892-0029"
                    ],
                    "La Plata": [
                        "Calle 13 1657 (entre 515 y 516), (0221)4716520"
                    ]
                }
            ],
            [
                "Davor",
                "http://www.davor.com.ar",
                {
                    "Capital Federal": [
                        "Av. Argentina 5653, Tel.: 4601-8603"
                    ]
                }
            ],
            [
                "Dexter",
                "http://www.dextershops.com",
                {
                    "Capital Federal": [
                        "Factory Parque Brown: Francisco Fernández de la Cruz 4602, local 1008"
                    ],
                    "Pcia. Buenos Aires": [
                        "Soleil Factory: B. de Irigoyen 2647, Local 219, Boulogne",
                        "Factory Quilmes: Calchaquí 3950, local 1122, 1º nivel, Quilmes",
                        "Walmart Parque Avellaneda: Autopista Buenos Aires La Plata 9, Sarandí, Tel.: 4353-0598/0596"
                    ]
                }
            ],
            [
                "Donna Bella",
                "",
                {
                    "Capital Federal": [
                        "Av. de los Incas 4401, (esq. Lugones)."
                    ]
                }
            ],
            [
                "Face Nova",
                "http://www.facenova.com.ar",
                {
                    "Capital Federal": [
                        "Joaquín V. González 1016, Floresta",
                        "Córdoba 4710, Palermo, Tel.: 4773-2644"
                    ]
                }
            ],
            [
                "Factory Deportivo",
                "",
                {
                    "Pcia. Buenos Aires": [
                        "Bernardo de Irigoyen y Panamericana, Boulogne, (Predio Soleil Factory), Tel.: 4710-4413, Abierto de lunes a domingo de 10 a 22"
                    ]
                }
            ],
            [
                "Factory Outlet",
                "",
                {
                    "Capital Federal": [
                        "Malabia 540, Tel.: 4855-6086, Lunes a viernes de 10 a 19.30 y sábado de 10 a 16"
                    ]
                }
            ],
            [
                "Factory Sport",
                "http://www.sevensport.com.ar",
                {
                    "Pcia. Buenos Aires": [
                        "Av. Hipólito Yrigoyen 10567, Temperley, Tel.: 4292-8975/4243-0035"
                    ]
                }
            ],
            [
                "Ferraro",
                "http://www.ferraronet.com.ar",
                {
                    "Capital Federal": [
                        "Scalabrini Ortiz 128, Tel.: 4856-5695"
                    ],
                    "Mendoza": [
                        "San Martín 730, Godoy Cruz"
                    ]
                }
            ],
            [
                "Floss Calzados",
                "http://www.flosscalzados.com.ar",
                {
                    "Pcia. Buenos Aires": [
                        "C.M. de Alvear 1048, Florida, Vte. Lopez, Lunes a viernes de 8 a 19 // Sábados de 8 a 14"
                    ]
                }
            ],
            [
                "Gaby",
                "",
                {
                    "Pcia. Buenos. Aires": [
                        "Brandsen 2773, Victoria, Tel.:4745-8698"
                    ]
                }
            ],
            [
                "Gremond",
                "",
                {
                    "Capital Federal": [
                        "Cabildo 4420, Tel.: 4702-7676"
                    ]
                }
            ],
            [
                "Grimoldi",
                "http://www.grimoldi.com.ar",
                {
                    "Capital Federal": [
                        "Factory Parque Brown: Av. F. Fernández de la Cruz 4602, Tel: 4605-4755",
                        "Rivadavia 3051, Caballito, Tel.: 4866-4386",
                        "Aguirre 840, Villa crespo, Tel. 4776-4499",
                        "Herrera 1863, Barracas, Tel.: 4302-3552",
                        "Santa Fe 2422, 1º piso, Tel.: 4508-2244",
                        "Rivadavia 6782,1º Piso, Flores, Tel.: 4631-2507"
                    ],
                    "Pcia. Buenos Aires": [
                        "Factory Quilmes, Av. Calchaquí 3950, Quilmes, Tel.: 4280-6577",
                        "Soleil Factory: Bernardo de Irigoyen 2647, Boulogne, Tel: 4007-2532"
                    ]
                }
            ],
            [
                "Karpatos",
                "http://www.karpatos.com.ar",
                {
                    "Capital Federal": [
                        "Santa Fe 3101, Tel.: 4822-9300, Lunes a sábado de 9 a 20"
                    ]
                }
            ],
            [
                "Katty Miyoko",
                "",
                {
                    "Capital Federal": [
                        "Loyola 679, Villa Crespo"
                    ]
                }
            ],
            [
                "Kiamira",
                "http://www.kiamira.com.ar",
                {
                    "Capital Federal": [
                        "Thorne 398, Caballito, Tel.: 4433-5490, Lunes a viernes 10 a 20 // Sábados de 10 a 18"
                    ]
                }
            ],
            [
                "Kio",
                "http://www.kio.com.ar",
                {
                    "Capital Federal": [
                        "Av. de los Incas 4440, Tel.: 5258-6994/5, Lunes a sábado 8 a 20.30",
                        "Scalabrini Ortiz 639, Lunes a sábado 10 a 19"
                    ]
                }
            ],
            [
                "Lace Up Shoe Shop",
                "",
                {
                    "Pcia. Buenos.aires": [
                        "Av. Libertador 14.424, Martínez, Tel.: 4897-0184, Lunes a viernes 10 a 19.30 y Sábados 10 a 16"
                    ]
                }
            ],
            [
                "Lady Stork",
                "http://www.ladystork.com",
                {
                    "Pcia. Buenos Aires": [
                        "Lomas Center: Av. Antártida Argentina 799, Local 1027, Lomas de Zamora",
                        "Factory Quilmes: Calchaquí 3950, Local 1136, Quilmes"
                    ]
                }
            ],
            [
                "Lázaro",
                "",
                {
                    "Capital Federal": [
                        "Nicasio Oroño 1563, Tel: 4582-4719/9226, Estacionamiento sin cargo Nicasio Oroño 1638, Lunes a viernes 9 a 18 / Sábado 9 a 14"
                    ]
                }
            ],
            [
                "Leñador",
                "http://www.lenador.com.ar",
                {
                    "Capital Federal": [
                        "México 1944, Monserrat, Tel.: 4942-6922"
                    ]
                }
            ],
            [
                "Lidia De Viareggio",
                "",
                {
                    "Capital Federal": [
                        "Mendoza 1802, Tel.: 4788-2095"
                    ]
                }
            ],
            [
                "Lo De Heidi",
                "http://www.lodeheidioutlet@hotmail.com",
                {
                    "Santa Fe": [
                        "Rosario, Bv. Oroño 117, Tel.: 0341 4400970, Tucumán 1274, Tel.: 0341 4451885, Montevideo 1680, Tel.: 0341 4110950"
                    ]
                }
            ],
            [
                "Lonté",
                "http://www.lonteshoes.com.ar",
                {
                    "Capital Federal": [
                        "Thames 1619, Palermo, Tel.: 4833-3546, Lunes a sábado de 11 a 13 y 14 a 20"
                    ]
                }
            ],
            [
                "Lopez Bolognino",
                "Lopezbolognino1730@hotmail.com",
                {
                    "Pcia. Buenos Aires": [
                        "Arenales 1730, Florida, Vte. López, Tel.: 4795-0643, Lunes a sábado de 9.30 a 20"
                    ]
                }
            ],
            [
                "Lucerna",
                "http://www.calzadoslucerna.com.ar",
                {
                    "Capital Federal": [
                        "Corrientes 5441, Tel.: 4854-5477, Lunes a sábado de 8 a 20, Córdoba 4814, Palermo, Gurruchaga 821, Tel.: 4777-2540, Lunes a sábado de 10 a 20 y domingos de 14 a 19"
                    ]
                }
            ],
            [
                "Maggio Rossetto",
                "http://www.maggiorossetto.com",
                {
                    "Pcia. Buenos Aires": [
                        "las Parera 1991, Florida, Vte. López, Lunes a viernes de 10 a 19.30. Sábado de 10 a 13.30"
                    ]
                }
            ],
            [
                "Maniaticas",
                "",
                {
                    "Capital Federal": [
                        "Av. Juan Bautista Alberdi 6232, Tel.: 4686-4205, Lunes a sábado de 10 a 14 y 16.30 a 20.30",
                        "Av. Juan B. Alberdi 6232, Mataderos, Lunes a sábado 10 a 14 y 16.30 a 20.30"
                    ]
                }
            ],
            [
                "Marcel Outlet",
                "",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4914, Tel.: 4776-6877, Lunes a sábado de 10 a 20"
                    ]
                }
            ],
            [
                "Marta Parret",
                "",
                {
                    "Capital Federal": [
                        "Av. Juan Segundo Fernández 256, local 7, Tel.: 4519-3505"
                    ]
                }
            ],
            [
                "Marta Sixto Calzados",
                "http://www.martasixto.com",
                {
                    "Capital Federal": [
                        "Cabildo 4407, Nuñez, Tel.: 4511-3132, Lunes a viernes de 9 a 13 y 15 a 19 - Sábados 9.30 a 13 hs"
                    ]
                }
            ],
            [
                "Mary & Joe",
                "",
                {
                    "Capital Federal": [
                        "Gurruchaga 785, Palermo, Tel.: 4777-0430"
                    ]
                }
            ],
            [
                "Maxime",
                "",
                {
                    "Capital Federal": [
                        "Gral. Artigas 2332, Tel.:3087-1916"
                    ]
                }
            ],
            [
                "Micadel",
                "",
                {
                    "Pcia. Buenos Aires": [
                        "Colectora Av. Pte. Peron 7480 (Acceso Oeste), Ituzaingo, Tel.:4661-7752"
                    ]
                }
            ],
            [
                "Morena Outlet",
                "",
                {
                    "Pcia. Buenos Aires": [
                        "Calle 147, entre 14 y 15, Berazategui, Tel.: 4216-5708, Lunes a viernes de 9 a 13 y de 15.30 a 20.30 - Sábados de 9.30 a 13.30 y de 16 a 20.30"
                    ]
                }
            ],
            [
                "Natacha Discontinuos",
                "",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4777, Palermo, Tel.:4773-1662, Lunes a sábado 10 a 20"
                    ]
                }
            ],
            [
                "Norwich",
                "",
                {
                    "Capital Federal": [
                        "Scalabrini Ortiz 80"
                    ]
                }
            ],
            [
                "Oggi",
                "http://www.oggishoes.com.ar",
                {
                    "Capital Federal": [
                        "Calzado Mujer: Bucarelli 2753, Villa Urquiza. Tel.: 4522-2665",
                        "Calzado Hombre: Bucarelli 250, Villa Urquiza Tel.: 4521-8714",
                        "Cabildo 1582, 1º piso, Belgrano (Sector Discontinuos), Lunes a viernes de 9 a 13 / 14.30 a 20. Sábado de 9 a 20"
                    ]
                }
            ],
            [
                "Paruolo",
                "http://www.paruolo.com.ar",
                {
                    "Capital Federal": [
                        "Honduras 4785, Palermo, Tel.: 4833-9484, Lunes a sábado 11 a 20 - Domingos 15 a 20",
                        "Loyola 628, Villa Crespo, Tel.: 4899-2120, Lunes a sábado 10 a 20 - Domingos 12 a 20"
                    ],
                    "Pcia. Buenos Aires": [
                        "Diego Carman 375, San Isidro, Lunes a sábado 11 a 20"
                    ]
                }
            ],
            [
                "Pepe Cantero",
                "http://www.pepecantero.com",
                {
                    "Capital Federal": [
                        "Costa Rica 4522, Palermo, Tel.: 4899-1060, Lunes a sábado de 10.30 a 20. Domingos de 14 a 19 hs",
                        "Gurruchaga 721"
                    ]
                }
            ],
            [
                "Perugia",
                "",
                {
                    "Capital Federal": [
                        "Ayacucho 1975, Tel.: 4804-5586"
                    ]
                }
            ],
            [
                "Pigalle",
                "http://www.pigalle.com.ar",
                {
                    "Pcia. Buenos Aires": [
                        "Las Heras 680, Ramos Mejía, Tel.: 4658-5137 / 6449"
                    ]
                }
            ],
            [
                "Pony",
                "",
                {
                    "Pcia. Buenos Aires": [
                        "Maipú 1974, Olivos, Tel.: 4718-1868, Lunes a Viernes de 10 a 19.30 - Sábados de 10 a 18"
                    ]
                }
            ],
            [
                "Prego",
                "",
                {
                    "Capital Federal": [
                        "Callao 1744, Barrio Norte, Tel.: 4805-0996"
                    ]
                }
            ],
            [
                "Premium Outlet - Multimarca",
                "",
                {
                    "Santa Fe": [
                        "Rosario, Montevideo 1680"
                    ]
                }
            ],
            [
                "Priamo Fábrica",
                "http://www.priamoitaly.com",
                {
                    "Capital Federal": [
                        "Salta 279, Tel.:4384-5318"
                    ]
                }
            ],
            [
                "Prune",
                "http://www.prune.com.ar",
                {
                    "Capital Federal": [
                        "Gurruchaga 867, Palermo, Lunes a sábado de 10 a 20. Domingo de 12 a 19"
                    ]
                }
            ],
            [
                "Rallys",
                "http://www.rallysonline.com",
                {
                    "Capital Federal": [
                        "Federico Lacroze 2433, Tel.: 0-800-77-RALLYS Fábrica: 4774-6153"
                    ]
                }
            ],
            [
                "Rodrigo Reyes Vintage",
                "http://www.rodrigoreyes.com.ar",
                {
                    "Capital Federal": [
                        "Magariño Cervantes 2359, Tel.: 4584-9454, Lunes a viernes de 9 a 13 y 14 a 18// sábados de 9 a 15"
                    ]
                }
            ],
            [
                "Samsonite",
                "http://www.samsonite-argentina.com.ar",
                {
                    "En Capital Federal": [
                        "Av. Córdoba 4261, Palermo, Tel.:4866-4113",
                        "Av. Cabildo 1925, Belgrano, Tel.:4511-2727",
                        "Av. Cabildo 3907, Nuñez, Tel. 5290-4132"
                    ],
                    "Córdoba": [
                        "Rafael Núñez 4450, Barrio Cerro de las Rosas, Tel.: (0351)4811298"
                    ]
                }
            ],
            [
                "Sarkany",
                "http://www.rickysarkany.com.ar",
                {
                    "Pcia. Buenos Aires": [
                        "Blanco Encalada 22, Lomas de San Isidro, Tel.: 4708-9025, Lunes a sábado de 10 a 20."
                    ]
                }
            ],
            [
                "Scarpanno",
                "",
                {
                    "Pcia. Buenos Aires": [
                        "San Martín 2338, Florida, Vte. López, Tel.: 4718-0242"
                    ]
                }
            ],
            [
                "Shoe Up",
                "",
                {
                    "Pcia. Buenos Aires": [
                        "Juan Segundo Fernández 193 1º piso, Lomas de San Isidro"
                    ]
                }
            ],
            [
                "Sibyl Vane",
                "",
                {
                    "Capital Federal": [
                        "Armenia 1670, Palermo, Tel.: 4833 3409"
                    ]
                }
            ],
            [
                "Silvia Brix",
                "",
                {
                    "Capital Federal": [
                        "Juramento 4963, Villa Urquiza, Tel.:4523-4951, Lunes a viernes 10 a 14 y 15.30 a 20.30 - Sábado desde las 10"
                    ]
                }
            ],
            [
                "Sofi Martiré",
                "",
                {
                    "Capital Federal": [
                        "Aguirre 714, Palermo, Tel.:4773-0616, Lunes a sábado de 10 a 20 / Domingo de 12 a 19"
                    ]
                }
            ],
            [
                "Syvil Vane",
                "",
                {
                    "Capital Federal": [
                        "Armenia 1670, Palermo"
                    ]
                }
            ],
            [
                "Tanna",
                "",
                {
                    "Pcia. Buenos Aires": [
                        "Alvear 260, Local 1, 3 y 5, Martínez, Tel.: 4798-9439"
                    ]
                }
            ],
            [
                "The North Face",
                "",
                {
                    "Capital Federal": [
                        "Aguirre 759, Villa Crespo, Tel.: 5197-5547, Lunes a sábado de 10 a 19.30 // Domingos de 14 a 18.30"
                    ]
                }
            ],
            [
                "Timberland",
                "",
                {
                    "Capital Federal": [
                        "Aguirre 761, Tel.: 5197-5396, Abierto de lunes a domingo"
                    ]
                }
            ],
            [
                "Timberland Y Hush Puppies",
                "",
                {
                    "Capital Federal": [
                        "Aguirre 840"
                    ]
                }
            ],
            [
                "Toot",
                "http://www.toot.com.ar",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4318, Tel.: 4772- 9938",
                        "Parque Brown Factory, Av. Fernández de la Cruz 4602, Villa Lugano"
                    ],
                    "Pcia. Buenos Aires": [
                        "Quilmes Factory, Av. Calchaquí 3950, Quilmes"
                    ]
                }
            ],
            [
                "Topper",
                "",
                {
                    "Capital Federal": [
                        "Av. Reg. Patricios 1054, Barracas, Tel.: 4124-2419/2488"
                    ],
                    "Pcia. De Buenos Aires": [
                        "Libertador 16101, San Isidro, Tel.: 5788-2202",
                        "Bdo.Irigoyen 2757 (Megasport), Boulogne, Tel.: 4710-1049",
                        "Calchaqui 3899, Quilmes, Tel.: 4878-0282/3"
                    ],
                    "Mar Del Plata": [
                        "Brandsen 3226, Tel.: 0223-4755250"
                    ],
                    "Santa Fe": [
                        "Rosario, Maipú 1050, Tel.: 0341-153296422"
                    ],
                    "La Pampa": [
                        "Av. Spinetto 948, Santa Rosa, Tel.: 02954-432067"
                    ],
                    "San Luis": [
                        "J.A.Roca 260, Tel.: 02652-446428"
                    ]
                }
            ],
            [
                "Tosone",
                "http://www.tosonezapatos.com.ar",
                {
                    "Capital Federal": [
                        "Avellaneda 1683, Tel.: 4632-0449/2166",
                        "Loyola 759, Tel.: 4772-4986, Lunes a sábado de 10 a 19."
                    ]
                }
            ],
            [
                "Traza",
                "http://www.trazaweb.com.ar",
                {
                    "Capital Federal": [
                        "Soldado de la Independencia 935 (y Maure), Tel.: 47718670"
                    ]
                }
            ],
            [
                "Vans",
                "",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4945, Villa Crespo, Tel.: 4776-4677/76, Lunes a sábado de 10 a 20"
                    ],
                    "Pcia. Buenos Aires": [
                        "Red Tag Outlets (Multimarcas) Colectora Panamericana Ramal Pilar, 12 de Octubre 1115, Del Viso, Lunes a domingo de 10 a 20"
                    ]
                }
            ],
            [
                "Via Uno",
                "http://www.viaunoargentina.com",
                {
                    "Capital Federal": [
                        "Aguirre 728, Villa Crespo, Tel.: 4779-2575, lunes a sábado 10 a 20 / domingo y feriados 12 a 20"
                    ]
                }
            ],
            [
                "Viamo",
                "http://www.viamo.com",
                {
                    "Capital Federal": [
                        "Aguirre 794, Villa Crespo, Tel.: 4772-9975"
                    ],
                    "Pcia. Buenos Aires": [
                        "Munro Outlet: Av. Mitre 2148, Munro, Tel.: 4760-2921"
                    ]
                }
            ],
            [
                "Woodland",
                "http://www.calzadoswoodland.com.ar",
                {
                    "Capital Federal": [
                        "Av. Santa Fe 1345, Tel.: 4815-5427, Lunes a viernes de 10 a 20 y sábados de 10 a 14"
                    ],
                    "Pcia. Buenos Aires": [
                        "Vélez Sarsfield 3135, Martínez, Tel.: 4717-6133, Lunes a sábado de 9.30 a 20 - Domingos y Feriados de 14.30 a 20",
                        "Alvear 228, Martínez, Tel.: 4793-1227, Lunes a viernes de 9:30 a 13:30 y de 15:30 a 20. Sábados de 9.30 a 19"
                    ]
                }
            ],
            [
                "Xl Extra Large",
                "http://www.xl.com.ar",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4814, Palermo, Tel.: 4774-3737"
                    ]
                }
            ]
        ],
        "Centros Comerciales": [
            [
                "Easton Outlet Mall - Chile",
                "http://www.eastonoutletmall.cl/",
                {
                    "Santiago De Chile": [
                        "Ruta 5 Norte esq. San Ignacio, Quilicura, Tel.:(562)733-5550/5551, Lunes a jueves 10.30 a 19 //Viernes y sábados hasta las 20"
                    ]
                }
            ],
            [
                "El Portal De Escobar",
                "",
                {
                    "Pcia. Buenos Aires": [
                        "Ruta 9 y ruta 25 Escobar, Tel.: (543488) 436100"
                    ]
                }
            ],
            [
                "Estacion Central",
                "",
                {
                    "Pcia. Buenos Aires": [
                        "Av. Libertador 3080, Olivos, Lunes a sábado de 10.30 a 20.30. Domingo y feriados de 15 a 20.30"
                    ]
                }
            ],
            [
                "Factory Parque Brown",
                "",
                {
                    "Capital Federal": [
                        "Francisco Fernández de la Cruz 4602, Villa Lugano, Tel.: 4605-6431, Lunes a domingo de 10 a 22"
                    ]
                }
            ],
            [
                "Nine Shopping",
                "http://www.nineshopping.com",
                {
                    "Pcia. Buenos Aires": [
                        "Av. Victorica y Acceso Oeste. Moreno, Tel.: (0237)463-7100/09"
                    ]
                }
            ],
            [
                "Palermo District",
                "http://www.palermodistrict.com.ar",
                {
                    "Capital Federal": [
                        "Córdoba y Godoy Cruz, Palermo, Tel.: 4637-3197/ 3198"
                    ]
                }
            ],
            [
                "Parque Comercial Avellaneda",
                "",
                {
                    "Pcia. Buenos Aires": [
                        "Autopista Buenos Aires - La Plata Km. 9, Sarandí, Tel.: 4309-5500"
                    ]
                }
            ],
            [
                "Parque Comercial La Tablada",
                "",
                {
                    "Pcia. Buenos Aires": [
                        "Camino de Cintura y Av. Crovara, La Tablada, La Matanza, Tel.: 4480-4600"
                    ]
                }
            ],
            [
                "Quilmes Factory",
                "",
                {
                    "Pcia. Buenos Aires": [
                        "Av. Calchaquí 3900, Quilmes, Tel.: 4229- 4000"
                    ]
                }
            ],
            [
                "San Martin Factory",
                "",
                {
                    "Pcia. Buenos Aires": [
                        "San Lorenzo e Industria, San Martín, Tel.: 5789 1600"
                    ]
                }
            ],
            [
                "Soleil Factory",
                "",
                {
                    "Pcia. Buenos Aires": [
                        "Bernardo de Irigoyen 2647, Boulogne, Tel.: 47102000"
                    ]
                }
            ],
            [
                "Tren De La Costa",
                "http://www.trendelacosta.com.ar",
                {
                    "Pcia. Buenos Aires": [
                        "Juan Bautista de la Salle 653, San Isidro, Tel.: 4002-6000"
                    ]
                }
            ]
        ],
        "Colchones y Sommiers": [
            [
                "Arco Iris",
                "http://www.colchonesarcoiris.com.ar",
                {
                    "Capital Federal": [
                        "Juncal 1769",
                        "Juramento, 2532, Belgrano",
                        "Cabildo 3426, Belgrano",
                        "Boedo 1015",
                        "Belgrano 2901",
                        "Rivadavia 11099",
                        "Av, Triunvirato 3811",
                        "Darregueyra 2488",
                        "E. de Israel 4684",
                        "Coronel Díaz 1780, Palermo",
                        "Corrientes 3002"
                    ],
                    "Pcia. Buenos Aires": [
                        "Av. Maipú 601, Vte. López",
                        "Av. Maipú 2745, Olivos",
                        "Alvear 100, Martínez",
                        "Av. San Martín 156, Gral. Rodríguez, Lunes a viernes de 10 a 14 y de 15 a 20/ Sábado de 10 a 1 y* Sábados y Domingo todo el día, Atención al cliente de 10 a 20 tel.: 4704-6511"
                    ]
                }
            ],
            [
                "Dormilon Factory",
                "",
                {
                    "Capital Federal": [
                        "Av. Cabildo 4301 (esq. Ruiz Huidobro)"
                    ]
                }
            ],
            [
                "Hadalina",
                "",
                {
                    "Pcia. Buenos Aires": [
                        "Hipólito Irigoyen 1696, Martínez, Tel.: 4836-0634"
                    ]
                }
            ],
            [
                "King Koil",
                "http://www.bedboutique.com.ar",
                {
                    "Capital Federal": [
                        "Jujuy 1656, Tel.: 0810-666-SOMMIER, Lunes a domingos y feriados de 10 a 20"
                    ]
                }
            ],
            [
                "La Cardeuse",
                "",
                {
                    "Capital Federal": [
                        "Av. Libertador 7808, Núñez, Tel.: 4703-2888",
                        "Bartolomé Mitre 1834, Tel.: 4951-3798, Lunes a sábado de 9 a 10. Domingo de 15 a 19. Estacionamiento sin cargo"
                    ]
                }
            ],
            [
                "Morfeo",
                "",
                {
                    "Pcia. Buenos Aires": [
                        "Av. B. Villanueva 1660, Ing. Maschwitz, Tel.: 0348-445212"
                    ]
                }
            ],
            [
                "Simmons",
                "",
                {
                    "Capital Federal": [
                        "Factory Parque Brown: Av. Francisco Fernández de la Cruz 4602, Tel.: 4605-7109/3985"
                    ]
                }
            ],
            [
                "Sleep Factory",
                "",
                {
                    "Capital Federal": [
                        "Av. Cabildo 4300, Belgrano, Estacionamiento clientes en Av. Cabildo 4256"
                    ]
                }
            ],
            [
                "Sommiercenter",
                "http://sommiercenter.com",
                {
                    "Pcia. Buenos Aires": [
                        "Colectora de Panamericana 1938 (Salida Thames) Martínez, Tel.: 4765-4392, Lunes a domingo de 10 a 20 hs."
                    ]
                }
            ]
        ],
        "Computación y Electrónicos": [
            [
                "Compumundo",
                "",
                {
                    "Capital Federal": [
                        "Jumbo Almagro, Guardia Vieja 4558, Lunes a domingo de 10 a 22."
                    ]
                }
            ],
            [
                "Electrolux",
                "http://www.electrolux.com.ar",
                {
                    "Capital Federal": [
                        "Anchorena 669, Lunes a viernes de 9 a 18",
                        "Herrera 2424, Tel.: 4126-6100"
                    ]
                }
            ],
            [
                "Frávega",
                "",
                {
                    "Capital Federal": [
                        "Av. Sáenz 1253, Pompeya, Tel.: 4919-0045 / 0047"
                    ],
                    "Pcia. Buenos Aires": [
                        "Av. Mitre 378, Avellaneda, Tel.: 4229-9825, Lunes a viernes de 9 a 19, Atención al cliente: 0-800-999-3728"
                    ]
                }
            ],
            [
                "Garbarino, “la Barata De”",
                "",
                {
                    "Capital Federal": [
                        "Cardenal Prímoli 7469, entre Colectora Gral.Paz y Av. J. B. Alberdi, Mataderos, Tel.: 4687-6811/2, Lunes a Sábado de 10 a 19. Domingos de 10 a 17 hs"
                    ]
                }
            ],
            [
                "Hp Outlet",
                "http://www.outlethp.com.ar",
                {
                    "Pcia. Buenos Aires": [
                        "Echevarría 2248 (Panamericana altura Villate), Munro, Tel.: 4756-4747, Lunes a viernes de 9 a 18 // Sábados de 9 a 13"
                    ]
                }
            ],
            [
                "Movistar Outlet",
                "",
                {
                    "Cordoba": [
                        "San Martín 224, Lunes a viernes de 9 a 20 y sábado de 9 a 14"
                    ]
                }
            ],
            [
                "Nikon",
                "http://nikon.com.ar/index_outlet.htm",
                {
                    "Capital Federal": [
                        "Ayacucho 1235, Tel.: 4811-1864, Lunes a viernes 9 a 19"
                    ]
                }
            ],
            [
                "Noblex - Philco - Sanyo",
                "http://www.sanai.com.ar",
                {
                    "Capital Federal": [
                        "Av. Mosconi 3632, Tel.: 4505-2140"
                    ]
                }
            ],
            [
                "Palmstore Outlet",
                "http://www.palmstore.com.ar",
                {
                    "Capital Federal": [
                        "Florida 878, Tel.: 4313-8000, Lunes a viernes de 9.30 a 19.30"
                    ]
                }
            ],
            [
                "Pc Discount",
                "",
                {
                    "Capital Federal": [
                        "México 3676, Tel.: 4957-1000"
                    ]
                }
            ],
            [
                "Philco - Sanyo - Noblex",
                "http://www.sanai.com.ar",
                {
                    "Capital Federal": [
                        "Av. Mosconi 3632, Tel.: 4505-2140, Lunes a viernes de 9 a 18"
                    ]
                }
            ],
            [
                "Sony",
                "Info@sonyoutletshop.com.ar",
                {
                    "Capital Federal": [
                        "Av. Cabildo 4223, Tel.: 4701-2033"
                    ]
                }
            ]
        ],
        "Cosmética y Perfumería": [
            [
                "Diffupar",
                "http://www.diffupar.com",
                {
                    "Capital Federal": [
                        "Estomba 580, Tel.: 4552-3065, Todos los viernes de 9 a 18"
                    ]
                }
            ],
            [
                "Revlon Outlet",
                "",
                {
                    "Capital Federal": [
                        "Céspedes 3249, Teléfono de consultas: 0800-77-REVLON (738566)"
                    ]
                }
            ]
        ],
        "Ferias": [
            [
                "Corner Design",
                "",
                {
                    "Pcia. Buenos Aires": [
                        "Bunge y el mar, Pinamar, Enero y febrero, Todos los días moda@mujermilenio.com.ar"
                    ]
                }
            ],
            [
                "Cotolengo Don Orione",
                "",
                {
                    "Capital Federal": [
                        "Cachi 566, Pompeya, Lunes a viernes de 8 a 17 y sábados de 8 a 12",
                        "Pcia. Buenos Aires: Av. Lacaze 3963 (ex Monteverde), Claypole, Lunes a viernes de 8 a 17"
                    ]
                }
            ],
            [
                "DiseÑo Arg",
                "Moda@mujermilenio.com.ar",
                {
                    "Capital Federal": [
                        "Honduras 5033, Palermo Soho, Tel.: 4832-2006/4788-3492, Martes a domingo de 14 a 20"
                    ]
                }
            ],
            [
                "Ejercito De Salvacion",
                "",
                {
                    "Capital Federal": [
                        "Av. Sáenz 580, Pompeya",
                        "Cañada de Gómez 2322, Mataderos, Cap. Fed",
                        "Pje. O'Brien 1260, Constitución, Lunes a viernes de 9 a 12 y de 14 a 18 // Sábado de 9 a 13, Donaciones: 4911-7561/7585 de 8 a 16 hs."
                    ]
                }
            ],
            [
                "Feria De Las Artes",
                "",
                {
                    "": [
                        "azoleta San Francisco, Alsina y Defensa, Monserrat, Tel.: 4343-2123/4331-9855, Viernes de 11 a 17, Organiza: Museo de la Ciudad"
                    ]
                }
            ],
            [
                "Feria De San Telmo",
                "",
                {
                    "Capital Federal": [
                        "Plaza Dorrego. Humberto I y Defensa, San Telmo, Tel.: 4343-2123/4331-9855, Domingos de 10 a 17, Organiza: Museo de la Ciudad"
                    ]
                }
            ],
            [
                "Feria Tazz DiseÑo Independiente",
                "",
                {
                    "Capital Federal": [
                        "Serrano 1556, Palermo Soho, Tel. 4833-5164, Sábado y domingo de 15 a 20"
                    ]
                }
            ],
            [
                "Feria Vanguardia",
                "Fbananas@gmail.com",
                {
                    "Pcia. Buenos Aires": [
                        "Bunge 234, Pinamar, Enero y Febrero. Todos los días"
                    ]
                }
            ],
            [
                "Mercado De Las Pulgas",
                "",
                {
                    "": [
                        "Dorrego y Enrique Martínez, Palermo, Todos los días de 10 a 18"
                    ]
                }
            ],
            [
                "Palermitana",
                "",
                {
                    "Capital Federal": [
                        "Serrano 1557, Palermo Soho, Tel.: 4833 5053, Miércoles a viernes de 15 a 20. Sábados, domingos y feriados de 14 a 21"
                    ]
                }
            ],
            [
                "Paseo Recoleta",
                "",
                {
                    "Capital Federal": [
                        "Av. del Libertador y Av. Alvear, Recoleta, Sábado, domingo y feriados de 11 a hs",
                        "PASEO PALERMO VIEJO – Artesanías y Espectáculos, Plaza de Malabia y Costa Rica, Palermo, Cap. Fed."
                    ]
                }
            ],
            [
                "Patio Del Cabildo",
                "http://www.patiodelcabildo.com.ar",
                {
                    "Capital Federal": [
                        "Av. de Mayo y Bolívar, Jueves y viernes de 11 a 18"
                    ]
                }
            ],
            [
                "Planeta Bs. As.",
                "Moda@mujermilenio.com.ar",
                {
                    "Capital Federal": [
                        "J. L. Borges 1627, Palermo Soho, Tel.: 4832-2006/4788-3492, Martes a domingo de 14 a 20"
                    ]
                }
            ]
        ],
        "Fitness": [
            [
                "Alagua",
                "",
                {
                    "Capital Federal": [
                        "Av. Córdoba 5060, Capital, Tels.: 4773-2011 / 4773-1345, De lunes a sábado de 10 a 19.30"
                    ]
                }
            ],
            [
                "Andreina Disegni Fitness",
                "http://www.andreinadisegni.com.ar",
                {
                    "Pcia. Buenos Aires": [
                        "Av. San Martín 1684, Ramos Mejía, Tel.: 4647-1976"
                    ]
                }
            ],
            [
                "Class Life",
                "http://www.classlife.com.ar",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4724, Palermo, Tel.: 4773-4664",
                        "Aguirre 880, Villa Crespo, Tel.: 4773-0390"
                    ]
                }
            ],
            [
                "Darling",
                "http://www.darlingsport.com.ar",
                {
                    "Pcia. Buenos Aires": [
                        "Soleil Factory: Bernardo de Irigoyen 2647, Boulogne"
                    ]
                }
            ],
            [
                "Gym Clothes",
                "http://www.gym-clothes.com.ar",
                {
                    "Capital Federal": [
                        "Terrada 529, Flores, Tel.: 4612-4959"
                    ]
                }
            ],
            [
                "Karen Oviano",
                "http://www.karenoviano.com",
                {
                    "Pcia. Buenos Aires": [
                        "Panama 2280, Martinez, Tel.: 4717-1847, Lunes a viernes de 9.30 a 17.30"
                    ]
                }
            ],
            [
                "Key Whoss",
                "http://www.keywhoss.com",
                {
                    "Capital Federal": [
                        "Av.Triunvirato 3495 esq. Donado, Tel.: 4552-5289 / 4555-1709",
                        "Juramento 2343, Belgrano"
                    ]
                }
            ],
            [
                "Kilowatt Fitness",
                "http://www.kilowattargentina.com.ar",
                {
                    "Capital Federal": [
                        "Zapiola 1530, Tel. 4552-0045//2123//2511"
                    ]
                }
            ],
            [
                "Ksi",
                "http://www.ksi.com.ar",
                {
                    "Cordoba": [
                        "Sarmiento 323"
                    ]
                }
            ],
            [
                "Need Time",
                "",
                {
                    "Capital Federal": [
                        "Campana 3307, Villa del Parque, Tel.: 4505-0678, lunes a viernes 9 a 14 de 16 a 19 y sábado 10 a 14 - 16 a 19hs"
                    ]
                }
            ],
            [
                "One Step Fitness",
                "http://www.one-step.com.ar",
                {
                    "Pcia. Buenos Aires": [
                        "Av. Mitre 2338, Munro, Tel. 4756-7300",
                        "Av. Maipú 1923, Olivos, Tel.:4796-1254"
                    ]
                }
            ],
            [
                "Pimalú",
                "www.pimalu.com.ar",
                {
                    "Capital Federal": [
                        "Estados Unidos 2748, San Cristobal, Tel.: 4941-3680/4943-2581"
                    ]
                }
            ],
            [
                "Punto 1",
                "http://www.punto1.com.ar",
                {
                    "Capital Federal": [
                        "Cabildo 2510, Belgrano, Tel.:4787-1261, Lunes a sábado de 9.30 a 20.30",
                        "Av. Corrientes 2793, Once, Tel.: 4963-8981"
                    ]
                }
            ],
            [
                "Saffla",
                "http://www.saffla.com",
                {
                    "Capital Federal": [
                        "Manuela Pedraza 2173, Nuñez, Tel: 4702-1889"
                    ]
                }
            ],
            [
                "Speed – Style+tech",
                "",
                {
                    "Pcia. Buenos Aires": [
                        "Outlet Natación Esteban Echeverría 1958, Florida, Tel.: 4760-8072, Lunes a viernes de 9 a 12.30 y Sábados de 9.30 a 13"
                    ]
                }
            ]
        ],
        "Indumentaria Futura Mamá": [
            [
                "Carolina Forn",
                "Carolinaforn@speedy.com.ar",
                {
                    "Capital Federal": [
                        "Cabello 3650 PB “A”, Tel.: 4806-0935, Lunes a viernes de 11 a 20. Sábado de 10.30 a 13.30"
                    ],
                    "Pcia. Buenos Aires": [
                        "Av. Sucre 1683, Lomas de San Isidro, Tel.: 4719-7828, Lunes a viernes de 10 a 20"
                    ]
                }
            ],
            [
                "Figlio Mio",
                "http://www.figliomio.com.ar",
                {
                    "": [
                        "Fragata Sarmiento 882, Tel.: 4433-4941"
                    ]
                }
            ],
            [
                "Hola Ma! Bebés Y Futura Mamá",
                "",
                {
                    "Capital Federal": [
                        "Scalabrini Ortiz 1189, Tel.: 4776-5506, Lunes a sábado de 10 a 20"
                    ]
                }
            ],
            [
                "Maa Maternity",
                "http://www.maamaternity.com.ar",
                {
                    "Capital Federal": [
                        "Av. R. Scalabrini Ortiz 1641, Subsuelo, Tel.: 4833-0031 / 7746"
                    ],
                    "Pcia. Buenos Aires": [
                        "Alvear 467, Martínez, Tel.: 4793-7002"
                    ]
                }
            ],
            [
                "Maminia",
                "http://www.maminia.com",
                {
                    "Pcia. Buenos Aires": [
                        "Marconi 1484, Olivos, Teléfono.: 4794-4095, Lunes a viernes de 10 a 18 - Sábados de 10 a 14"
                    ]
                }
            ],
            [
                "Milika",
                "http://www.milikafuturamama.com.ar",
                {
                    "Capital Federal": [
                        "Av. Salvador M. del Carril 2846, Villa Devoto, Tel: 4571-0677, Lunes a viernes de 9 a 17. Sábados de 10 a 13"
                    ]
                }
            ],
            [
                "Miranda - Lenceria Y Ropa Maternal De Algodón Y Descartable",
                "",
                {
                    "Capital Federal": [
                        "Cortina 1164, Tel.: 4648-2226, Miércoles a sábado de 15 a 21"
                    ]
                }
            ],
            [
                "Venga Madre -embarazadas",
                "http://www.vengamadre.com.ar",
                {
                    "Capital Federal": [
                        "Rosario 125, Caballito, Tel.: 4903-6655"
                    ]
                }
            ],
            [
                "¿qué Será? Mother Style",
                "http://www.mamaquesera.com",
                {
                    "Capital Federal": [
                        "Argerich 487, Tel.: 4613-6664/4637-3298, Lunes a viernes de 9 a 17.30"
                    ]
                }
            ]
        ],
        "Indumentaria Femenina": [
            [
                "12 Onzas",
                "",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4770, Palermo"
                    ]
                }
            ],
            [
                "47 Street",
                "",
                {
                    "Capital Federal": [
                        "Avellaneda 2838 Patricios 802, La Boca",
                        "Cabildo 4441/4447, Nuñez, Capital, Lunes a sábado de 10 a 20 hs",
                        "Aguirre 874, esq. Serrano, Palermo, Lunes a sábado de 10 a 20 y domingos de 13 a 19"
                    ],
                    "Pcia. Buenos Aires": [
                        "Almafuerte 3128, San Justo"
                    ],
                    "Cordoba": [
                        "Av. Goycochea 342, Villa Allende"
                    ],
                    "Mar Del Plata": [
                        "Juan B Justo 1628 Loc. 2"
                    ]
                }
            ],
            [
                "A.y. Not Dead",
                "",
                {
                    "Capital Federal": [
                        "Julián Alvarez y Soler, Palermo, Tel.: 4866-4855, Lunes a viernes de 11 a 20"
                    ]
                }
            ],
            [
                "Abrapampa",
                "http://www.abrapampa.com.ar",
                {
                    "Santa Fe": [
                        "Rosario, Brown 2542, Tel.: 54 341 438-6706"
                    ]
                }
            ],
            [
                "Adriana Costantini",
                "http://www.adriana-costantini.com",
                {
                    "Capital Federal": [
                        "Malabia 1632, Palermo, Tel.: 4832-556, Lunes a sábados de 10 a 20 // Domingos de 13 a 19"
                    ],
                    "Pcia. Buenos Aires": [
                        "Juan Segundo Fernández 99, Lomas de San Isidro, Tel.: 4735-0163"
                    ]
                }
            ],
            [
                "Ag Fashion",
                "",
                {
                    "Capital Federal": [
                        "Paso 581, Tel.: 4963-8548"
                    ]
                }
            ],
            [
                "Ag Store",
                "",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4684, Palermo, Tel.: 4776-3781"
                    ]
                }
            ],
            [
                "Agarrate Catalina",
                "",
                {
                    "Capital Federal": [
                        "Aguirre 606, Villa Crespo, Lunes a sábados de 10 a 20 y domingos 14 a 19"
                    ]
                }
            ],
            [
                "Akiabara",
                "http://www.akiabara.com",
                {
                    "Capital Federal": [
                        "Gurruchaga 772, Villa Crespo, Tel.: 4535 2005"
                    ],
                    "Pcia. Buenos Aires": [
                        "Soleil Factory: Bernardo de Irigoyen 2647, Local 326/327, Boulogne, Tel.: 4710-1300"
                    ]
                }
            ],
            [
                "Allo Martinez",
                "http://www.allomartinez.com",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4357, Palermo, Tel.: 4775-8743"
                    ]
                }
            ],
            [
                "Amores Vintage",
                "",
                {
                    "Capital Federal": [
                        "Angel Carranza 1979, Palermo, Tel.: 4775-3601, Lunes a viernes de 12 a 20 // Sábado de 13 a 18"
                    ]
                }
            ],
            [
                "Aridza",
                "Www.aridza.com",
                {
                    "Capital Federal": [
                        "Soler 4201, Palermo Soho, Tel.: 4864-4728, Lunes a viernes de 11 a 20 y sábados hasta las 19"
                    ]
                }
            ],
            [
                "Asterisco",
                "http://www.arterisconet.com.ar",
                {
                    "Capital Federal": [
                        "Av. Donato Alvarez 787, Tel.: 4633-5238, Lunes a viernes de 9 a 18.30. Sábado de 9.30 a 13"
                    ]
                }
            ],
            [
                "Awada",
                "",
                {
                    "Capital Federal": [
                        "Gurruchaga 720,Villa Crespo, Tel.: 4775-9459, Lunes a sábado 10 a 20 y domingo 14 a 19",
                        "Armenia 1578, Outlet piso 1º, Palermo, Tel.: 4831-2400, Lunes a sábado 10 a 20 / domingos 14.30 a 19.30"
                    ],
                    "Pcia. Buenos Aires": [
                        "Juan Segundo Fernández 123, sector outlet, San Isidro, Tel.: 4723-3535, Lunes a viernes 10 a 20 / sábado 10 a 14.30",
                        "Paseo del Pilar, Loc.33 (Sector discontinuos), Panamericana Km. 44, Pilar, Tel.:02320-475101, Todos los días 10 a 21",
                        "Paseo Champagnat, Pilar, Tel.: 02322-374442, domingos a jueves 10 a 21 / vi y sáb 10 a 22"
                    ]
                }
            ],
            [
                "Ayres",
                "",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4301, Palermo, Tel.: 4773-4940, Lunes a sábado de 10 a 20"
                    ]
                }
            ],
            [
                "Barocco VicuÑol",
                "http://www.baroccovicunol.com.ar",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4820, Palermo, Tel.: 4779-1236",
                        "Av. Corrientes 2322, Lunes a sábado de 10 a 20"
                    ],
                    "Mar Del Plata": [
                        "San Martín 2276"
                    ],
                    "Necochea": [
                        "Calle 83 esquina 4 Bis"
                    ]
                }
            ],
            [
                "Barra Mansa",
                "",
                {
                    "Capital Federal": [
                        "Gorostiaga 1893, Belgrano, Tel.: 4777-7274"
                    ],
                    "Pcia. Buenos Aires": [
                        "Ugarte 1677, Olivos"
                    ]
                }
            ],
            [
                "Belvedere",
                "http://www.belvedere.com.ar",
                {
                    "Capital Federal": [
                        "Loyola 709, Villa Crespo, Capital, Tel.: 4774-5606, Lunes a sábado de 10 a 20 y domingo de 14 a 19"
                    ],
                    "Pcia. Buenos Aires": [
                        "Av. República 490, Ramos Mejía, Tel.: 4658-6852, Lunes a viernes de 9 a 19 // Sábados de 9 a 18"
                    ]
                }
            ],
            [
                "Bowen",
                "Info@bowenlondon.com.ar",
                {
                    "Capital Federal": [
                        "Gurruchaga 729, Villa Crespo, Tel.: 4775-0017, Lunes a sábado 10 a 20 // domingos 13 a 19",
                        "Av. de los Incas 4196, Tel.: 4554-7589, Lunes a sábado de 10 a 20"
                    ],
                    "Pcia. Buenos Aires": [
                        "Soleil Factory: Bernardo de Irigoyen 2647, Boulogne, Tel.:4007-2422",
                        "Av. Libertador 1948, Olivos",
                        "H. Yrigoyen 2630, Martínez, Tel.: 4836-3331, Lunes a Viernes 9 a 18 - sábados 10 a 14"
                    ]
                }
            ],
            [
                "Brand Point",
                "",
                {
                    "Capital Federal": [
                        "Gurruchaga 836, Villa Crespo, Tel.: 5776-5776",
                        "Iriarte 1901, Barracas, Tel.: 4301-5290, Lunes a sábado 10 a 20 //domingo 11 a 19"
                    ],
                    "Pcia. Buenos Aires": [
                        "Ruta Panamericana Ramal Escobar Km. 34,5 (Ruta 9) - Colectora Oeste esq. Piedrabuena, Grand Bourg, Tel.: (03327) 446677/99, Lunes a domingo de 10 a 20"
                    ]
                }
            ],
            [
                "Brandcenter",
                "",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4453, Palermo, Tel.: 4511-4345, Lunes a sábado 10 a 20"
                    ]
                }
            ],
            [
                "Cacharel",
                "",
                {
                    "Capital Federal": [
                        "Aguirre 865, Villa Crespo, Tel.: 4772-8719, Lunes a viernes 10 a 20 / Sábado 10 a 19 Domingo 12 a 19"
                    ]
                }
            ],
            [
                "Calandra",
                "",
                {
                    "Capital Federal": [
                        "Gurruchaga 990, Palermo, Tel.: 4775-1770, Lunes a sábado de 11 a 20. Domingos de 11 a 19"
                    ]
                }
            ],
            [
                "Cardón",
                "http://www.cardon.com.ar",
                {
                    "Capital Federal": [
                        "Cabildo 4115, Nuñez, Tel.: 4701-7227/6776",
                        "Loyola 752, Villa Crespo, Tel.: 4774-1009",
                        "Honduras 4755, Palermo, Tel.: 4832-5925",
                        "Herrera 1855, Barracas, Tel.: 6091- 8355 / 8356"
                    ],
                    "Pcia. Buenos Aires": [
                        "Fondo de la Legua 425 Loc. 1 y 2, Lomas de San Isidro, Tel.: 4708-0110",
                        "Panamericana Ramal Escobar, Km. 34,5 (Ruta 9) Roberto Fulton 2275, Grand Bourg, Tel.: (03327) 44-4453, Lunes a domingo de 10 a 20"
                    ],
                    "Mar Del Plata": [
                        "Juan B. Justo 1593/95, Tel.: (0223) 480-7172"
                    ]
                }
            ],
            [
                "Chatelet",
                "http://www.chatelet.com.ar",
                {
                    "Capital Federal": [
                        "Av. Rivadavia 6499, Flores, Tel.: 4631-4063",
                        "Factory Parque Brown: Av. F. Fernández de la Cruz 4602 local 1178, Tel.: 4605-6978"
                    ]
                }
            ],
            [
                "Chocolate",
                "http://www.chocolateargentina.com.ar",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4856, Palermo, Lunes a sábado de 10 a 20",
                        "Av. Dorrego 864, Palermo, Tel.: 4856-9200, Lunes a viernes de 10 a 19. Sábado de 10 a 13"
                    ]
                }
            ],
            [
                "Christian Lacroix",
                "",
                {
                    "Capital Federal": [
                        "J. F. Seguí 4662, Tel: 4777-3509 / 4772-3534, Estacionamiento propio Gurruchaga 787, Tel: 4778-7135"
                    ]
                }
            ],
            [
                "City",
                "http://www.cityargentina.com",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4101, Palermo, Tel.: 4867-0261",
                        "Scalabrini Ortiz 37, Villa Crespo, Lunes a sábado 10 a 20 hs"
                    ]
                }
            ],
            [
                "Clandestine",
                "",
                {
                    "Pcia. Buenos Aires": [
                        "Av. Maipú 36, Vicente Lopez"
                    ]
                }
            ],
            [
                "Clara Ibarguren",
                "",
                {
                    "Capital Federal": [
                        "Scalabrini Ortiz 817, Palermo, Tel.: 4777-6187",
                        "Aguirre 967, Villa Crespo, Tel.: 4778-9443"
                    ],
                    "Pcia. Buenos Aires": [
                        "J. S. Fernandez 246, San Isidro, Tel: 4765-8749"
                    ]
                }
            ],
            [
                "Claudia Larreta",
                "http://www.claudialarreta.com.ar/",
                {
                    "Capital Federal": [
                        "Moreno 1264, Monserrat, Tel.: 4384-0009, Lunes a viernes de 10 a 18 hs",
                        "Vuelta de Obligado 3802, Belgrano, Tel.: 4703-5435, Lunes a sábados de 10 a 20 hs"
                    ]
                }
            ],
            [
                "Coco Rayado",
                "http://www.cocorayado.com.ar",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4342, Palermo, Tel.: 4139-5253, Lunes a sábado de 10 a 20"
                    ]
                }
            ],
            [
                "Como Quieres Que Te Quiera",
                "http://www.comoquieres.com.ar",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4779, Tel.: 4778-3553"
                    ]
                }
            ],
            [
                "Complot",
                "http://www.complot.com.ar",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4680, Palermo, Tel.: 4779-0575",
                        "Belgrano 139, Morón, Tel.: 4629-4416"
                    ]
                }
            ],
            [
                "Cook",
                "http://www.johnlcook.com.ar",
                {
                    "Capital Federal": [
                        "California 1942, Barracas"
                    ],
                    "Pcia. Buenos Aires": [
                        "H. Irigoyen 180, Martínez",
                        "Santamarina 1152, Victoria",
                        "Saavedra 15, Pacheco",
                        "Calle de los Eucaliptos entre Dársenas 1 y 3, Puerto de Frutos, Tigre",
                        "Mitre 2492, Munro",
                        "Av. Libertador 3040, Estación Central, Olivos"
                    ],
                    "Cordoba": [
                        "Derqui 105, Villa Allende"
                    ]
                }
            ],
            [
                "Cora Groppo",
                "",
                {
                    "Capital Federal": [
                        "Uruguay 1296, 1º piso, Recoleta, Tel.: 4815-8516, Lunes a viernes 10 a 20 y sábado hasta las 15"
                    ]
                }
            ],
            [
                "Cuesta Blanca",
                "http://www.cuestablanca.com.ar",
                {
                    "Capital Federal": [
                        "Factory Parque Brown: Av. Francisco Fernández de la Cruz 4602, Tel.: 4604-0153"
                    ],
                    "Pcia. Buenos Aires": [
                        "Jumbo Quilmes: Av. Calchaquí 2285, Quilmes, Tel.: 4250-2721",
                        "Lunes a domingo de 10 a 22"
                    ]
                }
            ],
            [
                "Cultura",
                "",
                {
                    "Capital Federal": [
                        "Factory Parque Brown: Av. Francisco Fernández de la Cruz 4602 Local 1148, Tel.: 4605-8380"
                    ],
                    "Pcia. Buenos Aires": [
                        "Lomas Center Factory: Av. Antártida Argentina 799, Local 1137, Lomas de Zamora, Tel.: 4231-5791",
                        "Factory Quilmes: Av.Calchaquí 2950 Local 1058, Quilmes, Tel.: 4280-1788",
                        "Hipólito Yrigoyen 8413, Lomas de Zamora, Tel.: 4392-2097",
                        "Hipólito Yrigoyen 7298, Banfield, Tel.: 4242-9749"
                    ]
                }
            ],
            [
                "Daniel Cassin Factory",
                "",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4538, Palermo, Tel.: 4773-4380"
                    ]
                }
            ],
            [
                "Daniel Hechter",
                "http://www.danielhechter.com.ar",
                {
                    "Capital Federal": [
                        "Av. Leandro N. Alem 679, Tel. 4893-2423, Lunes a viernes de 9 a 20 - Sabados de 10 a 17 hs",
                        "Aguirre 700, Villa Crespo, Tel.: 4775-1350, Lunes a sábado 10 a 19.30 - Domingos de 14 a 19"
                    ]
                }
            ],
            [
                "Desiderata",
                "",
                {
                    "Capital Federal": [
                        "Gurruchaga y Aguirre, Palermo, Tel.: 5197-5325, Lunes a sábado de 10 a 20. Domingos de 13 a 19",
                        "Av. Córdoba 4453 (Brandcenter), Palermo, Lunes a sábado 10 a 20"
                    ]
                }
            ],
            [
                "Draft Outlets",
                "",
                {
                    "Capital Federal": [
                        "Herrera 1747, Barracas"
                    ],
                    "Pcia. Buenos Aires": [
                        "Av. 12 de Octubre 1115, Del Viso"
                    ]
                }
            ],
            [
                "Duvet Anchaño",
                "http://www.duvetanchanio.com.ar",
                {
                    "Capital Federal": [
                        "Ravignani 1209, Tel. 4772-2102, Lunes a viernes de 9 a 18. Sábado de 9 a 18"
                    ]
                }
            ],
            [
                "Edel Erra",
                "",
                {
                    "Capital Federal": [
                        "Nicaragua 5984, Palermo, Lunes a viernes de 9 a 18. Sábado de 9 a 13"
                    ]
                }
            ],
            [
                "Estación Central",
                "http://www.estacion-central.com.ar",
                {
                    "Pcia. Buenos Aires": [
                        "Av. Libertador 3040, Olivos, Tel.:4794-5557, Todos los días de 10 a 20"
                    ]
                }
            ],
            [
                "Estancias Chiripá",
                "http://www.estanciaschiripa.com.ar",
                {
                    "Pcia. Buenos Aires": [
                        "Piñeiro 930, Bellavista, Tel.: 4668-2666/4666-8113",
                        "Bco. Encalada 113, San Isidro, Tel.: 4700-8310, Lunes a sábado de 9.15 a 20"
                    ]
                }
            ],
            [
                "Etiqueta Negra",
                "Canitas@etiquetanegra.us",
                {
                    "Capital Federal": [
                        "Andrés Arguibel 2835, Las Cañitas",
                        "Gurruchaga 770, Tel.: 4772-7146"
                    ]
                }
            ],
            [
                "Eufemia Outlet",
                "",
                {
                    "Capital Federal": [
                        "Andrés Arguibel 2890, Las Cañitas, Tel:4777-4540"
                    ]
                }
            ],
            [
                "Eva Miller",
                "http://www.evamiller.com",
                {
                    "Medoza": [
                        "San Martín 599, Godoy Cruz"
                    ]
                }
            ],
            [
                "Ex-hi-ba",
                "",
                {
                    "Capital Federa": [
                        "Córdoba 4375, Palermo, Tel.: 4777-4234"
                    ]
                }
            ],
            [
                "Express",
                "",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4644, Palermo, Capital, Tel.: 4771-5585, Lunes a sábados 10 a 20",
                        "Gurruchaga 827, Villa Crespo, Tel. 4771-5585/4771-0315, Lunes a sábado 10 a 20 // domingo 12 a 19"
                    ]
                }
            ],
            [
                "Gan",
                "",
                {
                    "Capital Federal": [
                        "Cabildo 2350, Galeria Marga, Belgrano"
                    ]
                }
            ],
            [
                "Garçon García Vintage",
                "",
                {
                    "Capital Federal": [
                        "Arguibel 2898, Las Cañitas, Tel.: 4772-4883, Lunes a sabado 11 a 21 // Domingo 13 a 21"
                    ],
                    "Pcia. Buenos Aires": [
                        "Av. del Libertador 14.424, Martínez, Tel.: 4792-4672"
                    ]
                }
            ],
            [
                "Gas Oil Jeans",
                "http://www.gasoiljeans.com.ar",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4425, Tel.: 4775-9400, Lunes a sábado 11 a 20 hs"
                    ]
                }
            ],
            [
                "Giesso",
                "",
                {
                    "Capital Federal": [
                        "México 735, Piso 2, San Telmo, Tel.:4343.4900 int 35, Lunes a viernes de 9 a 18"
                    ]
                }
            ],
            [
                "Graciela Naum",
                "http://www.graciela-naum.com",
                {
                    "Capital Federal": [
                        "Armenia 1565, Palermo"
                    ]
                }
            ],
            [
                "Inside",
                "",
                {
                    "Pcia Buenos Aires": [
                        "Av. Mitre 2199, Munro, Tel.: 4756-4032"
                    ]
                }
            ],
            [
                "Inversa",
                "",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4338, Palermo, Tel.:4776-3752, Lunes a sábado 10 a 20"
                    ]
                }
            ],
            [
                "Jade",
                "http://www.jadetalles.com",
                {
                    "Pcia. Buenos Aires": [
                        "Alsina 440, Quilmes, Tel.:4254-7119"
                    ]
                }
            ],
            [
                "JazmÌn Chebar",
                "",
                {
                    "Capital Federal": [
                        "Elcano 3779 (y Charlone), Tel.: 4553-4528, Lunes a sábado de 10 a 20"
                    ]
                }
            ],
            [
                "Juan Perez",
                "",
                {
                    "Capital Federal": [
                        "M. T. de Alvear 1441, Barrio Norte, Tel.:48158442, Lunes a sábado de 11 a 19",
                        "M. T. de Alvear 1355, Barrio Norte, Tel.: 15 59761181, Lunes a sábado de 12 a 19"
                    ]
                }
            ],
            [
                "Julien",
                "http://www.julien.com.ar",
                {
                    "Pcia. Buenos Aires": [
                        "Soleil Factory: B. de Irigoyen 2647, Loc 534, Boulogne, Tel.: 4007-2536",
                        "Av. Córdoba 4700, Palermo, Tel.: 4508-5430",
                        "Senador Morón 1153, Bella Vista, Tel.: 4666-2910"
                    ]
                }
            ],
            [
                "Kaslík Premium Outlet",
                "",
                {
                    "Pcia. Buenos Aires": [
                        "Av. 12 de Octubre 1220 (Colectora Panamericana y Ruta 26), Del Viso, Tel.: (02320) 658158",
                        "Estanislao Lopez (ex Ruta 8) e Ituzaingo - locales 101 y 102, Pilar, Tel: 02322-664652"
                    ]
                }
            ],
            [
                "Khloe",
                "",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4451, Palermo"
                    ]
                }
            ],
            [
                "Kill",
                "Info@kill.com.ar",
                {
                    "Capital Federal": [
                        "Lavalle 576, Tel.: 4328-6419"
                    ],
                    "Pcia. Buenos Aires": [
                        "Soleil Factory: B. de Irigoyen 2647, Local 228, Boulogne",
                        "Estación San Isidro Tren de la Costa: Juan Bautista de La Salle 653, Local 37"
                    ]
                }
            ],
            [
                "Knightsbridge",
                "",
                {
                    "Capital Federal": [
                        "Gurruchaga 934, Villa Crespo, Tel.: 4779-9661",
                        "Pueyrredón 2335, Barrio Norte, Tel.: 4807-5822"
                    ]
                }
            ],
            [
                "Kosiuko",
                "http://www.kosiuko.com.ar",
                {
                    "Capital Federal": [
                        "Factory Parque Brown: Av. Francisco Fernández de la Cruz 460, Lugano, Tel.: 4604-31682",
                        "Av. Córdoba 4299, Palermo",
                        "Velasco 890, Villa Crespo, Tel.: 4866-3805"
                    ],
                    "Pcia Buenos Aires": [
                        "Factory Quilmes: Av. Calchaquí 3950, Quilmes, Tel.:4250-9221",
                        "San Martín Factory: San Lorenzo e Industria, San Martín, Tel.: 4764-6415",
                        "Soleil Factory: B. de Irigoyen 2647, Boulogne, Tel.: 4007-2428",
                        "Av. Mitre 2144, Munro"
                    ],
                    "Mar Del Plata": [
                        "Av. Juan B. Justo 582, Tel.:(0223) 4806455"
                    ]
                }
            ],
            [
                "Koxis",
                "http://www.koxis.com",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4788, Palermo, Tel.: 4776-6330"
                    ],
                    "Pcia. Buenos Aires": [
                        "Manuel Belgrano 178, Morón"
                    ]
                }
            ],
            [
                "L' Equipe",
                "",
                {
                    "Capital Federal": [
                        "Bulnes 2172, PB A, Tel. 4823-7068"
                    ]
                }
            ],
            [
                "La Dolfina",
                "",
                {
                    "Capital Federal": [
                        "Andrés Arguibel 2874, Las Cañitas, Tel.: 4772-5144",
                        "Malabia 1690, Palermo Viejo, Tel.: 4831-0301"
                    ],
                    "Pcia. Buenos Aire": [
                        "Avenida de Mayo 410, Ramos Mejia, Tel.: 4464-6295"
                    ]
                }
            ],
            [
                "La Martina",
                "http://www.lamartina.com",
                {
                    "Capital Federal": [
                        "Aguirre 957, Tel.: 4775-5988",
                        "Dardo Rocha 2340, San Isidro, Tel.: 4836-1232"
                    ]
                }
            ],
            [
                "La Ventana",
                "",
                {
                    "Capital Federal": [
                        "Echeverria 5051, Villa Urquiza, Tel.: 4523-7090, Lunes a viernes de 8 a 18"
                    ]
                }
            ],
            [
                "Lacoste",
                "",
                {
                    "Capital Federal": [
                        "Aguirre 875/77, Tel.: 4777-1010/5776-5776, Lunes a domingo de 10 a 19.30",
                        "Gurruchaga 836, Villa Crespo, Tel.: 5776-5776, Lunes a sábado de 10 a 20 // Domingos de 10 a 19",
                        "Iriarte 1901, Barracas, Tel.: 4301-5290"
                    ]
                }
            ],
            [
                "Las Pepas",
                "Htttp://www.laspepas.com.ar",
                {
                    "Pcia. Buenos Aires": [
                        "Primera Junta 805, San Isidro, Tel.: 4747-5458",
                        "Sarmiento 1166, San Fernando, Tel.: 4745-8213, Lunes a Sábado 9.30 a 13 y 16 a 20"
                    ]
                }
            ],
            [
                "Lazaro",
                "",
                {
                    "Capital Federal": [
                        "Nicasio Oroño 1563, Tel: 4582-4719/9226, Estacionamiento sin cargo Nicasio Oroño 1638, Lunes a viernes 9 a 18 / Sábado 9 a 14"
                    ]
                }
            ],
            [
                "Le Bon Marche",
                "",
                {
                    "Capital Federal": [
                        "Gurruchaga 934, Villa Crespo, Tel 4779-9661, Lunes a sábado 10 a 20 / domingo 14 a 19"
                    ]
                }
            ],
            [
                "Lee",
                "",
                {
                    "Capital Federal": [
                        "Parque Brown Factory: Av. Francisco Fernández de la Cruz 4602, Tel.: 4630-4200"
                    ],
                    "Pcia. Buenos Aires": [
                        "Lomas Center Factory: Antártida Argentina 799, Lomas de Zamora",
                        "Soleil Factory: Bernardo de Irigoyen 2647, Boulogne"
                    ]
                }
            ],
            [
                "Legacy",
                "http://www.legacy.com.ar",
                {
                    "Capital Federal": [
                        "Córdoba 4671, Tel.: 4778-9188M",
                        "Córdoba 4966 Factory Parque Brown: Francisco Fernández de la Cruz 4602, Local 1061",
                        "Herrera 1825, Barracas, Tel.: 4301-3258, Lunes a viernes de 10 a 20 Sábados y domingos de 12 a 20"
                    ],
                    "Pcia. Buenos Aires": [
                        "Ruta Panamericana Ramal Escobar y Estados Unidos, Garín",
                        "Soleil Factory, Bernardo de Irigoyen 2647, Boulogne",
                        "Av. Centenario 2187, Beccar",
                        "Av. Mitre 3891, Munro",
                        "Ruta 202, 408. Don Torcuato",
                        "Shopping Escobar, Ruta 25 y Panamericana, Ramal Escobar, local 1738"
                    ]
                }
            ],
            [
                "Leticia Carossella",
                "http://www.leticiacarossella.com.ar",
                {
                    "Pcia. De Buenos Aires": [
                        "Obispo Terrero 3066, Lomas de San Isidro, Tel.: 4766-0443"
                    ]
                }
            ],
            [
                "Levi´s",
                "http://www.levi.com.ar",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4630, Palermo, Tel: 4776-4229",
                        "California 1902, esq. Herrera, Barracas (Colectora Autopista 9 de Julio), Tel.: 4301-2717/5213 Lunes a sábado de 10 a 20 y domingos de 11 a 19 hs"
                    ],
                    "Pcia. Buenos Aires": [
                        "Av. Mitre 2183, Munro, Vte. López, Tel: 4756-3873, Lunes a sábado de 10.30 a 20",
                        "Panamericana Ramal Escobar (Ruta 9) Km 34,5 (Bajada Henry Ford) o Fulton 2290, Grand Bourg, Tel: (03327) 449965/ 45, Todos los días de 10 a 20",
                        "Presidente Perón 7634, Acceso Oeste (Peaje Martín Fierro) Ituzaingó, Tel.: 4481-6151/4981, Lunes a domingo de 10 a 20",
                        "Colectora Gral. Paz (alt. 2700) y Av. América, Sáenz Peña, Tel.: 4712-1543/4933, Lunes a sábado de 10 a 20 // Domingos de 12 a 20"
                    ]
                }
            ],
            [
                "Libralatina",
                "",
                {
                    "Capital Federal": [
                        "Forest 399, Chacarita, tel.: 4551-6242"
                    ],
                    "Miramar": [
                        "Calle 21 1050, outlet trajes de baño, tel.: 02291 432816"
                    ]
                }
            ],
            [
                "Loden Haus",
                "http://www.lodenhaus.com.ar",
                {
                    "Capital Federal": [
                        "Vicente López 1661, Local 17, Tel.: 4815-6001, Lunes a viernes de 10 a 19.30"
                    ]
                }
            ],
            [
                "Loren",
                "Info@lorentallesgrandes.com",
                {
                    "Capital Federal": [
                        "Av. Santa Fe 2845"
                    ]
                }
            ],
            [
                "Lucuma",
                "",
                {
                    "Capital Federal": [
                        "Migueletes 1904, Belgrano, Tel.: 4788-8862, Lunes a viernes 9.30 a 20 y sábados de 10 a 20"
                    ]
                }
            ],
            [
                "Lugar Bue",
                "",
                {
                    "Capital Federal": [
                        "Loyola 669, Villa Crespo, Tel.: 4773-3695, Lunes a sábado de 10.30 a 20 // Domingo de 14 a 19"
                    ]
                }
            ],
            [
                "Mab",
                "http://www.modamab.com.ar",
                {
                    "Capital Federal": [
                        "Lavalleja 1195, Tel.: 4864-6058"
                    ]
                }
            ],
            [
                "Mamy Blue",
                "http://www.mamyblue.com.ar",
                {
                    "Capital Federal": [
                        "Córdoba 4968, Palermo, Tel.: 4773-1614, Lunes a sábado de 10 a 20, Gurruchaga 717, Villa Crespo, Tel.: 4772-1144"
                    ]
                }
            ],
            [
                "Mancini",
                "http://www.mancini.com.ar",
                {
                    "": [
                        "Honduras 5140, Palermo, Tel.: 4832-7570"
                    ]
                }
            ],
            [
                "Maria Cher",
                "",
                {
                    "Pcia. Buenos Aires": [
                        "Av. Diego Carman 417, San Isidro, Tel.: 4765-8667, Lunes a sábado de 10 a 20"
                    ]
                }
            ],
            [
                "María Vazquez",
                "Mariavazquez@arnet.com.ar",
                {
                    "Pcia. Buenos Aires": [
                        "Av. Rivadavia 14056 Loc 9, Ramos Mejía"
                    ]
                }
            ],
            [
                "Mariana Marquez",
                "http://www.marianamarquez.com",
                {
                    "Pcia. Buenos Aires": [
                        "Estación Central: Av. Libertador 3080, Olivos"
                    ]
                }
            ],
            [
                "Markova",
                "http://www.markova.com",
                {
                    "Capital Federal": [
                        "Gurruchaga 947, Villa Crespo, Lunes a sábado de 10 a 20 y domingos de 12 a 19"
                    ]
                }
            ],
            [
                "Materia",
                "http://www.materia.com.ar",
                {
                    "Capital Federal": [
                        "Av. Corrientes 2600",
                        "Gurruchaga 945, Villa Crespo, Tel.: 4772-0351, Lunes a sábado 10 a 20 y domingo 13 a 19"
                    ]
                }
            ],
            [
                "Muaa",
                "http://www@muaa.com.ar",
                {
                    "Capital Federal": [
                        "Aguirre 874, Tel.: 4776-5700",
                        "Cabildo 410, Tel.: 4701-4541",
                        "Av. Cabildo 4101, Belgrano",
                        "Reg. Patricios 771, La Boca",
                        "Parque Brown Factory: Av. de la Cruz 4602 Local 1025, Villa Lugano"
                    ],
                    "Pcia. Buenos Aires": [
                        "Soleil Factory: Bernardo de Irigoyen 2647, Boulogne",
                        "Almirante Brown 827, Morón"
                    ],
                    "Mar Del Plata": [
                        "Juan B. Justo 1295"
                    ],
                    "Mendoza": [
                        "San Martín 1355, Galería Kolton loc. 35, Tel.: 0261-423-3319"
                    ]
                }
            ],
            [
                "Nasa Jeans",
                "http://www.nasa.com.ar",
                {
                    "Santa Fe": [
                        "Rosario, Santa Fe 2965",
                        "Santa Fe: San Lorenzo, San Martín 715"
                    ],
                    "Cordoba": [
                        "Rivadavia 66"
                    ]
                }
            ],
            [
                "Natalia Antolin",
                "http://www.nantolin.com",
                {
                    "Capital Federal": [
                        "Crámer 3517, Belgrano, Tel.: 4702-1927",
                        "Cabildo 2350 Local 14/16, Belgrano, Tel.: 4786-0634"
                    ]
                }
            ],
            [
                "NiÑo Bien",
                "http://www.ninobien.com.ar",
                {
                    "Capital Federal": [
                        "Belgrano 302, San Telmo, Tel.:4342-5599 / 4342-0022 / 4342-2315, Lunes a sábado 10 a 20//Domingo 12 a 20"
                    ],
                    "Cordoba": [
                        "Patio Olmos - Local 212 / 213, Tel. 0351-5704212"
                    ]
                }
            ],
            [
                "Olga Naum",
                "http://www.olganaum.com",
                {
                    "Capital Federal": [
                        "Quintana 284, Recoleta",
                        "Maure 1569, Belgrano"
                    ]
                }
            ],
            [
                "Oliva",
                "",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4696, Palermo, Tel.: 4775-2460"
                    ]
                }
            ],
            [
                "Olive",
                "http://www.olivecoleccion.com.ar",
                {
                    "Capital Federal": [
                        "Av. Scalabrini Ortiz 632, Palermo, Tel: 4856-5581, Lunes a sábado de 10 a 18"
                    ]
                }
            ],
            [
                "Ona Saez",
                "http://www.onasaez.com",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4372, Palermo, Tel.: 4773-6997",
                        "Aguirre 640, Villa Crespo, Tel.: 4772-3196 / 4773-4058",
                        "Factory Parque Brown, (Loc. 1068) Villa Lugano, Tel.: 4605-7001"
                    ],
                    "Mar Del Plata": [
                        "Av. J. B. Justo 598, Tel.: 0223-489-9571"
                    ]
                }
            ],
            [
                "Orb",
                "http://www.orbweb.com.ar",
                {
                    "Capital Federal": [
                        "Malabia 1628, Tel.: 4823-1387"
                    ]
                }
            ],
            [
                "Orix Argentina",
                "",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4620, Tel.: 4772-5485",
                        "Orix Corrientes 3098, Tel.:4867-6948"
                    ],
                    "Pcia. Buenos Aires": [
                        "Av. H. Yrigoyen 410, Lanus, Tel.: 4240-7506, Lunes a sábado de 9 a 20hs"
                    ]
                }
            ],
            [
                "Ossira",
                "",
                {
                    "Capital Federal": [
                        "Parque Brown Factory, Villa Lugano, Tel.: 4605-3726",
                        "Av. Córdoba 4358, Palermo, Tel.: 4772-7487, Lunes a sábado 10 a 20",
                        "Gurruchaga 937, Villa Crespo, Tel.: 4777-6564, Lunes a sábado 10 a 20 // Domingo 14 a 19",
                        "Av. Cabildo 3884, Saavedra, Tel. 4703-4366, Lunes a sábado 10 a 20"
                    ],
                    "Prov. Buenos Aires": [
                        "Saavedra 607, Pacheco, Tel.: 4740-0670, Lunes a sábado de 9 a 13.30 y 16 a 20.30",
                        "Av. Lagomarsino 905, Loc. 21, Tel.: 02322 420139, Pilar",
                        "Dr. Luis Güemes 369, Loc. 18, Tel.: 4443-0726, Haedo"
                    ],
                    "Pergamino": [
                        "Moreno 602, Tel.: 02477 444985"
                    ],
                    "Tandil": [
                        "Panamá 351, Loc. 1,2 y 3, Tel.: 02293 438236"
                    ],
                    "Cordoba": [
                        "Estrada 18, Tel.:0351 463-0137"
                    ],
                    "Rosario": [
                        "Corrientes 216, Tel.: 0341 440-0672"
                    ]
                }
            ],
            [
                "Paula Cahen D´anvers",
                "http://www.paulacahendanvers.com.ar",
                {
                    "Capital Federal": [
                        "Aguirre 875, Villa Cerspo, Tel.: 5197-5556, Lunes a viernes de 10.30 a 19.30, sábados de 10 a 20 y domingos de 12 a 19"
                    ],
                    "Pcia. De Buenos Aires": [
                        "Av. Libertador 3012, Olivos, Tel.: 4790-2475",
                        "BrandPoint: Ruta Panamericana Ramal Escobar Km. 34,5 (Ruta 9) - Colectora Oeste esq. Piedrabuena, Grand Bourg, Tel.: (03327) 446677/99"
                    ]
                }
            ],
            [
                "PengÜin",
                "",
                {
                    "Capital Federal": [
                        "Gurruchaga 836, Villa Crespo, Tel.: 5776-5776",
                        "Iriarte 1901, Barracas, Tel.: 4301-5290"
                    ],
                    "Pcia. Buenos Aires": [
                        "Ruta Panamericana Ramal Escobar Km. 34,5 (Ruta 9) - Colectora Oeste esq. Piedrabuena, Grand Bourg, Tel: (03327) 446677/99"
                    ]
                }
            ],
            [
                "Perramus",
                "http://www.perramus.com.ar",
                {
                    "Capital Federal": [
                        "Mexico 1323, Montserrat, Tel.: 4383-8166",
                        "Aguirre 888, Villa Crespo, Tel: 4772-0398"
                    ]
                }
            ],
            [
                "Peuque",
                "http://www.peuquejeans.com.ar",
                {
                    "": [
                        "Gurruchaga 942, Villa Crespo, Capital Federal, Tel.: 4772-4983, Lunes a sábado 10 a 20 y domingos 14 a 19 hs."
                    ]
                }
            ],
            [
                "Phillgreen",
                "",
                {
                    "Capital Federal": [
                        "Aguirre 910, Villa Crespo"
                    ]
                }
            ],
            [
                "Polo Ralph Lauren",
                "",
                {
                    "Capital. Federal": [
                        "Andrés Arguibel 2874, Las Cañitas, Tel.: 4772-5144",
                        "Malabia 1690, Palermo Viejo, Tel: 4831-0301"
                    ],
                    "Pcia. Buenos Aires": [
                        "Avenida de Mayo 410, Ramos mejía, Tel.: 4464-6295"
                    ]
                }
            ],
            [
                "Pony",
                "",
                {
                    "Pcia. Buenos Aires": [
                        "Av. Maipú al 1900, Vte. López, Tel.: 4718-1868, Lunes a sábado 10 a 19"
                    ]
                }
            ],
            [
                "Portsaid",
                "http://www.portsaid.com.ar",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4453 (Brandcenter), Palermo, Lunes a sábado 10 a 20",
                        "Av. Córdoba 4724, Palermo, Tel.: 4511-4343",
                        "Av. de los Incas 4215, Tel.:4552-1389",
                        "Aguirre 842, Palermo, Tel.: 4776-6393 / 4776-6436",
                        "Cabildo 4227, Tel.: 4704-6971 / 4703-3243"
                    ],
                    "Pcia. Buenos Aires": [
                        "Soleil Factory: Bernardo de Irigoyen 2647 local 205, Boulogne, Tel.: 4580-4999"
                    ]
                }
            ],
            [
                "Promesse",
                "http://www.promesse.com.ar",
                {
                    "Capital Federal": [
                        "Blanco Encalada 2878, Belgrano, Tel.: 4784-3311, Lunes a viernes de 9.30 a 19.30 y sábados hasta las 14",
                        "Factory Parque Brown: Av. Francisco Fernández de la Cruz 4602 Local 1117"
                    ]
                }
            ],
            [
                "Pronto",
                "",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4914, Palermo"
                    ]
                }
            ],
            [
                "Pura Pampa",
                "http://www.purapampa.com",
                {
                    "Capital Federal": [
                        "J. B. Justo 4194, Tel.: 4139-8822/23"
                    ]
                }
            ],
            [
                "Quarry",
                "",
                {
                    "Pcia. Buenos Aires": [
                        "Jumbo San Martín: San Lorenzo 3773"
                    ]
                }
            ],
            [
                "Rafael Garófalo",
                "http://www.rafaelgarofalo.net",
                {
                    "Capital Federal": [
                        "Alsina 1290, 6º piso, Tel.: 4384-8123, Lunes a viernes de 9 a 17 y Sábado de 9 a 14"
                    ]
                }
            ],
            [
                "Raiders Jeans",
                "",
                {
                    "Capital Federal": [
                        "Córdoba 4769, Palermo, Tel.:4777-8004/0733"
                    ],
                    "Pcia. Buenos Aires": [
                        "Av. Mitre 2282, Munro"
                    ],
                    "Santiago Del Estero": [
                        "Avellaneda 241, Metro"
                    ]
                }
            ],
            [
                "Ralph Lauren",
                "",
                {
                    "Capital Federal": [
                        "Malabia 1690, Tel.: 4831-0301, Lunes a sábado de 11 a 20. Domingo de 14 a 20"
                    ]
                }
            ],
            [
                "Rapsodia",
                "http://www.rapsodia.com.ar",
                {
                    "Capital Federal": [
                        "Aguirre 729, Palermo, Tel.:5197-5164, Lunes a domingo de 10 a 20",
                        "Arguibel 2899, Las Cañitas, Tel: 4772-2716, Lunes a domingo de 10 a 22"
                    ],
                    "Pcia. Buenos Aires": [
                        "Av. Diego Carman 391, Lomas San Isidro, Tel: 4700-1860, Lunes a domingo de 10 a 21"
                    ]
                }
            ],
            [
                "Rash",
                "Www.rash.com.ar",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4490, Palermo, Tel.: 4771-5427",
                        "Av. Córdoba 4784, Palermo, Lunes a sábado de 10 a 20"
                    ]
                }
            ],
            [
                "Republica",
                "",
                {
                    "Capital Federal": [
                        "Gurruchaga 934, Tel.: 4779-9661"
                    ]
                }
            ],
            [
                "Rever Pass",
                "http://www.reverpass.com",
                {
                    "Capital Federal": [
                        "Av. Cabildo 4045, Nuñez, Tel.: 4702-4081/ 4511-3080"
                    ],
                    "Pcia. Buenos Aires": [
                        "Av. Maipú 3898 Olivos, Tel: 4512-1722"
                    ]
                }
            ],
            [
                "Rimmel",
                "http://www.rimmel.com.ar",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4360, Palermo, Tel.: 4777-2477 / 4776- 4380"
                    ]
                }
            ],
            [
                "Rosh",
                "http://www.roshmoda.com",
                {
                    "Capital Federal": [
                        "Gurruchaga 950, Villa Crespo, Tel.: 4778-9105, Lunes a sábado 10 a 20 - Domingos 14 a 19",
                        "Av. Córdoba 4480, Palermo, Tel.: 4770-9595, Lunes a sábado 10 a 20"
                    ]
                }
            ],
            [
                "Sabrina",
                "",
                {
                    "Capital Federal": [
                        "Forest 372",
                        "Diaz Velez y Acoyte",
                        "Av. Corrientes y Uruguay"
                    ]
                }
            ],
            [
                "Sans Doute",
                "http://www.sansdoute.com",
                {
                    "Capital Federal": [
                        "Avellaneda 2972"
                    ]
                }
            ],
            [
                "Santa Barbara Outfitters",
                "",
                {
                    "Capital Federal": [
                        "Serrano 736, Villa Crespo, Tel.:4775-6777, Lunes a sábados 10 a 20"
                    ]
                }
            ],
            [
                "Sathya",
                "http://www.sathyanet.com.ar",
                {
                    "Capital Federal": [
                        "Cuenca 3569, Villa Devoto, Tel.: 4504-2740, Lunes a viernes 10 a 13 y 15 a 20)",
                        "Scalabrini Ortiz 828, Villa Crespo, Tel.: 4775-0183, Lunes a viernes 10 a 20 y sábados 10 a 18"
                    ]
                }
            ],
            [
                "Satori",
                "",
                {
                    "Capital Federal": [
                        "Aguirre 717, Villa Crespo, Tel: 4776-7137"
                    ]
                }
            ],
            [
                "Scombro",
                "http://www.scombrojeans.com.ar",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4409, Palermo, Tel.:4774-4182",
                        "Santa Fe 3285"
                    ]
                }
            ],
            [
                "Seven Size",
                "http://www.sevensize.com.ar",
                {
                    "": [
                        "barellos 2043, Martínez, Pcia. de Bs. As, Tel.: 4793-7467"
                    ]
                }
            ],
            [
                "Sicala",
                "http://www.sicala.com",
                {
                    "Capital Federal": [
                        "Rivadavia 11097, Liniers, Tel.:4644-6297"
                    ],
                    "Pcia. Buenos Aires": [
                        "Av. Meeks 70, Lomas de Zamora, Tel.: 4392-3874, Lunes a sábado de 10 a 20"
                    ]
                }
            ],
            [
                "Siete Lunas",
                "http://www.7-lunas.com.ar",
                {
                    "Capital Federal": [
                        "Peña 2588, Recoleta, Tel.: 4807-7288, Martes a viernes de 10 a 19.30 - Sábado de 10 a 20 hs"
                    ]
                }
            ],
            [
                "Sofía Chame",
                "http://www.sofiachame.com.ar",
                {
                    "Pcia. Buenos Aires": [
                        "Albarellos 2060, Martínez, Tel.: 4733-0923"
                    ]
                }
            ],
            [
                "Soho",
                "http://www.sohodenimbrand.com",
                {
                    "Capital Federal": [
                        "Parque Brown Factory: Av. Francisco Fernández de la Cruz 4602, loc. 1104"
                    ],
                    "Pcia. Buenos Aires": [
                        "Soleil Factory: Bernardo de Irigoyen 2641 Loc. 1213, Boulogne",
                        "Factory Quilmes: Av. Calchaquí 3950 Local 1140, Quilmes"
                    ]
                }
            ],
            [
                "Sólido Inc.",
                "http://www.solido-inc.com.ar",
                {
                    "Pcia. Buenos Aires": [
                        "Av. Mitre 1700, Munro, Tel.: 4580-6343"
                    ]
                }
            ],
            [
                "Stone",
                "Www.stone-jeans.com",
                {
                    "Capital Federal": [
                        "Córdoba 4550, Tel.: 4776-5267",
                        "Av. Patricios 730, Barracas, Tel.: 4301-4540"
                    ]
                }
            ],
            [
                "Susana Guffanti",
                "",
                {
                    "Capital Federal": [
                        "Aguirre 701, Villa Crespo, Tel.: 4771-7023, Lunes a sábados de 10 a 19.30"
                    ]
                }
            ],
            [
                "Sweet",
                "http://www.sweetjeans.com.ar",
                {
                    "Capital Federal": [
                        "Aguirre 818, Villa Crespo, Tel.: 4773-2887, Lunes a Sábado 10 a 20 // Domingos 14 a 19",
                        "Av. Díaz Vélez 4978, Tel.: Tel. 4983-4076, Lunes a viernes 9 a 20 // Sábados 9.30 a 20 // Domingos 14 a 19"
                    ],
                    "Pcia. Buenos Aires": [
                        "Av. Mitre 2280, Munro, Tel.: 4762-2742, Lunes a sábado de 10 a 20"
                    ]
                }
            ],
            [
                "System",
                "",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4453 (Brandcenter), Palermo, Lunes a sábado 10 a 20"
                    ]
                }
            ],
            [
                "Tabatha Jeans",
                "http://www.tabathajeans.com",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4385, Palermo, Cap. Fed, Tel.: 4770- 9599",
                        "Av. de los Incas al 4304 (casi esq. Mariano Acha), Lunes a sabados de 10 a 20"
                    ],
                    "Pcia. Buenos Aires": [
                        "Dr. I. Arieta 3152, San Justo, Tel.: 4484-1135, Lunes a sábado de 9.30 a 20.30",
                        "Almirante Brown 823, Morón, Tel.: 4629-4728, Lunes a sábado de 9.30 a 20.30",
                        "Capdevila 1023, Rafael Castillo, Tel.: 4476-0661"
                    ],
                    "Mar Del Plata": [
                        "San Luis 1730, Local 17, Tel.: 0223 4917623"
                    ],
                    "Villa Gesell": [
                        "Av. 3 Nº 561"
                    ]
                }
            ],
            [
                "Ted Bodin",
                "http://www.tedbodin.com",
                {
                    "Capital Federal": [
                        "Santa Fe 4611"
                    ]
                }
            ],
            [
                "The London Shop",
                "",
                {
                    "Capital Federal": [
                        "Lafinur 3011 Esquina J.M. Gutierrez, Barrio Norte, Tel.:4807-8624, Lunes a viernes 10 a 14.15 y 15.30 a 20 y Sábados 10 a 14.15 y 15.30 a 19"
                    ]
                }
            ],
            [
                "The North Face",
                "",
                {
                    "Capital Federal": [
                        "Aguirre 759, Villa Crespo, Tel.: 5197-5547, Lunes a sábado de 10 a 19.30 // Domingos de 14 a 18.30"
                    ]
                }
            ],
            [
                "The Queen´s Clothes",
                "http://www.thequeenclothes.com.ar",
                {
                    "Pcia. Buenos Aires": [
                        "Ladislao Martínez 183, Martínez, Tel.: 4793-3538, Lunes a viernes de 9.30 a 13 / 16 a 20 Sábado de 9.30 a 14"
                    ]
                }
            ],
            [
                "Tilt",
                "http://www.tiltweb.com.ar",
                {
                    "Capital Federal": [
                        "Av. Santa fe 1583",
                        "Migueletes 961, Belgrano"
                    ],
                    "Pcia. Buenos Aires": [
                        "Alvear 187, Martínez"
                    ]
                }
            ],
            [
                "Timberland Y Hush Puppies",
                "",
                {
                    "Capital Federal": [
                        "Aguirre 761, Tel.: 5197-5396, Abierto de lunes a domingo"
                    ]
                }
            ],
            [
                "Tiza Jean",
                "http://www.tiza.com.ar",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4585, Palermo"
                    ],
                    "La Plata": [
                        "Calle 8 Nº 780"
                    ]
                }
            ],
            [
                "Toldería La Griega",
                "",
                {
                    "Capital Federal": [
                        "Crámer 2002, 1º piso"
                    ]
                }
            ],
            [
                "Tommy Hilfiger",
                "",
                {
                    "Capital Federal": [
                        "Murillo 765 (entre Acevedo y Aguirre), local 1, Tel.: 4856-8846"
                    ]
                }
            ],
            [
                "Try Me",
                "http://www.try-me.com.ar",
                {
                    "Pcia. Buenos Aires": [
                        "Italia 1518, Martínez, Tel.: 4508-8270"
                    ]
                }
            ],
            [
                "Tucci",
                "http://www.tucciweb.com",
                {
                    "Capital Federal": [
                        "Córdoba 4265, Palermo, Tel: 4867-5569",
                        "Parque Brown Factory: Av. Francisco Fernández de la Cruz 4602, Tel. 4605-2729",
                        "Loyola 702, Villa Crespo, Lunes a sábado 10 a 20.30 y domingos 11 a 20"
                    ],
                    "Pcia. Buenos Aires": [
                        "Soleil: Bernardo de Irigoyen 2647, Boulogne, Tel.: 4007-2424",
                        "Av. del Libertador 2848, Olivos, Tel.: 4711-6010, Lunes a sábados: 10 a 20 - dom. 13 a 20"
                    ],
                    "Santa Fe": [
                        "Rosario, Av. Corrientes 753, Palace Garden, local 5"
                    ],
                    "San Miguel De Tucumán": [
                        "Av. Brígido Teran 250"
                    ]
                }
            ],
            [
                "Ufo/ Wrangler/ Lee",
                "",
                {
                    "Capital Federal": [
                        "Maipú 942, Tel.: 4312-3699"
                    ],
                    "Pcia. Buenos. Aires": [
                        "Libertad 100 esq. Rivadavia, Benito Juarez, Tel.: (802292) 452-284",
                        "Av. Mitre 2458, Munro, Tel: 4756-0129",
                        "Soleil Shopping: Bdo. de Irigoyen 2646, Boulogne, Tel.:4007-2512/2542"
                    ]
                }
            ],
            [
                "Uma",
                "http://www.umacuero.com",
                {
                    "Capital Federal": [
                        "Humboldt 1868, Palermo, Tel.: 4771-1742, Lunes a sábado de 11 a 19",
                        "Aguirre 864, Villa Crespo, Tel.: 4775-1902, Lunes a sábado de 10 a 20 - Domingos de 12 a 19"
                    ]
                }
            ],
            [
                "Union Good",
                "http://www.uniongood.com",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4714, Palermo, Tel.: 4899-0547, Lunes a sábado de 10 a 20"
                    ]
                }
            ],
            [
                "Ver",
                "",
                {
                    "Pcia. Buenos. Aires": [
                        "Av. Mitre 2217 (esq. Villate), Munro, Tel.: 5197-1113, Lunes a sábado de 10 a 20",
                        "Av. Alvear 1787, Don Torcuato, Tel. 4008-7000, Lunes a viernes de 8 a 18 y sábados de 8 a 13"
                    ],
                    "Tucumán": [
                        "Av. Brígido Terán 250, loc. 55"
                    ]
                }
            ],
            [
                "Vevú",
                "",
                {
                    "Capital Federal": [
                        "Las Heras 3896, Tel.: 4807-8094"
                    ]
                }
            ],
            [
                "Vietnam",
                "",
                {
                    "Capital Federal": [
                        "Cramer 1819, Belgrano, Tel.: 4785-3684"
                    ]
                }
            ],
            [
                "Vitamina",
                "http://www.vitamina.com.ar",
                {
                    "Pcia. Buenos Aires": [
                        "Av. Libertador 3040, Olivos, Tel.: 4512-1198",
                        "Aguirre 864, Palermo, Tel.: 0800-444-VITA (8482), Lunes a sábado de 10 a 20 // Domingo de 12 a 19"
                    ],
                    "Uruguay": [
                        "Ellauri 555, Montevideo, Tel.: (5982) 7101833"
                    ]
                }
            ],
            [
                "Viva Violeta",
                "",
                {
                    "Capital Federal": [
                        "Córdoba 4777, Palermo, Tel.: 4773-1662"
                    ]
                }
            ],
            [
                "Vov Jeans",
                "",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4714, Palermo, tel: 4772-1445, Lunes a sábado de 10 a 20"
                    ]
                }
            ],
            [
                "Wanama",
                "http://www.wanama.com",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4430, Palermo, Tel.: 4774-1476",
                        "Aguirre 841, Suc, Tel.: 4779-0292, Villa Crespo",
                        "California 1942, Barracas"
                    ],
                    "Pcia. Buenos Aires": [
                        "Hipólito Yrigoyen 180, Martínez",
                        "Av. Libertador 3040, Olivos (Estación Central)",
                        "Av. Mitre 2492, Munro, Tel.: 4721-9315",
                        "Soleil Factory, Boulogne, Tel.: 4007-2582",
                        "Saavedra 607, Pacheco, Tel.: 4736-0297",
                        "Santamaría 1152, Victoria, Tel.: 4549-2202"
                    ],
                    "Córdoba": [
                        "Derqui 105, Villa Allende, Tel.: (035) 4343-7118"
                    ],
                    "Rosario": [
                        "Roca 922, (0341) 447-5609"
                    ]
                }
            ],
            [
                "Wupper Jeans",
                "http://www.wupperjeans.com",
                {
                    "Capital Federal": [
                        "Paso 562, OnceTel.: 4962-0338/5321",
                        "Aranguren 3168, Tel.: 4611-5823/4701"
                    ]
                }
            ],
            [
                "X-age Big Size Style",
                "http://www.xage.com.ar",
                {
                    "Cordoba": [
                        "San Martín 396, Capital, Tel: (0351) 4234543, Lunes a viernes de 8 a 19 Sábado de 8.30 a 14"
                    ]
                }
            ],
            [
                "Yagmour",
                "http://www.yagmour.com",
                {
                    "Capital Federal": [
                        "Av. Cabildo 2253, Belgrano. Tel.: 4576-0910",
                        "Magariños Cervantes 1762. Tel.: 4514-7492",
                        "Córdoba 4602, Palermo, Tel.: 4514-1391 (Lunes a sábado de 9.30 a 20.30)"
                    ],
                    "Pcia. Buenos Aires": [
                        "San Justo Shopping, Sector Outlet, Av. Gral. Juan Manuel de Rosas 3910, Tel.: 4480-2859"
                    ]
                }
            ],
            [
                "Zaff Jeans",
                "http://www.zaffjeans.com",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4723, Palermo, Tel.: 46123796/4776-8131"
                    ]
                }
            ],
            [
                "Zhoue",
                "http://www.zhoue.com.ar",
                {
                    "Capital Federal": [
                        "Aguirre 921, Villa Crespo, Tel.: 4773-1559, Lunes a sábado 10 a 20 y domingo 12 a 19"
                    ],
                    "Pcia. Buenos Aires": [
                        "Soleil, Bernardo Irigoyen 2647, Boulogne"
                    ],
                    "Santa Fe": [
                        "Rosario, Bd. Oroño y Catamarca"
                    ]
                }
            ]
        ],
        "Indumentaria Masculina": [
            [
                "Airborn",
                "http://www.airborn.com.ar",
                {
                    "Capital Federal": [
                        "Aguirre 896, Palermo"
                    ]
                }
            ],
            [
                "Belston Sastrería – Directo De Fábrica",
                "",
                {
                    "Capital Federal": [
                        "Enrique Martínez 381, Tel.: 4552-1156"
                    ]
                }
            ],
            [
                "Belvedere - Sweaters Y Tejidos De Punto",
                "http://www.belvedere.com.ar",
                {
                    "Pcia. De Bs. As": [
                        "Av. República 490, Ramos Mejía, Tel.: 4658-6852, Lunes a viernes de 9 a 19 // Sábados de 9 a 18"
                    ],
                    "Capital Federal": [
                        "Loyola 709, Villa Crespo, Tel.: 4774-5606 Lunes a sábado de 10 a 20 y domingo de 14 a 19"
                    ]
                }
            ],
            [
                "Bensimon",
                "http://www.bensimon.com.ar",
                {
                    "Capital Federal": [
                        "Gurruchaga 817, Villa Crespo, Tel.: 5197-5342, Lunes a sábado de 10 a 20 y domingos de 14 a 19",
                        "Av. Cordoba 4572, Palermo, Tel: 4776-3585, Lunes a sábado de 10 a 20."
                    ],
                    "Pcia Buenos Aires": [
                        "Soleil, Bernardo Irigoyen 2647, Boulogne"
                    ]
                }
            ],
            [
                "Bowen",
                "Mailto:info@bowenlondon.com.ar",
                {
                    "Capital Federal": [
                        "Gurruchaga 729, Villa Crespo, Tel.: 4775-0017 - Lunes a sábado 10 a 20 / domingos 13 a 19",
                        "Av. de los Incas 4196, Tel.: 4554-7589 - Lunes a sábado de 10 a 20",
                        "Aguirre 904, Palermo Queens"
                    ],
                    "Pcia. Buenos Aires": [
                        "Soleil Factory: Bernardo de Irigoyen 2647 , Boulogne, Tel.:4007-2422 (diariamente de 10 a 22)",
                        "Av. Libertador 1948, Olivos",
                        "H. Yrigoyen 2630, Martínez, Tel.: 4836-3331 (lunes a viernes 9 a 18 - sábados 10 a 14)"
                    ]
                }
            ],
            [
                "Brand Point (multimarcas) Lacoste - Pengüin - Cacharel - Bowen* - 55 Lab* -columbia*, Wanama*, Pioppa*, Billabong*, Paula Cahen D´anvers*, Entre Otras.",
                "",
                {
                    "Capital Federal": [
                        "Gurruchaga 836, Villa Crespo, Tel.: 5776-5776",
                        "Iriarte 1901, Barracas, Tel.: 4301-5290 (lunes a sábado 10 a 20 //domingo 11 a 19)"
                    ],
                    "Pcia. Buenos Aires": [
                        "Ruta Panamericana Ramal Escobar Km. 34,5 (Ruta 9) - Colectora Oeste esq. Piedrabuena, Grand Bourg, Tel.: (03327) 446677/99 (*) Lunes a domingo de 10 a 20"
                    ]
                }
            ],
            [
                "Bress – Directo De Fabrica",
                "",
                {
                    "Capital Federal": [
                        "Alfredo Bufano 2141, Tel.: 4581-5243, Invierno: de lunes a viernes de 8.30 a 18. Sábado de 9 a 15, Verano: de lunes a viernes de 9 a 19. Sábado de 9 a 15"
                    ]
                }
            ],
            [
                "Brooksfield Y Abercrombie & Fitch",
                "",
                {
                    "Capital Federal": [
                        "Aguirre 966, Tel.: 4776-6246 Lunes a sábado de 11 a 19"
                    ]
                }
            ],
            [
                "Brooksfield Y Mistral",
                "",
                {
                    "Capital Federal": [
                        "Av. Santa Fe 1633, Recoleta, Tel.: 4811-5740 - Lunes a sábado de 10 a 20"
                    ]
                }
            ],
            [
                "Brukman",
                "",
                {
                    "Capital Federal": [
                        "Av. Jujuy 554, Tel. 4942-9466, Lunes a viernres de 8 a 17"
                    ]
                }
            ],
            [
                "Cardón",
                "http://www.cardon.com.ar",
                {
                    "Capital Federal": [
                        "Cabildo 4115, Nuñez, Tel.: 4701-7227/6776",
                        "Loyola 752, Villa Crespo, Tel.: 4774-1009",
                        "Honduras 4755, Palermo, Tel.: 4832-5925",
                        "Herrera 1855, Barracas, Tel.: 6091- 8355 / 8356"
                    ],
                    "Pcia. De Bs.as.": [
                        "Fondo de la Legua 425 Loc. 1 y 2, Lomas de San Isidro, Tel.: 4708-0110, Juan B. Justo 1593/95, Mar del Plata, Tel.: (0223) 480-7172",
                        "Panamericana Ramal Escobar, Km. 34,5 (Ruta 9) Roberto Fulton 2275, Grand Bourg, Tel.: (03327) 44-4453 Lunes a domingo de 10 a 20"
                    ]
                }
            ],
            [
                "Christian Dior",
                "",
                {
                    "Capital Federal": [
                        "afinur 3057, Lunes a sábado de 10 a 19 hs",
                        "Aguirre 949, Villa Crespo, Tel.: 4776-8771, Abierto de lunes a sábado de 10 a 20 y los domingos de 13 a 19 hs."
                    ]
                }
            ],
            [
                "Christian Lacroix",
                "",
                {
                    "Capital Federal": [
                        "J.F. Seguí 4646/52, Palermo, Tel: 4777-3509 /4772-3534, Lunes a viernes de 10 a 20. Sábado de 10 a 15, Estacionamiento propio",
                        "Gurruchaga 787, Villa Crespo, Tel. 4778-7135",
                        "Av. Córdoba 4440, Palermo, Tel.: 4777-9361,de lunes a sábado 10 a 20",
                        "Adolfo Alsina 1475, Tel.: 4381-7060"
                    ]
                }
            ],
            [
                "Cook",
                "http://www.johnlcook.com.ar",
                {
                    "Cap. Fed.": [
                        "California 1942, Barracas"
                    ],
                    "Pcia. Buenos Aires": [
                        "H. Irigoyen 180, Martínez",
                        "Santamarina 1152, Victoria",
                        "Saavedra 15, Pacheco",
                        "Calle de los Eucaliptos entre Dársenas 1 y 3, Puerto de Frutos, Tigre",
                        "Mitre 2492, Munro, Av. Libertador 3040, Estación Central, Olivos"
                    ],
                    "Córdoba": [
                        "Derqui 105, Villa Allende"
                    ]
                }
            ],
            [
                "Cultura",
                "http://www.culturajean.com.ar",
                {
                    "Pcia. Buenos Aires": [
                        "Lomas Center Factory: Av. Antártida Argentina 799, Local 1137, Lomas de Zamora, Tel.: 4231-5791",
                        "Factory Quilmes: Av.Calchaquí 2950 Local 1058, Quilmes, Tel.: 4280-1788",
                        "Hipólito Yrigoyen 8413, Lomas de Zamora, Tel.: 4392-2097",
                        "Hipólito Yrigoyen 7298, Banfield, Tel.: 4242-9749 Capital Federal: Parque Brown Factory: Av. Francisco Fernández de la Cruz 4602 Local 1148, Tel.: 4605-8380"
                    ]
                }
            ],
            [
                "Daniel Cassin Factory",
                "http://www.dcassin.com",
                {
                    "Capital Federal": [
                        "Alsina 1760",
                        "Cordoba 4496",
                        "Av. Cabildo 1527, Lunes a Sabado de 10 a 20.30"
                    ]
                }
            ],
            [
                "Daniel Hechter",
                "http://www.danielhechter.com.ar",
                {
                    "Capital Federal": [
                        "Av. Leandro N. Alem 679, Tel. 4893-2423, Lunes a viernes de 9 a 20 - Sabados de 10 a 17 hs",
                        "Aguirre 700, Villa Crespo, Tel.: 4775-1350, Lunes a sábado 10 a 19.30 - Domingos de 14 a 19"
                    ]
                }
            ],
            [
                "Davor",
                "http://www.davor.com.ar",
                {
                    "Capital Federal": [
                        "Av. Argentina 5653, Tel.: 4601-8603"
                    ]
                }
            ],
            [
                "Draft Outlet - Multimarca Columbia, Christian Dior, Airborn, Puma, La Dolfina, Las Pepas, Peuque, Entre Otros",
                "",
                {
                    "Capital Federal": [
                        "Herrera 1747, Barracas"
                    ],
                    "Pcia. Buenos Aires": [
                        "Av. 12 de Octubre 1115, Del Viso"
                    ]
                }
            ],
            [
                "Dufour",
                "http://www.dufourargentina.com",
                {
                    "Capital Federal": [
                        "Lavalleja 1179, Palermo, Tel.: 4865-5638 Lunes a sábdo de 10 a 20.30"
                    ],
                    "Pcia. De Buenos Aires": [
                        "Av. Divisadero 1490 (local 2), Cariló, Tel.: 02254 572588"
                    ]
                }
            ],
            [
                "Duvet Anchaño. Fábrica De Productos En Duvet",
                "http://www.duvetanchanio.com.ar",
                {
                    "Capital Federal": [
                        "Ravignani 1209, Tel.: 4772-2102, Lunes a viernes de 9 a 18 / Sábado de 9 a 18"
                    ]
                }
            ],
            [
                "Equus - Multimarca",
                "",
                {
                    "Capital Federal": [
                        "Herrera 1871, Barracas, Tel.: 4301-8061/ 0800-4443920, Lunes a sábado de 10 a 19.30 y los domingos de 12 a 19.30"
                    ]
                }
            ],
            [
                "Estacion Central Multimarca",
                "",
                {
                    "Capital Federal": [
                        "Av. Belgrano 302, San telmo, Tel.: 4342-5599, Lunes a sábado 10 a 19 // domingos 12 a 19"
                    ],
                    "Pcia. Buenos Aires": [
                        "Av. Libertador 3040, Olivos, Tel.:4794-5557, Todos los días de 10 a 20, Giesso-Lacoste-C.Lacroix-Vitamina-Las Oreiro-Rapsodia- Ay Not Dead, entre otras marcas"
                    ]
                }
            ],
            [
                "Etiqueta Negra Y Gola",
                "",
                {
                    "Capital Federal": [
                        "Gurruchaga 770, Tel.: 4772-7146",
                        "Andrés Arguibel 2835, Las Cañitas, Tel.: 4777-9858"
                    ]
                }
            ],
            [
                "Express - Polo Club Y Otras Marcas",
                "",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4644, Palermo, Tel.: 4771-5585, Lunes a sábados 10 a 20",
                        "Gurruchaga 827, Villa Crespo, Tel. 4771-5585/4771-0315 (lun a sábado 10 a 20 // domingo 12 a 19)"
                    ]
                }
            ],
            [
                "Garçon García Vintage - Hombre, Mujeres Y Niños",
                "",
                {
                    "Capital Federal": [
                        "Arguibel 2898, Las Cañitas, Tel.: 4772-4883, Lunes a ´sabado 11 a 21 // Domingo 13 a 21"
                    ],
                    "Pcia. Buenos Aires": [
                        "Av. del Libertador 14.424, Martínez, Tel.: 4792-4672"
                    ]
                }
            ],
            [
                "Gas Oil Jeans - Unisx",
                "http://www.gasoiljeans.com.ar",
                {
                    "": [
                        "Capital Federal: Av. Córdoba 4425, Tel.: 4775-9400, Lunes a sábado 11 a 20 hs"
                    ]
                }
            ],
            [
                "Giesso",
                "http://www.giesso.com.ar",
                {
                    "Capital Federal": [
                        "México 735, Piso 2, San Telmo, Tel.:4343.4900 int 35, Lunes a viernes de 9 a 18"
                    ]
                }
            ],
            [
                "Glenmore - Indumentaria Formal",
                "",
                {
                    "Capital Federal": [
                        "Sucre 2162, 1º Piso, Belgrano, Tel.: 4784-1777",
                        "Florida 876, Microcentro, Tel.: 4312-9225"
                    ]
                }
            ],
            [
                "Inside - Discontinuos",
                "",
                {
                    "Pcia. Bs. As": [
                        "Av. Mitre 2199, Munro, Tel.: 4756-4032"
                    ]
                }
            ],
            [
                "J. Cabot",
                "",
                {
                    "Capital Federal": [
                        "Ramallo 2309"
                    ]
                }
            ],
            [
                "James Smart",
                "",
                {
                    "Capital Federal": [
                        "Esmeralda 5, Tel.:4342-6923 - Lunes a viernes 9 a 19.30 - Sábado 9 a 13.30"
                    ]
                }
            ],
            [
                "John Cook",
                "http://www.johnlcook.com.ar",
                {
                    "Pcia. Bs. As": [
                        "H. Irigoyen 180, Martínez",
                        "Santamarina 1152, Victoria",
                        "Saavedra 15, Pacheco",
                        "Calle de los Eucaliptos entre Dársenas 1 y 3, Puerto de Frutos, Tigre",
                        "Mitre 2492, Munro",
                        "Av. Libertador 3040, Estación Central, Olivos"
                    ],
                    "Cordoba": [
                        "Derqui 105, Villa Allende"
                    ]
                }
            ],
            [
                "Juan Perez - Ropa Usada Y Reciclada",
                "",
                {
                    "Capital Federal": [
                        "M. T. de Alvear 1441, Tel.: 48158442 - Lunes a sábado de 11 a 19",
                        "Godoy Cruz 2472, Tel.: 4774-2472 Miércoles y sábado 11 a 19"
                    ]
                }
            ],
            [
                "Kaslík Premium Outlet",
                "",
                {
                    "Pcia. Buenos Aires": [
                        "Av. 12 de Octubre 1220 (Colectora Panamericana y Ruta 26), Del Viso, Tel.: (02320) 658158",
                        "Estanislao Lopez (ex Ruta 8) e Ituzaingo, locales 101 y 102, Pilar, Tel: 02322-664652"
                    ]
                }
            ],
            [
                "Kevingston",
                "http://www.kevinsgton.com.ar",
                {
                    "Capital Federal": [
                        "Avenida de los Incas 4201",
                        "Cabildo 4201/4207, Belgrano"
                    ],
                    "Pcia. Buenos Aires": [
                        "San Martín Factory: Carrefour, Av. General Paz y Av. San Martín Nº520, local 30",
                        "San Miguel Factory: Carrefour, Ruta 202 y Ruta 8, San Miguel",
                        "Soleil Factory: B. de Irigoyen 2850, local 301",
                        "Maipú 2402, Olivos, Tel.:4711-6757"
                    ]
                }
            ],
            [
                "Key Biscayne",
                "http://www.keybiscayne.com.ar",
                {
                    "Capital Federal": [
                        "Gurruchaga 955, Villa Crespo, Tel.: 4777-0115, Lunes a sábado 10 a 20 - Domingos 13 a 20"
                    ],
                    "Pcia. Buenos Aires": [
                        "Soleil: Bernardo de Irigoyen 2647, local 22, Boulogne (Soleil), Tel.: 4007-2500 int.1227, Lunes a jueves domingos 10 a 22 - Viernes y sábado de 9 a 22"
                    ]
                }
            ],
            [
                "Kosiuko",
                "http://www.kosiuko.com.ar",
                {
                    "Capital Federal": [
                        "Factory Parque Brown: Av. Francisco Fernández de la Cruz 460, Lugano, Tel.: 4604-31682",
                        "Av. Córdoba 4299, Palermo",
                        "Velasco 890, Villa Crespo, Tel.: 4866-3805"
                    ],
                    "Pcia Buenos Aires": [
                        "Factory Quilmes: Av. Calchaquí 3950, Quilmes, Tel.:4250-9221",
                        "San Martín Factory: San Lorenzo e Industria, San Martín, Tel.: 4764-6415",
                        "Soleil Factory: B. de Irigoyen 2647, Boulogne, Tel.: 4007-2428",
                        "Av. Mitre 2144, Munro"
                    ],
                    "Mar Del Plata": [
                        "Av. Juan B. Justo 582, Tel.:(0223) 4806455"
                    ]
                }
            ],
            [
                "La Dolfina",
                "",
                {
                    "Capital Federal": [
                        "Andrés Arguibel 2874, Las Cañitas, Tel.: 4772-5144",
                        "Malabia 1690, Palermo Viejo, Tel.: 4831-0301"
                    ],
                    "Pcia. Buenos Aire": [
                        "Avenida de Mayo 410, Ramos Mejia, Tel.: 4464-6295"
                    ]
                }
            ],
            [
                "La Martina",
                "http://www.lamartina.com",
                {
                    "Capital Federal": [
                        "Aguirre 957, Tel.: 4775-5988",
                        "Dardo Rocha 2340, San Isidro, Tel.: 4836-1232"
                    ]
                }
            ],
            [
                "Lacoste",
                "",
                {
                    "Capital Federal": [
                        "Aguirre 875/77, Tel.: 4777-1010/5776-5776, Lunes a domingo de 10 a 19.30",
                        "Gurruchaga 836, Villa Crespo, Tel.: 5776-5776, Lunes a sábado de 10 a 20 // Domingos de 10 a 19",
                        "Iriarte 1901, Barracas, Tel.: 4301-5290"
                    ]
                }
            ],
            [
                "Le Bon Marche",
                "",
                {
                    "Capital Federal": [
                        "Gurruchaga 934, Villa Crespo, Tel 4779-9661, Lunes a sábado 10 a 20 / domingo 14 a 19"
                    ]
                }
            ],
            [
                "Le Vetement",
                "",
                {
                    "Capital Federal": [
                        "Av. Callao 1040, Tel.: 4812-3670"
                    ]
                }
            ],
            [
                "Lee",
                "",
                {
                    "Capital Federal": [
                        "Parque Brown Factory: Av. Francisco Fernández de la Cruz 4602, Tel.: 4630-4200"
                    ],
                    "Pcia. Buenos Aires": [
                        "Lomas Center Factory: Antártida Argentina 799, Lomas de Zamora",
                        "Soleil Factory: Bernardo de Irigoyen 2647, Boulogne"
                    ]
                }
            ],
            [
                "Legacy",
                "http://www.legacy.com.ar",
                {
                    "Capital Federal": [
                        "Córdoba 4671, Tel.: 4778-9188M",
                        "Córdoba 4966 Factory Parque Brown: Francisco Fernández de la Cruz 4602, Local 1061",
                        "Herrera 1825, Barracas, Tel.: 4301-3258, Lunes a viernes de 10 a 20 Sábados y domingos de 12 a 20"
                    ],
                    "Pcia. Buenos Aires": [
                        "Ruta Panamericana Ramal Escobar y Estados Unidos, Garín",
                        "Soleil Factory, Bernardo de Irigoyen 2647, Boulogne",
                        "Av. Centenario 2187, Beccar",
                        "Av. Mitre 3891, Munro",
                        "Ruta 202, 408. Don Torcuato",
                        "Shopping Escobar, Ruta 25 y Panamericana, Ramal Escobar, local 1738"
                    ]
                }
            ],
            [
                "Levi´s",
                "http://www.levi.com.ar",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4630, Palermo, Tel: 4776-4229",
                        "California 1902, esq. Herrera, Barracas (Colectora Autopista 9 de Julio), Tel.: 4301-2717/5213 Lunes a sábado de 10 a 20 y domingos de 11 a 19 hs"
                    ],
                    "Pcia. Buenos Aires": [
                        "Av. Mitre 2183, Munro, Vte. López, Tel: 4756-3873, Lunes a sábado de 10.30 a 20",
                        "Panamericana Ramal Escobar (Ruta 9) Km 34,5 (Bajada Henry Ford) o Fulton 2290, Grand Bourg, Tel: (03327) 449965/ 45, Todos los días de 10 a 20",
                        "Presidente Perón 7634, Acceso Oeste (Peaje Martín Fierro) Ituzaingó, Tel.: 4481-6151/4981, Lunes a domingo de 10 a 20",
                        "Colectora Gral. Paz (alt. 2700) y Av. América, Sáenz Peña, Tel.: 4712-1543/4933, Lunes a sábado de 10 a 20 // Domingos de 12 a 20"
                    ]
                }
            ],
            [
                "Loden Haus",
                "http://www.lodenhaus.com.ar",
                {
                    "Capital Federal": [
                        "Vicente López 1661, Local 17, Tel.: 4815-6001, Lunes a viernes de 10 a 19.30"
                    ]
                }
            ],
            [
                "Macowens",
                "",
                {
                    "Capital Federal": [
                        "Parque Brown Factory, loc.1102, Av. Francisco Fernández de la Cruz 4602, Villa Lugano, Tel.: 4604-0487"
                    ],
                    "Pcia. Buenos Aires": [
                        "Quilmes Factory, Av. Calchaqui 3950, loc.1150, Quilmes, Tel.: 4250-1564",
                        "San Martin Factory, loc.1020, San Lorenzo 3773, San Martín, Tel.: 4767-7626"
                    ]
                }
            ],
            [
                "Mancini",
                "http://www.mancini.com.ar",
                {
                    "": [
                        "Honduras 5140, Palermo, Tel.: 4832-7570"
                    ]
                }
            ],
            [
                "Mango Jeans Forever",
                "",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4350, Tel.: 4773-2033"
                    ]
                }
            ],
            [
                "Mistral",
                "http://www.mistral.com.ar",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4340, Palermo, Tel.: 4899-1155",
                        "Av. Córdoba 4501, Palermo, Tel.: 4774-3555",
                        "Gurruchaga 783, Villa Crespo, Tel.: 4773-4098, lunes a sabados 10 a 20 / dom. 13 a 19"
                    ]
                }
            ],
            [
                "Moha",
                "http://www.moha.com.ar",
                {
                    "Capital Federal": [
                        "Aráoz 1095, Palermo, Tel.: 4773-7198"
                    ],
                    "": [
                        "Pcia. Buenos Aires",
                        "Av. Mitre al 1600, Munro, Tel. 4762-1174"
                    ]
                }
            ],
            [
                "Narrow",
                "http://www.narrowjeans.com",
                {
                    "Pcia. Buenos Aires": [
                        "Soleil, Bernardo de Irigoyen 2647, Boulogne, Local 323",
                        "Parque Comercial La Plata, Autopista Bs. As. La Plata Km 9, Local 1026",
                        "Parque Comercial La Tablada, Av. Crovara 4200 y Camino de Cintura, Local 1029/30"
                    ]
                }
            ],
            [
                "Nasa Jeans",
                "http://www.nasa.com.ar",
                {
                    "Santa Fe": [
                        "Rosario: Santa Fe 2965",
                        "Santa Fe: San Lorenzo, San Martín 715"
                    ],
                    "Cordoba": [
                        "Rivadavia 66"
                    ]
                }
            ],
            [
                "New Man",
                "",
                {
                    "Capital Federal": [
                        "Aguirre 815, Villa Crespo",
                        "Aguirre 901, Villa Crespo, Tel. 4778-1355"
                    ]
                }
            ],
            [
                "NiÑo Bien (multimarcas) - Discontinuos De Ralph Lauren/echo/la Martina/lacoste",
                "http://www.ninobien.com.ar",
                {
                    "Capital Federal": [
                        "Belgrano 302, San Telmo, Tel.:4342-5599 / 4342-0022 / 4342-2315, Lunes a sábado 10 a 20//Domingo 12 a 20"
                    ],
                    "Cordoba": [
                        "Patio Olmos - Local 212 / 213, Tel. 0351-5704212"
                    ]
                }
            ],
            [
                "Norfabril",
                "",
                {
                    "Capital Federal": [
                        "Ramos Mejia 779,Parque Centenario, Tel.: 4958-5333"
                    ],
                    "Pcia. Buenos Aires": [
                        "Vicente Lopez: Gral. Lavalle 1530, Tel.: 4791-7662"
                    ]
                }
            ],
            [
                "Old Bridge",
                "http://www.oldbridge.com.ar",
                {
                    "Capital Federal": [
                        "Av. de los Incas 4302, Villa Urquiza, 4587-2435",
                        "Cabildo 3892, Nuñez, Tel.: 4701-5312",
                        "Av. Santa Fe 1459, Barrio Norte, Tel.: 4813-1445",
                        "Gurruchaga 783, Palermo, Tel.: 5197-5337",
                        "Av. Cabildo 3.892, Belgrano"
                    ],
                    "Pcia. Buenos Airess": [
                        "Soleil Factory: Bernardo de Irigoyen 2647, Boulogne, loc. 325, Tel.: 4007-2585 int. 1325"
                    ]
                }
            ],
            [
                "Olegario",
                "",
                {
                    "Capital Federal": [
                        "Elcano 3268, Tel.: 4551-7750"
                    ]
                }
            ],
            [
                "Ona Saez",
                "http://www.onasaez.com",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4372, Palermo, Tel.: 4773-6997",
                        "Aguirre 640, Villa Crespo, Tel.: 4772-3196 / 4773-4058",
                        "Factory Parque Brown, (Loc. 1068) Villa Lugano, Tel.: 4605-7001"
                    ],
                    "Mar Del Plata": [
                        "Av. J. B. Justo 598, Tel.: 0223-489-9571"
                    ]
                }
            ],
            [
                "PengÜin",
                "",
                {
                    "Capital Federal": [
                        "Gurruchaga 836, Villa Crespo, Tel.: 5776-5776",
                        "Iriarte 1901, Barracas, Tel.: 4301-5290"
                    ],
                    "Pcia. Buenos Aires": [
                        "Ruta Panamericana Ramal Escobar Km. 34,5 (Ruta 9) - Colectora Oeste esq. Piedrabuena, Grand Bourg, Tel: (03327) 446677/99"
                    ]
                }
            ],
            [
                "Perramus",
                "http://www.perramus.com.ar",
                {
                    "Capital Federal": [
                        "Mexico 1323, Montserrat, Tel.: 4383-8166",
                        "Aguirre 888, Villa Crespo, Tel: 4772-0398"
                    ]
                }
            ],
            [
                "Phillgreen",
                "",
                {
                    "Capital Federal": [
                        "Aguirre 910, Villa Crespo"
                    ]
                }
            ],
            [
                "Pierre Cardin Y Van Heusen",
                "",
                {
                    "Capital Federal": [
                        "Lavalle 4060, Tel.: 4866-0191"
                    ]
                }
            ],
            [
                "Polo Club",
                "",
                {
                    "Pinamar": [
                        "Libertador 90, Tel.:02254 483906"
                    ]
                }
            ],
            [
                "Polo Ralph Lauren",
                "",
                {
                    "Capital. Federal": [
                        "Andrés Arguibel 2874, Las Cañitas, Tel.: 4772-5144",
                        "Malabia 1690, Palermo Viejo, Tel: 4831-0301"
                    ],
                    "Pcia. Buenos Aires": [
                        "Avenida de Mayo 410, Ramos mejía, Tel.: 4464-6295"
                    ]
                }
            ],
            [
                "Pony",
                "",
                {
                    "Pcia. Buenos Aires": [
                        "Av. Maipú al 1900, Vte. López, Tel.: 4718-1868, Lunes a sábado 10 a 19"
                    ]
                }
            ],
            [
                "Prototype",
                "http://www.prototypeweb.com",
                {
                    "Capital Federal": [
                        "Córdoba 4901, Palermo",
                        "Aguirre 971, Villa Crespo, Tel.: 4777-6127, Lunes a sábado 10 a 20 //Domingo 14 a 19.30"
                    ],
                    "Pcia. Buenos Aires": [
                        "Soleil, Bernardo Irigoyen 2647, Boulogne"
                    ]
                }
            ],
            [
                "Quarry",
                "",
                {
                    "Pcia. Buenos Aires": [
                        "Jumbo San Martín: San Lorenzo 3773, San Martín"
                    ]
                }
            ],
            [
                "Rash",
                "Www.rash.com.ar",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4490, Palermo, Tel.: 4771-5427",
                        "Av. Córdoba 4784, Palermo, Lunes a sábado de 10 a 20"
                    ]
                }
            ],
            [
                "Reef",
                "http://www.reef.com.ar",
                {
                    "Capital. Federal": [
                        "Av.Córdoba 4965"
                    ],
                    "Pcia. Buenos Aires": [
                        "Juan B. Justo 1698, Mar del Plata, Tel.: 0223 491-3235"
                    ]
                }
            ],
            [
                "Republica",
                "",
                {
                    "Capital Federal": [
                        "Gurruchaga 934, Tel.: 4779-9661"
                    ]
                }
            ],
            [
                "Rever Pass",
                "http://www.reverpass.com",
                {
                    "Capital Federal": [
                        "Av. Cabildo 4045, Nuñez, Tel.: 4702-4081/ 4511-3080"
                    ],
                    "Pcia. Buenos Aires": [
                        "Av. Maipú 3898 Olivos, Tel: 4512-1722"
                    ]
                }
            ],
            [
                "Santa Barbara Outfitters",
                "",
                {
                    "Capital Federal": [
                        "Serrano 736, Villa Crespo, Tel.:4775-6777, Lunes a sábados 10 a 20"
                    ]
                }
            ],
            [
                "Sixfeet Ropa Urbana",
                "",
                {
                    "Capital Federal": [
                        "Malabia 1220, Palermo, Tel.:4778-3769"
                    ]
                }
            ],
            [
                "Soho",
                "http://www.sohodenimbrand.com",
                {
                    "Capital Federal": [
                        "Parque Brown Factory: Av. Francisco Fernández de la Cruz 4602, loc. 1104"
                    ],
                    "Pcia. Buenos Aires": [
                        "Soleil Factory: Bernardo de Irigoyen 2641 Loc. 1213, Boulogne",
                        "Factory Quilmes: Av. Calchaquí 3950 Local 1140, Quilmes"
                    ]
                }
            ],
            [
                "Spinaker",
                "",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4481, Palermo, Tel.:4899-2539, Lunes a sábados de 10 a 20"
                    ],
                    "Pcia. Buenos Aires": [
                        "Soleil Factory: Bernardo de Irigoyen 2647, Boulogne. Local 324"
                    ]
                }
            ],
            [
                "Stone",
                "Www.stone-jeans.com",
                {
                    "Capital Federal": [
                        "Córdoba 4550, Tel.: 4776-5267",
                        "Av. Patricios 730, Barracas, Tel.: 4301-4540"
                    ]
                }
            ],
            [
                "Tascani",
                "http://www.tascani.com.ar",
                {
                    "Capital Federal": [
                        "Córdoba 4701, Palermo, Tel.: 4773-0943"
                    ],
                    "Pcia. Buenos Aires": [
                        "Soleil, Bernardo Irigoyen 2647, Boulogne"
                    ]
                }
            ],
            [
                "The London Shop",
                "",
                {
                    "Capital Federal": [
                        "Lafinur 3011 Esquina J.M. Gutierrez, Barrio Norte, Tel.:4807-8624, Lunes a viernes 10 a 14.15 y 15.30 a 20 y Sábados 10 a 14.15 y 15.30 a 19"
                    ]
                }
            ],
            [
                "The North Face",
                "",
                {
                    "Capital Federal": [
                        "Aguirre 759, Villa Crespo, Tel.: 5197-5547, Lunes a sábado de 10 a 19.30 // Domingos de 14 a 18.30"
                    ]
                }
            ],
            [
                "Timberland",
                "",
                {
                    "Capital Federal": [
                        "Aguirre 761, Villa Crespo, Tel.: 5197-5396/5283/5547, Abierto de lunes a domingo"
                    ]
                }
            ],
            [
                "Tiza Jean",
                "http://www.tiza.com.ar",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4585, Palermo"
                    ],
                    "La Plata": [
                        "Calle 8 Nº 780"
                    ]
                }
            ],
            [
                "Tommy Hilfiger",
                "",
                {
                    "Capital Federal": [
                        "Murillo 765 (entre Acevedo y Aguirre), local 1, Tel.: 4856-8846"
                    ]
                }
            ],
            [
                "Ufo/ Wrangler/ Lee",
                "",
                {
                    "Capital Federal": [
                        "Maipú 942, Tel.: 4312-3699"
                    ],
                    "Pcia. Buenos. Aires": [
                        "Libertad 100 esq. Rivadavia, Benito Juarez, Tel.: (802292) 452-284",
                        "Av. Mitre 2458, Munro, Tel: 4756-0129",
                        "Soleil Shopping: Bdo. de Irigoyen 2646, Boulogne, Tel.:4007-2512/2542"
                    ]
                }
            ],
            [
                "Uniform",
                "",
                {
                    "Capital Federal": [
                        "Córdoba 4624, Tel.: 4779-0897"
                    ]
                }
            ],
            [
                "Waiting – Rugby & Polo",
                "",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4917, Palermo",
                        "Maipú 887, Microcentro"
                    ],
                    "Pcia. Buenos Aires": [
                        "Av. Mitre 2226, Munro"
                    ]
                }
            ],
            [
                "Wanama",
                "http://www.wanama.com",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4430, Palermo, Tel.: 4774-1476",
                        "Aguirre 841, Tel.: 4779-0292, Villa Crespo",
                        "California 1942, Barracas"
                    ],
                    "Pcia. Buenos Aires": [
                        "Hipólito Yrigoyen 180, Martínez",
                        "Av. Libertador 3040, Olivos (Estación Central)",
                        "Av. Mitre 2492, Munro, Tel.: 4721-9315",
                        "Soleil Factory, Boulogne, Tel.: 4007-2582",
                        "Saavedra 607, Pacheco, Tel.: 4736-0297",
                        "Santamaría 1152, Victoria, Tel.: 4549-2202"
                    ],
                    "Córdoba": [
                        "Derqui 105, Villa Allende, Tel.: (035) 4343-7118"
                    ],
                    "Rosario": [
                        "Roca 922, (0341) 447-5609"
                    ]
                }
            ],
            [
                "Wrangler",
                "http://www.wrangler-jeans.com.ar",
                {
                    "Capital Federal": [
                        "Factory Parque Brown: Av. Francisco Fernández de la Cruz 4602, Tel.: 4630-4200",
                        "Córdoba 4650, Tel.: 4777-5222"
                    ],
                    "Pcia. Buenos Aires.": [
                        "Lomas Center Factory: Av. Antártida Argentina 799, Lomas de Zamora",
                        "Soleil Factory: Bernardo de Irigoyen 2647, Boulogne"
                    ]
                }
            ],
            [
                "Yves Saint Laurent",
                "",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4440, Palermo, Tel.: 4777-9361",
                        "Adolfo Alsina 1475, Tel.: 4381-7060",
                        "Gurruchaga 787, Tel.:4778-7135"
                    ],
                    "Pcia. Buenos. Aires.": [
                        "Soleil Factory: Bernardo de Irigoyen 2647 Local 1333, Boulogne, Tel.: 4007-2433",
                        "Lomas Center: Av. Antártida Argentina 799 Local 1089, Lomas de Zamora, Tel.: 4231-1612"
                    ]
                }
            ]
        ],
        "Juguetería": [
            [
                "B B Autoservicio Del Juguete",
                "",
                {
                    "Capital Federal": [
                        "Cuenca 3682 Villa del Parque, Tel/fax 4501-1419, Lunes a viernes de 9.30 a 13 y de 16 a 20.30. Sábado de 10 a 14 y de 17 a 20"
                    ]
                }
            ],
            [
                "Canalejas Autoservicio Del Juguete",
                "",
                {
                    "Capital Federal": [
                        "F. Vallese 3663, Floresta, Tel.: 4672-8891, Lunes a viernes de 9 a 13 y de 15.30 a 20. Sábado de 9.30 a 18"
                    ]
                }
            ],
            [
                "Carrousel - Hipermercado De Juguetes",
                "http://www.jugueteríascarrousel.com",
                {
                    "Capital Federal": [
                        "Av. Rivadavia 7147, Flores, Tel.: 4612-7455"
                    ],
                    "Pcia. Buenos Aires": [
                        "Megastore, Av. Hipólito Irigoyen 8942, Lomas de Zamora, Tel.: 4245-9770 Alvear 44, Martínez, Tel.: 4798-7490"
                    ]
                }
            ],
            [
                "Cebra - Supermercado De Juguetes",
                "http://www.cebra.com.ar",
                {
                    "Capital Federal": [
                        "Av. Cabildo 436, Belgrano, Tel.: 4775-1515",
                        "Av. Francisco Beiró 4580, Devoto, Tel.: 4502-5100",
                        "Av. Scalabrini Ortiz 1901, Palermo, Tel.: 4833-4422"
                    ],
                    "Pcia. Buenos Aires": [
                        "Maipú 1468, Vicente López, Tel.:.4795-2111",
                        "Av. Centenario 648, San Isidro, Tel.: 4747-2333"
                    ]
                }
            ],
            [
                "Chocolatin",
                "",
                {
                    "Capital Federal": [
                        "Vera 368, Tel.: 4855-2403"
                    ]
                }
            ],
            [
                "City Kids",
                "http://www.citykidsweb.com.ar",
                {
                    "Capital Federal": [
                        "Av. Corrientes 5366, Tel.: 4858-3878"
                    ],
                    "Pcia. Buenos Aires": [
                        "Soleil Factory: Bernardo de Irigoyen 2647, Local 1525, Boulogne"
                    ]
                }
            ],
            [
                "Creciendo",
                "http://www.creciendo.com",
                {
                    "Capital Federal": [
                        "Av. Gral. Paz (salida Lope de Vega), Tel.: 4712-5986,Todos los días de 10 a 20"
                    ],
                    "Pcia. Buenos Aires": [
                        "Cuyo 2612, Martínez, Tel.: 4717-2700, Lunes a viernes de 9 a 19. Sábado 10 a 18."
                    ]
                }
            ],
            [
                "Mattel",
                "",
                {
                    "Capital Federal": [
                        "Av. Corrientes 2028, Tel.: 4953-1902, Lunes a viernes de 10 a 19 y sábados de 10 a 13"
                    ]
                }
            ],
            [
                "Odisea",
                "",
                {
                    "Pcia. Buenos Aires": [
                        "Av. Fleming 1737, Martínez, Tel.: 4836-0298"
                    ]
                }
            ],
            [
                "Santa Claus",
                "",
                {
                    "Capital Federal": [
                        "Ruta Panamericana 2370, Boulogne, San isidro, tel.: 4735-8820"
                    ]
                }
            ],
            [
                "Tío Mario",
                "http://www.tiomario.com",
                {
                    "Capital Federal": [
                        "Av. Sante Fe 2464",
                        "Av. Cordoba 4325, Palermo",
                        "Av. Sante Fe 1561",
                        "Av. Cabildo 1721, Belgrano",
                        "Vicente Lopez 1681, Recoleta"
                    ]
                }
            ]
        ],
        "Muebles": [
            [
                "666 By Murillo",
                "http://www.murillo666.com.ar",
                {
                    "Capital Federal": [
                        "Murillo 666, Tel.: 4856-4501, Abierto de lunes a domingo"
                    ]
                }
            ],
            [
                "Amoblamientos",
                "http://www.amoblamientosoutlet.com.ar",
                {
                    "Capital Federal": [
                        "Av. Fco. Beiró 5420"
                    ]
                }
            ],
            [
                "Cassius",
                "",
                {
                    "Capital Federal": [
                        "Saavedra 742, Tel.: 4941-6706, Lunes a viernes 10 a 18 / sábado 10 a 15"
                    ]
                }
            ],
            [
                "Della Casa",
                "http://www.dellacasa.com.ar",
                {
                    "Capital Federal": [
                        "Av. Córdoba 5201, Palermo, Tel.: 4899-1483, Lunes a viernes 10 a 19 // Sáb 10 a 18",
                        "Av.Francisco Beiró 4502, Tel.: 4504.8389, Lunes a viernes de 10 a 19 y sábados de 10 a 18"
                    ],
                    "Pcia. Buenos Aires": [
                        "Irigoyen esq. Las Heras, Quilmes, Tel.: 4257-4798, Lunes a viernes de 10 a 19 y sábado de 10 a 18"
                    ]
                }
            ],
            [
                "Facyca",
                "http://www.mueblespopulares.com.ar",
                {
                    "Capital Federal": [
                        "Mahatma Gandhi 359, Tel.: 4856-2396 / 4857-9141",
                        "Av. Rivadavia 8034, Tel.: 4611-8863"
                    ]
                }
            ],
            [
                "Firenze",
                "http://www.firenzemuebles.com/outlet-muebles.html",
                {
                    "Pcia. Buenos Aires": [
                        "Av. San Martín 1796, Teléfono 4653-2583, Lunes a sábado de 9 a 20 - Domingos y feriados de 11 a 20"
                    ]
                }
            ],
            [
                "Gerar Interiorismo",
                "",
                {
                    "Capital Federal": [
                        "Scalabrini Ortiz 103 y (padilla), Villa Crespo, Tel.: 4857-2819",
                        "Corrientes 4096, Tel.: 4866-5642"
                    ],
                    "Pcia. Buenos Aires": [
                        "Santa Fe 1401, Martínez, Tel.: 4792-1256"
                    ]
                }
            ],
            [
                "Innovation & Co.",
                "http://www.innovationco.com.ar",
                {
                    "Capital Federal": [
                        "Scalabribni Ortiz 747, Tel.: 4773-2060"
                    ]
                }
            ],
            [
                "Italdesign",
                "",
                {
                    "Capital Federal": [
                        "Fabricantes de Sillones Loyola 561, Tel.: 4771-4498"
                    ]
                }
            ],
            [
                "Mega Outlet Del Mueble",
                "http://www.megaoutletdelmueble.com.ar",
                {
                    "Capital Federal": [
                        "Av. Córdoba 3414, Tel.: 4867-2713"
                    ]
                }
            ],
            [
                "Salón Del Cuero",
                "http://www.salondelcuero.com.ar",
                {
                    "": [
                        ""
                    ]
                }
            ],
            [
                "Sato Placards Fábrica",
                "http://www.satoplacards.com.ar",
                {
                    "Capital Federal": [
                        "Av. Belgrano 3289, Lunes a sábado de 10 a 19 // Domingo de 16 a 20, Estacionamiento sin cargo"
                    ]
                }
            ],
            [
                "Stilegno Outlets",
                "http://www.stilegno.com",
                {
                    "Capital Federal": [
                        "San Martín 6860"
                    ]
                }
            ],
            [
                "Trendy Vandryher – Fábrica",
                "http://www.trendymuebles.com.ar",
                {
                    "Capital Federal": [
                        "Av. San Martín 3300, Tel.: 4585-5627, Lunes a sábado de 10 a 20"
                    ]
                }
            ],
            [
                "Vivendi",
                "",
                {
                    "Capital Federal": [
                        "Aranguren 1853, Caballito, Tel.: 15 6011-2235, Lunes cerrado, martes a sábados de 10 a 19 y domingos de 14 a 19"
                    ]
                }
            ],
            [
                "Vivre",
                "http://www.vivreonline.com.ar",
                {
                    "Capital Federal": [
                        "Av. J.B. Justo 2261, Tel.: 4856-5319/4854-7388, Lunes a sábado de 9.30 a 20.30 - Feriados de 15 a 19"
                    ]
                }
            ],
            [
                "Walmer",
                "",
                {
                    "Pcia. Buenos Aires": [
                        "Av. Libertador 12914, Martínez, Tel.: 4792-3993"
                    ]
                }
            ]
        ],
        "Opticas": [
            [
                "Look Out Fabricantes",
                "http://www.opticaslookout.com.ar",
                {
                    "Capital Federal": [
                        "Echeverría 2489, Belgrano, Tel: 4787-5091"
                    ],
                    "Pcia. Buenos Aires": [
                        "Hipólito Irigoyen 22, Martínez, 4792-7336",
                        "Gdor. Udaondo 1350, Beccar, Tel.: 4723-0967"
                    ]
                }
            ]
        ],
        "Ropa de Cuero": [
            [
                "626 Cueros",
                "",
                {
                    "Capital Federal": [
                        "Murillo 626, Tel: 4857-6972"
                    ]
                }
            ],
            [
                "666 By Murillo",
                "http://www.murillo666.com.ar",
                {
                    "Capital Federal": [
                        "Murillo 666, Tel.: 4856-4501"
                    ]
                }
            ],
            [
                "Chiarini Outlet",
                "",
                {
                    "Capital Federal": [
                        "Gurruchaga 983, Palermo, Tel.: 4776-8057, Lunes a viernes de 10 a 19",
                        "sábados de 10 a 20",
                        "domingos y feriados de 14 a 19"
                    ]
                }
            ],
            [
                "Cueros Crayon",
                "http://www.cueroscrayon.com",
                {
                    "Capital Federal": [
                        "Av. Scalabrini Ortiz 5, Tel.: 4856-8455",
                        "Av. Córdoba 4611, Palermo, Tel.: 4772-7467",
                        "Parque Brown Factory Outlet, Av. Fernández de la Cruz 4602, Villa Lugano, Tel: 4605-4627"
                    ]
                }
            ],
            [
                "Cueros Koux",
                "http://www.koux.com.ar",
                {
                    "Capital Federal": [
                        "Malabia 15, Tel.: 4857-2351"
                    ]
                }
            ],
            [
                "Donna Cueros",
                "",
                {
                    "Capital Federal": [
                        "Murillo 605, Tel.: 4857-1746"
                    ]
                }
            ],
            [
                "Emporio Cueros",
                "",
                {
                    "Capital Federal": [
                        "Malabia 48, Tel.: 4857-6682"
                    ]
                }
            ],
            [
                "Kitaro Cueros",
                "http://www.kitarocueros.com.ar",
                {
                    "Capital Federal": [
                        "Murillo 701, Tel.: 4854 3072"
                    ]
                }
            ],
            [
                "Lola Haro",
                "Lolaharocueros@hotmail.com",
                {
                    "Pcia. Buenos Aires": [
                        "Mosconi 3215, Lomas de San Isidro"
                    ]
                }
            ],
            [
                "New Calce",
                "",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4685, Tel.: 4779-9399",
                        "Murillo 605, Lunes a Sábado 10 a 20"
                    ]
                }
            ],
            [
                "Paseo Del Cuero Directo De Fábrica",
                "http://www.paseodelcuero.com.ar",
                {
                    "Capital Federal": [
                        "Murillo 624, Murillo 550, Tel.: 4855-6704/9094/0079"
                    ]
                }
            ]
        ],
        "Ropa Interior": [
            [
                "Alouette",
                "http://www.alouette-alt.com.ar",
                {
                    "Capital Federal": [
                        "Av. Córdoba 5000, Tel.: 4514-1070",
                        "Quesada 2748, Tel.: 4544-1373"
                    ],
                    "Pcia. Buenos Aire": [
                        "Av. Mitre 2324 - Munro, Tel.:4512-5024"
                    ]
                }
            ],
            [
                "Apogeo Medias",
                "",
                {
                    "Pcia. Buenos Aires": [
                        "O´Higgins 351, Sarandí, Tel.: 4203-2002, int 121, Lunes a viernes de 8 a 18"
                    ]
                }
            ],
            [
                "Arshal Directo De Fábrica",
                "http://www.arshal.com.ar",
                {
                    "Capital Federal": [
                        "Av. Corrientes 2378, Once, Tel.: 4953-2235",
                        "Av. Sáenz 972, Pompeya, Tel. 4912-2165",
                        "Av. Sáenz 1167, Pompeya, Tel.: 4919-9124",
                        "Av. Córdoba 4663, Palermo, Tel.: 4772-9697",
                        "Av. Entre Ríos 1092, Congreso, Tel. 4305-0516"
                    ],
                    "Pcia. Buenos Aires": [
                        "Av. Jean Jaures 3199, Valentín Alsina Tel. 4228-7912",
                        "Av. 9 de Julio 1464, Lanús Este Tel.: 4225-3928"
                    ]
                }
            ],
            [
                "Brocatto",
                "",
                {
                    "Capital Federal": [
                        "Av. Directorio 5443, Mataderos, Lunes a viernes 9 a 13 y 14 a 17 hs."
                    ]
                }
            ],
            [
                "Caro Cuore",
                "http://www.carocuore.com.ar",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4716",
                        "Aguirre 824",
                        "Factory Parque Brown: Av. Francisco Fernández de la Cruz 4602"
                    ]
                }
            ],
            [
                "Cocot & Nuit",
                "",
                {
                    "Capital Federal": [
                        "Rivadavia 6425, Flores"
                    ]
                }
            ],
            [
                "Dulce Carola",
                "",
                {
                    "Capital Federal": [
                        "24 de Noviembre 1598, Tel.: 4308-0079",
                        "Parque Brown Factory Outlet: Av. Francisco Fernández de la Cruz 4602, Villa Lugano. Local 1202, Tel.: 4630-4200",
                        "Blanco Encalada 2883, Tel.: 4541-0064, Lunes a viernes de 9.30 a 19.30. Sábado de 9.30 a 14.30"
                    ],
                    "Pcia. Buenos Aires": [
                        "Factory Quilmes: Av. Calchaquí 3950, Quilmes. Local 1039, Tel.: 4280-0035"
                    ]
                }
            ],
            [
                "Eyelit",
                "http://www.eyelit.com.ar",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4931, Palermo",
                        "Elcano 3138"
                    ],
                    "Pcia. Buenos Aires": [
                        "Soleil Factory: Bernardo de Irigoyen 2647, Boulogne",
                        "Av. R. Balbín 1975, San Martín"
                    ]
                }
            ],
            [
                "Getien Underwear",
                "http://www.getien.com.ar",
                {
                    "Capital Federal": [
                        "Blanco Encalada 2880, Belgrano, Tel.: 4786-1005",
                        "Araoz 599, Palermo, Tel.: 4854-5878"
                    ]
                }
            ],
            [
                "Innocenza",
                "http://www.innocenza.com.ar",
                {
                    "Capital Federal": [
                        "Luis Viale 245, Tel. 4855-3124"
                    ]
                }
            ],
            [
                "Juana De Arco",
                "",
                {
                    "Capital Federal": [
                        "El Salvador 4762, Palermo, Tel.: 4833-1621, Lunes a viernes de 10.30 a 20, sábados de 11 a 20 y domingos de 13 a 20"
                    ]
                }
            ],
            [
                "Maidenform",
                "http://www.maidenform.com.ar",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4615, Palermo, Tel.: 4772-9468",
                        "Lascano 2482, Tel.: 4582-0243",
                        "Blanco Encalada 2890, Belgrano, Tel.: 4786-1891",
                        "Av. Elcano 3335, Tel.: 4551-5270"
                    ]
                }
            ],
            [
                "Meu Bem Directo De Fábrica",
                "http://www.meubem.com.ar",
                {
                    "Capital Federal": [
                        "Av. Galván 3477. (outlet)",
                        "Av. Triunvirato 4055, Villa Urquiza",
                        "Av. Cabildo 1098, Belgrano",
                        "Cabildo 2799, Belgrano",
                        "Cuenca 2991",
                        "Roosevelt 5197"
                    ]
                }
            ],
            [
                "Miranda",
                "",
                {
                    "Capital Federal": [
                        "Cortina 1164, Tel.: 4648-2226, Miércoles a sábado de 15 a 21"
                    ]
                }
            ],
            [
                "Miro Sol",
                "http://www.miroargentina.com.ar",
                {
                    "Capital Federal": [
                        "Larrea 700, Lunes a viernes de 9 a 19 y sábados de 10 a 14"
                    ]
                }
            ],
            [
                "Mother And Daugther",
                "http://www.motheranddaughter.com.ar",
                {
                    "Pcia. Buenos Aires": [
                        "Alvear 65, Martínez, Tel.: 4798- 3812"
                    ]
                }
            ],
            [
                "Narciso",
                "http://www.narcisounderwear.com.ar",
                {
                    "Capital Federal": [
                        "Av. Corrientes 6407/11, Tel.: 4554-3843"
                    ]
                }
            ],
            [
                "Perlea",
                "http://www.perlea.com.ar",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4615, Palermo, Tel.: 4772-0468"
                    ]
                }
            ],
            [
                "Peter Pan",
                "http://www.peter-pan.com.ar",
                {
                    "Capital Federal": [
                        "Av. Patricios 952"
                    ]
                }
            ],
            [
                "Plumeos",
                "http://www.plumeos.com.ar",
                {
                    "Capital Federal": [
                        "Arismendi 2748 (alt. Av. de los Incas 4800), Tel.: 4523-1977"
                    ]
                }
            ],
            [
                "Promesse",
                "http://www.promesse.com.ar",
                {
                    "Capital Federal": [
                        "Blanco Encalada 2878, Belgrano, Tel.: 4784-3311, Lunes a viernes de 9.30 a 19.30 y sábados hasta las 14",
                        "Factory Parque Brown: Av. Francisco Fernández de la Cruz 4602 Local 1117"
                    ]
                }
            ],
            [
                "Rassinata",
                "http://www.rassinata.com.ar",
                {
                    "Capital Federal": [
                        "Avellaneda 2796, Tel.: 4637-4460"
                    ]
                }
            ],
            [
                "Ropint",
                "http://www.ropintweb.com.ar",
                {
                    "Capital Federal": [
                        "Hipólito Yrigoyen 2733, Tel.: 4115-3007, Lunes a viernes de 9.30 a 16.30"
                    ]
                }
            ],
            [
                "Selu",
                "",
                {
                    "Pcia. Buenos Aires": [
                        "San Martin Factory, Local 1023, San Lorenzo e Industria, San Martín, Tel.: 4767-8643 Todos los días de 10 a 22"
                    ]
                }
            ],
            [
                "Susila Tantrik",
                "",
                {
                    "Capital Federal": [
                        "Marcelo T. de Alvear 1477"
                    ]
                }
            ],
            [
                "Sweet Victorian Y Sweet Lady",
                "http://www.sweetvictorian.com.ar",
                {
                    "Capital Federal": [
                        "Blanco Encalada 2870, Belgrano, Tel.: 4781-5785, Lunes a viernes de 9.30 a 19.30. Sábado de 9.30 a 14.30",
                        "(en Woman Secret) Francisco Fernández de la Cruz 4602, Villa Lugano, Tel.: 4630-4200/4217, Lunes a domingo de 10 a 22",
                        "Av. R. Patricios 698, Barracas, Tel.: 4302-8086, Lunes a sábado de 9 a 19 hs."
                    ]
                }
            ],
            [
                "Triumph",
                "http://www.triumph.com",
                {
                    "Capital Federal": [
                        "Blanco Encalada 2889, Belgrano, Tel.: 4546-0916, Lunes a viernes de 10 a 19.30 y sábado de 10 a 13.30"
                    ],
                    "Pcia. Buenos Aires": [
                        "Ing. Silveyra 3399, Carapachay, Tel.:4763-3229, Martes a sábado de 10 a 13 y de 14 a 17",
                        "Avda. Maipu 2348, Olivos, Tel.: 4799-4966, Lunes a viernes de 9 a 19.30 y sábados de 9 a 14"
                    ]
                }
            ],
            [
                "Woman Secret",
                "http://www.woman-secret.com.ar",
                {
                    "Capital Federal": [
                        "Factory Parque Brown: Av. Francisco Fernández de la Cruz 4602 Local 1117",
                        "San Martín Factory: San Lorenzo 3773 Loc 1042, San Martín"
                    ],
                    "Pcia. Buenos Aires": [
                        "Soleil Factory: Bernardo de Irigoyen 2647 Loc 302, Boulogne",
                        "Portal de Escobar: Panamericana Km. 50 Ramal Escobar Loc 1005"
                    ]
                }
            ]
        ],
        "Ropa de Niños": [
            [
                "Advanced",
                "http://www.advanced-adv.com",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4878, Palermo, Tel.: 4899-1894",
                        "Av. Cabildo 4288, Belgrano"
                    ],
                    "Pcia. Buenos Aires": [
                        "Quilmes Factory: Av. Calchaquí 3900, Quilmes. Local 1050 Tel.:4280-7751",
                        "Av. Mitre y Ugarte, Munro."
                    ]
                }
            ],
            [
                "Agua Clara",
                "http://www.mallasaguaclara.com.ar",
                {
                    "Pcia. Buenos Aires": [
                        "Laprida 3675, Villa Martelli, Vte. López, Tel.: 4709-4497, San Martín 2034, Florida, Tel.: 4795-3220"
                    ]
                }
            ],
            [
                "Alagua",
                "",
                {
                    "Capital Federal": [
                        "Av. Córdoba 5060, Capital, Tels.: 4773-2011 / 4773-1345, De lunes a sábado de 10 a 19.30"
                    ]
                }
            ],
            [
                "Alouette",
                "http://www.alouette-alt.com.ar",
                {
                    "Capital Federal": [
                        "Av. Córdoba 5000, Tel.: 4514-1070",
                        "Quesada 2748, Tel.: 4544-1373"
                    ],
                    "Pcia. Buenos Aire": [
                        "Av. Mitre 2324 - Munro, Tel.:4512-5024"
                    ]
                }
            ],
            [
                "Anacleta",
                "",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4877, Palermo"
                    ]
                }
            ],
            [
                "Archie Reiton",
                "Info@archie-reiton.com.ar",
                {
                    "Santa Fe": [
                        "Rosario, Sarmiento 1887"
                    ]
                }
            ],
            [
                "Cheeky",
                "http://www.cheeky.com.ar",
                {
                    "Capital Federal": [
                        "Av. Alvarez Thomas 1432, Belgrano, Tel.: 4553-0907",
                        "Av. Alvarez Thomas 3320, Tel.: 4523-0400",
                        "Av. Córdoba 4801, Barrio Norte, Tel.: 4576-5490",
                        "Factory Parque Brown: Av. Francisco Fernández de la Cruz 4602, Villa Lugano, Tel.: 4604-1267",
                        "Spinetto Shopping: Matheu 220, Balvanera, Tel.: 4953-7450",
                        "Rivadavia 5096, Caballito, Tel.: 4902-4799",
                        "Aguirre 827, Palermo, Tel.: 4508-5810/11"
                    ],
                    "Pcia. Buenos Aires": [
                        "Av. Mitre 2494/6, Munro, Tel.: 4756-2895",
                        "San Martín Factory: San Lorenzo 3773, San Martín, Tel.: 4512-5791",
                        "Peatonal Belgrano 3631, San Martín, Tel.: 4512-5791",
                        "Lomas Center Factory: Av. Antártida Argentina 799 – Lomas de Zamora, Tel.: 4298-7566",
                        "Parque Comercial La Tablada: Crovara y Camino de Cintura, La Tablada, Tel.: 4699-6366",
                        "Parque Comercial Avellaneda: Autopista Bs. As. La Plata Km. 6, Avellaneda, Tel.:4353-1701",
                        "Coto Temperley: Hipolito Irigoyen 1656, Avellaneda, Tel.: 4298-9428",
                        "Coto Ciudadela: Comesaña 4089, Ciudadela, Loc. 19/20 Tel.:4647-0818",
                        "Soleil Factory: Bernardo de Irigoyen 2647, Boulogne, Tel.:4007-2500, Int. 1672",
                        "Quilmes Factory: Av. Calchaquí 3950, Quilmes, Tel.: 4280-6569",
                        "Alvear 2786, Villa Ballester, Tel.: 4767-7071",
                        "J.S. Fernández 55, Lomas de San Isidro, Tel.: 4723-3055",
                        "Cuyo 2944, Martínez, Tel.: 4513-8864/5",
                        "El Portal de Escobar: Ruta Prov. 25 y Colectora Oeste, Tel.: 03488-421194",
                        "Nine Shopping: Av. Victorica 1128, Moreno, Tel.: 463-7111",
                        "Av. Rivadavia 18229, Morón, Tel.: 4627-0864"
                    ],
                    "La Plata": [
                        "Calle 47 nº 656 (entre 8 y 9), Tel.: 0221 489.3500"
                    ],
                    "Formosa": [
                        "Rivadavia 769, Formosa, Tel.: 03717 425095/1"
                    ],
                    "Mendoza": [
                        "9 de Julio 965, Mendoza, Tel.: 0201 4204850",
                        "SAn Miguel de Tucuman: Buenos Aires 7, Tucumán Centro, San Miguel de Tucumán, Tel.: 0381 431-1630"
                    ]
                }
            ],
            [
                "Chibel",
                "http://www.chibel.com",
                {
                    "Capital Federal": [
                        "Av. Rivadavia 6433"
                    ],
                    "Pcia. Buenos Aires": [
                        "Carrefour San Martín: Av. San martín 420, esq. Gral. Paz."
                    ]
                }
            ],
            [
                "Chiribitil",
                "http://www.chiribitil.com.ar",
                {
                    "Capital Federal": [
                        "Alvarez Thomas 1505, Belgrano, Tel.: 4552-0754"
                    ]
                }
            ],
            [
                "Coala Kimbi",
                "http://www.coalakimbi.com.ar",
                {
                    "Capital Federal": [
                        "Córdoba 4242, Palermo, Tel.: 4867-0639, Lunes a Sábado 10 a 20"
                    ]
                }
            ],
            [
                "Combustion",
                "http://www.combustionargentina.com.ar",
                {
                    "Capital Federal": [
                        "Córdoba 4940, Palermo, Tel.: 4773-3999"
                    ]
                }
            ],
            [
                "Como Quieres Que Te Quiera",
                "http://www.comoquieres.com.ar",
                {
                    "Capital Federal": [
                        "Córdoba 4779, Palermo, Tel.: 4778-3553",
                        "Soleil Factory: Bernardo de Irigoyen 2647, Boulogne, Tel.: 4007-2500"
                    ]
                }
            ],
            [
                "Coniglio",
                "http://www.conigliosa.com.ar",
                {
                    "Capital Federal": [
                        "Córdoba 4834, Palermo, Tel.: 4771-8998"
                    ]
                }
            ],
            [
                "Dinenti",
                "",
                {
                    "Capital Federal": [
                        "Av. Scalabrini Ortíz 1187, Palermo, Tel.: 4776-5506, Lunes a viernes de 11 a 19. Sábado de 10 a 19"
                    ]
                }
            ],
            [
                "G De B Gabriela De Bianchetti",
                "http://www.gdeb.com.ar",
                {
                    "Capital Federal": [
                        "Scalabrini Ortiz 1305, Palermo",
                        "Av. Cabildo 4551, Nuñez, Tel.: 4701-6036, Lunes a sábado de 10 a 20"
                    ]
                }
            ],
            [
                "Garçon García Vintage",
                "",
                {
                    "Capital Federal": [
                        "Arguibel 2898, Las Cañitas, Tel.: 4772-4883, Lunes a ´sabado 11 a 21 // Domingo 13 a 21"
                    ]
                }
            ],
            [
                "Gimos",
                "http://www.gimos.com.ar",
                {
                    "Capital Federal": [
                        "Córdoba 4930, Palermo, Tel.: 4777-6822",
                        "Charcas 4726, Palermo",
                        "Ciudad de la Paz 2899, Tel.: 4139-5136/5137",
                        "Sarmiento 4152, Almagro, Tel.: 4867-2222"
                    ],
                    "Pcia. Buenos Aires": [
                        "Soleil Factory: Bernardo de Irigoyen 2647, Boulogne. Loc. 602, Tel.: 4007-2500 int. 1602"
                    ]
                }
            ],
            [
                "Grisino",
                "http://www.grisino.com.ar",
                {
                    "Capital Federal": [
                        "Cabildo 4541, Belgrano",
                        "Cordoba 4880, Palermo"
                    ],
                    "Pcia. Buenos. Aires": [
                        "Soleil, Bernardo de Irigoyen 2647, Boulogne",
                        "H. Irigoyen 8202, Lomas de Zamora"
                    ],
                    "Santa Fe": [
                        "Rosario, Pellegrini 1910, Tel.: 0341 4243417"
                    ]
                }
            ],
            [
                "Hola Ma! Bebés Y Futura Mamá",
                "",
                {
                    "Capital Federal": [
                        "Scalabrini Ortiz 1189, Tel.: 4776-5506, Lunes a sábado de 10 a 20"
                    ]
                }
            ],
            [
                "Lazaro",
                "",
                {
                    "Capital Federal": [
                        "Nicasio Oroño 1563, Tel: 4582-4719/9226, Estacionamiento sin cargo Nicasio Oroño 1638, Lunes a viernes 9 a 18 / Sábado 9 a 14"
                    ]
                }
            ],
            [
                "Miele - Bebés & Niños",
                "http://www.mieleweb.com.ar",
                {
                    "Capital Federal": [
                        "Santa Fe y Scalabrini Ortiz, Palermo, Galería Nuevo Mundo Local 13"
                    ]
                }
            ],
            [
                "Mimo",
                "http://www.mimo.com.ar",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4956, Palermo, Tel.: 4773-4728",
                        "Factory Parque Brown: Av. Francisco Fernández de la Cruz 4602. Loc. 1068, Tel.: 4604-1319"
                    ],
                    "Pcia. Buenos Aires": [
                        "El Portal de Escobar: Ruta 9 y ruta 25, Escobar, Loc. 1020, Tel. (543488) 430-402",
                        "Lomas Center Factory: Av. Antártida Argentina 799, Lomas de Zamora Loc. 1039, Tel.: 4231-4700",
                        "Munro Factory: Av. Mitre 2454, Munro, Tel.: 4756-0110",
                        "Quilmes Factory: Av. Calchaquí 3950, Quilmes, Loc. 1032, Tel.: 4200-8028",
                        "San Martín Factory: San Lorenzo 3773, San Martín, Loc.1007, Tel.: 4849-1019",
                        "Soleil: Soleil, Bernardo Irigoyen 2647, Boulogne"
                    ]
                }
            ],
            [
                "Norfabril",
                "",
                {
                    "Capital Federal": [
                        "Ramos Mejia 779,Parque Centenario, Tel.: 4958-5333"
                    ],
                    "Pcia. Buenos Aires": [
                        "Vicente Lopez: Gral. Lavalle 1530, Tel.: 4791-7662"
                    ]
                }
            ],
            [
                "Old Bunch",
                "http://www.oldbunchkids.com.ar",
                {
                    "Capital Federal": [
                        "Córdoba 4998,Galería Jardín"
                    ],
                    "Mar Del Plata": [
                        "Güemes 2574, Local 4"
                    ]
                }
            ],
            [
                "Owoko",
                "",
                {
                    "Capital Federal": [
                        "Echeverría 2427, Belgrano, Tel.: 4784-3144, Lu a sáb 9.30 a 20"
                    ],
                    "Pcia. Buenos Aires": [
                        "Soleil, Bernardo Irigoyen 2647, Boulogne, Tel.: 4007-2500"
                    ]
                }
            ],
            [
                "Paula Cahen D´anvers",
                "http://www.paulacahendanvers.com.ar",
                {
                    "Capital Federal": [
                        "Aguirre 875, Villa Cerspo, Tel.: 5197-5556, Lunes a viernes de 10.30 a 19.30, sábados de 10 a 20 y domingos de 12 a 19"
                    ],
                    "Pcia. De Buenos Aires": [
                        "Av. Libertador 3012, Olivos, Tel.: 4790-2475",
                        "BrandPoint: Ruta Panamericana Ramal Escobar Km. 34,5 (Ruta 9) - Colectora Oeste esq. Piedrabuena, Grand Bourg, Tel.: (03327) 446677/99"
                    ]
                }
            ],
            [
                "Pijama Party",
                "http://www.pijama-party.com.ar",
                {
                    "Capital Federal": [
                        "Malabia 1365, Palermo, Tel.: 4776-8126, Lunes a viernes de 10 a 18.30. Sábado de 10 a 14"
                    ]
                }
            ],
            [
                "Pioppa",
                "http://www.pioppa.com.ar",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4834, Tel.: 4899-0287, Abierto de lunes a sábado de 10 a 20"
                    ]
                }
            ],
            [
                "Republica",
                "",
                {
                    "Capital Federal": [
                        "Gurruchaga 934, Tel.: 4779-9661"
                    ]
                }
            ],
            [
                "Soft Red",
                "",
                {
                    "Capital Federal": [
                        "Av. Alvarez Thomas 1434, Tel.: 4553-4883, Lunes a viernes de 9.30 a 19.30 y sábados de 9.30 a 14"
                    ]
                }
            ],
            [
                "Urbanito",
                "http://www.urbanito.com.ar",
                {
                    "Capital Federal": [
                        "Camacuá 85, Flores, Tel.: 4633-4969, Lunes a viernes de 9.30 a 19.30 // Sábado de 10 a 18.30",
                        "Av. Córdoba 4657, Palermo, Tel.: 4774-6328, Lunes a sábado de 10 a 20"
                    ]
                }
            ],
            [
                "Valentina",
                "http://www.valentinaescomovos.com.ar",
                {
                    "Capital Federal": [
                        "Triunvirato 3781"
                    ],
                    "Pcia. Buenos Aires": [
                        "Av. Maipú 598, Vicente López"
                    ]
                }
            ],
            [
                "Voss",
                "http://www.voss.com.ar",
                {
                    "Capital Federal": [
                        "Presidente Perón 830, Tel.: 4328-5620",
                        "Spinetto Shopping: Alsina 2300, local 121"
                    ],
                    "Pcia. De Buenos Aires": [
                        "Av. Belgrano 336, San Isidro, Tel.: 4747-2503"
                    ],
                    "La Plata": [
                        "Calle 49 entre 7 y 8, Tel.: (0221) 421-8114"
                    ]
                }
            ],
            [
                "Weak Meak",
                "http://www.weakmeak.com.ar",
                {
                    "Capital Federal": [
                        "Córdoba 4876, Palermo, Tel.: 4778-1002"
                    ],
                    "Pcia. Buenos Aires": [
                        "Soleil, Bernardo de Irigoyen 2647, Boulogne. Local 545"
                    ]
                }
            ],
            [
                "Zuppa Chicos",
                "http://www.zuppachicos.com.ar",
                {
                    "Capital Federal": [
                        "Florida 703, 1º"
                    ]
                }
            ]
        ],
        "Trajes de Baño": [
            [
                "Agua Clara",
                "http://www.mallasaguaclara.com.ar",
                {
                    "Pcia. Buenos Aires": [
                        "Laprida 3675, Villa Martelli, Vte. López, Tel.: 4709-4497, San Martín 2034, Florida, Tel.: 4795-3220"
                    ]
                }
            ],
            [
                "Alouette",
                "http://www.alouette-alt.com.ar",
                {
                    "Capital Federal": [
                        "Av. Córdoba 5000, Tel.: 4514-1070",
                        "Quesada 2748, Tel.: 4544-1373"
                    ],
                    "Pcia. Buenos Aire": [
                        "Av. Mitre 2324 - Munro, Tel.:4512-5024"
                    ]
                }
            ],
            [
                "B Y G Verano",
                "http://www.bygverano.com.ar",
                {
                    "Pcia. Buenos Aires": [
                        "Av. Juan. B. Justo 3310, Ciudadela, Lunes a viernes de 9 a 13 y de 14 a 18"
                    ]
                }
            ],
            [
                "Bahia Del Sol",
                "",
                {
                    "Capital Federal": [
                        "Terrero 1777, Tel: 4581-2586, Lunes a viernes 9 a 18 y sábados de 9 a 14"
                    ]
                }
            ],
            [
                "Bea",
                "http://www.beaatucha.com",
                {
                    "Capital Federal": [
                        "Santa Fe 1660, local 13, Barrio Norte, Lunes a viernes de 10 a 20"
                    ]
                }
            ],
            [
                "Brillantina",
                "http://www.brillantina.com.ar",
                {
                    "Pcia. Buenos Aires": [
                        "Domingo Savio 3041, San Isidro, Tel.: 4700-8450"
                    ]
                }
            ],
            [
                "Class Life",
                "http://www.classlife.com.ar",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4724, Palermo, Tel.: 4773-4664",
                        "Aguirre 880, Villa Crespo, Tel.: 4773-0390"
                    ]
                }
            ],
            [
                "Darling",
                "http://www.darlingsport.com.ar",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4861 , Palermo, Tel.: 4771-6242"
                    ],
                    "Pcia Buenos Aires": [
                        "Soleil Factory, Bernardo de Irigoyen 2647, Boulogne"
                    ]
                }
            ],
            [
                "Key Whoss",
                "http://www.keywhoss.com",
                {
                    "Capital Federal": [
                        "Av.Triunvirato 3495 esq. Donado, Tel.: 4552-5289 / 4555-1709",
                        "Discount: Juramento 2343, Belgrano"
                    ]
                }
            ],
            [
                "La Flor De Lavanda",
                "http://www.lavanda.com.ar",
                {
                    "Capital Federal": [
                        "Araoz 1116, Palermo, Tel.: 4775-2075"
                    ],
                    "Pcia. Buenos Aires": [
                        "Av. Centenario 2081, Beccar, Tel.: 4743-0336"
                    ]
                }
            ],
            [
                "Lecol",
                "",
                {
                    "Capital Federal": [
                        "Av. Warnes 395 esq. Scalabrini Ortiz, Tel.: 4854 2100, Lunes a viernes de 9 a 19 y sábado de 9 a 13.30."
                    ]
                }
            ],
            [
                "Mallas Marson",
                "Mallasmarson@escape.com.ar",
                {
                    "Pcia. Buenos Aires": [
                        "Hipolito Yrigoyen 12, Monte Grande"
                    ]
                }
            ],
            [
                "Miro Sol",
                "http://www.miroargentina.com.ar",
                {
                    "Capital Federal": [
                        "Larrea 700, Lunes a viernes de 9 a 19 y sábados de 10 a 14"
                    ]
                }
            ],
            [
                "Nodagi By Natty",
                "http://www.nattynodagi.com.ar",
                {
                    "Capital Federal": [
                        "Av. San Pedrito 466/68, Flores"
                    ]
                }
            ],
            [
                "Pimalú Discontinuos",
                "http://www.pimalu.com.ar",
                {
                    "Capital Federal": [
                        "Estados Unidos 2748, San Cristobal, Tel.: 4941-3680/4943-2581"
                    ]
                }
            ],
            [
                "Promesse",
                "http://www.promesse.com.ar",
                {
                    "Capital Federal": [
                        "Blanco Encalada 2878, Belgrano, Tel.: 4784-3311, Lunes a viernes de 9.30 a 19.30 y sábados hasta las 14",
                        "Factory Parque Brown: Av. Francisco Fernández de la Cruz 4602 Local 1117"
                    ]
                }
            ],
            [
                "Rassinata",
                "http://www.rassinata.com.ar",
                {
                    "Capital Federal": [
                        "Avellaneda 2796, Tel.: 4637-4460"
                    ]
                }
            ],
            [
                "S-mode",
                "http://www.s-mode.com.ar",
                {
                    "Pcia. Buenos Aires": [
                        "Dardo Rocha 3220, Martínez, Tel.: 4836-3876, Lunes a viernes de 10 a 19. Sábado de 10 a 14"
                    ]
                }
            ],
            [
                "Shiri Sa",
                "http://www.shirisa.com",
                {
                    "Capital Federal": [
                        "Céspedes 3078, Colegiales, Tel.: 4555-1059/4552-0241/4553-9922, Lunes a viernes 9 a 19 / Sábados 9 a 13.30"
                    ],
                    "Pcia. Buenos Aires": [
                        "Ayacucho 3363, Olivos, Tel.: 4711-9020"
                    ]
                }
            ],
            [
                "Sunstroke",
                "http://www.sunstroke-stk.com.ar",
                {
                    "Capital Federal": [
                        "Av. Córdoba 4777, Palermo"
                    ]
                }
            ],
            [
                "Vandalia",
                "http://www.vandalia.com.ar",
                {
                    "Capital Federal": [
                        "Crámer 3512, Belgrano"
                    ]
                }
            ],
            [
                "Veka Line",
                "http://www.veka.com.ar",
                {
                    "Capital Federal": [
                        "Acevedo 458, Tel/fax: 4855-7898/0680"
                    ]
                }
            ]
        ]
    },

    /**
     * @var array Shoppings in Argentina.
     *            Format: City [
     *                Name [0]
     *                Link [1]
     *                Location (for Google Maps) [2]
     *                Phone [3]
     *                Schedule [4]
     *            ]
     */
    shoppings: {
        "Buenos Aires - Avellaneda": [
            [
                "Alto Avellaneda",
                "http://www.altoavellaneda.com.ar/",
                "Av. Gral. Güemes 897, B1873BOG Crucesita, Buenos Aires",
                "4229-0200",
                "Lun - Dom: 10:00 - 22:00"
            ]
        ],
        "Buenos Aires - Bahía Blanca": [
            [
                "Bahía Blanca Shopping",
                "http://www.bahiablancaplazashopping.com/",
                "Bahia Blanca Plaza Shopping, Alberto Pedro Cabrera 2153, B8001FGW Bahía Blanca, Buenos Aires",
                "4594299",
                "-"
            ]
        ],
        "Buenos Aires - Mar del Plata": [
            [
                "Paseo Diagonal",
                "http://www.paseodiagonal.com.ar/",
                "Diagonal Pueyrredon 3050,Mar del Plata,Buenos Aires",
                "4956939",
                "Lun - Dom: 09:00 - 22:00"
            ],
            [
                "Los Gallegos Shopping",
                "http://www.losgallegos.com.ar/",
                "Rivadavia 3050, B7600GNT Mar del Plata, Buenos Aires",
                "499 6900",
                "Lun - Dom: 10:00 - 01:00"
            ]
        ],
        "Buenos Aires - Moreno": [
            [
                "Nine Shopping",
                "http://www.nineshopping.com/",
                "Au.Gaona y Av. Vittorica, Buenos Aires",
                "462-9494",
                "Lun - Dom: 09:00 - 20:00"
            ]
        ],
        "Buenos Aires - Morón": [
            [
                "Plaza Oeste Shopping",
                "http://www.plaza-oeste.com.ar/",
                "Juan m. De Rosas 658, Castelar, Morón, Buenos Aires",
                "4489-4694",
                "Lun - Dom: 10:00 - 22:00"
            ]
        ],
        "Buenos Aires - Pilar": [
            [
                "Tortugas Open Mall",
                "http://www.tortugasopenmall.com/",
                "Avenida Constituyentes 1700, Pilar, Buenos Aires",
                "424200",
                "Lun - Dom: 10:00 - 22:00"
            ],
            [
                "Paseo Champagnat",
                "http://www.paseochampagnat.com.ar/",
                "La Gaviota 400, Pilar, Buenos Aires",
                "374300",
                "Lun - Jue: 10:00 - 21:00 Vie - Dom: 10.00 - 22:00"
            ],
            [
                "Las Palmas del Pilar Shopping",
                "http://www.laspalmasdelpilar.com.ar/",
                "Las Magnolias 754, Pilar, Buenos Aires",
                "-",
                "Lun - Dom: 10:00 - 21:00"
            ]
        ],
        "Buenos Aires - San Isidro": [
            [
                "Unicenter",
                "http://www.unicenter.com.ar/",
                "Av. Paraná 3745, B1640FRE Martínez, Buenos Aires",
                "4717-0933",
                "Lun - Jue: 10:00 - 24:00 Vie - Dom: 10.00 - 02:00"
            ]
        ],
        "Buenos Aires - Tigre": [
            [
                "Nordelta Centro Comercial",
                "http://www.nordeltacc.com.ar/",
                "Av. de los Lagos 7010, Tigre, Buenos Aires",
                "4871-5555",
                "Lun - Jue: 10:00 - 21:00 Vie - Dom: 10.00 - 22:00"
            ]
        ],
        "Buenos Aires - Vicente López": [
            [
                "Norcenter Lifestyle Mall",
                "http://www.norcenter.com/",
                "Norcenter, Panamá 3707, Munro, Buenos Aires",
                "4721-3000 ",
                "Lun - Sab: 10:00 - 21:00 Dom: 12.00 - 21:00"
            ]
        ],
        "Capital Federal": [
            [
                "Alto Palermo Shopping",
                "http://www.altopalermo.com.ar/",
                "Av. Santa Fe 3253, C1425BGH Buenos Aires, Capital Federal",
                "5777-8000",
                "Lun - Dom: 10:00 - 22:00"
            ],
            [
                "Paseo Alcorta",
                "http://www.paseoalcorta.com.ar/",
                "Jerónimo Salguero 3172, Ciudad de Buenos Aires",
                "5777-6500",
                "Lun - Dom: 10:00 - 22:00"
            ],
            [
                "Abasto Shopping",
                "http://www.abasto-shopping.com.ar",
                "Av. Corrientes 3247, Ciudad Autónoma de Buenos Aires",
                "4959-3400",
                "Lun - Dom: 10:00 - 22:00"
            ],
            [
                "Patio Bullrich",
                "http://www.shoppingbullrich.com.ar",
                "Av. Libertador 750, Ciudad Autónoma de Buenos Aires",
                "4814-7400/7500",
                "Lun - Dom: 10:00 - 00:00"
            ],
            [
                "Buenos Aires Design",
                "http://www.designrecoleta.com.ar",
                "Av. Pueyrredón 2501, Buenos Aires",
                "5777-6000",
                "Lun - Sab: 10:00 - 21:00 Dom: 12.00 - 21:00"
            ],
            [
                "Galerías Pacífico",
                "http://www.galeriaspacifico.com.ar",
                "Galerías Pacífico, San Martín 768, Ciudad De Buenos Aires",
                "5555-5110",
                "Lun - Sab: 10:00 - 21:00 Dom: 12.00 - 21:00"
            ],
            [
                "El Solar Shopping",
                "http://www.elsolarshopping.com.ar/",
                "Av. Luis María Campos 950, Buenos Aires",
                "4778-5031",
                "Lun - Dom: 10:00 - 22:00"
            ],
            [
                "Dot Baires Shopping",
                "http://www.dotshopping.com.ar",
                "Vedia 3632, saavedra, Buenos Aires",
                "5777-9500",
                "Lun - Dom: 07:00 - 02:00"
            ],
            [
                "Plaza Liniers Shopping",
                "http://www.plazaliniers.com.ar/",
                "Av. Cnel. Ramón L. Falcon 7115, Buenos Aires, Capital Federal",
                "5611-1000",
                "Lun - Dom: 10:00 - 21:00"
            ],
            [
                "Galería Güemes",
                "ttp://www.galeriaguemes.com.ar/",
                "Florida 159, ciudad autónoma de buenos aires",
                "-",
                "Lun - Vie: 08:00 - 20:00 Sab 09:00 - 15:00"
            ],
            [
                "Del Parque Shopping Center",
                "http://www.delparqueshopping.com.ar/",
                "Nazarre 3175, Capital Federal",
                "4505-8000",
                "-"
            ],
            [
                "Devoto Shopping",
                "http://www.devotoshopping.com.ar/",
                "Quevedo 3365, Buenos Aires",
                "4019-6000",
                "Lun - Dom: 10:00 - 00:00"
            ]
        ],
        "Chubut - Puerto Madryn": [
            [
                "Portal de Madryn",
                "http://www.portaldemadryn.com/",
                "Av. Roca y 28 de julio, puerto madryn, chubut, argentina",
                "474700",
                "-"
            ]
        ],
        "Córdoba - Córdoba": [
            [
                "Patio Olmos",
                "http://www.patioolmos.com/",
                "Av. Vélez Sarsfield 361, Córdoba",
                "5704199-299",
                "Lun - Dom: 10:00 - 22:00"
            ],
            [
                "Dinosaurio Mall - Alto Verde",
                "http://www.dinosauriomall.com.ar/",
                "Rodríguez de Busto 4086, Córdoba",
                "526 1576",
                "Lun - Dom: 10:00 - 22:00"
            ]
        ],
        "Mendoza - Godoy Cruz": [
            [
                "Palmares Open Mall",
                "http://www.palmares.com.ar/",
                "Panamericana 2650 - Godoy Cruz, Mendoza",
                "4139015",
                "-"
            ]
        ],
        "Mendoza - Guaymallén": [
            [
                "Mendoza Plaza Shopping",
                "http://www.mendozaplazashopping.com/",
                "Acceso Este Lateral Norte 3280,Guaymallen,Mendoza",
                "4490100-200",
                "-"
            ]
        ],
        "Río Negro - San Carlos de Bariloche": [
            [
                "Shopping Patagonia",
                "http://www.shoppingpatagonia.com.ar/",
                "Elflein y Onelli, Bariloche, Río Negro, Argentina",
                "443 3267",
                "-"
            ]
        ],
        "Salta - Salta": [
            [
                "El Palacio Galerias",
                "http://www.galeriaelpalacio.com.ar/",
                "Mitre 37 y Caseros 662, Salta, Argentina",
                "422 8008 ",
                "-"
            ]
        ],
        "Santa Fé - Rosario": [
            [
                "Shopping del Siglo",
                "http://www.shoppingdelsiglo.com/",
                "Shopping del Siglo, Avenida Córdoba 1643, 2000 Rosario, Santa Fe",
                "449 1001",
                "Lun - Jue: 08:30 - 00:00 Vie - Dom: 08.30 - 02:00"
            ],
            [
                "Portal Rosario Shopping",
                "http://www.portalshopping.com.ar/",
                "Nansen 255, Rosario, Santa Fe",
                "409 7200",
                "Lun - Dom: 10:00 - 22:00"
            ],
            [
                "Alto Rosario Shopping",
                "http://www.alto-rosario.com.ar/",
                "Junín 501, Rosario, Santa Fe",
                "410 6400",
                "Lun - Dom: 10:00 - 22:00"
            ]
        ],
        "Santa Fé - Venado Tuerto": [
            [
                "Patio Casey",
                "http://www.patiocasey.com.ar/",
                "Shopping Patio Casey 790, Venado Tuerto, Santa Fe",
                "400100",
                "-"
            ]
        ],
        "Tucumán - Yerba Buena": [
            [
                "Yerba Buena Shopping",
                "http://www.yerbabuenashopping.com/",
                "Av. Aconquija 1799, 4107 Yerba Buena, Tucumán",
                "425 4342 / 425 2467",
                "-"
            ],
            [
                "Portal Tucumán Shopping",
                "http://www.tucumanshopping.com.ar/",
                "Av. aconquija 1799 yerba buena, san miguel de tucuman",
                "435 7086",
                "Lun - Dom: 10:00 - 22:00"
            ]
        ]
    },

    /**
     * @var array Taxis. Format: City [ Name [0] | Phone [1] ]
     */
    taxis: {
        "Capital Federal": [
            [ "24 Horas", "4523-2222" ],
            [ "A.S.", "4639-9999" ],
            [ "Ale", "4983-3800" ],
            [ "Alo", "4855-0455" ],
            [ "Amistax", "4582-7774" ],
            [ "Ben Car", "4372-1776" ],
            [ "Buenos Aires", "4566-8888" ],
            [ "Buen viaje", "4862-4888" ],
            [ "C.A.R.T.", "4682-0000" ],
            [ "Caminito", "4925-2626" ],
            [ "Capital S.R.L.", "4702-1111" ],
            [ "Cibertaxi", "4921-6001" ],
            [ "Circlub", "4637-3333" ],
            [ "City Tax", "4585-5544" ],
            [ "Ciudad", "4923-7007" ],
            [ "Classictax S.R.L. \/ Classic", "4301-9600 \/ 4305-6446 \/ 4588-1010 \/ 4674-4444" ],
            [ "Confort Radio Taxi", "4544-8686" ],
            [ "Hola", "4511-3100" ],
            [ "Del Plata S.R.L.", "4505-1111" ],
            [ "Diez S.R.L.", "4585-5007" ],
            [ "Eiffel", "4308-4777" ],
            [ "El", "4922-9999" ],
            [ "El Rey S.R.L. \/ Fono Taxi", "4671-1188" ],
            [ "El Urbano", "4566-0000" ],
            [ "Fono Taxi S.A \/ El Rey", "4583-8787" ],
            [ "Free Tax Srl  ", "4943-2003" ],
            [ "Gold", "4305-5050" ],
            [ "Hola", "4511-3100 \/ 4571-4571" ],
            [ "Libero", "4773-7373" ],
            [ "Llamenos S.A. ", "4556-6666" ],
            [ "Luz", "0800-3333-777 \/ 4642-5846" ],
            [ "Melitax", "4671-7777" ],
            [ "Mi Taxi S.R.L.", "4931-1200" ],
            [ "Millenium", "4829-0000" ],
            [ "Monserrat", "4942-4222" ],
            [ "New Taxi", "4551-1110" ],
            [ "Okey", "4922-4444" ],
            [ "On Time", "4954-0000" ],
            [ "Onda Verde", "4867-0000" ],
            [ "Pampa", "4683-3003" ],
            [ "Paris", "4308-0001" ],
            [ "Personal", "4501-4444 \/ 4644-1346" ],
            [ "Pídalo S.A.", "4956-1200" ],
            [ "Positivo", "4636-2220" ],
            [ "Porteño S.R.L.", "4566-5777" ],
            [ "Premier", "4858-0888" ],
            [ "Premium S.A.", "4374-6666" ],
            [ "Primer Nivel", "4988-9999" ],
            [ "Privado (Pídalo)", "4932-1800" ],
            [ "Recoleta Vip S.R.L.", "4983-0544" ],
            [ "Satar Line", "4863-1000" ],
            [ "Satelital S.R.L.", "4931-1500" ],
            [ "Sin Recargo S.R.L.", "4636-2220" ],
            [ "Star line", "4567-6666 \/ 4639-6666" ],
            [ "Su Taxi S.A.", "4635-2500" ],
            [ "Tango S.A.", "4862-2222" ],
            [ "Taxi Ya S.R.L.", "4904-1010" ],
            [ "Taxitel", "4682-0700" ],
            [ "Tiempo", "4854-3838" ],
            [ "Tu Radio Taxi S.R.L.", "4308-1006 \/ 4581-0555 \/ 4639-4800 \/ 4860-0707" ],
            [ "Uno", "4863-0000" ],
            [ "Van", "4921-0000" ],
            [ "Vía Data", "4777-7777 \/ 4899-2222 \/ 4777-8888" ]
        ],
        "Avellaneda": [
            [ "505", "4228 -5352" ],
            [ "9 de Julio", "4222-4392" ],
            [ "Agencia Bidart", "4201-2959" ],
            [ "Agencia de remis Modelo", "4222-4420" ],
            [ "Auto remis Vip", "4222-1118" ],
            [ "Autos remises San Martín", "4222-5555" ],
            [ "Avellaneda", "4222 -4435" ],
            [ "Bahia", "42651660\/42652021" ],
            [ "Bon Voyage", "4201-7051" ],
            [ "Del Plata", "4222 -1398" ],
            [ "Express", "4222-7733" ],
            [ "Full", "4205-2385" ],
            [ "Full Time", "4222 3734" ],
            [ "Golden", "4205 -6127" ],
            [ "Lucar", "4203-3560" ],
            [ "My friend's remises", "4205-1091" ],
            [ "Piaggio", "42226463\/42223343" ],
            [ "Plaza", "4205-6161\/4265-0792" ],
            [ "Provincial", "4205-7999" ],
            [ "Radio Remis Nuevo Sur", "4218-5656\/61" ],
            [ "Zeus", "4222 -1107" ]
        ],
        "Bahía Blanca": [
            [ "Dis-Car Srl", " 455-7788" ],
            [ "Universitario", "454-0000" ],
            [ "Fénix", "452-2222" ],
            [ "La Falda", "454-6180" ],
            [ "Taxi Ya", "456-1881" ],
            [ "Su Taxi (As.bahiense de taxistas)", "450-0000" ],
            [ "Taxi Rap (As.taxistas del sur)", "455-3333" ],
            [ "Remis 10 Srl  ", "4565600" ],
            [ "Remis Almor Srl", "4556111" ],
            [ "Remis Anlilda Srl", "4545500" ],
            [ "Remis Bahía Blanca Srl", "4818327" ],
            [ "Remis Car Tour Sa", "4811919" ],
            [ "Remis Centro Srl", "4559696" ],
            [ "Remis Permier Srl", "4813000" ],
            [ "Remis San Roque Srl", "4883388" ],
            [ "Remis Sur Srl", "4555500" ],
            [ "Remis Universitario Srl", "4540000" ]
        ],
        "Balcarse": [
            [ "Radio Taxi", "422899" ],
            [ "Remis Esperanza", "431616 \/ 431717" ],
            [ "El Triunfo", "424933" ],
            [ "Remicop", "424000 \/ 432121" ],
            [ "Aries", "422444" ],
            [ "Balcarce", "422148" ],
            [ "Tele taxi", "425076" ],
            [ "Remis Sol", "431555" ],
            [ "Pronto Taxi", "422600" ]
        ],
        "Baradero": [
            [ "Al Instante", "48-2149" ],
            [ "Calle Ancha", "48-2543" ],
            [ "Emanuel", "48-4730" ],
            [ "La Terminal", "48-4607" ],
            [ "Laprida", "48-5518" ],
            [ "Llame Ya", "48-1752" ],
            [ "Medrano", "48-1706" ],
            [ "Moreno", "48-1840" ],
            [ "Remi-Ring", "48-2040" ],
            [ "Remis F y M", "48-6134" ],
            [ "Telemóvil", "48-2907" ],
            [ "Todo Servicio", "48-2888" ]
        ],
        "Cañuelas": [
            [ "La Estrella", "43-1927" ],
            [ "Halcón", "42-3330" ],
            [ "Acuña", "43-0350" ],
            [ "Centro", "43-0500" ],
            [ "25 De Mayo", "42-2331" ],
            [ "Cattaneo", "43-1188" ],
            [ "Black Jack", "43-1731" ],
            [ "Sur", "42-2000" ],
            [ "Amigo", "42-1717" ],
            [ "Mitre", "43-1850" ],
            [ "El Condor", "43-1600" ],
            [ "Farh-Lap", "42-3530" ],
            [ "San Cristobal", "43-1880" ]
        ],
        "Carhué": [
            [ "Carhue", "432060" ],
            [ "Premier", "432647" ],
            [ "Taxis Rg", "434193" ],
            [ "Tele Taxi", "432219" ]
        ],
        "Chascomús": [
            [ "Los Pinos", "43-6636" ],
            [ "Remis 13\/20", "43-1320" ],
            [ "Remis Norte", "43-0981\/0004" ],
            [ "San Nicolás", "42-2828" ]
        ],
        "San Clemente": [
            [ "Erdocia y la N° 1", "0800-333-3702 \/ 0800-666-3362" ],
            [ "\"El de las cintas amarillas\"", "42-2735\/2393\/1205" ],
            [ "La Unión", "52-6526 \/ 42-2800 - 0800-444-0081" ],
            [ "Ans-Pres", "42-2105 \/ 42-1435" ],
            [ "Remisería San Clemente", "43-0444" ],
            [ "", "52-5252" ]
        ],
        "Las Toninas": [
            [ "Las Toninas", "43-1700" ],
            [ "La Plaza", "43-1031" ]
        ],
        "Santa Teresita": [
            [ "Radio Taxi", "42-0800 \/ 42-2600" ],
            [ "Radio Taxi Costero", "43-0438" ],
            [ "Río Grande", "43-0666" ],
            [ "Kevin", "43-0501" ],
            [ "Granate", "42-1000 \/ 0800-222-6549" ],
            [ "Las Quintas", "42-1196 \/ 43-0072" ],
            [ "Terminal", "42-2104" ],
            [ "La 9", "52-1117" ],
            [ "Remises Sur", "46-2900" ],
            [ "Bugs Bunny", "46-5365" ],
            [ "Chiozza", "46-3855" ],
            [ "Atlántico", "46-3111 \/ 46-3666" ],
            [ "Remisol", "46-0666" ],
            [ "San Bernardo", "46-3550" ],
            [ "Ronda", "46-4400" ]
        ],
        "Costa Azul": [
            [ "Remises Sur", "46-2900" ]
        ],
        "San Bernardo": [
            [ "Bugs Bunny", "46-5365" ],
            [ "Chiozza", "46-3855" ],
            [ "Atlántico", "46-3111 \/ 46-3666" ],
            [ "Remisol", "46-0666" ],
            [ "San Bernardo", "46-3550" ],
            [ "Ronda", "46-4400" ]
        ],
        "Mar del Ajó": [
            [ "Mar de Ajó", "42-9888" ],
            [ "Libertador y Carreras", "42-0188" ],
            [ "Bugs Bunny", "42-9900 \/ 42-3331 \/ 42-3332" ],
            [ "Mitre", "42-0322" ],
            [ "De la Costa", "42-0998 \/ 42-0131" ],
            [ "El Paisano", "42-2727" ],
            [ "Arenas", "42-2444 \/ 0800-222-6675" ],
            [ "Mar de Ajó", "42-2000 \/ 42-2800" ],
            [ "5 Estrellas", "42-2112 \/ 42-1900" ],
            [ "Rocco", "42-0266" ],
            [ "Alas", "42-0622 \/ 42-3333" ]
        ],
        "La Plata": [
            [ "Code Taxi S.A.", "425-9594" ],
            [ "Tele Taxi La Plata S.R.L.", "452-0648" ],
            [ "Taxicom S.R.L.", "451-8557" ],
            [ "As. Prop. Coches Taxímetros La Plata", "470-0101" ]
        ],
        "Luján": [
            [ "Alvear", "434313" ],
            [ "Aries", "426337" ],
            [ "Auto Centro Lujan", "422920\/425455" ],
            [ "Autos \"El Cielo\"", "435677" ],
            [ "Avellaneda", "426928" ],
            [ "Belgrano", "420278" ],
            [ "Center", "422072" ],
            [ "Colón", "425160" ],
            [ "Dinastia (Open Door)", "496549" ],
            [ "El Mirador", "430994" ],
            [ "El Trebol ( V. Flandria)", "494924" ],
            [ "El Signo (Open Door)", "496881" ],
            [ "El Sol", "427250" ],
            [ "España", "434500" ],
            [ "La Nueva Coop Trab Ltda", "429470" ],
            [ "La Estrella I", "435645" ],
            [ "La Estrella Ii", "435639" ],
            [ "La Recova", "421016" ],
            [ "Lavalle", "421700" ],
            [ "Lezica", "430700" ],
            [ "Mariano Moreno", "425053" ],
            [ "Milenio", "436300\/436333" ],
            [ "Mitre", "0800-333-9318" ],
            [ "Norte ( Pueblo Nuevo)", "494559" ],
            [ "Radiomovil Lujan", "426063" ],
            [ "San Demetrio", "430994" ],
            [ "San Martin", "425910" ],
            [ "Santa Elena", "435541" ],
            [ "Sur", "429800" ],
            [ "Su Auto", "430781" ],
            [ "Taxi España (Jauregui)", "497713" ],
            [ "Taxi Flandria", "497314" ],
            [ "Zapiola", "436006" ]
        ],
        "Mar del Plata": [
            [ "Tele Taxi Mar del Plata", "472-5271" ],
            [ "A M P A T", "472-9175" ],
            [ "Brisas del mar S.R.L.", "481-5337" ],
            [ "Central Taxi S.R.L.", "474-2519" ],
            [ "Remicoop Ltda.", "474-8392" ],
            [ "Sociedad Conductores de Taxis ", "43-3357" ],
            [ "Taxi Puerto S.R.L.", "480-5599" ],
            [ "Taxicoop", "472-3575" ]
        ],
        "Miramar": [
            [ "Central Taxi", "43-0700 \/ 43-2500" ],
            [ "Centro Taxi", " 43-2929 \/ 42-3303" ],
            [ "Alvarado", "43-0327" ],
            [ "Danny", "43-0034 \/ 43-2001" ],
            [ "José", "43-0097" ],
            [ "Miramar", "43-0400" ],
            [ "Mitre", "43-0055" ],
            [ "Ola", "43-3591 \/ 42-2720" ],
            [ "Plaza Panda", "43-0517" ],
            [ "Pronto", "43-2452 \/ 42-0000" ],
            [ "Sol", "43-0380" ],
            [ "Tyc Remisse", "42-0102 \/ 0800-666-7910" ],
            [ "Tury", "42-0161" ]
        ],
        "Pilar": [
            [ "Alas", "430310" ],
            [ "Autos al Instante", "430026" ],
            [ "Auto Ya", "429916" ],
            [ "Classic", "432250" ],
            [ "Family Car", "429823" ],
            [ "Génesis", "432777" ],
            [ "Prestige", "428804" ],
            [ "Prince", "426273" ],
            [ "Serviauto", "428477" ],
            [ "Vip", "433130" ]
        ],
        "San Pedro": [
            [ "Taxi", "42-5482" ],
            [ "Arco Iris", "42-1313" ],
            [ "Car", "42-7007" ],
            [ "El Chino", "42-2727" ],
            [ "Obligado", "42-7373" ],
            [ "Remis Salta", "42-9449" ],
            [ "Remis Sol", "42-8583" ]
        ],
        "Tigre": [
            [ "La Isla", "4506-9380" ],
            [ "La Salida", "4749-3029" ],
            [ "Remis El Paseo", "4749-8265" ],
            [ "Remises Tigre", "4749-0700" ],
            [ "Turismo Cazón", "4749-1606" ]
        ],
        "Villa Gesell": [
            [ "Alameda – A6 –", "45-6666\/ 46-6666" ],
            [ "Boy - X -", "45-4866 \/ 46-4866" ],
            [ "El Castillo – B 5 -", "46-6060 \/ 2305" ],
            [ "La Garita", "46-8443 \/ 4" ],
            [ "Los Pinos - L -", "46-3110\/4334 \/ 0800-444-3110" ],
            [ "Mar Azul", "45-7474 \/ 7575" ],
            [ "Remise 105 - R -", "46-4377" ],
            [ "Sur Ii (Hospital A. Illia) – G", "46-4050" ],
            [ "Upa - S -", "47-4500" ]
        ],
        "Córdoba (capital)": [
            [ "Aeropuerto de Córdoba", "475-9111" ],
            [ "Alfa Car", "0800-222-4022" ],
            [ "Arabel", "473-1111" ],
            [ "Asoc. Perm. de Taximetro de Cba", "473-2222" ],
            [ "Cordoba Taxis", "471-0000" ],
            [ "Difeert Taxi S.R.L.", "470-1111" ],
            [ "El Trébol", "476-6666" ],
            [ "Fast S.R.L.", "480-4242" ],
            [ "Luxe Car Suquía", "474-0606" ],
            [ "Rapi-Taxii S.R.L.", "455-5555" ],
            [ "Rumbo Taxi .", "461-1111" ],
            [ "Servis Taxi Srl", "464-7777" ],
            [ "Taxi Jet S.R.L.", "488-1111" ],
            [ "Taxi Com S.R.L.", "464-0000" ],
            [ "Taxi Flot S.R.L.", "488-3990" ],
            [ "Taxi Libre", "474-2001" ],
            [ "Telecar S.R.L.", "465-6666" ],
            [ "Teletaxis de Córdoba", "472-1313" ],
            [ "Transmitaxi Córdoba", "470-3311" ],
            [ "Transportaxi S.A.", "489-2999" ],
            [ "Unitaxi S.R.L.", "452-5000" ],
            [ "Remicoop Ltda.", "474-1515" ],
            [ "Tala Car", "461-7878" ],
            [ "Top Remises", "481-9999" ],
            [ "Inicicco.", "44-4137" ],
            [ "Talacar", "44-5555" ]
        ],
        "Mina Clavero": [
            [ "Jeremías", "0800-777-1128" ],
            [ "Remis", "0800-888-4698" ],
            [ "Taxi", "47-2479" ]
        ],
        "Villa General Belgrano": [
            [ "Goggler", "46-1798" ],
            [ "Del Sur", "46-3888" ],
            [ "Del Valle", "46-2249" ],
            [ "Remis Car", "46-1551" ],
            [ "Remises 2000", "46-2000" ]
        ],
        "Capilla del Monte": [
            [ "Radio Taxi Balumba", "0800-444-7800 482-350" ],
            [ "Radio Taxi Uritorco", "0800-555-5445    481-900" ],
            [ "Taxi Terminal de Omnibus", "481-026" ],
            [ "Centro", "481-844" ],
            [ "Cerro", "0800-555-5657 482-300" ],
            [ "Futura", "482-000" ],
            [ "Remis San Antonio", "482-333" ]
        ],
        "Cosquín": [
            [ "Parada de Taxi", "45-1204" ]
        ],
        "Villa Carlos Paz": [
            [ "Fono Taxi", "42-8768" ],
            [ "Amílcar", "43-1111" ],
            [ "Teleremis", "43-3333" ]
        ],
        "La Cumbre": [
            [ "Yerba Buena", "45-2020" ]
        ],
        "La Falda": [
            [ "Radio Taxi Kennedy", "0800-8888332  426355" ]
        ],
        "Santa Rosa": [
            [ "Centro", "43-3333 \/ 42-8682" ],
            [ "Ciudad", "43-0000" ],
            [ "La Terminal", "43-7777" ]
        ],
        "La Rioja": [
            [ "Radio Taxi", "431555\/ 431600" ],
            [ "Remises Brizuela", "435000" ],
            [ "Remises del Velazco", "426655" ],
            [ "Remises La Rioja", "426666" ]
        ],
        "Mendoza": [
            [ "Asociación Mutual Radio Taxi Mendoza", "430-3300" ],
            [ "Llámenos", "422-2202" ],
            [ "Radio Móvil Taxi Asociación Mutual", "445-5855" ],
            [ "Su Taxi S.R.L.", "437-1111" ]
        ],
        "Bariloche": [
            [ "Aguas Azules", "43-3338" ],
            [ "Bariloche", "43-1717" ],
            [ "Catedral", "43-4000" ],
            [ "Limay", "46-8300" ],
            [ "Taxis Pehuen", "42-6549" ]
        ],
        "San Martín de los Andes": [
            [ "", "02936" ],
            [ "Asoc, de Taxistas Unidos", "427377 \/ 578" ],
            [ "La Terminal", "428656" ],
            [ "Tele Taxi", "426800" ],
            [ "Ecotaxi", "428421 \/ 427031" ],
            [ "Pronto Taxi", "427123\/549" ],
            [ "Taxi Luciano", "426828" ],
            [ "Radio Car", "428807" ]
        ],
        "Puerto Madryn": [
            [ "La Nueva Patagonia", "47-6000" ],
            [ "Gales", "47-1100" ],
            [ "Hospital", "47-1254" ],
            [ "Patagonia", "45-8300" ],
            [ "Plaza San Martín", "47-2214" ],
            [ "Terminal de Omnibus", "47-4177" ],
            [ "Avenida", "45-1333" ],
            [ "La Curva", "45-1959" ],
            [ "La Terminal", "47-5900" ],
            [ "Madryn", "45-3444" ],
            [ "Mitre", "47-2087" ]
        ],
        "Perito Moreno": [
            [ "El Pintura", "43-2394" ],
            [ "Glaciar", "43-2586" ]
        ],
        "Rosario": [
            [ "Coop. de Prov. de Serv. de Rosario", "448-1609" ],
            [ "Coop de Taxímetros Rosario Ltda.", "464-3074" ],
            [ "Fono Taxi S.R.L.", "482-2222" ],
            [ "Radio Full Srl", "481-5738" ],
            [ "Radio Taxi 380 Mil S.R.L.", "438-2798" ],
            [ "Radio Taxi S.R.L.", "438-2798" ],
            [ "Radio Taxi Catiltar", "4566666" ],
            [ "Radio Taxi City S.R.L", "457-0000" ],
            [ "Satelitaxi", "435-5555" ],
            [ "Su Radiotaxi", "455-5555" ],
            [ "Taxi Libre S.R.L.", "454-1111" ],
            [ "Taxi Rosario S.R.L.", "457-6666" ],
            [ "Taxi Oeste S.R.L.", "457-6666" ],
            [ "Primera Clase S.A.", "424-3000" ],
            [ "Aguila Real", "435-1313" ],
            [ "Remis Rosario Sur", "466-5959" ],
            [ "Preferencial Srl", "438-0001" ],
            [ "Argentina Remis", "459-0008" ],
            [ "América Remises", "461-3333" ],
            [ "Emmanuel", "433-9090" ],
            [ "Manuel Tienda León", "449-6565" ],
            [ "Alternativa Remises", "454-6666" ],
            [ "Servicios Ejecutivos", "457-3536" ],
            [ "Rosario Remises", "454-3000" ],
            [ "Perletto Viajes Srl", "425-6378" ],
            [ "Clase A Cooperativa Ltda.", "436-0000" ],
            [ "Full Car´s Remiss", "453-5050" ],
            [ "C.A.P.", "485-1515" ],
            [ "Alto Rosario Remisse", "465-5616" ],
            [ "Lider", "465-0000" ],
            [ "Centro Remisses", "465-0182" ],
            [ "Remises San Andrés", "461-9300" ],
            [ "Remisses Centro Express", "411-2222" ]
        ],
        "San Miguel de Tucumán": [
            [ ".Transmi-Taxi Ltda", "432-0320" ],
            [ "Comunicaciones Radio Taxi Srl", "422-7400" ],
            [ "Ramos Jaun M", "424-5649" ],
            [ "Taxi", "421-2411" ],
            [ "Centro Taxi Srl", "430-0999" ],
            [ "Mate de Luna Remis", "421-0210 \/ 4232319" ],
            [ "Mitre Remis", "430-5656 \/00" ],
            [ "5 estrellas", "430-0800" ],
            [ "Remituc", "421-0008" ],
            [ "Independencia remis", "426-3504" ],
            [ "Argañaraz", "420-1167" ],
            [ "La banda", "426-2605" ],
            [ "Exclusivo remis", "420-1167" ],
            [ "Rent Sur", "424-0990" ],
            [ "San cayetano", "434-5152" ],
            [ "San juan", "433-2030" ],
            [ "Angar", "427-2869" ],
            [ "Del Rosario", "425-0864" ],
            [ "Remis 353", "435-3000" ],
            [ "Aconquija remis", "425-2251\/1543" ],
            [ "Cooperativa Los Cerros", "425-4433\/3344" ]
        ]
    },

    /**
     * @var array World subways. Format: Country [ City [0] | Link [1] | Image [2] | Other Images [3] [...] ]
     */
    subways: {
       "Alemania": [
          [
             "Berlín",
             "http:\/\/urbanrail.net\/eu\/de\/b\/berlin.htm",
             "http:\/\/urbanrail.net\/eu\/de\/b\/berlin-centre-map.png",
             [
                "http:\/\/urbanrail.net\/eu\/de\/b\/fotos\/U2-27-schoenhauser-al1.jpg",
                "http:\/\/urbanrail.net\/eu\/de\/b\/fotos\/U6-04-otisstr1.jpg",
                "http:\/\/urbanrail.net\/eu\/de\/b\/fotos\/U6-29-Alt-Mariendf1.jpg"
             ]
          ]
       ],
       "Algeria": [
          [
             "Algiers",
             "http:\/\/urbanrail.net\/af\/alg\/algiers.htm",
             "http:\/\/urbanrail.net\/af\/alg\/algiers-map.png",
             [
                "http:\/\/urbanrail.net\/af\/alg\/metro_siemens1.jpg",
                "http:\/\/urbanrail.net\/af\/alg\/AlstomCitadisAlger.jpeg"
             ]
          ]
       ],
       "Argentina": [
          [
             "Buenos Aires",
             "http:\/\/urbanrail.net\/am\/buen\/buenos-aires.htm",
             "http:\/\/urbanrail.net\/am\/buen\/buenos-aires-map.png",
             [
                "http:\/\/urbanrail.net\/am\/buen\/b-los-incas1x.jpg",
                "http:\/\/urbanrail.net\/am\/buen\/h-caseros1x.jpg",
                "http:\/\/urbanrail.net\/am\/buen\/b-tronador1x.jpg"
             ]
          ]
       ],
       "Australia": [
          [
             "Brisbane",
             "http:\/\/urbanrail.net\/au\/bris\/brisbane.htm",
             "http:\/\/urbanrail.net\/au\/bris\/brisbane-map.gif",
             [
                "http:\/\/urbanrail.net\/au\/bris\/QR-BowenHills.jpg",
                "http:\/\/urbanrail.net\/au\/bris\/Manly1.jpg",
                "http:\/\/urbanrail.net\/au\/bris\/Northgate1.jpg"
             ]
          ],
          [
             "Melbourne",
             "http:\/\/urbanrail.net\/au\/melb\/melbourne.htm",
             "http:\/\/urbanrail.net\/au\/melb\/melbourne-map.gif",
             [
                "http:\/\/urbanrail.net\/au\/melb\/Frankston1.jpg",
                "http:\/\/urbanrail.net\/au\/melb\/GlenWaverley1.jpg",
                "http:\/\/urbanrail.net\/au\/melb\/SouthernCross1.jpg"
             ]
          ],
          [
             "Perth",
             "http:\/\/urbanrail.net\/au\/perth\/perth.htm",
             "http:\/\/urbanrail.net\/au\/perth\/perth-map.gif",
             [
                "http:\/\/urbanrail.net\/au\/perth\/leederville1.jpg",
                "http:\/\/urbanrail.net\/au\/perth\/canning-bridge1.jpg",
                "http:\/\/urbanrail.net\/au\/perth\/north-fremantle1.jpg"
             ]
          ],
          [
             "Sidney",
             "http:\/\/urbanrail.net\/au\/sydney\/sydney.htm",
             "http:\/\/urbanrail.net\/au\/sydney\/sydney-centre-map.gif",
             [
                "http:\/\/urbanrail.net\/au\/sydney\/bardwellpark-millennium1.jpg",
                "http:\/\/urbanrail.net\/au\/sydney\/central-oscar1.jpg",
                "http:\/\/urbanrail.net\/au\/sydney\/monorail-worldsq1.jpg"
             ]
          ]
       ],
       "Austria": [
          [
             "Viena",
             "http:\/\/urbanrail.net\/eu\/at\/vienna\/wien.htm",
             "http:\/\/urbanrail.net\/eu\/at\/vienna\/wien-map.png",
             [
                "http:\/\/urbanrail.net\/eu\/at\/vienna\/U2-Donaustadtbr1.jpg",
                "http:\/\/urbanrail.net\/eu\/at\/vienna\/U1-08-Kaiserm%FChlen2-8.jpg",
                "http:\/\/urbanrail.net\/eu\/at\/vienna\/U1-03-Aderklaaer1x.jpg"
             ]
          ]
       ],
       "Brasil": [
          [
             "San Pablo",
             "http:\/\/urbanrail.net\/am\/spau\/sao-paulo.htm",
             "http:\/\/urbanrail.net\/am\/spau\/sao-paulo-map.gif",
             [
                "http:\/\/urbanrail.net\/am\/spau\/line3-pedro-II-1x.jpg",
                "http:\/\/urbanrail.net\/am\/spau\/line2-sumare-1x.jpg",
                "http:\/\/urbanrail.net\/am\/spau\/line7-santo-amaro1x.jpg"
             ]
          ]
       ],
       "Canadá": [
          [
             "Montreal",
             "http:\/\/urbanrail.net\/am\/monr\/montreal.htm",
             "http:\/\/urbanrail.net\/am\/monr\/montreal-map.png",
             [
                "http:\/\/urbanrail.net\/am\/monr\/lionel-groulx1x.jpg",
                "http:\/\/urbanrail.net\/am\/monr\/monk-1x.jpg",
                "http:\/\/urbanrail.net\/am\/monr\/sthenri-1x.jpg"
             ]
          ],
          [
             "Toronto",
             "http:\/\/urbanrail.net\/am\/toro\/toronto.htm",
             "http:\/\/urbanrail.net\/am\/toro\/toronto-map.gif",
             [
                "http:\/\/urbanrail.net\/am\/toro\/ttc24x.jpg",
                "http:\/\/urbanrail.net\/am\/toro\/ttc08x.jpg",
                "http:\/\/urbanrail.net\/am\/toro\/ttc17x.jpg"
             ]
          ],
          [
             "Vancouver",
             "http:\/\/urbanrail.net\/am\/vanc\/vancouver.htm",
             "http:\/\/urbanrail.net\/am\/vanc\/vancouver-map.gif",
             [
                "http:\/\/urbanrail.net\/am\/vanc\/E02-Burrard-33.JPG",
                "http:\/\/urbanrail.net\/am\/vanc\/E07-Nanaimo-02.JPG",
                "http:\/\/urbanrail.net\/am\/vanc\/E05-MainSt-SW-13.JPG"
             ]
          ]
       ],
       "Chile": [
          [
             "Santiago de Chile",
             "http:\/\/urbanrail.net\/am\/sant\/santiago.htm",
             "http:\/\/urbanrail.net\/am\/sant\/santiago-map-future.gif",
             [
                "http:\/\/urbanrail.net\/am\/sant\/L4-quillayes1x.jpg",
                "http:\/\/urbanrail.net\/am\/sant\/L4-vicente-valdes1x.jpg",
                "http:\/\/urbanrail.net\/am\/sant\/L5-Santa-Ana1x.jpg"
             ]
          ]
       ],
       "China": [
          [
             "Beijing",
             "http:\/\/urbanrail.net\/as\/cn\/beij\/beijing.htm",
             "http:\/\/urbanrail.net\/as\/cn\/beij\/beijing-map.png",
             [
                "http:\/\/urbanrail.net\/as\/cn\/beij\/line5-train.jpg",
                "http:\/\/urbanrail.net\/as\/cn\/beij\/beijing2x.jpg",
                "http:\/\/urbanrail.net\/as\/cn\/beij\/beijing3x.jpg"
             ]
          ],
          [
             "Guangzhou",
             "http:\/\/urbanrail.net\/as\/cn\/guan\/guangzhou.htm",
             "http:\/\/urbanrail.net\/as\/cn\/guan\/guangzhou-map-centre.png",
             [
                "http:\/\/urbanrail.net\/as\/cn\/guan\/outside_kengkou_station1x.jpg",
                "http:\/\/urbanrail.net\/as\/cn\/guan\/L1-new-train1x.jpg",
                "http:\/\/urbanrail.net\/as\/cn\/guan\/Line4_2x.jpg"
             ]
          ],
          [
             "Hong Kong",
             "http:\/\/urbanrail.net\/as\/cn\/hong\/hong-kong.htm",
             "http:\/\/urbanrail.net\/as\/cn\/hong\/metro_HK.png",
             [
                "http:\/\/urbanrail.net\/as\/cn\/hong\/hongkg-kowloonbay1x.jpg",
                "http:\/\/urbanrail.net\/as\/cn\/hong\/hk-9x.jpg"
             ]
          ],
          [
             "Shangai",
             "http:\/\/urbanrail.net\/as\/cn\/shan\/shanghai.htm",
             "http:\/\/urbanrail.net\/as\/cn\/shan\/shanghai-map.png",
             [
                "http:\/\/urbanrail.net\/as\/cn\/shan\/shan-line2-train1x.jpg",
                "http:\/\/urbanrail.net\/as\/cn\/shan\/shan-line3-train2x.jpg",
                "http:\/\/urbanrail.net\/as\/cn\/shan\/shan-line4-train1x.jpg"
             ]
          ]
       ],
       "Egipto": [
          [
             "Cairo",
             "http:\/\/urbanrail.net\/af\/cairo\/cairo.htm",
             "http:\/\/urbanrail.net\/af\/cairo\/cairo-map.gif",
             [
                "http:\/\/urbanrail.net\/af\/cairo\/L1-El-Malek-El-Saleh3x.jpg",
                "http:\/\/urbanrail.net\/af\/cairo\/L1-El-Malek-El-Saleh4x.jpg",
                "http:\/\/urbanrail.net\/af\/cairo\/L1-2-Sadat2x.jpg"
             ]
          ]
       ],
       "España": [
          [
             "Barcelona",
             "http:\/\/urbanrail.net\/eu\/es\/bcn\/barcelona.htm",
             "http:\/\/urbanrail.net\/eu\/es\/bcn\/barcelona-map.gif",
             [
                "http:\/\/urbanrail.net\/eu\/es\/bcn\/img\/CAF5000-can-boixeres1x.jpg",
                "http:\/\/urbanrail.net\/eu\/es\/bcn\/img\/l8-espanya1x.jpg",
                "http:\/\/urbanrail.net\/eu\/es\/bcn\/img\/L3-valldaura4x.jpg"
             ]
          ],
          [
             "Madrid",
             "http:\/\/urbanrail.net\/eu\/es\/mad\/madrid.htm",
             "http:\/\/urbanrail.net\/eu\/es\/mad\/madrid-map.gif",
             [
                "http:\/\/urbanrail.net\/eu\/es\/mad\/L5-casa-campo1k.jpg",
                "http:\/\/urbanrail.net\/eu\/es\/mad\/L12-pradillo1k.jpg",
                "http:\/\/urbanrail.net\/eu\/es\/mad\/ML1-Las-Tablas1x.jpg"
             ]
          ]
       ],
       "Estados Unidos": [
          [
             "Boston",
             "http:\/\/urbanrail.net\/am\/bost\/boston.htm",
             "http:\/\/urbanrail.net\/am\/bost\/boston-center-map.png",
             [
                "http:\/\/urbanrail.net\/am\/bost\/pix\/GR-C-ClevelandCircle1.jpg",
                "http:\/\/urbanrail.net\/am\/bost\/pix\/GR-E-Riverway1.jpg",
                "http:\/\/urbanrail.net\/am\/bost\/pix\/Blue-Suffolk-Downs1.jpg"
             ]
          ],
          [
             "Chicago",
             "http:\/\/urbanrail.net\/am\/chic\/chicago.htm",
             "http:\/\/urbanrail.net\/am\/chic\/chicago-map.gif",
             [
                "http:\/\/urbanrail.net\/am\/chic\/chic-chicago1x.jpg",
                "http:\/\/urbanrail.net\/am\/chic\/chic-chicago2x.jpg"
             ]
          ],
          [
             "Los Angeles",
             "http:\/\/urbanrail.net\/am\/lsan\/los-angeles.htm",
             "http:\/\/urbanrail.net\/am\/lsan\/los-angeles-map.gif",
             [
                "http:\/\/urbanrail.net\/am\/lsan\/RD08-Wilshire-Western-09.JPG",
                "http:\/\/urbanrail.net\/am\/lsan\/BL-Long-Beach-Transit-Mall-10.JPG",
                "http:\/\/urbanrail.net\/am\/lsan\/GR14-Redondo-Beach-13.JPG"
             ]
          ],
          [
             "New York",
             "http:\/\/urbanrail.net\/am\/nyrk\/new-york.htm",
             "http:\/\/urbanrail.net\/am\/nyrk\/new-york-map.png",
             [
                "http:\/\/urbanrail.net\/am\/nyrk\/subway\/RD1-SouthFerry10.jpg",
                "http:\/\/urbanrail.net\/am\/nyrk\/subway\/BL-42St-06.jpg",
                "http:\/\/urbanrail.net\/am\/nyrk\/subway\/G-Broadway-05.jpg"
             ]
          ],
          [
             "San Francisco",
             "http:\/\/urbanrail.net\/am\/snfr\/san-francisco.htm",
             "http:\/\/urbanrail.net\/am\/snfr\/sf-bay-area-map.gif",
             [
                "http:\/\/urbanrail.net\/am\/snfr\/mm-castro2x.jpg",
                "http:\/\/urbanrail.net\/am\/snfr\/mm-west-portal1x.jpg",
                "http:\/\/urbanrail.net\/am\/snfr\/mm-n-terminus1x.jpg"
             ]
          ],
          [
             "Washington",
             "http:\/\/urbanrail.net\/am\/wash\/washington.htm",
             "http:\/\/urbanrail.net\/am\/wash\/washington-map.gif",
             [
                "http:\/\/urbanrail.net\/am\/wash\/Silver-Spring1.jpg",
                "http:\/\/urbanrail.net\/am\/wash\/Anacostia1.jpg",
                "http:\/\/urbanrail.net\/am\/wash\/Largo-Town-Center1.jpg"
             ]
          ]
       ],
       "Francia": [
          [
             "París",
             "http:\/\/urbanrail.net\/eu\/fr\/paris\/paris.htm",
             "http:\/\/urbanrail.net\/eu\/fr\/paris\/paris-full-map.png",
             [
                "http:\/\/urbanrail.net\/eu\/fr\/paris\/fotos\/ligne1\/L1-17-bastille2x.jpg",
                "http:\/\/urbanrail.net\/eu\/fr\/paris\/fotos\/ligne2\/L2-16-Jaures-03x.jpg",
                "http:\/\/urbanrail.net\/eu\/fr\/paris\/fotos\/ligne5\/L5-04-Gare-Austerlitz-12x.jpg"
             ]
          ]
       ],
       "Holanda": [
          [
             "Amsterdam",
             "http:\/\/urbanrail.net\/eu\/nl\/ams\/amsterdam.htm",
             "http:\/\/urbanrail.net\/eu\/nl\/ams\/amsterdam-map.gif",
             [
                "http:\/\/urbanrail.net\/eu\/nl\/ams\/O01-CS2-01.jpg",
                "http:\/\/urbanrail.net\/eu\/nl\/ams\/O03-Waterlooplein2-14.jpg",
                "http:\/\/urbanrail.net\/eu\/nl\/ams\/O19-Ganzenhoef-20.jpg"
             ]
          ]
       ],
       "Hungría": [
          [
             "Budapest",
             "http:\/\/urbanrail.net\/eu\/hu\/budapest\/budapest.htm",
             "http:\/\/urbanrail.net\/eu\/hu\/budapest\/budapest-map.png",
             [
                "http:\/\/urbanrail.net\/eu\/hu\/budapest\/pix\/M1\/M1-Bajcsy-Zsilinszky-ut1.jpg",
                "http:\/\/urbanrail.net\/eu\/hu\/budapest\/pix\/M3\/m3-kalvinter2.JPG",
                "http:\/\/urbanrail.net\/eu\/hu\/budapest\/pix\/hev-batthyany-ter1.jpg"
             ]
          ]
       ],
       "India": [
          [
             "Delhi",
             "http:\/\/urbanrail.net\/as\/delh\/delhi.htm",
             "http:\/\/urbanrail.net\/as\/delh\/delhi-map.png",
             [
                "http:\/\/urbanrail.net\/as\/delh\/delhi-metro1.jpg",
                "http:\/\/urbanrail.net\/as\/delh\/delhi-metro2.jpg"
             ]
          ]
       ],
       "Inglaterra": [
          [
             "Londres",
             "http:\/\/urbanrail.net\/eu\/uk\/lon\/london.htm",
             "http:\/\/urbanrail.net\/eu\/uk\/lon\/all-london-map.gif",
             [
                "http:\/\/urbanrail.net\/eu\/uk\/lon\/img\/OG-DalstonJctn-01.JPG",
                "http:\/\/urbanrail.net\/eu\/uk\/lon\/img\/ml-baker-st1.jpg",
                "http:\/\/urbanrail.net\/eu\/uk\/lon\/img\/nl-clapham-north1.jpg"
             ]
          ]
       ],
       "Irán": [
          [
             "Teherán",
             "http:\/\/urbanrail.net\/as\/tehr\/tehran.htm",
             "http:\/\/urbanrail.net\/as\/tehr\/tehran-map.png",
             [
                "http:\/\/urbanrail.net\/as\/tehr\/L1-javanmard2x.jpg",
                "http:\/\/urbanrail.net\/as\/tehr\/L1-javanmard1x.jpg",
                "http:\/\/urbanrail.net\/as\/tehr\/L1-panzdah1x.jpg"
             ]
          ]
       ],
       "Italia": [
          [
             "Milán",
             "http:\/\/urbanrail.net\/eu\/it\/mil\/milano.htm",
             "http:\/\/urbanrail.net\/eu\/it\/mil\/milano-map.png",
             [
                "http:\/\/urbanrail.net\/eu\/it\/mil\/S-bovisa1x.jpg",
                "http:\/\/urbanrail.net\/eu\/it\/mil\/T-cairoli1x.jpg",
                "http:\/\/urbanrail.net\/eu\/it\/mil\/S-pta-garibaldi2x.jpg"
             ]
          ],
          [
             "Roma",
             "http:\/\/urbanrail.net\/eu\/it\/rom\/roma.htm",
             "http:\/\/urbanrail.net\/eu\/it\/rom\/roma-map.gif",
             [
                "http:\/\/urbanrail.net\/eu\/it\/rom\/fotos\/A-Vittorio-Emanuele3x.jpg",
                "http:\/\/urbanrail.net\/eu\/it\/rom\/fotos\/B-Colosseo1x.jpg",
                "http:\/\/urbanrail.net\/eu\/it\/rom\/fotos\/Roma-Nord-SaxaRubra1x.jpg"
             ]
          ]
       ],
       "Japón": [
          [
             "Osaka",
             "http:\/\/urbanrail.net\/as\/jp\/osaka\/osaka.htm",
             "http:\/\/urbanrail.net\/as\/jp\/osaka\/osaka-centre-map.png",
             [
                "http:\/\/urbanrail.net\/as\/jp\/osaka\/Midosuji-Line-Train2.jpg",
                "http:\/\/urbanrail.net\/as\/jp\/osaka\/Yotsubashi-Line-Train.jpg",
                "http:\/\/urbanrail.net\/as\/jp\/osaka\/NagahoriTsurumiRyokuchi-Line-OsakaBusinessPark3.jpg"
             ]
          ],
          [
             "Tokyo",
             "http:\/\/urbanrail.net\/as\/jp\/tokyo\/tokyo.htm",
             "http:\/\/urbanrail.net\/as\/jp\/tokyo\/tokyo-map.png",
             [
                "http:\/\/urbanrail.net\/as\/jp\/tokyo\/tozai-train2x.jpg",
                "http:\/\/urbanrail.net\/as\/jp\/tokyo\/trta05nx.jpg"
             ]
          ]
       ],
       "Korea del Sur": [
          [
             "Busan",
             "http:\/\/urbanrail.net\/as\/kr\/busan\/busan.htm",
             "http:\/\/urbanrail.net\/as\/kr\/busan\/busan-map.png",
             [
                "http:\/\/urbanrail.net\/as\/kr\/busan\/L2-Haeundae1.jpg",
                "http:\/\/urbanrail.net\/as\/kr\/busan\/L2-Haeundae2.jpg",
                "http:\/\/urbanrail.net\/as\/kr\/busan\/L2-Suyeong1.jpg"
             ]
          ],
          [
             "Seoul",
             "http:\/\/urbanrail.net\/as\/kr\/seoul\/seoul.htm",
             "http:\/\/urbanrail.net\/as\/kr\/seoul\/seoul-map.png",
             [
                "http:\/\/urbanrail.net\/as\/kr\/seoul\/Seoul-Subway-L1-1.jpg",
                "http:\/\/urbanrail.net\/as\/kr\/seoul\/Seoul-Subway-L2-1.jpg",
                "http:\/\/urbanrail.net\/as\/kr\/seoul\/Seoul-Subway-L6-2.jpg"
             ]
          ]
       ],
       "México": [
          [
             "Ciudad de México",
             "http:\/\/urbanrail.net\/am\/mexi\/mexico.htm",
             "http:\/\/urbanrail.net\/am\/mexi\/mexico-map.png",
             [
                "http:\/\/urbanrail.net\/am\/mexi\/L5-Oceania1.jpg",
                "http:\/\/urbanrail.net\/am\/mexi\/L12-Olivos1.jpg",
                "http:\/\/urbanrail.net\/am\/mexi\/TL1.jpg"
             ]
          ]
       ],
       "República Checa": [
          [
             "Praga",
             "http:\/\/urbanrail.net\/eu\/cz\/praha\/praha.htm",
             "http:\/\/urbanrail.net\/eu\/cz\/praha\/praha-map.gif",
             [
                "http:\/\/urbanrail.net\/eu\/cz\/praha\/C-Strizkov1.jpg",
                "http:\/\/urbanrail.net\/eu\/cz\/praha\/C-Kobylisy1.jpg"
             ]
          ]
       ],
       "Rusia": [
          [
             "Moscú",
             "http:\/\/urbanrail.net\/eu\/ru\/mos\/moskva.htm",
             "http:\/\/urbanrail.net\/eu\/ru\/mos\/moskva-full-map.gif",
             [
                "http:\/\/urbanrail.net\/eu\/ru\/mos\/img\/M5-Belorusskaya1x.jpg",
                "http:\/\/urbanrail.net\/eu\/ru\/mos\/img\/M5-Komsomolskaya2x.jpg",
                "http:\/\/urbanrail.net\/eu\/ru\/mos\/img\/M4-Delovoy-Tsentr1x.jpg"
             ]
          ],
          [
             "St Petersburgo",
             "http:\/\/urbanrail.net\/eu\/ru\/pet\/petersburg.htm",
             "http:\/\/urbanrail.net\/eu\/ru\/pet\/petersburg-map.png",
             [
                "http:\/\/urbanrail.net\/eu\/ru\/pet\/M1-2_Technolog_Inst.2x.JPG",
                "http:\/\/urbanrail.net\/eu\/ru\/pet\/pet-vosstaniya2x.jpg"
             ]
          ]
       ],
       "Singapur": [
          [
             "Singapur",
             "http:\/\/urbanrail.net\/as\/sing\/singapore.htm",
             "http:\/\/urbanrail.net\/as\/sing\/singapore-centre-map.png",
             [
                "http:\/\/urbanrail.net\/as\/sing\/sengkang-lrt-04x.jpg",
                "http:\/\/urbanrail.net\/as\/sing\/nel-train1x.jpg"
             ]
          ]
       ],
       "Taiwán": [
          [
             "Taipei",
             "http:\/\/urbanrail.net\/as\/taip\/taipei.htm",
             "http:\/\/urbanrail.net\/as\/taip\/taipei-map.gif",
             [
                "http:\/\/urbanrail.net\/as\/taip\/mucha1x.jpg",
                "http:\/\/urbanrail.net\/as\/taip\/Muzha-Line2x.jpg",
                "http:\/\/urbanrail.net\/as\/taip\/chiantan1x.jpg"
             ]
          ]
       ],
       "Tailandia": [
          [
             "Banglades",
             "http:\/\/urbanrail.net\/as\/bang\/bangkok.htm",
             "http:\/\/urbanrail.net\/as\/bang\/bangkok-map.png",
             [
                "http:\/\/urbanrail.net\/as\/bang\/bangkok_ARL_1x.jpg",
                "http:\/\/urbanrail.net\/as\/bang\/bangkok_ARL_3x.jpg",
                "http:\/\/urbanrail.net\/as\/bang\/makkasan_CAT_1x.jpg"
             ]
          ]
       ],
       "Túnez": [
          [
             "Tunis",
             "http:\/\/urbanrail.net\/af\/tunis\/tunis.htm",
             "http:\/\/urbanrail.net\/af\/tunis\/tunis-map.gif",
             [
                "http:\/\/urbanrail.net\/af\/tunis\/Ligne3_2x.JPG",
                "http:\/\/urbanrail.net\/af\/tunis\/Lignex_1x.JPG",
                "http:\/\/urbanrail.net\/af\/tunis\/Citadis1x.jpg"
             ]
          ]
       ]
    },

    /**
     * @var array Metrics names and rates.
     */
    metrics: {
        "names": {
            "centimeter2": "Centímetros cuadrados",
            "meter2": "Metros cuadrados",
            "hectare": "Hectáreas",
            "kilometer2": "Kilómetros cuadrados",
            "inch2": "Pulgadas cuadradas",
            "yard2": "Yardas cuadradas",
            "acre": "Acres",
            "mile2": "Millas cuadradas",
            "millimetre": "Milímetros",
            "centimetre": "Centímetros",
            "metre": "Metros",
            "kilometre": "Kilómetros",
            "inch": "Pulgadas",
            "foot": "Pies",
            "yard": "Yardas",
            "mile": "Millas",
            "celsius": "Celsius a Fahrenheit",
            "fahrenheit": "Fahrenheit a Celsius",
            "millimeters3": "Milímetros cúbicos",
            "centimetre3": "Centímetros cúbicos",
            "decimetre3": "Decímetros cúbicos",
            "metre3": "Metros cúbicos",
            "litre": "Litros",
            "hectolitre": "Hectolitros",
            "millilitres": "Mililitros",
            "inch3": "Pulgadas cúbicas",
            "foot3": "Pies cúbicos",
            "ukFluidOunce": "Onza (UK)",
            "ukPint": "Pinta (UK)",
            "ukGallon": "Galón (UK)",
            "usFluiOunce": "Onza (US)",
            "usPint": "Pinta (US)",
            "usGallon": "Galón (US)",
            "milligram": "Miligramo",
            "gram": "Gramo",
            "kilogram": "Kilogramo",
            "tonne": "Tonelada",
            "ounce": "Onza",
            "pound": "Libra",
            "stone": "Stones",
            "hundredweight": "Quintales",
            "ukTon": "Tonelada (UK)"
        },
        "rates": {
            "area": {
                "centimeter2": 1,
                "meter2": 0.0001,
                "hectare": 1e-8,
                "kilometer2": 1e-10,
                "inch2": 0.15500031000062,
                "yard2": 0.00011960291831120679,
                "acre": 2.471027206009538e-8,
                "mile2": 3.861003861003861e-11
            },
            "length": {
                "millimetre": 1,
                "centimetre": 0.1,
                "metre": 0.001,
                "kilometre": 0.000001,
                "inch": 0.03937007874015748,
                "foot": 0.0032808398950131233,
                "yard": 0.0010936132983377078,
                "mile": 6.213881811967936e-7
            },
            "temp": {
                "celsius": "celsius",
                "fahrenheit": "fahrenheit"
            },
            "volume": {
                "millimeters3": 1000,
                "centimetre3": 1,
                "decimetre3": 0.001,
                "metre3": 0.000001,
                "litre": 0.001,
                "hectolitre": 0.00001,
                "millilitres": 0.00001,
                "inch3": 0.06102398242509306,
                "foot3": 0.0000353356890459364,
                "ukFluidOunce": 0.033813484817745314,
                "ukPint": 0.0017596339961288051,
                "ukGallon": 0.00021996876443545015,
                "usFluiOunce": 0.033813484817745314,
                "usPint": 0.002113718030014796,
                "usGallon": 0.00021996876443545015
            },
            "weight": {
                "milligram": 1000000,
                "gram": 1000,
                "kilogram": 1,
                "tonne": 0.001,
                "ounce": 35.27336860670194,
                "pound": 2.2045855379188715,
                "stone": 0.15747287529723006,
                "hundredweight": 0.00001968426439903941,
                "ukTon": 0.0009842065274173282
            }
        }
    },

    /**
     * @var array Emergency numbers. Format: Country [0] | Police [1] | Medical [2] | Fire [3] | Notes [4]
     */
    emergencyNumbers: [
        [ "Afghanistan", "119", "102", "119", "Rewards for Justice: 010-8600-070" ],
        [ "Albania", "129", "127", "128", "Traffic police – 126" ],
        [ "Algeria", "17", "14", "14", "National Gendarmerie : 1055; Counter Terrorist Unit : 1548; support for children : 3033." ],
        [ "Argentina", "101", "107", "100", "Emergency dispatcher for Buenos Aires (city), Santa Fe (city), Rosario (city), Salta and Buenos Aires (provinces) 911." ],
        [ "Armenia", "102", "103", "101", "Search and rescue – 108; Gas leaks – 104; Traffic police – 177" ],
        [ "Australia", "000 or 112", "000 or 112", "000 or 112", "From a mobile phone – 112 or 000. No other emergency numbers, such as 999 or 911, are redirected. State Emergency Service (ACT, VIC, NSW, QLD, SA, WA) – 132 500; From a Textphone/TTY call the National Relay Service on 106; Non Emergency – Police Assistance Line – 131 444; (NSW, QLD, SA, WA, NT, TAS, ACT); Crime Stoppers – 1800 333 000; Threats to national security – 1800 123 400;" ],
        [ "Austria", "112", "112", "112", "Police – 133; Ambulance – 144; Fire – 122; Gas leaks – 128; Alpine rescue – 140; On-duty medical unit – 141; crisis-hotline – 142; support for children and teens – 147." ],
        [ "Azerbaijan", "102", "103", "101", "Traffic police – 126" ],
        [ "Bahrain", "999", "999", "999", "" ],
        [ "Bangladesh", "999", "", "", "For the cities of Dhaka and Chittagong only" ],
        [ "Barbados", "211", "511", "311", "References: Police, Ambulance, Fire" ],
        [ "Belarus", "102", "103", "101", "Gas leaks – 104; also 112 is redirected to 101 on velcom GSM-operator mobile phones." ],
        [ "Belgium", "112", "112", "112", "Police – 101; Ambulance / Firebrigade – 100; Missing children – 116000; Mental problems/suicide – 106; Red Cross – 105." ],
        [ "Bolivia", "110", "118", "119", "The 911 number forwards to 110" ],
        [ "Bosnia and Herzegovina", "122", "124", "123", "From mobile phones, dial the international emergency numbers 112, 911 and 08 for information about the local emergency numbers that are to be dialed (122, 123 and 124)." ],
        [ "Brazil", "190", "192", "193", "Federal highway police 191; federal police 194; civil police 197; state highway police 198; civil defense 199; human rights 100; emergency number for Mercosul area 128; 112 will be redirected to 190 when dialed from mobile phones and 911 will also be redirected to the police number (190) See also: Brazilian telephone numbering plan#Public utility." ],
        [ "Bulgaria", "112", "112", "112", "Police – 166, Ambulance – 150; Fire – 160." ],
        [ "Cambodia", "117", "117", "117", "" ],
        [ "Canada", "911", "911", "911", "Non-emergency 311 in certain areas. Some rural areas still lack 911 service. 112 is redirected to 911 on GSM mobile phones. *677 connects to the Provincial Police within the province of Ontario and *4141 links to the Sûreté du Québec in the province ofQuebec." ],
        [ "Cayman Islands", "911", "911", "911", "" ],
        [ "Chad", "17", "", "18", "" ],
        [ "Chile", "133", "131", "132", "" ],
        [ "China", "110", "120", "119", "Traffic accident: 122. Private ambulance service in Beijing: 999. Dialling 112 on GSM mobile phones in China only plays a pre-recorded bilingual message about other emergency numbers." ],
        [ "Colombia", "112 or 123", "112 or 123", "112 or 123", "Traffic accidents 127, GAULA (anti-kidnapping) 165. More specialized three-digit numbers are available; check the local Yellow Pages for more information." ],
        [ "Costa Rica", "911 or 112", "911 or 112", "911 or 112", "" ],
        [ "Croatia", "112", "112", "112", "Police – 192; Ambulance – 94; Fire – 193; Search and rescue at sea – 9155; Road help – 1987." ],
        [ "Cyprus", "112", "112", "112", "Alternative numbers: 199" ],
        [ "Czech Republic", "112", "112", "112", "Police – 158; Ambulance – 155; Fire – 150; Municipal police – 156." ],
        [ "Denmark", "112", "112", "112", "Nearest Police (non-urgent) – 114. The old emergency number was 000." ],
        [ "Djibouti", "17", "", "18", "" ],
        [ "Dominican Republic", "911 or 112", "911 or 112", "911 or 112", "From a mobile phone – 112 or 911. Also, 112 is redirected to 911 for GSM mobile phones[12]." ],
        [ "East Timor", "112", "112", "112", "" ],
        [ "Ecuador", "911", "911", "911", "All types of emergencies in Guayaquil (112 landlines, *112 mobile  phones), traffic accidents in Guayaquil 103, red cross 131." ],
        [ "Egypt", "122", "123", "180", "Tourist Police – 126; Traffic Police – 128; Electricity Emergency – 121; Natural Gas Supply Emergency – 129." ],
        [ "El Salvador", "911", "911", "911", "" ],
        [ "Estonia", "112", "112", "112", "Police – 110." ],
        [ "Faroe Islands", "112", "112", "112", "" ],
        [ "Fiji", "911", "911", "9170", "" ],
        [ "Finland", "112", "112", "112", "The old emergency number was 000." ],
        [ "France", "112", "112", "112", "Police – 17; Hospital-based Ambulance (SAMU) – 15; Fire Service-based Ambulance – 18; Fire – 18. 112 calls are answered by 15 or 18 dispatchers, depending on the callers location. 115 for homeless." ],
        [ "French Guiana", "17", "15", "18", "" ],
        [ "Georgia", "112", "112", "112", "In effect from November 11, 2012. Till then both this number and old standard numbers (111 Fire dpt./Emergency, 122 Police, 113 Ambulance) will be active." ],
        [ "Germany", "112", "112", "112", "Additional number for police - 110" ],
        [ "Ghana", "191", "193", "192", "999 for any of the 3 services." ],
        [ "Gibraltar", "112 or 199", "112 or 199", "112 or 199", "Fire and Ambulance – 190" ],
        [ "Greece", "112", "112", "112", "Police – 100; Ambulance – 166; Fire – 199; Forest fire – 1591; Coast guard emergency intervention – 108; Counter-narcotics immediate intervention – 109; Tourist police – 171; Emergency social aid – 197." ],
        [ "Greenland", "112", "112", "112", "112 works from only mobile phones; fixed line phones must call the local police or hospital." ],
        [ "Guatemala", "110 or 120", "122 or 123 or 1554", "122 or 123 or 1554", "Notes: The number 911 exists only for private services like medical insurance." ],
        [ "Guyana", "911", "913", "912", "" ],
        [ "Haiti", "118", "118", "118", "" ],
        [ "Honduras", "199", "199", "199", "" ],
        [ "Hong Kong", "999", "999", "999", "992 as fax on fixed line and as SMS number on mobile phones (only for subscribers with disabilities) connects to all emergency services. Standard GSM emergency number 112 is supported in mobile networks." ],
        [ "Hungary", "112", "112", "112", "Police – 107; Ambulance – 104; Fire – 105." ],
        [ "Iceland", "112", "112", "112", "Police in Reykjavík Capital Area Non-urgent – 4441000. Also 911 is redirected to 112 for GSM mobile phones." ],
        [ "India", "100", "102,1298,108,112", "101", "Chennai Traffic Police: 103. Delhi Traffic Police: 1095. Kolkata Traffic Police: 1073. Bangalore uses both 108 and 100. 108 is used in many states." ],
        [ "Indonesia", "110", "118,119", "113", "Standard GSM emergency number 112 is supported in mobile networks. Search and rescue team: 115. Natural disaster: 129. Electricity: 123." ],
        [ "Iran", "110", "115", "125", "110 connects to all emergency services. Standard GSM emergency number 112 is supported in mobile networks." ],
        [ "Ireland", "999 or 112", "999 or 112", "999 or 112", "The emergency telephone number to dial in Ireland for Fire, Gardaí (Irish Police), Ambulance, Irish Marine Emergency Service and The Mountain and Cave Rescue is 999 or 112. These numbers are to be used only in an emergency." ],
        [ "Israel", "100", "101", "102", "Standard GSM emergency number 112 is supported in mobile networks. Israel Electric Corporation: 103. Municipal hazards that are not emergencies: 106 (works in any municipality)." ],
        [ "Italy", "112", "112", "112", "Ambulance – 118; Fire – 115; (State Police) – 113; (Carabinieri) – 112; (Forest Service) – 1515; Guardia di Finanza (Customs/Financial Police) – 117; Coast guard – 1530. Also 911 is redirected to 112." ],
        [ "Jamaica", "119", "110", "110", "" ],
        [ "Japan", "110", "119", "119", "Emergency at sea: 118." ],
        [ "Jordan", "911, 112", "911, 112", "911, 112", "" ],
        [ "Kazakhstan", "102", "103", "101", "Standard GSM emergency number 112 is supported in mobile networks. Gas leaks: 104." ],
        [ "Kuwait", "112", "112", "112", "Used to be 777." ],
        [ "Latvia", "112", "112", "112", "Police – 02; Ambulance – 03, 113 ; Fire – 01; Gas leaks – 04." ],
        [ "Lebanon", "112,999", "140", "175", "" ],
        [ "Lithuania", "112", "112", "112", "Police – 02 (TEO LT, AB)/ 102 (Omnitel)/ 022 (Bitė/Tele2); Ambulance – 03 (TEO LT, AB)/ 103 (Omnitel)/ 033 (Bitė/Tele2); Fire – 01 (TEO LT, AB)/ 101 (Omnitel)/ 011 (Bitė/Tele2). The non-112 numbers are for separate emergency services differ in distinct telecommunications networks, whereas 112 is available on all networks. The old numbers will be cancelled in the future.[25]" ],
        [ "Luxembourg", "112", "112", "112", "Police – 113." ],
        [ "Macau", "999", "999", "999", "" ],
        [ "Malaysia", "999", "999", "999", "Standard GSM emergency number 112 is supported in mobile networks." ],
        [ "Maldives", "102", "102", "102", "Police service: 119 (can also be dialled from mobile phones). Civil defence: 118." ],
        [ "Mali", "17", "15", "18", "" ],
        [ "Malta", "112", "112", "112", "Previously: Police 191; Ambulance 196; Fire 199." ],
        [ "Mauritius", "999", "114", "115", "" ],
        [ "Mexico", "66", "65", "68", "066 can be used as a general emergency number, In densely populated areas, 911 is redirected to the proper number." ],
        [ "Moldova", "902", "903", "901", "112 is being implemented by 2010." ],
        [ "Monaco", "112", "112", "112", "Police – 17, Ambulance, severe – 15; Ambulance, less severe – 18, Fire – 18. 112 calls are answered by 15 or 18 dispatchers, depending on the callers location. 115 for homeless." ],
        [ "Mongolia", "102", "103", "101", "100 connects to all emergency services." ],
        [ "Montenegro", "112", "112", "112", "Police – 122; Ambulance – 124; Fire – 123." ],
        [ "Morocco", "City 19 Royal Gendarmerie177", "15", "15", "" ],
        [ "Myanmar", "191", "191", "191", "" ],
        [ "Nepal", "100,103", "102", "101", "Standard GSM emergency number 112 is supported in mobile networks." ],
        [ "Netherlands", "112", "112", "112", "Police (non-urgent) – 0900-8844. Also 911 is redirected to 112 on GSM mobile phones." ],
        [ "New Zealand", "111", "111", "111", "*555 traffic (from mobile phones only) 911 and 112 both redirect to the 111 service if dialed from a GSM mobile.[27] 0800 161616 Deaf TTY 0800 161610 deaf fax 111 deaf SMS (registered mobile phones only)" ],
        [ "Nicaragua", "118", "118", "118", "" ],
        [ "Nigeria", "199", "", "", "199 for any of the 3 services." ],
        [ "North Korea", "819[20]", "819[20]", "819[20]", "Standard GSM emergency number 112 is supported in mobile networks. Operators mostly speak only Korean, some may speak English, Russian or Chinese." ],
        [ "Norway", "112", "113", "110", "Police (non-urgent) – 02800; Child-Abuse and Family Violence - 116 111; TDD (textphone) - 1412" ],
        [ "Oman", "999", "999", "999", "" ],
        [ "Pakistan", "15", "115,1122", "16", "15 and 1122 connect to all emergency services. Standard GSM emergency number 112 is supported in mobile networks. Traffic police: 1915." ],
        [ "Panama", "911 or 112", "911 or 112", "911 or 112", "" ],
        [ "Paraguay", "911", "911", "911", "" ],
        [ "Peru", "105", "117", "116", "Civil defense (disasters) 115 – Domestic violence helpline 100" ],
        [ "Philippines", "117", "117", "117", "117 may also be texted from mobile phones. Standard GSM emergency number 112 as well as North American emergency number 911 are supported in mobile networks. Motorist assistance: 136 (Metro Manila only). Child abuse hotline (Bantay Bata): 163." ],
        [ "Poland", "112", "112", "112", "Police – 997; Ambulance – 999; Fire – 998; Municipal police – 986; natural gas/LPG emergencies – 992." ],
        [ "Portugal", "112", "112", "112", "Forest fire 117" ],
        [ "Qatar", "999", "999", "999", "" ],
        [ "Republic of Macedonia", "112", "112", "112", "Police – 192; Ambulance – 194; Fire – 193." ],
        [ "Romania", "112", "112", "112", "Former short numbers: (Police) – 955; Ambulance – 961; (Firefighters) – 981; (Gendarmerie) – 956; Civil Protection – 982; Family Violence – 983" ],
        [ "Russia", "112", "112", "112", "Police – 02; Ambulance – 03; Fire, Search and rescue – 01; Gas leaks – 04. The new number 112 began operating in 2011" ],
        [ "Rwanda", "112", "", "", "" ],
        [ "Saint Pierre and Miquelon", "17", "15", "18", "Same as France" ],
        [ "San Marino", "113", "118", "115", "" ],
        [ "Saudi Arabia", "999", "997", "998", "Traffic police: 993. Emergency rescue: 911, 112 or 08." ],
        [ "Serbia", "112", "112", "112", "Police – 192; Ambulance – 194; Fire – 193" ],
        [ "Sierra Leone", "19", "999", "", "" ],
        [ "Singapore", "999", "995", "995", "Standard GSM emergency number 112 is supported for foreign mobile phones that use incoming roaming service in Singapore." ],
        [ "Slovakia", "112", "112", "112", "Police – 158; Ambulance – 155; Fire – 150" ],
        [ "Slovenia", "112", "112", "112", "Police – 113" ],
        [ "Solomon Islands", "999", "999", "999", "There are also local numbers for each service in each urban centre. These local numbers may be quicker than dialling 999.[28]" ],
        [ "South Africa", "10111", "10177", "10111", "112 from mobile phones (soon also from fixed line phones)." ],
        [ "South Korea", "112", "119", "119", "National security hotline: 111. Reporting spies: 113. Missing person hotline: 182. 114 connects to the phone service provider." ],
        [ "Spain", "112", "112", "112", "National – 091; Local Police – 092; Ambulance – 061; Fire – 080,085; Civil Guard – 062; Mossos dEsquadra (Catalan police) 088" ],
        [ "Sri Lanka", "119,118", "110", "111", "Accident service: 11-2691111." ],
        [ "Sudan", "999", "999", "999", "Traffic Police 777777" ],
        [ "Suriname", "115", "115", "115", "" ],
        [ "Sweden", "112", "112", "112", "Non-urgent police – 11414. Non-urgen medical - 1177. The old emergency number was 90 000." ],
        [ "Switzerland", "112", "112", "112", "Police – 117; Ambulance – 144; Fire – 118; Poison – 145; Road emergency – 140; Psychological support (free and anonymous) – 143; Psychological support for teens and children (free and anonymous) – 147; Helicopter air-rescue (Rega) – 1414 or by radio on 161.300 MHz; Air rescue (Air Glaciers) (in Valais only) – 1415.[26]" ],
        [ "Syria", "112", "110", "113", "" ],
        [ "Taiwan", "110", "119", "119", "Standard GSM emergency number 112 is supported in mobile networks." ],
        [ "Tajikistan", "102", "103", "101", "Standard GSM emergency number 112 is supported in mobile networks. Gas leaks: 104." ],
        [ "Thailand", "191", "1669", "199", "999 connects to all emergency services. Standard GSM emergency number 112 is supported in mobile networks." ],
        [ "Trinidad and Tobago", "999", "990", "990", "" ],
        [ "Tunisia", "197", "190", "198", "National guard – 193." ],
        [ "Turkey", "155", "112", "110", "to be unified at 112 as only emergency number by 2015; Gendarmerie – 156; Coast Guard – 158; Forest Fire – 177" ],
        [ "Turkish Republic of Northern Cyprus", "112", "112", "112", "Police - 115; Fire - 199; Ambulance - 112." ],
        [ "Uganda", "999", "", "", "" ],
        [ "Ukraine", "112", "112", "112", "Police – 102; Ambulance – 103; Fire – 101; Gas leaks – 104." ],
        [ "United Arab Emirates", "999,112", "998,999", "997", "" ],
        [ "United Kingdom", "999 or 112", "999 or 112", "999 or 112", "In 2006 101 was made available as a non-emergency number for police (and in some areas local authorities) in England and Wales. 111 was made available (in England and Wales) as a non-emergency number for health issues. 999 and 112 can be used from any phone. When dialing 999 or 112, the caller is connected with a telecoms operator such as BT, Cable & Wireless, Railnet, or Kingston Communications, and the operator will ask which service is required. Operators have access to interpretation services covering 170 languages. Deaf people can text 18000 for the emergency services (after registration). 999 was first introduced on 30 June 1937 in London." ],
        [ "United States of America", "911", "911", "911", "Various services available through regional or national N11 codes (e.g.: 311 non-emergency police or city services) in certain areas. Also 112 is redirected to 911 for GSM mobile phones.[29]" ],
        [ "Uruguay", "911", "911", "911", "" ],
        [ "Vanuatu", "112", "112", "112", "" ],
        [ "Vatican City", "113", "118", "115", "112 is redirected to 113 on GSM mobile phones" ],
        [ "Venezuela", "171", "171", "171", "" ],
        [ "Vietnam", "113", "115", "114", "" ],
        [ "Zambia", "999", "991", "993", "112 from mobile phones (see www.zambiatourism.com/travel/listings/emergency.htm)." ],
        [ "Zimbabwe", "995", "994", "993", "999 for any of the 3 services. 112 from mobile phones" ]
    ],

    /**
     * @var array World phone prefixes. Format: Country [ City [0] | Prefix [1] ]
     */
    dialCodes: {
        "Afghanistan": [
            [ "Baghlan", "+93 58" ],
            [ "Balkh", "+93 50" ],
            [ "Bamyan", "+93 27" ],
            [ "Ghazni", "+93 31" ],
            [ "Heart", "+93 40" ],
            [ "Herat", "+93 40" ],
            [ "Jalalabad", "+93 60" ],
            [ "Kabul", "+93 20" ],
            [ "Kandahar", "+93 30" ],
            [ "Kunduz", "+93 51" ],
            [ "Mazar", "+93 50" ],
            [ "Mazari Sharif", "+93 50" ],
            [ "Tahiti", "+93" ]
        ],
        "Albania": [
            [ "Babicë", "+355 394" ],
            [ "Bajram Curri", "+355 213" ],
            [ "Bajzë", "+355 211" ],
            [ "Ballsh", "+355 313" ],
            [ "Berat", "+355 32" ],
            [ "Bilisht", "+355 811" ],
            [ "Bulqizë", "+355 219" ],
            [ "Burrel", "+355 217" ],
            [ "Cakran", "+355 387" ],
            [ "Çërrik", "+355 581" ],
            [ "Çorovodë", "+355 312" ],
            [ "Delvinë", "+355 815" ],
            [ "Divjakë", "+355 371" ],
            [ "Durrës", "+355 52" ],
            [ "Elbasan", "+355 545" ],
            [ "Ersekë", "+355 812" ],
            [ "Fier", "+355 34" ],
            [ "Fushë", "+355 563" ],
            [ "Gjirokastër", "+355 84" ],
            [ "Gramsh", "+355 513" ],
            [ "Himarë", "+355 393" ],
            [ "Kavajë", "+355 554" ],
            [ "Koplik", "+355 211" ],
            [ "Korçë", "+355 82" ],
            [ "Krujë", "+355 511" ],
            [ "Krumë", "+355 214" ],
            [ "Ksamil", "+355 893" ],
            [ "Kuçovë", "+355 311" ],
            [ "Kukës", "+355 242" ],
            [ "Laç", "+355 53" ],
            [ "Levan", "+355 388" ],
            [ "Lezhë", "+355 215" ],
            [ "Libohovë", "+355 881" ],
            [ "Librazhd", "+355 514" ],
            [ "Lushnjë", "+355 35" ],
            [ "Maliq", "+355 861" ],
            [ "Mamurras", "+355 561" ],
            [ "Memaliaj", "+355 885" ],
            [ "Orikum", "+355 391" ],
            [ "Peqin", "+355 512" ],
            [ "Përmet", "+355 813" ],
            [ "Përrenjas", "+355 591" ],
            [ "Peshkopi", "+355 218" ],
            [ "Pogradec", "+355 832" ],
            [ "Poliçan", "+355 368" ],
            [ "Pukë", "+355 212" ],
            [ "Rrëshen", "+355 216" ],
            [ "Rrogozhinë", "+355 577" ],
            [ "Sarandë", "+355 852" ],
            [ "Selenicë", "+355 392" ],
            [ "Shijak", "+355 571" ],
            [ "Shkoder", "+355 22" ],
            [ "Tepelenë", "+355 814" ],
            [ "Tirana", "+355 4" ],
            [ "Tirane", "+355 4" ],
            [ "Tropojë", "+355 213" ],
            [ "Ura Vajgurore", "+355 361" ],
            [ "Vlorë", "+355 33" ],
            [ "Vodafone", "+355 69" ]
        ],
        "Algeria": [
            [ "Adrar", "+213 49" ],
            [ "Algiers", "+213 21" ],
            [ "Annaba", "+213 38" ],
            [ "Batna", "+213 33" ],
            [ "Béchar", "+213 49" ],
            [ "Bejaïa", "+213 34" ],
            [ "Beskra", "+213 33" ],
            [ "Bordj Bou Arreridj", "+213 35" ],
            [ "Chlef", "+213 27" ],
            [ "Constantine", "+213 31" ],
            [ "El Oued", "+213 32" ],
            [ "Ghardaia", "+213 29" ],
            [ "Illizi", "+213 29" ],
            [ "Jijel", "+213 34" ],
            [ "Oran", "+213 41" ],
            [ "Skikda", "+213 38" ],
            [ "Tamanrasset", "+213 29" ],
            [ "Tebessa", "+213 37" ],
            [ "Tindouf", "+213 49" ],
            [ "Tlemcen", "+213 43" ]
        ],
        "Andorra": [
            [ "Andorra la Vella", "+376" ]
        ],
        "Angola": [
            [ "Cabinda", "+244 31" ],
            [ "Caxito", "+244 34" ],
            [ "Luanda", "+244 2" ]
        ],
        "Argentina": [
            [ "Bahía Blanca", "+54 291" ],
            [ "Buenos Aires", "+54 11" ],
            [ "Comodoro Rivadavia", "+54 297" ],
            [ "Concordia", "+54 345" ],
            [ "Córdoba", "+54 351" ],
            [ "Corrientes", "+54 3783" ],
            [ "Formosa", "+54 3717" ],
            [ "Jesús María", "+54 3525" ],
            [ "Junín", "+54 2362" ],
            [ "La Plata", "+54 221" ],
            [ "La Rioja", "+54 3822" ],
            [ "Mar del Plata", "+54 223" ],
            [ "Mendoza", "+54 261" ],
            [ "Mercedes", "+54 2324" ],
            [ "Neuquén", "+54 299" ],
            [ "Paraná", "+54 343" ],
            [ "Posadas", "+54 3752" ],
            [ "Resistencia", "+54 3722" ],
            [ "Río Cuarto", "+54 358" ],
            [ "Río Gallegos", "+54 2966" ],
            [ "Rosario", "+54 341" ],
            [ "Salta", "+54 387" ],
            [ "San Francisco", "+54 628" ],
            [ "San Juan", "+54 264" ],
            [ "San Luis", "+54 2652" ],
            [ "San Martín", "+54 408" ],
            [ "San Nicolás de los Arroyos", "+54 3461" ],
            [ "San Pedro", "+54 424" ],
            [ "San Rafael", "+54 2627" ],
            [ "Santa Fe", "+54 342" ],
            [ "Santa Rosa", "+54 2954" ],
            [ "Santiago del Estero", "+54 385" ],
            [ "Santo Tomé", "+54 3756" ],
            [ "Tandil", "+54 2293" ],
            [ "Trelew\/Rawson", "+54 2965" ],
            [ "Ushuaia", "+54 2901" ],
            [ "Viedma", "+54 2920" ],
            [ "Zárate", "+54 3487" ]
        ],
        "Armenia": [
            [ "Abovian", "+374 22" ],
            [ "Abovyan", "+374 22" ],
            [ "Akhurian", "+374 43" ],
            [ "Alapars", "+374 23" ],
            [ "Alaverdi", "+374 53" ],
            [ "Amasia", "+374 46" ],
            [ "Aparan", "+374 52" ],
            [ "Arapi", "+374 43" ],
            [ "Argel", "+374 24" ],
            [ "Artashat", "+374 35" ],
            [ "Artik", "+374 44" ],
            [ "Ashotsk", "+374 45" ],
            [ "Ashtarak", "+374 32" ],
            [ "Baghramian", "+374 33" ],
            [ "Bjni", "+374 23" ],
            [ "Chambarak", "+374 65" ],
            [ "Charentsavan", "+374 26" ],
            [ "Dalarik", "+374 33" ],
            [ "Dzoraget", "+374 51" ],
            [ "Echmiadzin", "+374 31" ],
            [ "Eghegnut", "+374 51" ],
            [ "Eghvard", "+374 24" ],
            [ "Gavar", "+374 64" ],
            [ "Goris", "+374 84" ],
            [ "Gyumri", "+374 41" ],
            [ "Hoktember", "+374 37" ],
            [ "Hrazdan", "+374 23" ],
            [ "Ijevan", "+374 63" ],
            [ "Jermuk", "+374 87" ],
            [ "Kadjaran", "+374 85" ],
            [ "Kamo", "+374 43" ],
            [ "Kapan", "+374 85" ],
            [ "Karakerd", "+374 33" ],
            [ "Khndzoresk", "+374 84" ],
            [ "Koghb", "+374 66" ],
            [ "Lermontov", "+374 51" ],
            [ "Maralik", "+374 42" ],
            [ "Margahovit", "+374 51" ],
            [ "Martuni", "+374 62" ],
            [ "Masis", "+374 36" ],
            [ "Meghradzor", "+374 23" ],
            [ "Meghri", "+374 86" ],
            [ "Metsamor", "+374 37" ],
            [ "Miasnikian", "+374 33" ],
            [ "Nor Gekhi", "+374 24" ],
            [ "Nor Hajn", "+374 24" ],
            [ "Noyemberian", "+374 66" ],
            [ "Pambak", "+374 51" ],
            [ "Pernzashen", "+374 44" ],
            [ "Piunik", "+374 23" ],
            [ "Proshyan", "+374 24" ],
            [ "Ptghni", "+374 22" ],
            [ "Sarnakhpyur", "+374 42" ],
            [ "Sarukhan", "+374 64" ],
            [ "Sevan", "+374 61" ],
            [ "Shirakavan", "+374 42" ],
            [ "Sisian", "+374 83" ],
            [ "Solak", "+374 23" ],
            [ "Spitak", "+374 55" ],
            [ "Stepanavan", "+374 56" ],
            [ "Talin", "+374 49" ],
            [ "Tashir", "+374 54" ],
            [ "Tsaghkahovit", "+374 57" ],
            [ "Tsakhkadzor", "+374 23" ],
            [ "Vahagni", "+374 51" ],
            [ "Vanadzor", "+374 51" ],
            [ "Vardenis", "+374 69" ],
            [ "Vayk", "+374 82" ],
            [ "Vedi", "+374 34" ],
            [ "Verishen", "+374 84" ],
            [ "Yeghegnadzor", "+374 81" ],
            [ "Yerevan", "+374 1" ],
            [ "Zovuni", "+374 24" ],
            [ "Zvartnots", "+374 31" ]
        ],
        "Aruba": [
            [ "Oranjestad", "297" ]
        ],
        "Australia": [
            [ "Adelaide", "+61 8" ],
            [ "Albury", "+61 2" ],
            [ "Alice Springs", "+61 8" ],
            [ "Ballarat", "+61 3" ],
            [ "Bendigo", "+61 3" ],
            [ "Brisbane", "+61 7" ],
            [ "Bunbury", "+61 8" ],
            [ "Bundaberg", "+61 7" ],
            [ "Cairns", "+61 7" ],
            [ "Canberra", "+61 2" ],
            [ "Coffs Harbour", "+61 2" ],
            [ "Darwin", "+61 8" ],
            [ "Forrest", "+61 815" ],
            [ "Geelong", "+61 3" ],
            [ "Gibson", "+61 706" ],
            [ "Gold Coast", "+61 7" ],
            [ "Hamilton", "+61 620" ],
            [ "Hobart", "+61 3" ],
            [ "Kingston", "+61 770" ],
            [ "Launceston", "+61 3" ],
            [ "Mackay", "+61 7" ],
            [ "Macquarie Island", "+61 13" ],
            [ "Marion", "+61 765" ],
            [ "Melbourne", "+61 3" ],
            [ "Newcastle", "+61 2" ],
            [ "Perth", "+61 8" ],
            [ "Portland", "+61 207" ],
            [ "Richmond", "+61 765" ],
            [ "Rockhampton", "+61 7" ],
            [ "Sydney", "+61 2" ],
            [ "Townsville", "+61 7" ],
            [ "Warwick", "+61 229" ],
            [ "Wollongong", "+61 2" ],
            [ "Young", "+61 928" ]
        ],
        "Austria": [
            [ "Graz", "+43 316" ],
            [ "Innsbruck", "+43 512" ],
            [ "Klagenfurt", "+43 463" ],
            [ "Linz", "+43 70" ],
            [ "Salzburg", "+43 662" ],
            [ "Vienna", "+43 1" ],
            [ "Wels", "+43 7242" ],
            [ "Wiener Neustadt", "+43 2622" ]
        ],
        "Azerbaijan": [
            [ "Agdam", "+994 192" ],
            [ "Agdash", "+994 193" ],
            [ "Agdjabedi", "+994 113" ],
            [ "Agstafa", "+994 244" ],
            [ "Agsu", "+994 198" ],
            [ "Ali", "+994 197" ],
            [ "Astara", "+994 195" ],
            [ "Baku", "+994 12" ],
            [ "Balaken", "+994 119" ],
            [ "Barda", "+994 110" ],
            [ "Beylagan", "+994 152" ],
            [ "Bilesuvar", "+994 159" ],
            [ "Dashkesan", "+994 216" ],
            [ "Devechi", "+994 115" ],
            [ "Djalilabad", "+994 114" ],
            [ "Eizuli", "+994 141" ],
            [ "Gabala", "+994 160" ],
            [ "Gakh", "+994 144" ],
            [ "Gazakh", "+994 279" ],
            [ "Geokchay", "+994 167" ],
            [ "Geranboy", "+994 234" ],
            [ "Gobustan", "+994 150" ],
            [ "Guba", "+994 169" ],
            [ "Gyandia", "+994 22" ],
            [ "Hachmaz", "+994 172" ],
            [ "Hadjigabul", "+994 140" ],
            [ "Hanlar", "+994 230" ],
            [ "Hizi", "+994 199" ],
            [ "Imishli", "+994 154" ],
            [ "Ismayilli", "+994 178" ],
            [ "Kedabek", "+994 232" ],
            [ "Kusari", "+994 138" ],
            [ "Kyurdamir", "+994 145" ],
            [ "Lankaran", "+994 171" ],
            [ "Lenkaran", "+994 171" ],
            [ "Lerik", "+994 157" ],
            [ "Masalli", "+994 151" ],
            [ "Mingechevir", "+994 147" ],
            [ "Mobile Phones", "+994 50" ],
            [ "Naftalan", "+994 255" ],
            [ "Nahichevan", "+994 136" ],
            [ "Nakhichevan", "+994 136" ],
            [ "Neftechala", "+994 153" ],
            [ "Oguz", "+994 111" ],
            [ "Saatli", "+994 168" ],
            [ "Sabirabad", "+994 143" ],
            [ "Salyan", "+994 163" ],
            [ "Samukh", "+994 265" ],
            [ "Shamaha", "+994 176" ],
            [ "Shamkir", "+994 241" ],
            [ "Sheki", "+994 177" ],
            [ "Siyazan", "+994 190" ],
            [ "Sumgayit", "+994 164" ],
            [ "Ter", "+994 246" ],
            [ "Tovuz", "+994 231" ],
            [ "Udjar", "+994 170" ],
            [ "Yardimli", "+994 175" ],
            [ "Yevlakh", "+994 166" ],
            [ "Zagatala", "+994 174" ],
            [ "Zakatala", "+994 174" ],
            [ "Zardab", "+994 135" ]
        ],
        "Bahamas": [
            [ "Andros Town", "1242" ],
            [ "Freeport\/Lucaya", "1242" ],
            [ "George Town", "1242" ],
            [ "Governor s Harbour", "1242" ],
            [ "Matthew Town", "1242" ],
            [ "Nassau", "1242" ]
        ],
        "Bahrain": [
            [ "Manama", "973" ]
        ],
        "Bangladesh": [
            [ "Alamdanga", "+880 7622" ],
            [ "Ashugonj", "+880 8528" ],
            [ "Avaynagar (Noapara)", "+880 4222" ],
            [ "Badargonj", "+880 5222" ],
            [ "Bagerhat", "+880 468" ],
            [ "Banaripara", "+880 4332" ],
            [ "Bandarban", "+880 361" ],
            [ "Banshkhali", "+880 3037" ],
            [ "Barguna", "+880 448" ],
            [ "Barisal", "+880 431" ],
            [ "Bauphal", "+880 4422" ],
            [ "Bazitpur", "+880 9423" ],
            [ "Bhairab", "+880 9424" ],
            [ "Bhandaria", "+880 4623" ],
            [ "Bheramara", "+880 7022" ],
            [ "Bhola", "+880 491" ],
            [ "Bogra", "+880 51" ],
            [ "Brahmanbaria", "+880 851" ],
            [ "Chandpur", "+880 841" ],
            [ "Chandraghona (Kaptai)", "+880 3529" ],
            [ "Chaudagram", "+880 8034" ],
            [ "Chhatak", "+880 8723" ],
            [ "Chittagong", "+880 31" ],
            [ "Chuadanga", "+880 761" ],
            [ "Comilla", "+880 81" ],
            [ "Companigon (Bashurhat)", "+880 3223" ],
            [ "Cox's Bazar", "+880 341" ],
            [ "Daudkandi", "+880 8023" ],
            [ "Daulatpur", "+880 7023" ],
            [ "Dhaka", "+880 2" ],
            [ "Dinajpur", "+880 531" ],
            [ "Faridpur", "+880 631" ],
            [ "Feni", "+880 331" ],
            [ "Fulbari", "+880 5327" ],
            [ "Gaibandha", "+880 541" ],
            [ "Galachipa", "+880 4424" ],
            [ "Gazipur", "+880 681" ],
            [ "Ghatail", "+880 9225" ],
            [ "Goalanda", "+880 6423" ],
            [ "Gopalgonj", "+880 423" ],
            [ "Hajigonj", "+880 8424" ],
            [ "Hatiya (Oshkhali)", "+880 3224" ],
            [ "Hobigonj", "+880 831" ],
            [ "Ishwardi", "+880 732" ],
            [ "Jamalpur", "+880 981" ],
            [ "Jessore", "+880 421" ],
            [ "Jhalokathhi", "+880 498" ],
            [ "Jhenaidah", "+880 451" ],
            [ "Jhikargacha", "+880 4225" ],
            [ "Joypurhat", "+880 571" ],
            [ "Kalaroa", "+880 4724" ],
            [ "Kanaighat", "+880 8233" ],
            [ "Khagrachhari", "+880 371" ],
            [ "Khepupara", "+880 4425" ],
            [ "Khulna", "+880 41" ],
            [ "Kishoregonj", "+880 941" ],
            [ "Kurigram", "+880 581" ],
            [ "Kustia", "+880 71" ],
            [ "Laksham (Daulatgonj)", "+880 8032" ],
            [ "Lakshmipur", "+880 381" ],
            [ "Lalmonirhat", "+880 591" ],
            [ "Madaripur", "+880 661" ],
            [ "Magura", "+880 488" ],
            [ "Manikgonj", "+880 651" ],
            [ "Mathabdi", "+880 6257" ],
            [ "Meherpur", "+880 791" ],
            [ "Mithamain", "+880 9435" ],
            [ "Mohanganj", "+880 9524" ],
            [ "Moheshkhali", "+880 3424" ],
            [ "Mongla", "+880 402" ],
            [ "Mongla New Port", "+880 4662" ],
            [ "Moulavibazar", "+880 861" ],
            [ "Muktagacha", "+880 9028" ],
            [ "Muladi", "+880 4326" ],
            [ "Munshigonj", "+880 691" ],
            [ "Mymensingh", "+880 91" ],
            [ "Nabinagar", "+880 8525" ],
            [ "Nagarpur", "+880 9233" ],
            [ "Naogaon", "+880 741" ],
            [ "Narail", "+880 481" ],
            [ "Narsingdi", "+880 628" ],
            [ "Natore", "+880 771" ],
            [ "Nawabgonj (Chapai)", "+880 781" ],
            [ "Netrokona", "+880 951" ],
            [ "Nilphamari", "+880 551" ],
            [ "Noakhali", "+880 321" ],
            [ "Pabna", "+880 731" ],
            [ "Paikgacha", "+880 4027" ],
            [ "Palash (Ghorashal)", "+880 6254" ],
            [ "Panchagar", "+880 568" ],
            [ "Parbatipur", "+880 5334" ],
            [ "Patuakhali", "+880 441" ],
            [ "Perojpur", "+880 461" ],
            [ "Plulpur", "+880 9033" ],
            [ "Potiya", "+880 3035" ],
            [ "Rajbari", "+880 641" ],
            [ "Rajshahi", "+880 721" ],
            [ "Ramgoti (Char Alexander)", "+880 3823" ],
            [ "Rangamati", "+880 351" ],
            [ "Rangpur", "+880 521" ],
            [ "Saidpur", "+880 5526" ],
            [ "Sarsha (Benapol)", "+880 4228" ],
            [ "Satkania", "+880 3036" ],
            [ "Satkhira", "+880 471" ],
            [ "Savar", "+880 2" ],
            [ "Shariatpur", "+880 601" ],
            [ "Sherpur", "+880 931" ],
            [ "Shibganj", "+880 5033" ],
            [ "Sirajgonj", "+880 751" ],
            [ "Sitakundu (Barabkundu)", "+880 3028" ],
            [ "Srimangol", "+880 8626" ],
            [ "Sunamgonj", "+880 871" ],
            [ "Syedpur", "+880 552" ],
            [ "Sylhet", "+880 821" ],
            [ "Taherpur", "+880 8732" ],
            [ "Tangail", "+880 921" ],
            [ "Thakurgaon", "+880 561" ],
            [ "Ukhia", "+880 3427" ]
        ],
        "Belarus": [
            [ "Brest", "+375 16" ],
            [ "Gomel", "+375 2322" ],
            [ "Grodno", "+375 1511" ],
            [ "Minsk", "+375 17" ],
            [ "Mogilev", "+375 222" ],
            [ "Vitebsk", "+375 212" ]
        ],
        "Belgium": [
            [ "Aalst (Alost)", "+32 53" ],
            [ "Anderlecht", "+32 2" ],
            [ "Antwerp", "+32 3" ],
            [ "Arlon", "+32 63" ],
            [ "Ath", "+32 67" ],
            [ "Bruges", "+32 50" ],
            [ "Brugge (Bruges)", "+32 50" ],
            [ "Brussels", "+32 2" ],
            [ "Charleroi", "+32 71" ],
            [ "Chimay", "+32 60" ],
            [ "Ciney", "+32 83" ],
            [ "Dendermonde", "+32 52" ],
            [ "Diest", "+32 13" ],
            [ "Dinant", "+32 82" ],
            [ "Durbuy", "+32 86" ],
            [ "Genk", "+32 89" ],
            [ "Gent", "+32 9" ],
            [ "Ghent", "+32 9" ],
            [ "Hasselt", "+32 11" ],
            [ "Herentals", "+32 14" ],
            [ "Huy (Hoei)", "+32 85" ],
            [ "La Louvière", "+32 64" ],
            [ "Leuven", "+32 16" ],
            [ "Leuven (Louvain)", "+32 16" ],
            [ "Libramont", "+32 61" ],
            [ "Liege", "+32 4" ],
            [ "Liège (Luik)", "+32 4" ],
            [ "Mechelen", "+32 15" ],
            [ "Mechelen (Malines)", "+32 15" ],
            [ "Mons", "+32 65" ],
            [ "Mons (Bergen)", "+32 65" ],
            [ "Namur", "+32 81" ],
            [ "Namur (Namen)", "+32 81" ],
            [ "Nieuwpoort (Nieuport)", "+32 58" ],
            [ "Ninove", "+32 54" ],
            [ "Nivelles (Nijvel)", "+32 67" ],
            [ "Oostende", "+32 59" ],
            [ "Roeselare (Roulers)", "+32 51" ],
            [ "Ronse", "+32 55" ],
            [ "Stavelot", "+32 80" ],
            [ "Tongeren (Tongres)", "+32 12" ],
            [ "Tounai", "+32 69" ],
            [ "Turnhout", "+32 14" ],
            [ "Verviers", "+32 87" ],
            [ "Veurne", "+32 58" ],
            [ "Wareme", "+32 19" ],
            [ "Wavre (Waver)", "+32 10" ],
            [ "Zeebrugge", "+32 50" ]
        ],
        "Belize": [
            [ "Belize City", "+501 2" ],
            [ "Belmopan", "+501 8" ]
        ],
        "Benin": [
            [ "Cotonou", "+229" ],
            [ "Porto Novo", "+229" ]
        ],
        "Bermuda": [
            [ "Saint George", "1441" ]
        ],
        "Bhutan": [
            [ "Bangtar DAMA", "+975 7" ],
            [ "Basochu", "+975 2" ],
            [ "Chapcha", "+975 8" ],
            [ "Chargary", "+975 5" ],
            [ "Chumey", "+975 3" ],
            [ "Dagana", "+975 6" ],
            [ "Dagapela", "+975 6" ],
            [ "Daifam DAMA", "+975 7" ],
            [ "Damphu DAMA", "+975 6" ],
            [ "Dechencholing", "+975 2" ],
            [ "Deothang", "+975 7" ],
            [ "Drujegang", "+975 6" ],
            [ "Drukgyel Dzong", "+975 8" ],
            [ "Gasa", "+975 2" ],
            [ "Gedu\/Tala\/Padechu\/ Sinchekha", "+975 5" ],
            [ "Gelephu", "+975 6" ],
            [ "Gelpoyshing", "+975 4" ],
            [ "Gomtu", "+975 5" ],
            [ "Ha", "+975 8" ],
            [ "Ha (Damthang)", "+975 8" ],
            [ "Jakar", "+975 3" ],
            [ "Kanglung", "+975 4" ],
            [ "Khaling", "+975 4" ],
            [ "Kharsadrapchu", "+975 2" ],
            [ "Lhamoi Zingkha", "+975 5" ],
            [ "Lhuntse", "+975 4" ],
            [ "Lingshi DAMA", "+975 2" ],
            [ "Lodrai", "+975 6" ],
            [ "Mongar", "+975 4" ],
            [ "Nganglam", "+975 7" ],
            [ "Nganglam DAMA", "+975 7" ],
            [ "P\/Gatshel", "+975 7" ],
            [ "P\/Gatshel DAMA", "+975 7" ],
            [ "Panbang DAMA", "+975 6" ],
            [ "Paro", "+975 8" ],
            [ "Pasakha", "+975 5" ],
            [ "Phuntsholing", "+975 5" ],
            [ "Punakha", "+975 2" ],
            [ "Rangjung", "+975 4" ],
            [ "S\/Jongkhar", "+975 7" ],
            [ "Sakteng DAMA", "+975 4" ],
            [ "Samtse", "+975 5" ],
            [ "Sarpang", "+975 6" ],
            [ "Shaba", "+975 8" ],
            [ "Sibsoo", "+975 5" ],
            [ "Simtokha", "+975 2" ],
            [ "Suray", "+975 6" ],
            [ "Taba", "+975 2" ],
            [ "Tangmachu", "+975 4" ],
            [ "Thimphu", "+975 2" ],
            [ "Tingtibi", "+975 3" ],
            [ "Trashi Yangtse", "+975 4" ],
            [ "Trashigang", "+975 4" ],
            [ "Trongsa", "+975 3" ],
            [ "Tsenkharla", "+975 4" ],
            [ "Tsimasham", "+975 8" ],
            [ "Tsirang (Damphu)", "+975 6" ],
            [ "Wamrong", "+975 4" ],
            [ "Wangdue", "+975 2" ],
            [ "Wangkha", "+975 8" ],
            [ "Zhemgang", "+975 3" ],
            [ "Zhemgang DAMA", "+975 3" ]
        ],
        "Bolivia": [
            [ "Bermejo", "+591 4" ],
            [ "Cobija", "+591 3" ],
            [ "Cochabamba", "+591 4" ],
            [ "Guayaramerín", "+591 3" ],
            [ "La Paz", "+591 2" ],
            [ "Oruro", "+591 2" ],
            [ "Potosi", "+591 2" ],
            [ "Riberalta", "+591 3" ],
            [ "Sucre", "+591 4" ],
            [ "Tarija", "+591 4" ],
            [ "Trinidad", "+591 3" ]
        ],
        "Bosnia & Herzegovina": [
            [ "Banja Luka", "+387 51" ],
            [ "Bijeljina", "+387 55" ],
            [ "Bosansko", "+387 38" ],
            [ "Distrikt Brcko", "+387 49" ],
            [ "Doboj", "+387 53" ],
            [ "Foca\/Srbinje", "+387 58" ],
            [ "Herceg", "+387 34" ],
            [ "Hercegovac", "+387 36" ],
            [ "Kanton Sarajevo", "+387 33" ],
            [ "Mrkonjic' Grad", "+387 50" ],
            [ "Prijedor", "+387 52" ],
            [ "Sarajevo", "+387 33" ],
            [ "Srbinje", "+387 58" ],
            [ "Srednjo", "+387 30" ],
            [ "Srpsko Sarajevo", "+387 57" ],
            [ "Trebinje", "+387 59" ],
            [ "Unsko", "+387 37" ],
            [ "Zapadno", "+387 39" ],
            [ "Zenic", "+387 32" ],
            [ "Zvornik", "+387 56" ]
        ],
        "Botswana": [
            [ "Francistown", "+267 24" ],
            [ "Gaborone", "+267 31" ],
            [ "Ghanzi", "+267 65" ],
            [ "Jwaneng", "+267 58" ],
            [ "Kasane", "+267 62" ],
            [ "Letlhakane", "+267 29" ],
            [ "Mahalapye", "+267 47" ],
            [ "Maun", "+267 68" ],
            [ "Selebi Phikwe", "+267 26" ]
        ],
        "Brasil": [
            [ "Alagoinhas", "+55 75" ],
            [ "Alexandria", "+55 859" ],
            [ "Anápolis", "+55 62" ],
            [ "Aracaju", "+55 79" ],
            [ "Araguaina", "+55 63" ],
            [ "Barreiras", "+55 77" ],
            [ "Bauru", "+55 14" ],
            [ "Belém", "+55 91" ],
            [ "Belo Horizonte", "+55 31" ],
            [ "Blumenau", "+55 47" ],
            [ "Boa Vista", "+55 95" ],
            [ "Brasilia", "+55 61" ],
            [ "Campina Grande", "+55 83" ],
            [ "Campinas", "+55 19" ],
            [ "Campo Grande", "+55 67" ],
            [ "Campos", "+55 22" ],
            [ "Caruaru", "+55 81" ],
            [ "Caxias do Sul", "+55 54" ],
            [ "Cuiaba", "+55 65" ],
            [ "Curitiba", "+55 41" ],
            [ "Feira de Santana", "+55 75" ],
            [ "Fernando de Noronha", "+55 81" ],
            [ "Florianopolis", "+55 48" ],
            [ "Fortaleza", "+55 85" ],
            [ "Garanhuns", "+55 81" ],
            [ "Goiania", "+55 62" ],
            [ "Governador Valadares", "+55 33" ],
            [ "Ilheus", "+55 73" ],
            [ "Itabuna", "+55 73" ],
            [ "Jequie", "+55 73" ],
            [ "Joao Pessoa", "+55 83" ],
            [ "Joinville", "+55 47" ],
            [ "Juazeiro do Norte", "+55 74" ],
            [ "Juiz de Fora", "+55 32" ],
            [ "Londrina", "+55 43" ],
            [ "Macapa", "+55 96" ],
            [ "Maceio", "+55 82" ],
            [ "Manaus", "+55 92" ],
            [ "Medina", "+55 830" ],
            [ "Montes Claros", "+55 38" ],
            [ "Montezuma", "+55 478" ],
            [ "Mossoro", "+55 84" ],
            [ "Natal", "+55 84" ],
            [ "Niteroi", "+55 21" ],
            [ "Palmas", "+55 63" ],
            [ "Panama", "+55 712" ],
            [ "Parnaiba", "+55 86" ],
            [ "Passo Fundo", "+55 54" ],
            [ "Pelotas", "+55 532" ],
            [ "Ponta Grossa", "+55 42" ],
            [ "Porto Alegre", "+55 51" ],
            [ "Porto Velho", "+55 69" ],
            [ "Recife", "+55 81" ],
            [ "Ribeirão Preto", "+55 16" ],
            [ "Rio Branco", "+55 68" ],
            [ "Rio de Janeiro", "+55 21" ],
            [ "Rio Grande", "+55 53" ],
            [ "Sacramento", "+55 916" ],
            [ "Salinas", "+55 408" ],
            [ "Salvador", "+55 71" ],
            [ "Santa Cruz", "+55 831" ],
            [ "Santa Fe", "+55 505" ],
            [ "Santa Maria", "+55 34" ],
            [ "Santa Rosa", "+55 707" ],
            [ "Santo André", "+55 11" ],
            [ "Santos", "+55 13" ],
            [ "São Jose do Rio Preto", "+55 17" ],
            [ "São Jose dos Campos", "+55 12" ],
            [ "São Luis", "+55 98" ],
            [ "São Paulo", "+55 11" ],
            [ "Sobral", "+55 88" ],
            [ "Sorocaba", "+55 15" ],
            [ "Teofilo Otoni", "+55 33" ],
            [ "Teresina", "+55 86" ],
            [ "Timbo", "+55 870" ],
            [ "Uberaba", "+55 34" ],
            [ "Uberlandia", "+55 34" ],
            [ "Uruguaiana", "+55 55" ],
            [ "Valparaiso", "+55 850" ],
            [ "Vitoria", "+55 27" ],
            [ "Vitoria da Conquista", "+55 77" ],
            [ "Volta Redonda", "+55 24" ]
        ],
        "Brunei": [
            [ "Brunei International Airport", "+673 2" ],
            [ "Kuala Belait", "+673 3" ]
        ],
        "Bulgaria": [
            [ "Blagoevgrad", "+359 73" ],
            [ "Bourgas", "+359 56" ],
            [ "Dobritch", "+359 58" ],
            [ "Gabrovo", "+359 66" ],
            [ "Gotse Delchev", "+359 751" ],
            [ "Haskovo", "+359 38" ],
            [ "Kardjali", "+359 361" ],
            [ "Kazanluk", "+359 431" ],
            [ "Kjustendil", "+359 78" ],
            [ "Lovech", "+359 68" ],
            [ "Lovetch", "+359 68" ],
            [ "Mobile Phones", "+359 89" ],
            [ "Montana", "+359 96" ],
            [ "Pazardjik", "+359 34" ],
            [ "Pernik", "+359 76" ],
            [ "Pleven", "+359 64" ],
            [ "Plovdiv", "+359 32" ],
            [ "Razgrad", "+359 84" ],
            [ "Rousse", "+359 82" ],
            [ "Ruse", "+359 82" ],
            [ "Shoumen", "+359 54" ],
            [ "Silistra", "+359 86" ],
            [ "Sliven", "+359 44" ],
            [ "Smolyan", "+359 301" ],
            [ "Sofia", "+359 2" ],
            [ "Stara Zagora", "+359 42" ],
            [ "Targovishte", "+359 601" ],
            [ "Varna", "+359 52" ],
            [ "Veliko Tarnovo", "+359 62" ],
            [ "Vidin", "+359 94" ],
            [ "Vratsa", "+359 92" ],
            [ "Yambol", "+359 46" ]
        ],
        "Burkina": [
            [ "Ouagadougou", "+226" ]
        ],
        "Burundi": [
            [ "Bujumbura", "+257 2" ]
        ],
        "Cambodia": [
            [ "Banteay Meanchey", "+855 54" ],
            [ "Battambang", "+855 53" ],
            [ "Kampong Cham", "+855 42" ],
            [ "Kampong Chhnang", "+855 26" ],
            [ "Kampong Speu", "+855 25" ],
            [ "Kampong Thom", "+855 62" ],
            [ "Kampot", "+855 33" ],
            [ "Kandal", "+855 24" ],
            [ "Kep", "+855 36" ],
            [ "Koh Kong", "+855 35" ],
            [ "Kratie", "+855 72" ],
            [ "Mobile Phones", "+855 12" ],
            [ "Mondolkiri", "+855 73" ],
            [ "Pailin", "+855 55" ],
            [ "Phnom Penh", "+855 23" ],
            [ "Preah Vihear", "+855 64" ],
            [ "Prey Veng", "+855 43" ],
            [ "Pursat", "+855 52" ],
            [ "Ratanakiri", "+855 75" ],
            [ "Siem Reap", "+855 63" ],
            [ "Siem Riep", "+855 63" ],
            [ "Sihanoukville", "+855 34" ],
            [ "Stung Treng", "+855 74" ],
            [ "Svay Rieng", "+855 44" ],
            [ "Takeo", "+855 32" ],
            [ "Udar Meanchey", "+855 65" ]
        ],
        "Cameroon": [
            [ "Yaounde", "+237 3" ]
        ],
        "Canada": [
            [ "Edmonton", "780" ],
            [ "Victoria", "250" ],
            [ "Dawson Creek", "250" ],
            [ "Goose Bay", "709" ],
            [ "Winnipeg", "204" ],
            [ "Fredericton", "506" ],
            [ "St. John s", "709" ],
            [ "Yellowknife", "867" ],
            [ "Halifax", "902" ],
            [ "Iqaluit", "867" ],
            [ "Toronto", "416" ],
            [ "Thunder Bay", "807" ],
            [ "Charlottetown", "902" ],
            [ "Quebec City", "418" ],
            [ "Blanc Sablon", "418" ],
            [ "Regina", "306" ],
            [ "Whitehorse", "867" ],
            [ "Abbotsford", "+1 604" ],
            [ "Ajax", "+1 905" ],
            [ "Arborg", "+1 204" ],
            [ "Banff", "+1 403" ],
            [ "Barrie", "+1 705" ],
            [ "Beausejour", "+1 204" ],
            [ "Belleville", "+1 613" ],
            [ "Blanc Sablon", "+1 418" ],
            [ "Brampton", "+1 905" ],
            [ "Brandon", "+1 204" ],
            [ "Brantford", "+1 519" ],
            [ "Broadview", "+1 306" ],
            [ "Buffalo Narrows", "+1 306" ],
            [ "Burlington", "+1 905" ],
            [ "Burnaby", "+1 604" ],
            [ "Calgary", "+1 587" ],
            [ "Cambridge", "+1 519" ],
            [ "Cape Breton", "+902" ],
            [ "Carcross", "+1 867" ],
            [ "Caronport", "+1 306" ],
            [ "Cartwright", "+1 204" ],
            [ "Charlottetown", "+1 902" ],
            [ "Chatham", "+1 217" ],
            [ "Chilliwack", "+1 604" ],
            [ "Churchill", "+1 204" ],
            [ "Clinton", "+1 270" ],
            [ "Corner Brook", "+1 709" ],
            [ "Cranberry Portage", "+1 204" ],
            [ "Cranbrook", "+1 250" ],
            [ "Cumberland", "+1 902" ],
            [ "Dauphin", "+1 204" ],
            [ "Dawson City", "+1 867" ],
            [ "Dawson Creek", "+1 250" ],
            [ "Dieppe", "+1 506" ],
            [ "Eastend", "+1 306" ],
            [ "Edmonton", "+1 780" ],
            [ "Edmundston", "+1 506" ],
            [ "Estevan", "+1 306" ],
            [ "Flin Flon", "+1 204" ],
            [ "Fort Simpson", "+1 867" ],
            [ "Fort Smith", "+1 867" ],
            [ "Fredericton", "+1 506" ],
            [ "Gander", "+1 709" ],
            [ "Gatineau", "+1 819" ],
            [ "Gillam", "+1 204" ],
            [ "Gimli", "+1 204" ],
            [ "Glenwood", "+1 912" ],
            [ "Goose Bay", "+1 709" ],
            [ "Grande Prairie", "+1 780" ],
            [ "Guelph", "+1 519" ],
            [ "Halifax", "+1 902" ],
            [ "Hamilton", "+1 905" ],
            [ "Hampton", "+1 757" ],
            [ "Hay River", "+1 867" ],
            [ "Hope", "+1 812" ],
            [ "Hudson Bay", "+1 306" ],
            [ "Iqaluit", "+1 867" ],
            [ "Kamloops", "+1 250" ],
            [ "Kelowna", "+1 250" ],
            [ "Kindersley", "+1 306" ],
            [ "Kingston", "+1 613" ],
            [ "Kitchener", "+1 519" ],
            [ "La Ronge", "+1 306" ],
            [ "Labrador City", "+1 709" ],
            [ "Langham", "+1 306" ],
            [ "Laval", "+1 450" ],
            [ "Lethbridge", "+1 403" ],
            [ "Lévis", "+1 418" ],
            [ "Lloydminster", "+1 780" ],
            [ "London", "+1 226" ],
            [ "Longueuil", "+1 450" ],
            [ "Lynn Lake", "+1 204" ],
            [ "Markham", "+1 905" ],
            [ "Meadow Lake", "+1 306" ],
            [ "Medicine Hat", "+1 403" ],
            [ "Melita", "+1 204" ],
            [ "Milton", "+1 641" ],
            [ "Minnedosa", "+1 204" ],
            [ "Miramichi", "+1 506" ],
            [ "Mississauga", "+1 289" ],
            [ "Moncton", "+1 506" ],
            [ "Montréal", "+1 438" ],
            [ "Moose Jaw", "+1 306" ],
            [ "Mount Pearl", "+1 709" ],
            [ "Nanaimo", "+1 250" ],
            [ "Nelson", "+1 770" ],
            [ "Nelson House", "+1 204" ],
            [ "New Westminster", "+1 604" ],
            [ "Niagara Falls", "+1 905" ],
            [ "North Battleford", "+1 306" ],
            [ "North Bay", "+1 705" ],
            [ "Oakville", "+1 905" ],
            [ "Oshawa", "+1 905" ],
            [ "Ottawa", "+1 343" ],
            [ "Peterborough", "+1 705" ],
            [ "Pickering", "+1 905" ],
            [ "Port Coquitlam", "+1 604" ],
            [ "Prince Albert", "+1 306" ],
            [ "Prince George", "+1 250" ],
            [ "Quebec City", "+1 418" ],
            [ "Rae", "+1 867" ],
            [ "Rankin Inlet (Kangiqliniq)", "+1 867" ],
            [ "Red Deer", "+1 403" ],
            [ "Regina", "+1 306" ],
            [ "Richmond", "+1 604" ],
            [ "Richmond Hill", "+1 905" ],
            [ "Rimouski", "+1 418" ],
            [ "Riverton", "+1 204" ],
            [ "Rockglen", "+1 306" ],
            [ "Rosetown", "+1 306" ],
            [ "Rothesay", "+1 506" ],
            [ "Saanich", "+1 604" ],
            [ "Saint John", "+1 506" ],
            [ "Sarnia", "+1 519" ],
            [ "Saskatoon", "+1 306" ],
            [ "Selkirk", "+1 204" ],
            [ "Sherbrooke", "+1 819" ],
            [ "Slave Lake", "+1 867" ],
            [ "Souris", "+1 204" ],
            [ "St. John s", "+1 709" ],
            [ "Stephenville", "+1 709" ],
            [ "Stonewall", "+1 204" ],
            [ "Summerland", "+1 805" ],
            [ "Summerside", "+1 902" ],
            [ "Surrey", "+1 604" ],
            [ "Swan River", "+1 204" ],
            [ "Swift Current", "+1 306" ],
            [ "Sydney", "+902" ],
            [ "The Pas", "+1 204" ],
            [ "Thompson", "+1 204" ],
            [ "Thunder Bay", "+1 807" ],
            [ "Timmins", "+1 705" ],
            [ "Toronto", "+1 416" ],
            [ "Tracy", "+1 209" ],
            [ "Trenton", "+1 609" ],
            [ "Trois Rivières", "+1 819" ],
            [ "Truro", "+1 641" ],
            [ "Vancouver", "+1 604" ],
            [ "Victoria", "+1 250" ],
            [ "Virden", "+1 204" ],
            [ "Warman", "+1 306" ],
            [ "Waterloo", "+1 519" ],
            [ "Watson Lake", "+1 867" ],
            [ "Welland", "+1 905" ],
            [ "Weyburn", "+1 306" ],
            [ "Whistler", "+1 604" ],
            [ "Whitby", "+1 905" ],
            [ "Whitehorse", "+1 867" ],
            [ "Windsor", "+1 519" ],
            [ "Winnipeg", "+1 204" ],
            [ "Woodbridge", "+1 703" ],
            [ "Woodstock", "+1 802" ],
            [ "Wynyard", "+1 306" ],
            [ "Yale", "+1 918" ],
            [ "Yellowknife", "+1 867" ],
            [ "Yorkton", "+1 306" ]
        ],
        "Cape Verde": [
            [ "Praia", "+238" ],
            [ "Sal Island", "+238" ]
        ],
        "Central Africa Rep.": [
            [ "Bangui", "+236" ],
            [ "Bimbo", "+236" ],
            [ "Bossangoa", "+236" ]
        ],
        "Chile": [
            [ "Antofagasta", "+56 55" ],
            [ "Arica", "+56 58" ],
            [ "Calama", "+56 55" ],
            [ "Chillan", "+56 42" ],
            [ "Concepcion", "+56 41" ],
            [ "Copiapo", "+56 52" ],
            [ "Coquimbo", "+56 51" ],
            [ "Curico", "+56 75" ],
            [ "Iquique", "+56 57" ],
            [ "La Serena", "+56 51" ],
            [ "Osorno", "+56 64" ],
            [ "Ovalle", "+56 53" ],
            [ "Puerto Montt", "+56 65" ],
            [ "Punta Arenas", "+56 61" ],
            [ "Rancagua", "+56 72" ],
            [ "Santiago", "+56 2" ],
            [ "Talca", "+56 71" ],
            [ "Talcahuano", "+56 41" ],
            [ "Temuco", "+56 45" ],
            [ "Valdivia", "+56 63" ],
            [ "Valparaiso", "+56 32" ],
            [ "Vina del Mar", "+56 32" ]
        ],
        "China": [
            [ "Aihui", "+86 456" ],
            [ "Akesu", "+86 997" ],
            [ "Ankang", "+86 915" ],
            [ "Anqing", "+86 556" ],
            [ "Anshan", "+86 412" ],
            [ "Anshun", "+86 853" ],
            [ "Anyang", "+86 372" ],
            [ "Baise", "+86 776" ],
            [ "Baoding", "+86 312" ],
            [ "Baoji", "+86 917" ],
            [ "Baotou", "+86 472" ],
            [ "Beihai", "+86 779" ],
            [ "Beijing", "+86 10" ],
            [ "Bengbu", "+86 552" ],
            [ "Benxi", "+86 414" ],
            [ "Changbai", "+86 4458" ],
            [ "Changchun", "+86 431" ],
            [ "Changde", "+86 736" ],
            [ "Changji", "+86 994" ],
            [ "Changsha", "+86 731" ],
            [ "Changshu", "+86 512" ],
            [ "Changzhou", "+86 519" ],
            [ "Chaoyang", "+86 421" ],
            [ "Chengde", "+86 314" ],
            [ "Chengdu", "+86 28" ],
            [ "Chifeng", "+86 476" ],
            [ "Chongqing", "+86 23" ],
            [ "Chuxiong", "+86 878" ],
            [ "Dali", "+86 872" ],
            [ "Dalian", "+86 411" ],
            [ "Dandong", "+86 415" ],
            [ "Daqing", "+86 459" ],
            [ "Datong", "+86 352" ],
            [ "Dongfang", "+86 8003" ],
            [ "Dunhua", "+86 4435" ],
            [ "Dunhuang", "+86 9473" ],
            [ "Erlianhaote", "+86 4813" ],
            [ "Fengcheng", "+86 7888" ],
            [ "Foshan", "+86 757" ],
            [ "Fuding", "+86 5033" ],
            [ "Fushun", "+86 413" ],
            [ "Fuyang", "+86 571" ],
            [ "Fuzhou", "+86 591" ],
            [ "Ganzhou", "+86 797" ],
            [ "Guang an", "+86 8269" ],
            [ "Guangzhou", "+86 20" ],
            [ "Guilin", "+86 773" ],
            [ "Guiyang", "+86 851" ],
            [ "Guyang", "+86 4823" ],
            [ "Haikou", "+86 898" ],
            [ "Hailun", "+86 4652" ],
            [ "Haining", "+86 5834" ],
            [ "Hami", "+86 9022" ],
            [ "Hangzhou", "+86 571" ],
            [ "Hanzhong", "+86 916" ],
            [ "Harbin", "+86 451" ],
            [ "Hechi", "+86 778" ],
            [ "Hefei", "+86 551" ],
            [ "Hohhot", "+86 471" ],
            [ "Huangshi", "+86 714" ],
            [ "Huizhou", "+86 752" ],
            [ "Huzhou", "+86 572" ],
            [ "Jiangjin", "+86 8221" ],
            [ "Jiangling", "+86 716" ],
            [ "Jiangmen", "+86 750" ],
            [ "Jilin", "+86 432" ],
            [ "Jinan", "+86 531" ],
            [ "Jingdezhen", "+86 798" ],
            [ "Jining", "+86 537" ],
            [ "Jinzhou", "+86 416" ],
            [ "Jiujiang", "+86 792" ],
            [ "Jiuquan", "+86 937" ],
            [ "Jixi", "+86 4617" ],
            [ "Kaifeng", "+86 378" ],
            [ "Kashi", "+86 998" ],
            [ "Kunming", "+86 871" ],
            [ "Lanxi", "+86 579" ],
            [ "Lanzhou", "+86 931" ],
            [ "Lhasa", "+86 891" ],
            [ "Liaoyang", "+86 419" ],
            [ "Lijing", "+86 5430" ],
            [ "Linhai", "+86 576" ],
            [ "Lintong", "+86 29" ],
            [ "Linxi", "+86 4868" ],
            [ "Linzhi", "+86 894" ],
            [ "Liuyang", "+86 731" ],
            [ "Liuzhou", "+86 772" ],
            [ "Luoyang", "+86 379" ],
            [ "Maoming", "+86 7683" ],
            [ "Meishan", "+86 8425" ],
            [ "Mianyang", "+86 816" ],
            [ "Miquan", "+86 9041" ],
            [ "Mohe", "+86 457" ],
            [ "Mudanjiang", "+86 467" ],
            [ "Nanchang", "+86 791" ],
            [ "Nanjing", "+86 25" ],
            [ "Nanning", "+86 771" ],
            [ "Nantong", "+86 513" ],
            [ "Nanyang", "+86 377" ],
            [ "Nenjiang", "+86 4665" ],
            [ "Ningbo", "+86 574" ],
            [ "Pingliang", "+86 933" ],
            [ "Qingdao", "+86 532" ],
            [ "Qiqihar", "+86 452" ],
            [ "Qitai", "+86 994" ],
            [ "Quanzhou", "+86 595" ],
            [ "Qujiang", "+86 751" ],
            [ "Ruili", "+86 8885" ],
            [ "Shanghai", "+86 21" ],
            [ "Shantou", "+86 754" ],
            [ "Shaoguan", "+86 751" ],
            [ "Shaoxing", "+86 575" ],
            [ "Shaoyang", "+86 739" ],
            [ "Shenyang", "+86 24" ],
            [ "Shenzhen", "+86 755" ],
            [ "Shijiazhuang", "+86 311" ],
            [ "Shuangcheng", "+86 4615" ],
            [ "Siping", "+86 434" ],
            [ "Stanley", "+86 270" ],
            [ "Suifenhe", "+86 4638" ],
            [ "Tacheng", "+86 9003" ],
            [ "Taiyuan", "+86 351" ],
            [ "Tangshan", "+86 315" ],
            [ "Tianjin", "+86 22" ],
            [ "Tianshui", "+86 938" ],
            [ "Tongliao", "+86 475" ],
            [ "Urumqi", "+86 991" ],
            [ "Weifang", "+86 536" ],
            [ "Weinan", "+86 913" ],
            [ "Wenzhou", "+86 577" ],
            [ "Wudu", "+86 939" ],
            [ "Wuhan", "+86 27" ],
            [ "Wuhu", "+86 553" ],
            [ "Wuyishan", "+86 599" ],
            [ "Xi an", "+86 29" ],
            [ "Xiamen", "+86 592" ],
            [ "Xiangtan", "+86 732" ],
            [ "Xianyang", "+86 910" ],
            [ "Xichang", "+86 834" ],
            [ "Xin an", "+86 5482" ],
            [ "Xining", "+86 971" ],
            [ "Xinjin", "+86 971" ],
            [ "Xinxiang", "+86 373" ],
            [ "Xinyang", "+86 373" ],
            [ "Xinyi", "+86 859" ],
            [ "Xuzhou", "+86 516" ],
            [ "Ya An", "+86 835" ],
            [ "Yan An", "+86 911" ],
            [ "Yangquan", "+86 353" ],
            [ "Yangzhou", "+86 514" ],
            [ "Yanji", "+86 433" ],
            [ "Yibin", "+86 831" ],
            [ "Yinchuan", "+86 951" ],
            [ "Yingkou", "+86 417" ],
            [ "Yining", "+86 999" ],
            [ "Yiwu", "+86 579" ],
            [ "Yiyang", "+86 7038" ],
            [ "Yongchuan", "+86 814" ],
            [ "Yuanmou", "+86 8869" ],
            [ "Yueyang", "+86 730" ],
            [ "Yulin", "+86 912" ],
            [ "Yushu", "+86 976" ],
            [ "Zhangjiakou", "+86 313" ],
            [ "Zhangzhou", "+86 596" ],
            [ "Zhanjiang", "+86 759" ],
            [ "Zhengzhou", "+86 371" ],
            [ "Zhenjiang", "+86 511" ],
            [ "Zhijiang", "+86 7420" ],
            [ "Zhumadian", "+86 3011" ],
            [ "Zibo", "+86 533" ],
            [ "Zunyi", "+86 852" ]
        ],
        "Colombia": [
            [ "Armenia", "+57 6" ],
            [ "Barranquilla", "+57 5" ],
            [ "Bogota", "+57 1" ],
            [ "Bucaramanga", "+57 7" ],
            [ "Buenaventura", "+57 222" ],
            [ "Cali", "+57 2" ],
            [ "Cartagena", "+57 5" ],
            [ "Cucuta", "+57 7" ],
            [ "Ibague", "+57 8" ],
            [ "Manizales", "+57 6" ],
            [ "Medellin", "+57 4" ],
            [ "Neiva", "+57 8" ],
            [ "Palmira", "+57 2" ],
            [ "Pasto", "+57 27" ],
            [ "Pereira", "+57 6" ],
            [ "Santa Marta", "+57 5" ],
            [ "Soledad", "+57 831" ],
            [ "Villavicencio", "+57 8" ]
        ],
        "Comoros": [
            [ "Moroni", "+269 73" ]
        ],
        "Congo": [
            [ "Kinshasa", "+243 12" ]
        ],
        "Congo (Rep.)": [
            [ "Brazzaville", "+242" ]
        ],
        "Costa Rica": [
            [ "Limon", "+506 719" ],
            [ "San José", "506" ]
        ],
        "Cote d'Ivoire": [
            [ "Abengourou", "+225 35" ],
            [ "Abidjan", "+225 21" ],
            [ "Abobo", "+225 24" ],
            [ "Banco", "+225 23" ],
            [ "Bouaké", "+225 31" ],
            [ "Cocody", "+225 22" ],
            [ "Daloa", "+225 32" ],
            [ "Korhogo", "+225 36" ],
            [ "Man", "+225 33" ],
            [ "Plateau", "+225 20" ],
            [ "Yamoussoukro", "+225 30" ]
        ],
        "Croatia": [
            [ "Bjelovar", "+385 43" ],
            [ "Cakovec", "+385 40" ],
            [ "Dubrovnik", "+385 20" ],
            [ "Gospic", "+385 53" ],
            [ "Karlovac", "+385 47" ],
            [ "Koprivnica", "+385 48" ],
            [ "Krapina", "+385 49" ],
            [ "Mobile Phones", "+385 95" ],
            [ "Osijek", "+385 31" ],
            [ "Pazin", "+385 52" ],
            [ "Pozega", "+385 34" ],
            [ "Rijeka", "+385 51" ],
            [ "Sibenik", "+385 22" ],
            [ "Sisak", "+385 44" ],
            [ "Slavonski Brod", "+385 35" ],
            [ "Split", "+385 21" ],
            [ "Varazdin", "+385 42" ],
            [ "Vinkovci", "+385 32" ],
            [ "Virovitica", "+385 33" ],
            [ "Zadar", "+385 23" ],
            [ "Zagreb", "+385 1" ]
        ],
        "Cuba": [
            [ "Abreus", "+53 43" ],
            [ "Aguacate", "+53 64" ],
            [ "Aguada de Pasajeros", "+53 43" ],
            [ "Alquízar", "+53 67" ],
            [ "Alto Cedro", "+53 24" ],
            [ "Amancio", "+53 31" ],
            [ "Antilla", "+53 24" ],
            [ "Artemisa", "+53 63" ],
            [ "Baguanos", "+53 24" ],
            [ "Bahia Honda", "+53 86" ],
            [ "Banes", "+53 24" ],
            [ "Baragua", "+53 33" ],
            [ "Bartle", "+53 31" ],
            [ "Bartolome Maso", "+53 23" ],
            [ "Batabanó", "+53 62" ],
            [ "Batalla de Las Guasimas", "+53 32" ],
            [ "Bauta", "+53 680" ],
            [ "Bayamo", "+53 23" ],
            [ "Bejucal", "+53 66" ],
            [ "Biran", "+53 24" ],
            [ "Boca de Jaruco", "+53 6929" ],
            [ "Bolivia", "+53 33" ],
            [ "Brasil", "+53 32" ],
            [ "Buey Arriba", "+53 23" ],
            [ "Cabañas", "+53 63" ],
            [ "Cacocum", "+53 24" ],
            [ "Caimito del Guayabal", "+53 680" ],
            [ "Calimete", "+53 5" ],
            [ "Calixto Garcia", "+53 24" ],
            [ "Camaguey", "+53 32" ],
            [ "Camalote", "+53 32" ],
            [ "Camarioca", "+53 5" ],
            [ "Camilo Cienfuegos", "+53 692" ],
            [ "Camino", "+53 61" ],
            [ "Campechuela", "+53 23" ],
            [ "Canasí", "+53 6929" ],
            [ "Candido Gonzalez", "+53 32" ],
            [ "Cárdenas", "+53 45" ],
            [ "Cascorro", "+53 32" ],
            [ "Catalina de Güines", "+53 62" ],
            [ "Cauto Cristo", "+53 23" ],
            [ "Cayo Coco", "+53 33" ],
            [ "Cayo Largo", "+53 5" ],
            [ "Ceba Mocha", "+53 5" ],
            [ "Ceballos", "+53 33" ],
            [ "Ceiba Nuevo", "+53 680" ],
            [ "Cespedes", "+53 32" ],
            [ "Chambas", "+53 33" ],
            [ "Chile", "+53 22" ],
            [ "Cidra", "+53 5" ],
            [ "Ciego de ávila", "+53 33" ],
            [ "Ciénaga de Zapata", "+53 59" ],
            [ "Cienfuegos", "+53 432" ],
            [ "Ciro Redondo", "+53 33" ],
            [ "Colón", "+53 5" ],
            [ "Communidad Pueblo Nuevo", "+53 32" ],
            [ "Consolación del Sur", "+53 8" ],
            [ "Contramaestre", "+53 22" ],
            [ "Cortés", "+53 84" ],
            [ "Cristino Naranjo", "+53 24" ],
            [ "Cueto", "+53 24" ],
            [ "Dos Caminos de San Luis", "+53 22" ],
            [ "El Cobre", "+53 22" ],
            [ "El Cristo", "+53 22" ],
            [ "Enrique Varona", "+53 33" ],
            [ "Entronque de Herradura", "+53 8" ],
            [ "Felton", "+53 24" ],
            [ "Florencia", "+53 33" ],
            [ "Florida", "+53 32" ],
            [ "Floro Perez", "+53 24" ],
            [ "Frank Pais", "+53 24" ],
            [ "Gibara", "+53 24" ],
            [ "Gramma", "+53 23" ],
            [ "Guaimaro", "+53 32" ],
            [ "Guanajay", "+53 686" ],
            [ "Guane", "+53 84" ],
            [ "Guantánamo", "+53 21" ],
            [ "Guantanamo Bay Naval Air Stati", "+53 21" ],
            [ "Guardalavaca", "+53 24" ],
            [ "Guaro", "+53 24" ],
            [ "Guatemala", "+53 24" ],
            [ "Guayabal", "+53 31" ],
            [ "Guayacanas", "+53 33" ],
            [ "Güines", "+53 62" ],
            [ "Güira de Melena", "+53 67" ],
            [ "Guisa", "+53 23" ],
            [ "Haiti", "+53 32" ],
            [ "Havana", "+53 7" ],
            [ "Havana (Ciudad La Habana)", "+53 7" ],
            [ "Holguin", "+53 24" ],
            [ "Imias", "+53 32" ],
            [ "Isabel Rubio", "+53 84" ],
            [ "Isla de la Juventud", "+53 61" ],
            [ "Jagüey Grande", "+53 59" ],
            [ "Jaruco", "+53 64" ],
            [ "Jiguani", "+53 23" ],
            [ "Jimaguayu", "+53 32" ],
            [ "Jobabo", "+53 31" ],
            [ "Jovellanos", "+53 5" ],
            [ "Jucaro", "+53 33" ],
            [ "Julio Antonio Mella", "+53 225" ],
            [ "La Boca", "+53 31" ],
            [ "La Coloma", "+53 8" ],
            [ "La Demajagua", "+53 61" ],
            [ "La Fé", "+53 61" ],
            [ "La Jagua", "+53 32" ],
            [ "La Reforma", "+53 61" ],
            [ "La Salud", "+53 66" ],
            [ "La Victoria", "+53 61" ],
            [ "Las Martinas", "+53 84" ],
            [ "Las Mercedes", "+53 23" ],
            [ "Las Ovas", "+53 8" ],
            [ "Las Parras", "+53 31" ],
            [ "Las Tunas", "+53 31" ],
            [ "Limonar", "+53 5" ],
            [ "Lopez Peña", "+53 85" ],
            [ "Los Palacios", "+53 8" ],
            [ "Los Reynaldos", "+53 22" ],
            [ "Lugareño", "+53 32" ],
            [ "Mabay", "+53 23" ],
            [ "Maceo", "+53 24" ],
            [ "Madruga", "+53 64" ],
            [ "Majagua", "+53 33" ],
            [ "Majibacoa", "+53 31" ],
            [ "Manati", "+53 31" ],
            [ "Mangos de Baragua", "+53 225" ],
            [ "Mantua", "+53 84" ],
            [ "Manzanillo", "+53 23" ],
            [ "Marcane", "+53 24" ],
            [ "Marea de Portillo", "+53 23" ],
            [ "Mariel", "+53 63" ],
            [ "Martí", "+53 5" ],
            [ "Matanzas", "+53 52" ],
            [ "Mayari", "+53 24" ],
            [ "Media Luna", "+53 23" ],
            [ "Melena del Sur", "+53 62" ],
            [ "Menendez", "+53 31" ],
            [ "Minas", "+53 32" ],
            [ "Minas de Matahumbre", "+53 8" ],
            [ "Mir", "+53 24" ],
            [ "Miraflores", "+53 338" ],
            [ "Moa", "+53 24" ],
            [ "MOBILE PHONES", "+53 789" ],
            [ "Najasa", "+53 32" ],
            [ "Neuvitas", "+53 32" ],
            [ "Nicaragua", "+53 32" ],
            [ "Nicaro", "+53 24" ],
            [ "Niquero", "+53 23" ],
            [ "Nueva", "+53 62" ],
            [ "Nueva Gerona", "+53 61" ],
            [ "Nueva Paz", "+53 62" ],
            [ "Omaja", "+53 31" ],
            [ "Orlando Gonzalez", "+53 33" ],
            [ "Pablo de Torriente", "+53 86" ],
            [ "Palma Soriano", "+53 225" ],
            [ "Pedro Betancourt", "+53 5" ],
            [ "Peralejo", "+53 23" ],
            [ "Pilon", "+53 23" ],
            [ "Pinar del Rio", "+53 82" ],
            [ "Playa Baracoa", "+53 680" ],
            [ "Playa Garón", "+53 5" ],
            [ "Playa Girón", "+53 5" ],
            [ "Playa Santa Lucia", "+53 32" ],
            [ "Primero de Enero", "+53 33" ],
            [ "Puerto Esperanza", "+53 8" ],
            [ "Puerto Marti", "+53 31" ],
            [ "Puerto Padre", "+53 31" ],
            [ "Quivicán", "+53 67" ],
            [ "Rafael Freyre", "+53 24" ],
            [ "Rio Cauto", "+53 23" ],
            [ "Rodolfo Ramirez Esquivel", "+53 32" ],
            [ "Ruta Invasora", "+53 33" ],
            [ "Sábalo", "+53 84" ],
            [ "Sagua de Tanamo", "+53 24" ],
            [ "San Antonio de Las Vegas", "+53 64" ],
            [ "San Antonio de Los Baños", "+53 650" ],
            [ "San Jose de Las Lajas", "+53 64" ],
            [ "San Juan y Martínez", "+53 8" ],
            [ "San Nicolás de Bari", "+53 62" ],
            [ "Sancti Spíritus", "+53 41" ],
            [ "Sanguili", "+53 33" ],
            [ "Santa Cruz del Norte", "+53 692" ],
            [ "Santa Cruz del Sur", "+53 32" ],
            [ "Santiago de Cuba", "+53 226" ],
            [ "Sibanicu", "+53 32" ],
            [ "Siboney", "+53 32" ],
            [ "Silvio Caro", "+53 63" ],
            [ "Sola", "+53 32" ],
            [ "Tacajo", "+53 24" ],
            [ "Tamarindo", "+53 33" ],
            [ "Tapaste", "+53 64" ],
            [ "Unión de Reyes", "+53 5" ],
            [ "Urbano Noris", "+53 24" ],
            [ "Varadero", "+53 5" ],
            [ "Vasquez", "+53 31" ],
            [ "Velasco", "+53 24" ],
            [ "Venezuela", "+53 33" ],
            [ "Vertientes", "+53 32" ],
            [ "Villa Clara", "+53 42" ],
            [ "Viñales", "+53 8" ],
            [ "Yado del Yeso", "+53 23" ],
            [ "Yara", "+53 23" ],
            [ "Yarual", "+53 338" ]
        ],
        "Cyprus": [
            [ "Akrotiri", "+357" ],
            [ "Cabo Kormakitis", "+357" ],
            [ "Famagusta", "+357 23" ],
            [ "Lárnaca", "+357 24" ],
            [ "Limassol", "+357 25" ],
            [ "Nicosia", "+357 22" ],
            [ "Pafos", "+357 26" ]
        ],
        "Czech Republic": [
            [ "Brno", "+420 54" ],
            [ "Cheb", "+420 166" ],
            [ "Liberec", "+420 48" ],
            [ "Ostrava", "+420 69" ],
            [ "Plzen", "+420 377" ],
            [ "Prague", "420" ],
            [ "Tabor", "+420 712" ]
        ],
        "Denmark": [
            [ "Aalborg", "45" ],
            [ "Århus", "45" ],
            [ "Copenhagen", "45" ],
            [ "Esbjerg", "45" ],
            [ "Odense", "45" ],
            [ "Randers", "45" ],
            [ "Roskilde", "45" ]
        ],
        "Djibouti": [
            [ "Djibouti", "+253" ]
        ],
        "Dominica": [
            [ "Roseau", "+1767 218" ]
        ],
        "Ecuador": [
            [ "Guayaquil", "+593 4" ],
            [ "Quito", "+593 2" ]
        ],
        "Egypt": [
            [ "Al Jizah", "+20 2" ],
            [ "Alexandria", "+20 3" ],
            [ "Assiut", "+20 88" ],
            [ "Aswan", "+20 97" ],
            [ "Cairo", "+20 2" ],
            [ "El Arish", "+20 68" ],
            [ "El Tor", "+20 69" ],
            [ "Hurghada", "+20 65" ],
            [ "Ismailia", "+20 64" ],
            [ "Luxor", "+20 95" ],
            [ "Port Said", "+20 66" ],
            [ "Qina", "+20 96" ],
            [ "Shibîn el Kôm", "+20 48" ],
            [ "Suez", "+20 62" ],
            [ "Zagazig", "+20 55" ]
        ],
        "El Salvador": [
            [ "San Salvador", "503" ],
            [ "Santa Ana", "503" ]
        ],
        "Eritrea": [
            [ "Asmara", "+291 1" ]
        ],
        "Estonia": [
            [ "Tallinn", "372" ],
            [ "Valga", "+372 76" ]
        ],
        "Ethiopia": [
            [ "Addis Ababa", "+251 1" ],
            [ "Gonder", "+251 58" ]
        ],
        "Fiji": [
            [ "Suva", "679" ]
        ],
        "Finland": [
            [ "Äänekoski", "+358 14" ],
            [ "Alajärvi", "+358 6" ],
            [ "Alavus", "+358 6" ],
            [ "Björneborg", "+358 2" ],
            [ "Borgå", "+358 19" ],
            [ "Ekenäs", "+358 19" ],
            [ "Espoo", "+358 9" ],
            [ "Forssa", "+358 3" ],
            [ "Haapajärvi", "+358 8" ],
            [ "Hämeenlinna", "+358 3" ],
            [ "Hangö", "+358 19" ],
            [ "Haukipudas", "+358 8" ],
            [ "Heinola", "+358 3" ],
            [ "Helsingfors", "+358 9" ],
            [ "Helsinki", "+358 9" ],
            [ "Imatra", "+358 5" ],
            [ "Jakobstad", "+358 6" ],
            [ "Jämsä", "+358 14" ],
            [ "Joensuu", "+358 13" ],
            [ "Joutsa", "+358 14" ],
            [ "Jyväskylä", "+358 14" ],
            [ "Kajaani", "+358 8" ],
            [ "Kankaanpää", "+358 2" ],
            [ "Karleby", "+358 6" ],
            [ "Kauhajoki", "+358 6" ],
            [ "Kemi", "+358 16" ],
            [ "Kemijärvi", "+358 16" ],
            [ "Kemiö", "+358 2" ],
            [ "Kempele", "+358 8" ],
            [ "Keuruu", "+358 14" ],
            [ "Kimito", "+358 2" ],
            [ "Kokkola", "+358 6" ],
            [ "Koski Hl", "+358 3" ],
            [ "Koski Tl", "+358 2" ],
            [ "Kotka", "+358 5" ],
            [ "Kouvola", "+358 5" ],
            [ "Kuopio", "+358 17" ],
            [ "Kuusamo", "+358 8" ],
            [ "Lahti", "+358 3" ],
            [ "Lappeenranta", "+358 5" ],
            [ "Lieksa", "+358 13" ],
            [ "Lohja", "+358 19" ],
            [ "Loimaa", "+358 2" ],
            [ "Mariehamn", "+358 18" ],
            [ "Mikkeli", "+358 15" ],
            [ "Muonio", "+358 16" ],
            [ "Orivesi", "+358 3" ],
            [ "Oulu", "+358 8" ],
            [ "Padasjoki", "+358 3" ],
            [ "Parkano", "+358 3" ],
            [ "Pieksämäki", "+358 15" ],
            [ "Pori", "+358 2" ],
            [ "Porvoo", "+358 19" ],
            [ "Raahe", "+358 8" ],
            [ "Rauma", "+358 2" ],
            [ "Rouvesi", "+358 3" ],
            [ "Rovaniemi", "+358 16" ],
            [ "Saarijärvi", "+358 14" ],
            [ "Savonlinna", "+358 15" ],
            [ "Seinäjoki", "+358 6" ],
            [ "Suonenjoki", "+358 17" ],
            [ "Tammerfors", "+358 3" ],
            [ "Tampere", "+358 3" ],
            [ "Tavastehus", "+358 3" ],
            [ "Tornio", "+358 16" ],
            [ "Turku", "+358 2" ],
            [ "Uleåbörg", "+358 8" ],
            [ "Vaasa", "+358 6" ],
            [ "Valkeakoski", "+358 3" ],
            [ "Vammala", "+358 3" ],
            [ "Vanda", "+358 9" ],
            [ "Vantaa", "+358 9" ],
            [ "Varkaus", "+358 17" ],
            [ "Vasa", "+358 6" ],
            [ "Ylivieska", "+358 8" ]
        ],
        "France": [
            [ "Aix en Provence", "+33 4" ],
            [ "Ajaccio", "+33 4" ],
            [ "Angers", "+33 2" ],
            [ "Bastia", "+33 4" ],
            [ "Besançon", "+33 3" ],
            [ "Bordeaux", "+33 5" ],
            [ "Brest", "+33 2" ],
            [ "Caen", "+33 2" ],
            [ "Clermont Ferrand", "+33 4" ],
            [ "Dijon", "+33 3" ],
            [ "Grenoble", "+33 4" ],
            [ "Istres", "+33 4" ],
            [ "Le Havre", "+33 2" ],
            [ "Le Mans", "+33 2" ],
            [ "Lens", "+33 3" ],
            [ "Lille", "+33 3" ],
            [ "Limoges", "+33 5" ],
            [ "Lyon", "+33 4" ],
            [ "Macon", "+33 478" ],
            [ "Marseille", "+33 4" ],
            [ "Montpellier", "+33 4" ],
            [ "Mulhouse", "+33 3" ],
            [ "Nancy", "+33 3" ],
            [ "Nantes", "+33 2" ],
            [ "Nice", "+33 4" ],
            [ "Nimes", "+33 4" ],
            [ "Orleans", "+33 2" ],
            [ "Paris", "+33 1" ],
            [ "Perpignan", "+33 4" ],
            [ "Reims", "+33 3" ],
            [ "Rennes", "+33 2" ],
            [ "Rouen", "+33 2" ],
            [ "Saint Denis", "+33 1" ],
            [ "Saint Etienne du Rouvray", "+33 4" ],
            [ "Strasbourg", "+33 3" ],
            [ "Toulon", "+33 4" ],
            [ "Toulouse", "+33 5" ],
            [ "Tours", "+33 2" ],
            [ "Versailles", "+33 859" ],
            [ "Villeurbanne", "+33 4" ]
        ],
        "French Guiana": [
            [ "Cayenne", "594" ]
        ],
        "Gabon": [
            [ "Libreville", "241" ]
        ],
        "Gambia": [
            [ "Banjul", "+220 42" ]
        ],
        "Georgia": [
            [ "Adigeni", "+995 366" ],
            [ "Akhalgori", "+995 342" ],
            [ "Akhalkalaki", "+995 362" ],
            [ "Akhaltsikhe", "+995 365" ],
            [ "Akhmeta", "+995 349" ],
            [ "Aspindza", "+995 364" ],
            [ "Batumi", "+995 222" ],
            [ "Bolnisi", "+995 358" ],
            [ "Borjomi", "+995 367" ],
            [ "Chiatura", "+995 379" ],
            [ "Dedoplls Tskaro", "+995 356" ],
            [ "Dmanisi", "+995 360" ],
            [ "Dushetl", "+995 344" ],
            [ "Gori", "+995 370" ],
            [ "Gurjaani", "+995 353" ],
            [ "Kareli", "+995 369" ],
            [ "Kaspi", "+995 371" ],
            [ "Kazbegi", "+995 345" ],
            [ "Khashuri", "+995 368" ],
            [ "Kutaisi", "+995 331" ],
            [ "Kvarell", "+995 352" ],
            [ "Lagodekhi", "+995 335" ],
            [ "Marneull", "+995 357" ],
            [ "Mobile Phones", "+995 77" ],
            [ "Ninotsminda", "+995 361" ],
            [ "Ozurgeti", "+995 396" ],
            [ "Poti", "+995 393" ],
            [ "Rustavi", "+995 335" ],
            [ "Sagarejo", "+995 351" ],
            [ "Samtredia", "+995 311" ],
            [ "Senaki", "+995 313" ],
            [ "Signagi", "+995 355" ],
            [ "Sukhumi", "+995 122" ],
            [ "Tbilisi", "+995 32" ],
            [ "Telavi", "+995 350" ],
            [ "Tetri Tskaro", "+995 359" ],
            [ "Tianeti", "+995 348" ],
            [ "Tskaltubo", "+995 340" ],
            [ "Tskhinvall", "+995 341" ],
            [ "Tzalka", "+995 363" ],
            [ "Zestafoni", "+995 392" ],
            [ "Zugdidi", "+995 315" ]
        ],
        "Germany": [
            [ "Aachen", "+49 241" ],
            [ "Augsburg", "+49 821" ],
            [ "Bergisch Gladbach", "+49 2202" ],
            [ "Berlin", "+49 30" ],
            [ "Bielefeld", "+49 521" ],
            [ "Bonn", "+49 228" ],
            [ "Bottrop", "+49 2041" ],
            [ "Braunschweig", "+49 531" ],
            [ "Bremen", "+49 421" ],
            [ "Bremerhaven", "+49 471" ],
            [ "Chemnitz", "+49 371" ],
            [ "Cologne", "+49 221" ],
            [ "Cottbus", "+49 355" ],
            [ "Darmstadt", "+49 6151" ],
            [ "Dortmund", "+49 231" ],
            [ "Dresden", "+49 351" ],
            [ "Duisburg", "+49 203" ],
            [ "Düsseldorf", "+49 211" ],
            [ "Erfurt", "+49 361" ],
            [ "Erlangen", "+49 9131" ],
            [ "Essen", "+49 201" ],
            [ "Frankfurt", "+49 69" ],
            [ "Frankfurt am Main", "+49 69" ],
            [ "Frankfurt an der Oder", "+49 335" ],
            [ "Freiburg", "+49 761" ],
            [ "Fürth", "+49 911" ],
            [ "Gelsenkirchen", "+49 209" ],
            [ "Gera", "+49 365" ],
            [ "Göttingen", "49" ],
            [ "Hagen", "+49 2331" ],
            [ "Halle", "+49 345" ],
            [ "Hamburg", "+49 40" ],
            [ "Hamm", "+49 2381" ],
            [ "Hannover", "+49 511" ],
            [ "Heidelberg", "+49 6221" ],
            [ "Heilbronn", "+49 7131" ],
            [ "Herne", "+49 2323" ],
            [ "Hildesheim", "+49 5121" ],
            [ "Ingolstadt", "+49 841" ],
            [ "Karlsruhe", "+49 721" ],
            [ "Kassel", "+49 561" ],
            [ "Kiel", "+49 431" ],
            [ "Koblenz", "+49 261" ],
            [ "Krefeld", "+49 2151" ],
            [ "Leipzig", "+49 341" ],
            [ "Leverkusen", "+49 214" ],
            [ "Lübeck", "+49 451" ],
            [ "Ludwigsburg", "+49 7141" ],
            [ "Ludwigshafen", "+49 621" ],
            [ "Magdeburg", "+49 391" ],
            [ "Mainz", "+49 6131" ],
            [ "Mannheim", "+49 621" ],
            [ "Mönchengladbach", "+49 2161" ],
            [ "Munich", "+49 89" ],
            [ "Munster", "+49 251" ],
            [ "Neubrandenburg", "+49 395" ],
            [ "Neuss", "+49 2131" ],
            [ "Nuremberg", "+49 911" ],
            [ "Oberhausen", "+49 208" ],
            [ "Offenbach", "+49 69" ],
            [ "Oldenburg", "+49 441" ],
            [ "Osnabrück", "+49 541" ],
            [ "Paderborn", "+49 5251" ],
            [ "Pforzheim", "+49 7231" ],
            [ "Potsdam", "+49 331" ],
            [ "Recklinghausen", "+49 2361" ],
            [ "Regensburg", "+49 941" ],
            [ "Remscheid", "+49 2191" ],
            [ "Rostock", "+49 381" ],
            [ "Saarbrücken", "+49 681" ],
            [ "Salzgitter", "+49 5341" ],
            [ "Schwerin", "+49 385" ],
            [ "Siegen", "+49 271" ],
            [ "Solingen", "+49 212" ],
            [ "Stuttgart", "+49 711" ],
            [ "Ulm", "+49 731" ],
            [ "Wiesbaden", "+49 611" ],
            [ "Wolfsburg", "+49 5361" ],
            [ "Wuppertal", "+49 202" ],
            [ "Würzburg", "+49 931" ],
            [ "Zwickau", "+49 375" ]
        ],
        "Ghana": [
            [ "Accra", "+233 21" ],
            [ "Bolgatanga", "+233 72" ],
            [ "Cape Coast", "+233 42" ],
            [ "Koforidua", "+233 81" ],
            [ "Kumasi", "+233 51" ],
            [ "Takoradi", "+233 31" ],
            [ "Tamale", "+233 71" ],
            [ "Tema", "+233 22" ]
        ],
        "Gibraltar": [
            [ "Gibraltar", "+350" ]
        ],
        "Greece": [
            [ "Acharnes", "+30 210" ],
            [ "Aegina", "+30 2297" ],
            [ "Aeginio", "+30 2353" ],
            [ "Aegio", "+30 2691" ],
            [ "Afidnes", "+30 2295" ],
            [ "Ag. Kirikos", "+30 2275" ],
            [ "Ag. Nikolaos", "+30 2841" ],
            [ "Ag. Sotira", "+30 2293" ],
            [ "Ag. Varvara", "+30 2894" ],
            [ "Agia", "+30 2494" ],
            [ "Agiasos", "+30 2252" ],
            [ "Agrinio", "+30 2641" ],
            [ "Agrinion", "+30 2641" ],
            [ "Aitoliko", "+30 2632" ],
            [ "Akrata", "+30 2696" ],
            [ "Alexandroupoli", "+30 2551" ],
            [ "Alexandroupolis", "+30 2551" ],
            [ "Aliartos", "+30 2268" ],
            [ "Aliveri", "+30 2223" ],
            [ "Almyros", "+30 2422" ],
            [ "Amaliada", "+30 2622" ],
            [ "Amari", "+30 2833" ],
            [ "Amfikleia", "+30 2234" ],
            [ "Amfilochia", "+30 2642" ],
            [ "Amfissa", "+30 2265" ],
            [ "Amynteo", "+30 2386" ],
            [ "Anc. Olympia", "+30 2624" ],
            [ "Andritsena", "+30 2626" ],
            [ "Andros", "+30 2282" ],
            [ "Archagelos", "+30 2244" ],
            [ "Argos", "+30 2751" ],
            [ "Argostoli", "+30 2671" ],
            [ "Aridea", "+30 2384" ],
            [ "Arkalochori", "+30 2891" ],
            [ "Arnea", "+30 2372" ],
            [ "Arta", "+30 2681" ],
            [ "Asprovalta", "+30 2397" ],
            [ "Astros", "+30 2755" ],
            [ "Atalanti", "+30 2233" ],
            [ "Athens", "+30 21" ],
            [ "Chalandritsa", "+30 2694" ],
            [ "Chalkiopoulo", "+30 2647" ],
            [ "Chania", "+30 2821" ],
            [ "Chios", "+30 2271" ],
            [ "Chlkidona", "+30 2391" ],
            [ "Chrysoupoli", "+30 2591" ],
            [ "Corfu", "+30 2661" ],
            [ "Delvinaki", "+30 2657" ],
            [ "Didymoticho", "+30 2553" ],
            [ "Distomo", "+30 2267" ],
            [ "Domokos", "+30 2232" ],
            [ "Domvrena", "+30 2264" ],
            [ "Drama", "+30 2521" ],
            [ "Echinos", "+30 2544" ],
            [ "Edessa", "+30 2381" ],
            [ "Elassona", "+30 2493" ],
            [ "Eleftheroupoli", "+30 2592" ],
            [ "Eretria", "+30 2229" ],
            [ "Farkadona", "+30 2433" ],
            [ "Farsala", "+30 2491" ],
            [ "Feres", "+30 2555" ],
            [ "Filiates", "+30 2664" ],
            [ "Florina", "+30 2385" ],
            [ "Fyties", "+30 2646" ],
            [ "Gargalianoi", "+30 2763" ],
            [ "Giannitsa", "+30 2382" ],
            [ "Glyfada", "+30 210" ],
            [ "Grevena", "+30 2462" ],
            [ "Gytheio", "+30 2733" ],
            [ "Halkida", "+30 2221" ],
            [ "Herakleia", "+30 2325" ],
            [ "Heraklion", "+30 2810" ],
            [ "Heraklion (Iraklion)", "+30 2810" ],
            [ "Iasmos", "+30 2534" ],
            [ "Ierapetra", "+30 2842" ],
            [ "Ierissos", "+30 2377" ],
            [ "Igoumenitsa", "+30 2665" ],
            [ "Ilio", "+30 210" ],
            [ "Iraklion", "+30 281" ],
            [ "K. Nevrokopi", "+30 2523" ],
            [ "Kala Nera", "+30 2423" ],
            [ "Kalabaka", "+30 2432" ],
            [ "Kalamaria", "+30 2310" ],
            [ "Kalamata", "+30 2721" ],
            [ "Kalavrita", "+30 2692" ],
            [ "Kalentzi", "+30 2659" ],
            [ "Kalianoi", "+30 2747" ],
            [ "Kalimnos", "+30 2243" ],
            [ "Kallikrateia", "+30 2399" ],
            [ "Kallisti", "+30 2535" ],
            [ "Kallithea", "+30 210" ],
            [ "Kalloni", "+30 2253" ],
            [ "Kam.Vourla", "+30 2235" ],
            [ "Kanalaki", "+30 2684" ],
            [ "Kantanos", "+30 2823" ],
            [ "Kardamila", "+30 2272" ],
            [ "Karditsa", "+30 2441" ],
            [ "Karies", "+30 2653" ],
            [ "Karpathos", "+30 2245" ],
            [ "Karpenisi", "+30 2237" ],
            [ "Karystos", "+30 2224" ],
            [ "Kassandreia", "+30 2374" ],
            [ "Kastoria", "+30 2467" ],
            [ "Kastri", "+30 2792" ],
            [ "Katerini", "+30 2351" ],
            [ "Kavala", "+30 251" ],
            [ "Kea", "+30 2288" ],
            [ "Keratsini", "+30 210" ],
            [ "Khaniá", "+30 28210" ],
            [ "Khania\/Souda", "+30 28210" ],
            [ "Kiato", "+30 2742" ],
            [ "Kilkis", "+30 2341" ],
            [ "Kissamos", "+30 2822" ],
            [ "Kolympari", "+30 2824" ],
            [ "Komotini", "+30 2531" ],
            [ "Konitsa", "+30 2655" ],
            [ "Kopanaki", "+30 2765" ],
            [ "Korinthos", "+30 2741" ],
            [ "Koroni", "+30 2725" ],
            [ "Kos", "+30 2242" ],
            [ "Kozani", "+30 2461" ],
            [ "Kranidi", "+30 2754" ],
            [ "Krestena", "+30 2625" ],
            [ "Kymi", "+30 2222" ],
            [ "Kyparissia", "+30 2761" ],
            [ "Kyprinos", "+30 2556" ],
            [ "Kythira", "+30 2736" ],
            [ "Lagadas", "+30 2394" ],
            [ "Lagadikia", "+30 2393" ],
            [ "Lagonisi", "+30 2291" ],
            [ "Lamia", "+30 2231" ],
            [ "Larissa", "+30 241" ],
            [ "Lavrion", "+30 2292" ],
            [ "Lechena", "+30 2623" ],
            [ "Lefkada", "+30 2645" ],
            [ "Lefkimi Corfu", "+30 2662" ],
            [ "Leonidio", "+30 2757" ],
            [ "Leros", "+30 2247" ],
            [ "Levidi", "+30 2796" ],
            [ "Lidoriki", "+30 2266" ],
            [ "Limenari", "+30 2593" ],
            [ "Limin Chersonisou", "+30 2897" ],
            [ "Livadeia", "+30 2261" ],
            [ "Loutra Aidipsou", "+30 2226" ],
            [ "Loutraki", "+30 2744" ],
            [ "Lygourgio", "+30 2753" ],
            [ "Makrakomi", "+30 2236" ],
            [ "Makrychori", "+30 2495" ],
            [ "Mantoudi", "+30 2227" ],
            [ "Markopoulo", "+30 2299" ],
            [ "Mataraga", "+30 2635" ],
            [ "Megalopoli", "+30 2791" ],
            [ "Megara", "+30 2296" ],
            [ "Meligalas", "+30 2724" ],
            [ "Messini", "+30 2722" ],
            [ "Messologi", "+30 2631" ],
            [ "Mikonos", "+30 2289" ],
            [ "Milos", "+30 2287" ],
            [ "Mirina", "+30 2254" ],
            [ "Mitilini", "+30 2251" ],
            [ "Moires", "+30 2892" ],
            [ "Molaoi", "+30 2732" ],
            [ "Moudania", "+30 2373" ],
            [ "Mouzaki", "+30 2445" ],
            [ "Nafpaktos", "+30 2634" ],
            [ "Nafplion", "+30 2752" ],
            [ "Naousa", "+30 2332" ],
            [ "Naxos", "+30 2285" ],
            [ "Nea Smyrni", "+30 210" ],
            [ "Nemea", "+30 2746" ],
            [ "Nigrita", "+30 2322" ],
            [ "Nikaia", "+30 210" ],
            [ "Nikitas", "+30 2375" ],
            [ "Orestiada", "+30 2552" ],
            [ "Palamas", "+30 2444" ],
            [ "Paramythia", "+30 2666" ],
            [ "Paranesti", "+30 2524" ],
            [ "Paros", "+30 2284" ],
            [ "Patra", "+30 261" ],
            [ "Patras", "+30 2610" ],
            [ "Perama", "+30 2834" ],
            [ "Peramos", "+30 2594" ],
            [ "Perdika", "+30 2654" ],
            [ "Perea", "+30 2392" ],
            [ "Peristeri", "+30 210" ],
            [ "Peristerion", "+30 210" ],
            [ "Philippiada", "+30 2683" ],
            [ "Piraeus", "+30 210" ],
            [ "Plaka", "+30 2352" ],
            [ "Polikastro", "+30 2343" ],
            [ "Polygyros", "+30 2371" ],
            [ "Poros", "+30 2298" ],
            [ "Préveza", "+30 2682" ],
            [ "Prosotsani", "+30 2522" ],
            [ "Psachna", "+30 2228" ],
            [ "Ptolemaida", "+30 2463" ],
            [ "Pyli", "+30 2434" ],
            [ "Pylos", "+30 2723" ],
            [ "Pyrgos", "+30 2621" ],
            [ "Pyrgos (Creta)", "+30 2893" ],
            [ "Rafina", "+30 2294" ],
            [ "Rethymno", "+30 2831" ],
            [ "Rhodes", "+30 2241" ],
            [ "Ródhos", "+30 22410" ],
            [ "Rodopoli", "+30 2327" ],
            [ "Salakos", "+30 2246" ],
            [ "Sami", "+30 2674" ],
            [ "Samos", "+30 2273" ],
            [ "Sapes", "+30 2532" ],
            [ "Serres", "+30 2321" ],
            [ "Servia", "+30 2464" ],
            [ "Siatista", "+30 2465" ],
            [ "Sidirokastro", "+30 2323" ],
            [ "Siros", "+30 2281" ],
            [ "Sitia", "+30 2843" ],
            [ "Skala", "+30 2735" ],
            [ "Skiathos", "+30 2427" ],
            [ "Skopelos", "+30 2424" ],
            [ "Skripero Corfu", "+30 2663" ],
            [ "Sochos", "+30 2395" ],
            [ "Sofades", "+30 2443" ],
            [ "Soufli", "+30 2554" ],
            [ "Sparti", "+30 2731" ],
            [ "Spili", "+30 2832" ],
            [ "Stavroupoli", "+30 2542" ],
            [ "Stilida", "+30 2238" ],
            [ "Stratoni", "+30 2376" ],
            [ "Tampouria", "+30 2656" ],
            [ "Thermo", "+30 2644" ],
            [ "Thessaloniki", "+30 231" ],
            [ "Thira", "+30 2286" ],
            [ "Thiva", "+30 2262" ],
            [ "Tinos", "+30 2283" ],
            [ "Trikala", "+30 2431" ],
            [ "Tripolis", "+30 271" ],
            [ "Tropea", "+30 2797" ],
            [ "Tyrnavos", "+30 2492" ],
            [ "Tzermiades", "+30 2844" ],
            [ "Vamos", "+30 2825" ],
            [ "Vasilika", "+30 2396" ],
            [ "Velestino", "+30 2425" ],
            [ "Veroia", "+30 2331" ],
            [ "Viannos", "+30 2895" ],
            [ "Vilia", "+30 2263" ],
            [ "Vitina", "+30 2795" ],
            [ "Volissos", "+30 2274" ],
            [ "Volos", "+30 24210" ],
            [ "Vonitsa", "+30 2643" ],
            [ "Voulgareli", "+30 2685" ],
            [ "Xanthi", "+30 2541" ],
            [ "Xylagani", "+30 2533" ],
            [ "Xylokastro", "+30 2743" ],
            [ "Zagora", "+30 2426" ],
            [ "Zakynthos", "+30 2695" ],
            [ "Zichni", "+30 2324" ],
            [ "Zitsa", "+30 2658" ]
        ],
        "Guadeloupe": [
            [ "Basse Terre", "+502 81" ],
            [ "Capesterre", "+502 86" ],
            [ "Gosier", "+502 84" ],
            [ "Grand Bourg", "+502 97" ],
            [ "Guatemala", "502" ],
            [ "Jarry", "+502 26" ]
        ],
        "Guatemala": [
            [ "Guatemala City", "+502 2" ],
            [ "Quetzaltenango", "502" ],
            [ "San Jose", "+502 309" ]
        ],
        "Guayana": [
            [ "Georgetown", "+592 223" ],
            [ "New Amsterdam", "+592 333" ]
        ],
        "Guinea": [
            [ "Boké", "+224 31" ],
            [ "Boussoura", "+224 46" ],
            [ "Conakry", "+224 4" ],
            [ "Dalaba", "+224 69" ],
            [ "Faranah", "+224 81" ],
            [ "Fria", "+224 24" ],
            [ "Guéckédou", "+224 97" ],
            [ "Kamsar", "+224 32" ],
            [ "Kankan", "+224 71" ],
            [ "Kindia", "+224 61" ],
            [ "Kissidougou", "+224 98" ],
            [ "Labé", "+224 51" ],
            [ "Macenta", "+224 94" ],
            [ "Mamou", "+224 68" ],
            [ "N'Zérékoré", "+224 91" ],
            [ "Pita", "+224 53" ],
            [ "Sangoya", "+224 42" ],
            [ "Télimélé", "+224 613" ]
        ],
        "Guinea Bissau": [
            [ "Bissau", "+245" ]
        ],
        "Haiti": [
            [ "Port au Prince", "509" ]
        ],
        "Honduras": [
            [ "San Pedro Sula", "+504 5" ],
            [ "Tegucigalpa", "+504 2" ]
        ],
        "Hong Kong": [
            [ "Hong Kong", "852" ],
            [ "Kowloon", "852" ]
        ],
        "Hungary": [
            [ "Abasar", "+36 37" ],
            [ "Baja", "+36 79" ],
            [ "Balassagyarmat", "+36 35" ],
            [ "Balatonaliga", "+36 84" ],
            [ "Békéscsaba", "+36 66" ],
            [ "Berettyóújfalu", "+36 54" ],
            [ "Biatorbágy", "+36 23" ],
            [ "Budapest", "+36 1" ],
            [ "Budapest\/lorinc", "+36 1" ],
            [ "Cegléd", "+36 53" ],
            [ "Debrecen", "+36 52" ],
            [ "Dorgicse", "+36 80" ],
            [ "Dunaújváros", "+36 25" ],
            [ "Dunaújvárosi", "+36 25" ],
            [ "Eger", "+36 36" ],
            [ "Esztergom", "+36 33" ],
            [ "Fertoboz", "+36 99" ],
            [ "Gödöllo", "+36 28" ],
            [ "Gyöngyös", "+36 37" ],
            [ "Györ", "+36 96" ],
            [ "Jászberény", "+36 57" ],
            [ "Kaposvár", "+36 82" ],
            [ "Karcag", "+36 59" ],
            [ "Kazincbarcika", "+36 48" ],
            [ "Kecskemét", "+36 76" ],
            [ "Keszthely", "+36 83" ],
            [ "Kiskorös", "+36 78" ],
            [ "Kiskunhalas", "+36 77" ],
            [ "Kisvárda", "+36 45" ],
            [ "Komlo", "+36 72" ],
            [ "Marcali", "+36 85" ],
            [ "Mátészalka", "+36 44" ],
            [ "Mezokövesd", "+36 49" ],
            [ "Miskolc", "+36 46" ],
            [ "Mohács", "+36 69" ],
            [ "Monor", "+36 29" ],
            [ "Nagykanizsa", "+36 93" ],
            [ "Nyíregyháza", "+36 42" ],
            [ "Orosháza", "+36 68" ],
            [ "Ozd", "+36 48" ],
            [ "Paks", "+36 75" ],
            [ "Pápa", "+36 89" ],
            [ "Pécs", "+36 72" ],
            [ "Pecsvarad", "+36 72" ],
            [ "Salgótarján", "+36 32" ],
            [ "Sárvár", "+36 95" ],
            [ "Siófok", "+36 84" ],
            [ "Sopron", "+36 99" ],
            [ "Szeged", "+36 62" ],
            [ "Székesfehérvár", "+36 22" ],
            [ "Szekszárd", "+36 74" ],
            [ "Szentendre", "+36 26" ],
            [ "Szentes", "+36 63" ],
            [ "Szerencs", "+36 47" ],
            [ "Szigetszentmiklós", "+36 24" ],
            [ "Szigetvár", "+36 73" ],
            [ "Szolnok", "+36 56" ],
            [ "Szombathely", "+36 94" ],
            [ "Tapolca", "+36 87" ],
            [ "Tatabánya", "+36 34" ],
            [ "Vác", "+36 27" ],
            [ "Vacs", "+36 27" ],
            [ "Veszprém", "+36 88" ],
            [ "Zalaegerszeg", "+36 92" ]
        ],
        "Iceland": [
            [ "Akureyri", "+354 4" ],
            [ "Akurnes", "+354 4" ],
            [ "Hveragerði", "+354 4" ],
            [ "Keflavik", "+354 4" ],
            [ "Reykjavík", "+354 5" ],
            [ "Vestmannaeyjar", "+354 4" ]
        ],
        "India": [
            [ "Agartala", "+91 381" ],
            [ "Agra", "+91 562" ],
            [ "Ahmedabad", "+91 79" ],
            [ "Aizawl", "+91 389" ],
            [ "Ajmer", "+91 145" ],
            [ "Akbarpur", "+91 5271" ],
            [ "Akola", "+91 724" ],
            [ "Alappuzha", "+91 477" ],
            [ "Aligarh", "+91 571" ],
            [ "Alipore", "+91 33" ],
            [ "Alwar", "+91 144" ],
            [ "Amravati", "+91 721" ],
            [ "Amritsar", "+91 183" ],
            [ "Amroha", "+91 5922" ],
            [ "Anand", "+91 2692" ],
            [ "Anantapur", "+91 8554" ],
            [ "Anantnag", "+91 193" ],
            [ "Angul", "+91 6764" ],
            [ "Araria", "+91 6453" ],
            [ "Arrah", "+91 6182" ],
            [ "Asansol", "+91 341" ],
            [ "Auraiya", "+91 5683" ],
            [ "Aurangabad", "+91 2432" ],
            [ "Azamgarh", "+91 5462" ],
            [ "Badaun", "+91 5832" ],
            [ "Bagpat", "+91 1234" ],
            [ "Baharampur", "+91 3482" ],
            [ "Bahraich", "+91 5252" ],
            [ "Balaghat", "+91 7632" ],
            [ "Balangir", "+91 6652" ],
            [ "Balasore", "+91 6782" ],
            [ "Ballia", "+91 5498" ],
            [ "Balrampur", "+91 5263" ],
            [ "Balurghat", "+91 3522" ],
            [ "Banda", "+91 5192" ],
            [ "Bangalore", "+91 80" ],
            [ "Banka", "+91 6424" ],
            [ "Bankura", "+91 3242" ],
            [ "Banswara", "+91 2962" ],
            [ "Barabanki", "+91 5248" ],
            [ "Baramulla", "+91 1952" ],
            [ "Baran", "+91 7453" ],
            [ "Barasat", "+91 33" ],
            [ "Barddhaman", "+91 342" ],
            [ "Bardhaman", "+91 342" ],
            [ "Bareilly", "+91 581" ],
            [ "Bargarh", "+91 6646" ],
            [ "Baripada", "+91 6792" ],
            [ "Barmer", "+91 2982" ],
            [ "Barnala", "+91 1679" ],
            [ "Baroda", "+91 265" ],
            [ "Barwani", "+91 7290" ],
            [ "Basti", "+91 5542" ],
            [ "Bathinda", "+91 164" ],
            [ "Beawar", "+91 1462" ],
            [ "Beed", "+91 2442" ],
            [ "Begusarai", "+91 6243" ],
            [ "Berhampur", "+91 680" ],
            [ "Bettiah", "+91 6254" ],
            [ "Betul", "+91 7141" ],
            [ "Bhabua", "+91 6189" ],
            [ "Bhadrachalam", "+91 8743" ],
            [ "Bhadrak", "+91 6784" ],
            [ "Bhagalpur", "+91 641" ],
            [ "Bhandara", "+91 7184" ],
            [ "Bharatpur", "+91 5644" ],
            [ "Bharuch", "+91 2642" ],
            [ "Bhavnagar", "+91 278" ],
            [ "Bhawanipatna", "+91 6670" ],
            [ "Bhilwara", "+91 1482" ],
            [ "Bhind", "+91 7534" ],
            [ "Bhinga", "+91 5250" ],
            [ "Bhopal", "+91 755" ],
            [ "Bhubaneshwar", "+91 674" ],
            [ "Bhubaneswar", "+91 674" ],
            [ "Bhuj", "+91 2832" ],
            [ "Bijnor", "+91 1342" ],
            [ "Bikaner", "+91 151" ],
            [ "Bokaro Steel City", "+91 6542" ],
            [ "Bombay", "+91 22" ],
            [ "Boudh", "+91 6841" ],
            [ "Bulandshahr", "+91 5732" ],
            [ "Buldhana", "+91 7262" ],
            [ "Bundi", "+91 747" ],
            [ "Burhanpur", "+91 7325" ],
            [ "Buxar", "+91 6183" ],
            [ "Calcutta", "+91 33" ],
            [ "Chandauli", "+91 5412" ],
            [ "Chandigarh", "+91 172" ],
            [ "Chandrapur", "+91 7172" ],
            [ "Chennai", "+91 44" ],
            [ "Chennai (formerly Madras)", "+91 44" ],
            [ "Chennai (Madras)", "+91 44" ],
            [ "Cherrapunji", "+91 3637" ],
            [ "Chhapra", "+91 6152" ],
            [ "Chhatarpur", "+91 7682" ],
            [ "Chhatrapur", "+91 6811" ],
            [ "Chhindwara", "+91 7162" ],
            [ "Chitrakuta", "+91 5194" ],
            [ "Chittoor", "+91 8572" ],
            [ "Chittorgarh", "+91 8572" ],
            [ "Churu", "+91 1562" ],
            [ "Cochin (Kochi)", "+91 484" ],
            [ "Coimbator", "+91 422" ],
            [ "Coimbatore", "+91 422" ],
            [ "Cooch Behar", "+91 3582" ],
            [ "Cuddalore", "+91 4142" ],
            [ "Cuttack", "+91 671" ],
            [ "Daman", "+91 260" ],
            [ "Damoh", "+91 7638" ],
            [ "Darbhanga", "+91 6272" ],
            [ "Darjeeling", "+91 354" ],
            [ "Datia", "+91 7522" ],
            [ "Dausa", "+91 1427" ],
            [ "Debagarh", "+91 6641" ],
            [ "Dehra Dun", "+91 135" ],
            [ "Dehradun", "+91 135" ],
            [ "Delhi", "+91 11" ],
            [ "Deogarh", "+91 6432" ],
            [ "Deoghar", "+91 6432" ],
            [ "Deoria", "+91 5568" ],
            [ "Dewas", "+91 7272" ],
            [ "Dhanbad", "+91 326" ],
            [ "Dhar", "+91 7292" ],
            [ "Dharmapuri", "+91 4342" ],
            [ "Dhenkanal", "+91 6762" ],
            [ "Dholpur", "+91 5642" ],
            [ "Dhule", "+91 2562" ],
            [ "Dibrugarh", "+91 373" ],
            [ "Dimapur", "+91 3862" ],
            [ "Dindigul", "+91 451" ],
            [ "Dispur", "+91 361" ],
            [ "Dungarpur", "+91 2964" ],
            [ "Eluru", "+91 8812" ],
            [ "Erode", "+91 424" ],
            [ "Etah", "+91 5742" ],
            [ "Etawah", "+91 5688" ],
            [ "Faizabad", "+91 5278" ],
            [ "Faridabad", "+91 129" ],
            [ "Faridkot", "+91 1639" ],
            [ "Fatehgarh", "+91 5692" ],
            [ "Fatehgarh Sahib", "+91 1763" ],
            [ "Fatehpur", "+91 5240" ],
            [ "Fathepur Sikri", "+91 5619" ],
            [ "Firozabad", "+91 5612" ],
            [ "Firozpur", "+91 1632" ],
            [ "Gadchiroli", "+91 7132" ],
            [ "Gandhinagar", "+91 2712" ],
            [ "Ganganagar", "+91 154" ],
            [ "Gangtok", "+91 3592" ],
            [ "Gaya", "+91 631" ],
            [ "Ghaziabad", "+91 120" ],
            [ "Ghazipur", "+91 548" ],
            [ "Giridih", "+91 1933" ],
            [ "Gonda", "+91 5262" ],
            [ "Gondia", "+91 7182" ],
            [ "Gopalganj", "+91 6156" ],
            [ "Gorakhpur", "+91 551" ],
            [ "Gumla", "+91 6524" ],
            [ "Guna", "+91 7542" ],
            [ "Guntur", "+91 863" ],
            [ "Gurdaspur", "+91 1874" ],
            [ "Gurgaon", "+91 124" ],
            [ "Guwahati", "+91 361" ],
            [ "Gwalior", "+91 751" ],
            [ "Gyanpur", "+91 5414" ],
            [ "Hajipur", "+91 6224" ],
            [ "Haldwani", "+91 5946" ],
            [ "Hamirpur", "+91 5282" ],
            [ "Hanumangarh", "+91 1552" ],
            [ "Harda", "+91 7577" ],
            [ "Hardoi", "+91 5852" ],
            [ "Haridwar", "+91 1332" ],
            [ "Hathras", "+91 5722" ],
            [ "Hazaribagh", "+91 6546" ],
            [ "Hingoli", "+91 2456" ],
            [ "Hoshangabad", "+91 7574" ],
            [ "Hoshiarpur", "+91 1882" ],
            [ "Howrah", "+91 33" ],
            [ "Hugli-Chuchura", "+91 33" ],
            [ "Hyderabad", "+91 40" ],
            [ "Imphal", "+91 3852" ],
            [ "Indore", "+91 731" ],
            [ "Itanagar", "+91 360" ],
            [ "Jabalpur", "+91 761" ],
            [ "Jagatsinghpur", "+91 6724" ],
            [ "Jaipur", "+91 141" ],
            [ "Jaisalmer", "+91 2922" ],
            [ "Jalandhar", "+91 181" ],
            [ "Jalgaon", "+91 257" ],
            [ "Jalna", "+91 2482" ],
            [ "Jalore", "+91 2972" ],
            [ "Jalpaiguri", "+91 3561" ],
            [ "Jammu", "+91 191" ],
            [ "Jamnagar", "+91 288" ],
            [ "Jamshedpur", "+91 657" ],
            [ "Jamui", "+91 6345" ],
            [ "Jaunpur", "+91 5452" ],
            [ "Jehanabad", "+91 6114" ],
            [ "Jhabua", "+91 7392" ],
            [ "Jhalawar", "+91 7432" ],
            [ "Jhansi", "+91 510" ],
            [ "Jharsuguda", "+91 6645" ],
            [ "Jhunjhunu", "+91 1595" ],
            [ "Jodhpur", "+91 291" ],
            [ "Jullundur", "+91 181" ],
            [ "Junagadh", "+91 285" ],
            [ "Kalpetta", "+91 4936" ],
            [ "Kanchipuram", "+91 44" ],
            [ "Kannauj", "+91 5694" ],
            [ "Kanpur", "+91 512" ],
            [ "Kapurthala", "+91 1822" ],
            [ "Karauli", "+91 7464" ],
            [ "Karjat", "+91 2489" ],
            [ "Karur", "+91 4324" ],
            [ "Kasaragod", "+91 494" ],
            [ "Kathua", "+91 1922" ],
            [ "Katihar", "+91 6452" ],
            [ "Katni", "+91 7622" ],
            [ "Kavaratti", "+91 4896" ],
            [ "Kendrapara", "+91 6727" ],
            [ "Kendujhar", "+91 6766" ],
            [ "Khagaria", "+91 6244" ],
            [ "Khalilabad", "+91 5547" ],
            [ "Khandwa", "+91 733" ],
            [ "Kharagpur", "+91 3222" ],
            [ "Khargone", "+91 7282" ],
            [ "Khordha", "+91 6755" ],
            [ "Kishanganj", "+91 6466" ],
            [ "Kochi", "+91 484" ],
            [ "Kohima", "+91 370" ],
            [ "Kolhapur", "+91 231" ],
            [ "Kolkata", "+91 33" ],
            [ "Kolkata (Calcutta)", "+91 33" ],
            [ "Kolkatta (formerly Calcutta)", "+91 33" ],
            [ "Kollam", "+91 474" ],
            [ "Koraput", "+91 6852" ],
            [ "Kota", "+91 744" ],
            [ "Kottayam", "+91 481" ],
            [ "Kozhikode", "+91 495" ],
            [ "Krishnagiri", "+91 4343" ],
            [ "Krishnanagar", "+91 3472" ],
            [ "Kulti", "+91 341" ],
            [ "Lakhimpur", "+91 5872" ],
            [ "Lakhisarai", "+91 6346" ],
            [ "Lalitpur", "+91 5176" ],
            [ "Latur", "+91 2382" ],
            [ "Lucknow", "+91 522" ],
            [ "Ludhiana", "+91 161" ],
            [ "Madhepura", "+91 6476" ],
            [ "Madhubani", "+91 6276" ],
            [ "Madras", "+91 44" ],
            [ "Madurai", "+91 452" ],
            [ "Maharajganj", "+91 5523" ],
            [ "Mahoba", "+91 5281" ],
            [ "Mainpuri", "+91 5672" ],
            [ "Malda", "+91 3512" ],
            [ "Malkangiri", "+91 6861" ],
            [ "Mandla", "+91 7642" ],
            [ "Mandsaur", "+91 7422" ],
            [ "Manipal", "+91 8252" ],
            [ "Manjhanpur", "+91 5331" ],
            [ "Mansa", "+91 1652" ],
            [ "Margao", "+91 8342" ],
            [ "Mathura", "+91 565" ],
            [ "Mau", "+91 5195" ],
            [ "Meerut", "+91 121" ],
            [ "Midnapore", "+91 3222" ],
            [ "Mirzapur", "+91 5442" ],
            [ "Moga", "+91 1636" ],
            [ "Mohali", "+91 172" ],
            [ "Moradabad", "+91 591" ],
            [ "Morena", "+91 7532" ],
            [ "Motihari", "+91 6252" ],
            [ "Mount Abu", "+91 2974" ],
            [ "Muktsar", "+91 1633" ],
            [ "Mumbai", "+91 22" ],
            [ "Mumbai (Bombay)", "+91 22" ],
            [ "Mumbai (formerly Bombay )", "+91 22" ],
            [ "Munger", "+91 6344" ],
            [ "Mussooree", "+91 1362" ],
            [ "Muzaffarnagar", "+91 131" ],
            [ "Muzaffarpur", "+91 621" ],
            [ "Mysore", "+91 821" ],
            [ "Nabarangpur", "+91 685" ],
            [ "Nadiad", "+91 268" ],
            [ "Nagaon", "+91 3672" ],
            [ "Nagapattinam", "+91 4365" ],
            [ "Nagaur", "+91 1582" ],
            [ "Nagercoil", "+91 4652" ],
            [ "Nagpur", "+91 712" ],
            [ "Nalanda", "+91 6119" ],
            [ "Namakkal", "+91 4286" ],
            [ "Nanded", "+91 2462" ],
            [ "Nandurbar", "+91 2564" ],
            [ "Narsinghpur", "+91 7792" ],
            [ "Nashik", "+91 253" ],
            [ "Nasik", "+91 253" ],
            [ "Naugarh", "+91 5544" ],
            [ "Navi Mumbai", "+91 22" ],
            [ "Navsari", "+91 2637" ],
            [ "Nawabganj", "+91 6324" ],
            [ "Nawada", "+91 6324" ],
            [ "Nawanshahr", "+91 1823" ],
            [ "Nayagarh", "+91 6753" ],
            [ "Neemuch", "+91 7423" ],
            [ "New Delhi", "+91 11" ],
            [ "New Okhla Industrial Development Authority", "+91 120" ],
            [ "Nuapada", "+91 6678" ],
            [ "Ootacamund", "+91 423" ],
            [ "Orai", "+91 5162" ],
            [ "Osmanabad", "+91 2472" ],
            [ "Padrauna", "+91 5564" ],
            [ "Painavu", "+91 486" ],
            [ "Palakkad", "+91 491" ],
            [ "Pampore", "+91 1933" ],
            [ "Panaji", "+91 832" ],
            [ "Panchkula", "+91 172" ],
            [ "Panipat", "+91 180" ],
            [ "Panna", "+91 7732" ],
            [ "Panskura", "+91 3228" ],
            [ "Panvel", "+91 22" ],
            [ "Paralakhemundi", "+91 6815" ],
            [ "Parbhani", "+91 2452" ],
            [ "Pathanamthitta", "+91 468" ],
            [ "Patiala", "+91 175" ],
            [ "Patna", "+91 612" ],
            [ "Perambalur", "+91 4328" ],
            [ "Phulbani", "+91 6842" ],
            [ "Pilibhit", "+91 5882" ],
            [ "Ponnani", "+91 483" ],
            [ "Port Blair", "+91 3192" ],
            [ "Pratapgarh", "+91 5342" ],
            [ "Puducherry", "+91 413" ],
            [ "Pudukkottai", "+91 4322" ],
            [ "Pune", "+91 20" ],
            [ "Pune (formerly Poona)", "+91 20" ],
            [ "Puri", "+91 6752" ],
            [ "Purnia", "+91 6454" ],
            [ "Purulia", "+91 3252" ],
            [ "Pushkar", "+91 145" ],
            [ "Rae Bareli", "+91 535" ],
            [ "Raebareli", "+91 535" ],
            [ "Raiganj", "+91 3523" ],
            [ "Raipur", "+91 771" ],
            [ "Rajgarh", "+91 7372" ],
            [ "Rajkot", "+91 281" ],
            [ "Rajsamand", "+91 2952" ],
            [ "Ramanathapuram", "+91 4567" ],
            [ "Rampur", "+91 595" ],
            [ "Ranchi", "+91 651" ],
            [ "Ranthambhore Natl. Park", "+91 7462" ],
            [ "Ratlam", "+91 7412" ],
            [ "Ratnagiri", "+91 2353" ],
            [ "Rayagada", "+91 6856" ],
            [ "Rewa", "+91 7662" ],
            [ "Robertsganj", "+91 5444" ],
            [ "Roorkee", "+91 1332" ],
            [ "Rourkela", "+91 661" ],
            [ "Rupnagar", "+91 1881" ],
            [ "Sagar", "+91 7582" ],
            [ "Saharanpur", "+91 132" ],
            [ "Saharsa", "+91 6478" ],
            [ "Samastipur", "+91 6274" ],
            [ "Sambalpur", "+91 663" ],
            [ "Sangli", "+91 233" ],
            [ "Sangrur", "+91 1672" ],
            [ "Sariska", "+91 144" ],
            [ "Sasaram", "+91 6184" ],
            [ "Satara", "+91 2162" ],
            [ "Satna", "+91 7672" ],
            [ "Sawai Madhopur", "+91 7462" ],
            [ "Sehore", "+91 7562" ],
            [ "Seoni", "+91 7692" ],
            [ "Shahdol", "+91 7652" ],
            [ "Shahjahanpur", "+91 5842" ],
            [ "Shajapur", "+91 7364" ],
            [ "Sheikhpura", "+91 6341" ],
            [ "Sheohar", "+91 6222" ],
            [ "Sheopur", "+91 7530" ],
            [ "Shillong", "+91 364" ],
            [ "Shimla", "+91 177" ],
            [ "Shivpuri", "+91 7492" ],
            [ "Sibsagar", "+91 3772" ],
            [ "Sidhi", "+91 7822" ],
            [ "Sikar", "+91 1572" ],
            [ "Silchar", "+91 3842" ],
            [ "Silvassa", "+91 260" ],
            [ "Simla", "+91 177" ],
            [ "Sindri", "+91 326" ],
            [ "Sitamarhi", "+91 6226" ],
            [ "Sitapur", "+91 5862" ],
            [ "Sivaganga", "+91 4575" ],
            [ "Siwan", "+91 6154" ],
            [ "Solapur", "+91 217" ],
            [ "Sonepur", "+91 6654" ],
            [ "Sopore", "+91 1954" ],
            [ "Srinagar", "+91 194" ],
            [ "Sultanpur", "+91 5362" ],
            [ "Sundergarh", "+91 6622" ],
            [ "Supaul", "+91 6473" ],
            [ "Surat", "+91 261" ],
            [ "Suri", "+91 3462" ],
            [ "Tamluk", "+91 3228" ],
            [ "Tarn Taran Sahib", "+91 1852" ],
            [ "Thalassery", "+91 490" ],
            [ "Thane", "+91 22" ],
            [ "Thanjavur", "+91 4362" ],
            [ "Theni", "+91 4546" ],
            [ "Thiruvan", "+91 471" ],
            [ "Thiruvananthapuram", "+91 471" ],
            [ "Thiruvannaamalai", "+91 4175" ],
            [ "Thoothukudi", "+91 461" ],
            [ "Thrissur", "+91 487" ],
            [ "Tikamgarh", "+91 7683" ],
            [ "Tinsukia", "+91 374" ],
            [ "Tiruchirapalli", "+91 431" ],
            [ "Tirumala", "+91 877" ],
            [ "Tirunelveli", "+91 462" ],
            [ "Tiruvallur", "+91 44" ],
            [ "Tiruvarur", "+91 4366" ],
            [ "Tonk", "+91 1435" ],
            [ "Udaipur", "+91 294" ],
            [ "Udhampur", "+91 199" ],
            [ "Ujjain", "+91 734" ],
            [ "Unnao", "+91 515" ],
            [ "Vadodara", "+91 265" ],
            [ "Vadodara (Baroda)", "+91 265" ],
            [ "Varanasi", "+91 542" ],
            [ "Vasco da Gama", "+91 832" ],
            [ "Vellore", "+91 416" ],
            [ "Vidisha", "+91 7592" ],
            [ "Vijayawada", "+91 866" ],
            [ "Viluppuram", "+91 4146" ],
            [ "Virudhunagar", "+91 4562" ],
            [ "Virudunagar", "+91 4562" ],
            [ "Visakhapatnam", "+91 891" ],
            [ "Warangal", "+91 870" ],
            [ "Wardha", "+91 7152" ],
            [ "Washim", "+91 7252" ],
            [ "Yavatmal", "+91 7232" ]
        ],
        "Indonesia": [
            [ "Ambon", "+62 911" ],
            [ "Bali", "+62 36" ],
            [ "Balikpapan", "+62 542" ],
            [ "Bandung", "+62 22" ],
            [ "Banjarmasin", "+62 511" ],
            [ "Batam", "+62 77" ],
            [ "Batang", "+62 77" ],
            [ "Betung", "+62 22" ],
            [ "Bintan", "+62 770" ],
            [ "Bogor", "+62 25" ],
            [ "Cirebon", "+62 23" ],
            [ "Demak", "+62 29" ],
            [ "Denpasar", "+62 36" ],
            [ "Ende", "+62 38" ],
            [ "Irian", "+62 9" ],
            [ "Jakarta", "+62 21" ],
            [ "Jayapura", "+62 967" ],
            [ "Jember", "+62 33" ],
            [ "Jombang", "+62 32" ],
            [ "Kalimantan Islet", "+62 5" ],
            [ "Kudus", "+62 291" ],
            [ "Kupang", "+62 39" ],
            [ "Madiun", "+62 35" ],
            [ "Makassar", "+62 411" ],
            [ "Malaku Islets", "+62 5" ],
            [ "Malang", "+62 34" ],
            [ "Manado", "+62 431" ],
            [ "Mataram", "+62 370" ],
            [ "Medan", "+62 61" ],
            [ "North Sumatra", "+62 6" ],
            [ "Padang", "+62 75" ],
            [ "Palembang", "+62 71" ],
            [ "Pekalongan", "+62 285" ],
            [ "Pekanbaru", "+62 761" ],
            [ "Pematangsiantar", "+62 622" ],
            [ "Purwakarta", "+62 28" ],
            [ "Riau", "+62 76" ],
            [ "Samarinda", "+62 541" ],
            [ "Sekurang", "+62 778" ],
            [ "Semarang", "+62 24" ],
            [ "Singaraja", "+62 362" ],
            [ "Solo", "+62 27" ],
            [ "Sulawesi Islet", "+62 4" ],
            [ "Sumbawa", "+62 37" ],
            [ "Sumedang", "+62 26" ],
            [ "Surabaya", "+62 31" ],
            [ "Tanjungkarang", "+62 72" ],
            [ "Tasikmalaya", "+62 265" ],
            [ "Tegal", "62" ],
            [ "Ternate", "+62 921" ],
            [ "West Sumatra", "+62 75" ],
            [ "Yogyakarta", "+62 27" ]
        ],
        "Iran": [
            [ "Esfahan", "+98 311" ],
            [ "Mashhad", "+98 511" ],
            [ "Tabriz", "+98 411" ],
            [ "Tehran", "+98 21" ],
            [ "Yazd", "+98 352" ],
            [ "Zanjan", "+98 242" ]
        ],
        "Iraq": [
            [ "Baghdad", "+964 1" ],
            [ "Basra", "+964 40" ],
            [ "Hilla", "+964 30" ],
            [ "Irbil", "+964 66" ],
            [ "Karbala", "+964 32" ],
            [ "Kerbela", "+964 32" ],
            [ "Kirkuk", "+964 50" ],
            [ "Mosul", "+964 60" ],
            [ "Mousil", "+964 60" ],
            [ "Najaf", "+964 33" ],
            [ "Nasiriya", "+964 42" ],
            [ "Sulaimaniya", "+964 53" ]
        ],
        "Ireland": [
            [ "Arklow", "+353 402" ],
            [ "Cork", "+353 21" ],
            [ "Drogheda", "+353 41" ],
            [ "Dublin", "+353 1" ],
            [ "Ennis", "+353 65" ],
            [ "Galway City", "+353 91" ],
            [ "Kildare", "+353 45" ],
            [ "Killarney", "+353 64" ],
            [ "Limerick", "+353 61" ],
            [ "Sligo", "+353 71" ],
            [ "Tipperary", "+353 52" ],
            [ "Tralee", "+353 66" ],
            [ "Tullamore", "+353 506" ],
            [ "Waterford", "+353 51" ],
            [ "Wexford", "+353 53" ]
        ],
        "Israel": [
            [ "Acre", "+972 4" ],
            [ "Afula", "+972 4" ],
            [ "Akko (Acre)", "+972 4" ],
            [ "Ashdod", "+972 8" ],
            [ "Ashkelon", "+972 8" ],
            [ "Bat Iam", "+972 3" ],
            [ "Bat Yam", "+972 3" ],
            [ "Be er Sheva", "+972 8" ],
            [ "Beersheba", "+972 8" ],
            [ "Beersheva", "+972 8" ],
            [ "Bnei Brak", "+972 3" ],
            [ "Carmiel", "+972 4" ],
            [ "Dimona", "+972 8" ],
            [ "Eilat", "+972 8" ],
            [ "Hadera", "+972 4" ],
            [ "Haifa", "+972 4" ],
            [ "Herzliya", "+972 9" ],
            [ "Herzliyya", "+972 9" ],
            [ "Holon", "+972 3" ],
            [ "Jaffa", "+972 3" ],
            [ "Jerusalem", "+972 2" ],
            [ "Kfar Saba", "+972 9" ],
            [ "Nazareth", "+972 4" ],
            [ "Netanya", "+972 9" ],
            [ "Petah Tikva", "+972 3" ],
            [ "Petah Tiqwa", "+972 3" ],
            [ "Qiryat Shmona", "+972 4" ],
            [ "Ra'anana", "+972 9" ],
            [ "Raanana", "+972 9" ],
            [ "Ramat Gan", "+972 3" ],
            [ "Rehovot", "+972 8" ],
            [ "Rishon LeZion", "+972 3" ],
            [ "Rishon LeZiyyon", "+972 3" ],
            [ "Safed", "+972 4" ],
            [ "Tel Aviv", "+972 3" ],
            [ "Tiberias", "+972 4" ],
            [ "Tiberius", "+972 4" ],
            [ "Tsefat", "+972 4" ]
        ],
        "Italy": [
            [ "Alcamo", "+39 924" ],
            [ "Alessandria", "+39 131" ],
            [ "Ancona", "+39 71" ],
            [ "Aosta", "+39 165" ],
            [ "Ascoli Piceno", "+39 736" ],
            [ "Bari", "+39 80" ],
            [ "Bergamo", "+39 35" ],
            [ "Bologna", "+39 51" ],
            [ "Bolzano", "+39 471" ],
            [ "Brescia", "+39 30" ],
            [ "Brindisi", "+39 831" ],
            [ "Brunico", "+39 474" ],
            [ "Cagliari", "+39 70" ],
            [ "Campobasso", "+39 874" ],
            [ "Caserta", "+39 823" ],
            [ "Cassino", "+39 776" ],
            [ "Catania", "+39 95" ],
            [ "Catanzaro", "+39 961" ],
            [ "Chieti", "+39 871" ],
            [ "Civitavecchia", "+39 766" ],
            [ "Como", "+39 31" ],
            [ "Cortina d Ampezzo", "+39 436" ],
            [ "Cremona", "+39 372" ],
            [ "Cuneo", "+39 171" ],
            [ "Domodossola", "+39 324" ],
            [ "Empoli", "+39 571" ],
            [ "Ferrara", "+39 532" ],
            [ "Florence", "+39 55" ],
            [ "Foggia", "+39 881" ],
            [ "Formia", "+39 771" ],
            [ "Frosinone", "+39 775" ],
            [ "Genoa", "+39 10" ],
            [ "Gorizia", "+39 481" ],
            [ "Grosseto", "+39 564" ],
            [ "Imola", "+39 542" ],
            [ "L Aquila", "+39 862" ],
            [ "La Spezia", "+39 187" ],
            [ "Lanciano", "+39 872" ],
            [ "Lecce", "+39 832" ],
            [ "Livorno", "+39 586" ],
            [ "Lucca", "+39 583" ],
            [ "Merano", "+39 473" ],
            [ "Messina", "+39 90" ],
            [ "Milan", "+39 2" ],
            [ "Modena", "+39 59" ],
            [ "Monza", "+39 39" ],
            [ "Naples", "+39 81" ],
            [ "Novara", "+39 321" ],
            [ "Novi Lígure", "+39 143" ],
            [ "Nuoro", "+39 784" ],
            [ "Orvieto", "+39 763" ],
            [ "Palermo", "+39 91" ],
            [ "Parma", "+39 521" ],
            [ "Perugia", "+39 75" ],
            [ "Pesaro", "+39 721" ],
            [ "Pescara", "+39 85" ],
            [ "Piacenza", "+39 523" ],
            [ "Pisa", "+39 50" ],
            [ "Pordenone", "+39 434" ],
            [ "Potenza", "+39 971" ],
            [ "Prato", "+39 574" ],
            [ "Rapallo", "+39 185" ],
            [ "Ravenna", "+39 544" ],
            [ "Reggio Calabria", "+39 965" ],
            [ "Reggio Emilia", "+39 522" ],
            [ "Rieti", "+39 746" ],
            [ "Rimini", "+39 541" ],
            [ "Rome", "+39 6" ],
            [ "Rovigo", "+39 425" ],
            [ "Salerno", "+39 89" ],
            [ "San Marino", "+39 549" ],
            [ "San Remo", "+39 184" ],
            [ "Sassari", "+39 79" ],
            [ "Savona", "+39 19" ],
            [ "Siena", "+39 577" ],
            [ "Siracusa", "+39 931" ],
            [ "Spoleto", "+39 743" ],
            [ "Taranto", "+39 99" ],
            [ "Teramo", "+39 861" ],
            [ "Termoli", "+39 875" ],
            [ "Terni", "+39 744" ],
            [ "Tivoli", "+39 774" ],
            [ "Trapani", "+39 923" ],
            [ "Trento", "+39 461" ],
            [ "Treviso", "+39 422" ],
            [ "Trieste", "+39 40" ],
            [ "Turin", "+39 11" ],
            [ "Udine", "+39 432" ],
            [ "Varese", "+39 332" ],
            [ "Vasto", "+39 873" ],
            [ "Vatican City", "+39 6" ],
            [ "Venice", "+39 41" ],
            [ "Verona", "+39 45" ],
            [ "Vibo Valentia", "+39 963" ],
            [ "Vicenza", "+39 444" ],
            [ "Viterbo", "+39 761" ]
        ],
        "Jamaica": [
            [ "Falmouth", "+1876 859" ],
            [ "Kingston", "+1876 770" ],
            [ "Reading", "+1876 610" ]
        ],
        "Japan": [
            [ "Akita", "+81 96" ],
            [ "Aomori", "+81 177" ],
            [ "Asahikawa", "+81 166" ],
            [ "Chiba", "+81 43" ],
            [ "Choshi", "+81 43" ],
            [ "Fukuoka", "+81 92" ],
            [ "Funabashi", "+81 47" ],
            [ "Gifu", "+81 58" ],
            [ "Hachioji", "+81 42" ],
            [ "Hakodate", "+81 138" ],
            [ "Himeji", "+81 79" ],
            [ "Hiroshima", "+81 82" ],
            [ "Ichikawa", "+81 47" ],
            [ "Kagoshima", "+81 99" ],
            [ "Kanazawa", "+81 76" ],
            [ "Kasugai", "+81 568" ],
            [ "Kawaguchi", "+81 482" ],
            [ "Kawasaki", "+81 44" ],
            [ "Kishiwada", "+81 724" ],
            [ "Kitakyushu", "+81 93" ],
            [ "Kobe", "+81 78" ],
            [ "Kofu", "+81 552" ],
            [ "Kumamoto", "+81 96" ],
            [ "Kurashiki", "+81 86" ],
            [ "Kure", "+81 823" ],
            [ "Kurume", "+81 942" ],
            [ "Kyoto", "+81 75" ],
            [ "Machida", "+81 427" ],
            [ "Matsudo", "+81 47" ],
            [ "Matsumoto", "+81 263" ],
            [ "Matsuyama", "+81 89" ],
            [ "Mito", "+81 292" ],
            [ "Miyazaki", "+81 985" ],
            [ "Morioka", "+81 196" ],
            [ "Nagano", "+81 262" ],
            [ "Nagaoka", "+81 258" ],
            [ "Nagasaki", "+81 95" ],
            [ "Nagoya", "+81 52" ],
            [ "Naha", "+81 98" ],
            [ "Niigata", "+81 25" ],
            [ "Ogaki", "+81 584" ],
            [ "Okayama", "+81 862" ],
            [ "Okazaki", "+81 564" ],
            [ "Okinawa", "+81 98" ],
            [ "Omiya", "+81 48" ],
            [ "Omuta", "+81 9445" ],
            [ "Osaka", "+81 66" ],
            [ "Sakai", "+81 72" ],
            [ "Sapporo", "+81 11" ],
            [ "Sasebo", "+81 956" ],
            [ "Sendai", "+81 22" ],
            [ "Shimonoseki", "+81 832" ],
            [ "Shizuoka", "+81 54" ],
            [ "Takamatsu", "+81 878" ],
            [ "Takaoka", "+81 766" ],
            [ "Tokyo", "+81 3" ],
            [ "Toyama", "+81 764" ],
            [ "Toyonaka", "+81 6" ],
            [ "Toyota", "+81 565" ],
            [ "Tsu", "+81 592" ],
            [ "Ube", "+81 836" ],
            [ "Uji", "+81 774" ],
            [ "Utsunomiya", "+81 28" ],
            [ "Wakayama", "+81 73" ],
            [ "Yamaguchi", "+81 839" ],
            [ "Yao", "+81 729" ],
            [ "Yokkaichi", "+81 748" ],
            [ "Yokohama", "+81 45" ]
        ],
        "Jordan": [
            [ "Amman", "+962 6" ],
            [ "Aqaba", "+962 3" ],
            [ "Azraq", "+962 5" ],
            [ "Balqa", "+962 5" ],
            [ "Greater Amman", "+962 6" ],
            [ "Irbid", "+962 2" ],
            [ "Jerash", "+962 2" ],
            [ "Karak", "+962 3" ],
            [ "Ma daba", "+962 3" ],
            [ "Ma'an", "+962 3" ],
            [ "Madaba", "+962 5" ],
            [ "Mafraq", "+962 2" ],
            [ "Mobile Phones", "+962 79" ],
            [ "Petra", "+962 3" ],
            [ "Ramtha", "+962 2" ],
            [ "Salt", "+962 5" ],
            [ "Tafila", "+962 3" ],
            [ "Wadi Rum", "+962 3" ],
            [ "Zarqa", "+962 5" ]
        ],
        "Kazakhstan": [
            [ "Aktjubinsk", "+7 313" ],
            [ "Alma Ata", "+7 327" ],
            [ "Astana", "+7 7172" ],
            [ "Atyrau", "+7 312" ],
            [ "Baikonur", "+7 73622" ],
            [ "Karaganda", "+7 321" ],
            [ "Kzyl Orda", "+7 324" ],
            [ "Leninogorsk", "+7 336" ],
            [ "Pavlodar", "+7 318" ],
            [ "Petropavlovsk", "+7 315" ],
            [ "Shymkent", "+7 325" ],
            [ "Uralsk", "+7 311" ],
            [ "Zhambyl", "+7 326" ],
            [ "Zhezkazgan", "+7 310" ]
        ],
        "Kenya": [
            [ "Garissa", "+254 46" ],
            [ "Kakamega", "+254 56" ],
            [ "Kericho", "+254 52" ],
            [ "Kisii", "+254 58" ],
            [ "Kisumu", "+254 57" ],
            [ "Kitale", "+254 54" ],
            [ "Malindi", "+254 42" ],
            [ "Marsabit", "+254 69" ],
            [ "Meru", "+254 64" ],
            [ "Mombasa", "+254 41" ],
            [ "Nairobi", "+254 20" ],
            [ "Nakuru", "+254 51" ],
            [ "Thika", "+254 67" ],
            [ "Voi", "+254 43" ]
        ],
        "Korea (North)": [
            [ "Pyongyang", "+850 2" ]
        ],
        "Korea (South)": [
            [ "Cheju", "+82 64" ],
            [ "Incheon", "+82 32" ],
            [ "Kwangju", "+82 62" ],
            [ "Seoul", "+82 2" ],
            [ "Ulsan", "+82 52" ]
        ],
        "Kuwait": [
            [ "Kuwait City", "965" ]
        ],
        "Kyrgyzstan": [
            [ "Bishkek", "+996 312" ]
        ],
        "Laos": [
            [ "Vientiane", "+856 21" ]
        ],
        "Latvia": [
            [ "Aizkraukle", "+371 51" ],
            [ "Aluksne", "+371 43" ],
            [ "Balvi", "+371 45" ],
            [ "Bauska", "+371 39" ],
            [ "Cesis", "+371 41" ],
            [ "Daugavpils", "+371 54" ],
            [ "Dobele", "+371 37" ],
            [ "Gulbene", "+371 44" ],
            [ "Jekabpils", "+371 52" ],
            [ "Jelgava", "+371 30" ],
            [ "Kraslava", "+371 56" ],
            [ "Kuldiga", "+371 33" ],
            [ "Liepaja", "+371 34" ],
            [ "Limbazi", "+371 40" ],
            [ "Ludza", "+371 57" ],
            [ "Madona", "+371 48" ],
            [ "Ogre", "+371 50" ],
            [ "Preili", "+371 53" ],
            [ "Rezekne", "+371 46" ],
            [ "Riga", "+371 6" ],
            [ "Saldus", "+371 38" ],
            [ "Talsi", "+371 32" ],
            [ "Tukums", "+371 31" ],
            [ "Valka", "+371 47" ],
            [ "Valmiera", "+371 42" ],
            [ "Ventspils", "+371 36" ]
        ],
        "Lebanon": [
            [ "Beirut", "+961 1" ],
            [ "Jounieh", "+961 9" ],
            [ "Tripoli", "+961 6" ]
        ],
        "Leshoto": [
            [ "Maseru", "+266" ]
        ],
        "Liberia": [
            [ "Monrovia", "+231" ]
        ],
        "Libya": [
            [ "Abengawad", "+218 553" ],
            [ "Abu Issa", "+218 274" ],
            [ "Abuhadi", "+218 551" ],
            [ "Agelat", "+218 282" ],
            [ "Ajailat", "+218 282" ],
            [ "Al Josh", "+218 454" ],
            [ "Azizia", "+218 272" ],
            [ "Bani Walid", "+218 322" ],
            [ "Ben Gashir", "+218 22" ],
            [ "Benghazi", "+218 61" ],
            [ "Benina", "+218 63" ],
            [ "Bisher", "+218 655" ],
            [ "Brak", "+218 721" ],
            [ "Bugrain", "+218 529" ],
            [ "Buzayan", "+218 425" ],
            [ "Dafnia", "+218 523" ],
            [ "Deriana", "+218 625" ],
            [ "Derna", "+218 81" ],
            [ "Edry", "+218 723" ],
            [ "El Beida", "+218 84" ],
            [ "Elbayada", "+218 684" ],
            [ "Elkuwaifia", "+218 624" ],
            [ "Elmagrun", "+218 629" ],
            [ "Elmareg", "+218 67" ],
            [ "Elmaya", "+218 279" ],
            [ "Ezzaonia", "+218 23" ],
            [ "Garda", "+218 733" ],
            [ "Garian", "+218 41" ],
            [ "Ghadames", "+218 484" ],
            [ "Ghat", "+218 724" ],
            [ "Ghrefa", "+218 729" ],
            [ "Gmines", "+218 623" ],
            [ "Guassem", "+218 423" ],
            [ "Gubba", "+218 821" ],
            [ "Haraua", "+218 82" ],
            [ "Hashan", "+218 271" ],
            [ "Hugialin", "+218 284" ],
            [ "Hun", "+218 57" ],
            [ "Jaghbub", "+218 884" ],
            [ "Jalo", "+218 657" ],
            [ "Jardas", "+218 682" ],
            [ "Jerdina", "+218 627" ],
            [ "Jmail", "+218 281" ],
            [ "Kaalifa", "+218 626" ],
            [ "Kabaw", "+218 481" ],
            [ "Kasarahmad", "+218 524" ],
            [ "Khums", "+218 31" ],
            [ "Kikla", "+218 427" ],
            [ "Kofra", "+218 652" ],
            [ "Kussabat", "+218 326" ],
            [ "Mamura", "+218 277" ],
            [ "Massa", "+218 852" ],
            [ "Matred", "+218 275" ],
            [ "Misratah", "+218 51" ],
            [ "Misuratha", "+218 51" ],
            [ "Mizda", "+218 422" ],
            [ "Murzuk", "+218 725" ],
            [ "Nalut", "+218 47" ],
            [ "Noflia", "+218 555" ],
            [ "Ojla", "+218 653" ],
            [ "Reyana", "+218 453" ],
            [ "Rujban", "+218 452" ],
            [ "Sabratha", "+218 24" ],
            [ "Sebha", "+218 71" ],
            [ "Seluk", "+218 628" ],
            [ "Shahat", "+218 851" ],
            [ "Sidi Sultan Sultan", "+218 654" ],
            [ "Sidiessaiah", "+218 205" ],
            [ "Sirt", "+218 54" ],
            [ "Slenta", "+218 854" ],
            [ "Sokna", "+218 582" ],
            [ "Soussa", "+218 583" ],
            [ "Suk Elkhamis", "+218 206" ],
            [ "Swajni", "+218 224" ],
            [ "Taigura", "+218 26" ],
            [ "Taknes", "+218 683" ],
            [ "Tarhuna", "+218 325" ],
            [ "Tawergha", "+218 522" ],
            [ "Tigi", "+218 482" ],
            [ "Tolmitha", "+218 681" ],
            [ "Tomina", "+218 685" ],
            [ "Traghen", "+218 734" ],
            [ "Tripoli", "+218 21" ],
            [ "Tripoli International Airport", "+218 22" ],
            [ "Ubary", "+218 73" ],
            [ "Um Laranib", "+218 726" ],
            [ "Wadi Atba", "+218 731" ],
            [ "Wadi Jeref", "+218 554" ],
            [ "Wadi Keam", "+218 323" ],
            [ "Wodan", "+218 581" ],
            [ "Yefren", "+218 421" ],
            [ "Zahra", "+218 252" ],
            [ "Zawai", "+218 23" ],
            [ "Zawaya", "+218 727" ],
            [ "Zawyat Elmahjub", "+218 526" ],
            [ "Zella", "+218 584" ],
            [ "Zliten", "+218 521" ],
            [ "Zuara", "+218 25" ]
        ],
        "Liechtenstein": [
            [ "Vaduz", "+423" ]
        ],
        "Lithuania": [
            [ "Akmene", "+370 425" ],
            [ "Alytus", "+370 315" ],
            [ "Druskininkai", "+370 313" ],
            [ "Elektrenai", "+370 528" ],
            [ "Ignalina", "+370 386" ],
            [ "Jonava", "+370 349" ],
            [ "Jurbarkas", "+370 447" ],
            [ "Kaunas", "+370 37" ],
            [ "Kedainiai", "+370 57" ],
            [ "Kelme", "+370 427" ],
            [ "Kretinga", "+370 445" ],
            [ "Lazdijai", "+370 318" ],
            [ "Marijampole", "+370 343" ],
            [ "Moletai", "+370 383" ],
            [ "Neringa", "+370 469" ],
            [ "Pakruojis", "+370 421" ],
            [ "Palanga", "+370 460" ],
            [ "Pasvalys", "+370 451" ],
            [ "Plunge", "+370 448" ],
            [ "Prienai", "+370 319" ],
            [ "Raseiniai", "+370 428" ],
            [ "Taurage", "+370 446" ],
            [ "Trakai", "+370 528" ],
            [ "Ukmerge", "+370 340" ],
            [ "Utena", "+370 389" ],
            [ "Varena", "+370 310" ],
            [ "Vilnius", "+370 521" ],
            [ "Visaginas", "+370 386" ],
            [ "Zarasai", "+370 385" ]
        ],
        "Luxembourg": [
            [ "Luxembourg", "352" ]
        ],
        "Macau": [
            [ "Macau", "853" ]
        ],
        "Macedonia": [
            [ "Berovo", "+389 33" ],
            [ "Bitola", "+389 47" ],
            [ "Debar", "+389 46" ],
            [ "Delchevo", "+389 33" ],
            [ "Demir Hisar", "+389 47" ],
            [ "Dojran", "+389 34" ],
            [ "Gevgelija", "+389 34" ],
            [ "Gostivar", "+389 42" ],
            [ "Kavadarci", "+389 43" ],
            [ "Kichevo", "+389 45" ],
            [ "Kocani", "+389 33" ],
            [ "Kratovo", "+389 31" ],
            [ "Kriva Palanka", "+389 31" ],
            [ "Krushevo", "+389 48" ],
            [ "Kumanovo", "+389 31" ],
            [ "Makedonski Brod", "+389 48" ],
            [ "Negotino", "+389 43" ],
            [ "Ohrid", "+389 46" ],
            [ "Pehchevo", "+389 33" ],
            [ "Prilep", "+389 48" ],
            [ "Probistip", "+389 32" ],
            [ "Radovish", "+389 32" ],
            [ "Resen", "+389 47" ],
            [ "Shtip", "+389 32" ],
            [ "Skopje", "+389 2" ],
            [ "Struga", "+389 46" ],
            [ "Strumica", "+389 34" ],
            [ "Sveti Nikole", "+389 32" ],
            [ "Tetovo", "+389 44" ],
            [ "Valandovo", "+389 34" ],
            [ "Veles", "+389 43" ],
            [ "Vinica", "+389 33" ]
        ],
        "Madagascar": [
            [ "Ambatolampy", "+261 42" ],
            [ "Ambositra", "+261 47" ],
            [ "Ambotondrazaka", "+261 54" ],
            [ "Andevoranto", "+261 22" ],
            [ "Antananarivo", "+261 22" ],
            [ "Antsirabe", "+261 44" ],
            [ "Antsiranana (Diego Suarez)", "+261 82" ],
            [ "Antsohihy", "+261 67" ],
            [ "Farafangana", "+261 73" ],
            [ "Fianarantsoa", "+261 75" ],
            [ "Mahajanga", "+261 62" ],
            [ "Maintirano", "+261 69" ],
            [ "Manakara", "+261 72" ],
            [ "Mananjary", "+261 72" ],
            [ "Mideast Region", "+261 13" ],
            [ "Moramanga", "+261 56" ],
            [ "Morondava", "+261 95" ],
            [ "Nosy Be Is.", "+261 86" ],
            [ "Sainte Marie", "+261 57" ],
            [ "Sambava", "+261 88" ],
            [ "Toamasina", "+261 53" ],
            [ "Tolagnaro", "+261 92" ],
            [ "Toliaray", "+261 94" ]
        ],
        "Malawi": [
            [ "Lilongwe", "+265" ]
        ],
        "Malaysia": [
            [ "Bintulu", "+60 8" ],
            [ "Ipoh", "+60 5" ],
            [ "Johor Bahru", "+60 7" ],
            [ "Kajang", "+60 3" ],
            [ "Kota Baharu", "+60 9" ],
            [ "Kota Kinabalu", "+60 8" ],
            [ "Kuala Lumpur", "+60 3" ],
            [ "Kuala Terengganu", "+60 9" ],
            [ "Kuantan", "+60 9" ],
            [ "Kuching", "+60 8" ],
            [ "Labuan", "+60 8" ],
            [ "Melaka", "+60 6" ],
            [ "Miri", "+60 8" ],
            [ "Muar (Bandar Maharani)", "+60 6" ],
            [ "Penang", "+60 4" ],
            [ "Sandakan", "+60 8" ],
            [ "Seremban", "+60 6" ],
            [ "Sibu", "+60 8" ]
        ],
        "Maldives": [
            [ "Male", "960" ]
        ],
        "Mali": [
            [ "Bamako", "+223" ]
        ],
        "Malta": [
            [ "Valletta", "+356" ]
        ],
        "Mauritania": [
            [ "Nouakchott", "+222" ]
        ],
        "Mauritius": [
            [ "Port Louis", "+230" ]
        ],
        "Mexico": [
            [ "Acapulco", "+52 744" ],
            [ "Aguascalientes", "+52 449" ],
            [ "Cabo San Lucas", "+52 624" ],
            [ "Campeche", "+52 981" ],
            [ "Cancún", "+52 998" ],
            [ "Celaya", "+52 461" ],
            [ "Chihuahua", "+52 614" ],
            [ "Ciudad del Carmen", "+52 938" ],
            [ "Ciudad Juárez", "+52 656" ],
            [ "Cozumel", "+52 987" ],
            [ "Cuernavaca", "+52 777" ],
            [ "Culiacán", "+52 667" ],
            [ "Durango", "+52 618" ],
            [ "Ensenada", "+52 646" ],
            [ "Guadalajara", "+52 33" ],
            [ "Hermosillo", "+52 662" ],
            [ "Irapuato", "+52 462" ],
            [ "Ixtapa", "+52 961" ],
            [ "Jalapa Enríquez", "+52 932" ],
            [ "Juchitán", "+52 971" ],
            [ "León", "+52 477" ],
            [ "Los Mochis", "+52 668" ],
            [ "Matamoros", "+52 871" ],
            [ "Mazatlán", "+52 669" ],
            [ "Mérida", "+52 999" ],
            [ "Mexicali", "+52 686" ],
            [ "Mexico City", "+52 55" ],
            [ "Monterrey", "+52 81" ],
            [ "Morelia", "+52 443" ],
            [ "Nogales", "+52 631" ],
            [ "Nuevo Laredo", "+52 867" ],
            [ "Oaxaca de Juárez", "+52 951" ],
            [ "Playa del Carmen", "+52 984" ],
            [ "Progreso", "+52 861" ],
            [ "Puebla", "+52 222" ],
            [ "Puerto Vallarta", "+52 322" ],
            [ "Reynosa", "+52 899" ],
            [ "Saltillo", "+52 844" ],
            [ "San Luis Potosí", "+52 444" ],
            [ "Tampico", "+52 833" ],
            [ "Tijuana", "+52 664" ],
            [ "Toluca", "+52 815" ],
            [ "Torreón", "+52 871" ],
            [ "Veracruz", "+52 229" ],
            [ "Villahermosa", "+52 993" ]
        ],
        "Moldova": [
            [ "Anenii Noi", "+373 265" ],
            [ "Balti", "+373 231" ],
            [ "Basarabeasca", "+373 297" ],
            [ "Bender", "+373 552" ],
            [ "Briceni", "+373 247" ],
            [ "Cahul", "+373 299" ],
            [ "Cainari", "+373 277" ],
            [ "Camenca", "+373 216" ],
            [ "Cantemir", "+373 273" ],
            [ "Causeni", "+373 243" ],
            [ "Chisinau", "+373 22" ],
            [ "Cimislia", "+373 241" ],
            [ "Comrat", "+373 298" ],
            [ "Criuleni", "+373 248" ],
            [ "Dnestrovsk", "+373 219" ],
            [ "Donduseni", "+373 251" ],
            [ "Drochia", "+373 252" ],
            [ "Dubasari", "+373 215" ],
            [ "Edinet", "+373 246" ],
            [ "Falesti", "+373 259" ],
            [ "Floresti", "+373 250" ],
            [ "Glodeni", "+373 249" ],
            [ "Grigoriopol", "+373 210" ],
            [ "Hancesti", "+373 269" ],
            [ "Hîncesti", "+373 269" ],
            [ "Ialoveni", "+373 268" ],
            [ "Leova", "+373 263" ],
            [ "Nisporeni", "+373 264" ],
            [ "Ocnita", "+373 271" ],
            [ "Orhei", "+373 235" ],
            [ "Rezina", "+373 254" ],
            [ "Rîbnita", "+373 555" ],
            [ "Rîscani", "+373 256" ],
            [ "Sîngerei", "+373 262" ],
            [ "Soldanesti", "+373 272" ],
            [ "Soroca", "+373 230" ],
            [ "Stefan Voda", "+373 242" ],
            [ "Straseni", "+373 237" ],
            [ "Taraclia", "+373 294" ],
            [ "Telenesti", "+373 258" ],
            [ "Tiraspol", "+373 533" ],
            [ "Ungheni", "+373 236" ],
            [ "Vulcanesti", "+373 293" ]
        ],
        "Monaco": [
            [ "Monte Carlo", "+377" ]
        ],
        "Mongolia": [
            [ "Choibalsan", "+976" ],
            [ "Hovdo", "+976" ],
            [ "Ulaanbaatar", "+976 11" ]
        ],
        "Montenegro": [
            [ "Niksic", "+382 83" ],
            [ "Plevlja", "+382 89" ],
            [ "Podgorica", "+382 81" ]
        ],
        "Morroco": [
            [ "Agadir", "+212 548" ],
            [ "Casablanca", "+212 22" ],
            [ "Fes", "+212 55" ],
            [ "Marrakesh", "+212 44" ],
            [ "Meknes", "+212 55" ],
            [ "Oujda", "+212 56" ],
            [ "Rabat", "+212 37" ],
            [ "Tangier", "+212 5399" ],
            [ "Tetouan", "+212 39" ]
        ],
        "Mozambique": [
            [ "Beira", "+258 23" ],
            [ "Maputo", "+258 21" ],
            [ "Quelimane", "+258 24" ]
        ],
        "Myanmar (Burma)": [
            [ "Rangoon", "+95 1" ],
            [ "Yangon (Rangoon)", "+95 1" ]
        ],
        "Namibia": [
            [ "Abenab", "+264 67" ],
            [ "Aminuis", "+264 63" ],
            [ "Anamulenge", "+264 65" ],
            [ "Andara", "+264 67" ],
            [ "Anker", "+264 67" ],
            [ "Aoba", "+264 67" ],
            [ "Arandis", "+264 64" ],
            [ "Aranos", "+264 63" ],
            [ "Aranos (party line)", "+264 6642" ],
            [ "Ariamsvlei", "+264 63" ],
            [ "Aroab", "+264 63" ],
            [ "Asab", "+264 668" ],
            [ "Aus", "+264 63" ],
            [ "Babi", "+264 62" ],
            [ "Bagani", "+264 66" ],
            [ "Bethanie", "+264 63" ],
            [ "Biermanskool", "+264 67" ],
            [ "Blue Sodalite Mine", "+264 65" ],
            [ "Blumfelde", "+264 62" ],
            [ "Bralano", "+264 6642" ],
            [ "Buitepos", "+264 62" ],
            [ "Bukalo", "+264 66" ],
            [ "Bulwana", "+264 668" ],
            [ "Bunia", "+264 66" ],
            [ "Dawiab", "+264 63" ],
            [ "Deurstamp", "+264 63" ],
            [ "Dordabis", "+264 62" ],
            [ "Drimiopsis", "+264 62" ],
            [ "Edundja", "+264 65" ],
            [ "Eenhana", "+264 65" ],
            [ "Ehomba", "+264 65" ],
            [ "Eland", "+264 62" ],
            [ "Elim", "+264 65" ],
            [ "Endola", "+264 65" ],
            [ "Epikuru", "+264 62" ],
            [ "Epupa", "+264 67" ],
            [ "Etanga", "+264 65" ],
            [ "Etosha Rurtel", "+264 67" ],
            [ "Etunda", "+264 65" ],
            [ "Feldschuhorn", "+264 63" ],
            [ "Friedental", "+264 62" ],
            [ "Gaibis", "+264 63" ],
            [ "Gam", "+264 67" ],
            [ "Gibeon", "+264 63" ],
            [ "Gibeon party line", "+264 668" ],
            [ "Goageb", "+264 63" ],
            [ "Gobabis", "+264 62" ],
            [ "Gochas", "+264 63" ],
            [ "Grenslyn", "+264 63" ],
            [ "Grootfontein", "+264 67" ],
            [ "Grunau", "+264 63" ],
            [ "Guibis", "+264 63" ],
            [ "Haiyandja", "+264 65" ],
            [ "Hakasembe", "+264 66" ],
            [ "Halali", "+264 67" ],
            [ "Hamab", "+264 63" ],
            [ "Helmeringhausen", "+264 63" ],
            [ "Helmeringhausen (party line)", "+264 6362" ],
            [ "Henties Bay", "+264 64" ],
            [ "Hentiesbaai", "+264 64" ],
            [ "Hoachanas", "+264 63" ],
            [ "Hobas", "+264 6342" ],
            [ "Hochfeld", "+264 62" ],
            [ "Hochland", "+264 62" ],
            [ "Horabe", "+264 67" ],
            [ "Hosea Kutako INT Airport", "+264 62" ],
            [ "K. Murangi", "+264 66" ],
            [ "Kahenge", "+264 66" ],
            [ "Kais", "+264 63" ],
            [ "Kalahariplaas", "+264 63" ],
            [ "Kalkfeld", "+264 67" ],
            [ "Kalkfeld (party lines)", "+264 6642" ],
            [ "Kalkrand", "+264 63" ],
            [ "Kamanjab", "+264 67" ],
            [ "Kaolo Otavi", "+264 65" ],
            [ "Karasburg", "+264 63" ],
            [ "Karibib", "+264 64" ],
            [ "Katima", "+264 66" ],
            [ "Keetmanshoop", "+264 63" ],
            [ "Keetmanshoop (party line)", "+264 638" ],
            [ "KhoriXas", "+264 67" ],
            [ "Klein Aub", "+264 62" ],
            [ "Klein Karas", "+264 63" ],
            [ "Klein Waterberg", "+264 67" ],
            [ "Köes", "+264 63" ],
            [ "Koes (party line)", "+264 632532" ],
            [ "Kombat", "+264 67" ],
            [ "Kongola", "+264 66" ],
            [ "Kumakams", "+264 6638" ],
            [ "Kunene River Lodge", "+264 65" ],
            [ "Langstrand", "+264 64" ],
            [ "Leoburn", "+264 64" ],
            [ "Leonardville", "+264 62" ],
            [ "Lindequest", "+264 67" ],
            [ "Lorelei", "+264 63" ],
            [ "Lüderitz", "+264 63" ],
            [ "Mahanene", "+264 65" ],
            [ "Maltahohe", "+264 63" ],
            [ "Maltahohe (party line)", "+264 6638" ],
            [ "Mangetti duin", "+264 67" ],
            [ "Many Hills", "+264 62" ],
            [ "Marangi", "+264 66" ],
            [ "Mariental", "+264 63" ],
            [ "Mariental (party line)", "+264 668" ],
            [ "Maroelaboom", "+264 67" ],
            [ "Mashare", "+264 66" ],
            [ "Matava", "+264 66" ],
            [ "Mokuti", "+264 67" ],
            [ "Mpacha", "+264 66" ],
            [ "Muveke", "+264 66" ],
            [ "Nakayale", "+264 66" ],
            [ "Namasvrede", "+264 63" ],
            [ "Namgorab", "+264 6638" ],
            [ "Namib Grens", "+264 62" ],
            [ "Namutoni", "+264 67" ],
            [ "Narubis", "+264 63" ],
            [ "Neudamm", "+264 62" ],
            [ "Nina", "+264 62" ],
            [ "Nkurenkuru", "+264 66" ],
            [ "Noordoewer", "+264 63" ],
            [ "Nouas", "+264 62" ],
            [ "Nudaus", "+264 63" ],
            [ "Nyangana", "+264 66" ],
            [ "Nzinze", "+264 66" ],
            [ "Oabis", "+264 6342" ],
            [ "Oamites", "+264 62" ],
            [ "Oamseb", "+264 63" ],
            [ "Obombo", "+264 65" ],
            [ "Odibo", "+264 65" ],
            [ "Ogongo", "+264 65" ],
            [ "Ohandungu", "+264 65" ],
            [ "Ohangwena", "+264 65" ],
            [ "Okahandja", "+264 62" ],
            [ "Okahao", "+264 65" ],
            [ "Okakarara", "+264 67" ],
            [ "Okalongo", "+264 65" ],
            [ "Okamatapati", "+264 67" ],
            [ "Okandjatu", "+264 62" ],
            [ "Okangwati", "+264 65" ],
            [ "Okaputa", "+264 67" ],
            [ "Okatope", "+264 65" ],
            [ "Okaukuejo", "+264 67" ],
            [ "Okorosave", "+264 65" ],
            [ "Okurusu", "+264 67" ],
            [ "Oluno", "+264 65" ],
            [ "Omafu", "+264 65" ],
            [ "Omaruru", "+264 64" ],
            [ "Omaruru (party line)", "+264 628" ],
            [ "Omatjene", "+264 67" ],
            [ "Ombalantu", "+264 65" ],
            [ "Ombika", "+264 67" ],
            [ "Ombotozu", "+264 62" ],
            [ "Omega", "+264 66" ],
            [ "Omitara", "+264 62" ],
            [ "Omitara (party line)", "+264 62" ],
            [ "Omungwelume", "+264 65" ],
            [ "Omuthya", "+264 65" ],
            [ "Onandjokwe", "+264 65" ],
            [ "Onathinge", "+264 65" ],
            [ "Ondangwa", "+264 65" ],
            [ "Ondjona", "+264 62" ],
            [ "Ondobe", "+264 65" ],
            [ "Ondundu", "+264 65" ],
            [ "Onesi", "+264 65" ],
            [ "Ongangdjera", "+264 65" ],
            [ "Ongava", "+264 67" ],
            [ "Ongenga", "+264 65" ],
            [ "Ongha", "+264 65" ],
            [ "Ongwediva", "+264 65" ],
            [ "Onuno", "+264 65" ],
            [ "Opuwo", "+264 65" ],
            [ "Oranjemund", "+264 63" ],
            [ "Orumana", "+264 65" ],
            [ "Oshakati", "+264 65" ],
            [ "Oshifo", "+264 65" ],
            [ "Oshigambo", "+264 65" ],
            [ "Oshikango", "+264 65" ],
            [ "Oshikango Rurtel", "+264 6751" ],
            [ "Oshikuku", "+264 65" ],
            [ "Oshitayi", "+264 65" ],
            [ "Oshivello", "+264 67" ],
            [ "Otavi", "+264 67" ],
            [ "Otjerunda", "+264 65" ],
            [ "Otjihase", "+264 62" ],
            [ "Otjikondo", "+264 67" ],
            [ "Otjimbingwe", "+264 64" ],
            [ "Otjinene", "+264 62" ],
            [ "Otjiwa", "+264 62" ],
            [ "Otjiwarongo", "+264 67" ],
            [ "Otjondeka", "+264 65" ],
            [ "Otjozondu", "+264 62" ],
            [ "Otwani", "+264 65" ],
            [ "Outjo", "+264 67" ],
            [ "Ovitoto", "+264 62" ],
            [ "Panosa", "+264 65" ],
            [ "Plessisplaas", "+264 62" ],
            [ "Prosit", "+264 658" ],
            [ "Rehoboth", "+264 62" ],
            [ "Rehoboth Station", "+264 62" ],
            [ "Rietfontein", "+264 67" ],
            [ "Rietoog", "+264 62" ],
            [ "Rosh Pinah", "+264 63" ],
            [ "Rossing Centrex", "+264 64" ],
            [ "Rössing Mine", "+264 64" ],
            [ "Ruacana", "+264 65" ],
            [ "Rundu", "+264 66" ],
            [ "Rupara", "+264 66" ],
            [ "Ruuga", "+264 66" ],
            [ "Sandveld", "+264 62" ],
            [ "Schilp", "+264 63" ],
            [ "Seeheim", "+264 63" ],
            [ "Seeis", "+264 62" ],
            [ "Sesfontein", "+264 65" ],
            [ "Sikono", "+264 66" ],
            [ "Sodalite", "+264 65" ],
            [ "Solitaire", "+264 63" ],
            [ "Sorris", "+264 67" ],
            [ "Spatzenfeld", "+264 62" ],
            [ "Stampriet", "+264 63" ],
            [ "Steinhausen", "+264 62" ],
            [ "Stinkdoring", "+264 63" ],
            [ "Summerdown", "+264 62" ],
            [ "Swakopmund", "+264 64" ],
            [ "Toshari", "+264 67" ],
            [ "Tsandi", "+264 65" ],
            [ "Tsaobis", "+264 64" ],
            [ "Tses", "+264 63" ],
            [ "Tsumeb", "+264 67" ],
            [ "Tsumispark", "+264 63" ],
            [ "Tsumkwe", "+264 67" ],
            [ "Uchab", "+264 67" ],
            [ "Uhabis", "+264 63" ],
            [ "Uib", "+264 67" ],
            [ "Uis", "+264 64" ],
            [ "Usakos", "+264 64" ],
            [ "Vineta", "+264 64" ],
            [ "Walvis Bay", "+264 64" ],
            [ "Warmbad", "+264 63" ],
            [ "Warmquelle", "+264 65" ],
            [ "Waterberg Plateau Park", "+264 67" ],
            [ "Wilhemsthal", "+264 62" ],
            [ "Windhoek", "+264 61" ],
            [ "Witvlei", "+264 62" ]
        ],
        "Nepal": [
            [ "Bhaktapur", "+977 1" ],
            [ "Kathmandu", "+977 1" ]
        ],
        "Netherlands": [
            [ "'s-Hertogenbosch", "+31 73" ],
            [ "Almere", "+31 36" ],
            [ "Amersfoort", "+31 33" ],
            [ "Amsterdam", "+31 20" ],
            [ "Apeldoorn", "+31 55" ],
            [ "Arnhem", "+31 26" ],
            [ "Breda", "+31 76" ],
            [ "de Meern", "+31 30" ],
            [ "Delft", "+31 15" ],
            [ "Den Bosch", "+31 73" ],
            [ "Denventer", "+31 570" ],
            [ "Deventer", "+31 570" ],
            [ "Dordrecht", "+31 78" ],
            [ "Ede", "+31 318" ],
            [ "Eindhoven", "+31 40" ],
            [ "Emmen", "+31 591" ],
            [ "Enschede", "+31 53" ],
            [ "Groningen", "+31 50" ],
            [ "Haarlem", "+31 23" ],
            [ "Heemstede", "+31 23" ],
            [ "Hillegersberg", "+31 10" ],
            [ "Hilversum", "+31 35" ],
            [ "Hoensbroek", "+31 45" ],
            [ "Hoofddorp", "+31 23" ],
            [ "Hoogkerk", "+31 50" ],
            [ "Hoogvliet", "+31 10" ],
            [ "Houten", "+31 30" ],
            [ "IJsselstein", "+31 30" ],
            [ "Leiden", "+31 71" ],
            [ "Maastricht", "+31 43" ],
            [ "Nieuwegein", "+31 30" ],
            [ "Nijmegen", "+31 24" ],
            [ "Oud Zuilen", "+31 30" ],
            [ "Philipsburg", "31" ],
            [ "Rotterdam", "+31 10" ],
            [ "The Hague", "+31 70" ],
            [ "The Hague (Den Haag)", "+31 70" ],
            [ "Tilburg", "+31 13" ],
            [ "Utrecht", "+31 30" ],
            [ "Vught", "+31 73" ],
            [ "Zaandam", "+31 75" ],
            [ "Zeist", "+31 30" ],
            [ "Zoetermeer", "+31 79" ],
            [ "Zwolle", "+31 38" ]
        ],
        "Netherlands Antilles": [
            [ "Bandar Seri Begawan", "+599 2" ],
            [ "Bonaire", "+599 7" ],
            [ "Curacao", "+599 9" ],
            [ "Saba", "+599 4" ],
            [ "St. Eustatius", "+599 3" ],
            [ "St. Maarten", "+599 5" ],
            [ "Willemstad", "+599 9" ]
        ],
        "New Zealand": [
            [ "Auckland", "+64 9" ],
            [ "Chatham Islands", "+64 3" ],
            [ "Christchurch", "+64 3" ],
            [ "Dunedin", "+64 3" ],
            [ "Hamilton", "+64 7" ],
            [ "Hastings", "+64 6" ],
            [ "Invercargill", "+64 3" ],
            [ "Napier", "+64 6" ],
            [ "Nelson", "+64 3" ],
            [ "New Plymouth", "+64 6" ],
            [ "Palmerston North", "+64 6" ],
            [ "Richmond", "+64 765" ],
            [ "Tauranga Harbour", "+64 7" ],
            [ "Timaru", "+64 3" ],
            [ "Wellington", "+64 4" ],
            [ "Westport", "+64 812" ]
        ],
        "Nicaragua": [
            [ "Chinandega", "+505 341" ],
            [ "Granada", "+505 55" ],
            [ "Managua", "+505 2" ],
            [ "Rivas", "+505 46" ],
            [ "Tipitapa", "+505 53" ]
        ],
        "Niger": [
            [ "Niamey", "+227" ]
        ],
        "Nigeria": [
            [ "Aba", "+234 82" ],
            [ "Abakaliki", "+234 43" ],
            [ "Abeokuta", "+234 39" ],
            [ "Abuja", "+234 9" ],
            [ "Ado Ekiti", "+234 30" ],
            [ "Agbor", "+234 55" ],
            [ "Ahoada", "+234 86" ],
            [ "Akure", "+234 34" ],
            [ "Asaba", "+234 56" ],
            [ "Auchi", "+234 57" ],
            [ "Awka", "+234 48" ],
            [ "Azare", "+234 71" ],
            [ "Badagry", "+234 1" ],
            [ "Bauchi", "+234 77" ],
            [ "Benin", "+234 52" ],
            [ "Birnin", "+234 68" ],
            [ "Calabar", "+234 87" ],
            [ "Damaturu", "+234 74" ],
            [ "Edo", "+234 52" ],
            [ "Enugu", "+234 42" ],
            [ "Gombe", "+234 72" ],
            [ "Gusau", "+234 63" ],
            [ "Hadejia", "+234 78" ],
            [ "Ibadan", "+234 2" ],
            [ "Ijebu Ode", "+234 37" ],
            [ "Ikare", "+234 50" ],
            [ "Ile Ife", "+234 36" ],
            [ "Ilorin", "+234 31" ],
            [ "Jalingo", "+234 79" ],
            [ "Jos", "+234 73" ],
            [ "Kaduna", "+234 62" ],
            [ "Kafanchau", "+234 61" ],
            [ "Kano", "+234 64" ],
            [ "Kano Nigeria", "+234 64" ],
            [ "Katsina", "+234 65" ],
            [ "Kontagora", "+234 67" ],
            [ "Lafia", "+234 47" ],
            [ "Lagos", "+234 1" ],
            [ "Lokoja", "+234 58" ],
            [ "Maiduguri", "+234 76" ],
            [ "Makurdi", "+234 44" ],
            [ "Minna", "+234 66" ],
            [ "New Bussa", "+234 33" ],
            [ "Niger Sate", "+234 66" ],
            [ "Ogoja", "+234 45" ],
            [ "Okitipupa", "+234 59" ],
            [ "Onitsha", "+234 46" ],
            [ "Oshogbo", "+234 35" ],
            [ "Owerri", "+234 83" ],
            [ "Owo", "+234 51" ],
            [ "Oyo", "+234 38" ],
            [ "Pank Shin", "+234 70" ],
            [ "Port Harcourt", "+234 84" ],
            [ "Sapele", "+234 54" ],
            [ "Sokobo", "+234 60" ],
            [ "Umuahia", "+234 88" ],
            [ "Uyo", "+234 85" ],
            [ "Warri", "+234 53" ],
            [ "Wukari", "+234 41" ],
            [ "Yenegoa", "+234 89" ],
            [ "Yola", "+234 75" ],
            [ "Zaria", "+234 69" ]
        ],
        "Norway": [
            [ "Arendal", "+47 37" ],
            [ "Bergen", "+47 5" ],
            [ "Halden", "+47 69" ],
            [ "Haugesund", "+47 5" ],
            [ "Larvik", "+47 33" ],
            [ "Moss", "+47 69" ],
            [ "Oslo", "+47 2" ],
            [ "Porsgrunn", "+47 35" ]
        ],
        "Oman": [
            [ "Muscat", "+968 24" ]
        ],
        "Pakistan": [
            [ "Faisalabad", "+92 41" ],
            [ "Gujranwala", "+92 431" ],
            [ "Hyderabad", "+92 221" ],
            [ "Islamabad", "+92 51" ],
            [ "Karachi", "+92 21" ],
            [ "Lahore", "+92 42" ],
            [ "Multan", "+92 61" ],
            [ "Okara", "+92 442" ],
            [ "Peshawar", "+92 91" ],
            [ "Quetta", "+92 81" ],
            [ "Rawalpindi", "+92 51" ],
            [ "Sahiwal", "+92 441" ],
            [ "Sargodha", "+92 451" ],
            [ "Sialkot", "+92 524" ]
        ],
        "Panama": [
            [ "Bocas del Toro", "+507 7" ]
        ],
        "Paraguay": [
            [ "Asunción", "+595 21" ],
            [ "Concepcion", "+595 31" ],
            [ "Coronel Oviedo", "+595 521" ],
            [ "Encarnacion", "+595 71" ],
            [ "Pilar", "+595 86" ]
        ],
        "Peru": [
            [ "Arequipa", "+51 54" ],
            [ "Cajamarca", "+51 44" ],
            [ "Callao", "+51 14" ],
            [ "Chiclayo", "+51 74" ],
            [ "Chimbote", "+51 44" ],
            [ "Cusco", "+51 84" ],
            [ "Ica", "+51 34" ],
            [ "Iquitos", "+51 94" ],
            [ "Lima", "+51 1" ],
            [ "Piura", "+51 74" ],
            [ "Tacna", "+51 54" ],
            [ "Trujillo", "+51 44" ]
        ],
        "Philippines": [
            [ "Angeles City", "+63 455" ],
            [ "Bacolod City", "+63 34" ],
            [ "Cavite", "+63 46" ],
            [ "Cebu City", "+63 32" ],
            [ "Dagupan City", "+63 75" ],
            [ "Davao City", "+63 82" ],
            [ "General Santos", "+63 83" ],
            [ "Iloilo", "+63 33" ],
            [ "Manila", "+63 2" ],
            [ "Masbate", "+63 56" ],
            [ "Puerto Princesa City", "+63 48" ],
            [ "Quezon City", "+63 2" ],
            [ "San Fernando", "+63 818" ],
            [ "San Jose", "+63 309" ],
            [ "San Pablo City", "+63 93" ],
            [ "Santa Cruz", "+63 831" ],
            [ "Tacloban City", "+63 53" ],
            [ "Tarlac", "+63 452" ],
            [ "Zamboanga", "+63 62" ]
        ],
        "Poland": [
            [ "Bialystok", "+48 85" ],
            [ "Brzeg", "+48 71" ],
            [ "Chojnice", "+48 76" ],
            [ "Czêstochowa", "+48 34" ],
            [ "Elblag", "+48 50" ],
            [ "Gdansk", "+48 58" ],
            [ "Gdynia", "+48 58" ],
            [ "Goleniów", "+48 91" ],
            [ "Gorzów Wielkopolski", "+48 95" ],
            [ "Hel", "+48 58" ],
            [ "Kalisz", "+48 62" ],
            [ "Katowice", "+48 32" ],
            [ "Kielce", "+48 41" ],
            [ "Koszalin", "+48 94" ],
            [ "Krakow", "+48 12" ],
            [ "Leba", "+48 59" ],
            [ "Legnica", "+48 76" ],
            [ "Lodz", "+48 42" ],
            [ "Lublin", "+48 81" ],
            [ "Olesnica", "+48 71" ],
            [ "Otwock", "+48 42" ],
            [ "Plock", "+48 24" ],
            [ "Police", "+48 91" ],
            [ "Poznañ", "+48 61" ],
            [ "Przemysl", "+48 10" ],
            [ "Rybnik", "+48 36" ],
            [ "Siedlce", "+48 25" ],
            [ "Sosnowiec", "+48 32" ],
            [ "Stargard Szczecinski", "+48 92" ],
            [ "Suwalki", "+48 87" ],
            [ "Swinoujscie", "+48 936" ],
            [ "Szczecin", "+48 91" ],
            [ "Tarnow", "+48 14" ],
            [ "Tychy", "+48 59" ],
            [ "Warsaw", "+48 22" ],
            [ "Wroclaw", "+48 71" ],
            [ "Zabrze", "+48 32" ],
            [ "Zamosc", "+48 84" ],
            [ "Zielona Gora", "+48 68" ]
        ],
        "Portugal": [
            [ "Amadora", "+351 21" ],
            [ "Aveiro", "+351 234" ],
            [ "Beja", "+351 284" ],
            [ "Braga", "+351 253" ],
            [ "Braganca", "+351 273" ],
            [ "Caldar Da Rainha", "+351 262" ],
            [ "Cascais", "+351 21" ],
            [ "Castelo Branco", "+351 272" ],
            [ "Castro Verd", "+351 286" ],
            [ "Chaves", "+351 276" ],
            [ "Coimbra", "+351 239" ],
            [ "Covilha", "+351 275" ],
            [ "Estremoz", "+351 268" ],
            [ "Evora", "+351 266" ],
            [ "Faro", "+351 289" ],
            [ "Figueira da Foz", "+351 233" ],
            [ "Funchal", "+351 297" ],
            [ "Guarda", "+351 271" ],
            [ "Horta", "+351 292" ],
            [ "Leiria", "+351 244" ],
            [ "Lisbon", "+351 21" ],
            [ "Mirandela", "+351 278" ],
            [ "Moura", "+351 285" ],
            [ "Odemira", "+351 283" ],
            [ "Ponta Delgada", "+351 296" ],
            [ "Portalegre", "+351 245" ],
            [ "Portimão", "+351 282" ],
            [ "Porto", "+351 22" ],
            [ "Santarem", "+351 243" ],
            [ "Setúbal", "+351 265" ],
            [ "Tavira", "+351 281" ],
            [ "Viana do Castelo", "+351 258" ],
            [ "Vila Nova de Gaia", "+351 22" ],
            [ "Vila Real", "+351 259" ],
            [ "Viseu", "+351 232" ]
        ],
        "Qatar": [
            [ "Doha", "974" ]
        ],
        "Romania": [
            [ "Arad", "+40 257" ],
            [ "Bacau", "+40 234" ],
            [ "Botosani", "+40 231" ],
            [ "Braila", "+40 239" ],
            [ "Brasov", "+40 268" ],
            [ "Bucharest", "+40 21" ],
            [ "Buzau", "+40 238" ],
            [ "Calarasi", "+40 242" ],
            [ "Caransebes", "+40 255" ],
            [ "Ceahlau", "+40 233" ],
            [ "Cluj Napoca", "+40 264" ],
            [ "Constanta", "+40 241" ],
            [ "Craiova", "+40 251" ],
            [ "Drobeta Turnu Severin", "+40 252" ],
            [ "Focsani", "+40 237" ],
            [ "Galati", "+40 236" ],
            [ "Gheorgheni", "+40 266" ],
            [ "Giurgiu", "+40 246" ],
            [ "Iasi", "+40 232" ],
            [ "Oradea", "+40 259" ],
            [ "Petrosani", "+40 254" ],
            [ "Pitesti", "+40 248" ],
            [ "Ploiesti", "+40 244" ],
            [ "Rosiori de Vede", "+40 247" ],
            [ "Satu Mare", "+40 261" ],
            [ "Sibiu", "+40 269" ],
            [ "Sighetu Marmatiei", "+40 262" ],
            [ "Slatina", "+40 249" ],
            [ "Slobozia", "+40 243" ],
            [ "Sulina", "+40 240" ],
            [ "Talmaciu", "+40 269" ],
            [ "Timisoara", "+40 256" ],
            [ "Tirgoviste", "+40 245" ]
        ],
        "Russia": [
            [ "Amursk", "+7 416" ],
            [ "Anadyr", "+7 42722" ],
            [ "Arkhangelsk", "+7 8182" ],
            [ "Astrahanka", "+7 8512" ],
            [ "Astrakhan", "+7 8512" ],
            [ "Barnaul", "+7 3852" ],
            [ "Belgorod", "+7 472" ],
            [ "Bryansk", "+7 483" ],
            [ "Cheboksary", "+7 8352" ],
            [ "Chelyabinsk", "+7 351" ],
            [ "Cherepovets", "+7 820" ],
            [ "Cherkessk", "+7 87822" ],
            [ "Chita", "+7 302" ],
            [ "Ekaterinburg", "+7 343" ],
            [ "Gorno Altaysk", "+7 388" ],
            [ "Groznyy", "+7 871" ],
            [ "Irkutsk", "+7 3952" ],
            [ "Ivanovo", "+7 493" ],
            [ "Izhevsk", "+7 3412" ],
            [ "Kaliningrad", "+7 401" ],
            [ "Kaluga", "+7 484" ],
            [ "Kazan", "+7 843" ],
            [ "Kemerovo", "+7 3842" ],
            [ "Khabarovsk", "+7 4212" ],
            [ "Kirov", "+7 833" ],
            [ "Kostroma", "+7 494" ],
            [ "Krasnodar", "+7 8612" ],
            [ "Krasnoyarsk", "+7 3912" ],
            [ "Kurgan", "+7 352" ],
            [ "Kursk", "+7 471" ],
            [ "Lipetsk", "+7 474" ],
            [ "Magadan", "+7 41322" ],
            [ "Mineral nyye Vody", "+7 879" ],
            [ "Moscow", "+7 495" ],
            [ "Murmansk", "+7 8152" ],
            [ "Naberezhnye Chelny", "+7 8552" ],
            [ "Norilsk", "+7 39152" ],
            [ "Novgorod", "+7 81622" ],
            [ "Novorossiysk", "+7 86117" ],
            [ "Novosibirsk", "+7 383" ],
            [ "Omsk", "+7 3812" ],
            [ "Orel", "+7 8262" ],
            [ "Orenburg", "+7 3532" ],
            [ "Penza", "+7 8412" ],
            [ "Perm", "+7 3422" ],
            [ "Petropavlovsk Kamchatskiy", "+7 4152" ],
            [ "Petrozavodsk", "+7 814" ],
            [ "Rostov", "+7 863" ],
            [ "Ryazan", "+7 491" ],
            [ "Samara", "+7 8462" ],
            [ "Saransk", "+7 834" ],
            [ "Saratov", "+7 8452" ],
            [ "Smolensk", "+7 481" ],
            [ "Sochi", "+7 862" ],
            [ "St. Petersburg", "+7 812" ],
            [ "Stavropol", "+7 8652" ],
            [ "Surgut", "+7 3462" ],
            [ "Syktyvkar", "+7 821" ],
            [ "Tambov", "+7 475" ],
            [ "Tomsk", "+7 3822" ],
            [ "Tula", "+7 487" ],
            [ "Tura", "+7 39113" ],
            [ "Tver", "+7 482" ],
            [ "Ufa", "+7 3472" ],
            [ "Ul'yanovsk", "+7 8422" ],
            [ "Ulan Ude", "+7 3012" ],
            [ "Ulyanovsk", "+7 842" ],
            [ "Vladikavkaz", "+7 867" ],
            [ "Vladimir", "+7 492" ],
            [ "Vladivostok", "+7 4232" ],
            [ "Volgograd", "+7 8442" ],
            [ "Vologda", "+7 817" ],
            [ "Voronezh", "+7 473" ],
            [ "Yakutsk", "+7 4112" ],
            [ "Yaroslavl", "+7 485" ],
            [ "Yekaterinburg", "+7 343" ],
            [ "Yoshkar Ola", "+7 836" ]
        ],
        "Rwanda": [
            [ "Kigali", "+250" ]
        ],
        "Sao Tome & Principe": [
            [ "Sao Tome", "+239" ]
        ],
        "Saudi Arabia": [
            [ "Abha", "+966 7" ],
            [ "Al Khubar", "+966 3" ],
            [ "Dammam", "+966 3" ],
            [ "Ha il", "+966 6" ],
            [ "Khamis Mushayt", "+966 7" ],
            [ "Makkah", "+966 2" ],
            [ "Najran", "+966 7" ],
            [ "Rabigh", "+966 2" ],
            [ "Riyadh", "+966 1" ],
            [ "Shaqra", "+966 1" ]
        ],
        "Senegal": [
            [ "Dakar", "+221 8" ],
            [ "Kaolack", "+221 9" ],
            [ "Mbour", "+221 9" ],
            [ "Saint Louis", "+221 9" ],
            [ "Thiès", "+221 9" ],
            [ "Ziguinchor", "+221 9" ]
        ],
        "Serbia and Montenegro": [
            [ "Belgrade", "+381 11" ],
            [ "Beograd (Belgrade)", "+381 11" ],
            [ "Jagodina", "+381 35" ],
            [ "Kosovska Mitrovica", "+381 28" ],
            [ "Kragujevac", "+381 34" ],
            [ "Kraljevo", "+381 36" ],
            [ "Krusevac", "+381 37" ],
            [ "Krushevac", "+381 37" ],
            [ "Nis", "+381 18" ],
            [ "Novi Pazar", "+381 20" ],
            [ "Novi Sad", "+381 21" ],
            [ "Panchevo", "+381 13" ],
            [ "Pec", "+381 39" ],
            [ "Pirot", "+381 10" ],
            [ "Pozarevac", "+381 12" ],
            [ "Prishtina", "+381 38" ],
            [ "Pristina", "+381 38" ],
            [ "Sombor", "+381 25" ],
            [ "Sremska Mitrovica", "+381 22" ],
            [ "Subotica", "+381 24" ],
            [ "Uzice", "+381 31" ],
            [ "Valjevo", "+381 14" ],
            [ "Zajechar", "+381 19" ]
        ],
        "Sierra Leone": [
            [ "Freetown", "+232 22" ]
        ],
        "Singapore": [
            [ "Singapore", "65" ]
        ],
        "Slovakia": [
            [ "Banská Bystrica", "+421 48" ],
            [ "Bardejov", "+421 54" ],
            [ "Bratislava", "+421 2" ],
            [ "Dujanská Streda", "+421 31" ],
            [ "Humenné", "+421 57" ],
            [ "Kosice", "+421 55" ],
            [ "Levice 36", "+421 36" ],
            [ "Lucenec", "+421 47" ],
            [ "Martin", "+421 43" ],
            [ "Michalovce", "+421 56" ],
            [ "Nitra", "+421 37" ],
            [ "Nové Zámky", "+421 35" ],
            [ "Poprad", "+421 52" ],
            [ "Prievidza", "+421 46" ],
            [ "Senec", "+421 34" ],
            [ "Senica", "+421 34" ],
            [ "Topol'cany", "+421 38" ],
            [ "Trencín", "+421 32" ],
            [ "Trnava", "+421 33" ],
            [ "Zvolen", "+421 45" ]
        ],
        "Slovenia": [
            [ "Celje", "+386 3" ],
            [ "Koper", "+386 5" ],
            [ "Kranj", "+386 4" ],
            [ "Ljubljana", "+386 1" ],
            [ "Maribor", "+386 2" ],
            [ "Novo mesto", "+386 7" ],
            [ "Portoroz", "+386 5" ]
        ],
        "Somalia": [
            [ "Mogadishu", "+252 61" ]
        ],
        "South Africa": [
            [ "Bethlehem", "+27 835" ],
            [ "Bloemfontein", "+27 51" ],
            [ "Cape Town", "+27 21" ],
            [ "Durban", "+27 31" ],
            [ "East London", "+27 431" ],
            [ "George", "+27 712" ],
            [ "Johannesburg", "+27 11" ],
            [ "Port Elizabeth", "+27 41" ],
            [ "Pretoria", "+27 12" ],
            [ "Uitenhage", "+27 41" ],
            [ "Vereeniging", "+27 11" ],
            [ "Welkom", "+27 57" ]
        ],
        "Spain": [
            [ "Albacete", "+34 967" ],
            [ "Alicante", "+34 96" ],
            [ "Almería", "+34 950" ],
            [ "Avila", "+34 920" ],
            [ "Badajoz", "+34 924" ],
            [ "Barcelona", "+34 93" ],
            [ "Bilbao", "+34 94" ],
            [ "Burgos", "+34 947" ],
            [ "Caceres", "+34 927" ],
            [ "Cadiz", "+34 956" ],
            [ "Ceuta", "+34 952" ],
            [ "Cordoba", "+34 957" ],
            [ "Cuenca", "+34 969" ],
            [ "Durango", "+34 970" ],
            [ "Girona", "+34 972" ],
            [ "Granada", "+34 958" ],
            [ "Guadalajara", "+34 949" ],
            [ "Huelva", "+34 959" ],
            [ "Huesca", "+34 974" ],
            [ "Jaen", "+34 953" ],
            [ "La Coruña", "+34 81" ],
            [ "Las Palmas", "+34 928" ],
            [ "Leon", "+34 987" ],
            [ "Lerida", "+34 973" ],
            [ "Lugo", "+34 982" ],
            [ "Madrid", "+34 91" ],
            [ "Malaga", "+34 95" ],
            [ "Melilla", "+34 952" ],
            [ "Murcia", "+34 968" ],
            [ "Orense", "+34 988" ],
            [ "Oviedo", "+34 407" ],
            [ "Palma", "+34 971" ],
            [ "Palma de Mallorca", "+34 971" ],
            [ "Pamplona", "+34 948" ],
            [ "Pontevedra", "+34 986" ],
            [ "Salamanca", "+34 923" ],
            [ "Santa Cruz", "+34 922" ],
            [ "Santander", "+34 942" ],
            [ "Sevilla", "+34 95" ],
            [ "Tarragona", "+34 977" ],
            [ "Tenerife", "+34 922" ],
            [ "Toledo", "+34 925" ],
            [ "Valencia", "+34 96" ],
            [ "Valladolid", "+34 983" ],
            [ "Zamora", "+34 980" ],
            [ "Zaragoza", "+34 976" ]
        ],
        "Sri Lanka": [
            [ "Colombo", "+94 11" ],
            [ "Sri Jayavardhanapura", "+94 1" ]
        ],
        "Sudan": [
            [ "Khartoum", "+249 183" ],
            [ "Port Sudan", "+249 31" ]
        ],
        "Suriname": [
            [ "Paramaribo", "+597 4" ]
        ],
        "Swaziland": [
            [ "Mbabane", "+268" ]
        ],
        "Sweden": [
            [ "Alfta", "+46 271" ],
            [ "Alingsås", "+46 322" ],
            [ "Älmhult", "+46 476" ],
            [ "Alunda", "+46 174" ],
            [ "Älvdalen", "+46 251" ],
            [ "Alvesta", "+46 472" ],
            [ "Älvsbyn", "+46 929" ],
            [ "Åmål", "+46 532" ],
            [ "Ånge", "+46 690" ],
            [ "Ängelholm", "+46 431" ],
            [ "Arboga", "+46 589" ],
            [ "Åre", "+46 647" ],
            [ "Årjäng", "+46 573" ],
            [ "Arjeplog", "+46 961" ],
            [ "Arvidsjaur", "+46 960" ],
            [ "Arvika", "+46 570" ],
            [ "Åseda", "+46 474" ],
            [ "Åsele", "+46 941" ],
            [ "Askersund", "+46 583" ],
            [ "Åtvidaberg", "+46 120" ],
            [ "Avesta", "+46 226" ],
            [ "Backe", "+46 624" ],
            [ "Bastuträsk", "+46 915" ],
            [ "Bengtsfors", "+46 531" ],
            [ "Bergsjö", "+46 652" ],
            [ "Björna", "+46 662" ],
            [ "Bjurholm", "+46 932" ],
            [ "Boden", "+46 921" ],
            [ "Bollnäs", "+46 278" ],
            [ "Borås", "+46 33" ],
            [ "Borlänge", "+46 243" ],
            [ "Bräcke", "+46 693" ],
            [ "Bredbyn", "+46 661" ],
            [ "Burträsk", "+46 914" ],
            [ "Byske", "+46 912" ],
            [ "Charlottenberg", "+46 571" ],
            [ "Deje", "+46 552" ],
            [ "Delsbo", "+46 653" ],
            [ "Dorotea", "+46 942" ],
            [ "Ed", "+46 534" ],
            [ "Eksjö", "+46 381" ],
            [ "Emmaboda", "+46 471" ],
            [ "Enköping", "+46 171" ],
            [ "Eskilstuna", "+46 16" ],
            [ "Eslöv", "+46 413" ],
            [ "Fagersta", "+46 223" ],
            [ "Falkenberg", "+46 346" ],
            [ "Falköping", "+46 515" ],
            [ "Falun", "+46 23" ],
            [ "Färgelanda", "+46 528" ],
            [ "Filipstad", "+46 590" ],
            [ "Finspång", "+46 122" ],
            [ "Fjugesta", "+46 585" ],
            [ "Flen", "+46 157" ],
            [ "Föllinge", "+46 645" ],
            [ "Fredrika", "+46 943" ],
            [ "Furudal", "+46 258" ],
            [ "Gaddede", "+46 672" ],
            [ "Gagnef", "+46 241" ],
            [ "Gällivare", "+46 970" ],
            [ "Gamleby", "+46 493" ],
            [ "Gävle", "+46 26" ],
            [ "Gislaved", "+46 371" ],
            [ "Gnesta", "+46 158" ],
            [ "Göteborg", "+46 31" ],
            [ "Gothenburg", "+46 31" ],
            [ "Gothenburg (Göteborg)", "+46 31" ],
            [ "Gotland", "+46 498" ],
            [ "Gränna", "+46 390" ],
            [ "Grästorp", "+46 514" ],
            [ "Grebbestad", "+46 525" ],
            [ "Grums", "+46 555" ],
            [ "Gullspång", "+46 551" ],
            [ "Hagfors", "+46 563" ],
            [ "Hakkas", "+46 975" ],
            [ "Hällefors", "+46 591" ],
            [ "Hallen", "+46 643" ],
            [ "Hallsberg", "+46 582" ],
            [ "Hallstahammar", "+46 220" ],
            [ "Hallstavik", "+46 175" ],
            [ "Halmstad", "+46 35" ],
            [ "Hammarstrand", "+46 696" ],
            [ "Hammerdal", "+46 644" ],
            [ "Haparanda", "+46 922" ],
            [ "Harads", "+46 928" ],
            [ "Härnösand", "+46 611" ],
            [ "Hässleholm", "+46 451" ],
            [ "Hede", "+46 684" ],
            [ "Hedemora", "+46 225" ],
            [ "Hedesunda", "+46 291" ],
            [ "Helsingborg", "+46 42" ],
            [ "Herrljunga", "+46 513" ],
            [ "Hindås", "+46 301" ],
            [ "Hjo", "+46 503" ],
            [ "Hofors", "+46 290" ],
            [ "Hörby", "+46 415" ],
            [ "Hoting", "+46 671" ],
            [ "Hudiksvall", "+46 650" ],
            [ "Hultsfred", "+46 495" ],
            [ "Hyltebruk", "+46 345" ],
            [ "Idre", "+46 253" ],
            [ "Jokkmokk", "+46 971" ],
            [ "Jönköping", "+46 36" ],
            [ "Jörn", "+46 916" ],
            [ "Junsele", "+46 621" ],
            [ "Kalix", "+46 923" ],
            [ "Kalmar", "+46 480" ],
            [ "Karlholmsbruk", "+46 294" ],
            [ "Karlsborg", "+46 505" ],
            [ "Karlshamn", "+46 454" ],
            [ "Karlskoga", "+46 586" ],
            [ "Karlskrona", "+46 455" ],
            [ "Karlstad", "+46 54" ],
            [ "Katrineholm", "+46 150" ],
            [ "Kil", "+46 554" ],
            [ "Kinna", "+46 320" ],
            [ "Kiruna", "+46 980" ],
            [ "Kisa", "+46 494" ],
            [ "Klippan", "+46 435" ],
            [ "Köping", "+46 221" ],
            [ "Kopparberg", "+46 580" ],
            [ "Korpilombolo", "+46 977" ],
            [ "Kramfors", "+46 612" ],
            [ "Kristianstad", "+46 44" ],
            [ "Kristinehamn", "+46 550" ],
            [ "Krokom", "+46 640" ],
            [ "Kungälv", "+46 303" ],
            [ "Kungsbacka", "+46 300" ],
            [ "Kungsör", "+46 227" ],
            [ "Laholm", "+46 430" ],
            [ "Lakaträsk", "+46 925" ],
            [ "Landskrona", "+46 418" ],
            [ "Laxå", "+46 584" ],
            [ "Leksand", "+46 247" ],
            [ "Lerum", "+46 302" ],
            [ "Lessebo", "+46 478" ],
            [ "Liden", "+46 692" ],
            [ "Lidköping", "+46 510" ],
            [ "Lindesberg", "+46 581" ],
            [ "Linköping", "+46 13" ],
            [ "Lit", "+46 642" ],
            [ "Ljungby", "+46 372" ],
            [ "Ljusdal", "+46 651" ],
            [ "Los", "+46 657" ],
            [ "Lövånger", "+46 913" ],
            [ "Ludvika", "+46 240" ],
            [ "Luleå", "+46 920" ],
            [ "Lycksele", "+46 950" ],
            [ "Lysekil", "+46 523" ],
            [ "Malå", "+46 953" ],
            [ "Malmö", "+46 40" ],
            [ "Malung", "+46 280" ],
            [ "Mariannelund", "+46 496" ],
            [ "Mariefred", "+46 159" ],
            [ "Mariestad", "+46 501" ],
            [ "Markaryd", "+46 433" ],
            [ "Mellerud", "+46 530" ],
            [ "Mjölby", "+46 142" ],
            [ "Molkom", "+46 553" ],
            [ "Mönsterås", "+46 499" ],
            [ "Motala", "+46 141" ],
            [ "Mullsjö", "+46 392" ],
            [ "Munkedal", "+46 524" ],
            [ "Näsåker", "+46 622" ],
            [ "Nässjö", "+46 380" ],
            [ "Nora", "+46 587" ],
            [ "Nordmaling", "+46 930" ],
            [ "Norrköping", "+46 11" ],
            [ "Norrtälje", "+46 176" ],
            [ "Norsjö", "+46 918" ],
            [ "Nybro", "+46 481" ],
            [ "Nyköping", "+46 155" ],
            [ "Ockelbo", "+46 297" ],
            [ "Ödeshög", "+46 144" ],
            [ "Öland", "+46 485" ],
            [ "Örbyhus", "+46 295" ],
            [ "Örebro", "+46 173" ],
            [ "Öregrund", "+46 173" ],
            [ "Örnsköldsvik", "+46 660" ],
            [ "Orust", "+46 304" ],
            [ "Osby", "+46 479" ],
            [ "Oskarshamn", "+46 491" ],
            [ "Östersund", "+46 63" ],
            [ "Överkalix", "+46 926" ],
            [ "Övertorneå", "+46 927" ],
            [ "Pajala", "+46 978" ],
            [ "Piteå", "+46 911" ],
            [ "Porjus", "+46 973" ],
            [ "Ramsele", "+46 623" ],
            [ "Råneå", "+46 924" ],
            [ "Rätan", "+46 682" ],
            [ "Rättvik", "+46 248" ],
            [ "Robertsfors", "+46 934" ],
            [ "Ronneby", "+46 457" ],
            [ "Ryd", "+46 459" ],
            [ "Säffle", "+46 533" ],
            [ "Sala", "+46 224" ],
            [ "Sävsjö", "+46 382" ],
            [ "Simrishamn", "+46 414" ],
            [ "Sjöbo", "+46 416" ],
            [ "Skara", "+46 511" ],
            [ "Skellefteå", "+46 910" ],
            [ "Skinnskatteberg", "+46 222" ],
            [ "Skövde", "+46 500" ],
            [ "Söderhamn", "+46 270" ],
            [ "Söderköping", "+46 121" ],
            [ "Södertälje", "+46 8" ],
            [ "Sollefteå", "+46 620" ],
            [ "Sölvesborg", "+46 456" ],
            [ "Sorsele", "+46 952" ],
            [ "Stockholm", "+46 8" ],
            [ "Storuman", "+46 951" ],
            [ "Strängnäs", "+46 152" ],
            [ "Strömstad", "+46 526" ],
            [ "Strömsund", "+46 670" ],
            [ "Stugun", "+46 695" ],
            [ "Sundsvall", "+46 60" ],
            [ "Sunne", "+46 565" ],
            [ "Svärdsjö", "+46 246" ],
            [ "Sveg", "+46 680" ],
            [ "Svenljunga", "+46 325" ],
            [ "Svenstavik", "+46 687" ],
            [ "Sysslebäck", "+46 564" ],
            [ "Tärnaby", "+46 954" ],
            [ "Tärnsjö", "+46 292" ],
            [ "Tibro", "+46 504" ],
            [ "Tidaholm", "+46 502" ],
            [ "Tierp", "+46 293" ],
            [ "Tingsryd", "+46 477" ],
            [ "Tomelilla", "+46 417" ],
            [ "Töreboda", "+46 506" ],
            [ "Torpshammar", "+46 691" ],
            [ "Torsås", "+46 486" ],
            [ "Torsby", "+46 560" ],
            [ "Tranås", "+46 140" ],
            [ "Trelleborg", "+46 410" ],
            [ "Trollhättan", "+46 520" ],
            [ "Trosa", "+46 156" ],
            [ "Uddevalla", "+46 522" ],
            [ "Ullånger", "+46 613" ],
            [ "Ulricehamn", "+46 321" ],
            [ "Umeå", "+46 90" ],
            [ "Uppsala", "+46 18" ],
            [ "Vadstena", "+46 143" ],
            [ "Vaggeryd", "+46 393" ],
            [ "Valdemarsvik", "+46 123" ],
            [ "Vänersborg", "+46 521" ],
            [ "Vännäs", "+46 935" ],
            [ "Vansbro", "+46 281" ],
            [ "Vara", "+46 512" ],
            [ "Varberg", "+46 340" ],
            [ "Värnamo", "+46 370" ],
            [ "Västerås", "+46 21" ],
            [ "Västervik", "+46 490" ],
            [ "Växjö", "+46 470" ],
            [ "Vetlanda", "+46 383" ],
            [ "Vikbolandet", "+46 125" ],
            [ "Vilhelmina", "+46 940" ],
            [ "Vimmerby", "+46 492" ],
            [ "Vindeln", "+46 933" ],
            [ "Vingåker", "+46 151" ],
            [ "Vittangi", "+46 981" ],
            [ "Vuollerim", "+46 976" ],
            [ "Ystad", "+46 411" ]
        ],
        "Switzerland": [
            [ "Ammerswil (Aarau)", "+41 62" ],
            [ "Andermatt", "+41 41" ],
            [ "Arosa", "+41 81" ],
            [ "Baden", "+41 56" ],
            [ "Basel", "+41 61" ],
            [ "Basel Stadt", "+41 61" ],
            [ "Bellinzona", "+41 91" ],
            [ "Bern", "+41 31" ],
            [ "Berne", "+41 31" ],
            [ "Biel", "+41 32" ],
            [ "Biel (Bienne)", "+41 32" ],
            [ "Bienne", "+41 32" ],
            [ "Chiasso", "+41 91" ],
            [ "Crans", "+41 27" ],
            [ "Davos", "+41 81" ],
            [ "Fribourg", "+41 26" ],
            [ "Geneva", "+41 22" ],
            [ "Gryon (Yverdon", "+41 24" ],
            [ "Gstaad", "+41 33" ],
            [ "Interlaken", "+41 33" ],
            [ "Klosters", "+41 81" ],
            [ "La Chaux", "+41 32" ],
            [ "Lausanne", "+41 21" ],
            [ "Lenk im Simmental", "+41 33" ],
            [ "Locarno", "+41 91" ],
            [ "Lucerne", "+41 41" ],
            [ "Lugano", "+41 91" ],
            [ "Montreux", "+41 21" ],
            [ "Neuchâtel", "+41 32" ],
            [ "Obewil im Simmental", "+41 33" ],
            [ "Schaffhausen", "+41 52" ],
            [ "St. Gallen", "+41 71" ],
            [ "St. Moritz", "+41 81" ],
            [ "Vevey", "+41 21" ],
            [ "Wengen", "+41 33" ],
            [ "Winterthur", "+41 52" ],
            [ "Zermatt", "+41 27" ],
            [ "Zug", "+41 41" ],
            [ "Zurich", "+41 43" ]
        ],
        "Syria": [
            [ "Adra", "+963 11" ],
            [ "Al", "+963 21" ],
            [ "Aleppo", "+963 21" ],
            [ "Alhasakah", "+963 52" ],
            [ "Amouda", "+963 53" ],
            [ "Ansari", "+963 21" ],
            [ "Ariha", "+963 23" ],
            [ "Bab Charqui", "+963 11" ],
            [ "Banias", "+963 43" ],
            [ "Barzeh", "+963 11" ],
            [ "Basit", "+963 41" ],
            [ "Bebila", "+963 11" ],
            [ "Beit Yashoot", "+963 41" ],
            [ "Bloudan", "+963 13" ],
            [ "Boussra", "+963 15" ],
            [ "Chik Badr", "+963 43" ],
            [ "Chik Meskin", "+963 15" ],
            [ "Citadel", "+963 33" ],
            [ "Côte d'Azur and Ras Al", "+963 41" ],
            [ "Daal", "+963 15" ],
            [ "Damascus", "+963 11" ],
            [ "Dana", "+963 23" ],
            [ "Dara", "+963 15" ],
            [ "Darayah", "+963 11" ],
            [ "Darayya", "+963 11" ],
            [ "Deir Athieh", "+963 12" ],
            [ "Deir Ezzor", "+963 51" ],
            [ "Deir Ezzour", "+963 51" ],
            [ "Derbasiah", "+963 53" ],
            [ "Douma", "+963 11" ],
            [ "Doumeir", "+963 11" ],
            [ "Doummar", "+963 11" ],
            [ "Dreikish", "+963 43" ],
            [ "Edleb", "+963 23" ],
            [ "Efrin", "+963 21" ],
            [ "Ein Arab", "+963 25" ],
            [ "Ein Hour", "+963 12" ],
            [ "Ghazalah", "+963 15" ],
            [ "Hama", "+963 33" ],
            [ "Hamadaniyah", "+963 21" ],
            [ "Hanano", "+963 21" ],
            [ "Harastah", "+963 11" ],
            [ "Harem", "+963 23" ],
            [ "Homs", "+963 31" ],
            [ "Izazz", "+963 21" ],
            [ "Izraa", "+963 15" ],
            [ "J. Artouz", "+963 11" ],
            [ "Jamiliyah", "+963 33" ],
            [ "Jarabless", "+963 25" ],
            [ "Jaramanah", "+963 11" ],
            [ "Jasem", "+963 15" ],
            [ "Jebleh", "+963 41" ],
            [ "Jerood", "+963 12" ],
            [ "Jesr Cheghour", "+963 23" ],
            [ "Kafar Sousseh", "+963 11" ],
            [ "Kafar Takharin", "+963 23" ],
            [ "Kara", "+963 12" ],
            [ "Kasab", "+963 41" ],
            [ "Katana", "+963 11" ],
            [ "Khan Wazir", "+963 21" ],
            [ "Kuraya", "+963 16" ],
            [ "Kuteifeh", "+963 12" ],
            [ "Kuwatly", "+963 33" ],
            [ "Lattakia", "+963 41" ],
            [ "Lattakiah", "+963 41" ],
            [ "Maaloula", "+963 12" ],
            [ "Maar Tamsareen", "+963 23" ],
            [ "Mahatta", "+963 33" ],
            [ "Malekiha", "+963 53" ],
            [ "Mashta", "+963 43" ],
            [ "Matmyah", "+963 33" ],
            [ "Menbej", "+963 25" ],
            [ "Messiaf", "+963 33" ],
            [ "Mezzeh", "+963 11" ],
            [ "Mharda", "+963 33" ],
            [ "Mouhajerin", "+963 11" ],
            [ "Nashabieh", "+963 11" ],
            [ "Nebek", "+963 12" ],
            [ "Palmyra", "+963 34" ],
            [ "Quneitra", "+963 14" ],
            [ "Raas Al", "+963 52" ],
            [ "Ruheibeh", "+963 12" ],
            [ "Rukn Edin", "+963 11" ],
            [ "Sabil", "+963 21" ],
            [ "Safirah", "+963 21" ],
            [ "Safita", "+963 43" ],
            [ "Salkhad", "+963 16" ],
            [ "Salkin", "+963 23" ],
            [ "Sanamein", "+963 15" ],
            [ "Sarakeb", "+963 23" ],
            [ "Sednaya", "+963 11" ],
            [ "Sehnayah", "+963 11" ],
            [ "Shahbah", "+963 16" ],
            [ "Sheen", "+963 31" ],
            [ "Skelbya and Madikk", "+963 33" ],
            [ "Sleimaniyah", "+963 21" ],
            [ "Sleinfah", "+963 41" ],
            [ "Souran and Kamhana", "+963 33" ],
            [ "Sweidaa", "+963 16" ],
            [ "Tafass", "+963 15" ],
            [ "Taldo", "+963 31" ],
            [ "Tartous", "+963 43" ],
            [ "Tel", "+963 31" ],
            [ "Tel Abiad", "+963 22" ],
            [ "Tel Refat", "+963 21" ],
            [ "Tel Salhab", "+963 33" ],
            [ "Telbisseh", "+963 31" ],
            [ "Tesshrin", "+963 41" ],
            [ "Yabrood", "+963 12" ],
            [ "Zabadani", "+963 13" ],
            [ "Zamalkah", "+963 11" ]
        ],
        "Taiwan": [
            [ "Changhua", "+886 4" ],
            [ "Chiayi", "+886 5" ],
            [ "Fengyuan", "+886 4" ],
            [ "Hualian", "+886 38" ],
            [ "Kaohsiung", "+886 7" ],
            [ "Pingtung", "+886 8" ],
            [ "Taichung", "+886 4" ],
            [ "Tainan", "+886 6" ],
            [ "Taipei", "+886 2" ],
            [ "Taitung", "+886 89" ],
            [ "Taoyuan", "+886 3" ]
        ],
        "Tajikistan": [
            [ "Dushanbe", "+992 372" ]
        ],
        "Tanzania": [
            [ "Arusha", "+255 27" ],
            [ "Dar Es Salaam", "+255 22" ],
            [ "Dodoma", "+255 26" ],
            [ "Iringa", "+255 26" ],
            [ "Kagera", "+255 28" ],
            [ "Kigoma", "+255 28" ],
            [ "Kilimanjao", "+255 27" ],
            [ "Lindi", "+255 23" ],
            [ "Mara", "+255 28" ],
            [ "Mbeya", "+255 25" ],
            [ "Morogoro", "+255 223" ],
            [ "Mtara", "+255 23" ],
            [ "Mtwara", "+255 23" ],
            [ "Mwanza", "+255 28" ],
            [ "Pemba", "+255 24" ],
            [ "Pwani", "+255 23" ],
            [ "Rukwa", "+255 25" ],
            [ "Ruvuma", "+255 25" ],
            [ "Shinyanga", "+255 28" ],
            [ "Singida", "+255 26" ],
            [ "Tabora", "+255 26" ],
            [ "Tanga", "+255 27" ],
            [ "Zanzibar", "+255 24" ]
        ],
        "Thailand": [
            [ "Bangkok", "+66 2" ],
            [ "Chanthaburi", "+66 39" ],
            [ "Chiang Mai", "+66 53" ],
            [ "Chon Buri", "+66 38" ],
            [ "Kanchanaburi", "+66 34" ],
            [ "Khon Kaen", "+66 43" ],
            [ "Lampang", "+66 54" ],
            [ "Nakhon Ratchasima", "+66 44" ],
            [ "Nong Khai", "+66 42" ],
            [ "Pattaya City", "+66 38" ],
            [ "Phitsanulok", "+66 55" ],
            [ "Phuket", "+66 76" ],
            [ "Songkhla", "+66 74" ],
            [ "Surat Thani", "+66 77" ],
            [ "Ubon Ratchathani", "+66 45" ]
        ],
        "Togo": [
            [ "Lome", "+228 2" ]
        ],
        "Trinidad & Tobago": [
            [ "San Fernando", "+1868 818" ]
        ],
        "Tunisia": [
            [ "Bizerte", "+216 2" ],
            [ "Chebba", "+216 4" ],
            [ "Gabes", "+216 5" ],
            [ "Gafsa", "+216 6" ],
            [ "Monastir", "+216 3" ],
            [ "Sfax", "+216 4" ],
            [ "Sousse", "+216 3" ],
            [ "Tabarka", "+216 8" ],
            [ "Tozeur", "+216 6" ],
            [ "Tunis", "+216 1" ]
        ],
        "Turkey": [
            [ "Adana", "+90 322" ],
            [ "Adapazari", "+90 264" ],
            [ "Adiyaman", "+90 416" ],
            [ "Afyon", "+90 272" ],
            [ "Agri", "+90 472" ],
            [ "Aksaray", "+90 382" ],
            [ "Amasya", "+90 358" ],
            [ "Ankara", "+90 312" ],
            [ "Antalya", "+90 242" ],
            [ "Ardahan", "+90 478" ],
            [ "Artvin", "+90 466" ],
            [ "Aydin", "+90 256" ],
            [ "Balikesir", "+90 266" ],
            [ "Bartin", "+90 378" ],
            [ "Batman", "+90 488" ],
            [ "Bayburt", "+90 458" ],
            [ "Bilecik", "+90 228" ],
            [ "Bingol", "+90 426" ],
            [ "Bitus", "+90 434" ],
            [ "Bolu", "+90 374" ],
            [ "Burdur", "+90 248" ],
            [ "Bursa", "+90 224" ],
            [ "Canakkale", "+90 286" ],
            [ "Cankiri", "+90 376" ],
            [ "Corum", "+90 364" ],
            [ "Denizli", "+90 258" ],
            [ "Diyarbakir", "+90 412" ],
            [ "Edirne", "+90 284" ],
            [ "Elazig", "+90 424" ],
            [ "Erzincan", "+90 446" ],
            [ "Erzurum", "+90 442" ],
            [ "Eskisehir", "+90 222" ],
            [ "Gaziantep", "+90 342" ],
            [ "Giresun", "+90 454" ],
            [ "Gumushane", "+90 456" ],
            [ "Hakkari", "+90 438" ],
            [ "Hatay", "+90 326" ],
            [ "Icel (Mersin)", "+90 324" ],
            [ "Igdir", "+90 476" ],
            [ "Isparta", "+90 246" ],
            [ "Istanbul", "+90 212" ],
            [ "Istanbul Asya (Asia side)", "+90 216" ],
            [ "Istanbul Avrupa (Europe side)", "+90 212" ],
            [ "Izmir", "+90 232" ],
            [ "Izmit", "+90 262" ],
            [ "Kahramanmaras", "+90 344" ],
            [ "Karaman", "+90 338" ],
            [ "Kars", "+90 474" ],
            [ "Kastamonu", "+90 366" ],
            [ "Kayseri", "+90 352" ],
            [ "Kirikkale", "+90 318" ],
            [ "Kirklareli", "+90 288" ],
            [ "Kirsehir", "+90 386" ],
            [ "Kocaeli", "+90 262" ],
            [ "Konya", "+90 332" ],
            [ "Kutahya", "+90 274" ],
            [ "Malatya", "+90 422" ],
            [ "Manisa", "+90 236" ],
            [ "Mardin", "+90 482" ],
            [ "Mugla", "+90 252" ],
            [ "Mus", "+90 436" ],
            [ "Nigde", "+90 388" ],
            [ "Ordu", "+90 452" ],
            [ "Rize", "+90 464" ],
            [ "Sakarya", "+90 264" ],
            [ "Samsun", "+90 362" ],
            [ "Sanliurfa", "+90 414" ],
            [ "Siirt", "+90 484" ],
            [ "Sirnak", "+90 486" ],
            [ "Sivas", "+90 346" ],
            [ "Tokat", "+90 356" ],
            [ "Trabzon", "+90 462" ],
            [ "Tunceli", "+90 428" ],
            [ "Van", "+90 432" ],
            [ "Yalova", "+90 226" ],
            [ "Yozgat", "+90 354" ],
            [ "Zonguldak", "+90 372" ]
        ],
        "Turkmenistan": [
            [ "Ashgabat", "+993 12" ],
            [ "Dashhowuz", "+993 322" ],
            [ "Turkmenbashi", "+993 378" ]
        ],
        "Uganda": [
            [ "Entebbe", "+256 42" ],
            [ "Kampala", "+256 41" ]
        ],
        "Ukraine": [
            [ "Cherkassy", "+380 47" ],
            [ "Chernigov", "+380 46" ],
            [ "Chernivtsi", "+380 3722" ],
            [ "Dnepropetrovsk", "+380 562" ],
            [ "Dniprodzerzhynsk", "+380 56" ],
            [ "Donetsk", "+380 62" ],
            [ "Ivano Frankivsk", "+380 34" ],
            [ "Kharkov", "+380 572" ],
            [ "Kherson", "+380 55" ],
            [ "Khmelnitskiy", "+380 38" ],
            [ "Kiev", "+380 44" ],
            [ "Kirovograd", "+380 52" ],
            [ "Kryvyi Rih", "+380 564" ],
            [ "Lugansk", "+380 642" ],
            [ "Lviv", "+380 322" ],
            [ "Nikolaev", "+380 51" ],
            [ "Odessa", "+380 432" ],
            [ "Poltava", "+380 53" ],
            [ "Rivne", "+380 36" ],
            [ "Sevastopol", "+380 69" ],
            [ "Simferopol", "+380 652" ],
            [ "Sumy", "+380 54" ],
            [ "Ternopil", "+380 3522" ],
            [ "Uman", "+380 4744" ],
            [ "Uzhgorod", "+380 31" ],
            [ "Vinnitsa", "+380 432" ],
            [ "Zaporozhye", "+380 61" ]
        ],
        "United Arab Emirates": [
            [ "Abu Dhabi", "+971 2" ],
            [ "Ajman", "+971 6" ],
            [ "Dubai", "+971 4" ],
            [ "Sharjah", "+971 6" ]
        ],
        "United Kingdom": [
            [ "Aberdeen", "+44 1224" ],
            [ "Belfast City", "+44 28" ],
            [ "Birmingham", "+44 121" ],
            [ "Blackburn", "+44 1254" ],
            [ "Blackpool", "+44 1253" ],
            [ "Bolton", "+44 1204" ],
            [ "Bournemouth", "+44 1202" ],
            [ "Bradford", "+44 1274" ],
            [ "Brighton", "+44 1273" ],
            [ "Bristol", "+44 117" ],
            [ "Cambridge", "+44 1223" ],
            [ "Cardiff", "+44 29" ],
            [ "Carlisle", "+44 859" ],
            [ "Chelsea", "+44 205" ],
            [ "Chester", "+44 563" ],
            [ "Colchester", "+44 1206" ],
            [ "Coventry", "+44 24" ],
            [ "Crawley", "+44 1293" ],
            [ "Derby", "+44 1332" ],
            [ "Dover", "+44 302" ],
            [ "Dudley", "+44 1384" ],
            [ "Eastbourne", "+44 1323" ],
            [ "Edinburgh", "+44 131" ],
            [ "Glasgow", "+44 141" ],
            [ "Gloucester", "+44 1452" ],
            [ "Gosport", "+44 251" ],
            [ "Greenwich", "+44 20" ],
            [ "Huddersfield", "+44 1484" ],
            [ "Ipswich", "+44 1473" ],
            [ "Kingston upon Hull", "+44 1482" ],
            [ "Lancaster", "+44 913" ],
            [ "Leeds", "+44 113" ],
            [ "Leicester", "+44 116" ],
            [ "Lincoln", "+44 217" ],
            [ "Liverpool", "+44 151" ],
            [ "London", "+44 20" ],
            [ "Luton", "+44 1582" ],
            [ "Manchester", "+44 161" ],
            [ "Middlesbrough", "+44 1642" ],
            [ "Milton Keynes", "+44 1908" ],
            [ "Newcastle upon Tyne", "+44 191" ],
            [ "Northampton", "+44 1604" ],
            [ "Norwich", "+44 1603" ],
            [ "Nottingham", "+44 115" ],
            [ "Oldham", "+44 161" ],
            [ "Oxford", "+44 1865" ],
            [ "Peterborough", "+44 1733" ],
            [ "Plymouth", "+44 1752" ],
            [ "Poole", "+44 1202" ],
            [ "Portland", "+44 207" ],
            [ "Portsmouth", "+44 23" ],
            [ "Preston", "+44 1772" ],
            [ "Reading", "+44 118" ],
            [ "Rotherham", "+44 1709" ],
            [ "Sheffield", "+44 114" ],
            [ "Slough", "+44 1753" ],
            [ "Southampton", "+44 23" ],
            [ "St. Helens", "+44 1744" ],
            [ "Stafford", "+44 620" ],
            [ "Stockport", "+44 161" ],
            [ "Sunderland", "+44 191" ],
            [ "Sutton Coldfield", "+44 121" ],
            [ "Swansea", "+44 1792" ],
            [ "Swindon", "+44 1793" ],
            [ "Telford", "+44 1952" ],
            [ "Walsall", "+44 1922" ],
            [ "Warwick", "+44 229" ],
            [ "Watford", "+44 1923" ],
            [ "West Bromwich", "+44 121" ],
            [ "Westminster", "+44 720" ],
            [ "Weymouth", "+44 781" ],
            [ "Winchester", "+44 913" ],
            [ "Windsor", "+44 757" ],
            [ "Wolverhampton", "+44 1902" ],
            [ "Worcester", "+44 774" ],
            [ "Worthing", "+44 605" ],
            [ "York", "+44 1904" ]
        ],
        "United Stated": [
            [ "Abilene", "+1 325" ],
            [ "Aguadilla", "+1 939" ],
            [ "Akron", "+1 330" ],
            [ "Alabaster", "+1 205" ],
            [ "Alameda", "+1 510" ],
            [ "Alamogordo", "+1 575" ],
            [ "Albany", "+1 518" ],
            [ "Albuquerque", "+1 505" ],
            [ "Alexandria", "+1 703" ],
            [ "Algonquin", "+1 847" ],
            [ "Alhambra", "+1 626" ],
            [ "Allen", "+1 972" ],
            [ "Allentown", "+1 484" ],
            [ "Alpharetta", "+1 404" ],
            [ "Alton", "+1 730" ],
            [ "Amarillo", "+1 806" ],
            [ "American Fork", "+1 801" ],
            [ "Americus", "+1 229" ],
            [ "Ames", "+1 515" ],
            [ "Anaheim", "+1 714" ],
            [ "Anchorage", "+1 907" ],
            [ "Ankeny", "+1 515" ],
            [ "Ann Arbor", "+1 734" ],
            [ "Annandale", "+1 703" ],
            [ "Annapolis", "+1 410" ],
            [ "Anniston", "+1 256" ],
            [ "Anoka", "+1 763" ],
            [ "Ansonia", "+1 475" ],
            [ "Antioch", "+1 925" ],
            [ "Apex", "+1 919" ],
            [ "Apple Valley", "+1 760" ],
            [ "Appleton", "+1 920" ],
            [ "Arcadia", "+1 626" ],
            [ "Ardmore", "+1 580" ],
            [ "Arecibo", "+1 939" ],
            [ "Arlington", "+1 817" ],
            [ "Arlington Heights", "+1 847" ],
            [ "Arvada", "+1 720" ],
            [ "Asheville", "+1 828" ],
            [ "Ashland", "+1 606" ],
            [ "Aspen", "+1 970" ],
            [ "Athens", "+1 256" ],
            [ "Atlanta", "+1 404" ],
            [ "Atlantic City", "+1 609" ],
            [ "Attleboro", "+1 774" ],
            [ "Auburn", "+1 334" ],
            [ "Augusta", "+1 207" ],
            [ "Aurora", "+1 630" ],
            [ "Austin", "+1 512" ],
            [ "Bakersfield", "+1 661" ],
            [ "Baldwin Park", "+1 626" ],
            [ "Baltimore", "+1 410" ],
            [ "Bangor", "+1 207" ],
            [ "Bartlett", "+1 847" ],
            [ "Batavia", "+1 630" ],
            [ "Baton Rouge", "+1 225" ],
            [ "Battle Creek", "+1 269" ],
            [ "Bay City", "+1 989" ],
            [ "Bayamón", "+1 939" ],
            [ "Bayonne", "+1 551" ],
            [ "Baytown", "+1 832" ],
            [ "Beaumont", "+1 409" ],
            [ "Beaverton", "+1 503" ],
            [ "Bedford", "+1 817" ],
            [ "Belleville", "+1 613" ],
            [ "Bellflower", "+1 562" ],
            [ "Belmont", "+1 857" ],
            [ "Belton", "+1 816" ],
            [ "Bend", "+1 541" ],
            [ "Benton", "+1 501" ],
            [ "Bentonville", "+1 479" ],
            [ "Berkeley", "+1 510" ],
            [ "Berwyn", "+1 708" ],
            [ "Bessemer", "+1 205" ],
            [ "Bethany", "+1 405" ],
            [ "Bethel Park", "+1 878" ],
            [ "Bethesda", "+1 301" ],
            [ "Bethlehem", "+1 835" ],
            [ "Beverly", "+1 978" ],
            [ "Biddeford", "+1 207" ],
            [ "Billings", "+1 406" ],
            [ "Biloxi", "+1 228" ],
            [ "Bismarck", "+1 701" ],
            [ "Blacksburg", "+1 540" ],
            [ "Blaine", "+1 763" ],
            [ "Bloomfield", "+1 973" ],
            [ "Bloomington", "+1 812" ],
            [ "Blue Springs", "+1 816" ],
            [ "Boca Raton", "+1 561" ],
            [ "Boise", "+1 208" ],
            [ "Bonita Springs", "+1 239" ],
            [ "Bossier City", "+1 318" ],
            [ "Boston", "+1 617" ],
            [ "Boulder", "+1 303" ],
            [ "Bountiful", "+1 801" ],
            [ "Bowie", "+1 301" ],
            [ "Bowling Green", "+1 270" ],
            [ "Boynton Beach", "+1 561" ],
            [ "Bozeman", "+1 406" ],
            [ "Bradenton", "+1 941" ],
            [ "Braintree", "+1 781" ],
            [ "Brandon", "+1 204" ],
            [ "Bridgeport", "+1 203" ],
            [ "Brighton", "+1 303" ],
            [ "Bristol", "+1 860" ],
            [ "Brockton", "+1 508" ],
            [ "Broken Arrow", "+1 918" ],
            [ "Brookline", "+1 617" ],
            [ "Broomfield", "+1 720" ],
            [ "Brownsville", "+1 956" ],
            [ "Brunswick", "+1 207" ],
            [ "Bryan", "+1 979" ],
            [ "Buena Park", "+1 657" ],
            [ "Bullhead City", "+1 928" ],
            [ "Burbank", "+1 818" ],
            [ "Burke", "+1 703" ],
            [ "Burleson", "+1 817" ],
            [ "Burlington", "+1 905" ],
            [ "Burnsville", "+1 952" ],
            [ "Cabot", "+1 501" ],
            [ "Caguas", "+1 939" ],
            [ "Caldwell", "+1 208" ],
            [ "Caledonia", "+1 414" ],
            [ "Calumet City", "+1 708" ],
            [ "Camarillo", "+1 805" ],
            [ "Cambridge", "+1 519" ],
            [ "Camden", "+1 609" ],
            [ "Canon City", "+1 719" ],
            [ "Canton", "+1 330" ],
            [ "Cape Coral", "+1 239" ],
            [ "Cape Girardeau", "+1 573" ],
            [ "Carlisle", "+1 717" ],
            [ "Carlsbad", "+1 760" ],
            [ "Carmel", "+1 317" ],
            [ "Carolina", "+1 939" ],
            [ "Carrollton", "+1 770" ],
            [ "Carson", "+1 310" ],
            [ "Carson City", "+1 775" ],
            [ "Cartersville", "+1 770" ],
            [ "Cary", "+1 919" ],
            [ "Casa Grande", "+1 520" ],
            [ "Casper", "+1 307" ],
            [ "Castle Rock", "+1 303" ],
            [ "Castro Valley", "+1 510" ],
            [ "Cathedral City", "+1 760" ],
            [ "Catonsville", "+1 443" ],
            [ "Cedar City", "+1 435" ],
            [ "Cedar Hill", "+1 972" ],
            [ "Cedar Park", "+1 512" ],
            [ "Cedar Rapids", "+1 319" ],
            [ "Central Point", "+1 541" ],
            [ "Centreville", "+1 703" ],
            [ "Cerritos", "+1 562" ],
            [ "Chalmette", "+1 504" ],
            [ "Chambersburg", "+1 717" ],
            [ "Champaign", "+1 447" ],
            [ "Champlin", "+1 763" ],
            [ "Chandler", "+1 480" ],
            [ "Chanhassen", "+1 952" ],
            [ "Channelview", "+1 832" ],
            [ "Chantilly", "+1 703" ],
            [ "Chapel Hill", "+1 919" ],
            [ "Charleston", "+1 843" ],
            [ "Charlotte", "+1 704" ],
            [ "Charlottesville", "+1 434" ],
            [ "Chaska", "+1 952" ],
            [ "Chattanooga", "+1 423" ],
            [ "Chelsea", "+1 857" ],
            [ "Chesapeake", "+1 757" ],
            [ "Chester", "+1 563" ],
            [ "Chesterfield", "+1 636" ],
            [ "Cheyenne", "+1 307" ],
            [ "Chicago", "+1 312" ],
            [ "Chicago Heights", "+1 708" ],
            [ "Chico", "+1 916" ],
            [ "Chicopee", "+1 413" ],
            [ "Chino Hills", "+1 909" ],
            [ "Chula Vista", "+1 619" ],
            [ "Cicero", "+1 708" ],
            [ "Cincinnati", "+1 513" ],
            [ "Citrus Heights", "+1 916" ],
            [ "Claremore", "+1 918" ],
            [ "Clarksville", "+1 931" ],
            [ "Clearfield", "+1 801" ],
            [ "Clearwater", "+1 727" ],
            [ "Cleveland", "+1 216" ],
            [ "Clifton", "+1 862" ],
            [ "Clinton", "+1 270" ],
            [ "Clovis", "+1 559" ],
            [ "College Station", "+1 979" ],
            [ "Collierville", "+1 901" ],
            [ "Colorado Springs", "+1 719" ],
            [ "Colton", "+1 909" ],
            [ "Columbia", "+1 803" ],
            [ "Columbus", "+1 614" ],
            [ "Commerce City", "+1 303" ],
            [ "Compton", "+1 310" ],
            [ "Concord", "+1 603" ],
            [ "Conroe", "+1 936" ],
            [ "Conway", "+1 501" ],
            [ "Cookeville", "+1 931" ],
            [ "Coos Bay", "+1 541" ],
            [ "Corona", "+1 909" ],
            [ "Corpus Christi", "+1 361" ],
            [ "Costa Mesa", "+1 714" ],
            [ "Council Bluffs", "+1 712" ],
            [ "Covington", "+1 859" ],
            [ "Cranston", "+1 401" ],
            [ "Crown Point", "+1 219" ],
            [ "Cupertino", "+1 408" ],
            [ "Dallas", "+1 214" ],
            [ "Dalton", "+1 762" ],
            [ "Daly City", "+1 650" ],
            [ "Danbury", "+1 475" ],
            [ "Danvers", "+1 978" ],
            [ "Danville", "+1 434" ],
            [ "Darien", "+1 475" ],
            [ "Davenport", "+1 563" ],
            [ "Davis", "+1 530" ],
            [ "Dayton", "+1 937" ],
            [ "Daytona Beach", "+1 386" ],
            [ "De Pere", "+1 920" ],
            [ "Dearborn", "+1 313" ],
            [ "Decatur", "+1 256" ],
            [ "Dedham", "+1 781" ],
            [ "Deer Park", "+1 832" ],
            [ "Deerfield Beach", "+1 954" ],
            [ "Del Rio", "+1 830" ],
            [ "Delano", "+1 661" ],
            [ "Delray Beach", "+1 561" ],
            [ "Deltona", "+1 407" ],
            [ "Deming", "+1 575" ],
            [ "Denton", "+1 817" ],
            [ "Denver", "+1 303" ],
            [ "Derry", "+1 603" ],
            [ "Des Moines", "+1 515" ],
            [ "Des Plaines", "+1 224" ],
            [ "DeSoto", "+1 214" ],
            [ "Detroit", "+1 313" ],
            [ "Diamond Bar", "+1 909" ],
            [ "Dickinson", "+1 701" ],
            [ "Dodge City", "+1 620" ],
            [ "Dothan", "+1 334" ],
            [ "Dover", "+1 302" ],
            [ "Dover", "+1 302" ],
            [ "Downers Grove", "+1 630" ],
            [ "Downey", "+1 310" ],
            [ "Draper", "+1 385" ],
            [ "Dublin", "+1 614" ],
            [ "Dubuque", "+1 563" ],
            [ "Duluth", "+1 218" ],
            [ "Duncan", "+1 928" ],
            [ "Duncanville", "+1 972" ],
            [ "Dundalk", "+1 443" ],
            [ "Durango", "+1 970" ],
            [ "Durham", "+1 919" ],
            [ "Dyersburg", "+1 731" ],
            [ "East Brunswick", "+1 848" ],
            [ "East Chicago", "+1 219" ],
            [ "East Haven", "+1 475" ],
            [ "East Orange", "+1 862" ],
            [ "Easton", "+1 484" ],
            [ "Eau Claire", "+1 715" ],
            [ "Eden Prairie", "+1 952" ],
            [ "Edinburg", "+1 956" ],
            [ "Edison", "+1 848" ],
            [ "El Cajon", "+1 619" ],
            [ "El Monte", "+1 626" ],
            [ "El Paso", "+1 915" ],
            [ "El Reno", "+1 405" ],
            [ "Elgin", "+1 630" ],
            [ "Elizabeth", "+1 908" ],
            [ "Elk Grove", "+1 916" ],
            [ "Elkhart", "+1 574" ],
            [ "Ellicott City", "+1 443" ],
            [ "Elmhurst", "+1 630" ],
            [ "Elyria", "+1 440" ],
            [ "Emporia", "+1 620" ],
            [ "Encinitas", "+1 760" ],
            [ "Englewood", "+1 720" ],
            [ "Enid", "+1 580" ],
            [ "Enterprise", "+1 334" ],
            [ "Erie", "+1 814" ],
            [ "Escondido", "+1 760" ],
            [ "Essex", "+1 443" ],
            [ "Euclid", "+1 216" ],
            [ "Eugene", "+1 541" ],
            [ "Euless", "+1 817" ],
            [ "Evanston", "+1 847" ],
            [ "Evansville", "+1 812" ],
            [ "Everett", "+1 857" ],
            [ "Fair Lawn", "+1 551" ],
            [ "Fairbanks", "+1 907" ],
            [ "Fairfax", "+1 703" ],
            [ "Fairfield", "+1 707" ],
            [ "Fairmont", "+1 681" ],
            [ "Fall River", "+1 508" ],
            [ "Fargo", "+1 701" ],
            [ "Faribault", "+1 507" ],
            [ "Farmington", "+1 505" ],
            [ "Fayetteville", "+1 479" ],
            [ "Findlay", "+1 567" ],
            [ "Fishers", "+1 317" ],
            [ "Fitchburg", "+1 978" ],
            [ "Flagstaff", "+1 928" ],
            [ "Flint", "+1 810" ],
            [ "Florissant", "+1 314" ],
            [ "Flower Mound", "+1 972" ],
            [ "Folsom", "+1 916" ],
            [ "Fond du Lac", "+1 920" ],
            [ "Fontana", "+1 909" ],
            [ "Forest Park", "+1 404" ],
            [ "Fort Collins", "+1 970" ],
            [ "Fort Dodge", "+1 515" ],
            [ "Fort Lauderdale", "+1 754" ],
            [ "Fort Lee", "+1 201" ],
            [ "Fort Myers", "+1 239" ],
            [ "Fort Smith", "+1 867" ],
            [ "Fort Wayne", "+1 260" ],
            [ "Fort Worth", "+1 682" ],
            [ "Fountain Valley", "+1 714" ],
            [ "Framingham", "+1 508" ],
            [ "Frankfort", "+1 502" ],
            [ "Franklin", "+1 414" ],
            [ "Frederick", "+1 301" ],
            [ "Fredericksburg", "+1 540" ],
            [ "Fremont", "+1 0" ],
            [ "Fresno", "+1 559" ],
            [ "Friendswood", "+1 832" ],
            [ "Frisco", "+1 972" ],
            [ "Fullerton", "+1 714" ],
            [ "Gainesville", "+1 770" ],
            [ "Gaithersburg", "+1 240" ],
            [ "Gallatin", "+1 615" ],
            [ "Gallup", "+1 505" ],
            [ "Galveston", "+1 409" ],
            [ "Garden City", "+1 515" ],
            [ "Garden Grove", "+1 714" ],
            [ "Gardena", "+1 310" ],
            [ "Garland", "+1 214" ],
            [ "Garner", "+1 919" ],
            [ "Gary", "+1 219" ],
            [ "Gastonia", "+1 980" ],
            [ "Georgetown", "+1 502" ],
            [ "Germantown", "+1 301" ],
            [ "Gilbert", "+1 480" ],
            [ "Gillette", "+1 307" ],
            [ "Glen Burnie", "+1 443" ],
            [ "Glen Ellyn", "+1 630" ],
            [ "Glendale", "+1 818" ],
            [ "Glenview", "+1 847" ],
            [ "Gloucester", "+1 978" ],
            [ "Golden", "+1 303" ],
            [ "Goldsboro", "+1 919" ],
            [ "Goodlettsville", "+1 615" ],
            [ "Goshen", "+1 574" ],
            [ "Grand Forks", "+1 701" ],
            [ "Grand Junction", "+1 970" ],
            [ "Grand Prairie", "+1 214" ],
            [ "Grand Rapids", "+1 616" ],
            [ "Grants Pass", "+1 541" ],
            [ "Grapevine", "+1 817" ],
            [ "Great Falls", "+1 406" ],
            [ "Greeley", "+1 970" ],
            [ "Green Bay", "+1 920" ],
            [ "Greeneville", "+1 423" ],
            [ "Greensboro", "+1 336" ],
            [ "Greensburg", "+1 412" ],
            [ "Greenville", "+1 662" ],
            [ "Greenwood", "+1 662" ],
            [ "Gresham", "+1 971" ],
            [ "Griffin", "+1 770" ],
            [ "Grove City", "+1 614" ],
            [ "Guaynabo", "+1 939" ],
            [ "Gulfport", "+1 228" ],
            [ "Hacienda Heights", "+1 626" ],
            [ "Hackensack", "+1 551" ],
            [ "Hagerstown", "+1 301" ],
            [ "Haltom City", "+1 817" ],
            [ "Hamilton", "+1 905" ],
            [ "Hammond", "+1 985" ],
            [ "Hampton", "+1 757" ],
            [ "Hanford", "+1 559" ],
            [ "Hanover", "+1 204" ],
            [ "Harlingen", "+1 956" ],
            [ "Harrisburg", "+1 717" ],
            [ "Harrison", "+1 989" ],
            [ "Harrisonburg", "+1 540" ],
            [ "Hartford", "+1 860" ],
            [ "Harvey", "+1 708" ],
            [ "Hastings", "+1 651" ],
            [ "Hattiesburg", "+1 769" ],
            [ "Havelock", "+1 252" ],
            [ "Haverhill", "+1 978" ],
            [ "Hawthorne", "+1 424" ],
            [ "Hays", "+1 785" ],
            [ "Hayward", "+1 510" ],
            [ "Helena", "+1 406" ],
            [ "Hemet", "+1 909" ],
            [ "Henderson", "+1 270" ],
            [ "Hendersonville", "+1 615" ],
            [ "Hermitage", "+1 870" ],
            [ "Herndon", "+1 703" ],
            [ "Hesperia", "+1 442" ],
            [ "Hialeah", "+1 305" ],
            [ "Hickory", "+1 828" ],
            [ "High Point", "+1 336" ],
            [ "Highland", "+1 909" ],
            [ "Highland Park", "+1 847" ],
            [ "Hillsboro", "+1 606" ],
            [ "Hilo", "+1 808" ],
            [ "Hinesville", "+1 912" ],
            [ "Hobart", "+1 219" ],
            [ "Hoboken", "+1 201" ],
            [ "Holland", "+1 616" ],
            [ "Holly Springs", "+1 919" ],
            [ "Hollywood", "+1 323" ],
            [ "Holyoke", "+1 413" ],
            [ "Homestead", "+1 305" ],
            [ "Honolulu", "+1 808" ],
            [ "Hopewell", "+1 804" ],
            [ "Hot Springs", "+1 501" ],
            [ "Houma", "+1 985" ],
            [ "Houston", "+1 281" ],
            [ "Huntersville", "+1 704" ],
            [ "Huntington", "+1 681" ],
            [ "Huntington Beach", "+1 714" ],
            [ "Huntington Park", "+1 323" ],
            [ "Huntsville", "+1 256" ],
            [ "Hurst", "+1 817" ],
            [ "Idaho Falls", "+1 208" ],
            [ "Independence", "+1 816" ],
            [ "Indianapolis", "+1 317" ],
            [ "Indio", "+1 760" ],
            [ "Inglewood", "+1 323" ],
            [ "Iowa City", "+1 515" ],
            [ "Irvine", "+1 949" ],
            [ "Irving", "+1 972" ],
            [ "Irvington", "+1 862" ],
            [ "Jackson", "+1 601" ],
            [ "Jacksonville", "+1 904" ],
            [ "Janesville", "+1 608" ],
            [ "Jefferson City", "+1 573" ],
            [ "Jeffersonville", "+1 478" ],
            [ "Jersey City", "+1 551" ],
            [ "Johnson City", "+1 423" ],
            [ "Joliet", "+1 815" ],
            [ "Jonesboro", "+1 870" ],
            [ "Joplin", "+1 417" ],
            [ "Juana Diaz", "+1 939" ],
            [ "Junction City", "+1 785" ],
            [ "Juneau", "+1 907" ],
            [ "Jupiter", "+1 561" ],
            [ "Kailua", "+1 808" ],
            [ "Kannapolis", "+1 704" ],
            [ "Kansas City", "+1 660" ],
            [ "Kaukauna", "+1 920" ],
            [ "Kaysville", "+1 801" ],
            [ "Kearney", "+1 308" ],
            [ "Kearny", "+1 551" ],
            [ "Keene", "+1 603" ],
            [ "Keller", "+1 817" ],
            [ "Kenner", "+1 504" ],
            [ "Kenosha", "+1 262" ],
            [ "Kernersville", "+1 336" ],
            [ "Kihei", "+1 808" ],
            [ "Kingsport", "+1 423" ],
            [ "Kinston", "+1 252" ],
            [ "Kirksville", "+1 660" ],
            [ "Kissimmee", "+1 321" ],
            [ "Knoxville", "+1 865" ],
            [ "Kokomo", "+1 765" ],
            [ "La Crosse", "+1 608" ],
            [ "La Habra", "+1 562" ],
            [ "La Mesa", "+1 619" ],
            [ "La Porte", "+1 832" ],
            [ "Laconia", "+1 603" ],
            [ "Lafayette", "+1 337" ],
            [ "Laguna Niguel", "+1 949" ],
            [ "Lake Charles", "+1 337" ],
            [ "Lake Havasu City", "+1 928" ],
            [ "Lakeland", "+1 863" ],
            [ "Lakewood", "+1 303" ],
            [ "Lancaster", "+1 661" ],
            [ "Lansdale", "+1 267" ],
            [ "Lansing", "+1 517" ],
            [ "LaPlace", "+1 985" ],
            [ "Laramie", "+1 307" ],
            [ "Laredo", "+1 956" ],
            [ "Largo", "+1 727" ],
            [ "Las Cruces", "+1 575" ],
            [ "Laurel", "+1 601" ],
            [ "Lawrence", "+1 785" ],
            [ "Lawton", "+1 580" ],
            [ "Layton", "+1 385" ],
            [ "League City", "+1 832" ],
            [ "Leavenworth", "+1 913" ],
            [ "Lebanon", "+1 270" ],
            [ "Leesburg", "+1 703" ],
            [ "Lehi", "+1 801" ],
            [ "Lehigh Acres", "+1 239" ],
            [ "Leominster", "+1 978" ],
            [ "Levittown", "+1 267" ],
            [ "Lewiston", "+1 207" ],
            [ "Lewisville", "+1 972" ],
            [ "Lexington", "+1 859" ],
            [ "Liberal", "+1 620" ],
            [ "Liberty", "+1 816" ],
            [ "Lima", "+1 567" ],
            [ "Lincoln", "+1 402" ],
            [ "Lincoln Park", "+1 313" ],
            [ "Linden", "+1 908" ],
            [ "Little Rock", "+1 501" ],
            [ "Littleton", "+1 720" ],
            [ "Livermore", "+1 925" ],
            [ "Livonia", "+1 734" ],
            [ "Lodi", "+1 209" ],
            [ "Logan", "+1 435" ],
            [ "Lombard", "+1 630" ],
            [ "Long Branch", "+1 908" ],
            [ "Longmont", "+1 720" ],
            [ "Longview", "+1 903" ],
            [ "Lorain", "+1 440" ],
            [ "Los Angeles", "+1 213" ],
            [ "Louisville", "+1 502" ],
            [ "Loveland", "+1 970" ],
            [ "Lowell", "+1 978" ],
            [ "Lubbock", "+1 806" ],
            [ "Lufkin", "+1 936" ],
            [ "Lumberton", "+1 910" ],
            [ "Lynchburg", "+1 434" ],
            [ "Lynn", "+1 781" ],
            [ "Lynwood", "+1 310" ],
            [ "Macon", "+1 478" ],
            [ "Madera", "+1 559" ],
            [ "Madison", "+1 608" ],
            [ "Madison Heights", "+1 947" ],
            [ "Magna", "+1 801" ],
            [ "Malden", "+1 617" ],
            [ "Manassas", "+1 703" ],
            [ "Manchester", "+1 603" ],
            [ "Mandan", "+1 701" ],
            [ "Manhattan", "+1 785" ],
            [ "Manitowoc", "+1 920" ],
            [ "Mankato", "+1 507" ],
            [ "Mansfield", "+1 817" ],
            [ "Mansfield", "+1 567" ],
            [ "Manteca", "+1 209" ],
            [ "Maricopa", "+1 520" ],
            [ "Marietta", "+1 770" ],
            [ "Marion", "+1 765" ],
            [ "Mason", "+1 513" ],
            [ "Mason City", "+1 641" ],
            [ "Massillon", "+1 330" ],
            [ "Matthews", "+1 980" ],
            [ "Maumelle", "+1 501" ],
            [ "Mayaguez", "+1 939" ],
            [ "McAllen", "+1 956" ],
            [ "McKinney", "+1 972" ],
            [ "McMinnville", "+1 971" ],
            [ "Mechanicsville", "+1 804" ],
            [ "Medford", "+1 781" ],
            [ "Melbourne", "+1 321" ],
            [ "Melrose", "+1 781" ],
            [ "Memphis", "+1 901" ],
            [ "Menomonee Falls", "+1 262" ],
            [ "Mentor", "+1 440" ],
            [ "Merced", "+1 209" ],
            [ "Meriden", "+1 475" ],
            [ "Meridian", "+1 601" ],
            [ "Merrillville", "+1 219" ],
            [ "Mesa", "+1 480" ],
            [ "Mesquite", "+1 214" ],
            [ "Metairie", "+1 504" ],
            [ "Miami", "+1 305" ],
            [ "Miami Beach", "+1 786" ],
            [ "Michigan City", "+1 219" ],
            [ "Middleton", "+1 608" ],
            [ "Middletown", "+1 860" ],
            [ "Midland", "+1 432" ],
            [ "Midvale", "+1 801" ],
            [ "Milford", "+1 475" ],
            [ "Milledgeville", "+1 478" ],
            [ "Milton", "+1 857" ],
            [ "Milwaukee", "+1 414" ],
            [ "Minneapolis", "+1 612" ],
            [ "Minnetonka", "+1 952" ],
            [ "Minot", "+1 701" ],
            [ "Mission", "+1 956" ],
            [ "Mission Viejo", "+1 949" ],
            [ "Missoula", "+1 406" ],
            [ "Missouri City", "+1 832" ],
            [ "Mobile", "+1 334" ],
            [ "Modesto", "+1 209" ],
            [ "Monroe", "+1 318" ],
            [ "Monroeville", "+1 878" ],
            [ "Montebello", "+1 323" ],
            [ "Monterey Park", "+1 626" ],
            [ "Montgomery Village", "+1 301" ],
            [ "Montpelier", "+1 802" ],
            [ "Montrose", "+1 970" ],
            [ "Mooresville", "+1 704" ],
            [ "Moorhead", "+1 218" ],
            [ "Moreno Valley", "+1 951" ],
            [ "Morgantown", "+1 681" ],
            [ "Morristown", "+1 423" ],
            [ "Moscow", "+1 620" ],
            [ "Mount Juliet", "+1 615" ],
            [ "Mount Pleasant", "+1 989" ],
            [ "Mount Vernon", "+1 703" ],
            [ "Mountain View", "+1 650" ],
            [ "Mountain View", "+1 650" ],
            [ "Mundelein", "+1 847" ],
            [ "Murfreesboro", "+1 615" ],
            [ "Murrieta", "+1 951" ],
            [ "Muscatine", "+1 563" ],
            [ "Muskego", "+1 262" ],
            [ "Mustang", "+1 405" ],
            [ "Nacogdoches", "+1 936" ],
            [ "Napa", "+1 707" ],
            [ "Naperville", "+1 630" ],
            [ "Naples", "+1 239" ],
            [ "Nashua", "+1 603" ],
            [ "Nashville", "+1 615" ],
            [ "Natchez", "+1 601" ],
            [ "National City", "+1 619" ],
            [ "Naugatuck", "+1 475" ],
            [ "Needham", "+1 781" ],
            [ "Neenah", "+1 920" ],
            [ "New Bedford", "+1 508" ],
            [ "New Bern", "+1 252" ],
            [ "New Braunfels", "+1 830" ],
            [ "New Britain", "+1 860" ],
            [ "New Brunswick", "+1 908" ],
            [ "New Castle", "+1 878" ],
            [ "New Haven", "+1 203" ],
            [ "New London", "+1 860" ],
            [ "New Orleans", "+1 504" ],
            [ "Newark", "+1 973" ],
            [ "Newberg", "+1 971" ],
            [ "Newington", "+1 703" ],
            [ "Newnan", "+1 770" ],
            [ "Newport", "+1 401" ],
            [ "Newport Beach", "+1 949" ],
            [ "Newport News", "+1 757" ],
            [ "Newton", "+1 316" ],
            [ "Nicholasville", "+1 859" ],
            [ "Nixa", "+1 417" ],
            [ "Noblesville", "+1 317" ],
            [ "Norfolk", "+1 905" ],
            [ "Norman", "+1 405" ],
            [ "North Bergen", "+1 201" ],
            [ "North Fort Myers", "+1 941" ],
            [ "North Haven", "+1 475" ],
            [ "North Port", "+1 941" ],
            [ "North Richland Hills", "+1 817" ],
            [ "North Royalton", "+1 440" ],
            [ "Northampton", "+1 413" ],
            [ "Northbrook", "+1 847" ],
            [ "Norwalk", "+1 562" ],
            [ "Norwich", "+1 860" ],
            [ "Norwood", "+1 781" ],
            [ "Novato", "+1 415" ],
            [ "Novi", "+1 947" ],
            [ "Oak Creek", "+1 414" ],
            [ "Oak Lawn", "+1 708" ],
            [ "Oak Park", "+1 947" ],
            [ "Oakland", "+1 510" ],
            [ "Oakton", "+1 703" ],
            [ "Ocala", "+1 352" ],
            [ "Ocean Springs", "+1 228" ],
            [ "Oceanside", "+1 760" ],
            [ "Odessa", "+1 432" ],
            [ "Ogden", "+1 801" ],
            [ "Oklahoma City", "+1 405" ],
            [ "Olathe", "+1 913" ],
            [ "Olney", "+1 301" ],
            [ "Olympia", "+1 360" ],
            [ "Omaha", "+1 402" ],
            [ "Ontario", "+1 909" ],
            [ "Opelousas", "+1 337" ],
            [ "Orange", "+1 714" ],
            [ "Orem", "+1 385" ],
            [ "Orland Park", "+1 708" ],
            [ "Orlando", "+1 407" ],
            [ "Oshkosh", "+1 920" ],
            [ "Oswego", "+1 331" ],
            [ "Overland Park", "+1 913" ],
            [ "Owasso", "+1 918" ],
            [ "Owatonna", "+1 507" ],
            [ "Owensboro", "+1 270" ],
            [ "Oxford", "+1 662" ],
            [ "Oxnard", "+1 805" ],
            [ "Ozark", "+1 417" ],
            [ "Paducah", "+1 270" ],
            [ "Palatine", "+1 224" ],
            [ "Palm Bay", "+1 321" ],
            [ "Palm Coast", "+1 386" ],
            [ "Palm Desert", "+1 760" ],
            [ "Palm Harbor", "+1 727" ],
            [ "Palmdale", "+1 661" ],
            [ "Palo Alto", "+1 650" ],
            [ "Park Ridge", "+1 847" ],
            [ "Parker", "+1 303" ],
            [ "Parkersburg", "+1 304" ],
            [ "Parkville", "+1 443" ],
            [ "Pasadena", "+1 281" ],
            [ "Pascagoula", "+1 228" ],
            [ "Passaic", "+1 973" ],
            [ "Paterson", "+1 973" ],
            [ "Pawtucket", "+1 401" ],
            [ "Payson", "+1 801" ],
            [ "Peabody", "+1 978" ],
            [ "Pearl City", "+1 808" ],
            [ "Pekin", "+1 309" ],
            [ "Pelham", "+1 229" ],
            [ "Pendleton", "+1 541" ],
            [ "Pensacola", "+1 0" ],
            [ "Peoria", "+1 309" ],
            [ "Perris", "+1 951" ],
            [ "Perry Hall", "+1 410" ],
            [ "Perth Amboy", "+1 908" ],
            [ "Petaluma", "+1 707" ],
            [ "Petersburg", "+1 804" ],
            [ "Pflugerville", "+1 512" ],
            [ "Pharr", "+1 956" ],
            [ "Phenix City", "+1 334" ],
            [ "Philadelphia", "+1 267" ],
            [ "Phoenix", "+1 602" ],
            [ "Phoenixville", "+1 610" ],
            [ "Pico Rivera", "+1 562" ],
            [ "Pierre", "+1 605" ],
            [ "Pikesville", "+1 443" ],
            [ "Pittsburg", "+1 925" ],
            [ "Pittsburgh", "+1 412" ],
            [ "Pittsfield", "+1 413" ],
            [ "Plainfield", "+1 317" ],
            [ "Plano", "+1 214" ],
            [ "Pleasant Grove", "+1 801" ],
            [ "Pleasanton", "+1 925" ],
            [ "Pocatello", "+1 208" ],
            [ "Pomona", "+1 752" ],
            [ "Pompano Beach", "+1 954" ],
            [ "Ponce", "+1 939" ],
            [ "Pontiac", "+1 947" ],
            [ "Port Arthur", "+1 409" ],
            [ "Port Huron", "+1 810" ],
            [ "Portage", "+1 219" ],
            [ "Porterville", "+1 559" ],
            [ "Portland", "+1 207" ],
            [ "Portsmouth", "+1 757" ],
            [ "Potomac", "+1 301" ],
            [ "Pottstown", "+1 610" ],
            [ "Prattville", "+1 334" ],
            [ "Prescott", "+1 520" ],
            [ "Prior Lake", "+1 952" ],
            [ "Providence", "+1 401" ],
            [ "Provo", "+1 801" ],
            [ "Pueblo", "+1 719" ],
            [ "Quincy", "+1 617" ],
            [ "Racine", "+1 262" ],
            [ "Raleigh", "+1 919" ],
            [ "Rancho Cordova", "+1 916" ],
            [ "Rancho Cucamonga", "+1 909" ],
            [ "Randallstown", "+1 410" ],
            [ "Randolph", "+1 781" ],
            [ "Rapid City", "+1 605" ],
            [ "Reading", "+1 610" ],
            [ "Red Wing", "+1 651" ],
            [ "Redding", "+1 530" ],
            [ "Redford", "+1 313" ],
            [ "Redlands", "+1 909" ],
            [ "Redmond", "+1 425" ],
            [ "Redondo Beach", "+1 424" ],
            [ "Redwood City", "+1 650" ],
            [ "Reston", "+1 703" ],
            [ "Revere", "+1 781" ],
            [ "Reynoldsburg", "+1 614" ],
            [ "Rialto", "+1 909" ],
            [ "Richardson", "+1 972" ],
            [ "Richmond", "+1 604" ],
            [ "Riverside", "+1 951" ],
            [ "Riverton", "+1 385" ],
            [ "Roanoke", "+1 276" ],
            [ "Rochester", "+1 585" ],
            [ "Rock Island", "+1 309" ],
            [ "Rock Springs", "+1 307" ],
            [ "Rockford", "+1 815" ],
            [ "Rocklin", "+1 916" ],
            [ "Rockville", "+1 301" ],
            [ "Rockwall", "+1 972" ],
            [ "Rocky Mount", "+1 252" ],
            [ "Rogers", "+1 479" ],
            [ "Rolla", "+1 620" ],
            [ "Rosemead", "+1 626" ],
            [ "Roseville", "+1 586" ],
            [ "Roswell", "+1 575" ],
            [ "Round Rock", "+1 512" ],
            [ "Rowland Heights", "+1 626" ],
            [ "Rowlett", "+1 972" ],
            [ "Roy", "+1 385" ],
            [ "Royal Oak", "+1 947" ],
            [ "Russellville", "+1 479" ],
            [ "Rutland", "+1 802" ],
            [ "Sacramento", "+1 916" ],
            [ "Saginaw", "+1 989" ],
            [ "Saint Charles", "+1 636" ],
            [ "Saint Michael", "+1 763" ],
            [ "Saint Paul", "+1 651" ],
            [ "Salem", "+1 503" ],
            [ "Salina", "+1 785" ],
            [ "Salinas", "+1 831" ],
            [ "Salisbury", "+1 980" ],
            [ "Salt Lake City", "+1 385" ],
            [ "San Angelo", "+1 325" ],
            [ "San Antonio", "+1 210" ],
            [ "San Bernardino", "+1 909" ],
            [ "San Clemente", "+1 949" ],
            [ "San Diego", "+1 619" ],
            [ "San Francisco", "+1 415" ],
            [ "San Jose", "+1 408" ],
            [ "San Juan", "+1 787" ],
            [ "San Juan", "+1 787" ],
            [ "San Leandro", "+1 510" ],
            [ "San Marcos", "+1 512" ],
            [ "San Mateo", "+1 650" ],
            [ "San Rafael", "+1 415" ],
            [ "Sand Springs", "+1 918" ],
            [ "Sandy", "+1 385" ],
            [ "Sanford", "+1 321" ],
            [ "Santa Ana", "+1 714" ],
            [ "Santa Barbara", "+1 805" ],
            [ "Santa Clara", "+1 408" ],
            [ "Santa Clarita", "+1 661" ],
            [ "Santa Cruz", "+1 831" ],
            [ "Santa Fe", "+1 505" ],
            [ "Santa Maria", "+1 805" ],
            [ "Santa Monica", "+1 310" ],
            [ "Santa Rosa", "+1 707" ],
            [ "Sarasota", "+1 941" ],
            [ "Saugus", "+1 781" ],
            [ "Savage", "+1 952" ],
            [ "Savannah", "+1 912" ],
            [ "Schaumburg", "+1 847" ],
            [ "Scottsdale", "+1 480" ],
            [ "Searcy", "+1 501" ],
            [ "Sedalia", "+1 303" ],
            [ "Severn", "+1 443" ],
            [ "Severna Park", "+1 443" ],
            [ "Sevierville", "+1 865" ],
            [ "Shakopee", "+1 952" ],
            [ "Sharon", "+1 724" ],
            [ "Shawnee", "+1 303" ],
            [ "Sheboygan", "+1 920" ],
            [ "Shelby", "+1 980" ],
            [ "Shelbyville", "+1 931" ],
            [ "Shelton", "+1 475" ],
            [ "Sheridan", "+1 307" ],
            [ "Sherwood", "+1 971" ],
            [ "Shreveport", "+1 318" ],
            [ "Sierra Vista", "+1 520" ],
            [ "Sikeston", "+1 573" ],
            [ "Silver Spring", "+1 301" ],
            [ "Simi Valley", "+1 805" ],
            [ "Sioux City", "+1 712" ],
            [ "Sioux Falls", "+1 605" ],
            [ "Sitka", "+1 907" ],
            [ "Skokie", "+1 847" ],
            [ "Slidell", "+1 985" ],
            [ "Smyrna", "+1 615" ],
            [ "Somerville", "+1 857" ],
            [ "South Bend", "+1 574" ],
            [ "South Gate", "+1 323" ],
            [ "South Jordan", "+1 385" ],
            [ "South San Francisco", "+1 650" ],
            [ "Southfield", "+1 810" ],
            [ "Spanish Fork", "+1 801" ],
            [ "Spring", "+1 832" ],
            [ "Spring Hill", "+1 352" ],
            [ "Springdale", "+1 479" ],
            [ "Springfield", "+1 417" ],
            [ "Springville", "+1 801" ],
            [ "Stamford", "+1 203" ],
            [ "Starkville", "+1 662" ],
            [ "State College", "+1 814" ],
            [ "Statesboro", "+1 912" ],
            [ "Statesville", "+1 704" ],
            [ "Staunton", "+1 540" ],
            [ "Sterling Heights", "+1 586" ],
            [ "Stillwater", "+1 405" ],
            [ "Stockton", "+1 209" ],
            [ "Stratford", "+1 475" ],
            [ "Strongsville", "+1 440" ],
            [ "Suffolk", "+1 757" ],
            [ "Sugar Land", "+1 713" ],
            [ "Sulphur", "+1 337" ],
            [ "Sun Prairie", "+1 608" ],
            [ "Sunnyvale", "+1 408" ],
            [ "Syracuse", "+1 315" ],
            [ "Tahlequah", "+1 918" ],
            [ "Tallahassee", "+1 850" ],
            [ "Tampa", "+1 813" ],
            [ "Taunton", "+1 508" ],
            [ "Teaneck", "+1 201" ],
            [ "Temecula", "+1 909" ],
            [ "Tempe", "+1 480" ],
            [ "Temple", "+1 254" ],
            [ "Terre Haute", "+1 812" ],
            [ "Texarkana", "+1 430" ],
            [ "Texas City", "+1 409" ],
            [ "The Colony", "+1 972" ],
            [ "The Woodlands", "+1 832" ],
            [ "Thomasville", "+1 336" ],
            [ "Thousand Oaks", "+1 805" ],
            [ "Tifton", "+1 229" ],
            [ "Tinley Park", "+1 708" ],
            [ "Titusville", "+1 321" ],
            [ "Toledo", "+1 419" ],
            [ "Toms River", "+1 908" ],
            [ "Tooele", "+1 435" ],
            [ "Topeka", "+1 785" ],
            [ "Topeka", "+1 785" ],
            [ "Torrance", "+1 310" ],
            [ "Torrington", "+1 860" ],
            [ "Towson", "+1 410" ],
            [ "Tracy", "+1 209" ],
            [ "Trenton", "+1 609" ],
            [ "Troy", "+1 947" ],
            [ "Trumbull", "+1 475" ],
            [ "Tucson", "+1 520" ],
            [ "Tulare", "+1 559" ],
            [ "Tullahoma", "+1 931" ],
            [ "Tulsa", "+1 918" ],
            [ "Tupelo", "+1 662" ],
            [ "Turlock", "+1 209" ],
            [ "Tuscaloosa", "+1 205" ],
            [ "Tustin", "+1 714" ],
            [ "Tyler", "+1 903" ],
            [ "Union", "+1 815" ],
            [ "Union City", "+1 551" ],
            [ "Upland", "+1 909" ],
            [ "Urbana", "+1 217" ],
            [ "Vacaville", "+1 707" ],
            [ "Valdosta", "+1 229" ],
            [ "Vallejo", "+1 707" ],
            [ "Valparaiso", "+1 219" ],
            [ "Van Buren", "+1 479" ],
            [ "Vicksburg", "+1 769" ],
            [ "Victoria", "+1 250" ],
            [ "Victorville", "+1 760" ],
            [ "Vineland", "+1 609" ],
            [ "Virginia Beach", "+1 757" ],
            [ "Visalia", "+1 559" ],
            [ "Vista", "+1 442" ],
            [ "Volcano", "+1 209" ],
            [ "Waco", "+1 254" ],
            [ "Wahiawa", "+1 808" ],
            [ "Wailuku", "+1 808" ],
            [ "Waimea", "+1 808" ],
            [ "Wake Forest", "+1 919" ],
            [ "Wakefield", "+1 781" ],
            [ "Walnut Creek", "+1 925" ],
            [ "Waltham", "+1 617" ],
            [ "Warner Robins", "+1 478" ],
            [ "Warren", "+1 586" ],
            [ "Warrensburg", "+1 660" ],
            [ "Warwick", "+1 401" ],
            [ "Washington", "+1 202" ],
            [ "Waterbury", "+1 203" ],
            [ "Waterford", "+1 947" ],
            [ "Waterloo", "+1 519" ],
            [ "Watertown", "+1 857" ],
            [ "Waterville", "+1 207" ],
            [ "Watsonville", "+1 831" ],
            [ "Waukesha", "+1 262" ],
            [ "Wauwatosa", "+1 414" ],
            [ "Wayne", "+1 862" ],
            [ "Waynesboro", "+1 931" ],
            [ "Wellesley", "+1 781" ],
            [ "Wentzville", "+1 636" ],
            [ "Weslaco", "+1 956" ],
            [ "West Bend", "+1 262" ],
            [ "West Chester", "+1 610" ],
            [ "West Covina", "+1 626" ],
            [ "West Fargo", "+1 701" ],
            [ "West Hartford", "+1 860" ],
            [ "West Haven", "+1 475" ],
            [ "West Jordan", "+1 385" ],
            [ "West Memphis", "+1 870" ],
            [ "West New York", "+1 201" ],
            [ "West Palm Beach", "+1 561" ],
            [ "West Warwick", "+1 401" ],
            [ "Westerly", "+1 401" ],
            [ "Westerville", "+1 614" ],
            [ "Westfield", "+1 413" ],
            [ "Westland", "+1 734" ],
            [ "Westminster", "+1 720" ],
            [ "Westport", "+1 475" ],
            [ "Weymouth", "+1 617" ],
            [ "Wheat Ridge", "+1 303" ],
            [ "Wheaton", "+1 630" ],
            [ "Wheeling", "+1 847" ],
            [ "Whittier", "+1 562" ],
            [ "Wichita", "+1 316" ],
            [ "Wichita Falls", "+1 940" ],
            [ "Williamsport", "+1 240" ],
            [ "Wilmington", "+1 910" ],
            [ "Wilson", "+1 919" ],
            [ "Winchester", "+1 859" ],
            [ "Windsor", "+1 519" ],
            [ "Winona", "+1 507" ],
            [ "Winthrop", "+1 857" ],
            [ "Woburn", "+1 781" ],
            [ "Woodbridge", "+1 703" ],
            [ "Woodburn", "+1 971" ],
            [ "Woodland", "+1 269" ],
            [ "Woodstock", "+1 802" ],
            [ "Woonsocket", "+1 401" ],
            [ "Worcester", "+1 508" ],
            [ "Wyandotte", "+1 734" ],
            [ "Wylie", "+1 972" ],
            [ "Yorba Linda", "+1 657" ],
            [ "York", "+1 803" ],
            [ "Youngstown", "+1 330" ],
            [ "Yukon", "+1 405" ],
            [ "Yuma", "+1 928" ]
        ],
        "Uruguay": [
            [ "Artigas", "+598 772" ],
            [ "Durazno", "+598 36" ],
            [ "Las Piedras", "+598 324" ],
            [ "Maldonado", "+598 42" ],
            [ "Melo", "+598 64" ],
            [ "Montevideo", "+598 2" ],
            [ "Paso de los Toros", "+598 664" ],
            [ "Punta del Este", "+598 42" ],
            [ "Rivera", "+598 62" ],
            [ "Salto", "+598 73" ],
            [ "Tacuarembo", "+598 63" ],
            [ "Treinta y Tres", "+598 45" ]
        ],
        "Uzbekistan": [
            [ "Bukhara", "+998 65" ],
            [ "Samarkand", "+998 66" ],
            [ "Tashkent", "+998 71" ]
        ],
        "Venezuela": [
            [ "Barcelona", "+58 281" ],
            [ "Barquisimeto", "+58 251" ],
            [ "Cabimas", "+58 264" ],
            [ "Caracas", "+58 212" ],
            [ "Ciudad Bolivar", "+58 285" ],
            [ "Ciudad Guayana", "+58 285" ],
            [ "Coro", "+58 268" ],
            [ "Cumana", "+58 293" ],
            [ "Los Teques", "+58 212" ],
            [ "Maracaibo", "+58 261" ],
            [ "Maracay", "+58 243" ],
            [ "Maturin", "+58 291" ],
            [ "Mérida", "+58 274" ],
            [ "Puerto Cabello", "+58 242" ],
            [ "San Cristobal", "+58 276" ],
            [ "Valencia", "+58 241" ]
        ],
        "Vietnam": [
            [ "Ba Ria", "+84 64" ],
            [ "Bac Giang", "+84 240" ],
            [ "Bac Kan", "+84 281" ],
            [ "Bac Lieu", "+84 781" ],
            [ "Bac Ninh", "+84 241" ],
            [ "Bien Hoa", "+84 61" ],
            [ "Binh Dinh", "+84 56" ],
            [ "Binh Phuoc", "+84 651" ],
            [ "Binh Thuan", "+84 62" ],
            [ "Ca Mau", "+84 780" ],
            [ "Can Tho", "+84 71" ],
            [ "Cao Bang", "+84 26" ],
            [ "Cuu Long", "+84 70" ],
            [ "Dak Lak", "+84 50" ],
            [ "Dong Nai", "+84 61" ],
            [ "Dong Thap", "+84 67" ],
            [ "Gia Lai", "+84 59" ],
            [ "Ha Giang", "+84 19" ],
            [ "Ha Nam", "+84 351" ],
            [ "Ha Tay", "+84 34" ],
            [ "Ha Tinh", "+84 39" ],
            [ "Hai Duong", "+84 320" ],
            [ "Hai Phong", "+84 31" ],
            [ "Haiphong", "+84 31" ],
            [ "Hanoi", "+84 4" ],
            [ "Hanoi City", "+84 4" ],
            [ "Ho Chi Minh", "+84 8" ],
            [ "Ho Chi Minh City", "+84 8" ],
            [ "Ho Chi Minh City (Saigon)", "+84 8" ],
            [ "Ho Chi Minh City City (formerl", "+84 8" ],
            [ "Hoa Binh", "+84 18" ],
            [ "Hue", "+84 54" ],
            [ "Hung Yen", "+84 321" ],
            [ "Khanh Hoa", "+84 58" ],
            [ "Kien Giang", "+84 77" ],
            [ "Kon Tum", "+84 60" ],
            [ "Lai Chau", "+84 23" ],
            [ "Lang Son", "+84 25" ],
            [ "Lao Cai", "+84 20" ],
            [ "Long An", "+84 72" ],
            [ "Long Xuyen", "+84 76" ],
            [ "Minh Hai", "+84 78" ],
            [ "Nam Dinh", "+84 350" ],
            [ "Nghe An", "+84 38" ],
            [ "Nha Trang", "+84 58" ],
            [ "Nin Thuan", "+84 68" ],
            [ "Ninh Binh", "+84 30" ],
            [ "Phan Thiet", "+84 62" ],
            [ "Phu Tho", "+84 210" ],
            [ "Phu Yen", "+84 57" ],
            [ "Quang Binh", "+84 52" ],
            [ "Quang Nam", "+84 510" ],
            [ "Quang Ngai", "+84 55" ],
            [ "Quang Tri", "+84 53" ],
            [ "Quant Ninh", "+84 33" ],
            [ "Qui Nhon", "+84 56" ],
            [ "Saigon", "+84 8" ],
            [ "Soc Trang", "+84 79" ],
            [ "Son La", "+84 22" ],
            [ "Tay Ninh", "+84 66" ],
            [ "Thai Binh", "+84 36" ],
            [ "Thai Nguyen", "+84 280" ],
            [ "Thanh Hoa", "+84 37" ],
            [ "Thua Thien Hue", "+84 54" ],
            [ "Thuan Lam Dong", "+84 63" ],
            [ "Tien Giang", "+84 73" ],
            [ "Tra Vinh", "+84 74" ],
            [ "Tuyen Quang", "+84 27" ],
            [ "Vinh Long", "+84 70" ],
            [ "Vinh Phu", "+84 211" ],
            [ "Vung Tàu", "+84 64" ],
            [ "Yen Bai", "+84 29" ]
        ],
        "Western Sahara": [
            [ "Dakar", "+221 8" ],
            [ "Kaolack", "+221 9" ],
            [ "Mbour", "+221 9" ],
            [ "Saint Louis", "+221 9" ],
            [ "Thiès", "+221 9" ],
            [ "Ziguinchor", "+221 9" ]
        ],
        "Yemen": [
            [ "Aden", "+967 2" ],
            [ "San`a", "+967 1" ],
            [ "Ta izz", "+967 4" ]
        ],
        "Zambia": [
            [ "Lusaka", "+260 1" ],
            [ "Ndola", "+260 2" ]
        ],
        "Zimbabwe": [
            [ "Bulawayo", "+263 9" ],
            [ "Harare", "+263 4" ]
        ]
    }
};
