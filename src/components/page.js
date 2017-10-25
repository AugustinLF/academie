import React from 'react';

import './page.scss';

const Page = ({title, children}) => (
    <div className="page">
        <div className="page__title">{title}</div>
        <div className="page__content">{children}</div>
    </div>
);
export default Page;
