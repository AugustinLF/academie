import React from "react";
import g from "glamorous";

import {List, ListItem} from "../components/base";
import vocalImage from "../vocal.png";
import InnerPage from "../components/innerPage";

const Vocal = () => (
    <InnerPage
        name="Vocal Academy"
        imgUrl={vocalImage}
        content={
            <div>
                <p>The singers choose between two workshops:</p>
                <List>
                    <ListItem>
                        With Maarten Koningsberger the singers focus their work on soloist
                        repertoire, performance, as well as collegial practice. Technical work will
                        concentrate on posture, breathing, phonation and voice consistency, so that
                        students may develop their instrument. Students will study how a successful
                        performance also requires expression and interpretation of a piece.
                    </ListItem>
                </List>
                <p>
                    Every day starts with a class in posture and breathing. Every student receives a
                    daily private lesson in vocal technique with Maarten Koningsberger.
                </p>
                <p>
                    Students work with Hélène Dufour and Stefano Intrieri, either individually or in
                    small groups.
                </p>
                <List>
                    <ListItem>
                        With Josep Cabre : detailed informations begining of january 2018
                    </ListItem>
                </List>
            </div>
        }
    />
);

export default Vocal;
