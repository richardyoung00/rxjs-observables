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
    Table,
    TableBody,
    TableRow,
    TableItem
} from "spectacle";
import './style.css'

export function promisesForAsync() {
    return (
        <Slide transition={["fade"]} notes={title_notes}>
            <Heading size={5} textColor="header">Promises for Async</Heading>

            <Table className='asyncTable'>
                <TableBody>
                    <TableRow>
                        <TableItem>DOM events</TableItem>
                        <TableItem>multiple values</TableItem>
                    </TableRow>
                    <TableRow>
                        <TableItem>AJAX</TableItem>
                        <TableItem>single value</TableItem>
                    </TableRow>
                    <TableRow>
                        <TableItem>Animations</TableItem>
                        <TableItem>cancellable</TableItem>
                    </TableRow>
                    <TableRow>
                        <TableItem>WebSockets</TableItem>
                        <TableItem>multiple values</TableItem>
                    </TableRow>
                    <TableRow>
                        <TableItem>Server-Sent Events</TableItem>
                        <TableItem>multiple values</TableItem>
                    </TableRow>
                </TableBody>
            </Table>
        </Slide>
    );
}

const title_notes = `
    <ul>
        <li>promises only really fit for AJAX, assumes no cancelling</li>
        <li>Only really AJAX fits into the promise schema</li>
    </ul>
`;