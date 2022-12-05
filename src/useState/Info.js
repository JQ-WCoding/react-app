import {useEffect, useState} from "react";

const Info = () => {
    const [name, setName] = useState( '' );
    const [nickname, setNickname] = useState( '' );

    // deps 지정
    useEffect( () => {
        onChangeName();
    }, [] );

    const onChangeName = e => {
        setName( e.target.value );
    }

    const onChangeNickname = e => {
        setNickname( e.target.value );
    }

    useEffect( () => {
        console.log( '렌더링이 완료되었습니다!' );
        console.log( {
            name, nickname
        } );
    }, [] );

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName}/>
                <input type="text" value={nickname} onChange={onChangeNickname}/>
            </div>

            <div>
                <div>
                    <b>이름 : </b> {name}
                </div>
                <div>
                    <b>닉네임 : </b> {nickname}
                </div>
            </div>
        </div>
    );
}

export default Info;