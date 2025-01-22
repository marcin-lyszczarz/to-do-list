import { useState } from "react";
import styles from "./Form.module.css";

export function Form({ onFormSubmit }) {
    const [inputValue, setInputValue] = useState("");

    function handleSubmitForm(e) {
        e.preventDefault();
        onFormSubmit(inputValue);
        setInputValue("");
    }

    return (
        <>
            <form className={styles.form} onSubmit={handleSubmitForm}>
                <label htmlFor="addTask-1"></label>
                <input
                    className={styles.input}
                    type="text"
                    id="addTask-1"
                    name="addTask"
                    value={inputValue}
                    onChange={(e) => {
                        setInputValue(e.target.value);
                    }}
                ></input>
                <button className={styles.button} type="submit">
                    Dodaj
                </button>
            </form>
        </>
    );
}
