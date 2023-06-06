import React from "react";

import styles from "./LightButton.module.css";

export const LightButton = (props) => {
    const finalClassName = React.useMemo(() => {
        return props.className ? `${props.className} ${styles.btn}` : styles.btn;
    }, [props.className]);
    
    return (
        <button className={finalClassName} onClick={props.onClick}>
            {props.children}
        </button>
    );
};
