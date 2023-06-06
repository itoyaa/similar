import React from "react";

import styles from "./DarkButton.module.css";

export const DarkButton = (props) => {
    const finalClassName = React.useMemo(() => {
        return props.className ? `${props.className} ${styles.btn}` : styles.btn;
    }, [props.className]);

    return (
        <button className={finalClassName} onClick={props.onClick}>
            {props.children}
        </button>
    );
};
