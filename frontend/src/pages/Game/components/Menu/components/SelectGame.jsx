import React from "react";
import { GameLink } from "./GameLink";
import { DarkButton } from "../../../../../components/DarkButton";
import { NavLink } from "react-router-dom";

import styles from "./SelectGame.module.css";

const GAMES = 1000;
const GAMES_ARR = Array.from(Array(GAMES).keys());

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const SelectGame = (props) => {
    return (
        <div className={styles.gamesContainer} onClick={props.onClick}>
            {GAMES_ARR.map((game) => (
                <GameLink
                    key={game + 1}
                    num={game + 1}
                    onMenuClose={props.onMenuClose}
                />
            ))}
        </div>
    );
};

export const SelectRandomGameButton = (props) => {
    const randomGameNum = getRandomInt(1, 1000);
    return (
        <DarkButton className={styles.randomBtn} onClick={props.onClick}>
            <NavLink className={styles.link} to={`/game/${randomGameNum}`}>
                Случайная игра
            </NavLink>
        </DarkButton>
    );
};
