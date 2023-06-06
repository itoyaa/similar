import React from "react";
import { LightButton } from '../../../../../components/LightButton';
import { DarkButton } from '../../../../../components/DarkButton';
import styles from "./Confirm.module.css";

export const Confirm = (props) => {
    return (
        <div className={styles.box}>
            <div className={styles.title}>{props.title}</div>
            <div className={styles.text}>{props.text}</div>
            <div className={styles.btnContainer}>
                <DarkButton className={styles.btn} onClick={props.onConfirm}>Да</DarkButton>
                <LightButton className={styles.btn} onClick={props.onCancel}>Нет</LightButton>
            </div>
        </div>  
    );
}