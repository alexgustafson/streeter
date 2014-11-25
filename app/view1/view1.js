'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ['$scope', '$timeout', function ($scope, $timeout) {

        var HB = new google.maps.LatLng(47.3785915, 8.5409876);
        var panoramaOptions = {
            position: HB,
            pov: {
                heading: 282.05,
                pitch: 10
            }

        };
        var panorama = new google.maps.StreetViewPanorama(document.getElementById('pano'), panoramaOptions);


            $timeout(function () {

                panorama.setPov({heading: 282.67 , pitch: 10 });
                panorama.setPosition(new google.maps.LatLng(47.3785915 , 8.5407337));


            }, 500)

            $timeout(function () {

                panorama.setPov({heading: 287.04 , pitch: 10 });
                panorama.setPosition(new google.maps.LatLng(47.3786098 , 8.5405851));


            }, 1000)

            $timeout(function () {

                panorama.setPov({heading: 279.66 , pitch: 10 });
                panorama.setPosition(new google.maps.LatLng(47.3786303 , 8.5404707));



            }, 1500)

            $timeout(function () {

                panorama.setPov({heading: 291.19 , pitch: 10 });
                panorama.setPosition(new google.maps.LatLng(47.3786627 , 8.5403331));



            }, 2000)

            $timeout(function () {

                panorama.setPov({heading: 291.19 , pitch: 10 });
                panorama.setPosition(new google.maps.LatLng(47.3786974 , 8.5401985));



            }, 2500)

            $timeout(function () {

                panorama.setPov({heading: 291.19 , pitch: 10 });
                panorama.setPosition(new google.maps.LatLng(47.3787367 , 8.540056));



            }, 3000)

            $timeout(function () {

                panorama.setPov({heading: 291.19 , pitch: 10 });
                panorama.setPosition(new google.maps.LatLng(47.3787744 , 8.5399193));



            }, 3500)

            $timeout(function () {

                panorama.setPov({heading: 291.19 , pitch: 10 });
                panorama.setPosition(new google.maps.LatLng(47.378813 , 8.5397793));



            }, 4000)

            $timeout(function () {

                panorama.setPov({heading: 291.19 , pitch: 10 });
                panorama.setPosition(new google.maps.LatLng(47.3788513 , 8.5396406));



            }, 4500)




    }]);