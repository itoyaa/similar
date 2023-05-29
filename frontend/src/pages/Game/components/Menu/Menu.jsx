import React from "react";
import styles from "./Menu.module.css";
import { OptionBox } from './components/OptionBox';

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
        title: 'О нас',
        color: styles.mid
    },
]

export const Menu = (props) => {
    return (
        <>
            {props.isShown && (
                <div onClick={props.handleCloseMenu} className={styles.modal}>
                    <div className={styles.box}>
                        <h2 className={styles.header}>Menu</h2>
                        <div className={styles.optionsContainer}>
                            <OptionBox
                                title={MENU_OPTIONS[0].title}
                                pic={MENU_OPTIONS[0].pic}
                                color={MENU_OPTIONS[0].color}
                            />
                            <OptionBox
                                title={MENU_OPTIONS[1].title}
                                pic={MENU_OPTIONS[1].pic}
                                color={MENU_OPTIONS[1].color}
                            />
                            <OptionBox
                                title={MENU_OPTIONS[2].title}
                                pic={MENU_OPTIONS[2].pic}
                                color={MENU_OPTIONS[2].color}
                            />
                            <OptionBox
                                title={MENU_OPTIONS[3].title}
                                pic={MENU_OPTIONS[3].pic}
                                color={MENU_OPTIONS[3].color}
                            />
                            <OptionBox
                                title={MENU_OPTIONS[4].title}
                                pic={MENU_OPTIONS[4].pic}
                                color={MENU_OPTIONS[4].color}
                            />
                            <OptionBox
                                title={MENU_OPTIONS[5].title}
                                pic={MENU_OPTIONS[5].pic}
                                color={MENU_OPTIONS[5].color}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}