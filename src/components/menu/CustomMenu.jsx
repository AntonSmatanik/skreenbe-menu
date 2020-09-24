import React from 'react';

import DropdownControl from './controls/DropdownControl';
import SwitchControl from './controls/SwitchControl';

import './../../css/CustomMenu.scss';
import languages from '../../data/languages.json';
import colors from '../../data/colors.json';

const CustomMenu = React.forwardRef(({ selectedMenuCode, selecteMenuItem, children, style, className, 'aria-labelledby': labeledBy }, ref) => {
    return (
        <div
            ref={ref}
            style={style}
            className={className}
            aria-labelledby={labeledBy}
        >
            <div className="menu-setting">
                {<div style={{ display: selecteMenuItem === 1 ? 'block' : 'none' }}>
                    <p className="settingLabel">Select {selectedMenuCode}</p>
                    <DropdownControl items={languages} defaultValue='English' />
                </div>}                
                <div style={{ display: selecteMenuItem === 2 ? 'block' : 'none' }}>
                    <p className="settingLabel">{selectedMenuCode}</p>
                    <SwitchControl />
                </div>
                <div style={{ display: selecteMenuItem === 4 ? 'block' : 'none' }}>
                    <p className="settingLabel">{selectedMenuCode}</p>
                    <SwitchControl />
                </div>
                {<div style={{ display: selecteMenuItem === 5 ? 'block' : 'none' }}>
                    <p className="settingLabel">Select {selectedMenuCode}</p>
                    <DropdownControl items={colors} defaultValue='Red' />
                </div>}
            </div>
            <ul className="menu-list">
                {React.Children.toArray(children)}
            </ul>
        </div>
    );
});


export default CustomMenu;