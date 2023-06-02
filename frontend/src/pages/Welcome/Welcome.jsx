import { Link } from "react-router-dom";
import { Button } from "./components/Button";
import styles from "./Welcome.module.css";

export const Welcome = () => {
    return (
        <>
            <header className={styles.header}>Similar</header>
            <div className={styles.container}>
                <p className={styles.description}>
                    Привет! В этой игре тебе нужно угадать слово, которое загадал компьютер. Вводи свои
                    предположения в текстовое поле, а мы сообщим, насколько твое
                    слово похоже на загаданное!&nbsp;😎
                </p>
                <Button>
                    <Link to="/game/1" className={styles.link}>
                        Начать!
                    </Link>
                </Button>
            </div>
        </>
    );
};
