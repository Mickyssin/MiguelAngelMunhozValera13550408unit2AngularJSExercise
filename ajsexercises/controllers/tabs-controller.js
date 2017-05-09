
(function () {
    'use strict';

    angular.module('BookStoreApp').controller('TabController',TabController);

    TabController.$inject= ['book','BookService','$state'];
    function TabController(book,BookService,$state) {
        var $ctrl= this;
        $ctrl.book= book;
        //Part of the controller for the comment function
        $ctrl.comment= {};
        $ctrl.addComment= function(id, comment){
        if(comment.author === undefined){
        	$ctrl.emailValidate= true;
        	return;
        }
        BookService.addComment(id, comment);
        $ctrl.comment= {};
        $state.reload();	
        }
    }
})();