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

export function operators() {
    return (
        <Slide transition={["fade"]} notes={title_notes} className='operators'>
            <Heading size={5} textColor="header">Observable Operators</Heading>
            <List>
                <ListItem>{'🡆 .do( val => console.log(val) )'}</ListItem>
                <ListItem>{'🡆 .delay(1000)'}</ListItem>
                <ListItem>{'🡆 .groupBy(person => person.age)'}</ListItem>
                <ListItem>{'🡆 .debounce()'}</ListItem>
                <ListItem>{'🡆 .filter()'}</ListItem>
                <ListItem>{'🡆 .first()'}</ListItem>
                <ListItem>{'🡆 .last()'}</ListItem>
                <ListItem>{'🡆 ....'}</ListItem>

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