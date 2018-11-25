import React from "react";

import Page from "../components/page";
import Lead from "../components/lead";
import ProgrammeList from "../components/programmeList";

const Programme = () => (
    <Page title="L’Acadèmia d’Estiu 2019">
        <Lead>
            <p>
                L’Acadèmia d’Estiu del Capriccio Français proposa un taller per a cantaires,
                instrumentistes, estudiants de direcció de cor, així com un taller de cant coral del
                21 al 28 de juliol de 2019 (sortida matí del 29). L’Acadèmia es durà a terme a
                Barcelona, a la Casa Sant Felip Neri, un antic convent, reconvertit actualment en
                lloc d’acollida de trobades, també musicals.
            </p>
            <p>
                Els participants desenvoluparan les competències tècniques, així com estilístiques
                del repertori de la música antiga.
            </p>
            <p>
                Durant tota l’estada, solistes, instrumentistes i cantaires treballaran regularment
                junts, posant d’aquesta manera en comú els seus coneixements estilístics i preparant
                el concert de fi de taller. Aquest concert tindrà lloc el diumenge 28 de juliol de
                2019 a les 17,00h a l’Església de Sant Gaietà. En les audicions es puntuarà el
                treball realitzat, donant la possibilitat, així, de mesurar el nivell aconseguit.
            </p>
            <p>
                El perfil dels participants, instrumentistes i cantaires ha de ser com a mínim de 3r
                cicle de conservatori. S’acceptaran també artistes professionals o professors de
                formació professional. Per als directors de cor, aquestes pràctiques s’adrecen a
                estudiants inscrits en cursos de direcció de cor, a amateurs que tinguin ja
                responsabilitat en un cor o a professionals de la música, desitjosos de desenvolupar
                competències en aquest àmbit. Per als coristes, el nombre de cantaires està limitat
                a 28, amb equilibri de cordes. És recomanable bona experiència coral.
            </p>
        </Lead>
        <ProgrammeList language="ca" />
    </Page>
);

export default Programme;
