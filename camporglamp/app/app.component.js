"use strict";
const appRoot = {
  templateUrl: `app/app.html`,
  controller: [
    function() {
      const vm = this;
      vm.showFooter = false;
      vm.footerBtn = false;
      vm.publicBtn = false;
      vm.show = () => {
        vm.showFooter = !vm.showFooter;
        vm.footerBtn = !vm.footerBtn;
        vm.publicBtn = !vm.publicBtn;
      };
      vm.hide = () => {
        vm.publicBtn = !vm.publicBtn;
      };
    }
  ]
};

angular.module("App").component("appRoot", appRoot);
