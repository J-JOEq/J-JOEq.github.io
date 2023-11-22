import React, { useState } from 'react';
import './styles.css';
import Callback from './Callback';

function Accepted(){
    return<h1 className="headerText"> Congrats! You can apply driver license!</h1>;
}
function Declined(){
    return<h1 className="headerText2"> Unfortunately, you're not of age.</h1>;
}

//Parent
export default function Header(){
    const [Num, setNum] = useState(Number);
    const [Access, setAccess] = useState(Boolean);

    //Callback Function
    const getNum = (num: any) => {
        setNum(num);
    };
    const getAccess = (access: any) => {
        setAccess(access);
    }

    return(
        <div className='headerBorder'>
            <Callback getNum = {getNum} getAccess = {getAccess}/>
            {Access ? <Accepted/>: <Declined/>}
        </div>
    );
};
