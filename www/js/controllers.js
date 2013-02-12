function NavCtrl($scope, $location) {
    $scope.navClass = function (page) {
        var currentRoute = $location.path().substring(1) || 'home';
        return page === currentRoute ? 'active' : '';
    };        
}

function HomeCtrl() {
	
}

function TodayCtrl($scope) {
	$scope.rocks = [{
		'title': '解决测试跑两遍的问题',
		'done': true
	}, {
		'title': 'Governance meeting deck',
		'done': false
	}, {
		'title': 'Go through technical innovation initiatives',
		'done': false
	}];
}

function RocksCtrl() {
	
}

function StatsCtrl() {
	
}
