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

export function whatIsRxJsSlide() {
    return (
        <Slide transition={["fade"]} notes={title_notes}>
            <Heading size={5}>What is RxJS?</Heading>
            <List>
                <ListItem>Reactive extensions for JS</ListItem>
                <ListItem>Async data streams and observables</ListItem>
                <ListItem>Treat events as collections</ListItem>
                <ListItem>Manipulate these events with operators</ListItem>
                <ListItem>Kind of like Lodash for events</ListItem>
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