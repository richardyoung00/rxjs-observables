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


export function retry() {
    return (
        <CodeSlide
            className='codeSlide'
            transition={['fade']}
            lang="js"
            align='flex-start flex-start'
            code={require("raw-loader!./code.example")}
            notes={notes}
            ranges={[
                {loc: [0, 7], title: "Retry"},
                {loc: [8, 17]},
                {loc: [18, 28]},
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