define(['react', 'logic', 'jsx!board'], function (React, logic, Board) {

    var ships = [
        new logic.Ship(1, 2, 'horizontal', 4),
        new logic.Ship(4, 9, 'horizontal', 3),
        new logic.Ship(6, 7, 'horizontal', 3),
        new logic.Ship(1, 4, 'horizontal', 2),
        new logic.Ship(2, 7, 'vertical', 2),
        new logic.Ship(4, 5, 'vertical', 2),
        new logic.Ship(0, 7, 'horizontal', 1),
        new logic.Ship(0, 9, 'horizontal', 1),
        new logic.Ship(6, 0, 'horizontal', 1),
        new logic.Ship(7, 3, 'horizontal', 1)
    ];

    var game = new logic.Game(ships);

    var GuessCount = React.createClass({
        displayName: 'GuessCount',
        mixins: [],

        getRenderCount: function() {
            if (this.renderCount === undefined) {
                this.renderCount = 0;
            }
            this.renderCount++;
            return <span>Rendered <b>{this.renderCount}</b> times.</span>;
        },

        shouldComponentUpdate: function(nextProps) {
            return this.props.count !== nextProps.count;
        },

        render: function () {
            return <div>You have made <b>{this.props.count}</b> guesses. {this.getRenderCount()}</div>;
        }
    });

    return React.createClass({
        displayName: 'App',
        mixins: [React.addons.LinkedStateMixin],

        getInitialState: function () {
            return {
                showSolution: false,
                showHints: false
            };
        },

        onGuess: function(x, y) {
            game.guess(x, y);
            this.forceUpdate();
        },

        render: function () {
            return <div>
                <h1>Welcome to Battleships!</h1>
                <label><input type="checkbox" checkedLink={this.linkState('showSolution')}/>Solution</label>
                <label><input type="checkbox" checkedLink={this.linkState('showHints')}/>Hints</label>
                <Board game={game} onGuess={this.onGuess} showSolution={this.state.showSolution} showHints={this.state.showHints}/>
                <GuessCount count={game.guesses.length}/>
            </div>;
        }
    });
});