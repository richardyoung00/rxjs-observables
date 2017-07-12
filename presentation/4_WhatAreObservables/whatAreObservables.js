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
            <Heading size={5} textColor="header">Observables</Heading>
            <List>
                <ListItem>Observable design pattern</ListItem>
                <ListItem>ECMAScript proposal for Observables</ListItem>
                <ListItem>Operates on any number of events</ListItem>
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