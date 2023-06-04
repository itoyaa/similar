import React from "react";
import styles from "./Menu.module.css";
import { OptionsView } from "./states/OptionsView";
import { FeedbackView } from "./states/FeedbackView";

const States = {
    Default: 0,
    GiveUp: 1,
    Hint: 2,
    StartOver: 3,
    HowToPlay: 4,
    Feedback: 5,
    SelectGame: 6,
}

export const Menu = (props) => {
    const [menuState, setMenuState] = React.useState(States.Default);

    const onMenuClose = React.useCallback(() => {
        props.handleCloseMenu();
        setMenuState(States.Default);
    }, [props]);

    const handleBackToOptions = React.useCallback(() => {
        setMenuState(States.Default);
    }, []);



    return (
        <>
            {props.isShown && (
                <div className={styles.modal}>
                    <div className={styles.box}>
                        {menuState !== States.Default && (
                            <div className={`${styles.btn} ${styles.backBtn}`} onClick={handleBackToOptions}>
                                <ion-icon name="return-up-back-outline"></ion-icon>
                            </div>
                        )}
                        <div className={`${styles.btn} ${styles.closeBtn}`} onClick={onMenuClose}>
                            <ion-icon name="close-outline"></ion-icon>
                        </div>

                        
                        {menuState === States.Default && <OptionsView onChangeState={setMenuState} header={'Menu'} />}
                        {menuState === States.Feedback && <FeedbackView header={'Обратная связь'} backToOptions={handleBackToOptions}/>}
                    </div>
                </div>
            )}
        </>
    );
}