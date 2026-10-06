export default function Todo({ task, isDane}) {
    // return (
    //     <>
    //         <ul>
    //             {/* <li>Name:{name}</li>
    //             <li>Age:{age}</li>
    //             <li>City:{city}</li> */}

    //             <li> name:{name}</li> 
               
    //         </ul>
    //     </>
    // )
    // if(isDane=== true){
    //     return <li>Finsid:{task}</li>
    // } else{
    //     return <li>true:{name}</li>
    // }

    return (
        // <li>{isDane ? 'finished': 'work on'} : {task}</li>
    <li>{task}: {isDane || 'Do it'}</li>
    )
}