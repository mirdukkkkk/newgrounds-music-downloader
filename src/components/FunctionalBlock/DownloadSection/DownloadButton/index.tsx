import { Component } from "preact";
import styles from "./index.module.css";

type DownloadButtonProps = {
    onClick: (() => void) | "";
};

class DownloadButton extends Component<DownloadButtonProps> {
    render({ onClick }: DownloadButtonProps) {
        return (
            <button
                onClick={onClick || undefined}
                className={styles.download_button}
                style={{
                    color: onClick ? "var(--black)" : "var(--unavailable)",
                    cursor: onClick ? "pointer" : "not-allowed"
                }}
            >
                Download
            </button>
        );
    }
}

export { DownloadButton };
