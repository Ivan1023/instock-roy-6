import React from 'react';
import '../InventoryProducts/InventoryProducts.scss'
import Axios from 'axios';
const inventoryUrl = "http://localhost:8080/inventorydata";


class RemoveButton extends React.Component {
    container = React.createRef();
    state = {
        open: false,
    };

    handleButtonClick = () => {
        this.setState(state => {
            return {
                open: !state.open,
            };
        });
    };

    deleteHandler = () => {
        console.log("you clicked on remove", this.props.id)
        Axios.delete(`${inventoryUrl}/${this.props.id}`, (req, res) => {
            console.log("chillybean")
            this.props.getInventory()
        })
    }



    handleClickOutside = event => {
        if (this.container.current && !this.container.current.contains(event.target)) {
            this.setState({
                open: false,
            });
        }
    };

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }

    render() {
        return (
            <div className="dropdown" ref={this.container}>
                <img onClick={this.handleButtonClick} alt="3 dots" className="remove-button" />
                {this.state.open && (<button onClick={() => this.props.remove(this.props.id)} className="dropdown__position">Remove</button>)}
            </div>
        )
    }
}

export default RemoveButton