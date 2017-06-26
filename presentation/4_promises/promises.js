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

export function promises() {
    return (
        <Slide transition={["fade"]} notes={title_notes}>
            <Heading size={5}>Promises</Heading>
            <List>
                <ListItem>Eventual completion (or failure) of an asynchronous operation</ListItem>
                <ListItem>Executed immediately</ListItem>
                <ListItem>Single value</ListItem>
                <ListItem>Immutable and cannot be cancellable</ListItem>
            </List>
        </Slide>
    );
}

const title_notes = `
    <ul>
        <li>We use promises to solve async problems</li>
    </ul>
`;