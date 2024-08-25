function Hello(){
    let myName='Paridhi';
    let number=456;
    let fullName = ()=> {
    return 'Patidar';
    }


    return <h1>
        MessageNo:{number};
        Hello I'm {myName} {fullName()}.
    </h1>
}

export default Hello;