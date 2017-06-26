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

export function whatAreObservables() {
    return (
        <Slide transition={["fade"]} notes={title_notes}>
            <Heading size={5}>Observables</Heading>
            <List>
                <ListItem>Streams or sets</ListItem>
                <ListItem>Any number of events (even zero)</ListItem>
                <ListItem>Over any amount of time</ListItem>
                <ListItem>Lazy</ListItem>
                <ListItem>Can be unsubscribed from</ListItem>
            </List>
        </Slide>
    );
}

const title_notes = `
    <ul>
        <li>one</li>
        <li>two</li>
    </ul>
`;