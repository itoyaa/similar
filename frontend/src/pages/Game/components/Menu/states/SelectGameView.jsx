import React from "react";
import styles from "./SelectGameView.module.css";
import { SelectGame, SelectRandomGameButton } from "../components/SelectGame";

export const SelectGameView = (props) => {
    return (
        <>
            <h2 className={styles.header}>{props.header}</h2>
            <div className={styles.selectGameContainer}>
                <div className={styles.selectGameBox}>
                    <SelectGame
                        onMenuClose={props.onMenuClose}
                        onClick={props.handleInit}
                    />
                </div>
                <SelectRandomGameButton onClick={props.handleInit} />
            </div>
        </>
    );
};
