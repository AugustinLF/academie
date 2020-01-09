import React from "react";
import g from "glamorous";

import {Link, InnerLink, List, ListItem} from "../components/base";
import choralImage from "../choral.jpg";
import InnerPage from "../components/innerPage";

const Choral = () => (
    <InnerPage
        name="Taller coral"
        imgUrl={choralImage}
        content={
            <div>
                <p>
                    El cor serà dirigit per{" "}
                    <InnerLink to="/ca/philippe-le-fevre">Philippe Le Fèvre</InnerLink>, director
                    musical de l’Acadèmia, i{" "}
                    <InnerLink to="/en/adam-vidovic">Adam Vidovic</InnerLink>. El cor comptarà amb
                    28 coristes amb un màxim equilibri de cordes. El taller està adreçat a cantaires
                    experimentats.
                </p>
                <p>
                    En parallel als assajos, els cantaires rebran classes de tècnica vocal de{" "}
                    <InnerLink to="/ca/muriel-ferraro">Muriel Ferraro</InnerLink>
                </p>
   <p>El programa del cor:</p>             
    <p>
        <List>
        <ListItem>Wycombe : Summer Is Icumen</ListItem>
        <ListItem>William Byrd : The Eagle's Force subdues each Bird that flies (SAH)</ListItem>					
        <ListItem>William Byrd : Compel the Hawk (SSATB)</ListItem>
        <ListItem>Thomas Morley : Fly Love that art so Sprightly (SSATB)</ListItem>
        <ListItem>Thomas Weelkes : The Nightingale (SAH)</ListItem>
        <ListItem>Thomas Vautor : Sweet Sufflok Owl (SSATB)</ListItem>
        <ListItem>John Bartlett : Of All The Birds That I Do Know (SATB) </ListItem>
                </p>
                <p>
                    With{" "}<InnerLink to="/fr/philippe-le-fevre">Philippe Le Fèvre</InnerLink>:
 </p>
                <p>
        <List>
        <ListItem>Marc-Antoine Charpentier : Regina Coeli H46 (SATB)</ListItem>				
        <ListItem>Guillaume Bouzignac : O mors, ero mors (SSATB)</ListItem>			  	
        <ListItem>Marc-Antoine Charpentier : Alma redemptoris Mater H44	(SATB)</ListItem>	
        <ListItem>Guillaume Bouzignac : Ha, Plange Filia Jerusalem (SSATB)</ListItem>		
        <ListItem>Marc-Antoine Charpentier : Transfige dulcissime Jesu H251	(SSATB)</ListItem>	
 </p>
            </div>
        }
    />
);

export default Choral;
