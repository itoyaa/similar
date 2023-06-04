import React from "react";
import { Word } from "./components/Word";
import styles from "./WordList.module.css";

export const WordList = (props) => {
    const words = React.useMemo(() => {
        return props.wordList.map((currentWord) => {
            return {
                word: currentWord.word,
                similarity: currentWord.similarity,
            };
        });
    }, [props.wordList]);

    return (
        <div className={styles.wordContainer}>
            {words.map((currentWord) => {
                return (
                    <Word
                        word={currentWord.word}
                        similarity={currentWord.similarity}
                        key={currentWord.word}
                    />
                );
            })}
        </div>
    );
};
