angular.module('sisyphus', []).
	config(['$routeProvider', function($routeProvider) {
		$routeProvider.
			when('/', {templateUrl: 'partials/home.html', controller: HomeCtrl}).
	      	when('/today', {templateUrl: 'partials/today.html',   controller: TodayCtrl}).
	      	when('/rocks', {templateUrl: 'partials/rocks.html',   controller: AllRocksCtrl}).
	      	when('/stats', {templateUrl: 'partials/stats.html',   controller: StatsCtrl}).
	      	otherwise({redirectTo: '/'});
	}]);