"use strict";

angular
  .module("App")
  .config(["$routeProvider", function($routeProvider) {
    $routeProvider
      .when("/", {
        template: "<search></search>"
      })
      .when("/search", {
        template: "<search></search>"
      })
      .when("/results", {
        template: "<results></results>"
      })
      .when("/detail", {
        template: "<detail></detail>"
      })
      .when("/secret", {
        template: "<secret></secret>"
      })
      .when("/favorite", {
        template: "<favorite></favorite>"
      })
      .when("/contact", {
        template: "<contact></contact>"
      });
  }
]);
