import React from "react";

import {Link} from "../components/base";
import InnerPage from "../components/innerPage";
import muriel from "../muriel.jpg";

const Muriel = () => (
    <InnerPage
        name="Muriel Ferraro"
        title="Singing for the choir and for the choir conducting workshop"
        imgUrl={muriel}
        content={
            <div>
                <p>
                    The French soprano Muriel Ferraro was born in Grenoble, where she first started
                    studying the violin. She unexpectedly decided to resume her musical studies
                    after a master’s degree in Law and Applied Languages. She left Berlin for Paris
                    and was lead by her rising voice through the sinuous paths of singing. Out of
                    curiosity she explored various styles and vocal practices. She was then inclined
                    towards young dramatic opera repertoire thanks to the decisive encounter with
                    the Soprano Florence Guignolet, from whom she received instruction. She has been
                    perfecting her skills with Mirella Freni and Leontina Vaduva.
                </p>
                <p>
                    Recently Muriel Ferraro could be heard Les Lessiveuses, an opera creation by
                    French contemporary composer Thierry Machuel with 2E2M ; as Tannhaüser’s Venus
                    in Clermont-Ferrand Opera ; as Wozzeck’s Marie at the Royaumont Foundation,
                    staged by André Engel; as Puccini’s Suor Angelica in Paris, as Brünnhilde in
                    extracts of Ring des Niebelungen in the musical theater show Nietzsche/Wagner:
                    le Ring in Théâtre de l’Athénée, Paris, as Egisto in L’Egisto by Mazzocchi and
                    Marazzoli at Massy Opera and in Ma at Amphitheater of the Bastille Paris Opera.
                </p>
                <p>
                    Her operatic performances include: Nedda in I Pagliacci, Giorgetta in Il
                    Tabarro, la Ciesca in Gianni Schicchi and Métella in Offenbach’s La Vie
                    Parisienne with the company Collectif Lyrique; Mazet in Gounod’s La Colombe at
                    Abbaye aux Dames; Agathe in Philip Glass’s Les Enfants terribles, Théâtre
                    Athénée, staging Paul Desveaux; Giovanna and Contessa Ceprano in Rigoletto
                    conducted by Mélanie Thiébaut; Dulcinée in Don Quichotte after Massenet; la
                    Baronessa Aspasia in Rossini’s La Pietra del Paragone) conducted by Laurent
                    Gendre ; The Queen of the Fairies in Schumann’s Der Rose Pilgerfahrt at Folle
                    Journée, Nantes.
                </p>
                <p>
                    In concert she sang Samuel Barber’s Knoxville: Summer of 1915 with Ensemble
                    Orchestral de Paris.
                </p>
                <p>
                    Muriel Ferraro teaches singing at the{" "}
                    <Link href="http://www.cmbv.fr/formation/">
                        Versailles Baroque Music Center
                    </Link>{" "}
                    and at the Young Singers Department in Paris Regional Conservatory. She also
                    teaches vocal technique for three choirs, in and near Paris.
                </p>
            </div>
        }
    />
);
export default Muriel;
