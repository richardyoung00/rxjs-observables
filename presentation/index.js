// Import React
import React from "react";

import 'prismjs';
import '../assets/prism.css';
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

import CodeSlide from "spectacle-code-slide";
import { titleSlide } from './1_title/title';
import { aboutMeSlide } from './2_aboutMe/aboutMe';
import { examplesOfAsync } from './3_examplesOfAsync/examplesOfAsync';
import { promises } from './4_promises/promises';
import { promisesForAsync } from './5_promisesForAsync/promisesForAsync';
import { whatIsRxJsSlide } from './6_whatIsRxJs/whatIsRxJs';
import { whatAreObservables } from './7_whatAreObservables/whatAreObservables';
import { buttonClickJs } from './8_buttonClickJs/buttonClickJs';
import { buttonClickRx } from './9_buttonClickRx/buttonClickRx';
import { buttonClickRxThrottle } from './10_buttonClickRxThrottle/buttonClickRxThrottle';
import { componentPlayground } from './ComponentPlayground/componentPlayground';
import { asyncPromise } from './11_asyncPromise/asyncPromise';
import { ajaxCancellation } from './12_ajaxCancellation/ajaxCancellation';
import { switching } from './13_switching/switching';
import { retry } from './14_retry/retry';

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
    city: require("../assets/city.jpg"),
    kat: require("../assets/kat.png"),
    logo: require("../assets/formidable-logo.svg"),
    markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
    primary: "#FFFFFF",
    secondary: "#1F2022",
    tertiary: "#14fc00",
    quartenary: "#CECECE"
}, {
    primary: "Helvetica",
    secondary: "Helvetica"
});

export default class Presentation extends React.Component {

    render() {
        return (
            <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>

                {/*title*/}
                {titleSlide()}

                {/*about me*/}
                {aboutMeSlide()}

                {/*examples of async*/}
                {examplesOfAsync()}

                {/*promises*/}
                {promises()}

                {/*promises for async*/}
                {promisesForAsync()}

                {/*what is rxjs and observables*/}
                {whatIsRxJsSlide()}

                {/*what are observables*/}
                {whatAreObservables()}

                {/*button click example*/}
                {buttonClickJs()}
                {buttonClickRx()}
                {buttonClickRxThrottle()}
                {/*unsubscribe*/}

                {/*Async example*/}
                {asyncPromise()}

                {/*why you need cancellation - example*/}

                {/*how to do cancellation in RxJS*/}
                {ajaxCancellation()}

                {/*switching fail example with gif*/}

                {/*switching example*/}
                {switching()}

                {/*switching success example with gif*/}

                {/*how to retry*/}
                {retry()}

                {/*make own observable*/}

            </Deck>
        );
    }

}
