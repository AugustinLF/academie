import React from "react";
import g from "glamorous";

import {List, ListItem, InnerLink, IframeContainer} from "../components/base";
import vocalImage from "../vocal.png";
import InnerPage from "../components/innerPage";

const Vocal = () => (
    <InnerPage
        name="Vocal Academy"
        imgUrl={vocalImage}
        content={
            <div>
               
                    <ListItem>
                        With{" "}
                        <InnerLink to="/en/maarten-koningsberger">
                            Henk Neven
                        </InnerLink>{" "}
                        the singers focus their work on soloist repertoire, performance, as well as
                        collegial practice. Technical work will concentrate on posture, breathing,
                        phonation and voice consistency, so that students may develop their
                        instrument. Students will study how a successful performance also requires
                        expression and interpretation of a piece.
                    </ListItem>
                </List>
                <p>
                    Every day starts with a class in posture and breathing. Every student receives a
                    daily private lesson in vocal technique with Henk Neven.
                </p>
                <p>
                    Students work with <InnerLink to="/en/helene-dufour">
                        Hélène Dufour
                    </InnerLink>{" "}
                    and <InnerLink to="/en/stefano-intrieri">Stefano Intrieri</InnerLink>, either
                    individually or in small groups.
                </p>
                <p>
                    The day ends with a masterclass on 4 major J.S. Bach pieces: St John Passion, St
                    Matthew Passsion, Mass in B minor, Christmas Oratorio
                </p>
               
            </div>
        }
    />
);

export default Vocal;
