
(function (){
    'use strict';

    angular.module('BookStoreApp').config(RoutesConfig);

    RoutesConfig.$inject= ['$stateProvider','$urlRouterProvider'];
    function RoutesConfig($stateProvider,$urlRouterProvider){

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url:'/',
                templateUrl: 'views/books-view.html',
                controller: 'BookController as $ctrl',
                resolve:{
                    books:['BookService',function (BookService){
                        return BookService.getAllBooks();
                    }]
                }
            })
            .state('tab', {
                url:'/tab/{id}',
                templateUrl: 'views/tabs-view.html',
                controller: 'TabController as $ctrl',
                resolve:{
                    book:['$stateParams','BookService',function ($stateParams,BookService){
                        return BookService.getOneBook($stateParams.id);
                    }]
                }
            })
            .state('simillar', {
                url:'/simillar/{genre}',
                templateUrl: 'views/simillar-view.html',
                controller: 'SimillarController as $ctrl',
                resolve:{
                    simillarBooks:['$stateParams','BookService',function ($stateParams,BookService){
                        return BookService.getSimillarBooks($stateParams.genre);
                    }]
                }
            })
    }
    
})();
