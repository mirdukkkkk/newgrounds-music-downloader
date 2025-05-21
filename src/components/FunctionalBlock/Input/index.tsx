import { Component } from "preact";
import styles from "./index.module.css";

type InputProps = {
    children: string;
    onInput: (data: string) => void;
};

class Input extends Component<InputProps> {
    render({ children, onInput }: InputProps) {
        return (
            <input
                className={styles.input}
                type={"text"}
                placeholder={children}
                onInput={(event) => onInput(event.currentTarget.value)}
            />
        );
    }
}

export { Input, type InputProps };
