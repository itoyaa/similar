import React from "react";
import { OptionBox } from '../components/OptionBox';
import styles from "./OptionsView.module.css";

const MENU_OPTIONS = [
    {
        pic: '😧',
        title: 'Сдаться',
        color: styles.dark
    },
    {
        pic: '🤔',
        title: 'Подсказка',
        color: styles.mid
    },
    {
        pic: '🤬',
        title: 'Заново',
        color: styles.light
    },
    {
        pic: '🤯',
        title: 'Как играть?',
        color: styles.light
    },
    {
        pic: '🤓',
        title: 'Фидбек',
        color: styles.dark
    },
    {
        pic: '🥰️',
        title: 'Выбрать игру',
        color: styles.mid
    },
]

export const OptionsView = (props) => {
    return (
        <>
            <h2 className={styles.header}>{props.header}</h2>
            <div className={styles.optionsContainer}>
                {
                    MENU_OPTIONS.map((option, menuStateNum) => (
                        <OptionBox
                            title={option.title}
                            pic={option.pic}
                            color={option.color}
                            key={option.title}
                            onChangeState={props.onChangeState}
                            menuStateNum={menuStateNum + 1}
                        />
                    ))
                }
            </div>
        </>
        
    )
}