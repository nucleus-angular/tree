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
angular.module('nag.tree.configurator', [
  'nag.core'
])
.run([
  'nagDefaults',
  'nagHelper',
  function(nagDefaults, nagHelper) {
    /**
     * Options
     *
     * @property {object} options
     *   @property {string} [templateUrl="tree.html"] Main template path
     *   @property {string} [recursionTemplateUrl="recursion.html"] Recursive template
     *   @property {object} data The data used to populate the tree
     *   @property {function} [getTemplatePath=function(){}] Function used to get template paths
     */
    nagDefaults.setOptions('tree', {
      templateUrl: 'nucleus-angular-tree/assets/templates/tree.html',
      recursionTemplateUrl: 'nucleus-angular-tree/assets/templates/recursion.html',
      data: [],
      getTemplatePath: function(templateName) {
        return nagHelper.getTemplatePath('tree', templateName);
      }
    });
  }
])
angular.module('nag.tree', [
  'nag.tree.configurator',
  'nag.core',
  'nag.dynamicEvent'
])
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
      compile: function(element, attributes, transclude) {
        return {
          pre: function(scope, element, attributes) {
            $(element).addClass('tree');

            scope.options = nagDefaults.getOptions('tree', scope.options);

            /**
             * Instance of nagHelper
             *
             * @ngscope
             * @property {object} nagHelper
             */
            scope.nagHelper = nagHelper;
          },
          post: function(scope, element, attributes) {
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
              $($event.currentTarget).toggleClass('tree-expanded');
            }

            /**
             * Function to perform when a node is clicked on
             *
             * @ngscope
             * @method nodeClick
             *
             * @param {object} $event Event object relating to the action
             * @param {object} nodeData Node data
             */
            scope.nodeClick = function($event, nodeData) {
              $event.preventDefault();
              $event.stopPropagation();
            }

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
            scope.hasNodes = function(data) {
              return (angular.isDefined(data.nodes) && angular.isArray(data.nodes));
            }
          }
        };
      }
    };
  }
]);
