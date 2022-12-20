import {Component} from "react";

class EventPractice extends Component {
    state = {
        username: '',
        message : ''
    }

    constructor( props ) {
        super( props );
        this.handleChange = this.handleChange.bind( this );
        this.handleClick = this.handleClick.bind( this );
    }

    handleChange( e ) {
        this.setState( {
            [e.target.name]: e.target.value
        } );
    }

    handleClick() {
        alert( this.state.username + ': ' + this.state.message );
        this.setState( {
            username: '',
            message : ''
        } );
    }

    render() {
        return (
            <>
                <h1>Event Practice</h1>
                <input type="text"
                       name="message"
                       placeholder="anything"
                       value={this.state.message}
                    // onChange={( e ) => this.setState( {
                    //     message: e.target.value
                    // } )}
                       onChange={this.handleChange}
                />
                <input type="text"
                       name="message"
                       placeholder="anything"
                       value={this.state.message}
                       onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>Confirm</button>
            </>
        );
    }
}

export default EventPractice;