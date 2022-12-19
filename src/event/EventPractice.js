import {Component} from "react";

class EventPractice extends Component {
    render() {
        return (
            <>
                <h1>Event Practice</h1>
                <input type="text"
                       name="message"
                       placeholder="anything"
                       onChange={( e ) => {
                           console.log( e );
                       }}
                />
            </>
        );
    }
}

export default EventPractice;