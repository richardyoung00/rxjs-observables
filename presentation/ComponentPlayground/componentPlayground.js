import React from "react";
import {
    ComponentPlayground,
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


export const componentPlayground = () => {

    return (
    <Slide>
        <ComponentPlayground
            code ={`Some code`}


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