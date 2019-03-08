"use strict";
function SearchService($http) {
    const self = this;
    const key = "4r55zv6cbm6x33434vxwm479"
    self.get = function() {
        return $http({
            method:'GET',
            url:`http://api.amp.active.com/camping/campgrounds/?landmarkLat=42&landmarkLong=-83&landmarkName=true&api_key=${key}`
        });
    };

};


angular.module("App").service("SearchService", SearchService);