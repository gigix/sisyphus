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

function AllRocksCtrl($scope, $route) {
	$scope.rocks = new RocksRepository().loadAll();

	$scope.selected = {};

	$scope.createRock = function() {
		var title = prompt("What's the rock in your mind?");
		if(title == null || title.trim().length == 0) {
			return;
		}
		new RocksRepository().create(title);
		$route.reload();
	}
	
	$scope.deleteSelectedRocks = function() {
		var repository = new RocksRepository();
		var allRocks = repository.loadAll();
		var remainRocks = allRocks.filter(function(rock) {
			return !$scope.selected[rock.id];
		});
		repository.saveAll(remainRocks);
		$route.reload();
	}
}

function StatsCtrl() {
	
}
