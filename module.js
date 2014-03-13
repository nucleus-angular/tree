angular.module('nag.tree', [
  'nag.core',
  'nag.dynamicEvent'
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
]);