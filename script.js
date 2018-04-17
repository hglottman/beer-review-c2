
var beers = [];

var addBeer = function () {
    var nameOfBeer = $('.beer-input').val();
    var nameOfCategory = $('.category-input').val();
    var beer = {
name: nameOfBeer,
category: nameOfCategory
    }
     beers.push(beer); 
};


var renderBeers = function(){
    $('.beers-list').find('li').remove();
    for(let i = 0; i < beers.length; i++){
        $('.beers-list').append('<li>' + beers[i].name + '</li>'); 
    }

};



$('.post-beer').click(addBeer);
$('.render-beer').click(renderBeers);