import React from 'react'
import Switch from "react-switch";
import '../ModalSwitch/Switch.scss'


class SwitchModal extends React.Component {
    render() {
        let { isOn, handleToggle } = this.props;
        return (
            <label>
                <span>Switch with default style</span>
                <Switch onChange={handleToggle} checked={isOn} />
            </label>
        );
    }
}

export default SwitchModal