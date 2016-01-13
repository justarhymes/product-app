'use strict';

/**
 * @ngdoc function
 * @name ProductApp.controller:MainCtrl
 * @description
 * # ProductController
 * Controller of the ProductApp
*/

angular.module('productApp').controller('ProductController', function() {
  this.products = [{
    id: 1,
    name: 'Magnificent Compton',
    about: 'Duis id quam pulvinar, vulputate metus at, posuere est. Morbi vel faucibus diam, pulvinar sodales libero. Nullam a urna at eros tempus vehicula. Mauris dictum accumsan lorem vitae commodo.',
    rating: 'PG-13',
    price: 9.99,
    release: Date.now(),
    images: [
      'images/thumb-orange.jpg',
    ],
    cast: [
      'Person 01',
      'Person 02',
      'Person 03',
      'Person 04',
      'Person 05',
      'Person 06',
      'Person 07',
      'Person 08',
      'Person 09',
      'Person 10',
      'Person 11',
      'Person 12',
      'Person 13',
      'Person 14',
      'Person 15',
      'Person 16',
      'Person 17',
      'Person 18',
      'Person 19',
      'Person 20'
    ]
  }, {
    id: 2,
    name: 'Watermelon Wars',
    about: 'Duis id quam pulvinar, vulputate metus at, posuere est. Morbi vel faucibus diam, pulvinar sodales libero. Nullam a urna at eros tempus vehicula. Mauris dictum accumsan lorem vitae commodo.',
    rating: 'PG',
    price: 11.99,
    release: Date.now(),
    images: [
      'images/thumb-blue.jpg',
    ],
    cast: [
      'Person 01',
      'Person 02',
      'Person 03',
      'Person 04',
      'Person 05',
      'Person 06',
      'Person 07',
      'Person 08',
      'Person 09',
    ]
  }, {
    id: 3,
    name: '2 Extreme',
    about: 'Duis id quam pulvinar, vulputate metus at, posuere est. Morbi vel faucibus diam, pulvinar sodales libero. Nullam a urna at eros tempus vehicula. Mauris dictum accumsan lorem vitae commodo.',
    rating: 'R',
    price: 5,
    release: Date.now(),
    images: [
      'images/thumb-green.jpg',
    ],
    cast: [
      'Person 01',
      'Person 02',
      'Person 03',
      'Person 04',
      'Person 05',
      'Person 06',
      'Person 07',
      'Person 08',
      'Person 09',
      'Person 10',
      'Person 11',
      'Person 12',
      'Person 13',
    ]
  }, {
    id: 4,
    name: 'X-Dudes',
    about: 'Duis id quam pulvinar, vulputate metus at, posuere est. Morbi vel faucibus diam, pulvinar sodales libero. Nullam a urna at eros tempus vehicula. Mauris dictum accumsan lorem vitae commodo.',
    rating: 'PG-13',
    price: 8,
    release: Date.now(),
    images: [
      'images/thumb-red.jpg',
    ],
    cast: [
      'Person 01',
      'Person 02',
      'Person 03',
      'Person 04',
      'Person 05',
      'Person 06',
      'Person 07',
      'Person 08',
      'Person 09',
      'Person 10',
      'Person 11',
      'Person 12',
      'Person 13',
      'Person 14',
      'Person 15',
      'Person 16',
    ]
  }, {
    id: 5,
    name: 'Star Warriors',
    about: 'Duis id quam pulvinar, vulputate metus at, posuere est. Morbi vel faucibus diam, pulvinar sodales libero. Nullam a urna at eros tempus vehicula. Mauris dictum accumsan lorem vitae commodo.',
    rating: 'PG-13',
    price: 12.99,
    release: Date.now(),
    images: [
      'images/thumb-purple.jpg',
    ],
    cast: [
      'Person 01',
      'Person 02',
      'Person 03',
      'Person 04',
      'Person 05',
      'Person 06',
      'Person 07',
      'Person 08',
      'Person 09',
      'Person 10',
    ]
  }, {
    name: 'Pirates of New Jersey',
    about: 'Duis id quam pulvinar, vulputate metus at, posuere est. Morbi vel faucibus diam, pulvinar sodales libero. Nullam a urna at eros tempus vehicula. Mauris dictum accumsan lorem vitae commodo.',
    rating: 'PG',
    price: 14,
    release: Date.now(),
    images: [
      'images/thumb-aqua.jpg',
    ],
    cast: [
      'Person 01',
      'Person 02',
      'Person 03',
      'Person 04',
      'Person 05',
      'Person 06',
      'Person 07',
      'Person 08',
      'Person 09',
      'Person 10',
      'Person 11',
      'Person 12',
      'Person 13',
      'Person 14',
      'Person 15',
      'Person 16',
      'Person 17',
      'Person 18',
      'Person 19',
    ]
  }];
});

angular.module('productApp').controller('ImagesController', function(){
  this.default = 0;

  this.setDefault = function(number){
    this.default = number || 0;
  };
});
