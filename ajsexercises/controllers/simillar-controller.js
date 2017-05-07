(function (){
    'use strict';

    angular.module('BookStoreApp').controller('SimillarController',SimillarController);

    SimillarController.$inject= ['simillarBook'];
    function SimillarController(simillarBook) {
        var $ctrl= this;
        console.log(simillarBook);
        $ctrl.simillarBook= simillarBook;
    }
})();