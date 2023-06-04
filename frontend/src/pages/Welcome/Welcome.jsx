import { Link } from "react-router-dom";
import { Button } from "./components/Button";
import styles from "./Welcome.module.css";

export const Welcome = () => {
    return (
        <>
            <header className={styles.header}>Similar</header>
            <div className={styles.container}>
                <div className={styles.description}>
                    <p>
                        Привет! В этой игре тебе нужно угадать слово, которое загадал компьютер. Вводи свои
                        предположения в текстовое поле, а мы сообщим, насколько твое
                        слово похоже на загаданное!&nbsp;😎
                    </p>
                    <p>
                        Игра построена на NLP технологиях и процент схожести определяется исходя из того, насколько
                        часто слова встречаются в одном контексте. Например, антонимы могут располагаться близко друг к другу, так как одно слово легко заменить другим в одном предложении.
                    </p>
                </div>
                <Button>
                    <Link to="/game/1" className={styles.link}>
                        Начать!
                    </Link>
                </Button>
            </div>
        </>
    );
};
