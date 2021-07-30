import React from "react";
import { observer} from "mobx-react";
import appState from "./appState";

const MobxCounter = observer(({ appState }) => {
    return (
        <div>
            <h2>{appState.count}</h2>
            <button onClick={appState.increment}>Increment</button>
            <button onClick={appState.decrement}>Decrement</button>
        </div>
    );
});

export default MobxCounter;