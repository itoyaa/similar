import React from "react";
import { DarkButton } from "../../../../components/DarkButton";
import styles from "./Victory.module.css";

export const Victory = (props) => {
    const goToNextGame = React.useCallback(() => {
        const url = window.location.href;
        const arrayUrl = url.split("/");
        const nextGameNum = String(Number(arrayUrl[arrayUrl.length - 1]) + 1);
        const lenOfGameNum = arrayUrl[arrayUrl.length - 1].length;
        const nextUrl = url.slice(0, -lenOfGameNum) + nextGameNum;
        window.location.href = nextUrl;
        props.handleInit();
    }, [props]);

    const onMenuClose = React.useCallback(() => {
        props.setOpenVictory(false);
    }, [props]);

    return (
        <>
            <div className={styles.modal}>
                <div className={styles.box}>
                    <div className={styles.closeBtn} onClick={onMenuClose}>
                        <ion-icon name="close-outline"></ion-icon>
                    </div>
                    <div className={styles.pic}>
                        {!props.isGiveUp ? "🎉" : "🥺"}
                    </div>
                    <div className={styles.header}>
                        {!props.isGiveUp ? "Ты выиграл!" : "Ты сдался"}
                    </div>
                    <p className={styles.desc}>
                        Загаданное слово -
                        <span className={styles.ans}> {props.answer}</span>
                    </p>
                    <div className={styles.results}>
                        <div>
                            Предположения:{" "}
                            <span className={styles.tries}>
                                {props.triesCounter}
                            </span>
                        </div>
                        <div>
                            Подсказки:{" "}
                            <span
                                className={
                                    props.hintCounter
                                        ? styles.hints
                                        : styles.tries
                                }
                            >
                                {props.hintCounter}
                            </span>
                        </div>
                    </div>
                    <DarkButton onClick={goToNextGame}>
                        Следующая игра
                    </DarkButton>
                </div>
            </div>
        </>
    );
};
