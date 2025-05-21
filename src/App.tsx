import { Component } from "preact";

import "./styles/reset.css";
import "./styles/font.css";
import "./styles/index.css";

import { Title, FunctionalBlock, Footer } from "@components";

class App extends Component {
    render() {
        return (
            <>
                <div id={"container"}>
                    <Title />
                    <FunctionalBlock />
                </div>
                <Footer />
            </>
        );
    }
}

export { App };
