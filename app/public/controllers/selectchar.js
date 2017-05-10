/**
* @ngdoc controller
* @name guruGiff.controller:selectcharController
*
* @description
* in this controller we are handling the drag and drop of images
* and storing the images in an object
*/


app.controller('selectcharController', function ($scope, $http) {
  /**
  * @param {object} listItems This object contain image url of toolactivity images
  *
  */
        $scope.listItems = [{
                title: "./assests/images/cloud.png"

            },
            {
                title: "./assests/images/small_giff.png"

            },
            {
                title: "./assests/images/six.jpg"

            },
            {
                title: "./assests/images/red.png"

            },
            {
                title: "./assests/images/star.png"
            }
        ];
        // console.log($scope.listItems);
/**
*  @param {array} droppedObjectsInChar This array contain the images dropped only in characterholder
*  @param {array} droppedObjectsInScore This array contain the images dropped only in scoreholder
* @param {array} droppedObjectsInBg This array contain the images dropped only in backgroundholder
*
*/
        $scope.droppedObjectsInChar = [];
        $scope.droppedObjectsInScore = [];
        $scope.droppedObjectsInBg = [];
        $scope.input = {};

        /**
        * @ngdoc method
        * @name onDragCompleteInChar
        * @methodOf guruGiff.controller:selectcharController
        * @description
        * This method is call when image is dragged successfully from characterholder
        * at that time store index of that data from droppedObjectsInChar array in variable index
        * and using splice method remove it from the array.
        */
        // drag complete over drop area
        $scope.onDragCompleteInChar = function(data, evt) {
            var index = $scope.droppedObjectsInChar.indexOf(data);
            console.log(index);
            if (index > -1) {
                $scope.droppedObjectsInChar.splice(index, 1);
            }
        }
        /**
        * @ngdoc method
        * @name onDropCompleteInChar
        * @methodOf guruGiff.controller:selectcharController
        * @description
        * This method is call when image is dropped in characterholder
        * if index of that data will be -1 in onDropCompleteInChar array
        * then puch the value in same array using push method
        */

        // drop complete over drop area
        $scope.onDropCompleteInChar = function(data, evt) {
            console.log("drop success, data:", data);
            var index = $scope.droppedObjectsInChar.indexOf(data);
            console.log(index);
            if (index == -1)
                $scope.droppedObjectsInChar.push(data);
        }

        /**
        * @ngdoc method
        * @name onDragCompleteInScore
        * @methodOf guruGiff.controller:selectcharController
        * @description
        * This method is call when image is dragged successfully from characterholder
        *  store index of that data from onDragCompleteInScore array in variable index
        * and using splice method remove it from the array.
        */
        $scope.onDragCompleteInScore = function(data, evt) {
            // console.log("drag success, data:", data);
            var index = $scope.droppedObjectsInScore.indexOf(data);
            console.log(index);
            if (index > -1) {
                $scope.droppedObjectsInScore.splice(index, 1);
                // $scope.listItems.splice(index, 1);
            }
        }
        /**
        * @ngdoc method
        * @name onDragCompleteInScore
        * @methodOf guruGiff.controller:selectcharController
        * @description
        * This method is call when image is dropped in characterholder
        * if index of that data will be -1 in onDragCompleteInScore array
        * then puch the value in same array using push method
        */
        $scope.onDropCompleteInScore  = function(data, evt) {
            console.log("drop success, data:", data);
            var index = $scope.droppedObjectsInScore.indexOf(data);
            console.log(index);
            if (index == -1)
                $scope.droppedObjectsInScore.push(data);
        }

        /**
        * @ngdoc method
        * @name onDragCompleteInBg
        * @methodOf guruGiff.controller:selectcharController
        * @description
        * This method is call when image is dragged successfully from characterholder
        *  store index of that data from onDragCompleteInBg array in variable index
        * and using splice method remove it from the array.
        */
        $scope.onDragCompleteInBg = function(data, evt) {
            // console.log("drag success, data:", data);
            var index = $scope.droppedObjectsInBg.indexOf(data);
            console.log(index);
            if (index > -1) {
                $scope.droppedObjectsInBg.splice(index, 1);
                // $scope.listItems.splice(index, 1);
            }
        }
        /**
        * @ngdoc method
        * @name onDropCompleteInBg
        * @methodOf guruGiff.controller:selectcharController
        * @description
        * This method is call when image is dropped in characterholder
        * if index of that data will be -1 in onDropCompleteInBg array
        * then puch the value in same array using push method
        */
        $scope.onDropCompleteInBg  = function(data, evt) {
            console.log("drop success, data:", data);
            var index = $scope.droppedObjectsInBg.indexOf(data);
            console.log(index);
            if (index == -1)
                $scope.droppedObjectsInBg.push(data);
        }


        /**
        * @ngdoc method
        * @name onDragCompleteInList
        * @methodOf guruGiff.controller:selectcharController
        * @description
        * This method is call when image is dragged successfully from toolholder
        *  store index of that data from listItems object in variable index
        * and using splice method remove it from the object.
        */
        $scope.onDragCompleteInList = function(data, evt) {
            // console.log("drag success, data:", data);
            var index = $scope.listItems.indexOf(data);
            if (index > -1) {
                $scope.listItems.splice(index, 1);
                // $scope.listItems.splice(index, 1);
            }
        }

        /**
        * @ngdoc method
        * @name onDropCompleteInBg
        * @methodOf guruGiff.controller:selectcharController
        * @description
        * This method is call when image is dropped in toolholder
        * if index of that data will be -1 in listItems array
        * then puch the value in same object using push method
        */
        $scope.onDropCompleteInList = function(data, evt) {
            console.log("drop success, data:", data);
            var index = $scope.listItems.indexOf(data);
            // if (index == -1)
            $scope.listItems.push(data);
            // $scope.listItems.splice(data,1);
            // $scope.listItems.splice(data, 1);
        }

    });
