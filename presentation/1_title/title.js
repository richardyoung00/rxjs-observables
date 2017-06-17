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
        <Slide transition={["zoom"]} bgColor="secondary" textColor="primary" notes={title_notes}>
            <Heading size={2} textColor="primary">Next level async with RxJS and Observables</Heading>
            <br/>
            <Heading size={5} textColor="tertiary">Richard Young</Heading>
        </Slide>
    );
}

const title_notes = `
    <ul>
        <li>one</li>
        <li>two</li>
    </ul>
`;