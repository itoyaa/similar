import React from "react";
import styles from "./Word.module.css";

export const Word = (props) => {
    return (
        <div className={styles.wordContainer}>
            <div
                className={`${styles.word} ${styles[props.status]}`}
                style={{ width: `${props.similarity}%` }}
            >
                <span className={styles.longWord}>{props.word}</span>
            </div>
            <div className={styles.similarity}>{props.similarity}%</div>
        </div>
    );
};
