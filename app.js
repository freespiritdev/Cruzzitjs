var app = angular.module('cruzzit', []);

app.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.test = 'Hey now!';

  $scope.posts = [
    {title: 'post 1', upvotes: 4},
    {title: 'post 2', upvotes: 8},
    {title: 'post 3', upvotes: 16},
    {title: 'post 4', upvotes: 24}
  ];

  $scope.addPost = function(){
    if(!$scope.title || $scope.title === '') { return; }
    $scope.posts.push({
      title: $scope.title, 
      link: $scope.link,
      upvotes:2
    });
    $scope.title = '';
    $scope.link = '';
  };

  $scope.incrementUpvotes = function(post) {
    post.upvotes += 1;
  };
}]);