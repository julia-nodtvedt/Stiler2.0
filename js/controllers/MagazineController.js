app.controller('MagazineController', ['$scope', function($scope) { 
  $scope.images = [
  	{src:'images/rippedjeans14.jpg'},
  	{src:'images/rippedjeans2.jpg'},
  	{src:'images/rippedjeans3.jpg'},
  	{src:'images/rippedjeans4.jpg'},
  	{src:'images/rippedjeans1.jpg'},
  	{src:'images/rippedjeans2.jpg'},
  	{src:'images/rippedjeans3.jpg'},
  	{src:'images/rippedjeans4.jpg'}
  ];
  $scope.titleImage = 'images/rippedjeans_main.jpg';
  $scope.title = "It's all about ripped jeans this season";
  $scope.author = "Alexandra Dean";
  $scope.description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, ad obcaecati. Laboriosam ipsum officia aperiam corrupti atque expedita similique, corporis, tenetur ratione! Vero at quas quia aut eos! Ipsum, ipsam.";
}]);