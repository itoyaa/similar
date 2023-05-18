import React from "react";
import { Word } from "./components/Word";
import styles from "./WordList.module.css";

// Word
// {
//     similarity: 88.5,
//     word: "Собака"
// }

const getColor = (similarity) => {
    if (similarity >= 75) return "good";
    if (similarity >= 50) return "middle";
    return "bad";
};

export const WordList = (props) => {
    const words = React.useMemo(() => {
        return props.wordList.map((currentWord) => {
            return {
                word: currentWord.word,
                similarity: currentWord.similarity,
                status: getColor(currentWord.similarity),
            };
        });
    }, [props]);

    return (
        <div className={styles.wordContainer}>
            {words.map((currentWord) => {
                return (
                    <Word
                        word={currentWord.word}
                        similarity={currentWord.similarity}
                        status={currentWord.status}
                        key={currentWord.word}
                    />
                );
            })}
        </div>
    );
};
