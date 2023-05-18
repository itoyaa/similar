import React from "react";
import styles from "./Input.module.css";

export const Input = (props) => {
    return (
        <input
            className={`${props.className} ${styles.input}`}
            value={props.value}
            onKeyDown={props.onKeyDown}
            onChange={(event) => {
                props.onChange(event.target.value);
            }}
            placeholder="Введите слово"
        />
    );
};
