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
    Appear,
    Image
} from "spectacle";
import './style.css'
import yoda from '../../assets/yoda.jpg';

export function promises() {
    return (
        <Slide transition={["fade"]} notes={title_notes} className='promises'>
            <Heading size={5} textColor="header">What about promises?</Heading>
            <Appear>
                <div>
                <List>
                    <ListItem>Eventual completion (or failure) of an asynchronous operation</ListItem>
                    <ListItem>Executed immediately</ListItem>
                    <ListItem>Single value</ListItem>
                    <ListItem>Immutable and cannot be cancelled</ListItem>
                </List>
                <div className='imageWrapper'>
                    <img src={yoda} className='yoda'/>
                </div>
                </div>
            </Appear>
        </Slide>
    );
}

const title_notes = `
    <ul>
        <li>We use promises to solve async problems</li>
    </ul>
`;