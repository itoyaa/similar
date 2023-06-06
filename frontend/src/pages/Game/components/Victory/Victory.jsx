import React from "react";
import { DarkButton } from "../../../../components/DarkButton";
import styles from "./Victory.module.css";

export const Victory = (props) => {
    const goToNextGame = React.useCallback(() => {
        const url = window.location.href;
        const arrayUrl = url.split('/');
        const nextGameNum = String(Number(arrayUrl[arrayUrl.length - 1]) + 1);
        const lenOfGameNum = arrayUrl[arrayUrl.length - 1].length;
        const nextUrl = url.slice(0, -lenOfGameNum) + nextGameNum;
        window.location.href = nextUrl;
    }, []);

    return (
        <>
            <div className={styles.modal}>
                <div className={styles.box}>
                    <div className={styles.pic}>🎉</div>
                    <div className={styles.header}>Вы выиграли!</div>
                    <p className={styles.desc}>Загаданное слово -
                        <span className={styles.ans}> {props.answer}</span>
                    </p>
                    <DarkButton onClick={goToNextGame}>Следующая игра</DarkButton>
                </div>
            </div>
        </>
    );
}