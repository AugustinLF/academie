import React from 'react';

import './programItem.scss';

const ProgramItem = ({imageUrl, imageAlt, title, content}) => (
    <div className="program-item">
        <img src={imageUrl} alt={imageAlt} width="600" height="400" />
        <div className="program-item__content">
            <h2>{title}</h2>
            {content}
        </div>
    </div>
);
export default ProgramItem;
