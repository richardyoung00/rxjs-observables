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

export function aboutMeSlide() {
    return (
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary" notes={title_notes}>
            <Heading size={5} textColor="tertiary">Richard Young</Heading>
            <Heading size={5} textColor="tertiary">BNRY Digital</Heading>
        </Slide>
    );
}

const title_notes = `
    <ul>
        <li>one</li>
        <li>two</li>
    </ul>
`;