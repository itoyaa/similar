import React from "react";
import styles from "./FeedbackView.module.css";

const EMAIL = 'feedback-similar@yandex.ru';
const TELEGRAM = 'https://t.me/similargame';

export const FeedbackView = (props) => {
    return (
        <>
            <h2 className={styles.header}>{props.header}</h2>
            <div className={styles.feedbackBox}>
                <p>
                    Наша игра ещё совсем молодая, так что мы будем очень рады обратной связи.
                    Если вы нашли какой-то баг, неточность или у вас есть предложения по тому, 
                    как можно улушить игру, не стесняйтесь об этом рассказать!
                </p>
                <div>
                    <div>Почта: 
                        <a href={`mailto:${EMAIL}?subject=Фидбэк`} className={styles.link}> {EMAIL}</a>
                    </div>
                    <div>Телеграм-канал: 
                        <a href={TELEGRAM} className={styles.link}> {TELEGRAM}</a>
                    </div>
                </div>
                <p>Спасибо 💗</p>
            </div>
        </>
        
    )
}