// import React, { useState, useEffect, useReducer } from 'react';
import React from 'react';

import useInputs from './useInputs';


// function reducer(state, action) {
//     return {
//         ...state,
//         [action.name] : action.value
//     };
// }


const Info = () => {
    // const [name, setName] = useState('');
    // const [nickname, setNickname] = useState('');

    // const [state, dispatch] = useReducer(reducer, {
    //    name: '',
    //    nickname:'' 
    // });
    const [state, onChange] = useInputs({
        name: '',
        nickname:'' 
     });

    const { name, nickname } = state;
    // const onChange = e => {
    //     dispatch(e.target);
    // };
    // useEffect(() => {
    //     console.log('렌더링이 완료됨');
    //     console.log({name,nickname});
        
    //     return () => {
    //         console.log('cleanup');
    //         console.log(name);
    //     }
    // }, []);
    // useEffect(() => {
    //     console.log('렌더링이 완료됨');
    //     console.log({name,nickname});
    // });
    // 
    // useEffect(() => {
    //     console.log('렌더링이 완료됨');
    //     console.log({name,nickname});
    // }, [name]);

    // const onChangeName = e => {
    //     setName(e.target.value);
    // };

    // const onChangeNickname = e => {
    //     setNickname(e.target.value);
    // };
    return (
        <>
            <div>
                <input name="name" value={name} onChange={onChange}/>
                <input name="nickname" value={nickname} onChange={onChange} />
            </div>
            <div>
                <div>
                    <b>이름:</b>{name}
                </div>
                <div>
                    <b>닉네임: </b>{nickname}
                </div>
            </div>
        </>
    );

};

export default Info;