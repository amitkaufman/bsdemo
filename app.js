define(['react', 'logic', 'jsx!board'], function(React, logic, Board) {

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

    return React.createClass({
        displayName: 'App',
        mixins: [],

        render: function () {
            return <div>
                <h1>Welcome to Battleships!</h1>
                <Board game={game}/>
            </div>;
        }
    });
});