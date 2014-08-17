/**
 * # Tree
 *
 * The directive allows you to create a tree like dropdown, like you see with file system viewers.
 *
 * EXAMPLE TODO
 *
 * @module nag.tree
 * @ngdirective nagTree
 *
 * @nghtmlattribute {object} nag-tree Tell AngularJS this element is a tree component and the passed object overwrite defaults for $scope.options
 */
angular.module('nag.tree')
.directive('nagTree', [
  '$compile',
  'nagHelper',
  'nagDefaults',
  function($compile, nagHelper, nagDefaults) {
    return {
      restrict: 'A',
      scope: {
        options: '=nagTree'
      },
      templateUrl: function(element, attributes) {
        return nagHelper.getTemplatePath('tree');
      },
      link: //function(element, attributes, transclude) {
        //return {
        //  pre: function(scope, element, attributes) {
        //  },
        /*  post:*/ function(scope, element, attributes) {
            $(element).addClass('tree');

            scope.options = nagDefaults.getOptions('tree', scope.options);

            /**
             * Instance of nagHelper
             *
             * @ngscope
             * @property {object} nagHelper
             */
            scope.nagHelper = nagHelper;

            /**
             * Function to perform when a tree is clicked on
             *
             * @ngscope
             * @method treeClick
             *
             * @param {object} $event Event object relating to the action
             */
            scope.treeClick = function($event) {
              $event.preventDefault();
              $event.stopPropagation();
              $($event.currentTarget).toggleClass('expanded');
            };

            /**
             * Function to perform when a node is clicked on
             *
             * @ngscope
             * @method nodeClick
             *
             * @param {object} $event Event object relating to the action
             * @param {object} nodeData Node data
             */
            scope.leafClick = function($event, nodeData) {
              $event.preventDefault();
              $event.stopPropagation();
            };

            /**
             * Determine if the passed in data has nodes
             *
             * @ngscope
             * @method hasNodes
             *
             * @param {object} data Data to look at for nodes
             *
             * @returns {boolean} Whether or not the passed in data has nodes
             */
            scope.hasNodes = function(nodeData) {
              return (angular.isDefined(nodeData.nodes) && angular.isArray(nodeData.nodes));
            };

            scope.hasIcon = function(nodeData) {
              if(scope.hasNodes(nodeData)) {
                return (!!nodeData.expandedSvg || !!nodeData.collapsedSvg);
              } else {
                return !!nodeData.staticSvg;
              }
            };

            scope.getIconPath = function(nodeData) {
              var iconPath;

              if(scope.hasNodes(nodeData)) {
                iconPath = nodeData.expandedSvg;
              } else if(!!nodeData.staticSvg) {
                iconPath = nodeData.staticSvg;
              }

              return iconPath;
            };

            //TODO: research: this seems to work however I have not idea and it only gets called 2 times even though it can take a while to load large tree
            var interval = setInterval(function() {
              //console.log('test');
              if(element.find('img').length > 0) {
                //console.log('test2');
                clearInterval(interval);
                SVGInjector(element.find('img').get());
              }
            }, 0);
          }
        //};
      //}
    };
  }
]);
