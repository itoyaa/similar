import React from "react";

import { InputArea } from "./components/InputArea/InputArea";
import { WordList } from "./components/WordList/WordList";
import { Menu } from "./components/Menu/Menu";
import { Victory } from "./components/Victory/Victory";

import { getWordSimilarity } from "./assets/getWordSimilarity";
import { getAnswer } from "./assets/getAnswer";
import { showNotification } from "./assets/showNotification/showNotification";

import styles from "./Game.module.css";

const useLocalStorage = (storageKey, fallbackState) => {
    const valueInStorage = localStorage.getItem(storageKey);
    const [value, setValue] = React.useState(
        JSON.parse(valueInStorage) ?? fallbackState
    );

    React.useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(value));
    }, [value, storageKey]);

    return [value, setValue];
};

const GameState = {
    InProgess: 1,
    End: 2,
};

export const Game = () => {
    const [wordList, setWordList] = useLocalStorage("wordsStorage", []);
    const [gameState, setGameState] = useLocalStorage(
        "gameState",
        GameState.InProgess
    );
    const [triesCounter, setTriesCounter] = useLocalStorage("tries", 0);
    const [hintCounter, setHintCounter] = useLocalStorage("hints", 0);
    const [lastTry, setLastTry] = useLocalStorage("lastTry", null);
    const [answer, setAnswer] = useLocalStorage("answer", null);
    const [isGiveUp, setIsGiveUp] = useLocalStorage("isGiveUp", false);

    const [openMenu, setOpenMenu] = React.useState(false);
    const [openVictory, setOpenVictory] = React.useState(false);
    const [shake, setShake] = React.useState(false);

    const handleOpenMenu = React.useCallback(() => {
        setOpenMenu(true);
    }, []);

    const handleCloseMenu = React.useCallback(() => {
        setOpenMenu(false);
    }, []);

    const handleInit = React.useCallback(() => {
        localStorage.clear();

        setGameState(GameState.InProgess);
        setWordList([]);
        setTriesCounter(0);
        setHintCounter(0);
        setAnswer(null);
        setLastTry(null);
        setIsGiveUp(false);

        setOpenMenu(false);
        setOpenVictory(false);
    }, [
        setGameState,
        setWordList,
        setTriesCounter,
        setHintCounter,
        setAnswer,
        setLastTry,
        setIsGiveUp,
    ]);

    const handleGiveUp = React.useCallback(() => {
        getAnswer()
            .then((ans) => {
                if (ans) {
                    setAnswer(ans);
                    setIsGiveUp(true);
                    setOpenVictory(true);
                    setGameState(GameState.End);
                }
            })
            .catch((e) => {
                showNotification({
                    message: "😥 Что-то пошло не так",
                });
            });
    }, [setAnswer, setIsGiveUp, setGameState]);

    const gameNum = React.useMemo(() => {
        const url = window.location.href;
        const arrayUrl = url.split("/");
        const num = String(Number(arrayUrl[arrayUrl.length - 1]));
        const prevNum = JSON.parse(localStorage.getItem("gameNum"));
        if (num !== prevNum) {
            handleInit();
        }
        localStorage.setItem("gameNum", JSON.stringify(num));
        return num;
    }, [handleInit]);

    const addNewWord = React.useCallback(
        (newWord) => {
            const formatNewWord = newWord.toLowerCase();
            if (!wordList.map((word) => word.word).includes(formatNewWord)) {
                getWordSimilarity(formatNewWord)
                    .then((similarity) => {
                        if (similarity === 100) {
                            setAnswer(formatNewWord);
                            setOpenVictory(true);
                            setGameState(GameState.End);
                        } else if (similarity === -1) {
                            setShake(true);
                            setTimeout(() => {
                                setShake(false);
                            }, 1000);
                            showNotification({
                                message:
                                    "😲 К сожалению, такого слова пока нет в нашем словаре",
                            });
                        } else {
                            const correntSimilarity =
                                similarity === 1
                                    ? similarity - 0.0001
                                    : similarity;
                            setWordList((prev) => {
                                return [
                                    ...prev,
                                    {
                                        word: formatNewWord,
                                        similarity:
                                            Math.round(
                                                correntSimilarity * 10000
                                            ) / 100,
                                    },
                                ].sort((word1, word2) =>
                                    word1.similarity > word2.similarity ? -1 : 1
                                );
                            });

                            setTriesCounter((prev) => (prev += 1));
                            setLastTry({
                                word: formatNewWord,
                                similarity:
                                    Math.round(correntSimilarity * 10000) / 100,
                            });
                        }
                    })
                    .catch((e) => {
                        showNotification({
                            message: "😥 Что-то пошло не так",
                        });
                    });
            } else {
                setShake(true);
                setTimeout(() => {
                    setShake(false);
                }, 1000);
                showNotification({
                    message: "🤭 Такое слово уже было!",
                });
            }
        },
        [
            setWordList,
            wordList,
            setAnswer,
            setGameState,
            setTriesCounter,
            setLastTry,
        ]
    );

    return (
        <>
            <div className={styles.container}>
                <header className={styles.header}>
                    Similar
                    <div className={styles.menu} onClick={handleOpenMenu}>
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                    <div className={styles.num}>#{gameNum}</div>
                </header>
                <InputArea
                    onClick={addNewWord}
                    shake={shake}
                    triesCounter={triesCounter}
                    lastTry={lastTry}
                    openVictory={openVictory}
                    answer={answer}
                    handleInit={handleInit}
                />
                <WordList wordList={wordList} />
                <Menu
                    isShown={openMenu}
                    handleCloseMenu={handleCloseMenu}
                    handleInit={handleInit}
                    handleGiveUp={handleGiveUp}
                    setOpenVictory={setOpenVictory}
                    setHintCounter={setHintCounter}
                />
                {answer && gameState === GameState.End && openVictory && (
                    <Victory
                        answer={answer}
                        hintCounter={hintCounter}
                        triesCounter={triesCounter}
                        isGiveUp={isGiveUp}
                        handleInit={handleInit}
                        setOpenVictory={setOpenVictory}
                    />
                )}
            </div>
        </>
    );
};
