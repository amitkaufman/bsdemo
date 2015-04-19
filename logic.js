define(['lodash'], function(_) {

    var Ship = function(x, y, orientation, length) {
        this.points = [];
        for (var i = 0; i < length; i++) {
            this.points.push({ x: x, y: y });
            if (orientation === 'horizontal') {
                x++;
            }
            else {
                y++;
            }
        }
    };

    Ship.prototype.isMatch = function(x, y) {
        return _.find(this.points, function(point) { return point.x === x && point.y === y; });
    };

    const boardSize = 10;

    var Game = function(ships) {
        this.ships = ships;
        this.guesses = [];
    };

    Game.prototype.guess = function(x, y) {
        var found = _.find(this.ships, function(ship) { return ship.isMatch(x, y); });
        var guess = { x: x, y: y, state: found ? 'ship' : 'empty' };
        this.guesses.push(guess);
    };

    function setStatusAt(board, x, y, newStatus) {
        if (0 <= x && x < boardSize && 0 <= y && y < boardSize && board[y][x]) {
            if (board[y][x] === 'unknown') {
                board[y][x] = newStatus;
            }
        }
    }

    Game.prototype.getMatrix = function(showSolution, showHints) {
        var ret = [];
        for (var i = 0; i < boardSize; i++) {
            var row = [];
            for (var j = 0; j < boardSize; j++) {
                var found = _.find(this.guesses, function(guess) { return i === guess.y && j === guess.x; });
                row.push(found ? found.state : 'unknown');
            }
            ret.push(row);
        }

        // show all ships
        if (showSolution) {
            _.forEach(this.ships, function (ship) {
                _.forEach(ship.points, function (point) {
                    if (ret[point.y][point.x] === 'unknown') {
                        ret[point.y][point.x] = 'ship-revealed';
                    }
                });
            });
        }

        // show all revealed-empty ships
        if (showHints) {
            for (var r = 0; r < ret.length; r++) {
                for (var c = 0; c < ret[r].length; c++) {
                    if (ret[r][c] === 'ship') {
                        setStatusAt(ret, c-1, r-1, 'empty-revealed');
                        setStatusAt(ret, c+1, r-1, 'empty-revealed');
                        setStatusAt(ret, c-1, r+1, 'empty-revealed');
                        setStatusAt(ret, c+1, r+1, 'empty-revealed');
                    }
                }
            }
        }

        return ret;
    };

    return {
        Game: Game,
        Ship: Ship
    }
});
