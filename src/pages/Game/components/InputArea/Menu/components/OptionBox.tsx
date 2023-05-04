import React from "react";
import styles from "./OptionBox.module.css";
import cn from 'classnames';

type OptionBoxProps = {
    onClick: () => {};
    color: string;
    pic: string;
    title: string;
}

export const OptionBox = (props: OptionBoxProps) => {
    return (
        <div>
            <div className={cn(styles.optionBox, props.color)} onClick={props.onClick}>
                <div className={styles.optionBoxPic}>{props.pic}</div>
                <div className={styles.optionBoxTitle}>{props.title}</div>
            </div>
        </div>
    );
};