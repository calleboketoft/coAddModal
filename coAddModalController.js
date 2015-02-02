angular.module('coAddModal')

.controller('CoAddModalController', function($modalInstance, options) {
    var vm = this;

    vm.options = options;
    vm.saveNew = saveNew;
    vm.cancelNew = $modalInstance.dismiss;

    function saveNew() {
        vm.isSaving = true;

        var createPromise;
        if (options.resourceType === 'dependent') {
            createPromise = options.Resource.create({ id: options.newData.id }, options.newData.data).$promise;
        } else if (options.resourceType === 'independent') {
            createPromise = options.Resource.create(options.newData.data).$promise;
        }

		createPromise.then(function(res) {
			$modalInstance.close(res);
		}).finally(function() {
			vm.isSaving = false;
		});
    }
});
