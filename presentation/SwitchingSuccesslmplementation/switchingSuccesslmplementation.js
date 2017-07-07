import React from "react";
import ReactDOM from "react-dom";
import Rx from 'rxjs';
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

import './style.css'
import serverImage from '../../assets/Server.png'
import upArrow from '../../assets/up-arrow.svg'
import downArrow from '../../assets/down-arrow.svg'

import $ from 'jquery';

const jediRequests = [];
const sithRequests = [];

let jedi$;
let sith$;
let result$;
let sub;


const obsComponentDidMount = () => {
    const jediButton = document.querySelector('#jedi-button');
    const sithButton = document.querySelector('#sith-button');

    jedi$ = Rx.Observable.fromEvent(jediButton, 'click')
        .do(() => {
            if (sithRequests.length > 0) {
                sithRequests.length = 0;
                renderSithRequests();
            }
            jediRequests.push(renderRequestArrow(Math.random(), 5));
            if (jediRequests.length > 1) {
                jediRequests.shift()
            }
            renderJediRequests();
        })
        .mapTo('/api/jedi');

    sith$ = Rx.Observable.fromEvent(sithButton, 'click')
        .do(() => {
            if (jediRequests.length > 0) {
                jediRequests.length = 0;
                renderJediRequests();
            }
            sithRequests.push(renderRequestArrow(Math.random(), 0.3));
            if (sithRequests.length > 1) {
                sithRequests.shift()
            }
            renderSithRequests();
        })
        .mapTo('/api/sith');

    result$ = Rx.Observable.merge(jedi$, sith$)
        .switchMap(path => Rx.Observable.ajax(path))
        .map(e => e.response);

    if(sub){
        sub.unsubscribe();
    }

    sub = result$.subscribe(
        (data) => {
            const list = data.map((val) => val.name);
            document.querySelector('#result').innerHTML = list.join('\n')
            document.querySelector('#result').classList.add("highlite");
            sithRequests.length = 0;
            jediRequests.length = 0;
            renderSithRequests();
            renderJediRequests();
            setTimeout(() => document.querySelector('#result').classList.remove("highlite"), 200);
        }
    )
}

const listRenderer = (list) => {
    return (<div className='list'>
        {list.map((val) => val)}
    </div>);
}

const renderJediRequests = () => {
    ReactDOM.render(listRenderer(jediRequests), document.querySelector('.jedi-requests'));
};

const renderSithRequests = () => {
    ReactDOM.render(listRenderer(sithRequests), document.querySelector('.sith-requests'));
};

const getJediClick = () => {
    jediRequests.push(renderRequestArrow(Math.random(), 5));
    renderJediRequests();

};


const getSithClick = () => {
    sithRequests.push(renderRequestArrow(Math.random(), 0.3));
    renderSithRequests();
};

const upArrowStyle = (time) => {
    return {
        animation: `moveUp ${time}s linear`
    }

};
const downArrowStyle = (time) => {
    return {animation: `moveDown ${time}s linear`};
};

const renderRequestArrow = (key, time) => {
    return (
        <div className='requestArrow' key={key}>
            <img src={upArrow} style={upArrowStyle(time)} />
            <img src={downArrow} style={downArrowStyle(time)} />
        </div>
    );
};

export function switchingSuccessImplementation() {
    return (
        <Slide transition={["fade"]} notes={title_notes} className='switchingSuccessImplementation' ref={(input) => { obsComponentDidMount() }}>
            <div>
                <Image src={serverImage} className='serverImage' />
            </div>
            <div className='requests'>
                <div className='jedi-requests'>
                </div>
                <div className='sith-requests'>

                </div>
            </div>
            <button id='jedi-button'>Show Jedi</button>
            <button id='sith-button'>Show Sith</button>
            <div id='result'>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
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