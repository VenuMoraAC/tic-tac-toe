import Square from './components/Square.js';

// Main app component
// initializes all other components
class App extends React.Component {

  constructor(props) {
    super(props);
    this.setAppState = this.setAppState.bind(this);

    this.state = {
      squares: ["", "", "", "", "", "", "", "", ""],
      prevValue: "",
      gameOver: false,
      winner: "",
      tie: false
    };
  }

  setAppState = (state) => {
    this.setState(state);
  }

  render() {
    return (
      <div className="wrapper">
        {this.state.gameOver && <label>We have a winner {this.state.winner}</label>}
        {this.state.tie && <label>It's a tie</label>}
        {!(this.state.gameOver || this.state.tie) && <label>It's your turn { this.state.prevValue === 'O' ? 'O' : 'X' }</label>}
        <table>
          <tr>
            <td>
              <Square parentState={this.state} squareIndex="0" setAppState={this.setAppState} value={this.state.squares[0]} />
            </td>
            <td>
              <Square parentState={this.state} squareIndex="1" setAppState={this.setAppState} value={this.state.squares[1]} />
            </td>
            <td>
              <Square parentState={this.state} squareIndex="2" setAppState={this.setAppState} value={this.state.squares[2]} />
            </td>
          </tr>
          <tr>
            <td>
              <Square parentState={this.state} squareIndex="3" setAppState={this.setAppState} value={this.state.squares[3]} />
            </td>
            <td>
              <Square parentState={this.state} squareIndex="4" setAppState={this.setAppState} value={this.state.squares[4]} />
            </td>
            <td>
              <Square parentState={this.state} squareIndex="5" setAppState={this.setAppState} value={this.state.squares[5]} />
            </td>
          </tr>
          <tr>
            <td>
              <Square parentState={this.state} squareIndex="6" setAppState={this.setAppState} value={this.state.squares[6]} />
            </td>
            <td>
              <Square parentState={this.state} squareIndex="7" setAppState={this.setAppState} value={this.state.squares[7]} />
            </td>
            <td>
              <Square parentState={this.state} squareIndex="8" setAppState={this.setAppState} value={this.state.squares[8]} />
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

// render App component in main section
ReactDOM.render(
  <App />,
  document.getElementById('main')
)

export default App;