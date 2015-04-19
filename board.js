define(['react', 'lodash'], function (React, _) {
    return React.createClass({
        displayName: 'Board',
        mixins: [],

        onClick: function(x, y) {
            this.props.game.guess(x, y);
            this.forceUpdate();
        },

        render: function () {
            var matrix = this.props.game.getMatrix(this.props.showSolution, this.props.showHints);
            var rows = [];
            _.forEach(matrix, function(row, rowIndex) {
                var cells = [];
                _.forEach(row, function(cell, cellIndex) {
                    cells.push(<td onClick={this.onClick.bind(this, cellIndex, rowIndex)} className={cell}></td>);
                }, this);
                rows.push(<tr>{cells}</tr>);
            }, this);
            return <table>{rows}</table>;
        }
    });
});
