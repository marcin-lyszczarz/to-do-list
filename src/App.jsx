import styles from "./App.module.css";
import { useReducer } from "react";
import { ToDoItem } from "./components/ToDoItem";
import { Form } from "./components/Form";
import { appReducer } from "./reducer/appReducer";

function App() {
    const [{ todos, isFormShown }, dispatch] = useReducer(appReducer, {
        todos: [
            {
                text: "Zapłacić rachunki",
                done: true,
                id: Math.random(),
            },
            {
                text: "Wyrzucić śmieci",
                done: false,
                id: Math.random(),
            },
            {
                text: "Iść na siłownię",
                done: true,
                id: Math.random(),
            },
        ],
        isFormShown: false,
    });

    function taskCounting(numberOfTask) {
        switch (true) {
            case numberOfTask > 4:
                return `${numberOfTask} zadań`;
            case numberOfTask > 1:
                return `${numberOfTask} zadania`;
            case numberOfTask == 1:
                return `${numberOfTask} zadanie`;
            default:
                return `Brak zadań`;
        }
    }

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div>
                    <h1>Do zrobienia</h1>
                    <h2>{taskCounting(todos.length)}</h2>
                </div>
                {!isFormShown && (
                    <button
                        className={styles.button}
                        onClick={() => dispatch({ type: "open_form" })}
                    >
                        +
                    </button>
                )}
            </header>
            {isFormShown && (
                <Form
                    onFormSubmit={(newTask) =>
                        dispatch({
                            type: "add",
                            text: newTask,
                        })
                    }
                />
            )}

            <ul>
                {todos.map(({ text, done, id }) => (
                    <ToDoItem
                        key={id}
                        text={text}
                        done={done}
                        onClickDoneItem={() =>
                            dispatch({ type: "done", id: id })
                        }
                        onClickDeleteItem={() =>
                            dispatch({ type: "delete", id: id })
                        }
                    />
                ))}
            </ul>
        </div>
    );
}

export default App;
