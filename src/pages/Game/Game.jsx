import React from "react";
import { InputArea } from "./components/InputArea/InputArea";
import { WordList } from "./components/WordList/WordList";
import { Menu } from './components/InputArea/Menu/Menu';
import styles from "./Game.module.css";

const WORDS = [
    {
        word: "Собака",
        similarity: 99.63,
    },
    {
        word: "Животное",
        similarity: 69.26,
    },
    {
        word: "Ветеринар",
        similarity: 20.68,
    },
];

export const Game = () => {
    const [wordList, setWordList] = React.useState(WORDS);
    const [openMenu, setOpenMenu] = React.useState(false);

    const handleOpenMenu = React.useCallback(() => {
        setOpenMenu(true);
    }, []);

    const handleCloseMenu = React.useCallback(() => {
        setOpenMenu(false);
    }, []);

    const addNewWord = React.useCallback(
        (newWord) => {
            setWordList((prev) => {
                console.log("change");
                return [
                    ...prev,
                    {
                        word: newWord,
                        similarity: (Math.random() * 100).toFixed(2),
                    },
                ].sort((word1, word2) =>
                    word1.similarity > word2.similarity ? -1 : 1
                );
            });
        },
        [setWordList]
    );

    console.log(openMenu);

    return (
        <>
            <div className={styles.container}>
                <header className={styles.header}>
                    Similar
                    <div className={styles.menu} onClick={handleOpenMenu}>
                        <ion-icon
                            className={styles.star}
                            name="ellipsis-horizontal"
                        ></ion-icon>
                    </div>
                </header>
                <InputArea onClick={addNewWord} />
                <WordList wordList={wordList} />
                <Menu isShown={openMenu} handleCloseMenu={handleCloseMenu} />
            </div>
        </>
    );
};
