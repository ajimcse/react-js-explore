
export default function Book({book}){
    
    const {name, id, price, age} = book;
    console.log(name)
    return(
        <div>
            <h3>book:{name}</h3>
            <p>price:{price}</p>
            
        </div>
    )
}