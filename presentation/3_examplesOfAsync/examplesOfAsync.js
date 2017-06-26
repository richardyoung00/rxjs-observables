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

export function examplesOfAsync() {
    return (
        <Slide transition={["fade"]} notes={title_notes}>
            <Heading size={5}>Async</Heading>
            <List>
                <ListItem>DOM events</ListItem>
                <ListItem>AJAX</ListItem>
                <ListItem>Animations</ListItem>
                <ListItem>WebSockets</ListItem>
                <ListItem>Server-Sent Events</ListItem>
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