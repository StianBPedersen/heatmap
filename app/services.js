angular.module('heatmap.services', ['ngResource', 'ngMockE2E'])
	.factory('Stats', ['$resource', function($resource) {
		return $resource('/', {}, {});
	}])

	.factory('Fetch', function($q, $timeout, Stats) {
		var obj = {};

		obj.get = function() {
			var defer = $q.defer();

			Stats.query(function(res) {
				$timeout(function() {
					return defer.resolve(res);
				}, 500);
			});

			return defer.promise;
		}

		return obj;
	});
