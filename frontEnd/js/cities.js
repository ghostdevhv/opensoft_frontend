var app = angular.module("Sample", ['angularModalService', 'ngAnimate','ngFileUpload','LocalStorageModule']);

app.filter('searchFor', function(){
    return function(arr, searchString){
        if(!searchString){
            return null;
        }
        var result = [];
        searchString = searchString.toLowerCase();
        angular.forEach(arr, function(item){
            if(item.city.toLowerCase().indexOf(searchString) !== -1){
                result.push(item);
            }
        });
        return result;
    };
});

app.controller( "InstantSearchController", ['$scope', 'ModalService','$timeout','$http','localStorageService', function($scope, ModalService, $timeout,$http,localStorageService){

    $scope.upload = function(){
        console.log("Upload");

        ModalService.showModal({
        templateUrl: "upload-modal.html",
        controller: "uploadmodalController",
        inputs: {
            title: "Upload an Image"
        }
        }).then(function(modal) {
            modal.element.modal();
            modal.close.then(function(result) {
                console.log("Chal gya Upload wala part");
            });
        });

    }
    $scope.delete = function(){
        console.log("Delete");

        ModalService.showModal({
        templateUrl: "delete-modal.html",
        controller: "deletemodalController",
        inputs: {
            title: "Delete an Image"
        }
        }).then(function(modal) {
            modal.element.modal();
            modal.close.then(function(result) {
                console.log("Chal gya Delete wala part");
            });
        });
    }
    
    $scope.mapMark = function(i) {
        
        var lonlat = new OpenLayers.LonLat(i.lon, i.lat).transform(
            new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
            new OpenLayers.Projection("EPSG:900913") // to Spherical Mercator
        );
        markers.clearMarkers();
        markers.addMarker(new OpenLayers.Marker(lonlat));
        map.setCenter(lonlat, 11 );

        $scope.searchString = "";

        console.log(i.city);

        ModalService.showModal({
        templateUrl: "tag_pic.html",
        controller: "tagmodalController",
        inputs: {
            title: i.city
        }
        }).then(function(modal) {
            modal.element.modal();
            modal.close.then(function(result) {
                console.log("Chal gya tag wala part");
            });
        });


        
    }

    $scope.items = {
    "adak": {
    "lat": 51.883,
    "lon": -176.633,
    "wikipedia": "Adak,_Alaska",
    "city": "Adak"
    },
    "apia": {
    "lat": -13.833,
    "lon": -171.833,
    "wikipedia": "Apia",
    "city": "Apia"
  },
  "pagopago": {
    "lat": -14.267,
    "lon": -170.7,
    "wikipedia": "Pago_Pago",
    "city": "Pago Pago"
  },
  "alofi": {
    "lat": -19.05,
    "lon": -169.917,
    "wikipedia": "Alofi",
    "city": "Alofi"
  },
  "avarua": {
    "lat": -21.2,
    "lon": -159.767,
    "wikipedia": "Avarua",
    "city": "Avarua"
  },
  "honolulu": {
    "lat": 21.3,
    "lon": -157.817,
    "wikipedia": "Honolulu",
    "city": "Honolulu"
  },
  "hilo": {
    "lat": 19.7,
    "lon": -155.1,
    "wikipedia": "Hilo,_Hawaii",
    "city": "Hilo"
  },
  "anchorage": {
    "lat": 61.217,
    "lon": -149.883,
    "wikipedia": "Anchorage,_Alaska",
    "city": "Anchorage"
  },
  "papeete": {
    "lat": -17.533,
    "lon": -149.567,
    "wikipedia": "Papeete",
    "city": "Papeete"
  },
  "fairbanks": {
    "lat": 64.833,
    "lon": -147.7,
    "wikipedia": "Fairbanks,_Alaska",
    "city": "Fairbanks"
  },
  "sitka": {
    "lat": 57.05,
    "lon": -135.317,
    "wikipedia": "Sitka,_Alaska",
    "city": "Sitka"
  },
  "whitehorse": {
    "lat": 60.717,
    "lon": -135.05,
    "wikipedia": "Whitehorse,_Yukon",
    "city": "Whitehorse"
  },
  "juneau": {
    "lat": 58.35,
    "lon": -134.5,
    "wikipedia": "Juneau,_Alaska",
    "city": "Juneau"
  },
  "adamstown": {
    "lat": -25.067,
    "lon": -130.1,
    "wikipedia": "Adamstown,_Pitcairn_Islands",
    "city": "Adamstown"
  },
  "vancouver": {
    "lat": 49.25,
    "lon": -123.1,
    "wikipedia": "Vancouver",
    "city": "Vancouver"
  },
  "rabiisland": {
    "lat": 3.133,
    "lon": -12.05,
    "wikipedia": "Rabi_Island",
    "city": "Rabi Island"
  },
  "portland": {
    "lat": 45.517,
    "lon": -122.667,
    "wikipedia": "Portland,_Oregon",
    "city": "Portland"
  },
  "sanfrancisco": {
    "lat": 37.767,
    "lon": -122.417,
    "wikipedia": "San_Francisco",
    "city": "San Francisco"
  },
  "seattle": {
    "lat": 47.6,
    "lon": -122.317,
    "wikipedia": "Seattle",
    "city": "Seattle"
  },
  "sacramento": {
    "lat": 38.55,
    "lon": -121.467,
    "wikipedia": "Sacramento,_California",
    "city": "Sacramento"
  },
  "losangeles": {
    "lat": 34.05,
    "lon": -118.25,
    "wikipedia": "Los_Angeles",
    "city": "Los Angeles"
  },
  "riverside": {
    "lat": 33.933,
    "lon": -117.383,
    "wikipedia": "Riverside,_California",
    "city": "Riverside"
  },
  "sandiego": {
    "lat": 32.767,
    "lon": -117.15,
    "wikipedia": "San_Diego",
    "city": "San Diego"
  },
  "tijuana": {
    "lat": 32.517,
    "lon": -117.033,
    "wikipedia": "Tijuana",
    "city": "Tijuana"
  },
  "mexicali": {
    "lat": 32.667,
    "lon": -115.467,
    "wikipedia": "Mexicali",
    "city": "Mexicali"
  },
  "lasvegas": {
    "lat": 36.167,
    "lon": -115.133,
    "wikipedia": "Las_Vegas,_Nevada",
    "city": "Las Vegas"
  },
  "yellowknife": {
    "lat": 62.45,
    "lon": -114.4,
    "wikipedia": "Yellowknife",
    "city": "Yellowknife"
  },
  "calgary": {
    "lat": 51.033,
    "lon": -114.05,
    "wikipedia": "Calgary",
    "city": "Calgary"
  },
  "edmonton": {
    "lat": 53.567,
    "lon": -113.517,
    "wikipedia": "Edmonton",
    "city": "Edmonton"
  },
  "phoenix": {
    "lat": 33.433,
    "lon": -112.067,
    "wikipedia": "Phoenix,_Arizona",
    "city": "Phoenix"
  },
  "saltlakecity": {
    "lat": 40.75,
    "lon": -111.883,
    "wikipedia": "Salt_Lake_City",
    "city": "Salt Lake City"
  },
  "tucson": {
    "lat": 32.2,
    "lon": -110.917,
    "wikipedia": "Tucson,_Arizona",
    "city": "Tucson"
  },
  "hangaroa": {
    "lat": 27.15,
    "lon": -109.433,
    "wikipedia": "Hanga_Roa",
    "city": "Hanga Roa"
  },
  "saskatoon": {
    "lat": 52.117,
    "lon": -106.65,
    "wikipedia": "Saskatoon",
    "city": "Saskatoon"
  },
  "albuquerque": {
    "lat": 35.1,
    "lon": -106.6,
    "wikipedia": "Albuquerque,_New_Mexico",
    "city": "Albuquerque"
  },
  "elpaso": {
    "lat": 31.783,
    "lon": -106.417,
    "wikipedia": "El_Paso,_Texas",
    "city": "El Paso"
  },
  "chihuahua": {
    "lat": 28.1,
    "lon": -106.0,
    "wikipedia": "Chihuahua,_Chihuahua",
    "city": "Chihuahua"
  },
  "denver": {
    "lat": 39.733,
    "lon": -104.983,
    "wikipedia": "Denver",
    "city": "Denver"
  },
  "durango": {
    "lat": 24.017,
    "lon": -104.667,
    "wikipedia": "Durango,_Durango",
    "city": "Durango"
  },
  "regina": {
    "lat": 50.433,
    "lon": -104.617,
    "wikipedia": "Regina,_Saskatchewan",
    "city": "Regina"
  },
  "zapopan": {
    "lat": 20.767,
    "lon": -103.4,
    "wikipedia": "Zapopan,_Jalisco",
    "city": "Zapopan"
  },
  "guadalajara": {
    "lat": 20.667,
    "lon": -103.35,
    "wikipedia": "Guadalajara,_Jalisco",
    "city": "Guadalajara"
  },
  "monterrey": {
    "lat": 25.667,
    "lon": -100.3,
    "wikipedia": "Monterrey",
    "city": "Monterrey"
  },
  "mexicocity": {
    "lat": 19.4,
    "lon": -99.117,
    "wikipedia": "Mexico_City",
    "city": "Mexico City"
  },
  "sanantonio": {
    "lat": 29.533,
    "lon": -98.467,
    "wikipedia": "San_Antonio",
    "city": "San Antonio"
  },
  "puebla": {
    "lat": 19.05,
    "lon": -98.2,
    "wikipedia": "Puebla,_Puebla",
    "city": "Puebla"
  },
  "austin": {
    "lat": 30.267,
    "lon": -97.767,
    "wikipedia": "Austin,_Texas",
    "city": "Austin"
  },
  "oklahomacity": {
    "lat": 35.467,
    "lon": -97.533,
    "wikipedia": "Oklahoma_City",
    "city": "Oklahoma City"
  },
  "wichita": {
    "lat": 37.683,
    "lon": -97.333,
    "wikipedia": "Wichita,_Kansas",
    "city": "Wichita"
  },
  "winnipeg": {
    "lat": 49.9,
    "lon": -97.133,
    "wikipedia": "Winnipeg",
    "city": "Winnipeg"
  },
  "dallas": {
    "lat": 32.767,
    "lon": -96.8,
    "wikipedia": "Dallas",
    "city": "Dallas"
  },
  "veracruz": {
    "lat": 19.183,
    "lon": -96.133,
    "wikipedia": "Veracruz,_Veracruz",
    "city": "Veracruz"
  },
  "houston": {
    "lat": 29.75,
    "lon": -95.367,
    "wikipedia": "Houston",
    "city": "Houston"
  },
  "kansascity": {
    "lat": 39.1,
    "lon": -94.567,
    "wikipedia": "Kansas_City,_Missouri",
    "city": "Kansas City"
  },
  "minneapolis": {
    "lat": 44.967,
    "lon": -93.25,
    "wikipedia": "Minneapolis",
    "city": "Minneapolis"
  },
  "quetzaltenango": {
    "lat": 14.833,
    "lon": -91.517,
    "wikipedia": "Quetzaltenango",
    "city": "Quetzaltenango"
  },
  "guatemalacity": {
    "lat": 14.633,
    "lon": -90.55,
    "wikipedia": "Guatemala_City",
    "city": "Guatemala City"
  },
  "st.louis": {
    "lat": 38.617,
    "lon": -90.183,
    "wikipedia": "St._Louis,_Missouri",
    "city": "St. Louis"
  },
  "neworleans": {
    "lat": 29.967,
    "lon": -90.067,
    "wikipedia": "New_Orleans",
    "city": "New Orleans"
  },
  "memphis": {
    "lat": 35.117,
    "lon": -89.967,
    "wikipedia": "Memphis,_Tennessee",
    "city": "Memphis"
  },
  "m%c3%a9rida": {
    "lat": 20.967,
    "lon": -89.617,
    "wikipedia": "M%C3%A9rida,_Yucat%C3%A1n",
    "city": "M%C3%A9rida"
  },
  "sansalvador": {
    "lat": 13.683,
    "lon": -89.183,
    "wikipedia": "San_Salvador",
    "city": "San Salvador"
  },
  "belmopan": {
    "lat": 17.25,
    "lon": -88.767,
    "wikipedia": "Belmopan",
    "city": "Belmopan"
  },
  "belizecity": {
    "lat": 17.483,
    "lon": -88.183,
    "wikipedia": "Belize_City",
    "city": "Belize City"
  },
  "milwaukee": {
    "lat": 47.05,
    "lon": -87.95,
    "wikipedia": "Milwaukee",
    "city": "Milwaukee"
  },
  "chicago": {
    "lat": 41.867,
    "lon": -87.617,
    "wikipedia": "Chicago",
    "city": "Chicago"
  },
  "tegucigalpa": {
    "lat": 14.083,
    "lon": -87.217,
    "wikipedia": "Tegucigalpa",
    "city": "Tegucigalpa"
  },
  "nashville": {
    "lat": 36.167,
    "lon": -86.783,
    "wikipedia": "Nashville,_Tennessee",
    "city": "Nashville"
  },
  "managua": {
    "lat": 12.133,
    "lon": -86.25,
    "wikipedia": "Managua",
    "city": "Managua"
  },
  "indianapolis": {
    "lat": 39.783,
    "lon": -86.15,
    "wikipedia": "Indianapolis",
    "city": "Indianapolis"
  },
  "louisville": {
    "lat": 38.25,
    "lon": -85.75,
    "wikipedia": "Louisville,_Kentucky",
    "city": "Louisville"
  },
  "cincinnati": {
    "lat": 39.133,
    "lon": -84.5,
    "wikipedia": "Cincinnati",
    "city": "Cincinnati"
  },
  "atlanta": {
    "lat": 33.75,
    "lon": -84.383,
    "wikipedia": "Atlanta",
    "city": "Atlanta"
  },
  "sanjos%c3%a9": {
    "lat": 9.933,
    "lon": -84.083,
    "wikipedia": "San_Jos%C3%A9,_Costa_Rica",
    "city": "San Jos%C3%A9"
  },
  "detroit": {
    "lat": 42.333,
    "lon": -83.05,
    "wikipedia": "Detroit",
    "city": "Detroit"
  },
  "columbus": {
    "lat": 39.983,
    "lon": -82.983,
    "wikipedia": "Columbus,_Ohio",
    "city": "Columbus"
  },
  "tampa": {
    "lat": 27.967,
    "lon": -82.467,
    "wikipedia": "Tampa,_Florida",
    "city": "Tampa"
  },
  "havana": {
    "lat": 23.133,
    "lon": -82.383,
    "wikipedia": "Havana",
    "city": "Havana"
  },
  "cleveland": {
    "lat": 41.483,
    "lon": -81.667,
    "wikipedia": "Cleveland",
    "city": "Cleveland"
  },
  "jacksonville": {
    "lat": 30.317,
    "lon": -81.65,
    "wikipedia": "Jacksonville,_Florida",
    "city": "Jacksonville"
  },
  "georgetown": {
    "lat": 5.417,
    "lon": 100.317,
    "wikipedia": "George_Town,_Penang",
    "city": "George Town"
  },
  "charlotte": {
    "lat": 35.2,
    "lon": -80.817,
    "wikipedia": "Charlotte,_North_Carolina",
    "city": "Charlotte"
  },
  "miami": {
    "lat": 25.783,
    "lon": -80.217,
    "wikipedia": "Miami",
    "city": "Miami"
  },
  "pittsburgh": {
    "lat": 40.433,
    "lon": -79.967,
    "wikipedia": "Pittsburgh",
    "city": "Pittsburgh"
  },
  "guayaquil": {
    "lat": 2.183,
    "lon": -79.883,
    "wikipedia": "Guayaquil",
    "city": "Guayaquil"
  },
  "panamacity": {
    "lat": 8.983,
    "lon": -79.517,
    "wikipedia": "Panama_City",
    "city": "Panama City"
  },
  "toronto": {
    "lat": 43.65,
    "lon": -79.383,
    "wikipedia": "Toronto",
    "city": "Toronto"
  },
  "buffalo": {
    "lat": 42.9,
    "lon": -78.85,
    "wikipedia": "Buffalo,_New_York",
    "city": "Buffalo"
  },
  "raleigh": {
    "lat": 35.817,
    "lon": -78.633,
    "wikipedia": "Raleigh,_North_Carolina",
    "city": "Raleigh"
  },
  "quito": {
    "lat": 0.25,
    "lon": -78.583,
    "wikipedia": "Quito",
    "city": "Quito"
  },
  "rochester": {
    "lat": 43.15,
    "lon": -77.6,
    "wikipedia": "Rochester,_New_York",
    "city": "Rochester"
  },
  "nassau": {
    "lat": 25.05,
    "lon": -77.333,
    "wikipedia": "Nassau,_Bahamas",
    "city": "Nassau"
  },
  "washington": {
    "lat": 38.883,
    "lon": -77.033,
    "wikipedia": "Washington,_D.C.",
    "city": "Washington"
  },
  "lima": {
    "lat": -12.033,
    "lon": -77.017,
    "wikipedia": "Lima",
    "city": "Lima"
  },
  "kingston": {
    "lat": -29.067,
    "lon": 167.967,
    "wikipedia": "Kingston,_Norfolk_Island",
    "city": "Kingston"
  },
  "baltimore": {
    "lat": 39.283,
    "lon": -76.617,
    "wikipedia": "Baltimore",
    "city": "Baltimore"
  },
  "cali": {
    "lat": 3.417,
    "lon": -76.517,
    "wikipedia": "Cali",
    "city": "Cali"
  },
  "virginiabeach": {
    "lat": 36.85,
    "lon": -75.983,
    "wikipedia": "Virginia_Beach",
    "city": "Virginia Beach"
  },
  "santiagodecuba": {
    "lat": 20.017,
    "lon": -75.8,
    "wikipedia": "Santiago_de_Cuba",
    "city": "Santiago de Cuba"
  },
  "ottawa": {
    "lat": 45.417,
    "lon": -75.683,
    "wikipedia": "Ottawa",
    "city": "Ottawa"
  },
  "medell%c3%adn": {
    "lat": 6.233,
    "lon": -75.567,
    "wikipedia": "Medell%C3%ADn",
    "city": "Medell%C3%ADn"
  },
  "cartagena": {
    "lat": 10.4,
    "lon": -75.5,
    "wikipedia": "Cartagena,_Colombia",
    "city": "Cartagena"
  },
  "philadelphia": {
    "lat": 39.95,
    "lon": -75.167,
    "wikipedia": "Philadelphia",
    "city": "Philadelphia"
  },
  "barranquilla": {
    "lat": 10.95,
    "lon": -74.783,
    "wikipedia": "Barranquilla",
    "city": "Barranquilla"
  },
  "forkedriver": {
    "lat": 39.817,
    "lon": -74.183,
    "wikipedia": "Forked_River",
    "city": "Forked River"
  },
  "jerseycity": {
    "lat": 41.433,
    "lon": -74.133,
    "wikipedia": "Jersey_City,_New_Jersey",
    "city": "Jersey City"
  },
  "bogot%c3%a1": {
    "lat": 4.6,
    "lon": -74.067,
    "wikipedia": "Bogot%C3%A1",
    "city": "Bogot%C3%A1"
  },
  "newyorkcity": {
    "lat": 40.717,
    "lon": -74.0,
    "wikipedia": "New_York_City",
    "city": "New York City"
  },
  "montreal": {
    "lat": 45.5,
    "lon": -73.55,
    "wikipedia": "Montreal",
    "city": "Montreal"
  },
  "iquitos": {
    "lat": -3.733,
    "lon": -73.25,
    "wikipedia": "Iquitos",
    "city": "Iquitos"
  },
  "valdivia": {
    "lat": -39.817,
    "lon": -73.233,
    "wikipedia": "Valdivia,_Chile",
    "city": "Valdivia"
  },
  "concepci%c3%b3n": {
    "lat": -36.833,
    "lon": -73.05,
    "wikipedia": "Concepci%C3%B3n,_Chile",
    "city": "Concepci%C3%B3n"
  },
  "portauprince": {
    "lat": 18.533,
    "lon": -72.333,
    "wikipedia": "Port-au-Prince",
    "city": "Port-au-Prince"
  },
  "cusco": {
    "lat": -13.5,
    "lon": -71.967,
    "wikipedia": "Cusco",
    "city": "Cusco"
  },
  "maracaibo": {
    "lat": -10.65,
    "lon": -71.633,
    "wikipedia": "Maracaibo",
    "city": "Maracaibo"
  },
  "valpara%c3%adso": {
    "lat": -33.05,
    "lon": -71.617,
    "wikipedia": "Valpara%C3%ADso",
    "city": "Valpara%C3%ADso"
  },
  "arequipa": {
    "lat": -16.4,
    "lon": -71.533,
    "wikipedia": "Arequipa",
    "city": "Arequipa"
  },
  "providence": {
    "lat": 41.817,
    "lon": -71.417,
    "wikipedia": "Providence,_Rhode_Island",
    "city": "Providence"
  },
  "sancarlosdebariloche": {
    "lat": -41.15,
    "lon": -71.3,
    "wikipedia": "San_Carlos_de_Bariloche",
    "city": "San Carlos de Bariloche"
  },
  "laserena": {
    "lat": -29.9,
    "lon": -71.25,
    "wikipedia": "La_Serena,_Chile",
    "city": "La Serena"
  },
  "quebeccity": {
    "lat": 46.8,
    "lon": -71.217,
    "wikipedia": "Quebec_City",
    "city": "Quebec City"
  },
  "cockburntown": {
    "lat": 21.45,
    "lon": -71.133,
    "wikipedia": "Cockburn_Town",
    "city": "Cockburn Town"
  },
  "boston": {
    "lat": 42.35,
    "lon": -71.05,
    "wikipedia": "Boston",
    "city": "Boston"
  },
  "puntaarenas": {
    "lat": -53.167,
    "lon": -70.933,
    "wikipedia": "Punta_Arenas,_Chile",
    "city": "Punta Arenas"
  },
  "santiago": {
    "lat": -33.45,
    "lon": -70.667,
    "wikipedia": "Santiago,_Chile",
    "city": "Santiago"
  },
  "antofagasta": {
    "lat": -23.65,
    "lon": -70.4,
    "wikipedia": "Antofagasta",
    "city": "Antofagasta"
  },
  "iquique": {
    "lat": -20.217,
    "lon": -70.15,
    "wikipedia": "Iquique",
    "city": "Iquique"
  },
  "oranjestad": {
    "lat": 12.517,
    "lon": -70.033,
    "wikipedia": "Oranjestad,_Aruba",
    "city": "Oranjestad"
  },
  "santodomingo": {
    "lat": 18.483,
    "lon": -69.917,
    "wikipedia": "Santo_Domingo",
    "city": "Santo Domingo"
  },
  "riobranco": {
    "lat": -10.117,
    "lon": -69.35,
    "wikipedia": "Rio_Branco",
    "city": "Rio Branco"
  },
  "willemstad": {
    "lat": 12.117,
    "lon": -68.933,
    "wikipedia": "Willemstad",
    "city": "Willemstad"
  },
  "calama": {
    "lat": -22.467,
    "lon": -68.933,
    "wikipedia": "Calama,_Chile",
    "city": "Calama"
  },
  "mendoza": {
    "lat": -32.883,
    "lon": -68.817,
    "wikipedia": "Mendoza,_Argentina",
    "city": "Mendoza"
  },
  "iqaluit": {
    "lat": 63.75,
    "lon": -68.517,
    "wikipedia": "Iqaluit",
    "city": "Iqaluit"
  },
  "ushuaia": {
    "lat": -54.8,
    "lon": -68.3,
    "wikipedia": "Ushuaia",
    "city": "Ushuaia"
  },
  "lapaz": {
    "lat": -16.5,
    "lon": -68.15,
    "wikipedia": "La_Paz",
    "city": "La Paz"
  },
  "puertowilliams": {
    "lat": 54.933,
    "lon": -67.617,
    "wikipedia": "Puerto_Williams",
    "city": "Puerto Williams"
  },
  "caracas": {
    "lat": 10.5,
    "lon": -66.917,
    "wikipedia": "Caracas",
    "city": "Caracas"
  },
  "fredericton": {
    "lat": 45.95,
    "lon": -66.667,
    "wikipedia": "Fredericton",
    "city": "Fredericton"
  },
  "sanjuan": {
    "lat": 18.45,
    "lon": -66.067,
    "wikipedia": "San_Juan,_Puerto_Rico",
    "city": "San Juan"
  },
  "saintjohn": {
    "lat": 45.267,
    "lon": -66.05,
    "wikipedia": "Saint_John,_New_Brunswick",
    "city": "Saint John"
  },
  "sucre": {
    "lat": -19.033,
    "lon": -65.25,
    "wikipedia": "Sucre",
    "city": "Sucre"
  },
  "charlotteamalie": {
    "lat": -18.35,
    "lon": -64.95,
    "wikipedia": "Charlotte_Amalie,_United_States_Virgin_Islands",
    "city": "Charlotte Amalie"
  },
  "hamilton": {
    "lat": -37.783,
    "lon": 175.283,
    "wikipedia": "Hamilton,_New_Zealand",
    "city": "Hamilton"
  },
  "roadtown": {
    "lat": 18.433,
    "lon": -64.617,
    "wikipedia": "Road_Town",
    "city": "Road Town"
  },
  "c%c3%b3rdoba": {
    "lat": -31.4,
    "lon": -64.183,
    "wikipedia": "C%C3%B3rdoba,_Argentina",
    "city": "C%C3%B3rdoba"
  },
  "portovelho": {
    "lat": -8.75,
    "lon": -63.9,
    "wikipedia": "Porto_Velho",
    "city": "Porto Velho"
  },
  "cityofhalifax": {
    "lat": 44.667,
    "lon": -63.6,
    "wikipedia": "City_of_Halifax",
    "city": "City of Halifax"
  },
  "santacruzdelasierra": {
    "lat": -17.8,
    "lon": -63.167,
    "wikipedia": "Santa_Cruz_de_la_Sierra",
    "city": "Santa Cruz de la Sierra"
  },
  "charlottetown": {
    "lat": 46.233,
    "lon": -63.133,
    "wikipedia": "Charlottetown",
    "city": "Charlottetown"
  },
  "thevalley": {
    "lat": 18.217,
    "lon": -63.05,
    "wikipedia": "The_Valley,_Anguilla",
    "city": "The Valley"
  },
  "basseterre": {
    "lat": 15.983,
    "lon": -61.717,
    "wikipedia": "Basse-Terre",
    "city": "Basse-Terre"
  },
  "bah%c3%adablanca": {
    "lat": -38.717,
    "lon": -62.267,
    "wikipedia": "Bah%C3%ADa_Blanca",
    "city": "Bah%C3%ADa Blanca"
  },
  "st.john%27s": {
    "lat": 47.55,
    "lon": -52.7,
    "wikipedia": "St._John%27s,_Newfoundland_and_Labrador",
    "city": "St. John%27s"
  },
  "st.george%27s": {
    "lat": 12.05,
    "lon": -61.75,
    "wikipedia": "St._George%27s,_Grenada",
    "city": "St. George%27s"
  },
  "portofspain": {
    "lat": 10.667,
    "lon": -61.517,
    "wikipedia": "Port_of_Spain",
    "city": "Port of Spain"
  },
  "sanfernando": {
    "lat": 10.283,
    "lon": -61.467,
    "wikipedia": "San_Fernando,_Trinidad_and_Tobago",
    "city": "San Fernando"
  },
  "roseau": {
    "lat": 15.3,
    "lon": -61.383,
    "wikipedia": "Roseau",
    "city": "Roseau"
  },
  "chaguanas": {
    "lat": 10.5,
    "lon": -61.383,
    "wikipedia": "Chaguanas",
    "city": "Chaguanas"
  },
  "kingstown": {
    "lat": 13.167,
    "lon": -61.233,
    "wikipedia": "Kingstown",
    "city": "Kingstown"
  },
  "fortdefrance": {
    "lat": 14.6,
    "lon": -61.083,
    "wikipedia": "Fort-de-France",
    "city": "Fort-de-France"
  },
  "castries": {
    "lat": 14.017,
    "lon": -60.983,
    "wikipedia": "Castries",
    "city": "Castries"
  },
  "rosario": {
    "lat": -32.95,
    "lon": -60.667,
    "wikipedia": "Rosario,_Santa_Fe",
    "city": "Rosario"
  },
  "boavista": {
    "lat": 2.817,
    "lon": -60.65,
    "wikipedia": "Boa_Vista,_Roraima",
    "city": "Boa Vista"
  },
  "manaus": {
    "lat": -3.1,
    "lon": -60.017,
    "wikipedia": "Manaus",
    "city": "Manaus"
  },
  "bridgetown": {
    "lat": 13.083,
    "lon": -59.617,
    "wikipedia": "Bridgetown",
    "city": "Bridgetown"
  },
  "buenosaires": {
    "lat": -34.6,
    "lon": -58.367,
    "wikipedia": "Buenos_Aires",
    "city": "Buenos Aires"
  },
  "stanley": {
    "lat": 51.683,
    "lon": -57.85,
    "wikipedia": "Stanley,_Falkland_Islands",
    "city": "Stanley"
  },
  "asunci%c3%b3n": {
    "lat": -25.267,
    "lon": -57.667,
    "wikipedia": "Asunci%C3%B3n",
    "city": "Asunci%C3%B3n"
  },
  "saintpierre": {
    "lat": 46.767,
    "lon": -56.167,
    "wikipedia": "Saint-Pierre,_Saint_Pierre_and_Miquelon",
    "city": "Saint-Pierre"
  },
  "montevideo": {
    "lat": -34.917,
    "lon": -56.167,
    "wikipedia": "Montevideo",
    "city": "Montevideo"
  },
  "cuiab%c3%a1": {
    "lat": -15.583,
    "lon": -56.083,
    "wikipedia": "Cuiab%C3%A1",
    "city": "Cuiab%C3%A1"
  },
  "paramaribo": {
    "lat": 5.867,
    "lon": -55.167,
    "wikipedia": "Paramaribo",
    "city": "Paramaribo"
  },
  "campogrande": {
    "lat": -20.433,
    "lon": -54.633,
    "wikipedia": "Campo_Grande",
    "city": "Campo Grande"
  },
  "ciudaddeleste": {
    "lat": -25.417,
    "lon": -54.617,
    "wikipedia": "Ciudad_del_Este",
    "city": "Ciudad del Este"
  },
  "chu%c3%ad": {
    "lat": -33.683,
    "lon": -53.45,
    "wikipedia": "Chu%C3%AD",
    "city": "Chu%C3%AD"
  },
  "pelotas": {
    "lat": -31.767,
    "lon": -52.333,
    "wikipedia": "Pelotas",
    "city": "Pelotas"
  },
  "cayenne": {
    "lat": 4.917,
    "lon": -52.317,
    "wikipedia": "Cayenne",
    "city": "Cayenne"
  },
  "nuuk": {
    "lat": 64.167,
    "lon": -51.75,
    "wikipedia": "Nuuk",
    "city": "Nuuk"
  },
  "portoalegre": {
    "lat": 30.033,
    "lon": -51.217,
    "wikipedia": "Porto_Alegre",
    "city": "Porto Alegre"
  },
  "macap%c3%a1": {
    "lat": 0.033,
    "lon": -51.05,
    "wikipedia": "Macap%C3%A1",
    "city": "Macap%C3%A1"
  },
  "assis": {
    "lat": -22.65,
    "lon": -50.4,
    "wikipedia": "Assis",
    "city": "Assis"
  },
  "curitiba": {
    "lat": -25.417,
    "lon": -49.25,
    "wikipedia": "Curitiba",
    "city": "Curitiba"
  },
  "bel%c3%a9m": {
    "lat": 1.467,
    "lon": -48.483,
    "wikipedia": "Bel%C3%A9m",
    "city": "Bel%C3%A9m"
  },
  "bras%c3%adlia": {
    "lat": -15.8,
    "lon": -47.9,
    "wikipedia": "Bras%C3%ADlia",
    "city": "Bras%C3%ADlia"
  },
  "campinas": {
    "lat": -22.9,
    "lon": -47.05,
    "wikipedia": "Campinas",
    "city": "Campinas"
  },
  "s%c3%a3opaulo": {
    "lat": -23.55,
    "lon": -46.633,
    "wikipedia": "S%C3%A3o_Paulo",
    "city": "S%C3%A3o Paulo"
  },
  "s%c3%a3ojos%c3%a9doscampos": {
    "lat": -23.183,
    "lon": -45.867,
    "wikipedia": "S%C3%A3o_Jos%C3%A9_dos_Campos",
    "city": "S%C3%A3o Jos%C3%A9 dos Campos"
  },
  "riodejaneiro": {
    "lat": -22.9,
    "lon": -43.233,
    "wikipedia": "Rio_de_Janeiro",
    "city": "Rio de Janeiro"
  },
  "vit%c3%b3ria": {
    "lat": -20.317,
    "lon": -40.333,
    "wikipedia": "Vit%C3%B3ria,_Brazil",
    "city": "Vit%C3%B3ria"
  },
  "ilh%c3%a9us": {
    "lat": -14.783,
    "lon": -39.05,
    "wikipedia": "Ilh%C3%A9us",
    "city": "Ilh%C3%A9us"
  },
  "fortaleza": {
    "lat": -3.767,
    "lon": -38.567,
    "wikipedia": "Fortaleza",
    "city": "Fortaleza"
  },
  "macei%c3%b3": {
    "lat": -9.65,
    "lon": -35.717,
    "wikipedia": "Macei%C3%B3",
    "city": "Macei%C3%B3"
  },
  "recife": {
    "lat": -8.067,
    "lon": -34.867,
    "wikipedia": "Recife",
    "city": "Recife"
  },
  "horta": {
    "lat": 38.533,
    "lon": -28.633,
    "wikipedia": "Horta_(Azores)",
    "city": "Horta (Azores)"
  },
  "angradohero%c3%adsmo": {
    "lat": 38.65,
    "lon": -27.217,
    "wikipedia": "Angra_do_Hero%C3%ADsmo",
    "city": "Angra do Hero%C3%ADsmo"
  },
  "pontadelgada": {
    "lat": 37.733,
    "lon": -25.667,
    "wikipedia": "Ponta_Delgada,_S%C3%A3o_Miguel_Island",
    "city": "Ponta Delgada"
  },
  "praia": {
    "lat": 14.917,
    "lon": -23.517,
    "wikipedia": "Praia",
    "city": "Praia"
  },
  "reykjav%c3%adk": {
    "lat": 64.133,
    "lon": -21.933,
    "wikipedia": "Reykjav%C3%ADk",
    "city": "Reykjav%C3%ADk"
  },
  "dakar": {
    "lat": 14.683,
    "lon": -17.433,
    "wikipedia": "Dakar",
    "city": "Dakar"
  },
  "thi%c3%a8s": {
    "lat": 14.833,
    "lon": -17.1,
    "wikipedia": "Thi%C3%A8s",
    "city": "Thi%C3%A8s"
  },
  "serekunda": {
    "lat": 13.433,
    "lon": -16.667,
    "wikipedia": "Serekunda",
    "city": "Serekunda"
  },
  "brikama": {
    "lat": 13.267,
    "lon": -16.65,
    "wikipedia": "Brikama",
    "city": "Brikama"
  },
  "banjul": {
    "lat": 13.45,
    "lon": -16.567,
    "wikipedia": "Banjul",
    "city": "Banjul"
  },
  "santacruzdetenerife": {
    "lat": 28.467,
    "lon": -16.25,
    "wikipedia": "Santa_Cruz_de_Tenerife",
    "city": "Santa Cruz de Tenerife"
  },
  "nouakchott": {
    "lat": 18.1,
    "lon": -15.95,
    "wikipedia": "Nouakchott",
    "city": "Nouakchott"
  },
  "bissau": {
    "lat": 11.85,
    "lon": -15.583,
    "wikipedia": "Bissau",
    "city": "Bissau"
  },
  "laspalmasdegrancanaria": {
    "lat": 28.133,
    "lon": -15.433,
    "wikipedia": "Las_Palmas_de_Gran_Canaria",
    "city": "Las Palmas de Gran Canaria"
  },
  "conakry": {
    "lat": 9.517,
    "lon": -13.7,
    "wikipedia": "Conakry",
    "city": "Conakry"
  },
  "freetown": {
    "lat": 8.467,
    "lon": -13.267,
    "wikipedia": "Freetown",
    "city": "Freetown"
  },
  "elaai%c3%ban": {
    "lat": 27.15,
    "lon": -13.2,
    "wikipedia": "El_Aai%C3%BAn",
    "city": "El Aai%C3%BAn"
  },
  "monrovia": {
    "lat": 6.317,
    "lon": -10.767,
    "wikipedia": "Monrovia",
    "city": "Monrovia"
  },
  "lisbon": {
    "lat": 38.7,
    "lon": -9.183,
    "wikipedia": "Lisbon",
    "city": "Lisbon"
  },
  "porto": {
    "lat": 41.15,
    "lon": -8.633,
    "wikipedia": "Porto",
    "city": "Porto"
  },
  "cork": {
    "lat": 51.883,
    "lon": -8.467,
    "wikipedia": "Cork_(city)",
    "city": "Cork (city)"
  },
  "marrakech": {
    "lat": 31.633,
    "lon": -8.0,
    "wikipedia": "Marrakech",
    "city": "Marrakech"
  },
  "bamako": {
    "lat": 12.65,
    "lon": -8.0,
    "wikipedia": "Bamako",
    "city": "Bamako"
  },
  "casablanca": {
    "lat": 33.533,
    "lon": -7.583,
    "wikipedia": "Casablanca",
    "city": "Casablanca"
  },
  "koulikoro": {
    "lat": 12.983,
    "lon": -7.567,
    "wikipedia": "Koulikoro",
    "city": "Koulikoro"
  },
  "rabat": {
    "lat": 34.033,
    "lon": -6.833,
    "wikipedia": "Rabat",
    "city": "Rabat"
  },
  "t%c3%b3rshavn": {
    "lat": 62.0,
    "lon": -6.783,
    "wikipedia": "T%C3%B3rshavn",
    "city": "T%C3%B3rshavn"
  },
  "dublin": {
    "lat": 53.333,
    "lon": -6.267,
    "wikipedia": "Dublin",
    "city": "Dublin"
  },
  "seville": {
    "lat": 37.367,
    "lon": -5.983,
    "wikipedia": "Seville",
    "city": "Seville"
  },
  "belfast": {
    "lat": 54.6,
    "lon": -5.917,
    "wikipedia": "Belfast",
    "city": "Belfast"
  },
  "jamestown": {
    "lat": -15.917,
    "lon": -5.733,
    "wikipedia": "Jamestown,_Saint_Helena",
    "city": "Jamestown"
  },
  "gibraltar": {
    "lat": 36.133,
    "lon": -5.35,
    "wikipedia": "Gibraltar",
    "city": "Gibraltar"
  },
  "yamoussoukro": {
    "lat": 6.817,
    "lon": -5.283,
    "wikipedia": "Yamoussoukro",
    "city": "Yamoussoukro"
  },
  "douglas": {
    "lat": 54.133,
    "lon": -4.483,
    "wikipedia": "Douglas,_Isle_of_Man",
    "city": "Douglas"
  },
  "m%c3%a1laga": {
    "lat": 36.717,
    "lon": -4.417,
    "wikipedia": "M%C3%A1laga",
    "city": "M%C3%A1laga"
  },
  "glasgow": {
    "lat": 55.85,
    "lon": -4.25,
    "wikipedia": "Glasgow",
    "city": "Glasgow"
  },
  "abidjan": {
    "lat": 5.333,
    "lon": -4.017,
    "wikipedia": "Abidjan",
    "city": "Abidjan"
  },
  "madrid": {
    "lat": 40.4,
    "lon": -3.683,
    "wikipedia": "Madrid",
    "city": "Madrid"
  },
  "cardiff": {
    "lat": 51.483,
    "lon": -3.183,
    "wikipedia": "Cardiff",
    "city": "Cardiff"
  },
  "edinburgh": {
    "lat": 55.95,
    "lon": -3.15,
    "wikipedia": "Edinburgh",
    "city": "Edinburgh"
  },
  "timbuktu": {
    "lat": 16.767,
    "lon": -3.0,
    "wikipedia": "Timbuktu",
    "city": "Timbuktu"
  },
  "liverpool": {
    "lat": 53.4,
    "lon": -2.983,
    "wikipedia": "Liverpool",
    "city": "Liverpool"
  },
  "bilbao": {
    "lat": 43.25,
    "lon": -2.917,
    "wikipedia": "Bilbao",
    "city": "Bilbao"
  },
  "manchester": {
    "lat": 53.467,
    "lon": -2.233,
    "wikipedia": "Manchester",
    "city": "Manchester"
  },
  "aberdeen": {
    "lat": 57.15,
    "lon": -2.1,
    "wikipedia": "Aberdeen",
    "city": "Aberdeen"
  },
  "birmingham": {
    "lat": 52.483,
    "lon": -1.883,
    "wikipedia": "Birmingham",
    "city": "Birmingham"
  },
  "leeds": {
    "lat": 53.8,
    "lon": -1.55,
    "wikipedia": "Leeds",
    "city": "Leeds"
  },
  "nantes": {
    "lat": 47.217,
    "lon": -1.55,
    "wikipedia": "Nantes",
    "city": "Nantes"
  },
  "ouagadougou": {
    "lat": 12.35,
    "lon": -1.533,
    "wikipedia": "Ouagadougou",
    "city": "Ouagadougou"
  },
  "tamale": {
    "lat": 9.4,
    "lon": -0.85,
    "wikipedia": "Tamale,_Ghana",
    "city": "Tamale"
  },
  "valencia": {
    "lat": 39.483,
    "lon": -0.367,
    "wikipedia": "Valencia,_Spain",
    "city": "Valencia"
  },
  "accra": {
    "lat": 5.55,
    "lon": -0.2,
    "wikipedia": "Accra",
    "city": "Accra"
  },
  "london": {
    "lat": 51.5,
    "lon": -0.117,
    "wikipedia": "London",
    "city": "London"
  },
  "greenwich": {
    "lat": 51.467,
    "lon": -0.0,
    "wikipedia": "Greenwich",
    "city": "Greenwich"
  },
  "lom%c3%a9": {
    "lat": 6.133,
    "lon": 1.2,
    "wikipedia": "Lom%C3%A9",
    "city": "Lom%C3%A9"
  },
  "toulouse": {
    "lat": 43.6,
    "lon": 1.433,
    "wikipedia": "Toulouse",
    "city": "Toulouse"
  },
  "andorralavella": {
    "lat": 42.5,
    "lon": 1.5,
    "wikipedia": "Andorra_la_Vella",
    "city": "Andorra la Vella"
  },
  "ibiza": {
    "lat": 39.633,
    "lon": 1.717,
    "wikipedia": "Ibiza",
    "city": "Ibiza"
  },
  "niamey": {
    "lat": 13.517,
    "lon": 2.1,
    "wikipedia": "Niamey",
    "city": "Niamey"
  },
  "barcelona": {
    "lat": 41.383,
    "lon": 2.183,
    "wikipedia": "Barcelona",
    "city": "Barcelona"
  },
  "paris": {
    "lat": 48.867,
    "lon": 2.333,
    "wikipedia": "Paris",
    "city": "Paris"
  },
  "cotonou": {
    "lat": 6.35,
    "lon": 2.417,
    "wikipedia": "Cotonou",
    "city": "Cotonou"
  },
  "portonovo": {
    "lat": 6.5,
    "lon": 2.6,
    "wikipedia": "Porto-Novo",
    "city": "Porto-Novo"
  },
  "palma": {
    "lat": 39.567,
    "lon": 2.65,
    "wikipedia": "Palma,_Majorca",
    "city": "Palma"
  },
  "algiers": {
    "lat": 36.7,
    "lon": 3.217,
    "wikipedia": "Algiers",
    "city": "Algiers"
  },
  "lagos": {
    "lat": 6.45,
    "lon": 3.383,
    "wikipedia": "Lagos",
    "city": "Lagos"
  },
  "ibadan": {
    "lat": 7.367,
    "lon": 3.883,
    "wikipedia": "Ibadan",
    "city": "Ibadan"
  },
  "thehague": {
    "lat": 52.067,
    "lon": 4.3,
    "wikipedia": "The_Hague",
    "city": "The Hague"
  },
  "brussels": {
    "lat": 50.833,
    "lon": 4.35,
    "wikipedia": "Brussels",
    "city": "Brussels"
  },
  "antwerp": {
    "lat": 51.217,
    "lon": 4.4,
    "wikipedia": "Antwerp",
    "city": "Antwerp"
  },
  "rotterdam": {
    "lat": 51.933,
    "lon": 4.467,
    "wikipedia": "Rotterdam",
    "city": "Rotterdam"
  },
  "lyon": {
    "lat": 45.767,
    "lon": 4.833,
    "wikipedia": "Lyon",
    "city": "Lyon"
  },
  "amsterdam": {
    "lat": 52.367,
    "lon": 4.883,
    "wikipedia": "Amsterdam",
    "city": "Amsterdam"
  },
  "marseille": {
    "lat": 43.3,
    "lon": 5.367,
    "wikipedia": "Marseille",
    "city": "Marseille"
  },
  "bergen": {
    "lat": 60.367,
    "lon": 5.4,
    "wikipedia": "Bergen",
    "city": "Bergen"
  },
  "luxembourg": {
    "lat": 49.6,
    "lon": 6.117,
    "wikipedia": "Luxembourg_(city)",
    "city": "Luxembourg (city)"
  },
  "geneva": {
    "lat": 46.2,
    "lon": 6.15,
    "wikipedia": "Geneva",
    "city": "Geneva"
  },
  "s%c3%a3otom%c3%a9": {
    "lat": 0.333,
    "lon": 6.683,
    "wikipedia": "S%C3%A3o_Tom%C3%A9",
    "city": "S%C3%A3o Tom%C3%A9"
  },
  "d%c3%bcsseldorf": {
    "lat": 51.233,
    "lon": 6.783,
    "wikipedia": "D%C3%BCsseldorf",
    "city": "D%C3%BCsseldorf"
  },
  "cologne": {
    "lat": 50.95,
    "lon": 6.967,
    "wikipedia": "Cologne",
    "city": "Cologne"
  },
  "cannes": {
    "lat": 43.55,
    "lon": 7.0,
    "wikipedia": "Cannes",
    "city": "Cannes"
  },
  "nice": {
    "lat": 43.7,
    "lon": 7.267,
    "wikipedia": "Nice",
    "city": "Nice"
  },
  "monaco": {
    "lat": 43.733,
    "lon": 7.4,
    "wikipedia": "Monaco",
    "city": "Monaco"
  },
  "bern": {
    "lat": 46.95,
    "lon": 7.45,
    "wikipedia": "Bern",
    "city": "Bern"
  },
  "abuja": {
    "lat": 9.067,
    "lon": 7.483,
    "wikipedia": "Abuja",
    "city": "Abuja"
  },
  "enugu": {
    "lat": 6.45,
    "lon": 7.5,
    "wikipedia": "Enugu",
    "city": "Enugu"
  },
  "turin": {
    "lat": 45.067,
    "lon": 7.7,
    "wikipedia": "Turin",
    "city": "Turin"
  },
  "strasbourg": {
    "lat": 48.583,
    "lon": 7.75,
    "wikipedia": "Strasbourg",
    "city": "Strasbourg"
  },
  "kano": {
    "lat": 12.0,
    "lon": 8.517,
    "wikipedia": "Kano",
    "city": "Kano"
  },
  "z%c3%bcrich": {
    "lat": 47.367,
    "lon": 8.55,
    "wikipedia": "Z%C3%BCrich",
    "city": "Z%C3%BCrich"
  },
  "frankfurt": {
    "lat": 50.1,
    "lon": 8.683,
    "wikipedia": "Frankfurt",
    "city": "Frankfurt"
  },
  "malabo": {
    "lat": 3.75,
    "lon": 8.767,
    "wikipedia": "Malabo",
    "city": "Malabo"
  },
  "stuttgart": {
    "lat": 48.767,
    "lon": 9.167,
    "wikipedia": "Stuttgart",
    "city": "Stuttgart"
  },
  "milan": {
    "lat": 45.467,
    "lon": 9.183,
    "wikipedia": "Milan",
    "city": "Milan"
  },
  "libreville": {
    "lat": 0.383,
    "lon": 9.45,
    "wikipedia": "Libreville",
    "city": "Libreville"
  },
  "vaduz": {
    "lat": 47.133,
    "lon": 9.517,
    "wikipedia": "Vaduz",
    "city": "Vaduz"
  },
  "douala": {
    "lat": 4.05,
    "lon": 9.7,
    "wikipedia": "Douala",
    "city": "Douala"
  },
  "hanover": {
    "lat": 52.367,
    "lon": 9.717,
    "wikipedia": "Hanover",
    "city": "Hanover"
  },
  "hamburg": {
    "lat": 53.583,
    "lon": 9.983,
    "wikipedia": "Hamburg",
    "city": "Hamburg"
  },
  "tunis": {
    "lat": 36.8,
    "lon": 10.167,
    "wikipedia": "Tunis",
    "city": "Tunis"
  },
  "aarhus": {
    "lat": 56.15,
    "lon": 10.2,
    "wikipedia": "Aarhus",
    "city": "Aarhus"
  },
  "oslo": {
    "lat": 59.95,
    "lon": 10.75,
    "wikipedia": "Oslo",
    "city": "Oslo"
  },
  "innsbruck": {
    "lat": 47.267,
    "lon": 11.383,
    "wikipedia": "Innsbruck",
    "city": "Innsbruck"
  },
  "yaound%c3%a9": {
    "lat": 3.867,
    "lon": 11.517,
    "wikipedia": "Yaound%C3%A9",
    "city": "Yaound%C3%A9"
  },
  "munich": {
    "lat": 48.133,
    "lon": 11.567,
    "wikipedia": "Munich",
    "city": "Munich"
  },
  "gothenburg": {
    "lat": 57.7,
    "lon": 11.967,
    "wikipedia": "Gothenburg",
    "city": "Gothenburg"
  },
  "leipzig": {
    "lat": 51.333,
    "lon": 12.383,
    "wikipedia": "Leipzig",
    "city": "Leipzig"
  },
  "cityofsanmarino": {
    "lat": 43.933,
    "lon": 12.433,
    "wikipedia": "City_of_San_Marino",
    "city": "City of San Marino"
  },
  "vaticancity": {
    "lat": 41.9,
    "lon": 12.45,
    "wikipedia": "Vatican_City",
    "city": "Vatican City"
  },
  "rome": {
    "lat": 41.9,
    "lon": 12.5,
    "wikipedia": "Rome",
    "city": "Rome"
  },
  "copenhagen": {
    "lat": 55.667,
    "lon": 12.567,
    "wikipedia": "Copenhagen",
    "city": "Copenhagen"
  },
  "malm%c3%b6": {
    "lat": 55.583,
    "lon": 13.033,
    "wikipedia": "Malm%C3%B6",
    "city": "Malm%C3%B6"
  },
  "salzburg": {
    "lat": 47.8,
    "lon": 13.033,
    "wikipedia": "Salzburg",
    "city": "Salzburg"
  },
  "tripoli": {
    "lat": 32.9,
    "lon": 13.183,
    "wikipedia": "Tripoli",
    "city": "Tripoli"
  },
  "luanda": {
    "lat": -8.833,
    "lon": 13.233,
    "wikipedia": "Luanda",
    "city": "Luanda"
  },
  "berlin": {
    "lat": 52.517,
    "lon": 13.417,
    "wikipedia": "Berlin",
    "city": "Berlin"
  },
  "dresden": {
    "lat": 51.05,
    "lon": 13.733,
    "wikipedia": "Dresden",
    "city": "Dresden"
  },
  "naples": {
    "lat": 40.833,
    "lon": 14.25,
    "wikipedia": "Naples",
    "city": "Naples"
  },
  "linz": {
    "lat": 48.3,
    "lon": 14.283,
    "wikipedia": "Linz",
    "city": "Linz"
  },
  "prague": {
    "lat": 50.083,
    "lon": 14.417,
    "wikipedia": "Prague",
    "city": "Prague"
  },
  "sabha": {
    "lat": 27.033,
    "lon": 14.433,
    "wikipedia": "Sabha,_Libya",
    "city": "Sabha"
  },
  "birkirkara": {
    "lat": 35.883,
    "lon": 14.45,
    "wikipedia": "Birkirkara",
    "city": "Birkirkara"
  },
  "ljubljana": {
    "lat": 46.067,
    "lon": 14.5,
    "wikipedia": "Ljubljana",
    "city": "Ljubljana"
  },
  "valletta": {
    "lat": 35.9,
    "lon": 14.5,
    "wikipedia": "Valletta",
    "city": "Valletta"
  },
  "n%27djamena": {
    "lat": 12.1,
    "lon": 15.05,
    "wikipedia": "N%27Djamena",
    "city": "N%27Djamena"
  },
  "brazzaville": {
    "lat": -4.267,
    "lon": 15.283,
    "wikipedia": "Brazzaville",
    "city": "Brazzaville"
  },
  "kinshasa": {
    "lat": -4.317,
    "lon": 15.317,
    "wikipedia": "Kinshasa",
    "city": "Kinshasa"
  },
  "graz": {
    "lat": 47.067,
    "lon": 15.433,
    "wikipedia": "Graz",
    "city": "Graz"
  },
  "longyearbyen": {
    "lat": 78.217,
    "lon": 15.55,
    "wikipedia": "Longyearbyen",
    "city": "Longyearbyen"
  },
  "zagreb": {
    "lat": 45.817,
    "lon": 15.983,
    "wikipedia": "Zagreb",
    "city": "Zagreb"
  },
  "vienna": {
    "lat": 48.2,
    "lon": 16.367,
    "wikipedia": "Vienna",
    "city": "Vienna"
  },
  "split": {
    "lat": 43.5,
    "lon": 16.433,
    "wikipedia": "Split_(city)",
    "city": "Split (city)"
  },
  "bratislava": {
    "lat": 48.133,
    "lon": 17.1,
    "wikipedia": "Bratislava",
    "city": "Bratislava"
  },
  "stockholm": {
    "lat": 59.35,
    "lon": 18.067,
    "wikipedia": "Stockholm",
    "city": "Stockholm"
  },
  "sarajevo": {
    "lat": 43.85,
    "lon": 18.35,
    "wikipedia": "Sarajevo",
    "city": "Sarajevo"
  },
  "capetown": {
    "lat": -33.917,
    "lon": 18.417,
    "wikipedia": "Cape_Town",
    "city": "Cape Town"
  },
  "bangui": {
    "lat": 4.35,
    "lon": 18.583,
    "wikipedia": "Bangui",
    "city": "Bangui"
  },
  "gda%c5%84sk": {
    "lat": 54.35,
    "lon": 18.667,
    "wikipedia": "Gda%C5%84sk",
    "city": "Gda%C5%84sk"
  },
  "budapest": {
    "lat": 47.467,
    "lon": 19.05,
    "wikipedia": "Budapest",
    "city": "Budapest"
  },
  "podgorica": {
    "lat": 42.467,
    "lon": 19.267,
    "wikipedia": "Podgorica",
    "city": "Podgorica"
  },
  "tirana": {
    "lat": 41.317,
    "lon": 19.817,
    "wikipedia": "Tirana",
    "city": "Tirana"
  },
  "krak%c3%b3w": {
    "lat": 50.05,
    "lon": 19.933,
    "wikipedia": "Krak%C3%B3w",
    "city": "Krak%C3%B3w"
  },
  "belgrade": {
    "lat": 44.817,
    "lon": 20.45,
    "wikipedia": "Belgrade",
    "city": "Belgrade"
  },
  "kaliningrad": {
    "lat": 54.717,
    "lon": 20.517,
    "wikipedia": "Kaliningrad",
    "city": "Kaliningrad"
  },
  "warsaw": {
    "lat": 52.233,
    "lon": 21.0,
    "wikipedia": "Warsaw",
    "city": "Warsaw"
  },
  "pristina": {
    "lat": 42.667,
    "lon": 21.167,
    "wikipedia": "Pristina",
    "city": "Pristina"
  },
  "skopje": {
    "lat": 42.0,
    "lon": 21.433,
    "wikipedia": "Skopje",
    "city": "Skopje"
  },
  "thessaloniki": {
    "lat": 40.633,
    "lon": 22.95,
    "wikipedia": "Thessaloniki",
    "city": "Thessaloniki"
  },
  "sofia": {
    "lat": 42.7,
    "lon": 23.333,
    "wikipedia": "Sofia",
    "city": "Sofia"
  },
  "athens": {
    "lat": 37.967,
    "lon": 23.717,
    "wikipedia": "Athens",
    "city": "Athens"
  },
  "tampere": {
    "lat": 61.5,
    "lon": 23.75,
    "wikipedia": "Tampere",
    "city": "Tampere"
  },
  "lviv": {
    "lat": 49.85,
    "lon": 24.017,
    "wikipedia": "Lviv",
    "city": "Lviv"
  },
  "riga": {
    "lat": 56.967,
    "lon": 24.133,
    "wikipedia": "Riga",
    "city": "Riga"
  },
  "espoo": {
    "lat": 60.2,
    "lon": 24.65,
    "wikipedia": "Espoo",
    "city": "Espoo"
  },
  "tallinn": {
    "lat": 59.433,
    "lon": 24.75,
    "wikipedia": "Tallinn",
    "city": "Tallinn"
  },
  "helsinki": {
    "lat": 60.167,
    "lon": 24.933,
    "wikipedia": "Helsinki",
    "city": "Helsinki"
  },
  "vilnius": {
    "lat": 54.683,
    "lon": 25.283,
    "wikipedia": "Vilnius",
    "city": "Vilnius"
  },
  "portelizabeth": {
    "lat": -33.95,
    "lon": 25.6,
    "wikipedia": "Port_Elizabeth",
    "city": "Port Elizabeth"
  },
  "livingstone": {
    "lat": -17.85,
    "lon": 25.867,
    "wikipedia": "Livingstone,_Zambia",
    "city": "Livingstone"
  },
  "gaborone": {
    "lat": -24.65,
    "lon": 25.9,
    "wikipedia": "Gaborone",
    "city": "Gaborone"
  },
  "bucharest": {
    "lat": 44.433,
    "lon": 26.1,
    "wikipedia": "Bucharest",
    "city": "Bucharest"
  },
  "bloemfontein": {
    "lat": -29.1,
    "lon": 26.217,
    "wikipedia": "Bloemfontein",
    "city": "Bloemfontein"
  },
  "tartu": {
    "lat": 58.383,
    "lon": 26.717,
    "wikipedia": "Tartu",
    "city": "Tartu"
  },
  "%c4%b0zmir": {
    "lat": 38.433,
    "lon": 27.15,
    "wikipedia": "%C4%B0zmir",
    "city": "%C4%B0zmir"
  },
  "lubumbashi": {
    "lat": -11.667,
    "lon": 27.467,
    "wikipedia": "Lubumbashi",
    "city": "Lubumbashi"
  },
  "maseru": {
    "lat": -29.3,
    "lon": 27.467,
    "wikipedia": "Maseru",
    "city": "Maseru"
  },
  "francistown": {
    "lat": -21.167,
    "lon": 27.5,
    "wikipedia": "Francistown",
    "city": "Francistown"
  },
  "minsk": {
    "lat": 53.9,
    "lon": 27.567,
    "wikipedia": "Minsk",
    "city": "Minsk"
  },
  "johannesburg": {
    "lat": -26.2,
    "lon": 28.033,
    "wikipedia": "Johannesburg",
    "city": "Johannesburg"
  },
  "pretoria": {
    "lat": -25.733,
    "lon": 28.183,
    "wikipedia": "Pretoria",
    "city": "Pretoria"
  },
  "lusaka": {
    "lat": -15.417,
    "lon": 28.283,
    "wikipedia": "Lusaka",
    "city": "Lusaka"
  },
  "ndola": {
    "lat": -12.967,
    "lon": 28.633,
    "wikipedia": "Ndola",
    "city": "Ndola"
  },
  "bulawayo": {
    "lat": -20.167,
    "lon": 28.567,
    "wikipedia": "Bulawayo",
    "city": "Bulawayo"
  },
  "chi%c5%9fin%c4%83u": {
    "lat": 47.0,
    "lon": 28.867,
    "wikipedia": "Chi%C5%9Fin%C4%83u",
    "city": "Chi%C5%9Fin%C4%83u"
  },
  "istanbul": {
    "lat": 41.0,
    "lon": 28.967,
    "wikipedia": "Istanbul",
    "city": "Istanbul"
  },
  "bursa": {
    "lat": 40.183,
    "lon": 29.067,
    "wikipedia": "Bursa",
    "city": "Bursa"
  },
  "bujumbura": {
    "lat": -3.383,
    "lon": 29.367,
    "wikipedia": "Bujumbura",
    "city": "Bujumbura"
  },
  "tiraspol": {
    "lat": 46.85,
    "lon": 29.633,
    "wikipedia": "Tiraspol",
    "city": "Tiraspol"
  },
  "alexandria": {
    "lat": 31.2,
    "lon": 29.917,
    "wikipedia": "Alexandria",
    "city": "Alexandria"
  },
  "kigali": {
    "lat": -1.933,
    "lon": 30.05,
    "wikipedia": "Kigali",
    "city": "Kigali"
  },
  "saintpetersburg": {
    "lat": 59.933,
    "lon": 30.333,
    "wikipedia": "Saint_Petersburg",
    "city": "Saint Petersburg"
  },
  "kiev": {
    "lat": 50.45,
    "lon": 30.517,
    "wikipedia": "Kiev",
    "city": "Kiev"
  },
  "odessa": {
    "lat": 46.467,
    "lon": 30.733,
    "wikipedia": "Odessa",
    "city": "Odessa"
  },
  "harare": {
    "lat": -17.817,
    "lon": 31.05,
    "wikipedia": "Harare",
    "city": "Harare"
  },
  "durban": {
    "lat": -29.883,
    "lon": 31.05,
    "wikipedia": "Durban",
    "city": "Durban"
  },
  "mbabane": {
    "lat": -26.317,
    "lon": 31.133,
    "wikipedia": "Mbabane",
    "city": "Mbabane"
  },
  "lobamba": {
    "lat": -26.467,
    "lon": 31.2,
    "wikipedia": "Lobamba",
    "city": "Lobamba"
  },
  "cairo": {
    "lat": 30.05,
    "lon": 31.217,
    "wikipedia": "Cairo",
    "city": "Cairo"
  },
  "manzini": {
    "lat": -26.483,
    "lon": 31.367,
    "wikipedia": "Manzini,_Swaziland",
    "city": "Manzini"
  },
  "portsaid": {
    "lat": 31.25,
    "lon": 32.283,
    "wikipedia": "Port_Said",
    "city": "Port Said"
  },
  "konya": {
    "lat": 37.867,
    "lon": 32.483,
    "wikipedia": "Konya",
    "city": "Konya"
  },
  "omdurman": {
    "lat": 15.65,
    "lon": 32.483,
    "wikipedia": "Omdurman",
    "city": "Omdurman"
  },
  "khartoum": {
    "lat": 15.633,
    "lon": 32.533,
    "wikipedia": "Khartoum",
    "city": "Khartoum"
  },
  "suez": {
    "lat": 29.967,
    "lon": 32.55,
    "wikipedia": "Suez",
    "city": "Suez"
  },
  "maputo": {
    "lat": -25.967,
    "lon": 32.583,
    "wikipedia": "Maputo",
    "city": "Maputo"
  },
  "luxor": {
    "lat": 25.683,
    "lon": 32.65,
    "wikipedia": "Luxor",
    "city": "Luxor"
  },
  "ankara": {
    "lat": 39.867,
    "lon": 32.833,
    "wikipedia": "Ankara",
    "city": "Ankara"
  },
  "mwanza": {
    "lat": -2.517,
    "lon": 32.9,
    "wikipedia": "Mwanza",
    "city": "Mwanza"
  },
  "murmansk": {
    "lat": 68.967,
    "lon": 33.083,
    "wikipedia": "Murmansk",
    "city": "Murmansk"
  },
  "nicosia": {
    "lat": 35.167,
    "lon": 33.35,
    "wikipedia": "Nicosia",
    "city": "Nicosia"
  },
  "lilongwe": {
    "lat": -13.983,
    "lon": 33.783,
    "wikipedia": "Lilongwe",
    "city": "Lilongwe"
  },
  "simferopol": {
    "lat": 44.95,
    "lon": 34.1,
    "wikipedia": "Simferopol",
    "city": "Simferopol"
  },
  "gaza": {
    "lat": 31.517,
    "lon": 34.45,
    "wikipedia": "Gaza",
    "city": "Gaza"
  },
  "mersin": {
    "lat": 36.8,
    "lon": 34.633,
    "wikipedia": "Mersin",
    "city": "Mersin"
  },
  "telaviv": {
    "lat": 32.083,
    "lon": 34.8,
    "wikipedia": "Tel_Aviv",
    "city": "Tel Aviv"
  },
  "blantyre": {
    "lat": -15.783,
    "lon": 35.0,
    "wikipedia": "Blantyre,_Malawi",
    "city": "Blantyre"
  },
  "jerusalem": {
    "lat": 31.783,
    "lon": 35.217,
    "wikipedia": "Jerusalem",
    "city": "Jerusalem"
  },
  "adana": {
    "lat": 37.0,
    "lon": 35.317,
    "wikipedia": "Adana",
    "city": "Adana"
  },
  "beirut": {
    "lat": 33.883,
    "lon": 35.5,
    "wikipedia": "Beirut",
    "city": "Beirut"
  },
  "dodoma": {
    "lat": -6.167,
    "lon": 35.733,
    "wikipedia": "Dodoma",
    "city": "Dodoma"
  },
  "amman": {
    "lat": 31.95,
    "lon": 35.933,
    "wikipedia": "Amman",
    "city": "Amman"
  },
  "damascus": {
    "lat": 33.5,
    "lon": 36.283,
    "wikipedia": "Damascus",
    "city": "Damascus"
  },
  "kharkiv": {
    "lat": 49.917,
    "lon": 36.317,
    "wikipedia": "Kharkiv",
    "city": "Kharkiv"
  },
  "nairobi": {
    "lat": -1.283,
    "lon": 36.817,
    "wikipedia": "Nairobi",
    "city": "Nairobi"
  },
  "gaziantep": {
    "lat": 37.067,
    "lon": 37.383,
    "wikipedia": "Gaziantep",
    "city": "Gaziantep"
  },
  "moscow": {
    "lat": 55.75,
    "lon": 37.6,
    "wikipedia": "Moscow",
    "city": "Moscow"
  },
  "addisababa": {
    "lat": 9.017,
    "lon": 38.733,
    "wikipedia": "Addis_Ababa",
    "city": "Addis Ababa"
  },
  "asmara": {
    "lat": 15.333,
    "lon": 38.933,
    "wikipedia": "Asmara",
    "city": "Asmara"
  },
  "jeddah": {
    "lat": 21.533,
    "lon": 39.167,
    "wikipedia": "Jeddah",
    "city": "Jeddah"
  },
  "zanzibarcity": {
    "lat": -6.167,
    "lon": 39.2,
    "wikipedia": "Zanzibar_City",
    "city": "Zanzibar City"
  },
  "daressalaam": {
    "lat": -6.817,
    "lon": 39.267,
    "wikipedia": "Dar_es_Salaam",
    "city": "Dar es Salaam"
  },
  "medina": {
    "lat": 24.467,
    "lon": 39.6,
    "wikipedia": "Medina",
    "city": "Medina"
  },
  "mecca": {
    "lat": 21.417,
    "lon": 39.817,
    "wikipedia": "Mecca",
    "city": "Mecca"
  },
  "sukhumi": {
    "lat": 43.0,
    "lon": 41.017,
    "wikipedia": "Sukhumi",
    "city": "Sukhumi"
  },
  "djibouti": {
    "lat": 11.583,
    "lon": 43.133,
    "wikipedia": "Djibouti_(city)",
    "city": "Djibouti (city)"
  },
  "moroni": {
    "lat": -11.75,
    "lon": 43.2,
    "wikipedia": "Moroni,_Comoros",
    "city": "Moroni"
  },
  "tskhinvali": {
    "lat": 42.233,
    "lon": 43.967,
    "wikipedia": "Tskhinvali",
    "city": "Tskhinvali"
  },
  "sana%27a": {
    "lat": 15.35,
    "lon": 44.2,
    "wikipedia": "Sana%27a",
    "city": "Sana%27a"
  },
  "baghdad": {
    "lat": 33.317,
    "lon": 44.417,
    "wikipedia": "Baghdad",
    "city": "Baghdad"
  },
  "nizhnynovgorod": {
    "lat": 56.333,
    "lon": 44.0,
    "wikipedia": "Nizhny_Novgorod",
    "city": "Nizhny Novgorod"
  },
  "hargeisa": {
    "lat": 9.5,
    "lon": 44.0,
    "wikipedia": "Hargeisa",
    "city": "Hargeisa"
  },
  "arbil": {
    "lat": 36.333,
    "lon": 44.017,
    "wikipedia": "Arbil",
    "city": "Arbil"
  },
  "yerevan": {
    "lat": 40.183,
    "lon": 44.517,
    "wikipedia": "Yerevan",
    "city": "Yerevan"
  },
  "tbilisi": {
    "lat": 41.717,
    "lon": 44.783,
    "wikipedia": "Tbilisi",
    "city": "Tbilisi"
  },
  "mamoudzou": {
    "lat": -12.783,
    "lon": 45.217,
    "wikipedia": "Mamoudzou",
    "city": "Mamoudzou"
  },
  "mogadishu": {
    "lat": 2.033,
    "lon": 45.35,
    "wikipedia": "Mogadishu",
    "city": "Mogadishu"
  },
  "tabriz": {
    "lat": 38.083,
    "lon": 46.283,
    "wikipedia": "Tabriz",
    "city": "Tabriz"
  },
  "riyadh": {
    "lat": 24.7,
    "lon": 46.717,
    "wikipedia": "Riyadh",
    "city": "Riyadh"
  },
  "stepanakert": {
    "lat": 39.817,
    "lon": 46.75,
    "wikipedia": "Stepanakert",
    "city": "Stepanakert"
  },
  "antananarivo": {
    "lat": -18.933,
    "lon": 47.517,
    "wikipedia": "Antananarivo",
    "city": "Antananarivo"
  },
  "basra": {
    "lat": 30.5,
    "lon": 47.817,
    "wikipedia": "Basra",
    "city": "Basra"
  },
  "kuwaitcity": {
    "lat": 29.367,
    "lon": 47.967,
    "wikipedia": "Kuwait_City",
    "city": "Kuwait City"
  },
  "baku": {
    "lat": 40.367,
    "lon": 49.883,
    "wikipedia": "Baku",
    "city": "Baku"
  },
  "dammam": {
    "lat": 26.433,
    "lon": 50.117,
    "wikipedia": "Dammam",
    "city": "Dammam"
  },
  "samara": {
    "lat": 53.233,
    "lon": 50.167,
    "wikipedia": "Samara,_Russia",
    "city": "Samara"
  },
  "manama": {
    "lat": 26.217,
    "lon": 50.583,
    "wikipedia": "Manama",
    "city": "Manama"
  },
  "tehran": {
    "lat": 35.683,
    "lon": 51.417,
    "wikipedia": "Tehran",
    "city": "Tehran"
  },
  "doha": {
    "lat": 25.283,
    "lon": 51.533,
    "wikipedia": "Doha",
    "city": "Doha"
  },
  "abudhabi": {
    "lat": 24.467,
    "lon": 54.367,
    "wikipedia": "Abu_Dhabi",
    "city": "Abu Dhabi"
  },
  "dubai": {
    "lat": 25.267,
    "lon": 55.3,
    "wikipedia": "Dubai",
    "city": "Dubai"
  },
  "victoria": {
    "lat": -4.617,
    "lon": 55.45,
    "wikipedia": "Victoria,_Seychelles",
    "city": "Victoria"
  },
  "saintdenis": {
    "lat": -20.867,
    "lon": 55.45,
    "wikipedia": "Saint-Denis,_R%C3%A9union",
    "city": "Saint-Denis"
  },
  "perm": {
    "lat": 58.0,
    "lon": 56.317,
    "wikipedia": "Perm",
    "city": "Perm"
  },
  "portlouis": {
    "lat": -20.167,
    "lon": 57.5,
    "wikipedia": "Port_Louis",
    "city": "Port Louis"
  },
  "ashgabat": {
    "lat": 37.967,
    "lon": 58.333,
    "wikipedia": "Ashgabat",
    "city": "Ashgabat"
  },
  "muscat": {
    "lat": 23.6,
    "lon": 58.533,
    "wikipedia": "Muscat,_Oman",
    "city": "Muscat"
  },
  "nukus": {
    "lat": 42.467,
    "lon": 59.6,
    "wikipedia": "Nukus",
    "city": "Nukus"
  },
  "mashhad": {
    "lat": 36.3,
    "lon": 59.6,
    "wikipedia": "Mashhad",
    "city": "Mashhad"
  },
  "yekaterinburg": {
    "lat": 56.833,
    "lon": 60.583,
    "wikipedia": "Yekaterinburg",
    "city": "Yekaterinburg"
  },
  "kandahar": {
    "lat": 31.617,
    "lon": 65.717,
    "wikipedia": "Kandahar",
    "city": "Kandahar"
  },
  "karachi": {
    "lat": 24.85,
    "lon": 67.0,
    "wikipedia": "Karachi",
    "city": "Karachi"
  },
  "hyderabad": {
    "lat": 17.367,
    "lon": 78.467,
    "wikipedia": "Hyderabad,_Andhra_Pradesh",
    "city": "Hyderabad"
  },
  "dushanbe": {
    "lat": 38.533,
    "lon": 68.767,
    "wikipedia": "Dushanbe",
    "city": "Dushanbe"
  },
  "kabul": {
    "lat": 34.533,
    "lon": 69.167,
    "wikipedia": "Kabul",
    "city": "Kabul"
  },
  "tashkent": {
    "lat": 41.267,
    "lon": 69.217,
    "wikipedia": "Tashkent",
    "city": "Tashkent"
  },
  "astana": {
    "lat": 51.183,
    "lon": 71.45,
    "wikipedia": "Astana",
    "city": "Astana"
  },
  "multan": {
    "lat": 30.2,
    "lon": 71.45,
    "wikipedia": "Multan",
    "city": "Multan"
  },
  "peshawar": {
    "lat": 34.0,
    "lon": 71.5,
    "wikipedia": "Peshawar",
    "city": "Peshawar"
  },
  "namangan": {
    "lat": 41.633,
    "lon": 71.967,
    "wikipedia": "Namangan",
    "city": "Namangan"
  },
  "ahmedabad": {
    "lat": 23.017,
    "lon": 72.567,
    "wikipedia": "Ahmedabad",
    "city": "Ahmedabad"
  },
  "mumbai": {
    "lat": 18.95,
    "lon": 72.817,
    "wikipedia": "Mumbai",
    "city": "Mumbai"
  },
  "surat": {
    "lat": 21.167,
    "lon": 72.817,
    "wikipedia": "Surat,_Gujarat",
    "city": "Surat"
  },
  "faisalabad": {
    "lat": 31.367,
    "lon": 72.983,
    "wikipedia": "Faisalabad",
    "city": "Faisalabad"
  },
  "rawalpindi": {
    "lat": 33.6,
    "lon": 73.033,
    "wikipedia": "Rawalpindi",
    "city": "Rawalpindi"
  },
  "islamabad": {
    "lat": 33.717,
    "lon": 73.067,
    "wikipedia": "Islamabad",
    "city": "Islamabad"
  },
  "omsk": {
    "lat": 54.983,
    "lon": 73.367,
    "wikipedia": "Omsk",
    "city": "Omsk"
  },
  "mal%c3%a9": {
    "lat": 4.167,
    "lon": 73.5,
    "wikipedia": "Mal%C3%A9",
    "city": "Mal%C3%A9"
  },
  "pune": {
    "lat": 18.517,
    "lon": 73.85,
    "wikipedia": "Pune",
    "city": "Pune"
  },
  "lahore": {
    "lat": 31.55,
    "lon": 74.333,
    "wikipedia": "Lahore",
    "city": "Lahore"
  },
  "bishkek": {
    "lat": 42.867,
    "lon": 74.6,
    "wikipedia": "Bishkek",
    "city": "Bishkek"
  },
  "srinagar": {
    "lat": 34.083,
    "lon": 74.783,
    "wikipedia": "Srinagar",
    "city": "Srinagar"
  },
  "amritsar": {
    "lat": 31.633,
    "lon": 74.85,
    "wikipedia": "Amritsar",
    "city": "Amritsar"
  },
  "jaipur": {
    "lat": 26.917,
    "lon": 75.817,
    "wikipedia": "Jaipur",
    "city": "Jaipur"
  },
  "ludhiana": {
    "lat": 30.9,
    "lon": 75.85,
    "wikipedia": "Ludhiana",
    "city": "Ludhiana"
  },
  "almaty": {
    "lat": 43.267,
    "lon": 76.883,
    "wikipedia": "Almaty",
    "city": "Almaty"
  },
  "newdelhi": {
    "lat": 28.617,
    "lon": 77.2,
    "wikipedia": "New_Delhi",
    "city": "New Delhi"
  },
  "bangalore": {
    "lat": 12.967,
    "lon": 77.567,
    "wikipedia": "Bangalore",
    "city": "Bangalore"
  },
  "nagpur": {
    "lat": 21.067,
    "lon": 79.017,
    "wikipedia": "Nagpur",
    "city": "Nagpur"
  },
  "colombo": {
    "lat": 6.883,
    "lon": 79.867,
    "wikipedia": "Colombo",
    "city": "Colombo"
  },
  "srijayawardenapurakotte": {
    "lat": 6.9,
    "lon": 79.883,
    "wikipedia": "Sri_Jayawardenapura-Kotte",
    "city": "Sri Jayawardenapura-Kotte"
  },
  "chennai": {
    "lat": 13.083,
    "lon": 80.267,
    "wikipedia": "Chennai",
    "city": "Chennai"
  },
  "kanpur": {
    "lat": 26.45,
    "lon": 80.333,
    "wikipedia": "Kanpur",
    "city": "Kanpur"
  },
  "kandy": {
    "lat": 7.283,
    "lon": 80.633,
    "wikipedia": "Kandy",
    "city": "Kandy"
  },
  "lucknow": {
    "lat": 26.85,
    "lon": 80.917,
    "wikipedia": "Lucknow",
    "city": "Lucknow"
  },
  "batticaloa": {
    "lat": 7.717,
    "lon": 81.7,
    "wikipedia": "Batticaloa",
    "city": "Batticaloa"
  },
  "novosibirsk": {
    "lat": 55.017,
    "lon": 82.933,
    "wikipedia": "Novosibirsk",
    "city": "Novosibirsk"
  },
  "patna": {
    "lat": 25.6,
    "lon": 85.133,
    "wikipedia": "Patna",
    "city": "Patna"
  },
  "kathmandu": {
    "lat": 27.7,
    "lon": 85.333,
    "wikipedia": "Kathmandu",
    "city": "Kathmandu"
  },
  "%c3%9cr%c3%bcmqi": {
    "lat": 43.8,
    "lon": 87.583,
    "wikipedia": "%C3%9Cr%C3%BCmqi",
    "city": "%C3%9Cr%C3%BCmqi"
  },
  "norilsk": {
    "lat": 69.35,
    "lon": 88.2,
    "wikipedia": "Norilsk",
    "city": "Norilsk"
  },
  "kolkata": {
    "lat": 22.567,
    "lon": 88.367,
    "wikipedia": "Kolkata",
    "city": "Kolkata"
  },
  "gangtok": {
    "lat": 27.317,
    "lon": 88.617,
    "wikipedia": "Gangtok",
    "city": "Gangtok"
  },
  "shigatse": {
    "lat": 29.267,
    "lon": 88.867,
    "wikipedia": "Shigatse",
    "city": "Shigatse"
  },
  "thimphu": {
    "lat": 27.467,
    "lon": 89.633,
    "wikipedia": "Thimphu",
    "city": "Thimphu"
  },
  "dhaka": {
    "lat": 23.7,
    "lon": 90.367,
    "wikipedia": "Dhaka",
    "city": "Dhaka"
  },
  "lhasa": {
    "lat": 29.65,
    "lon": 91.117,
    "wikipedia": "Lhasa",
    "city": "Lhasa"
  },
  "agartala": {
    "lat": 23.5,
    "lon": 91.2,
    "wikipedia": "Agartala",
    "city": "Agartala"
  },
  "guwahati": {
    "lat": 26.167,
    "lon": 91.767,
    "wikipedia": "Guwahati",
    "city": "Guwahati"
  },
  "chittagong": {
    "lat": 22.367,
    "lon": 91.8,
    "wikipedia": "Chittagong",
    "city": "Chittagong"
  },
  "shillong": {
    "lat": 25.567,
    "lon": 91.883,
    "wikipedia": "Shillong",
    "city": "Shillong"
  },
  "portblair": {
    "lat": 11.667,
    "lon": 92.75,
    "wikipedia": "Port_Blair",
    "city": "Port Blair"
  },
  "dibrugarh": {
    "lat": 27.467,
    "lon": 94.9,
    "wikipedia": "Dibrugarh",
    "city": "Dibrugarh"
  },
  "bandaaceh": {
    "lat": 5.55,
    "lon": 95.317,
    "wikipedia": "Banda_Aceh",
    "city": "Banda Aceh"
  },
  "naypyidaw": {
    "lat": 19.75,
    "lon": 96.1,
    "wikipedia": "Naypyidaw",
    "city": "Naypyidaw"
  },
  "yangon": {
    "lat": 16.8,
    "lon": 96.167,
    "wikipedia": "Yangon",
    "city": "Yangon"
  },
  "medan": {
    "lat": 3.583,
    "lon": 98.667,
    "wikipedia": "Medan",
    "city": "Medan"
  },
  "phuket": {
    "lat": 7.883,
    "lon": 98.4,
    "wikipedia": "Phuket_(city)",
    "city": "Phuket (city)"
  },
  "chiangmai": {
    "lat": 18.783,
    "lon": 98.983,
    "wikipedia": "Chiang_Mai",
    "city": "Chiang Mai"
  },
  "suratthani": {
    "lat": 9.133,
    "lon": 99.333,
    "wikipedia": "Surat_Thani",
    "city": "Surat Thani"
  },
  "padang": {
    "lat": -0.95,
    "lon": 100.35,
    "wikipedia": "Padang,_Indonesia",
    "city": "Padang"
  },
  "alorstar": {
    "lat": 6.117,
    "lon": 100.367,
    "wikipedia": "Alor_Star",
    "city": "Alor Star"
  },
  "hatyai": {
    "lat": 7.017,
    "lon": 100.467,
    "wikipedia": "Hat_Yai",
    "city": "Hat Yai"
  },
  "bangkok": {
    "lat": 13.75,
    "lon": 100.483,
    "wikipedia": "Bangkok",
    "city": "Bangkok"
  },
  "pattaya": {
    "lat": 12.917,
    "lon": 100.867,
    "wikipedia": "Pattaya",
    "city": "Pattaya"
  },
  "ipoh": {
    "lat": 4.6,
    "lon": 101.067,
    "wikipedia": "Ipoh",
    "city": "Ipoh"
  },
  "pekanbaru": {
    "lat": 0.533,
    "lon": 101.45,
    "wikipedia": "Pekanbaru",
    "city": "Pekanbaru"
  },
  "bratsk": {
    "lat": 56.167,
    "lon": 101.617,
    "wikipedia": "Bratsk",
    "city": "Bratsk"
  },
  "kualalumpur": {
    "lat": 3.133,
    "lon": 101.683,
    "wikipedia": "Kuala_Lumpur",
    "city": "Kuala Lumpur"
  },
  "xining": {
    "lat": 36.633,
    "lon": 101.767,
    "wikipedia": "Xining",
    "city": "Xining"
  },
  "nakhonratchasima": {
    "lat": 14.967,
    "lon": 102.1,
    "wikipedia": "Nakhon_Ratchasima",
    "city": "Nakhon Ratchasima"
  },
  "kotabharu": {
    "lat": 6.133,
    "lon": 102.25,
    "wikipedia": "Kota_Bharu",
    "city": "Kota Bharu"
  },
  "malaccatown": {
    "lat": 2.183,
    "lon": 102.383,
    "wikipedia": "Malacca_Town",
    "city": "Malacca Town"
  },
  "vientiane": {
    "lat": 17.95,
    "lon": 102.617,
    "wikipedia": "Vientiane",
    "city": "Vientiane"
  },
  "kunming": {
    "lat": 25.067,
    "lon": 102.683,
    "wikipedia": "Kunming",
    "city": "Kunming"
  },
  "udonthani": {
    "lat": 17.417,
    "lon": 102.75,
    "wikipedia": "Udon_Thani",
    "city": "Udon Thani"
  },
  "johorbahru": {
    "lat": 1.483,
    "lon": 103.733,
    "wikipedia": "Johor_Bahru",
    "city": "Johor Bahru"
  },
  "lanzhou": {
    "lat": 36.033,
    "lon": 103.8,
    "wikipedia": "Lanzhou",
    "city": "Lanzhou"
  },
  "singapore": {
    "lat": 1.367,
    "lon": 103.8,
    "wikipedia": "Singapore",
    "city": "Singapore"
  },
  "siemreap": {
    "lat": 13.35,
    "lon": 103.85,
    "wikipedia": "Siem_Reap",
    "city": "Siem Reap"
  },
  "chengdu": {
    "lat": 30.65,
    "lon": 104.067,
    "wikipedia": "Chengdu",
    "city": "Chengdu"
  },
  "palembang": {
    "lat": -2.983,
    "lon": 104.75,
    "wikipedia": "Palembang",
    "city": "Palembang"
  },
  "phnompenh": {
    "lat": 11.55,
    "lon": 104.917,
    "wikipedia": "Phnom_Penh",
    "city": "Phnom Penh"
  },
  "hanoi": {
    "lat": 21.033,
    "lon": 105.85,
    "wikipedia": "Hanoi",
    "city": "Hanoi"
  },
  "chongqing": {
    "lat": 29.55,
    "lon": 106.5,
    "wikipedia": "Chongqing",
    "city": "Chongqing"
  },
  "haiphong": {
    "lat": 20.85,
    "lon": 106.683,
    "wikipedia": "Hai_Phong",
    "city": "Hai Phong"
  },
  "hochiminhcity": {
    "lat": 10.767,
    "lon": 106.683,
    "wikipedia": "Ho_Chi_Minh_City",
    "city": "Ho Chi Minh City"
  },
  "jakarta": {
    "lat": -6.133,
    "lon": 106.75,
    "wikipedia": "Jakarta",
    "city": "Jakarta"
  },
  "bogor": {
    "lat": -6.6,
    "lon": 106.8,
    "wikipedia": "Bogor",
    "city": "Bogor"
  },
  "ulanbator": {
    "lat": 47.917,
    "lon": 106.917,
    "wikipedia": "Ulan_Bator",
    "city": "Ulan Bator"
  },
  "bandung": {
    "lat": -6.95,
    "lon": 107.567,
    "wikipedia": "Bandung",
    "city": "Bandung"
  },
  "hu%e1%ba%bf": {
    "lat": 16.467,
    "lon": 107.6,
    "wikipedia": "Hu%E1%BA%BF",
    "city": "Hu%E1%BA%BF"
  },
  "danang": {
    "lat": 16.067,
    "lon": 108.233,
    "wikipedia": "Da_Nang",
    "city": "Da Nang"
  },
  "nanning": {
    "lat": 22.817,
    "lon": 108.317,
    "wikipedia": "Nanning",
    "city": "Nanning"
  },
  "xi%27an": {
    "lat": 34.267,
    "lon": 108.9,
    "wikipedia": "Xi%27an",
    "city": "Xi%27an"
  },
  "pontianak": {
    "lat": 0.0,
    "lon": 109.333,
    "wikipedia": "Pontianak,_Indonesia",
    "city": "Pontianak"
  },
  "kuching": {
    "lat": 1.55,
    "lon": 110.35,
    "wikipedia": "Kuching",
    "city": "Kuching"
  },
  "yogyakarta": {
    "lat": -7.8,
    "lon": 110.367,
    "wikipedia": "Yogyakarta_(city)",
    "city": "Yogyakarta (city)"
  },
  "semarang": {
    "lat": -6.967,
    "lon": 110.417,
    "wikipedia": "Semarang",
    "city": "Semarang"
  },
  "taiyuan": {
    "lat": 37.867,
    "lon": 112.55,
    "wikipedia": "Taiyuan",
    "city": "Taiyuan"
  },
  "malang": {
    "lat": -7.967,
    "lon": 112.617,
    "wikipedia": "Malang",
    "city": "Malang"
  },
  "surabaya": {
    "lat": -7.233,
    "lon": 112.733,
    "wikipedia": "Surabaya",
    "city": "Surabaya"
  },
  "guangzhou": {
    "lat": 23.1,
    "lon": 113.267,
    "wikipedia": "Guangzhou",
    "city": "Guangzhou"
  },
  "macau": {
    "lat": 22.167,
    "lon": 113.55,
    "wikipedia": "Macau",
    "city": "Macau"
  },
  "zhengzhou": {
    "lat": 34.75,
    "lon": 113.633,
    "wikipedia": "Zhengzhou",
    "city": "Zhengzhou"
  },
  "dongguan": {
    "lat": 23.033,
    "lon": 113.717,
    "wikipedia": "Dongguan",
    "city": "Dongguan"
  },
  "miri": {
    "lat": 4.383,
    "lon": 113.967,
    "wikipedia": "Miri",
    "city": "Miri"
  },
  "shenzhen": {
    "lat": 22.55,
    "lon": 114.1,
    "wikipedia": "Shenzhen",
    "city": "Shenzhen"
  },
  "hongkong": {
    "lat": 22.3,
    "lon": 114.2,
    "wikipedia": "Hong Kong",
    "city": "Hong Kong"
  },
  "wuhan": {
    "lat": 30.567,
    "lon": 114.267,
    "wikipedia": "Wuhan",
    "city": "Wuhan"
  },
  "handan": {
    "lat": 36.6,
    "lon": 114.483,
    "wikipedia": "Handan",
    "city": "Handan"
  },
  "shijiazhuang": {
    "lat": 38.033,
    "lon": 114.5,
    "wikipedia": "Shijiazhuang",
    "city": "Shijiazhuang"
  },
  "bandarseribegawan": {
    "lat": 4.883,
    "lon": 114.933,
    "wikipedia": "Bandar_Seri_Begawan",
    "city": "Bandar Seri Begawan"
  },
  "denpasar": {
    "lat": -8.65,
    "lon": 115.217,
    "wikipedia": "Denpasar",
    "city": "Denpasar"
  },
  "mandurah": {
    "lat": -32.517,
    "lon": 115.717,
    "wikipedia": "Mandurah",
    "city": "Mandurah"
  },
  "perth": {
    "lat": -31.95,
    "lon": 115.85,
    "wikipedia": "Perth,_Western_Australia",
    "city": "Perth"
  },
  "kotakinabalu": {
    "lat": 5.967,
    "lon": 116.083,
    "wikipedia": "Kota_Kinabalu",
    "city": "Kota Kinabalu"
  },
  "beijing": {
    "lat": 39.9,
    "lon": 116.4,
    "wikipedia": "Beijing",
    "city": "Beijing"
  },
  "balikpapan": {
    "lat": -1.25,
    "lon": 116.817,
    "wikipedia": "Balikpapan",
    "city": "Balikpapan"
  },
  "jinan": {
    "lat": 36.667,
    "lon": 116.983,
    "wikipedia": "Jinan",
    "city": "Jinan"
  },
  "tianjin": {
    "lat": 39.133,
    "lon": 117.183,
    "wikipedia": "Tianjin",
    "city": "Tianjin"
  },
  "porthedland": {
    "lat": -20.3,
    "lon": 118.6,
    "wikipedia": "Port_Hedland,_Western_Australia",
    "city": "Port Hedland"
  },
  "nanjing": {
    "lat": 32.05,
    "lon": 118.767,
    "wikipedia": "Nanjing",
    "city": "Nanjing"
  },
  "makassar": {
    "lat": -5.133,
    "lon": 119.417,
    "wikipedia": "Makassar",
    "city": "Makassar"
  },
  "hangzhou": {
    "lat": 30.25,
    "lon": 120.167,
    "wikipedia": "Hangzhou",
    "city": "Hangzhou"
  },
  "kaohsiung": {
    "lat": 22.633,
    "lon": 120.267,
    "wikipedia": "Kaohsiung",
    "city": "Kaohsiung"
  },
  "qingdao": {
    "lat": 36.083,
    "lon": 120.333,
    "wikipedia": "Qingdao",
    "city": "Qingdao"
  },
  "taichung": {
    "lat": 24.15,
    "lon": 120.667,
    "wikipedia": "Taichung",
    "city": "Taichung"
  },
  "manila": {
    "lat": 14.583,
    "lon": 120.967,
    "wikipedia": "Manila",
    "city": "Manila"
  },
  "quezoncity": {
    "lat": 14.633,
    "lon": 121.033,
    "wikipedia": "Quezon_City",
    "city": "Quezon City"
  },
  "makaticity": {
    "lat": 14.55,
    "lon": 121.033,
    "wikipedia": "Makati_City",
    "city": "Makati City"
  },
  "shanghai": {
    "lat": 31.2,
    "lon": 121.5,
    "wikipedia": "Shanghai",
    "city": "Shanghai"
  },
  "taipei": {
    "lat": 25.033,
    "lon": 121.633,
    "wikipedia": "Taipei",
    "city": "Taipei"
  },
  "dalian": {
    "lat": 39.033,
    "lon": 121.767,
    "wikipedia": "Dalian",
    "city": "Dalian"
  },
  "iloilocity": {
    "lat": 10.683,
    "lon": 122.55,
    "wikipedia": "Iloilo_City",
    "city": "Iloilo City"
  },
  "zamboangacity": {
    "lat": 6.9,
    "lon": 122.067,
    "wikipedia": "Zamboanga_City",
    "city": "Zamboanga City"
  },
  "shenyang": {
    "lat": 41.783,
    "lon": 123.45,
    "wikipedia": "Shenyang",
    "city": "Shenyang"
  },
  "tagbilaran": {
    "lat": 9.65,
    "lon": 123.85,
    "wikipedia": "Tagbilaran",
    "city": "Tagbilaran"
  },
  "cebucity": {
    "lat": 10.283,
    "lon": 123.9,
    "wikipedia": "Cebu_City",
    "city": "Cebu City"
  },
  "changchun": {
    "lat": 43.883,
    "lon": 125.317,
    "wikipedia": "Changchun",
    "city": "Changchun"
  },
  "dili": {
    "lat": -8.55,
    "lon": 125.583,
    "wikipedia": "Dili",
    "city": "Dili"
  },
  "pyongyang": {
    "lat": 39.033,
    "lon": 125.75,
    "wikipedia": "Pyongyang",
    "city": "Pyongyang"
  },
  "davaocity": {
    "lat": 7.5,
    "lon": 126.0,
    "wikipedia": "Davao_City",
    "city": "Davao City"
  },
  "kaesong": {
    "lat": 37.967,
    "lon": 126.55,
    "wikipedia": "Kaesong",
    "city": "Kaesong"
  },
  "harbin": {
    "lat": 45.75,
    "lon": 126.633,
    "wikipedia": "Harbin",
    "city": "Harbin"
  },
  "incheon": {
    "lat": 37.483,
    "lon": 126.633,
    "wikipedia": "Incheon",
    "city": "Incheon"
  },
  "seoul": {
    "lat": 37.55,
    "lon": 126.983,
    "wikipedia": "Seoul",
    "city": "Seoul"
  },
  "wonsan": {
    "lat": 39.15,
    "lon": 127.433,
    "wikipedia": "Wonsan",
    "city": "Wonsan"
  },
  "okinawa": {
    "lat": 26.333,
    "lon": 127.8,
    "wikipedia": "Okinawa,_Okinawa",
    "city": "Okinawa"
  },
  "ambon": {
    "lat": -3.7,
    "lon": 128.167,
    "wikipedia": "Ambon,_Maluku",
    "city": "Ambon"
  },
  "daegu": {
    "lat": 35.867,
    "lon": 128.6,
    "wikipedia": "Daegu",
    "city": "Daegu"
  },
  "busan": {
    "lat": 35.1,
    "lon": 129.033,
    "wikipedia": "Busan",
    "city": "Busan"
  },
  "yakutsk": {
    "lat": 62.033,
    "lon": 129.733,
    "wikipedia": "Yakutsk",
    "city": "Yakutsk"
  },
  "chongjin": {
    "lat": 41.8,
    "lon": 129.783,
    "wikipedia": "Chongjin",
    "city": "Chongjin"
  },
  "fukuoka": {
    "lat": 33.583,
    "lon": 130.4,
    "wikipedia": "Fukuoka",
    "city": "Fukuoka"
  },
  "darwin": {
    "lat": -12.45,
    "lon": 130.833,
    "wikipedia": "Darwin,_Northern_Territory",
    "city": "Darwin"
  },
  "vladivostok": {
    "lat": 43.133,
    "lon": 131.9,
    "wikipedia": "Vladivostok",
    "city": "Vladivostok"
  },
  "hiroshima": {
    "lat": 34.383,
    "lon": 132.45,
    "wikipedia": "Hiroshima",
    "city": "Hiroshima"
  },
  "koror": {
    "lat": 7.35,
    "lon": 134.467,
    "wikipedia": "Koror",
    "city": "Koror"
  },
  "melekeok": {
    "lat": 7.5,
    "lon": 134.617,
    "wikipedia": "Melekeok",
    "city": "Melekeok"
  },
  "kobe": {
    "lat": 34.683,
    "lon": 135.2,
    "wikipedia": "Kobe",
    "city": "Kobe"
  },
  "osaka": {
    "lat": 34.683,
    "lon": 135.5,
    "wikipedia": "Osaka",
    "city": "Osaka"
  },
  "kyoto": {
    "lat": 35.017,
    "lon": 135.767,
    "wikipedia": "Kyoto",
    "city": "Kyoto"
  },
  "nagoya": {
    "lat": 35.183,
    "lon": 136.9,
    "wikipedia": "Nagoya",
    "city": "Nagoya"
  },
  "adelaide": {
    "lat": -34.917,
    "lon": 138.6,
    "wikipedia": "Adelaide",
    "city": "Adelaide"
  },
  "yokohama": {
    "lat": 35.45,
    "lon": 139.633,
    "wikipedia": "Yokohama",
    "city": "Yokohama"
  },
  "kawasaki": {
    "lat": 35.517,
    "lon": 139.7,
    "wikipedia": "Kawasaki,_Kanagawa",
    "city": "Kawasaki"
  },
  "tokyo": {
    "lat": 35.683,
    "lon": 139.767,
    "wikipedia": "Tokyo",
    "city": "Tokyo"
  },
  "jayapura": {
    "lat": -2.533,
    "lon": 140.717,
    "wikipedia": "Jayapura",
    "city": "Jayapura"
  },
  "sapporo": {
    "lat": 43.067,
    "lon": 141.35,
    "wikipedia": "Sapporo",
    "city": "Sapporo"
  },
  "geelong": {
    "lat": -38.15,
    "lon": 144.35,
    "wikipedia": "Geelong",
    "city": "Geelong"
  },
  "hag%c3%a5t%c3%b1a": {
    "lat": 13.483,
    "lon": 144.75,
    "wikipedia": "Hag%C3%A5t%C3%B1a,_Guam",
    "city": "Hag%C3%A5t%C3%B1a"
  },
  "dededo": {
    "lat": 13.517,
    "lon": 144.833,
    "wikipedia": "Dededo,_Guam",
    "city": "Dededo"
  },
  "melbourne": {
    "lat": -37.8,
    "lon": 144.95,
    "wikipedia": "Melbourne",
    "city": "Melbourne"
  },
  "saipan": {
    "lat": 15.183,
    "lon": 145.75,
    "wikipedia": "Saipan",
    "city": "Saipan"
  },
  "cairns": {
    "lat": -16.917,
    "lon": 145.767,
    "wikipedia": "Cairns",
    "city": "Cairns"
  },
  "townsville": {
    "lat": -19.25,
    "lon": 146.817,
    "wikipedia": "Townsville",
    "city": "Townsville"
  },
  "portmoresby": {
    "lat": -9.467,
    "lon": 147.167,
    "wikipedia": "Port_Moresby",
    "city": "Port Moresby"
  },
  "hobart": {
    "lat": -42.883,
    "lon": 147.317,
    "wikipedia": "Hobart",
    "city": "Hobart"
  },
  "canberra": {
    "lat": -35.3,
    "lon": 149.117,
    "wikipedia": "Canberra",
    "city": "Canberra"
  },
  "rockhampton": {
    "lat": -23.367,
    "lon": 150.5,
    "wikipedia": "Rockhampton",
    "city": "Rockhampton"
  },
  "magadan": {
    "lat": 59.567,
    "lon": 150.8,
    "wikipedia": "Magadan",
    "city": "Magadan"
  },
  "wollongong": {
    "lat": -34.433,
    "lon": 150.883,
    "wikipedia": "Wollongong",
    "city": "Wollongong"
  },
  "sydney": {
    "lat": -33.85,
    "lon": 151.2,
    "wikipedia": "Sydney",
    "city": "Sydney"
  },
  "newcastle": {
    "lat": -32.917,
    "lon": 151.75,
    "wikipedia": "Newcastle,_New_South_Wales",
    "city": "Newcastle"
  },
  "weno": {
    "lat": 7.45,
    "lon": 151.85,
    "wikipedia": "Weno",
    "city": "Weno"
  },
  "brisbane": {
    "lat": -27.467,
    "lon": 153.017,
    "wikipedia": "Brisbane",
    "city": "Brisbane"
  },
  "goldcoast": {
    "lat": -28.167,
    "lon": 153.55,
    "wikipedia": "Gold_Coast,_Queensland",
    "city": "Gold Coast"
  },
  "palikir": {
    "lat": 6.917,
    "lon": 158.183,
    "wikipedia": "Palikir",
    "city": "Palikir"
  },
  "petropavlovskkamchatsky": {
    "lat": 53.017,
    "lon": 158.65,
    "wikipedia": "Petropavlovsk-Kamchatsky",
    "city": "Petropavlovsk-Kamchatsky"
  },
  "honiara": {
    "lat": -9.433,
    "lon": 159.95,
    "wikipedia": "Honiara",
    "city": "Honiara"
  },
  "noum%c3%a9a": {
    "lat": -22.267,
    "lon": 166.45,
    "wikipedia": "Noum%C3%A9a",
    "city": "Noum%C3%A9a"
  },
  "yarendistrict": {
    "lat": -0.55,
    "lon": 166.917,
    "wikipedia": "Yaren_District",
    "city": "Yaren District"
  },
  "portvila": {
    "lat": -17.75,
    "lon": 168.3,
    "wikipedia": "Port_Vila",
    "city": "Port Vila"
  },
  "invercargill": {
    "lat": -46.417,
    "lon": 168.3,
    "wikipedia": "Invercargill",
    "city": "Invercargill"
  },
  "dunedin": {
    "lat": -45.867,
    "lon": 170.5,
    "wikipedia": "Dunedin",
    "city": "Dunedin"
  },
  "majuro": {
    "lat": 7.067,
    "lon": 171.267,
    "wikipedia": "Majuro",
    "city": "Majuro"
  },
  "christchurch": {
    "lat": -43.533,
    "lon": 172.617,
    "wikipedia": "Christchurch",
    "city": "Christchurch"
  },
  "southtarawa": {
    "lat": 1.317,
    "lon": 172.983,
    "wikipedia": "South_Tarawa",
    "city": "South Tarawa"
  },
  "wellington": {
    "lat": -41.283,
    "lon": 174.767,
    "wikipedia": "Wellington",
    "city": "Wellington"
  },
  "auckland": {
    "lat": -36.85,
    "lon": 174.783,
    "wikipedia": "Auckland",
    "city": "Auckland"
  },
  "matautu": {
    "lat": -13.283,
    "lon": 176.183,
    "wikipedia": "Mata-Utu",
    "city": "Mata-Utu"
  },
  "anadyr": {
    "lat": 64.733,
    "lon": 177.5,
    "wikipedia": "Anadyr_(town)",
    "city": "Anadyr (town)"
  },
  "suva": {
    "lat": -18.133,
    "lon": 178.433,
    "wikipedia": "Suva",
    "city": "Suva"
  },
  "funafuti": {
    "lat": -8.517,
    "lon": 179.217,
    "wikipedia": "Funafuti",
    "city": "Funafuti"
  },
  "labasa": {
    "lat": -16.433,
    "lon": 179.367,
    "wikipedia": "Labasa",
    "city": "Labasa"
  },
  "nukulaelae": {
    "lat": -9.383,
    "lon": 179.85,
    "wikipedia": "Nukulaelae",
    "city": "Nukulaelae"
  }

};
}]);
