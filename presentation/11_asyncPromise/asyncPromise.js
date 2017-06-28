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
import './style.css'

import CodeSlide from "spectacle-code-slide";


export function asyncPromise() {
    return (
        <CodeSlide
            className='buttonClickJs'
            transition={['fade']}
            lang="js"
            align='flex-start flex-start'
            code={require("raw-loader!./code.example")}
            notes={notes}
            ranges={[
                {loc: [0, 8], title: "AJAX example"},
                {loc: [9, 14]},
                {loc: [15, 25]},
                {loc: [26, 32]},
                {loc: [33, 40]},
            ]}
        />
    );
}

const notes = `
    <ul>
        <li>one</li>
        <li>two</li>
    </ul>
`;