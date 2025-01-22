import styles from "./Button.module.css";
import style from "./TodoItem.module.css";

export function ToDoItem({ text, done, onClickDeleteItem, onClickDoneItem }) {
    return (
        <>
            <li className={style.item}>
                <p className={done && style.done}>{text}</p>
                <div>
                    {!done && (
                        <button
                            className={styles.button}
                            onClick={onClickDoneItem}
                        >
                            Zrobione
                        </button>
                    )}
                    <button
                        className={styles.button}
                        onClick={onClickDeleteItem}
                    >
                        Usuń
                    </button>
                </div>
            </li>
        </>
    );
}
