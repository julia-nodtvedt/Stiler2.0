app.controller('MainController', ['$scope', function($scope) { 
  $scope.posts = [
  	{ 
    	user: 'Mags Yip',
      rating: 235, 
    	role: 'Editor',
      type: 'article', 
    	pubdate: new Date('2014', '03', '08'), 
    	cover: "../images/article1.png",
      category: 'Looks for less',
      title: "Get Ciara's casual holiday style",
      url: "../ciara-holiday-style.html", 
    	saves: 0
  	},
    {
      user: 'Ooh Couture',
      rating: 235, 
      role: 'Blogger',
      type: 'look',
      pubdate: new Date('2016', '03', '23'),
      cover: "../images/ooh-couture201603.jpg",
      url: "../ciara-holiday-style.html",
      saves:  0
    }, 
  	{ 
    	user: 'Julia Dahl',
      rating: 235,  
    	role: 'Editor',
      type: 'article',  
    	pubdate: new Date('2013', '08', '01'), 
    	cover: "../images/article2.png",
      category: 'Looks for less',
      title: "Get Ciara's casual holiday style",
      url: "../ciara-holiday-style.html",
    	saves: 0
  	}, 
  	{ 
    	User: 'Alexandra Dean',
      rating: 235,  
    	role: 'Editor',
      type: 'article',  
    	pubdate: new Date('1999', '07', '08'), 
    	cover: "../images/article3.png",
      category: 'Looks for less',
      title: "Get Ciara's casual holiday style",
      url: "../ciara-holiday-style.html",
    	saves: 0,
  	}, 
  	{ 
    	user: 'Mags Yip',
      rating: 235,  
    	role: 'Editor',
      type: 'article',  
    	pubdate: new Date('2011', '08', '16'), 
    	cover: "../images/article4.png",
      category: 'Looks for less',
      title: "Get Ciara's casual holiday style",
      url: "../ciara-holiday-style.html",
    	saves: 0,
  	},
    { 
      user: 'Mags Yip',
      rating: 235,  
      role: 'Editor',
      type: 'article',  
      pubdate: new Date('2011', '08', '16'), 
      cover: "../images/article5.png",
      category: 'Looks for less',
      title: "Get Ciara's casual holiday style",
      url: "../ciara-holiday-style.html",
      saves: 0,
    },
    { 
      user: 'Mags Yip',
      rating: 235,  
      role: 'Editor',
      type: 'flatlay',  
      pubdate: new Date('2014', '03', '08'), 
      cover: "../images/article6.png",
      category: 'Looks for less',
      title: "Get Ciara's casual holiday style",
      url: "../ciara-holiday-style.html",
      saves: 0,
    }, 
    { 
      user: 'Julia Dahl',
      rating: 235,  
      role: 'Editor',
      type: 'article',  
      pubdate: new Date('2013', '08', '01'), 
      cover: "../images/article1.png",
      category: 'Looks for less',
      title: "Get Ciara's casual holiday style",
      url: "../ciara-holiday-style.html",
      saves: 0,
    }, 
    { 
      User: 'Alexandra Dean',
      rating: 235,  
      role: 'Editor',
      type: 'article',  
      pubdate: new Date('1999', '07', '08'), 
      cover: "../images/article2.png",
      category: 'Looks for less',
      title: "Get Ciara's casual holiday style",
      url: "../ciara-holiday-style.html",
      saves: 0,
    }, 
    { 
      user: 'Mags Yip',
      rating: 235,  
      role: 'Editor',
      type: 'article',  
      pubdate: new Date('2011', '08', '16'), 
      cover: "../images/article3.png",
      category: 'Looks for less',
      title: "Get Ciara's casual holiday style",
      url: "../ciara-holiday-style.html",
      saves: 0,
    },
    { 
      user: 'Mags Yip',
      rating: 235,  
      role: 'Editor',
      type: 'flatlay',  
      pubdate: new Date('2011', '08', '16'), 
      cover: "../images/article6.png",
      url: "../ciara-holiday-style.html",
      saves: 0,
    }
  ];
  $scope.plusOne = function(index) { 
  	$scope.posts[index].saves += 1; 
	};
  $scope.articles = [
    {
      user: 'Mags Yip',
      cover: "../images/article1.png"
      pubdate: new Date ('2016', '03', '25'),
      title: "Blogger Spotlight: Anouska Proetta Brandon from Anouska.net",
      category: 'Blogger Life',
      url: "../blogger-spotlight-anouska.html"
    },
        {
      user: 'Mags Yip',
      cover: "../images/article1.png"
      pubdate: new Date ('2016', '03', '25'),
      title: "Blogger Spotlight: Anouska Proetta Brandon from Anouska.net",
      category: 'Blogger Life',
      url: "../blogger-spotlight-anouska.html"
    },
        {
      user: 'Mags Yip',
      cover: "../images/article1.png"
      pubdate: new Date ('2016', '03', '25'),
      title: "Blogger Spotlight: Anouska Proetta Brandon from Anouska.net",
      category: 'Blogger Life',
      url: "../blogger-spotlight-anouska.html"
    },
        {
      user: 'Mags Yip',
      cover: "../images/article1.png"
      pubdate: new Date ('2016', '03', '25'),
      title: "Blogger Spotlight: Anouska Proetta Brandon from Anouska.net",
      category: 'Blogger Life',
      url: "../blogger-spotlight-anouska.html"
    }
  ];
}]);