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

import { titleSlide } from './Title/title';
import { aboutMeSlide } from './AboutMe/aboutMe';
import { examplesOfAsync } from './ExamplesOfAsync/examplesOfAsync';
import { promises } from './Promises/promises';
import { promisesForAsync } from './PromisesForAsync/promisesForAsync';
import { whatIsRxJsSlide } from './WhatIsRxJs/whatIsRxJs';
import { whatAreObservables } from './WhatAreObservables/whatAreObservables';
import { buttonClick } from './ButtonClick/buttonClick';
import { asyncPromise } from './AsyncPromise/asyncPromise';
import { ajaxCancellation } from './AjaxCancellation/ajaxCancellation';
import { switching } from './Switching/switching';
import { retry } from './Retry/retry';
import { throttleImplementation } from './throttleImplementation/throttleImplementation';
import { chosenOne } from './ChosenOne/chosenOne';
import {
    switchingFaillmplementation,
} from './SwitchingFaillmplementation/switchingFaillmplementation';
import {
    switchingSuccessImplementation,
} from './SwitchingSuccesslmplementation/switchingSuccesslmplementation';
import { switchingPromises } from './SwitchingPromises/switchingPromises';
import { createObservables } from './CreateObservables/createObservables';
import { moreInfo } from './MoreInfo/moreInfo';
import { operators } from './Operators/operators';
import { thanks } from './Thanks/thanks';

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

// Code slide css
require("./codeSlide.css");


const images = {
    city: require("../assets/city.jpg"),
    kat: require("../assets/kat.png"),
    logo: require("../assets/formidable-logo.svg"),
    markdown: require("../assets/markdown.png")
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

                {/*11 - how to retry*/}
                {retry()}

                {/* 12 - how to do cancellation in RxJS*/}
                {ajaxCancellation()}

                {/* 13 - switching with promises*/}
                {switchingPromises()}

                {/* 13 - switching fail implementation*/}
                {switchingFaillmplementation()}

                {/*switching code*/}
                {switching()}

                {/*switching success implementation*/}
                {switchingSuccessImplementation()}

                {/*observable creation*/}
                {createObservables()}

                {/*operators*/}
                {operators()}

                {/*More info*/}
                {moreInfo()}

                {/*thanks*/}
                {thanks()}

            </Deck>
        );
    }

}
