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

export function titleSlide() {
    return (
        <Slide transition={["fade"]} notes={title_notes}>
            <Heading size={2} textColor="header">Next level async with RxJS and Observables</Heading>
            <br/>
        </Slide>
    );
}

const title_notes = `
    <ul>
        <li>one</li>
        <li>two</li>
    </ul>
`;