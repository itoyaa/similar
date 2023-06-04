import React from "react";
import styles from "./OptionBox.module.css";
import cn from 'classnames';

export const OptionBox = (props) => {
    const handleChangeState = React.useCallback(() => {
        props.onChangeState(props.menuStateNum)
    }, [props]);

    return (
        <div>
            <div className={cn(styles.optionBox, props.color)} onClick={handleChangeState}>
                <div className={styles.optionBoxPic}>{props.pic}</div>
                <div className={styles.optionBoxTitle}>{props.title}</div>
            </div>
        </div>
    );
};