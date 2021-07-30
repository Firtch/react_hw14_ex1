import logo from "./logo.svg";
import "./App.css";
import ReduxCounter from "./reduxExample/ReduxCounter";
import MobxCounter from "./mobxExample/MobxCounter";
import appState from "./mobxExample/appState";

function App() {
  return (
    <div className="App">
      <center>
        <table>
          <tr>
            <td>
              <center>
                <h2>Redux</h2>
                <ReduxCounter />
              </center>
            </td>
            <td>
              <center>
                <h2>Mobx</h2>
                <MobxCounter appState={appState} />
              </center>
            </td>
          </tr>
        </table>
      </center>
    </div>
  );
}

export default App;
