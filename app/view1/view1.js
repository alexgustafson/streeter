'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ['$scope', '$interval', function ($scope, $interval) {
        var heading = 1;
        var fenway = new google.maps.LatLng(42.345573, -71.098326);
        var panoramaOptions = {
            position: fenway,
            pov: {
                heading: heading,
                pitch: 10
            },
            zoomControl: false,
            panControl: false,
            scaleControl: false
        };
        var panorama = new google.maps.StreetViewPanorama(document.getElementById('pano'), panoramaOptions);

            var i = 0
            $interval(function () {
                i++;
                panorama.setPov({heading: i * 3, pitch: 10 - i});

                if(i > 10){
                    $interval.cancel()
                }

            }, 300)




    }]);