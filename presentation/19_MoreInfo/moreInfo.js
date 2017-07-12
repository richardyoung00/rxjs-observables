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

export function moreInfo() {
    return (
        <Slide transition={["fade"]} notes={title_notes}>
            <Heading size={3} textColor="header">reactivex.io/rxjs</Heading>
            <Heading size={3} textColor="secondary">learnrxjs.io</Heading>
            <Heading size={3} textColor="header">rxmarbles.com</Heading>
            <Heading size={3} textColor="secondary">rxviz.com</Heading>
        </Slide>
    );
}

const title_notes = `
    <ul>
        <li>one</li>
        <li>two</li>
    </ul>
`;