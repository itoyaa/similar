import React from "react";

import { Input } from "./components/Input";
import { DarkButton } from "../../../../components/DarkButton";
import { Word } from "../WordList/components/Word";

import styles from "./InputArea.module.css";

const upperFirstLetter = (word) => {
    if (!word || word.length < 1) {
        return undefined;
    }
    return word[0].toUpperCase() + word.slice(1);
};

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

    const goToNextGame = React.useCallback(() => {
        const url = window.location.href;
        const arrayUrl = url.split("/");
        const nextGameNum = String(Number(arrayUrl[arrayUrl.length - 1]) + 1);
        const lenOfGameNum = arrayUrl[arrayUrl.length - 1].length;
        const nextUrl = url.slice(0, -lenOfGameNum) + nextGameNum;
        window.location.href = nextUrl;
        props.handleInit();
    }, [props]);

    return (
        <div>
            <div className={styles.inputContainer}>
                <Input
                    onChange={getInputValue}
                    value={upperFirstLetter(props.answer) ?? currentWord}
                    onKeyDown={handleAddOnEnterPress}
                    className={shake ? styles.shake : ""}
                    disabled={props.answer}
                />
                <DarkButton onClick={props.answer ? goToNextGame : handleAdd}>
                    {props.answer ? "Следующая игра" : "Отправить"}
                </DarkButton>
            </div>
            {props.lastTry && (
                <Word
                    word={props.lastTry.word}
                    similarity={props.lastTry.similarity}
                    key={props.lastTry.word}
                />
            )}
            {props.triesCounter > 0 && (
                <div className={styles.tries}>
                    Предположения:
                    <span className={styles.extraBold}>
                        {" "}
                        {props.triesCounter}
                    </span>
                </div>
            )}
        </div>
    );
};
