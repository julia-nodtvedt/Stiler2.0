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
      category: 'Blogger Style',
      title: "All White Outfit Inspiration",
      url: "../article.html",
      trends: ['Looks for less'],
      colours: [],
      products: [],
    	saves: 0
  	},
    {
      id: 2, 
      user: 'Alexandra Dean',
      rating: 235,  
      role: 'Editor',
      type: 'look',  
      pubdate: new Date('1999', '07', '08'), 
      cover: "../images/feed_4.jpg",
      category: 'Looks for less',
      url: "../lookpage.html",
      saves: 0,
    }, 
    {
      id: 3,
      user: 'Natasha Oakley',
      rating: 328, 
      role: 'Blogger',
      type: 'look',
      pubdate: new Date('2016', '03', '23'),
      cover: "../images/brontebeach1.jpg",
      url: "../lookpage.html",
      saves:  0
    }, 
  	{
      id: 5, 
    	user: 'Mags Yip',
      rating: 235,  
    	role: 'Editor',
      type: 'flatlay',  
    	pubdate: new Date('2011', '08', '16'), 
    	cover: "../images/feed_9.jpg",
      url: "../flatlaypage.html",
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
      title: "How to wear ripped jeans this season",
      url: "../magazine.html",
      saves: 0,
    },
    {
      id: 7, 
      user: 'Natasha Oakley',
      rating: 235,  
      role: 'Editor and Blogger',
      type: 'look',  
      pubdate: new Date('2014', '03', '08'), 
      cover: "../images/feed_7.jpg",
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
      category: 'Fashion Trends',
      title: "Key pieces this season",
      url: "../article.html",
      saves: 0,
    }, 
    {
      id: 9, 
      user: 'Alexandra Dean',
      rating: 235,  
      role: 'Editor',
      type: 'flatlay',  
      pubdate: new Date('1999', '07', '08'), 
      cover: "../images/feed_5.png",
      url: "../flatlaypage.html",
      saves: 0,
    }, 
    {
      id: 10, 
      user: 'Mags Yip',
      rating: 235,  
      role: 'Editor',
      type: 'look',  
      pubdate: new Date('2011', '08', '16'), 
      cover: "../images/feed_10.jpg",
      url: "../lookpage.html",
      saves: 0,
    },
    {
      id: 11, 
      user: 'Mags Yip',
      rating: 235,  
      role: 'Alexandra Dean',
      type: 'flatlay',  
      pubdate: new Date('2011', '08', '16'), 
      cover: "../images/feed_11.jpg",
      url: "../flatlaypage.html",
      saves: 0,
    },
    {
      id: 12, 
      user: 'Anna Lipinska',
      rating: 235,  
      role: 'Editor',
      type: 'look',  
      pubdate: new Date('2011', '08', '16'), 
      cover: "../images/feed_12.jpg",
      url: "../lookpage.html",
      saves: 0,
    },
    {
      id: 13, 
      user: 'Karen Smith',
      rating: 235,  
      role: 'Editor',
      type: 'flatlay',  
      pubdate: new Date('2011', '08', '16'), 
      cover: "../images/feed_13.jpg",
      url: "../flatlaypage.html",
      saves: 0,
    },
    {
      id: 14, 
      user: 'Mags Yip',
      rating: 235,  
      role: 'Editor',
      type: 'article',  
      pubdate: new Date('2011', '08', '16'), 
      cover: "../images/feed_14.png",
      category: 'Fashion Inspiration',
      title: "What to wear for you next road trip",
      url: "../article.html",
      saves: 0,
    },
    {
      id: 15, 
      user: 'Emily Fulton',
      rating: 235,  
      role: 'Editor and Blogger',
      type: 'look',  
      pubdate: new Date('2011', '08', '16'), 
      cover: "../images/feed_15.jpg",
      url: "../lookpage.html",
      saves: 0,
    },
    {
      id: 16, 
      user: 'Megan Ellaby',
      rating: 235,  
      role: 'Blogger',
      type: 'look',  
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
      type: 'look',  
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
      type: 'article',  
      pubdate: new Date('2011', '08', '16'), 
      cover: "../images/feed_18.png",
      category: 'Looks for less',
      title: "California Dreaming: Get the west coast style for less",
      url: "../article.html",
      saves: 0,
    },
    {
      id: 19, 
      user: 'Mags Yip',
      rating: 235,  
      role: 'Editor',
      type: 'look',  
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
      type: 'look',  
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
      type: 'look',  
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
      type: 'look',  
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
      url: "../flatlaypage.html",
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
      url: "../flatlaypage.html",
      saves: 0,
    },
    {
      id: 25, 
      user: 'Mags Yip',
      rating: 235,  
      role: 'Editor',
      type: 'look',  
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
      type: 'look',  
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
      type: 'look',  
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
      type: 'look',  
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
      type: 'look',  
      pubdate: new Date('2011', '08', '16'), 
      cover: "../images/feed_29.jpg",
      url: "../lookpage.html",
      saves: 0,
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
    }
  ];
  for (var i=1;i<=8;i++){
    $scope.posts.push({
      id: 100 + i, 
      user: 'Mags Yip',
      rating: 235,  
      role: 'Editor',
      type: 'look',  
      pubdate: new Date('2011', '08', '16'), 
      cover: "images/all-jeans/jeans view all "+i+".jpg",
      url: "../lookpage.html",
      products: ['jeans'],
      subproducts: [(i == 2 || i == 5) ? 'jeans-jackets' : 'jeans-trousers'],
      saves: 0
    });
  }
  for (var i=1;i<=7;i++){
    $scope.posts.push({
      id: 200 + i, 
      user: 'Mags Yip',
      rating: 235,  
      role: 'Editor',
      type: [(i == 1 || i == 5) ? 'flatlay' : 'look'],  
      pubdate: new Date('2011', '08', '16'), 
      cover: "images/black-jeans/black jeans "+i+".jpg",
      url: [(i == 1 || i == 5) ? '.../flatlaypage.html' : '.../lookpage.html'],
      products: ['jeans'],
      subproducts: ['jeans-trousers'],
      colours: ['black'],
      saves: 0
    });
  }
  for (var i=1;i<=14;i++){
    var jackets = 
    $scope.posts.push({
      id: 200 + i, 
      user: 'Mags Yip',
      rating: 235,  
      role: 'Editor',
      type: 'look',  
      pubdate: new Date('2011', '08', '16'), 
      cover: "images/ripped-jeans/Cat ripped jeans "+i+".jpg",
      url: "../lookpage.html",
      products: ['jeans'],
      subproducts: ['jeans-trousers'],
      trends: ['ripped jeans'],
      saves: 0
    });
  }
  $scope.filterCategories = {
    trends: ['most popular', 'trending' ,'new in', 'ponchos', 'stripes', 'casual', 'classic shorts', 'ripped jeans', 'on your head', 'fringe fever',
'girls night out', 'chic to work', 'animal print', 'flared pants', 'platforms', 'flower power', 'tartan', 'pretty pastel', 'aztec invasion'],
    colours: ['brown','red','orange','yellow','green','darkgreen','black','grey','purple','blue','lightblue','nude'],
    products: ['accessories','all-in-one','bags & purses','coats','dresses','footwear','jackets','jeans','knitwear','lingerie','nightwear & slippers','shorts','skirts','swimwear','trousers'],
    subproducts: ['jeans-jackets','jeans-trousers']
  }
  $scope.getSubProducts = function(){
    if ($scope.filters['products'] == null){
      return [];
    }
    var subs = _.filter($scope.filterCategories['subproducts'], function(sp){
      return sp.indexOf($scope.filters['products'] + '-') == 0;
    });
    return subs;
  }
  $scope.hasSubProducts = function(){
    var subs = $scope.getSubProducts();
    return subs.length > 0;
  }
  /*
  $scope.filterCategories = {
    trends: _.filter(_.uniq(_.flatten(_.pluck($scope.posts, "trends"))), function(s){return !!s;}),
    colours: _.filter(_.uniq(_.flatten(_.pluck($scope.posts, "colours"))), function(s){return !!s;}),
    products: _.filter(_.uniq(_.flatten(_.pluck($scope.posts, "products"))), function(s){return !!s;})
  }
  */
  $scope.getBgColour = function(c){
    return {
      'nude': '#e5b292'
    }[c] || c;
  }
  $scope.getActiveClass = function(a){
    return a ? 'active' : '';
  }
  $scope.toggle = function(a,b){
    var ret = a == b ? '' : b;
    if (ret != 'trend'){
      $scope.filters['trends'] = null;      
    }
    if (ret != 'colour'){
      $scope.filters['products'] = null;
      $scope.filters['subproducts'] = null;
      $scope.filters['colours'] = null;
    }
    $scope.filter();
    return ret;
  }
  $scope.filters = {
    trends: null,
    colours: null,
    products: null,
    subproducts: null
  };
  $scope.filter = function(type, by){
    if (type){
      $scope.filters[type] = by;
      if (type == 'products'){
        $scope.filters['subproducts'] = null;
      }
    }
    $scope.filteredPosts = _.filter($scope.posts, function(post){
      for (var f in $scope.filters){
        if ($scope.filters[f] && (!post[f] || post[f].indexOf($scope.filters[f]) < 0 )){
          return false;
        }
      }
      return true;
    });

    setTimeout(function(){
      window.dispatchEvent(new Event('resize'));
    }, 10);
  }
  $scope.filter();

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