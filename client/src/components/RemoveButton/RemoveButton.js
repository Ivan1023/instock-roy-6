import React from 'react';
import '../InventoryProducts/InventoryProducts.scss';

class RemoveButton extends React.Component{
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

    render () {
    
        return (
            <div className="dropdown" ref={this.container}>
                <img onClick={this.handleButtonClick} alt="3 dots" className="main__table-body__data-remove-button" />
                {this.state.open && (<button className="dropdown__position">Remove</button>)}
            </div>
        )
    }
}

export default RemoveButton