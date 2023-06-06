import React from "react";

import { getHint } from "../../../assets/getHint";
import { DarkButton } from "../../../../../components/DarkButton";

import styles from "./HintView.module.css";

export const HintView = (props) => {
    const [hint, setHint] = React.useState(undefined);
    const [error, setError] = React.useState(false);

    const handleGenerate = React.useCallback(() => {
        setError(false);
        getHint().then(hintResponse => {
            setHint(hintResponse);
        }).catch(e => {
            console.log(123)
            console.error(e);
            setError(true);
        });
    }, []);

    console.log(error);

    return (
        <>
            <h2 className={styles.header}>{props.header}</h2>
            <div className={styles.hintContainer}>
                <p>
                    Если совсем ничего не приходит в голову, ничего страшного, мы тебе подскажем!
                    Нажми на кнопку и появится случайное слово из 
                    30 наиболее близких к загаданному&#160;😎
                </p>
                <div className={styles.hint}>
                    <DarkButton className={styles.generate} onClick={handleGenerate}>
                        Сгенерировать
                    </DarkButton>
                    {(hint && !error) && <div className={styles.hintWord}>{hint}</div>}
                    {error && <div className={styles.error}>Неизвестная ошибка 🤥</div>}
                </div>
            </div>
        </>
        
    )
}