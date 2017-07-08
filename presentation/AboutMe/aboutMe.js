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
    Image
} from "spectacle";

import bnryLogo from '../../assets/bnry.png';
import twitter from '../../assets/Twitter.png';
import github from '../../assets/github.png';
import './style.css'

export function aboutMeSlide() {
    return (
        <Slide transition={["fade"]} notes={title_notes} className='aboutMe'>
            <Heading size={3} textColor="header">Richard Young</Heading>
            <Heading size={5} textColor="secondary" className='subheader'><Image src={twitter} className='contactLogo'/>@richardyoung00</Heading>
            <Heading size={5} textColor="secondary" className='subheader'><Image src={github} className='contactLogo'/>github.com/richardyoung00</Heading>
            <Image src={bnryLogo} className='logo'/>
        </Slide>
    );
}

const title_notes = `
    <ul>
        <li>one</li>
        <li>two</li>
    </ul>
`;