angular.module('app', [])

	.controller('mainCtrl', function($scope, Blog) {
      $scope.formData = {};

  		Blog.get()
  			.success(function(data) {
  				$scope.flight = data;
  			});


    		$scope.createBlogPost = function() {
    			if ($scope.formData.title != undefined) {
    				Blog.create($scope.formData)
    					.success(function(data) {
                
                $scope.formData = {};
    						$scope.flight = data;
    					});
    			}
    		};
	})


  .factory('Blog', function($http) {
		return {
			get : function() {
				return $http.get('/api/flight');
			},
			create : function(blogData) {
				return $http.post('/api/flight', blogData);
			},
			delete : function(id) {
				return $http.delete('/api/flight/' + id);
			}
		}
	