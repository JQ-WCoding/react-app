import {useState} from "react";

const Say = () => {
    const {message, setMessage} = useState( '' );

    const onClickEnter = () => {
        setMessage( 'Hello' );
    }
    const onClickLeave = () => {
        setMessage( 'GoodBye' );
    }

    return (
        <>
            <button onClick={onClickEnter}>Enter</button>
            <button onClick={onClickLeave}>Leave</button>
            <h1>{message}</h1>
        </>
    );
}