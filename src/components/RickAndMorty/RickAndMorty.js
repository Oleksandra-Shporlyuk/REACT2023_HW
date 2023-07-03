const RickAndMorty = (props) => {
    const {id,name,status,species,gender,photo} = props;
    return (
        <div className={'RickAndMortyStyles'}>
            <h3>Id : {id}</h3>
            <h3>Name : {name}</h3>
            <h6>Status : {status}</h6>
            <h6>Species : {species}</h6>
            <h6>Gender : {gender}</h6>
            <img src={photo} alt=""/>
        </div>
    );
};

export default RickAndMorty;