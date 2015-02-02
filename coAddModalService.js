angular.module('coAddModal')

.factory('coAddModal', function($modal) {
    return {
        open: function(options) {
            var modal = $modal.open({
                templateUrl: 'bower_components/coAddModal/coAddModalTemplate.html',
                controller: 'CoAddModalController as vm',
                resolve: {
                    options: function() {
                        return options
                    }
                }
            });
            modal.result.then(function(newResource) {
                if (options.resourceList) {
                    options.resourceList.push(newResource);
                }
                if (options.modalComplete) {
                    options.modalComplete(newResource);
                }
            });
        }
    }
});
