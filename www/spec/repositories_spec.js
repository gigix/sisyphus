describe("RocksRepository", function() {
	var repository;
	
	beforeEach(function() {
		repository = new RocksRepository();
		repository.clean();
	});
	
	describe("loadAll", function() {
		it("loads all rocks", function() {
			expect(repository.loadAll().length).toBe(0);
		});
	});
	
	describe("create", function() {
		it("creates a new rock", function() {
			expect(repository.loadAll().length).toBe(0);
			repository.create("Revise LD plan");
			
			var allRocks = repository.loadAll();
			expect(allRocks.length).toBe(1);
			expect(allRocks[0].title).toBe("Revise LD plan");
		});
	});
});