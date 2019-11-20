import React from 'react'
import Switch from "react-switch";
import '../ModalSwitch/Switch.scss'


class SwitchModal extends React.Component {
    state =(
        this.state = { checked: false },
        this.handleChange = this.handleChange.bind(this)
    )

    handleChange(checked) {
        this.setState({ checked });
    }

    render (){
        return(
        <label className="switch-button">
            <span>In Stock</span>
            <Switch onChange={this.handleChange} checked={this.state.checked} />
        </label>
        )
    }
}

export default SwitchModal