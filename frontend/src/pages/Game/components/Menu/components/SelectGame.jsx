import React from "react";
import {GameLink} from './GameLink';
import styles from "./SelectGame.module.css";

const GAMES = 1000;
const GAMES_ARR = Array.from(Array(GAMES).keys());

export const SelectGame = (props) => {
    return (
        <div className={styles.gamesContainer}>
            {GAMES_ARR.map(game => <GameLink key={game + 1} num={game + 1} onMenuClose={props.onMenuClose} />)}
        </div>
    )
}