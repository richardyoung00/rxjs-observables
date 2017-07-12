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


export function buttonClick() {
    return (
        <CodeSlide
            className='codeSlide noLineNumbers'
            transition={['fade']}
            lang="js"
            align='flex-start flex-start'
            code={require("raw-loader!./code.example")}
            notes={notes}
            ranges={[
                {loc: [0, 2], title: "Observable from Array"},
                {loc: [0, 2], title: "Observable from Array", note: arrayOutput},
                {loc: [5, 7], title: "Button event"},
                {loc: [10, 13]},
                {loc: [16, 20]},
                {loc: [18, 19]},
                {loc: [16, 20]},
            ]}
        />
    );
}

const arrayOutput = `1
2
3
4`;

const notes = `
    <ul>
        <li>one</li>
        <li>two</li>
    </ul>
`;