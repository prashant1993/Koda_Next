app.controller('wrongMovesCtrl',function($scope,$rootScope,progressService){
  $(document).ready(function () {
    $("#myProgress,#myBar").show();
      setTimeout(function () {
        $("#pointing").show(1000);
      },1000);

    });
  $scope.showModal = false;
     $scope.buttonClicked = "";
     $scope.toggleModal = function(btnClicked){
         $scope.buttonClicked = btnClicked;
         $scope.showModal = !$scope.showModal;
     };

$rootScope.progress= progressService.rearrangeMoves;
});



      function allowDrop(ev) {
          ev.preventDefault();
      }

      function drag(ev) {
          ev.dataTransfer.setData("text", ev.target.id);
      }

      function drop(ev) {

              ev.preventDefault();
              var data ;

              if($(ev.target).hasClass('drop')){
                data = ev.dataTransfer.getData("text");
                console.log(data);
                        ev.target.appendChild(document.getElementById(data));
              }
              else{
                    console.log("error");
              }
            }
      function drop1(ev) {
                ev.preventDefault();
                var data = ev.dataTransfer.getData("text");
                console.log(data);
                if($(ev.target).hasClass('lionImgBorder')){
                    ev.target.appendChild(document.getElementById(data));
                }
                else{
                  alert("already having content");
                }
              }
