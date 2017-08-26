class Square extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (event) => {
        var that = this;
        if (!this.props.parentState.gameOver) {
            if (!this.props.parentState.squares[this.props.squareIndex]) {
                if (!this.props.parentState.prevValue || this.props.parentState.prevValue === "X") {
                    let squares = this.props.parentState.squares;
                    squares[this.props.squareIndex] = "X";
                    this.props.setAppState({ squares: squares, prevValue: "O" });
                } else {
                    let squares = this.props.parentState.squares;
                    squares[this.props.squareIndex] = "O";
                    this.props.setAppState({ squares: squares, prevValue: "X" });
                }
            }

            let winnerArrays = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6]
            ];

            winnerArrays.forEach(function (arr) {
                let firstValue = that.props.parentState.squares[arr[0]];
                if (firstValue) {
                    if (firstValue === that.props.parentState.squares[arr[1]] &&
                        firstValue == that.props.parentState.squares[arr[2]]) {
                        that.props.setAppState({ gameOver: true, winner: firstValue });
                        return;
                    }
                }
            });

            let counter = 0;
            that.props.parentState.squares.forEach(function (val) {
                if (val) {
                    counter++;
                }
            });

            if (counter === 9 && !this.props.parentState.gameOver) {
                that.props.setAppState({ tie: true });
            }
        }
    }

    render() {
        return (
            <input type="button" onClick={this.handleClick} value={this.props.value} />
        );
    }
}

export default Square;