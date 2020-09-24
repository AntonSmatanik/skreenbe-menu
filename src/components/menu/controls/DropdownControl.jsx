import React from 'react';
import { NavDropdown } from 'react-bootstrap';

import './../../../css/DropdownControl.scss';

class DropdownControl extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedItem: this.props.defaultValue,
            items: this.props.items,
        };

        this.onSelect = val => this.setState({ selectedItem: val });
    }

    render() {
        const { selectedItem, items } = this.state;
        const availableItems = items.filter(item => item !== selectedItem);

        return (
            <NavDropdown className="dropdown-control" variant="dark" onSelect={this.onSelect} title={selectedItem}>
                {availableItems.map((item, i) => {  
                    return (<NavDropdown.Item as="li" key={i} eventKey={item}>{item}</NavDropdown.Item>)
                })}
            </NavDropdown>
        );
    }
}

export default DropdownControl;