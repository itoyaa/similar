import React from "react";
import { Button } from "../InputArea/components/Button";
import styles from "./Victory.module.css";

export const Victory = (props) => {
    const goToNextGame = React.useCallback(() => {
        const url = window.location.href;
        const arrayUrl = url.split('/');
        const nextGameNum = String(Number(arrayUrl[arrayUrl.length - 1]) + 1);
        const nextUrl = url.slice(0, -1) + nextGameNum;
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
                    <Button onClick={goToNextGame}>Следующая игра</Button>
                </div>
            </div>
        </>
    );
}