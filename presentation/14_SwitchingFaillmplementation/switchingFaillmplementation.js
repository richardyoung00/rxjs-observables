import React from "react";
import ReactDOM from "react-dom";
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
    getAjaxData('/api/jedi', jediRequests);
};


const getSithClick = () => {
    sithRequests.push(renderRequestArrow(Math.random(), 0.3));
    renderSithRequests();
    getAjaxData('/api/sith', sithRequests);
};

const getAjaxData = (path, requestList) => $.ajax({
    url: path,
    cache: false
})
    .then((data) => {
        const list = data.map((val) => val.name);
        document.querySelector('#result').innerHTML = list.join('\n')
        document.querySelector('#result').classList.add("highlite");
        setTimeout(() => document.querySelector('#result').classList.remove("highlite"), 200);
        requestList.shift();
        renderJediRequests();
        renderSithRequests();
    }
);

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

export function switchingFaillmplementation() {
    return (
        <Slide transition={["fade"]} notes={title_notes} className='switchingFaillmplementation'>
            <div>
                <Image src={serverImage} className='serverImage' />
            </div>
            <div className='requests'>
                <div className='jedi-requests'>
                </div>
                <div className='sith-requests'>

                </div>
            </div>
            <button onClick={getJediClick} id='jedi-button'>Show Jedi</button>
            <button onClick={getSithClick} id='sith-button'>Show Sith</button>
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