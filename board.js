define(['react', 'lodash'], function (React, _) {
    return React.createClass({
        displayName: 'Board',
        mixins: [React.addons.PureRenderMixin],

        onClick: function(x, y) {
            if (this.props.onGuess) {
                this.props.onGuess(x, y);
            }
        },

        render: function () {
            var rows = [];
            _.forEach(this.props.matrix, function(row, rowIndex) {
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
