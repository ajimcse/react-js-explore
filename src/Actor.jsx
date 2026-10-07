// export default function Actor({name}) {
// return  <li> Name:{name}</li> 
// }
export default function Singer({ singer }) {
    return (
        <div className="singer-card">
            <h2>Name: {singer.name}</h2>
            <p>ID: {singer.id} </p>
            <p>Age: {singer.age} </p>
        </div>
    )
}