import React from "react";
import styles from "./Menu.module.css";

export const Menu = (props) => {
    return (
        <>
            {props.isShown && (
                <div onClick={props.handleCloseMenu} className={styles.modal}>
                    <div className={styles.box}>
                        modal
                    </div>
                </div>
            )}
        </>
    );
}