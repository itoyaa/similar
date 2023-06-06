import React from "react";
import styles from "./Word.module.css";

const COLORS = {
    0: "#4ABDCD",
    10: "#5AC3D2",
    20: "#6BC9D6",
    30: "#7BCFDB",
    40: "#8CD5DF",
    50: "#9CDBE4",
    60: "#ADE1E8",
    70: "#BDE7ED",
    80: "#CEEDF1",
    90: "#DEF3F6",
    100: "#EFF9FA",
};

export const Word = (props) => {
    const wordWidth = React.useMemo(() => {
        return String(20 + props.similarity * 0.8) + "%";
    }, [props.similarity]);

    const wordColor = React.useMemo(() => {
        return COLORS[Math.ceil(props.similarity / 10) * 10];
    }, [props.similarity]);

    return (
        <div className={styles.container}>
            <div
                className={`${styles.word}`}
                style={{ minWidth: wordWidth, backgroundColor: wordColor }}
            >
                <span className={styles.longWord}>{props.word}</span>
            </div>
            <div className={styles.similarity}>{props.similarity}%</div>
        </div>
    );
};
