describe('Tree', function(){
  var $compile, $scope;

  beforeEach(module('nag.tree'));

  //update root path for templates to account for how they are serve from within the unit tests
  angular.module('nag.tree')
  .value('nag.defaults', {
    tree: {
      rootTemplatePath: '/base/assets/templates'
    }
  });

  beforeEach(inject(function($injector) {
    $scope = $injector.get('$rootScope');
    $compile = $injector.get('$compile');
    nagHelper = $injector.get('nagHelper');

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
          name: 'Link 2-2',
          link: '#'
        }]
      }, {
        name: 'Level 1-3',
        nodes: [{
          name: 'Link 2-3',
          link: '#'
        }]
      }]
    };

    //pre load needed templates as right now $httpBackend does not have the passThrough() method (might be a bug)
    nagHelper.getAsyncTemplate('/base/assets/templates/tree.html');
    nagHelper.getAsyncTemplate('/base/assets/templates/recursion.html');
  }));

  var setupElement = function(scope) {
    var element = $compile('<div nag-tree="treeOptions"></div>')(scope);
    scope.$digest();
    return element;
  }

  it('should have proper structure', function() {
    var element = setupElement($scope);

    expect(element.find('> ul > .nag-tree-element').length).toEqual(3);
    expect(element.find('> ul > .nag-tree-element:nth-child(1) > ul > .nag-tree-element').length).toEqual(1);
    expect(element.find('> ul > .nag-tree-element:nth-child(1) > ul > .nag-node').length).toEqual(2);
    expect(element.find('> ul > .nag-tree-element:nth-child(1) > ul > .nag-tree-element:nth-child(2) > ul > .nag-node').length).toEqual(3);
    expect(element.find('> ul > .nag-tree-element:nth-child(2) > ul > .nag-node').length).toEqual(1);
    expect(element.find('> ul > .nag-tree-element:nth-child(3) > ul > .nag-node').length).toEqual(1);
  });
});
