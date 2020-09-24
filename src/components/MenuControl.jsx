import React from 'react';
import { Dropdown } from 'react-bootstrap';
import SelectableContext from "react-bootstrap/SelectableContext";

import CustomToggle from './menu/CustomToggle';
import CustomMenu from './menu/CustomMenu';

class MenuControl extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: this.props.items,
            selecteMenuItem: 0,
            selectedMenuCode: '',
        };

        this.onSelect = (id, code) => {
            if (id === 3 || id === 6) {
                window.open(code, '_blank');
            }
            this.setState({ selecteMenuItem: id, selectedMenuCode: code })
        };
    }

    render() {
        const { items, selecteMenuItem, selectedMenuCode } = this.state;

        return (
            <Dropdown drop="left">
                <Dropdown.Toggle as={CustomToggle} />
                <SelectableContext.Provider value={false}>
                    <Dropdown.Menu selectedMenuCode={selectedMenuCode} selecteMenuItem={selecteMenuItem} className="customized-menu" as={CustomMenu}>
                        {items.map((item, i) => {
                            return (<Dropdown.Item as="li" onSelect={(e) => this.onSelect(item.id, item.code)} key={i}>{item.text}</Dropdown.Item>)
                        })}
                    </Dropdown.Menu>
                </SelectableContext.Provider>
            </Dropdown>
        );
    }
}

export default MenuControl;