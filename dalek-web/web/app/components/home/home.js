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
      expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
      collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
      nodes: [{
        name: 'Link 2-1',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      },{
        name: 'Level 2-2',
        expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
        collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
        nodes: [{
          name: 'Link 3-1',
          link: '#',
          staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
        },{
          name: 'Link 3-2',
          link: '#',
          staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
        },{
          name: 'Link 3-3',
          link: '#',
          staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
        }]
      },{
        name: 'Link 2-3',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      }]
    }, {
      name: 'Level 1-2',
      expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
      collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
      nodes: [{
        name: 'Link 2-1',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      }]
    }, {
      name: 'Level 1-3',
      expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
      collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
      nodes: [{
        name: 'Link 2-1',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      }]
    },{
      name: 'Level 1-1',
      expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
      collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
      nodes: [{
        name: 'Link 2-1',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      },{
        name: 'Level 2-2',
        expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
        collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
        nodes: [{
          name: 'Link 3-1',
          link: '#',
          staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
        },{
          name: 'Link 3-2',
          link: '#',
          staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
        },{
          name: 'Link 3-3',
          link: '#',
          staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
        }]
      },{
        name: 'Link 2-3',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      }]
    }, {
      name: 'Level 1-2',
      expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
      collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
      nodes: [{
        name: 'Link 2-1',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      }]
    }, {
      name: 'Level 1-3',
      expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
      collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
      nodes: [{
        name: 'Link 2-1',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      }]
    },{
      name: 'Level 1-1',
      expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
      collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
      nodes: [{
        name: 'Link 2-1',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      },{
        name: 'Level 2-2',
        expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
        collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
        nodes: [{
          name: 'Link 3-1',
          link: '#',
          staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
        },{
          name: 'Link 3-2',
          link: '#',
          staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
        },{
          name: 'Link 3-3',
          link: '#',
          staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
        }]
      },{
        name: 'Link 2-3',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      }]
    }, {
      name: 'Level 1-2',
      expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
      collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
      nodes: [{
        name: 'Link 2-1',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      }]
    }, {
      name: 'Level 1-3',
      expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
      collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
      nodes: [{
        name: 'Link 2-1',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      }]
    },{
      name: 'Level 1-1',
      expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
      collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
      nodes: [{
        name: 'Link 2-1',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      },{
        name: 'Level 2-2',
        expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
        collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
        nodes: [{
          name: 'Link 3-1',
          link: '#',
          staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
        },{
          name: 'Link 3-2',
          link: '#',
          staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
        },{
          name: 'Link 3-3',
          link: '#',
          staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
        }]
      },{
        name: 'Link 2-3',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      }]
    }, {
      name: 'Level 1-2',
      expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
      collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
      nodes: [{
        name: 'Link 2-1',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      }]
    }, {
      name: 'Level 1-3',
      expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
      collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
      nodes: [{
        name: 'Link 2-1',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      }]
    },{
      name: 'Level 1-1',
      expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
      collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
      nodes: [{
        name: 'Link 2-1',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      },{
        name: 'Level 2-2',
        expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
        collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
        nodes: [{
          name: 'Link 3-1',
          link: '#',
          staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
        },{
          name: 'Link 3-2',
          link: '#',
          staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
        },{
          name: 'Link 3-3',
          link: '#',
          staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
        }]
      },{
        name: 'Link 2-3',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      }]
    }, {
      name: 'Level 1-2',
      expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
      collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
      nodes: [{
        name: 'Link 2-1',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      }]
    }, {
      name: 'Level 1-3',
      expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
      collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
      nodes: [{
        name: 'Link 2-1',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      }]
    },{
      name: 'Level 1-1',
      expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
      collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
      nodes: [{
        name: 'Link 2-1',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      },{
        name: 'Level 2-2',
        expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
        collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
        nodes: [{
          name: 'Link 3-1',
          link: '#',
          staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
        },{
          name: 'Link 3-2',
          link: '#',
          staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
        },{
          name: 'Link 3-3',
          link: '#',
          staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
        }]
      },{
        name: 'Link 2-3',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      }]
    }, {
      name: 'Level 1-2',
      expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
      collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
      nodes: [{
        name: 'Link 2-1',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      }]
    }, {
      name: 'Level 1-3',
      expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
      collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
      nodes: [{
        name: 'Link 2-1',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      }]
    },{
      name: 'Level 1-1',
      expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
      collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
      nodes: [{
        name: 'Link 2-1',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      },{
        name: 'Level 2-2',
        expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
        collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
        nodes: [{
          name: 'Link 3-1',
          link: '#',
          staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
        },{
          name: 'Link 3-2',
          link: '#',
          staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
        },{
          name: 'Link 3-3',
          link: '#',
          staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
        }]
      },{
        name: 'Link 2-3',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      }]
    }, {
      name: 'Level 1-2',
      expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
      collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
      nodes: [{
        name: 'Link 2-1',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      }]
    }, {
      name: 'Level 1-3',
      expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
      collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
      nodes: [{
        name: 'Link 2-1',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      }]
    },{
      name: 'Level 1-1',
      expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
      collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
      nodes: [{
        name: 'Link 2-1',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      },{
        name: 'Level 2-2',
        expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
        collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
        nodes: [{
          name: 'Link 3-1',
          link: '#',
          staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
        },{
          name: 'Link 3-2',
          link: '#',
          staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
        },{
          name: 'Link 3-3',
          link: '#',
          staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
        }]
      },{
        name: 'Link 2-3',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      }]
    }, {
      name: 'Level 1-2',
      expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
      collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
      nodes: [{
        name: 'Link 2-1',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      }]
    }, {
      name: 'Level 1-3',
      expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
      collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
      nodes: [{
        name: 'Link 2-1',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      }]
    },{
      name: 'Level 1-1',
      expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
      collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
      nodes: [{
        name: 'Link 2-1',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      },{
        name: 'Level 2-2',
        expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
        collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
        nodes: [{
          name: 'Link 3-1',
          link: '#',
          staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
        },{
          name: 'Link 3-2',
          link: '#',
          staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
        },{
          name: 'Link 3-3',
          link: '#',
          staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
        }]
      },{
        name: 'Link 2-3',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      }]
    }, {
      name: 'Level 1-2',
      expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
      collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
      nodes: [{
        name: 'Link 2-1',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      }]
    }, {
      name: 'Level 1-3',
      expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
      collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
      nodes: [{
        name: 'Link 2-1',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      }]
    },{
      name: 'Level 1-1',
      expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
      collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
      nodes: [{
        name: 'Link 2-1',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      },{
        name: 'Level 2-2',
        expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
        collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
        nodes: [{
          name: 'Link 3-1',
          link: '#',
          staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
        },{
          name: 'Link 3-2',
          link: '#',
          staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
        },{
          name: 'Link 3-3',
          link: '#',
          staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
        }]
      },{
        name: 'Link 2-3',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      }]
    }, {
      name: 'Level 1-2',
      expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
      collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
      nodes: [{
        name: 'Link 2-1',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      }]
    }, {
      name: 'Level 1-3',
      expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
      collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
      nodes: [{
        name: 'Link 2-1',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      }]
    },{
      name: 'Level 1-1',
      expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
      collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
      nodes: [{
        name: 'Link 2-1',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      },{
        name: 'Level 2-2',
        expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
        collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
        nodes: [{
          name: 'Link 3-1',
          link: '#',
          staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
        },{
          name: 'Link 3-2',
          link: '#',
          staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
        },{
          name: 'Link 3-3',
          link: '#',
          staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
        }]
      },{
        name: 'Link 2-3',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      }]
    }, {
      name: 'Level 1-2',
      expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
      collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
      nodes: [{
        name: 'Link 2-1',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      }]
    }, {
      name: 'Level 1-3',
      expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
      collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
      nodes: [{
        name: 'Link 2-1',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      }]
    },{
      name: 'Level 1-1',
      expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
      collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
      nodes: [{
        name: 'Link 2-1',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      },{
        name: 'Level 2-2',
        expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
        collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
        nodes: [{
          name: 'Link 3-1',
          link: '#',
          staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
        },{
          name: 'Link 3-2',
          link: '#',
          staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
        },{
          name: 'Link 3-3',
          link: '#',
          staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
        }]
      },{
        name: 'Link 2-3',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      }]
    }, {
      name: 'Level 1-2',
      expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
      collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
      nodes: [{
        name: 'Link 2-1',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      }]
    }, {
      name: 'Level 1-3',
      expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
      collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
      nodes: [{
        name: 'Link 2-1',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      }]
    },{
      name: 'Level 1-1',
      expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
      collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
      nodes: [{
        name: 'Link 2-1',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      },{
        name: 'Level 2-2',
        expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
        collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
        nodes: [{
          name: 'Link 3-1',
          link: '#',
          staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
        },{
          name: 'Link 3-2',
          link: '#',
          staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
        },{
          name: 'Link 3-3',
          link: '#',
          staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
        }]
      },{
        name: 'Link 2-3',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      }]
    }, {
      name: 'Level 1-2',
      expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
      collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
      nodes: [{
        name: 'Link 2-1',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      }]
    }, {
      name: 'Level 1-3',
      expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
      collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
      nodes: [{
        name: 'Link 2-1',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      }]
    },{
      name: 'Level 1-1',
      expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
      collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
      nodes: [{
        name: 'Link 2-1',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      },{
        name: 'Level 2-2',
        expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
        collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
        nodes: [{
          name: 'Link 3-1',
          link: '#',
          staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
        },{
          name: 'Link 3-2',
          link: '#',
          staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
        },{
          name: 'Link 3-3',
          link: '#',
          staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
        }]
      },{
        name: 'Link 2-3',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      }]
    }, {
      name: 'Level 1-2',
      expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
      collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
      nodes: [{
        name: 'Link 2-1',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      }]
    }, {
      name: 'Level 1-3',
      expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
      collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
      nodes: [{
        name: 'Link 2-1',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      }]
    },{
      name: 'Level 1-1',
      expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
      collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
      nodes: [{
        name: 'Link 2-1',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      },{
        name: 'Level 2-2',
        expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
        collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
        nodes: [{
          name: 'Link 3-1',
          link: '#',
          staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
        },{
          name: 'Link 3-2',
          link: '#',
          staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
        },{
          name: 'Link 3-3',
          link: '#',
          staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
        }]
      },{
        name: 'Link 2-3',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      }]
    }, {
      name: 'Level 1-2',
      expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
      collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
      nodes: [{
        name: 'Link 2-1',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      }]
    }, {
      name: 'Level 1-3',
      expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
      collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
      nodes: [{
        name: 'Link 2-1',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      }]
    },{
      name: 'Level 1-1',
      expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
      collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
      nodes: [{
        name: 'Link 2-1',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      },{
        name: 'Level 2-2',
        expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
        collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
        nodes: [{
          name: 'Link 3-1',
          link: '#',
          staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
        },{
          name: 'Link 3-2',
          link: '#',
          staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
        },{
          name: 'Link 3-3',
          link: '#',
          staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
        }]
      },{
        name: 'Link 2-3',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      }]
    }, {
      name: 'Level 1-2',
      expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
      collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
      nodes: [{
        name: 'Link 2-1',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      }]
    }, {
      name: 'Level 1-3',
      expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
      collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
      nodes: [{
        name: 'Link 2-1',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      }]
    },{
      name: 'Level 1-1',
      expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
      collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
      nodes: [{
        name: 'Link 2-1',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      },{
        name: 'Level 2-2',
        expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
        collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
        nodes: [{
          name: 'Link 3-1',
          link: '#',
          staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
        },{
          name: 'Link 3-2',
          link: '#',
          staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
        },{
          name: 'Link 3-3',
          link: '#',
          staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
        }]
      },{
        name: 'Link 2-3',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      }]
    }, {
      name: 'Level 1-2',
      expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
      collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
      nodes: [{
        name: 'Link 2-1',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      }]
    }, {
      name: 'Level 1-3',
      expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
      collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
      nodes: [{
        name: 'Link 2-1',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      }]
    },{
      name: 'Level 1-1',
      expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
      collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
      nodes: [{
        name: 'Link 2-1',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      },{
        name: 'Level 2-2',
        expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
        collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
        nodes: [{
          name: 'Link 3-1',
          link: '#',
          staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
        },{
          name: 'Link 3-2',
          link: '#',
          staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
        },{
          name: 'Link 3-3',
          link: '#',
          staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
        }]
      },{
        name: 'Link 2-3',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      }]
    }, {
      name: 'Level 1-2',
      expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
      collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
      nodes: [{
        name: 'Link 2-1',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      }]
    }, {
      name: 'Level 1-3',
      expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
      collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
      nodes: [{
        name: 'Link 2-1',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      }]
    },{
      name: 'Level 1-1',
      expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
      collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
      nodes: [{
        name: 'Link 2-1',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      },{
        name: 'Level 2-2',
        expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
        collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
        nodes: [{
          name: 'Link 3-1',
          link: '#',
          staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
        },{
          name: 'Link 3-2',
          link: '#',
          staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
        },{
          name: 'Link 3-3',
          link: '#',
          staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
        }]
      },{
        name: 'Link 2-3',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      }]
    }, {
      name: 'Level 1-2',
      expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
      collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
      nodes: [{
        name: 'Link 2-1',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      }]
    }, {
      name: 'Level 1-3',
      expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
      collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
      nodes: [{
        name: 'Link 2-1',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      }]
    },{
      name: 'Level 1-1',
      expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
      collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
      nodes: [{
        name: 'Link 2-1',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      },{
        name: 'Level 2-2',
        expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
        collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
        nodes: [{
          name: 'Link 3-1',
          link: '#',
          staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
        },{
          name: 'Link 3-2',
          link: '#',
          staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
        },{
          name: 'Link 3-3',
          link: '#',
          staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
        }]
      },{
        name: 'Link 2-3',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      }]
    }, {
      name: 'Level 1-2',
      expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
      collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
      nodes: [{
        name: 'Link 2-1',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      }]
    }, {
      name: 'Level 1-3',
      expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
      collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
      nodes: [{
        name: 'Link 2-1',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      }]
    },{
      name: 'Level 1-1',
      expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
      collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
      nodes: [{
        name: 'Link 2-1',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      },{
        name: 'Level 2-2',
        expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
        collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
        nodes: [{
          name: 'Link 3-1',
          link: '#',
          staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
        },{
          name: 'Link 3-2',
          link: '#',
          staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
        },{
          name: 'Link 3-3',
          link: '#',
          staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
        }]
      },{
        name: 'Link 2-3',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      }]
    }, {
      name: 'Level 1-2',
      expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
      collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
      nodes: [{
        name: 'Link 2-1',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      }]
    }, {
      name: 'Level 1-3',
      expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
      collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
      nodes: [{
        name: 'Link 2-1',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      }]
    },{
      name: 'Level 1-1',
      expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
      collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
      nodes: [{
        name: 'Link 2-1',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      },{
        name: 'Level 2-2',
        expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
        collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
        nodes: [{
          name: 'Link 3-1',
          link: '#',
          staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
        },{
          name: 'Link 3-2',
          link: '#',
          staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
        },{
          name: 'Link 3-3',
          link: '#',
          staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
        }]
      },{
        name: 'Link 2-3',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      }]
    }, {
      name: 'Level 1-2',
      expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
      collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
      nodes: [{
        name: 'Link 2-1',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      }]
    }, {
      name: 'Level 1-3',
      expandedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-bottom.svg',
      collapsedSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/chevron-right.svg',
      nodes: [{
        name: 'Link 2-1',
        link: '#',
        staticSvg: '/components/nucleus-angular-sass-framework/assets/svg/open-iconic/svg/file.svg'
      }]
    }]
  };
}]);
