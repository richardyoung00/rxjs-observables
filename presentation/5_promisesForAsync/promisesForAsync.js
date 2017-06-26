import React from "react";
import {
    Appear,
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

export function promisesForAsync() {
    return (
        <Slide transition={["fade"]} notes={title_notes}>
            <Heading size={5}>Promises for Async</Heading>
            <List>
                <ListItem>DOM events - multiple values</ListItem>
                <ListItem>AJAX - 1 value</ListItem>
                <ListItem>Animations - cancellable</ListItem>
                <ListItem>WebSockets - multiple values</ListItem>
                <ListItem>Server-Sent Events - multiple values</ListItem>

            </List>
        </Slide>
    );
}

const title_notes = `
    <ul>
        <li>promises only really fit for AJAX, assumes no cancelling</li>
        <li>Only really AJAX fits into the promise schema</li>
    </ul>
`;