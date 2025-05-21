import { Component } from "preact";
import { colors } from "@constants";
import styles from "./index.module.css";

type TitleState = {
    color: string;
};

class Title extends Component<{}, TitleState> {
    state = {
        color: colors[Math.floor(Math.random() * colors.length)]
    };

    onClick = () => {
        this.setState({
            color: colors[
                (colors.indexOf(this.state.color) + 1) % colors.length
            ]
        });
    };

    render() {
        return (
            <div className={styles.title}>
                <span
                    title={"Newgrounds"}
                    style={{ "--current": this.state.color }}
                    onClick={this.onClick}
                >
                    NG
                </span>{" "}
                music downloader
            </div>
        );
    }
}

export { Title, type TitleState };
