import React from "react";
import {FormattedMessage} from "react-intl";

import {Link} from "../../components/base";

const registrationLinks = {
    en: "https://goo.gl/forms/JKabfMZcekpXbIVK2",
    fr: "https://goo.gl/forms/QxVyNcr3YRDUg7gD3",
    ca: "https://goo.gl/forms/JKabfMZcekpXbIVK2",
};

const Register = ({langKey}) => (
    <Link href={registrationLinks[langKey]}>
        <FormattedMessage id="register" />
    </Link>
);
export default Register;
