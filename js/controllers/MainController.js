app.controller('MainController', ['$scope', function($scope) { 
  $scope.posts = [
  	{
      id: 1, 
    	user: 'Mags Yip',
      rating: 235, 
    	role: 'Editor',
      type: 'article', 
    	pubdate: new Date('2014', '03', '08'), 
    	cover: "../images/feed_1.png",
      category: 'Looks for less',
      title: "Get Ciara's casual holiday style",
      url: "../article.html", 
    	saves: 0
  	},
    {
      id: 2,
      user: 'Ooh Couture',
      rating: 235, 
      role: 'Blogger',
      type: 'look',
      pubdate: new Date('2016', '03', '23'),
      cover: "../images/feed_2.jpeg",
      url: "../lookpage.html",
      saves:  0
    }, 
  	{
      id: 3, 
    	user: 'Julia Dahl',
      rating: 235,  
    	role: 'Editor',
      type: 'flatlay',  
    	pubdate: new Date('2013', '08', '01'), 
    	cover: "../images/feed_3.png",
      category: 'Looks for less',
      url: "../article.html",
    	saves: 0
  	}, 
  	{
      id: 4, 
    	User: 'Alexandra Dean',
      rating: 235,  
    	role: 'Editor',
      type: 'look',  
    	pubdate: new Date('1999', '07', '08'), 
    	cover: "../images/feed_4.jpg",
      category: 'Looks for less',
      url: "../article.html",
    	saves: 0,
  	}, 
  	{
      id: 5, 
    	user: 'Mags Yip',
      rating: 235,  
    	role: 'Editor',
      type: 'flatlay',  
    	pubdate: new Date('2011', '08', '16'), 
    	cover: "../images/feed_5.png",
      category: 'Looks for less',
      url: "../article.html",
    	saves: 0,
  	},
    {
      id: 6, 
      user: 'Mags Yip',
      rating: 235,  
      role: 'Editor',
      type: 'article',  
      pubdate: new Date('2011', '08', '16'), 
      cover: "../images/feed_6.png",
      category: 'Looks for less',
      title: "Get Ciara's casual holiday style",
      url: "../article.html",
      saves: 0,
    },
    {
      id: 7, 
      user: 'Mags Yip',
      rating: 235,  
      role: 'Editor',
      type: 'flatlay',  
      pubdate: new Date('2014', '03', '08'), 
      cover: "../images/feed_7.jpg",
      category: 'Looks for less',
      title: "Get Ciara's casual holiday style",
      url: "../lookpage.html",
      saves: 0,
    }, 
    {
      id: 8, 
      user: 'Julia Dahl',
      rating: 235,  
      role: 'Editor',
      type: 'article',  
      pubdate: new Date('2013', '08', '01'), 
      cover: "../images/feed_8.jpg",
      category: 'Looks for less',
      title: "Get Ciara's casual holiday style",
      url: "../article.html",
      saves: 0,
    }, 
    {
      id: 9, 
      User: 'Alexandra Dean',
      rating: 235,  
      role: 'Editor',
      type: 'article',  
      pubdate: new Date('1999', '07', '08'), 
      cover: "../images/feed_9.jpg",
      category: 'Looks for less',
      title: "Get Ciara's casual holiday style",
      url: "../article.html",
      saves: 0,
    }, 
    {
      id: 10, 
      user: 'Mags Yip',
      rating: 235,  
      role: 'Editor',
      type: 'article',  
      pubdate: new Date('2011', '08', '16'), 
      cover: "../images/feed_10.jpg",
      category: 'Looks for less',
      title: "Get Ciara's casual holiday style",
      url: "../article.html",
      saves: 0,
    },
    {
      id: 11, 
      user: 'Mags Yip',
      rating: 235,  
      role: 'Editor',
      type: 'flatlay',  
      pubdate: new Date('2011', '08', '16'), 
      cover: "../images/feed_11.jpg",
      url: "../lookpage.html",
      saves: 0,
    },
    {
      id: 12, 
      user: 'Mags Yip',
      rating: 235,  
      role: 'Editor',
      type: 'flatlay',  
      pubdate: new Date('2011', '08', '16'), 
      cover: "../images/feed_12.jpg",
      url: "../lookpage.html",
      saves: 0,
    },
    {
      id: 13, 
      user: 'Mags Yip',
      rating: 235,  
      role: 'Editor',
      type: 'flatlay',  
      pubdate: new Date('2011', '08', '16'), 
      cover: "../images/feed_13.jpg",
      url: "../lookpage.html",
      saves: 0,
    },
    {
      id: 14, 
      user: 'Mags Yip',
      rating: 235,  
      role: 'Editor',
      type: 'flatlay',  
      pubdate: new Date('2011', '08', '16'), 
      cover: "../images/feed_14.png",
      url: "../lookpage.html",
      saves: 0,
    },
    {
      id: 15, 
      user: 'Mags Yip',
      rating: 235,  
      role: 'Editor',
      type: 'flatlay',  
      pubdate: new Date('2011', '08', '16'), 
      cover: "../images/feed_15.jpg",
      url: "../lookpage.html",
      saves: 0,
    },
    {
      id: 16, 
      user: 'Mags Yip',
      rating: 235,  
      role: 'Editor',
      type: 'flatlay',  
      pubdate: new Date('2011', '08', '16'), 
      cover: "../images/feed_16.jpg",
      url: "../lookpage.html",
      saves: 0,
    },
    {
      id: 17, 
      user: 'Mags Yip',
      rating: 235,  
      role: 'Editor',
      type: 'flatlay',  
      pubdate: new Date('2011', '08', '16'), 
      cover: "../images/feed_17.jpg",
      url: "../lookpage.html",
      saves: 0,
    },
    {
      id: 18, 
      user: 'Mags Yip',
      rating: 235,  
      role: 'Editor',
      type: 'flatlay',  
      pubdate: new Date('2011', '08', '16'), 
      cover: "../images/feed_18.png",
      url: "../lookpage.html",
      saves: 0,
    },
    {
      id: 19, 
      user: 'Mags Yip',
      rating: 235,  
      role: 'Editor',
      type: 'flatlay',  
      pubdate: new Date('2011', '08', '16'), 
      cover: "../images/feed_19.png",
      url: "../lookpage.html",
      saves: 0,
    },
    {
      id: 20, 
      user: 'Mags Yip',
      rating: 235,  
      role: 'Editor',
      type: 'flatlay',  
      pubdate: new Date('2011', '08', '16'), 
      cover: "../images/feed_20.jpg",
      url: "../lookpage.html",
      saves: 0,
    },
    {
      id: 21, 
      user: 'Mags Yip',
      rating: 235,  
      role: 'Editor',
      type: 'flatlay',  
      pubdate: new Date('2011', '08', '16'), 
      cover: "../images/feed_21.jpg",
      url: "../lookpage.html",
      saves: 0,
    },
    {
      id: 22, 
      user: 'Mags Yip',
      rating: 235,  
      role: 'Editor',
      type: 'flatlay',  
      pubdate: new Date('2011', '08', '16'), 
      cover: "../images/feed_22.jpg",
      url: "../lookpage.html",
      saves: 0,
    },
    {
      id: 23, 
      user: 'Mags Yip',
      rating: 235,  
      role: 'Editor',
      type: 'flatlay',  
      pubdate: new Date('2011', '08', '16'), 
      cover: "../images/feed_23.jpg",
      url: "../lookpage.html",
      saves: 0,
    },
    {
      id: 24, 
      user: 'Mags Yip',
      rating: 235,  
      role: 'Editor',
      type: 'flatlay',  
      pubdate: new Date('2011', '08', '16'), 
      cover: "../images/feed_24.jpg",
      url: "../lookpage.html",
      saves: 0,
    },
    {
      id: 25, 
      user: 'Mags Yip',
      rating: 235,  
      role: 'Editor',
      type: 'flatlay',  
      pubdate: new Date('2011', '08', '16'), 
      cover: "../images/feed_25.jpg",
      url: "../lookpage.html",
      saves: 0,
    },
    {
      id: 26, 
      user: 'Mags Yip',
      rating: 235,  
      role: 'Editor',
      type: 'flatlay',  
      pubdate: new Date('2011', '08', '16'), 
      cover: "../images/feed_26.jpg",
      url: "../lookpage.html",
      saves: 0,
    },
    {
      id: 27, 
      user: 'Mags Yip',
      rating: 235,  
      role: 'Editor',
      type: 'flatlay',  
      pubdate: new Date('2011', '08', '16'), 
      cover: "../images/feed_27.jpg",
      url: "../lookpage.html",
      saves: 0,
    },
    {
      id: 28, 
      user: 'Mags Yip',
      rating: 235,  
      role: 'Editor',
      type: 'flatlay',  
      pubdate: new Date('2011', '08', '16'), 
      cover: "../images/feed_28.jpg",
      url: "../lookpage.html",
      saves: 0,
    },
    {
      id: 29, 
      user: 'Mags Yip',
      rating: 235,  
      role: 'Editor',
      type: 'flatlay',  
      pubdate: new Date('2011', '08', '16'), 
      cover: "../images/feed_29.jpg",
      url: "../lookpage.html",
      saves: 0,
    }
  ];
  $scope.lists = [
    {name: 'My wish list'},
    {name: 'New dress'},
    {name: 'Sneakers'},
    {name: 'Read later'},
    {name: 'Jeans'},
  ];
  $scope.activePost = null;
  $scope.addListMode = null;
  $scope.plusOne = function(index) { 
  	$scope.posts[index].saves += 1; 
	};
  var saveFadeTimeout = null;
  $scope.saveActiveTo = function(list){
    list.savedItems = list.savedItems || [];
    var index = list.savedItems.indexOf($scope.activePost);
    if (index >= 0){
      list.savedItems.splice(index, 1);
    }else{
      list.savedItems.push($scope.activePost);
    }
    clearTimeout(saveFadeTimeout);
    saveFadeTimeout = setTimeout(function(){
      $scope.savePost(null);
      $scope.$apply();
    }, 1500);
  };
  $scope.overlayClass = function(postId){
    return postId == $scope.activePost ? 'shown' : '';
  }
  $scope.listClass = function(list){
    return (list.savedItems || []).indexOf($scope.activePost) >= 0 ? 'saved' : '';
  }
  $scope.savePost = function(postId){
    $scope.activePost = postId;
  }
  $scope.addList = function(newListName){
    $scope.lists.push({name: newListName});
    $scope.setMode('');
  }
  $scope.setMode = function(mode){
    $scope.addListMode = mode;
  }
  $scope.getMode = function(){
    return $scope.addListMode;
  }
}]);