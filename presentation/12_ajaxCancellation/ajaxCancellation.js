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


export function ajaxCancellation() {
    return (
        <CodeSlide
            className='ajaxCancellation'
            transition={['fade']}
            lang="js"
            align='flex-start flex-start'
            code={require("raw-loader!./code.example")}
            notes={notes}
            ranges={[
                {loc: [0, 10], title: "Cancellation"},
                {loc: [11, 21]},
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