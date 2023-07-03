const Simpsons = (props) => {
    const {name,surname,age,gender,photo} = props;
    return (

        <div className={'SimpsonsStyle'}>
            <h3>Name : {name}</h3>
            <h3>Surname : {surname}</h3>
            <h6>Age : {age}</h6>
            <h6>Gender : {gender}</h6>
            <img src={photo} alt=""/>
        </div>
    )
}

export default Simpsons;