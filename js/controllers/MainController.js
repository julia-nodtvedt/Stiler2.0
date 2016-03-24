app.controller('MainController', ['$scope', function($scope) { 
  $scope.posts = [
  	{ 
    	user: 'Mags Yip',
      rating: 235, 
    	role: 'Editor',
      type: 'article', 
    	pubdate: new Date('2014', '03', '08'), 
    	cover: "../images/article1.png",
    	saves: 0,
  	},
    {
      user: 'Ooh Couture',
      rating: 235, 
      role: 'Blogger',
      type: 'look',
      pubdate: new Date('2016', '03', '23'),
      cover: "../images/ooh-couture201603.jpg"
      saves:  0
    }, 
  	{ 
    	user: 'Julia Dahl',
      rating: 235,  
    	role: 'Editor',
      type: 'article',  
    	pubdate: new Date('2013', '08', '01'), 
    	cover: "../images/article2.png",
    	saves: 0
  	}, 
  	{ 
    	User: 'Alexandra Dean',
      rating: 235,  
    	role: 'Editor',
      type: 'article',  
    	pubdate: new Date('1999', '07', '08'), 
    	cover: "../images/article3.png",
    	saves: 0,
  	}, 
  	{ 
    	user: 'Mags Yip',
      rating: 235,  
    	role: 'Editor',
      type: 'article',  
    	pubdate: new Date('2011', '08', '16'), 
    	cover: "../images/article4.png",
    	saves: 0,
  	},
    { 
      user: 'Mags Yip',
      rating: 235,  
      role: 'Editor',
      type: 'article',  
      pubdate: new Date('2011', '08', '16'), 
      cover: "../images/article5.png",
      saves: 0,
    },
    { 
      user: 'Mags Yip',
      rating: 235,  
      role: 'Editor',
      type: 'flatlay',  
      pubdate: new Date('2014', '03', '08'), 
      cover: "../images/article6.png",
      saves: 0,
    }, 
    { 
      user: 'Julia Dahl',
      rating: 235,  
      role: 'Editor',
      type: 'article',  
      pubdate: new Date('2013', '08', '01'), 
      cover: "../images/article1.png",
      saves: 0,
    }, 
    { 
      User: 'Alexandra Dean',
      rating: 235,  
      role: 'Editor',
      type: 'article',  
      pubdate: new Date('1999', '07', '08'), 
      cover: "../images/article2.png",
      saves: 0,
    }, 
    { 
      user: 'Mags Yip',
      rating: 235,  
      role: 'Editor',
      type: 'article',  
      pubdate: new Date('2011', '08', '16'), 
      cover: "../images/article3.png",
      saves: 0,
    },
    { 
      user: 'Mags Yip',
      rating: 235,  
      role: 'Editor',
      type: 'flatlay',  
      pubdate: new Date('2011', '08', '16'), 
      cover: "../images/article6.png",
      saves: 0,
    }
  ];
  $scope.plusOne = function(index) { 
  	$scope.posts[index].saves += 1; 
	};
}]);