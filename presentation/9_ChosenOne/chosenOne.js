import React from "react";
import {
    Appear,
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

import chosenOneImage from '../../assets/chosenOne.jpg';

export function chosenOne() {
    return (
        <Slide transition={["fade"]} >
            <Heading size={5} textColor="header">Promises</Heading>
            <Image src={chosenOneImage} />
        </Slide>
    );
}
