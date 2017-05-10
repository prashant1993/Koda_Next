app.directive('modal', function () {
    return {
      template: '<div class="modal fade" >' +
                '<div class="modal-content" style=" width: 275px; height: 180px; margin-left: 200px; margin-top: 780px; overflow: hidden; border: 5px solid yellow;">' +
                  '<div class="modal-body" ng-transclude></div>' +
                '</div>' +
            '</div>',
      restrict: 'E',
      transclude: true,
      replace:true,
      scope:true,
      link: function postLink(scope, element, attrs) {
          scope.$watch(attrs.visible, function(value){
          if(value == true)
            $(element).modal('show');
          else
            $(element).modal('hide');
        });

        $(element).on('shown.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = true;
          });
        });

        $(element).on('hidden.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = false;
          });
        });
      }
    };
  });
