
(function () {
    'use strict';

    angular.module('BookStoreApp').controller('TabController',TabController);

    TabController.$inject= ['book'];
    function TabController(book) {
        var $ctrl= this;
        $ctrl.book= book;

    }
})();