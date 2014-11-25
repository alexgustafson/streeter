'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ['$scope', '$timeout', function ($scope, $timeout) {
        var heading = 1;
        var fenway = new google.maps.LatLng(47.3771498, 8.5411369);
        var panoramaOptions = {
            position: fenway,
            pov: {
                heading: 259.1,
                pitch: 10
            },
            zoomControl: false,
            panControl: false,
            scaleControl: false
        };
        var panorama = new google.maps.StreetViewPanorama(document.getElementById('pano'), panoramaOptions);

            var i = 0
            $timeout(function () {

                panorama.setPov({heading: 259.1 , pitch: 10 });
                panorama.setPosition(new google.maps.LatLng(47.3771498 , 8.5411369));


            }, 500)

            $timeout(function () {

                panorama.setPov({heading: 259.1 , pitch: 10 });
                panorama.setPosition(new google.maps.LatLng(47.3771231 , 8.5410176));


            }, 1000)

            $timeout(function () {

                panorama.setPov({heading: 279.66 , pitch: 10 });
                panorama.setPosition(new google.maps.LatLng(47.3771002 , 8.5406845));



            }, 1500)

            $timeout(function () {

                panorama.setPov({heading: 293.86 , pitch: 10 });
                panorama.setPosition(new google.maps.LatLng(47.3771249 , 8.5402853));



            }, 2000)

            $timeout(function () {

                panorama.setPov({heading: 294.49 , pitch: 10 });
                panorama.setPosition(new google.maps.LatLng(47.377506 , 8.5389503));



            }, 2500)

            $timeout(function () {

                panorama.setPov({heading: 294.49 , pitch: 10 });
                panorama.setPosition(new google.maps.LatLng(47.3776179 , 8.5385561));



            }, 3000)

            $timeout(function () {

                panorama.setPov({heading: 294.49 , pitch: 10 });
                panorama.setPosition(new google.maps.LatLng(47.3776674 , 8.5383308));



            }, 3500)




    }]);