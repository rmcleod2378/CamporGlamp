"use strict";
const contact = {
  templateUrl: "app/components/contact/contact.html",
  controller: ["SearchService", "$location", function(SearchService, $location) {
      const vm = this;
      vm.showFooter = false;
  }]
};

angular.module("App").component("contact", contact);