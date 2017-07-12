// Import React
import React from "react";

import 'prismjs';
// import '../assets/prism.css';
import '../assets/prism-hopscotch.css';
import '../assets/prism-jsx.min';

// Import Spectacle Core tags
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

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import { titleSlide } from './0_Title/title';
import { aboutMeSlide } from './1_AboutMe/aboutMe';
import { examplesOfAsync } from './2_ExamplesOfAsync/examplesOfAsync';
import { promises } from './7_Promises/promises';
import { promisesForAsync } from './8_PromisesForAsync/promisesForAsync';
import { whatIsRxJsSlide } from './3_WhatIsRxJs/whatIsRxJs';
import { whatAreObservables } from './4_WhatAreObservables/whatAreObservables';
import { buttonClick } from './5_ButtonClick/buttonClick';
import { asyncPromise } from './10_AsyncPromise/asyncPromise';
import { ajaxCancellation } from './12_AjaxCancellation/ajaxCancellation';
import { switching } from './15_Switching/switching';
import { retry } from './11_Retry/retry';
import { throttleImplementation } from './6_ThrottleImplementation/throttleImplementation';
import { chosenOne } from './9_ChosenOne/chosenOne';
import {
    switchingFaillmplementation,
} from './14_SwitchingFaillmplementation/switchingFaillmplementation';
import {
    switchingSuccessImplementation,
} from './16_SwitchingSuccesslmplementation/switchingSuccesslmplementation';
import { switchingPromises } from './13_SwitchingPromises/switchingPromises';
import { createObservables } from './17_CreateObservables/createObservables';
import { moreInfo } from './19_MoreInfo/moreInfo';
import { operators } from './18_Operators/operators';
import { thanks } from './20_Thanks/thanks';

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

// Code slide css
require("./codeSlide.css");


const images = {
};

preloader(images);

const theme = createTheme({
    primary: "#000",
    secondary: "#fff",
    header: "#14fc00",
    quartenary: "#CECECE"
}, {
    primary: "Helvetica",
    secondary: "Helvetica"
});

export default class Presentation extends React.Component {

    render() {
        return (
            <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>

                {/* 0 - title*/}
                {titleSlide()}

                {/* 1 - about me*/}
                {aboutMeSlide()}

                {/* 2 - examples of async*/}
                {examplesOfAsync()}

                {/* 3 - what is rxjs and observables*/}
                {whatIsRxJsSlide()}

                {/* 4 - what are observables*/}
                {whatAreObservables()}

                {/* 5 - button click example*/}
                {buttonClick()}

                {/* 6 - throttle implementation example*/}
                {throttleImplementation()}

                {/* 7 - promises*/}
                {promises()}

                {/* 8 - promises for async*/}
                {promisesForAsync()}

                {/* 9 - chosen one*/}
                {chosenOne()}

                {/* 10 - Async example*/}
                {asyncPromise()}

                {/* 11 - how to retry*/}
                {retry()}

                {/* 12 - how to do cancellation in RxJS*/}
                {ajaxCancellation()}

                {/* 13 - switching with promises*/}
                {switchingPromises()}

                {/* 14 - switching fail implementation*/}
                {switchingFaillmplementation()}

                {/* 15 - switching code*/}
                {switching()}

                {/* 16 - switching success implementation*/}
                {switchingSuccessImplementation()}

                {/* 17 - observable creation*/}
                {createObservables()}

                {/* 18 - operators*/}
                {operators()}

                {/* 19 - More info*/}
                {moreInfo()}

                {/* 20 - thanks*/}
                {thanks()}

            </Deck>
        );
    }

}
