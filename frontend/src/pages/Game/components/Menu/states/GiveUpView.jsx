import React from "react";
import styles from "./HintView.module.css";

export const HintView = (props) => {
    return (
        <>
            <h2 className={styles.header}>{props.header}</h2>
            <div className={styles.hintContainer}>
                hint
            </div>
        </>
        
    )
}