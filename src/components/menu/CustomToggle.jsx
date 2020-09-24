import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'

import './../../css/CustomToggle.scss';

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
        className="customized-toggle"
        href="/#"
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
    >
        {children}
        <FontAwesomeIcon icon={faCog} />
    </a>
));

export default CustomToggle;