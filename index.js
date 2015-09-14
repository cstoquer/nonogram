
function Grid() {
	this.grid   = null;
	this.lines  = null;
	this.rows   = null;
	this.width  = 0;
	this.height = 0;
}

module.exports = Grid;

//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
Grid.prototype.createGrid = function (w, h) {
	this.width  = w;
	this.height = h;

	this.rows   = [];
	this.lines  = [];
	var grid    = [];

	for (var x = 0; x < w; x++) {
		grid.push([]);
		for (var y = 0; y < h; y++) {
			grid[x].push(0);
		}
	}

	this.grid = grid;
	return this;
};

//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
Grid.prototype.set = function (x, y, v) {
	this.grid[x][y] = v;
};

//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
Grid.prototype.computeRow = function (x) {
	var acc   = 0;
	var state = 0;
	var arr   = [];
	for (var y = 0; y < this.height; y++) {
		if (this.grid[x][y] !== state) {
			if (acc !== 0) arr.push(acc);
			acc = 0;
		} else if (state !== 0) {
			acc += 1;
		}
	}
	this.rows[x] = arr;
};

//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
Grid.prototype.comptuteLine = function (y) {
	var acc   = 0;
	var state = 0;
	var arr   = [];
	for (var x = 0; x < this.width; x++) {
		if (this.grid[x][y] !== state) {
			if (acc !== 0) arr.push(acc);
			acc = 0;
		} else if (state !== 0) {
			acc += 1;
		}
	}
	this.lines[y] = arr;
};

//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
Grid.prototype.computeHints = function () {
	for (var x = 0; x < this.width; x++) this.computeRow(x);
	for (var y = 0; y < this.width; y++) this.computeLine(y);
};

//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
Grid.prototype.log = function () {
	// TODO
};

