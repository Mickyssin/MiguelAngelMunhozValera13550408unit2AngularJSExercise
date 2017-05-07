
(function (){
    'use strict';

    angular.module('BookStoreApp').service('BookService',BookService);

        var books= [
        {
            "id": 1,
            "title": "Harry Potter y la Piedra Filosofal",
            "author": "J.K. Rowling",
            "editorial": "El lado oscuro",
            "synopsis": "Harry Potter ingresa a la escuela Howarts de Magia y hechicería.",
            "img": "./public/img/hp1.jpg",
            "genre": "Fantasie, Action, Sciense Fiction"
        },
        {
            "id": 2,
            "title": "Harry Potter y la Cámara Secreta",
            "author": "J.K. Rowling",
            "editorial": "Salamandra",
            "synopsis": "Harry vuelve al segundo año en la escuela Howarts. Después de descubrir la verdad de su pasado, Harry deberá enfrentar nuevas pruebas.",
            "img": "./public/img/hp2.jpg",
            "genre": "Romance"
        },
        {
            "id": 3,
            "title": "Harry Potter y el Prisionero de Azkaban",
            "author": "J.K. Rowling",
            "editorial": "Oceano",
            "synopsis": "Un peligroso reo escapa de la prisión de máxima seguridad Azkaban y va a Howarts presuntamente buscando a Harry.",
            "img": "./public/img/hp3.jpg",
            "genre": "Fantasie, Action, Sciense Fiction"
        },
        {
            "id": 4,
            "title": "Harry Potter y el Calíz de Fuego",
            "author": "J.K.Rowling",
            "editorial": "Salamandra",
            "synopsis": "Los juegos de los tres magos se celebraran en Howarts, en el cuál Harry participará de una manera inesperada.",
            "img": "./public/img/hp4.jpg",
            "genre": "Romance, Comedy"
        },
        {
            "id": 5,
            "title": "Narnia el León la Bruja y el ropero",
            "author": "C. S. Lewis",
            "editorial": "Zelda",
            "synopsis": "3 Niños entran a un mundo mágico a travez de un viejo ropero.",
            "img": "./public/img/hp5.jpg",
            "genre": "Novel, Fiction"
        }
        /*{
            "id": 4,
            "title": "Harry Potter y el Calíz de Fuego",
            "author": "J.K.Rowling",
            "editorial": "Salamandra",
            "synopsis": "Los juegos de los tres magos se celebraran en Howarts, en el cuál Harry participará de una manera inesperada.",
            "img": "./public/img/hp4.jpg",
            "genre": "Romance, Comedy"
        },*/
    ];

    function BookService(){
        var service= this;

        service.getAllBooks= getAllBooks;
        service.getOneBook= getOneBook;
        service.getSimillarBooks= getSimillarBooks;
 
        function getAllBooks(){
            return books;
        }

        function getOneBook(id){
            return books[id];
        }

        function getSimillarBooks(genre){
            var simillarBooks= books.filter(books => {
                if (genre === books.genre) {
                return true
                }
            });
            return similarBooks;
            console.log(simillarBooks);   
        }

    }
})();