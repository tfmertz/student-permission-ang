studentRoster.controller('FieldTripsCtrl', function FieldTripsCtrl($scope, StudentsFactory) {
    $scope.students = StudentsFactory.students;
    $scope.addPermissionSlip = function(student) {
      student.permissionSlip = true;
    };

    $scope.removePermissionSlip = function(student) {
      student.permissionSlip = false;
    }
});
