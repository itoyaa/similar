import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./GameLink.module.css";

export const GameLink = (props) => {
    return (
        <NavLink
            className={styles.game}
            to={`/game/${props.num}`}
            onClick={props.onMenuClose}
        >
            {props.num}
        </NavLink>
    );
};
