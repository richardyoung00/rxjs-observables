import React from "react";
import {
    BlockQuote,
    Cite,
    Deck,
    Heading,
    ListItem,
    List,
    Quote,
    Slide,
    Text,
} from "spectacle";

// import ReactAce from 'react-ace-editor';
import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/github';

export const aceSlide = () => {

    return (
    <Slide>
        <AceEditor
            mode="javascript"
            theme="github"
            // onChange={onChange}
            name="UNIQUE_ID_OF_DIV"
            editorProps={{$blockScrolling: true}}
            // value={require("raw-loader!./code.example")}
            value={`varsdfsdfsdf`}

        />
    </Slide>
    );
}

const title_notes = `
    <ul>
        <li>one</li>
        <li>two</li>
    </ul>
`;