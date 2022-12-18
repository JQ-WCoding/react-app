// const MyComponent = ( props ) => {
//     const {name, children} = props;

import PropTypes from "prop-types";


// props 검증하는 방법
const MyComponent = ( {name, favoritNumber, children} ) => {

    return (
        <div>
            My name is {name}!! <br/>
            children value is {children} !!
            <br/>
            My favorite number is {favoritNumber} !!
        </div>
    )
}

MyComponent.defaultProps = {
    name: 'Deafult Name'
}

MyComponent.defaultTypes = {
    name          : PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired // 필수로 전달 받아야함을 의미한다.
}


export default MyComponent;