function Customer(props){
    if(!props.name){
        throw new Error('No name found')
    }
    return(
        <div>
            <h1>{props.name}</h1>
        </div>
    )
}

export default Customer;
