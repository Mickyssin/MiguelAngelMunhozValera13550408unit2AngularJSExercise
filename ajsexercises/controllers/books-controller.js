
(function (){
    'use strict';

    angular.module('BookStoreApp').controller('BookController',BookController);


    BookController.$inject= ['books'];
    function BookController(books) {
        var $ctrl= this;
        $ctrl.books= books;

    }

})();