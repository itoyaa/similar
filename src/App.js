import { Route } from "react-router-dom";

import { Welcome } from "./pages/Welcome/Welcome";
import { Game } from "./pages/Game/Game";

import styles from "./App.module.css";

function App() {
    return (
        <div className={styles.app}>
            <div>
                <Route exact path="/" component={Welcome} />
                <Route path="/game" component={Game} />
            </div>
        </div>
    );
}

export default App;
