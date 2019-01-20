import React from "react";
import {FormattedMessage} from "react-intl";

import {Link} from "../../components/base";

const registrationLinks = {
    en: "https://docs.google.com/forms/d/1L893pl6JZKtkyLLIsaPSjFlxcWdZ7TDI1CEkXHPckFQ/prefill",
    fr: "https://docs.google.com/forms/d/1DOQQd6gLtgcNbZ-knO2hV_HaEVdYd9xuKTZX31FYgLA/prefill",
    ca: "https://docs.google.com/forms/d/1L893pl6JZKtkyLLIsaPSjFlxcWdZ7TDI1CEkXHPckFQ/prefill",
};

const Register = ({langKey}) => (
    <Link href={registrationLinks[langKey]}>
        <FormattedMessage id="register" />
    </Link>
);
export default Register;
