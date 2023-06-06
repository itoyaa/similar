import React from "react";

import { Link } from "react-router-dom";
import { LightButton } from "../../components/LightButton";
import { DarkButton } from "../../components/DarkButton";
import {
    SelectGame,
    SelectRandomGameButton,
} from "../Game/components/Menu/components/SelectGame";
import styles from "./Welcome.module.css";

export const Welcome = () => {
    const [showSelectGame, setShowSelectGame] = React.useState(false);

    const toggleSelectGame = React.useCallback(() => {
        setShowSelectGame((prev) => !prev);
    }, []);

    const onRedirect = React.useCallback(() => {
        localStorage.clear();
    }, []);

    return (
        <>
            <header className={styles.header}>Similar</header>
            <div className={styles.container}>
                <div className={styles.description}>
                    <p>
                        Привет! В этой игре тебе нужно угадать слово, которое
                        загадал компьютер. Вводи свои предположения в текстовое
                        поле, а мы сообщим, насколько твое слово похоже на
                        загаданное!&nbsp;😎
                    </p>
                    <p>
                        Игра построена на NLP технологиях и процент схожести
                        определяется исходя из того, насколько часто слова
                        встречаются в одном контексте. Например, антонимы могут
                        располагаться близко друг к другу, так как одно слово
                        легко заменить другим в одном предложении.
                    </p>
                </div>
                <div className={styles.btnContainer}>
                    <DarkButton>
                        <Link to="/game/1" className={styles.link}>
                            Начать!
                        </Link>
                    </DarkButton>
                    <LightButton
                        className={styles.btn}
                        onClick={toggleSelectGame}
                    >
                        {showSelectGame ? "Спрятать" : "Выбрать игру"}
                    </LightButton>
                </div>
                {showSelectGame && (
                    <div className={styles.selectGameContainer}>
                        <div className={styles.selectGame}>
                            <SelectGame onClick={onRedirect} />
                        </div>
                        <SelectRandomGameButton onClick={onRedirect} />
                    </div>
                )}
            </div>
        </>
    );
};
