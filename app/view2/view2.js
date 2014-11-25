'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

    .controller('View2Ctrl', ['$scope', '$timeout', function ($scope, $timeout) {
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







    }]);