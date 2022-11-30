const Condition = () => {

    const name = 'react';

    return (
        <div>
            {name === 'react' ? ( <h1>React!</h1> ) : ( <h1>Not a React</h1> )}
        </div>
    )
}