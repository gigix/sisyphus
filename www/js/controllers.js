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
		'id': 1,
		'title': '解决测试跑两遍的问题',
		'done': true
	}, {
		'id': 2,
		'title': 'Governance meeting deck',
		'done': false
	}, {
		'id': 3,
		'title': 'Go through technical innovation initiatives',
		'done': false
	}];
}

function AllRocksCtrl($scope) {
	$scope.rocks = [{
		'id': 1,
		'title': 'Governance meeting deck'
	}, {
		'id': 2,
		'title': 'Followup Commercial status'
	}, {
		'id': 3,
		'title': 'Establish a connection with Maree'
	}, {
		'id': 4,
		'title': 'Revise LD plan'
	}, {
		'id': 5,
		'title': 'Send out leave request of Christmas'
	}, {
		'id': 6,
		'title': 'Governance meeting deck'
	}, {
		'id': 7,
		'title': 'Followup Commercial status'
	}, {
		'id': 8,
		'title': 'Establish a connection with Maree'
	}, {
		'id': 9,
		'title': 'Governance meeting deck'
	}, {
		'id': 10,
		'title': 'Governance meeting deck'
	}, {
		'id': 11,
		'title': 'Followup Commercial status'
	}, {
		'id': 12,
		'title': 'Establish a connection with Maree'
	}, {
		'id': 13,
		'title': 'Revise LD plan'
	}, {
		'id': 14,
		'title': 'Send out leave request of Christmas'
	}, {
		'id': 15,
		'title': 'Followup Commercial status'
	}, {
		'id': 16,
		'title': 'Establish a connection with Maree'
	}, {
		'id': 17,
		'title': 'Revise LD plan'
	}, {
		'id': 18,
		'title': 'Send out leave request of Christmas'
	}, {
		'id': 19,
		'title': 'Revise LD plan'
	}, {
		'id': 20,
		'title': 'Send out leave request of Christmas'
	}, {
		'id': 21,
		'title': "Prepare for Tuesday's session"
	}];
}

function StatsCtrl() {
	
}
