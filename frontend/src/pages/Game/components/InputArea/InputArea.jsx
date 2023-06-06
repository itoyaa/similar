import React from "react";

import { Input } from "./components/Input";
import { DarkButton } from "../../../../components/DarkButton";
import { Word } from "../WordList/components/Word";

import styles from "./InputArea.module.css";

export const InputArea = (props) => {
    const [currentWord, setCurrentWord] = React.useState("");
    const [shake, setShake] = React.useState(false);

    React.useEffect(() => {
        if (props.shake) {
            setShake(true);
            setTimeout(() => {
                setShake(false);
            }, 1000);
        }      
    }, [props.shake]);

    const handleAdd = React.useCallback(() => {
        if (currentWord !== "") {
            props.onClick(currentWord);
            setCurrentWord("");
        } else {
            setShake(true);
            setTimeout(() => {
                setShake(false);
            }, 1000);
        }
    }, [props, currentWord]);

    const getInputValue = React.useCallback(
        (newWord) => {
            setCurrentWord(newWord);
        },
        [setCurrentWord]
    );

    const handleAddOnEnterPress = React.useCallback(
        (event) => {
            if (event.code === "Enter") {
                handleAdd();
            }
        },
        [handleAdd]
    );

    return (
        <div>
            <div className={styles.inputContainer}>
                <Input
                    onChange={getInputValue}
                    value={currentWord}
                    onKeyDown={handleAddOnEnterPress}
                    className={shake ? styles.shake : ""}
                />
                <DarkButton onClick={handleAdd}>Отправить</DarkButton>
            </div>
            {props.lastTry && (
                <Word
                    word={props.lastTry.word}
                    similarity={props.lastTry.similarity}
                    key={props.lastTry.word}
                />
            )}
            {props.triesCounter > 0 && <div className={styles.tries}>Предположения: 
                <span className={styles.extraBold}> {props.triesCounter}</span>
            </div>}
        </div>
    );
};
