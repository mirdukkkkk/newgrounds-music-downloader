import { Component } from "preact";
import { DownloadButton } from "./DownloadButton";
import {
    extractFilename,
    extractSongId,
    parseSongData,
    passProxy
} from "@core";
import styles from "./index.module.css";

type DownloadSectionProps = {
    data: string;
};

type DownloadSectionState = {
    status: string;
    isError: boolean;
};

class DownloadSection extends Component<
    DownloadSectionProps,
    DownloadSectionState
> {
    state = {
        status: "",
        isError: false
    };

    returnDefault = () => {
        this.setState({
            status: "Enter the song id and click download!",
            isError: false
        });
    };

    onClick = async () => {
        let id: number | string | null = extractSongId(this.props.data);
        if (!id) {
            return this.setState({
                status: "Enter a valid song ID",
                isError: true
            });
        }

        id = Number(id);
        if (Number.isNaN(id)) {
            return this.setState({
                status: "Enter a valid song ID",
                isError: true
            });
        }

        try {
            this.setState({
                status: "Downloading the song..."
            });

            const data = await passProxy(id);

            if (data.status.http_code === 404) {
                return this.setState({
                    status: `Song with ID "${id}" not found`,
                    isError: true
                });
            }

            const { url, title } = parseSongData(data.contents);

            this.setState({
                status: `Successful download of "${title}"`
            });

            extractFilename(url);

            const a = document.createElement("a");
            a.href = url;
            a.rel = "noopener noreferrer";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        } catch (error) {
            this.setState({
                status: "Unexcepted error. Check the console (F12)",
                isError: true
            });
            console.error(error);
        }
    };

    componentWillReceiveProps() {
        this.returnDefault();
    }

    componentWillMount() {
        this.returnDefault();
    }

    render() {
        return (
            <div className={styles.download_section}>
                <DownloadButton onClick={this.props.data && this.onClick} />
                <div
                    style={{
                        color: this.state.isError
                            ? "var(--error)"
                            : "var(--white)"
                    }}
                >
                    {this.state.status}
                </div>
            </div>
        );
    }
}

export { DownloadSection };
