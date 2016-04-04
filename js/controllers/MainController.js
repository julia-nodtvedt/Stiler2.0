app.controller('MainController', ['$scope', function($scope) { 
  $scope.posts = [
  	{
      id: 1, 
    	user: 'Mags Yip',
      rating: 235, 
    	role: 'Editor',
      type: 'article', 
    	pubdate: new Date('2014', '03', '08'), 
    	cover: "../images/article1.png",
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
      cover: "../images/ooh-couture201603.jpg",
      url: "../lookpage.html",
      saves:  0
    }, 
  	{
      id: 3, 
    	user: 'Julia Dahl',
      rating: 235,  
    	role: 'Editor',
      type: 'article',  
    	pubdate: new Date('2013', '08', '01'), 
    	cover: "../images/article2.png",
      category: 'Looks for less',
      title: "Get Ciara's casual holiday style",
      url: "../article.html",
    	saves: 0
  	}, 
  	{
      id: 4, 
    	User: 'Alexandra Dean',
      rating: 235,  
    	role: 'Editor',
      type: 'article',  
    	pubdate: new Date('1999', '07', '08'), 
    	cover: "../images/article3.png",
      category: 'Looks for less',
      title: "Get Ciara's casual holiday style",
      url: "../article.html",
    	saves: 0,
  	}, 
  	{
      id: 5, 
    	user: 'Mags Yip',
      rating: 235,  
    	role: 'Editor',
      type: 'article',  
    	pubdate: new Date('2011', '08', '16'), 
    	cover: "../images/article4.png",
      category: 'Looks for less',
      title: "Get Ciara's casual holiday style",
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
      cover: "../images/article5.png",
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
      cover: "../images/article6.png",
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
      cover: "../images/article1.png",
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
      cover: "../images/article2.png",
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
      cover: "../images/article3.png",
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
      cover: "../images/article6.png",
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
  $scope.saveActiveTo = function(list){
    list.savedItems = list.savedItems || [];
    var index = list.savedItems.indexOf($scope.activePost);
    if (index >= 0){
      list.savedItems.splice(index, 1);
    }else{
      list.savedItems.push($scope.activePost);
    }
    setTimeout(function(){
      $scope.savePost(null);
      $scope.$apply();
    }, 250);
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