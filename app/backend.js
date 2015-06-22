angular.module('heatmap.backend', ['ngMockE2E'])
	.run(['$httpBackend', function($httpBackend) {
		
		arrClicks = [
			{ id: 0, clicks: 1000 },
			{ id: 1, clicks: 1100 },
			{ id: 2, clicks: 1200 },
			{ id: 3, clicks: 50 },
			{ id: 4, clicks: 1400 },
			{ id: 5, clicks: 1500 },
			{ id: 6, clicks: 1600 },
			{ id: 7, clicks: 900 },
			{ id: 8, clicks: 800 },
			{ id: 9, clicks: 700 },
			{ id: 10, clicks: 600 },
			{ id: 11, clicks: 500 },
			{ id: 12, clicks: 400 },
			{ id: 13, clicks: 300 },
			{ id: 14, clicks: 200 },
			{ id: 15, clicks: 1250 },
			{ id: 16, clicks: 0 }
		];

		$httpBackend.whenGET('/').respond(arrClicks);

		
		$httpBackend.whenGET(/^partials\//).passThrough();
	}]);