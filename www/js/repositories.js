function RocksRepository() {
	this._storageKey = "allRocks";
}

RocksRepository.prototype.clean = function() {
	window.localStorage.removeItem(this._storageKey);
}

RocksRepository.prototype.loadAll = function() {
	return this._loadAll();
}

RocksRepository.prototype.saveAll = function(rocks) {
	window.localStorage.setItem(this._storageKey, JSON.stringify(rocks));
}

RocksRepository.prototype.create = function(title) {
	var newRock = new Rock(this._generateId(), title);
	var allRocks = this._loadAll();
	allRocks.push(newRock);
	this.saveAll(allRocks);
}

RocksRepository.prototype._generateId = function() {
	return new Date().getTime();
}

RocksRepository.prototype._loadAll = function() {
	var allRocks = window.localStorage.getItem(this._storageKey);
	return allRocks == null ? [] : JSON.parse(allRocks);
}

function Rock(id, title) {
	this.id = id;
	this.title = title;
}