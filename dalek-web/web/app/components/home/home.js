angular.module('app.home.home', [
  'app.core'
])
.config([
  '$stateProvider',
  function($stateProvider) {
    $stateProvider
    .state('app.home.home', {
      url: '',
      views: {
        '': {
          templateUrl: '/app/components/home/assets/templates/home.html',
          controller: 'HomeCtrl'
        }
      }
    });
  }
])
.controller('HomeCtrl', ['$scope', function($scope) {
  $scope.treeOptions = {
    data: [{
      name: 'Level 1-1',
      nodes: [{
        name: 'Link 2-1',
        link: '#'
      },{
        name: 'Level 2-2',
        nodes: [{
          name: 'Link 3-1',
          link: '#'
        },{
          name: 'Link 3-2',
          link: '#'
        },{
          name: 'Link 3-3',
          link: '#'
        }]
      },{
        name: 'Link 2-3',
        link: '#'
      }]
    }, {
      name: 'Level 1-2',
      nodes: [{
        name: 'Link 2-1',
        link: '#'
      }]
    }, {
      name: 'Level 1-3',
      nodes: [{
        name: 'Link 2-1',
        link: '#'
      }]
    }]
  };
}]);
