
var beers = [];

var addBeer = function () {
    var nameOfBeer = $('.beer-input').val();
    var nameOfCategory = $('.category-input').val();
    var beerScore = $('.chosenBeers').val();
    var beer = {
        name: nameOfBeer,
        category: nameOfCategory,
        score: beerScore
    }
    beers.push(beer);
};


var renderBeers = function () {
    $('.beers-list').find('li').remove();
    for (let i = 0; i < beers.length; i++) {
        $('.beers-list').append('<li>' + beers[i].name + " " + beers[i].score + '</li>');
    };
};

var switchSort = 0;

    var scoreBeers = function () {
   if (switchSort === 0) {
       beers.sort(function (a, b) { return a.score-b.score});
       switchSort =1 ;
       renderBeers();
   } else if (switchSort === 1) {
        beers.sort(function (a, b) { return b.score-a.score});
        switchSort = 0;
        renderBeers();
   }
};


$('.post-beer').click(addBeer);
$('.render-beer').click(renderBeers);
$('.score-beer').click(scoreBeers);


