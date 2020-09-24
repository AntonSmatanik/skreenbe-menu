import React from 'react';
import Switch from 'react-switch';

import './../../../css/SwitchControl.scss';

class SwitchControl extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: false,
        };

        this.onChange = () => this.setState({ checked: !this.state.checked });
    }

    render() {
        const { checked } = this.state;
        return (
            <Switch
                className="react-switch"
                checked={checked}
                onChange={this.onChange}
                offColor="#321425"
                onColor="#1e1f23"
                offHandleColor="#ec4b57"
                onHandleColor="#23b743"
                width={85}
                uncheckedIcon={
                    <div className="unchecked-icon">
                        Off
                    </div>
                }
                checkedIcon={
                    <div className="checked-icon">
                        On
                    </div>
                }
            />
        );
    }
}

export default SwitchControl;