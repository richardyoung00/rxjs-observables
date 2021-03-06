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

export function cancelImplementation() {
    return (
        <Slide transition={["fade"]} notes={title_notes}>
            <Heading size={5} textColor="header">Cancel</Heading>

        </Slide>
    );
}

const title_notes = `
    <ul>
        <li>one</li>
        <li>two</li>
    </ul>
`;