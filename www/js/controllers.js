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

function AllRocksCtrl($scope) {
	$scope.rocks = [{
		'title': 'Governance meeting deck'
	}, {
		'title': 'Followup Commercial status'
	}, {
		'title': 'Establish a connection with Maree'
	}, {
		'title': 'Revise LD plan'
	}, {
		'title': 'Send out leave request of Christmas'
	}, {
		'title': "Prepare for Tuesday's session"
	}];
}

function StatsCtrl() {
	
}
