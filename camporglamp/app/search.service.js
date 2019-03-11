"use strict";
function SearchService($http) {
    const self = this;
    const key = "OP2F1MT0eeFGORzUkOdqULyY1Ed9dB9hdDiFIlD8"
    self.get = function() {
        return $http({
            method:'GET',
            url:`https://api.nps.gov/api/v1/campgrounds?stateCode=MI&limit=5&api_key=${key}`
        });
    };

};


angular.module("App").service("SearchService", SearchService);