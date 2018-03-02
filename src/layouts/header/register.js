import React from "react";
import {FormattedMessage} from "react-intl";

import {Link} from "../../components/base";

const registrationLinks = {
    en: "http://capricciofrancais.com/registration.php",
    fr: "http://capricciofrancais.com/inscription.php",
    ca: "http://capricciofrancais.com/registration.php",
};

const Register = ({langKey}) => (
    <Link href={registrationLinks[langKey]}>
        <FormattedMessage id="register" />
    </Link>
);
export default Register;
