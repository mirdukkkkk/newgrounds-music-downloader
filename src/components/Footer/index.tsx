import { Component } from "preact";
import styles from "./index.module.css";

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className={styles.disclaimer}>
                    Not affiliated with{" "}
                    <a href={"https://newgrounds.com"}>newgrounds.com</a>
                </div>
                <div className={styles.repo}>
                    <a
                        href={
                            "https://github.com/mirdukkkkk/newgrounds-music-downloader"
                        }
                    >
                        Source Code
                    </a>{" "}
                    (C) {new Date().getFullYear()} mirdukkkkk
                </div>
            </footer>
        );
    }
}

export { Footer };
