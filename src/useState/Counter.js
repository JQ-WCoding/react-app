import {Component, useState} from "react";


class Counter extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            number     : 0,
            fixedNumber: 0
        };
    }

    render() {
        const {number, fixedNumber} = this.state;
        return (
            <>
                <h1>{number}</h1>
                <h2>unchanged number : {fixedNumber}</h2>
                {/*<button onClick={() => {*/}
                {/*    this.setState( {number: number + 1} );*/}
                {/*}}>*/}
                <button onClick={() => {
                    this.setState( prevState => {
                        return {number: prevState.number + 1};
                    } );

                    // 위와 동일한 기능
                    // this.setState( prevState => ( {number: prevState.number + 1} ) );
                }}>
                    +1
                </button>
            </>
        );
    }
}

// const Counter = () => {
//     const [value, setValue] = useState( 0 );
//
//     return (
//         <div>
//             <p>
//                 현재 카운터 값은 <b>{value}</b>.
//             </p>
//             <button onClick={() => setValue( value + 1 )}> + 1</button>
//             <button onClick={() => setValue( value - 1 )}> - 1</button>
//         </div>
//     )
// }
//
export default Counter;