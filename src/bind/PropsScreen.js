const PropsScreen = ( props ) => {
    const check = () => {
        let result;
        try {
            result = props.children;
        } catch ( err ) {
            console.log( err );
            result = 'error';
        }

        if ( props.children ) {
            console.log( 'props.children :: ', props.children );
        }
    }


    return (
        <>
            {check}
        </>
    );
}