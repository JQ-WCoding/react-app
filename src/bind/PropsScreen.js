const PropsScreen = (props) => {
    const check = () => {
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