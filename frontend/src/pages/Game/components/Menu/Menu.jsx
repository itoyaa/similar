import React from "react";

import { OptionsView } from "./states/OptionsView";
import { FeedbackView } from "./states/FeedbackView";
import { HowToPlayView } from "./states/HowToPlayView";
import { SelectGameView } from "./states/SelectGameView";
import { HintView } from "./states/HintView";

import styles from "./Menu.module.css";
import { Confirm } from "./components/Confirm";

const States = {
    Default: 0,
    GiveUp: 1,
    Hint: 2,
    StartOver: 3,
    HowToPlay: 4,
    Feedback: 5,
    SelectGame: 6,
};

const CONFIRM_TEXTS = {
    1: {
        title: "Хочешь сдаться?",
        text: "Мы покажем загаданное слово.",
    },
    3: {
        title: "Начинаем сначала?",
        text: "Все предположения будут сброшены.",
    },
};

export const Menu = (props) => {
    const [menuState, setMenuState] = React.useState(States.Default);
    const [showConfirm, setShowConfirm] = React.useState(false);

    const onMenuClose = React.useCallback(() => {
        props.handleCloseMenu();
        setMenuState(States.Default);
    }, [props]);

    const handleBackToOptions = React.useCallback(() => {
        setMenuState(States.Default);
    }, []);

    const handleCancel = React.useCallback(() => {
        setShowConfirm(false);
        setMenuState(States.Default);
    }, []);

    React.useEffect(() => {
        if (menuState === States.GiveUp || menuState === States.StartOver) {
            setShowConfirm(true);
        }
    }, [menuState]);

    const handleConfirm = React.useCallback(() => {
        setShowConfirm(false);

        if (menuState === States.GiveUp) {
            onMenuClose();
            props.handleGiveUp();
        } else if (menuState === States.StartOver) {
            props.setOpenVictory(false);
            onMenuClose();
            props.handleInit();
        }
    }, [menuState, onMenuClose, props]);

    return (
        <>
            {props.isShown && (
                <div className={styles.modal}>
                    {!showConfirm && (
                        <div className={styles.box}>
                            {menuState !== States.Default && (
                                <div
                                    className={`${styles.btn} ${styles.backBtn}`}
                                    onClick={handleBackToOptions}
                                >
                                    <ion-icon name="return-up-back-outline"></ion-icon>
                                </div>
                            )}
                            <div
                                className={`${styles.btn} ${styles.closeBtn}`}
                                onClick={onMenuClose}
                            >
                                <ion-icon name="close-outline"></ion-icon>
                            </div>

                            {(menuState === States.Default ||
                                menuState === States.GiveUp ||
                                menuState === States.StartOver) && (
                                <OptionsView
                                    onChangeState={setMenuState}
                                    header={"Меню"}
                                />
                            )}
                            {menuState === States.Feedback && (
                                <FeedbackView header={"Фидбэк"} />
                            )}
                            {menuState === States.HowToPlay && (
                                <HowToPlayView header={"Как играть?"} />
                            )}
                            {menuState === States.SelectGame && (
                                <SelectGameView
                                    header={"Выбрать игру"}
                                    onMenuClose={onMenuClose}
                                    handleInit={props.handleInit}
                                />
                            )}
                            {menuState === States.Hint && (
                                <HintView
                                    header={"Подсказка"}
                                    onMenuClose={onMenuClose}
                                    setHintCounter={props.setHintCounter}
                                />
                            )}
                        </div>
                    )}

                    {showConfirm && (
                        <Confirm
                            onConfirm={handleConfirm}
                            onCancel={handleCancel}
                            title={CONFIRM_TEXTS[menuState].title}
                            text={CONFIRM_TEXTS[menuState].text}
                        />
                    )}
                </div>
            )}
        </>
    );
};
