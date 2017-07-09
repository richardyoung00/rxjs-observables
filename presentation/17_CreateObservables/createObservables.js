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

export function createObservables() {
    return (
        <Slide transition={["fade"]} notes={title_notes} className='createObservable'>
            <Heading size={5} textColor="header">Creating Observables</Heading>
            <List>
                <ListItem>Rx.Observable</ListItem>
                <ListItem className='indent'>{`🡆 .create(observer => {...})`}</ListItem>
                <ListItem className='indent'>🡆 .empty()</ListItem>
                <ListItem className='indent'>🡆 .interval(1000)</ListItem>
                <ListItem className='indent'>🡆 .of(1, 2)</ListItem>
                <ListItem className='indent'>🡆 .range(1,10)</ListItem>
                <ListItem className='indent'>🡆 .timer(1000, 2000)</ListItem>
                <ListItem className='indent'>🡆 .webSocket('ws://')</ListItem>
                <ListItem className='indent'>🡆 ...</ListItem>
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