/**
 * @ngdoc controller
 * @name koda.controller:game2algorithmCtrl
 *
 * @description
 * In this controller we are arranging the steps in sequence by draging and dropping
 * into correct box and validating it.
 */

app.controller('game2algorithmCtrl', function($scope, $state) {
  $('#display,#back_button,#next_button').css('filter','blur(5px)');
setTimeout(function(){
  $('#display,#back_button,#next_button').css('filter','blur(0px)')
},2500)
    $scope.isclicked = false;
    $scope.back = false;
    /**
     * @ngdoc method
     * @name back
     * @methodOf koda:game2algorithmCtrl
     * @description
     * This method is call when back button is clicked
     * to go back to previous page
     */
    $scope.back= function() {
      console.log("hii");
        $scope.back = true;
          $scope.isclicked = false;
    }
    $scope.back1= function() {
      console.log("hii");
        $scope.back = true;
          $scope.isclicked = false;
          $scope.droppedObjects1 = [];
              console.log($scope.droppedObjects1);
              $scope.droppedObjects2 = [];
              $scope.droppedObjects3 = [];
              $scope.droppedObjects4 = [];
              $scope.droppedObjects5 = [];
              $scope.algorithm = [{
                      rule: "./assests/images/giffrule1.png"
                  },
                  {
                      rule: "./assests/images/giffrule2.png"
                  },
                  {
                      rule: "./assests/images/giffrule3.png"
                  },
                  {
                      rule: "./assests/images/giffrule4.png"
                  },
                  {
                      rule: "./assests/images/giffrule5.png"
                  }
              ];

    }
    /**
     * @param {object} algorithm This object contain image url of steps of images
     *
     */
    $scope.algorithm = [{
            rule: "./assests/images/giffrule1.png"
        },
        {
            rule: "./assests/images/giffrule2.png"
        },
        {
            rule: "./assests/images/giffrule3.png"
        },
        {
            rule: "./assests/images/giffrule4.png"
        },
        {
            rule: "./assests/images/giffrule5.png"
        }
    ];
    /**
     * @param {object} correctSequence This object contain image url of correct sequence of steps.
     *
     */
    $scope.correctSequence = [{
            rule: "./assests/images/giffrule2.png"
        },
        {
            rule: "./assests/images/giffrule1.png"
        },
        {
            rule: "./assests/images/giffrule4.png"
        },
        {
            rule: "./assests/images/giffrule5.png"
        },
        {
            rule: "./assests/images/giffrule3.png"
        }
    ];

    /**
     * @param {object} droppedObjects Multiple objects to store the steps dropped.
     *
     */
    $scope.droppedObjects1 = [];
    $scope.droppedObjects2 = [];
    $scope.droppedObjects3 = [];
    $scope.droppedObjects4 = [];
    $scope.droppedObjects5 = [];
    /**
     * @ngdoc method
     * @name onDragComplete
     * @methodOf koda:game2algorithmCtrl
     * @description
     * This methods are called when  steps are dragged successfully from boxOfRules
     *  index of that step is stored  in variable index
     * and using splice method remove it from the array.
     */
    $scope.onDragComplete1 = function(data, evt) {
        var index = $scope.droppedObjects1.indexOf(data);
        if (index > -1) {
            $scope.droppedObjects1.splice(index, 1);
        }
    }

    $scope.onDragComplete2 = function(data, evt) {
        var index = $scope.droppedObjects2.indexOf(data);
        if (index > -1) {
            $scope.droppedObjects2.splice(index, 1);
        }
    }

    $scope.onDragComplete3 = function(data, evt) {
        var index = $scope.droppedObjects3.indexOf(data);
        if (index > -1) {
            $scope.droppedObjects3.splice(index, 1);
        }
    }

    $scope.onDragComplete4 = function(data, evt) {
        var index = $scope.droppedObjects4.indexOf(data);
        if (index > -1) {
            $scope.droppedObjects4.splice(index, 1);
        }
    }

    $scope.onDragComplete5 = function(data, evt) {
        var index = $scope.droppedObjects5.indexOf(data);
        if (index > -1) {
            $scope.droppedObjects5.splice(index, 1);
        }
    }
    /**
     * @ngdoc method
     * @name onDropComplete
     * @methodOf koda:game2algorithmCtrl
     * @description
     * This methods are called when steps are dropped in boxForCorrectRules
     * if index of that data will be -1 and contains no other element in its array
     * then puch the value in same array using push method orelse push back to the same array where it was earlier.
     */

    $scope.onDropComplete1 = function(data, evt) {
        var index = $scope.droppedObjects1.indexOf(data);
        if (index == -1 && $scope.droppedObjects1.length == 0) {
            $scope.droppedObjects1.push(data);
            console.log($scope.droppedObjects1);
        } else {
            $scope.algorithm.push(data);
        }
    }

    $scope.onDropComplete2 = function(data, evt) {
        var index = $scope.droppedObjects2.indexOf(data);
        if (index == -1 && $scope.droppedObjects2.length == 0) {
            $scope.droppedObjects2.push(data);
        } else {
            $scope.algorithm.push(data);
        }
    }

    $scope.onDropComplete3 = function(data, evt) {
        var index = $scope.droppedObjects3.indexOf(data);
        if (index == -1 && $scope.droppedObjects3.length == 0) {
            $scope.droppedObjects3.push(data);
        } else {
            $scope.algorithm.push(data);
        }
    }

    $scope.onDropComplete4 = function(data, evt) {
        var index = $scope.droppedObjects4.indexOf(data);
        if (index == -1 && $scope.droppedObjects4.length == 0) {
            $scope.droppedObjects4.push(data);
        } else {
            $scope.algorithm.push(data);
        }
    }

    $scope.onDropComplete5 = function(data, evt) {
        var index = $scope.droppedObjects5.indexOf(data);
        if (index == -1 && $scope.droppedObjects5.length == 0) {
            $scope.droppedObjects5.push(data);
        } else {
            $scope.algorithm.push(data);
        }
    }
    /**
     * @ngdoc method
     * @name onDragCompleteInList
     * @methodOf koda:game2algorithmCtrl
     * @description
     * This method is call when step is dragged successfully from boxForCorrectRules
     *  store index of that step fron algorithm array in variable index
     * and using splice method remove it from the object.
     */
  var index;
    $scope.onDragCompleteInList = function(data, evt) {
      index = $scope.algorithm.indexOf(data);
        console.log(index);
        if (index > -1) {
            $scope.algorithm.splice(index, 1,null);
            console.log($scope.algorithm);
        }

    }
    /**
     * @ngdoc method
     * @name onDropCompleteInList
     * @methodOf koda:game2algorithmCtrl
     * @description
     * This method is call when step is dropped in boxOfRules
     * if index of that data will be -1 in algorithm array
     * then puch the value in same object using push method
     */
    $scope.onDropCompleteInList = function(data, evt) {
      console.log(data);
        // $scope.algorithm.push(data);
        for (var i = 0; i < $scope.algorithm.length; i++) {
    if ($scope.algorithm[i] == null) {
      $scope.algorithm.splice(i, 1,data);
      break;
    }
  }

    }
    /**
     * @ngdoc method
     * @name clicked
     * @methodOf koda:game2algorithmCtrl
     * @description
     * This method is call when correct steps are placed in correct boxes
     * check ineach array if value is equal to in the correctSequence array
     * if true go to next page
     */
    $scope.clicked = function() {

        $('.alert').show();
        setTimeout(function() {
            $('.alert').hide();
        }, 2000);
        if ($scope.correctSequence[0].rule == $scope.droppedObjects1[0].rule) {
            if ($scope.correctSequence[1].rule == $scope.droppedObjects2[0].rule || $scope.correctSequence[2].rule == $scope.droppedObjects2[0].rule ) {
                if ($scope.correctSequence[2].rule == $scope.droppedObjects3[0].rule || $scope.correctSequence[1].rule == $scope.droppedObjects3[0].rule) {
                    if ($scope.correctSequence[3].rule == $scope.droppedObjects4[0].rule || $scope.correctSequence[4].rule == $scope.droppedObjects4[0].rule) {
                        if ($scope.correctSequence[4].rule == $scope.droppedObjects5[0].rule || $scope.correctSequence[3].rule == $scope.droppedObjects5[0].rule) {
                            $scope.isclicked = true;
                            console.log(  $scope.isclicked );
                            console.log("success");
                            $('.alert').hide();

                            // $state.go('typesOfChar3');
                        }
                    }
                }
            }
        } else {

            if ($scope.droppedObjects1[0].rule !== [] && $scope.droppedObjects2[0].rule !== [] && $scope.droppedObjects3[0].rule !== [] && $scope.droppedObjects4[0].rule !== [] && $scope.droppedObjects5[0].rule !== []) {
  console.log($scope.droppedObjects1[0].rule !== []);
                $('.alert').hide();
                $('.alertbox').show();
                setTimeout(function() {
                    $('.alertbox').hide();
                }, 2000);
            } else {
                $('.alert').show();
                setTimeout(function() {
                    $('.alert').hide();
                }, 2000);
            }
        }

    }
});
