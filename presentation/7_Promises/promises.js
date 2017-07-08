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
    Appear
} from "spectacle";

export function promises() {
    return (
        <Slide transition={["fade"]} notes={title_notes}>
            <Heading size={5} textColor="header">What about promises?</Heading>
            <Appear>
                <List>
                    <ListItem>Eventual completion (or failure) of an asynchronous operation</ListItem>
                    <ListItem>Executed immediately</ListItem>
                    <ListItem>Single value</ListItem>
                    <ListItem>Immutable and cannot be cancelled</ListItem>
                </List>
            </Appear>
        </Slide>
    );
}

const title_notes = `
    <ul>
        <li>We use promises to solve async problems</li>
    </ul>
`;