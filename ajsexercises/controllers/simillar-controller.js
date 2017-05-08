(function (){
    'use strict';

    angular.module('BookStoreApp').controller('SimillarController',SimillarController);

    SimillarController.$inject= ['simillarBooks'];
    function SimillarController(simillarBooks) {
        var $ctrl= this;
        console.log(simillarBooks);
        $ctrl.simillarBooks= simillarBooks;
    }
})();