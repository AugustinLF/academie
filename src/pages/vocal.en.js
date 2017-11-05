import React from "react";
import g from "glamorous";

import {Link} from "../components/base";
import Page from "../components/page";
import LeadImage from "../components/leadImage";
import vocalImage from "../vocal.png";

const Vocal = () => (
    <Page title="Vocal Academy">
        <LeadImage src={vocalImage} alt="vocal academy" />
        <div>
            <p>
                The singers will focus their work on soloist repertoire, performance, as well as
                collegial practice. Technical work will concentrate on posture, breathing, phonation
                and voice consistency, so that students may develop their instrument. Students will
                study how a successful performance also requires expression and interpretation of a
                piece.
            </p>
            <p>
                Every day starts with a class in posture and breathing. Every student receives a
                daily private lesson in vocal technique with Isabelle Germain.
            </p>
            <p>
                Students work with Hélène Dufour and Stefano Intrieri, either individually or in
                small groups and with Josep Cabré for polyphonic repertoire.
            </p>
            <p>
                <Link href="https://docs.wixstatic.com/ugd/169d18_1fd457e6017f483baa4cc95c60cd5950.pdf">
                    Download the program
                </Link>
            </p>
        </div>
    </Page>
);

export default Vocal;
