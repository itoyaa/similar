import { Route, Redirect, Switch } from "react-router-dom";

import { Welcome } from "./pages/Welcome/Welcome";
import { Game } from "./pages/Game/Game";

import styles from "./App.module.css";

function App() {
    return (
        <div className={styles.app}>
            <div>
                <Switch>
                    <Route exact path="/" component={Welcome} />
                    <Route
                        exact
                        path="/game/"
                        render={() => <Redirect to="/game/1" />}
                    />
                    <Route
                        path="/game/:id"
                        render={({ match, location }) => {
                            const id = match.params.id;
                            const isNumber = /^\d+$/.test(id);
                            if (!isNumber) {
                                return <Redirect to="/" />;
                            }
                            const { pathname } = location;
                            if (pathname.split("/").length > 3) {
                                return <Redirect to={`/game/${id}`} />;
                            }
                            return <Game id={parseInt(id)} />;
                        }}
                    />
                    <Route render={() => <Redirect to="/" />} />
                </Switch>
            </div>
        </div>
    );
}

export default App;
