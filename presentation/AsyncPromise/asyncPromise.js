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


export function asyncPromise() {
    return (
        <CodeSlide
            className='codeSlide'
            transition={['fade']}
            lang="js"
            align='flex-start flex-start'
            code={require("raw-loader!./code.example")}
            notes={notes}
            ranges={[
                {loc: [0, 8], title: "AJAX example"},
                {loc: [9, 14]},
                {loc: [9, 14], note: objectOutput},
                {loc: [15, 25]},
                {loc: [15, 25], note: objectOutput},
                {loc: [26, 32]},
                {loc: [26, 32], note: arrayOutput},
                {loc: [33, 40]},
            ]}
        />
    );
}

const arrayOutput =
`▶ {name: "Jenny", age: 30}
▶ {name: "Bob", age: 26}`;

const objectOutput =
`▶ (2) [{…}, {…}]
  ▶ 0: {name: "Jenny", age: 30}
  ▶ 1: {name: "Bob", age: 26}
     length: 2
  ▶ __proto__: Array(0)  `;

const notes = `
    <ul>
        <li>one</li>
        <li>two</li>
    </ul>
`;