
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
            "genre": "Fantasie, Action, Sciense Fiction, Magic",
            "comments":[{
                "author" : "MiguelA.MV@outllok.com",
                "content" : "Este libro te introduce muy bien a la saga de HP, es un inicio suave, aunque tiene sus partes profundas. Vale la pena re-leerlo."
            },
            {
              "author" : "micky_moco_@hotmail.com",
                "content" : "Primero."
            }]
        },
        {
            "id": 2,
            "title": "Harry Potter y la Cámara Secreta",
            "author": "J.K. Rowling",
            "editorial": "Salamandra",
            "synopsis": "Harry vuelve al segundo año en la escuela Howarts. Después de descubrir la verdad de su pasado, Harry deberá enfrentar nuevas pruebas.",
            "img": "./public/img/hp2.jpg",
            "genre": "Fantasie, Action, Sciense Fiction, Magic",
            "comments":[{
                "author" : "mickymoco@gmail.com",
                "content" : "SPOILER ALERT. Me gusta como manejan el crecimiento de los personajes."
                }]
        },
        {
            "id": 3,
            "title": "Harry Potter y el Prisionero de Azkaban",
            "author": "J.K. Rowling",
            "editorial": "Oceano",
            "synopsis": "Un peligroso reo escapa de la prisión de máxima seguridad Azkaban y va a Howarts presuntamente buscando a Harry.",
            "img": "./public/img/hp3.jpg",
            "genre": "Fantasie, Action, Sciense Fiction, Magic",
            "comments":[{
                "author" : "micky_moco_@hotmail.com",
                "content" : "Primero."
                }]
        },
        {
            "id": 4,
            "title": "Harry Potter y el Calíz de Fuego",
            "author": "J.K.Rowling",
            "editorial": "Salamandra",
            "synopsis": "Los juegos de los tres magos se celebraran en Howarts, en el cuál Harry participará de una manera inesperada.",
            "img": "./public/img/hp4.jpg",
            "genre": "Fantasie, Action, Sciense Fiction, Magic",
            "comments":[{
                "author" : "micky_moco_@hotmail.com",
                "content" : "Primero."
                }]
        },
        {
            "id": 5,
            "title": "Narnia el Sobrino del Mago",
            "author": "C. S. Lewis",
            "editorial": "Ventura",
            "synopsis": "2 Niños descubren el poder de unos anillos capaces de viajar entre mundos.",
            "img": "./public/img/na1.jpg",
            "genre": "Fiction, Fantasie",
            "comments":[{
                "author" : "micky_moco_@hotmail.com",
                "content" : "Hasta que lo leí, no sabía que era el primer libro de la saga."
                }]
        },
        {
            "id": 6,
            "title": "Narnia el Leon, la Bruja y el Ropero",
            "author": "C. S. Lewis",
            "editorial": "Oceano",
            "synopsis": "3 niños entran a un mundo mágico a traves de un Ropero y viven aventuras fantasticas.",
            "img": "./public/img/na2.jpg",
            "genre": "Fiction, Fantasie",
            "comments":[{
                "author" : "micky_moco_@hotmail.com",
                "content" : "Primero."
                }]
        },
        {
            "id": 7,
            "title": "Romeo y Julieta",
            "author": "W. Sheakspear",
            "editorial": "Ventura",
            "synopsis": "Cuenta la historia de dos jovenes enamorados cuyas familias se oponían a su union.",
            "img": "./public/img/rj.jpg",
            "genre": "Novel, Romance",
            "comments":[{
                "author" : "micky_moco_@hotmail.com",
                "content" : "Mejor busquen a Gnomeo :v"
                }]
        },
        {
            "id": 8,
            "title": "Tal como somos",
            "author": "S. Nicholas",
            "editorial": "Oceano",
            "synopsis": "Colin aprovehca la segunda oportunidad que le da la vida cuando conoce a María y sus vidas cambian.",
            "img": "./public/img/ts.jpg",
            "genre": "Novel, Romance",
            "comments":[{
                "author" : "micky_moco_@hotmail.com",
                "content" : "Primero."
                }]
        }
        /*{
            "id": 4,
            "title": "Harry Potter y el Calíz de Fuego",
            "author": "J.K.Rowling",
            "editorial": "Salamandra",
            "synopsis": "Los juegos de los tres magos se celebraran en Howarts, en el cuál Harry participará de una manera inesperada.",
            "img": "./public/img/hp4.jpg",
            "genre": "Romance, Comedy",
            "comments":[{
                "author" : "micky_moco_@hotmail.com",
                "content" : "Primero."
                }]
        },*/
    ];

    function BookService(){
        var service= this;

        service.getAllBooks= getAllBooks;
        service.getOneBook= getOneBook;
        service.getSimillarBooks= getSimillarBooks;
        service.addComment= addComment;
 
        function getAllBooks(){
            return books;
        }

        function getOneBook(id){
            return books[id];
        }

        //Custom function to get the books with the same genre, displaying a new view
        function getSimillarBooks(genre){
            var simillarBooks= books.filter(books => {
                if (genre === books.genre) {
                return true
                }
            });
            console.log('Aqui',simillarBooks);
            return simillarBooks;
        }

        //Custom function to add a comment in the tab-view.html
        function addComment(id, comment){
            books[id].comments.push(comment);
        }

    }
})();