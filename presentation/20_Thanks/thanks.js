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
    Code,
    Image
} from "spectacle";
import './style.css'

import twitter from '../../assets/Twitter.png';
import github from '../../assets/github.png';

export function thanks() {
    return (
        <Slide transition={["fade"]} notes={title_notes} className='thanks'>
            <Heading size={3} textColor="header">thanks</Heading>

            <Heading size={5} textColor="secondary" className='subheader'><Image src={twitter} className='contactLogo'/>@richardyoung00</Heading>
            <Heading size={5} textColor="secondary" className='subheader'><Image src={github} className='contactLogo'/>github.com/richardyoung00</Heading>

        </Slide>
    );
}

const title_notes = `
    <ul>
        <li>one</li>
        <li>two</li>
    </ul>
`;