"use strict";

var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju',
        image: 'http://fandoms.pl/king-include/buzzupload/harrypotter_wb_f4_harrypottermidshot_promo_080615_port-9800970685.jpg'
  },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        image: 'http://fandoms.pl/king-include/buzzupload/harrypotter_wb_f4_harrypottermidshot_promo_080615_port-9800970685.jpg'
  },
    {
        id: 3,
        title: 'Batman',
        desc: 'Film o superbohaterze',
        image: 'http://fandoms.pl/king-include/buzzupload/harrypotter_wb_f4_harrypottermidshot_promo_080615_port-9800970685.jpg'
  },
    {
        id: 4,
        title: 'Kubuś Puchatek',
        desc: 'Film o misiu',
        image: 'http://fandoms.pl/king-include/buzzupload/harrypotter_wb_f4_harrypottermidshot_promo_080615_port-9800970685.jpg'
  }
];

var moviesElements = movies.map(function (movie) {
    return React.createElement('li', {
            key: movie.id
        },
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {src: movie.image} )
    );
});

var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
    );

ReactDOM.render(element, document.getElementById('app'));
