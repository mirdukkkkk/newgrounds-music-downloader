import { Component } from "preact";
import { Input } from "./Input";
import { DownloadSection } from "./DownloadSection";
import styles from "./index.module.css";

type FunctionalBlockState = {
    data: string;
};

class FunctionalBlock extends Component<{}, FunctionalBlockState> {
    state = {
        data: ""
    };

    onInput = (data: string) => {
        this.setState({ data });
    };

    render() {
        return (
            <div className={styles.func_block}>
                <Input onInput={this.onInput}>Song ID or URL</Input>
                <DownloadSection data={this.state.data} />
            </div>
        );
    }
}

export { FunctionalBlock };
