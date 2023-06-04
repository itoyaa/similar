import React from "react";

import { InputArea } from "./components/InputArea/InputArea";
import { WordList } from "./components/WordList/WordList";
import { Menu } from './components/Menu/Menu';
import { Victory } from './components/Victory/Victory'

import { getWordSimilarity } from './assets/getWordSimilarity'
import styles from "./Game.module.css";

export const Game = () => {
    const [wordList, setWordList] = React.useState([]);
    const [openMenu, setOpenMenu] = React.useState(false);
    const [answer, setAnswer] = React.useState(undefined);
    const [triesCounter, setTriesCounter] = React.useState(0);
    const [lastTry, setLastTry] = React.useState(undefined);

    const handleOpenMenu = React.useCallback(() => {
        setOpenMenu(true);
    }, []);

    const handleCloseMenu = React.useCallback(() => {
        setOpenMenu(false);
    }, []);

    const [shake, setShake] = React.useState(false);

    const addNewWord = React.useCallback(
        (newWord) => {
            const formatNewWord = newWord.toLowerCase();
            if (!wordList.map(word => word.word).includes(formatNewWord)) {
                getWordSimilarity(formatNewWord).then(similarity => {
                    if (similarity === 100) {
                        setAnswer(formatNewWord);
                    } else if (similarity === -1) {
                        setShake(true);
                        setTimeout(() => {
                            setShake(false);
                        }, 1000);
                    } else {
                        const correntSimilarity = similarity === 1 ? similarity - 0.0001 : similarity;
                        setWordList((prev) => {
                            return [
                                ...prev,
                                {
                                    word: formatNewWord,
                                    similarity: Math.round(correntSimilarity * 10000) / 100,
                                },
                            ].sort((word1, word2) =>
                                word1.similarity > word2.similarity ? -1 : 1
                            );
                        });
                        setTriesCounter(prev => prev += 1);
                        setLastTry({
                            word: formatNewWord,
                            similarity: Math.round(correntSimilarity * 10000) / 100,
                        });
                    }
                })
            }
        },
        [setWordList, wordList]
    );

    return (
        <>
            <div className={styles.container}>
                <header className={styles.header}>
                    Similar
                    <div className={styles.menu} onClick={handleOpenMenu}>
                        <ion-icon
                            name="ellipsis-horizontal"
                        ></ion-icon>
                    </div>
                </header>
                <InputArea onClick={addNewWord} shake={shake} triesCounter={triesCounter} lastTry={lastTry} />
                <WordList wordList={wordList} />
                <Menu isShown={openMenu} handleCloseMenu={handleCloseMenu} />
                {answer && <Victory answer={answer} />}
            </div>
        </>
    );
};
