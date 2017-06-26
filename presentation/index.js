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

                {componentPlayground()}

                {/*Async example*/}


                {/*anatomy of observable*/}

                {/*how to do cancellation*/}

                {/*how to retry*/}

                <CodeSlide
                    transition={[]}
                    lang="js"
                    code={require("raw-loader!./code.example")}
                    ranges={[
                        {loc: [0, 270], title: "Walking through some code"},
                        {loc: [0, 1], title: "The Beginning"},
                        {loc: [1, 2]},
                        {loc: [1, 2], note: "Heres a note!"},
                        {loc: [2, 3]},
                        {loc: [4, 7]},
                        {loc: [8, 10]}
                        // ...
                    ]}
                />
                <Slide transition={["zoom"]} bgColor="primary" notes="some notes">
                    <Heading size={1} fit caps lineHeight={1} textColor="secondary">
                        Spectacle Boilerplate
                    </Heading>
                    <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
                        open the presentation/index.js file to get started
                    </Text>
                </Slide>
                <Slide transition={["fade"]} bgColor="tertiary">
                    <Heading size={6} textColor="primary" caps>Typography</Heading>
                    <Heading size={1} textColor="secondary">Heading 1</Heading>
                    <Heading size={2} textColor="secondary">Heading 2</Heading>
                    <Heading size={3} textColor="secondary">Heading 3</Heading>
                    <Heading size={4} textColor="secondary">Heading 4</Heading>
                    <Heading size={5} textColor="secondary">Heading 5</Heading>
                    <Text size={6} textColor="secondary">Standard text</Text>
                </Slide>
                <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
                    <Heading size={6} textColor="secondary" caps>Standard List</Heading>
                    <List>
                        <ListItem>Item 1</ListItem>
                        <ListItem>Item 2</ListItem>
                        <ListItem>Item 3</ListItem>
                        <ListItem>Item 4</ListItem>
                    </List>
                </Slide>
                <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
                    <BlockQuote>
                        <Quote>Example Quote</Quote>
                        <Cite>Author</Cite>
                    </BlockQuote>
                </Slide>
            </Deck>
        );
    }
}
