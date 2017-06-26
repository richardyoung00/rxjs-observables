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

import CodeSlide from "spectacle-code-slide";


export function buttonClickRxThrottle() {
    return (
        <CodeSlide
            className='buttonClickJsThrottle'
            transition={['fade']}
            lang="js"
            align='flex-start flex-start'
            code={require("raw-loader!./code.example")}
            notes={notes}
            ranges={[
                {loc: [0, 4], title: "Button event RxJS"},
                {loc: [2, 3], title: "Button event RxJS"},
                {loc: [2, 3], title: "Button event RxJS", note: 'debounce debounceTime distinct distinctKey distinctUntilChanged distinctUntilKeyChanged elementAt filter first ignoreElements audit auditTime last sample sampleTime single skip skipUntil skipWhile take takeLast takeUntil takeWhile throttle throttleTime'},]}
        />
    );
}

const notes = `
    <ul>
        <li>one</li>
        <li>two</li>
    </ul>
`;