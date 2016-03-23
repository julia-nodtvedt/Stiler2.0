app.controller('MainController', ['$scope', function($scope) { 
  $scope.posts = [
  	{ 
    	user: 'Mags Yip', 
    	role: 'Editor', 
    	pubdate: new Date('2014', '03', '08'), 
    	cover: "../images/article3.png",
    	saves: 0,
  	}, 
  	{ 
    	user: 'Julia Dahl', 
    	role: 'Editor', 
    	pubdate: new Date('2013', '08', '01'), 
    	cover: "../images/article3.png",
    	saves: 0,
  	}, 
  	{ 
    	User: 'Alexandra Dean', 
    	role: 'Editor', 
    	pubdate: new Date('1999', '07', '08'), 
    	cover: "//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/cinderella.jpg",
    	saves: 0,
  	}, 
  	{ 
    	user: 'Mags Yip', 
    	role: 'Editor', 
    	pubdate: new Date('2011', '08', '16'), 
    	cover: "//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/mulan_2.jpg",
    	saves: 0,
  	},
    { 
      user: 'Mags Yip', 
      role: 'Editor', 
      pubdate: new Date('2011', '08', '16'), 
      cover: "//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/mulan_2.jpg",
      saves: 0,
    },
    { 
      user: 'Mags Yip', 
      role: 'Editor', 
      pubdate: new Date('2014', '03', '08'), 
      cover: "../images/article3.png",
      saves: 0,
    }, 
    { 
      user: 'Julia Dahl', 
      role: 'Editor', 
      pubdate: new Date('2013', '08', '01'), 
      cover: "../images/article3.png",
      saves: 0,
    }, 
    { 
      User: 'Alexandra Dean', 
      role: 'Editor', 
      pubdate: new Date('1999', '07', '08'), 
      cover: "//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/mulan_2.jpg",
      saves: 0,
    }, 
    { 
      user: 'Mags Yip', 
      role: 'Editor', 
      pubdate: new Date('2011', '08', '16'), 
      cover: "../images/article3.png",
      saves: 0,
    },
    { 
      user: 'Mags Yip', 
      role: 'Editor', 
      pubdate: new Date('2011', '08', '16'), 
      cover: "//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/cinderella.jpg",
      saves: 0,
    }
  ];
  $scope.plusOne = function(index) { 
  	$scope.posts[index].saves += 1; 
	};
}]);