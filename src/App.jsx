import styles from "./App.module.css";
import { useState } from "react";
import { ToDoItem } from "./components/ToDoItem";
import { Form } from "./components/Form";

function App() {
    const [isFormShown, setIsFormShown] = useState(false);
    const [arrayOfToDoElements, setArrayOfToDoElements] = useState([
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
    ]);

    function showTaskForm() {
        setIsFormShown(!isFormShown);
    }

    function addNewTask(newTask) {
        setArrayOfToDoElements([
            ...arrayOfToDoElements,
            {
                text: newTask,
                dane: false,
                id: Math.random(),
            },
        ]);
        setIsFormShown(!setIsFormShown);
    }

    function deleteTask(id) {
        setArrayOfToDoElements(() =>
            arrayOfToDoElements.filter((element) => element.id !== id)
        );
    }

    function doneTask(id) {
        console.log(arrayOfToDoElements);
        setArrayOfToDoElements((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id !== id) {
                    return todo;
                }
                return {
                    ...todo,
                    done: true,
                };
            })
        );
        console.log(arrayOfToDoElements);
    }

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
                    <h2>{taskCounting(arrayOfToDoElements.length)}</h2>
                </div>
                {!isFormShown && (
                    <button
                        className={styles.button}
                        onClick={() => showTaskForm()}
                    >
                        +
                    </button>
                )}
            </header>
            {isFormShown && (
                <Form onFormSubmit={(newTask) => addNewTask(newTask)} />
            )}

            <ul>
                {arrayOfToDoElements.map(({ text, done, id }) => (
                    <ToDoItem
                        key={id}
                        text={text}
                        done={done}
                        onClickDoneItem={() => doneTask(id)}
                        onClickDeleteItem={() => deleteTask(id)}
                    />
                ))}
            </ul>
        </div>
    );
}

export default App;
