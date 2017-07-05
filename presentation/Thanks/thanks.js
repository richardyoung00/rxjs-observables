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
    Code
} from "spectacle";
import './style.css'

export function thanks() {
    return (
        <Slide transition={["fade"]} notes={title_notes}>
            <Heading size={3} textColor="header">thanks</Heading>
        </Slide>
    );
}

const title_notes = `
    <ul>
        <li>one</li>
        <li>two</li>
    </ul>
`;