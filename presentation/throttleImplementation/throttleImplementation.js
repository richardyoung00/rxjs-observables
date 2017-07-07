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
import './style.css'
import Rx from 'rxjs';

let normalSub;
let throttleSub;
let normalText = '';
let throttleText = '';

const componentDidMount = () => {
    const normalButton = document.querySelector('#normalButton');
    const throttleButton = document.querySelector('#throttledButton');

    const normal$ = Rx.Observable.fromEvent(normalButton, 'click')
    const throttle$ = Rx.Observable.fromEvent(throttleButton, 'click').throttleTime(1000);

    const normalDiv = document.querySelector('#normalText');
    const throttledDiv = document.querySelector('#throttledText');
    if (normalSub) normalSub.unsubscribe();
    if (throttleSub) throttleSub.unsubscribe();

    normalSub = normal$.subscribe(() => {
        normalText += '\nCLICKED!!!';
        normalDiv.innerText = normalText;
    });
    throttleSub = throttle$.subscribe(() => {
        throttleText += '\nCLICKED!!!';
        throttledDiv.innerText = throttleText;
    });
};

export function throttleImplementation() {
    return (
        <Slide transition={["fade"]} notes={title_notes} className='throttle' ref={() => { componentDidMount() }}>
            <Heading size={5} textColor="header">Throttle Time: 1 second</Heading>

            <button id='normalButton'>Normal</button>
            <button id='throttledButton'>Throttled</button>

            <div className='output'>
                <div className='normal' id='normalText'></div>
                <div className='throttled' id='throttledText'></div>
            </div>
        </Slide>
    );
}

const title_notes = `
    <ul>
        <li>one</li>
        <li>two</li>
    </ul>
`;