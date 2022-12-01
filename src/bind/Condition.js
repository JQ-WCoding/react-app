const Condition = () => {

    const name = 'react';

    // return (
    //     <div>
    //         {name === 'react' ? ( <h1>React!</h1> ) : ( <h1>Not a React</h1> )}
    //     </div>
    // )

    // name이 react 가 아니면 null을 반환 -> 아무것도 보이지 않는다
    return(
        <div>{name === 'react' && <h1>react!!</h1>}</div>
    );

    // return name || 'undefined value';


}