const MyComponent = ( props ) => {
    const {name, children} = props;

    return (
        <div>
            My name is {name}!! <br/>
            children value is {children} !!
        </div>
    )
}

MyComponent.defaultProps = {
    name: 'Deafult Name'
}


export default MyComponent;