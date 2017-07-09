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
                {loc: [33, 41]},
            ]}
        />
    );
}

const arrayOutput =
`▶ {name: 'Yoda'}
▶ {name: 'Anakin Skywalker'}
▶ {name: 'Obi-Wan Kenobi'}`;

const objectOutput =
`▶ (3) [{…}, {…}]
  ▶ 0: {name: 'Yoda'}
  ▶ 1: {name: 'Anakin Skywalker'}
  ▶ 2: {name: 'Obi-Wan Kenobi'}
     length: 3
  ▶ __proto__: Array(0)  `;

const notes = `
    <ul>
        <li>one</li>
        <li>two</li>
    </ul>
`;