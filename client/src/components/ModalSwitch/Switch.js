import React from 'react'
import Switch from "react-switch";

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
        <label>
            <span>Switch with default style</span>
            <Switch onChange={this.handleChange} checked={this.state.checked} />
        </label>
        )
    }
}

export default SwitchModal