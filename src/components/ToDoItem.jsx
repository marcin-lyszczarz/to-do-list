import styles from "./TodoItem.module.css";

export function ToDoItem({ text, done, onClickDeleteItem, onClickDoneItem }) {
    return (
        <>
            <li className={styles.item}>
                <p className={done && styles.done}>{text}</p>
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
