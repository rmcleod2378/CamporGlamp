"use strict";

function expand() {
  return {
    restrict: "A",
    link: function ($scope, $element, $attrs) {
      $element.on("focus", function () {
        $element.css("transform-origin", "center");
        $element.css("transform", "scale( 1.5, 1.5)");
      });
      $element.on("blur", function () {
        $element.css("transform", "")
      });
    }
  }
}

angular
  .module("App")
  .directive("expand", expand);