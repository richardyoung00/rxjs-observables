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

import CodeSlide from "spectacle-code-slide";

export function ajaxCancellation() {
    return (
        <CodeSlide
            className='codeSlide'
            transition={['fade']}
            lang="js"
            align='flex-start flex-start'
            code={require("raw-loader!./code.example")}
            notes={notes}
            ranges={[
                {loc: [0, 2], title: "Cancellation"},
                {loc: [0, 10]},
                {loc: [5, 6]}, //takeuntil
                {loc: [0, 10]},
                {loc: [11, 20]},
                {loc: [14, 16]}, //takeuntil timeout
                {loc: [11, 20]},
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