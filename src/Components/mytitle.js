

function MyTitle(props)
{

    return (
        
        <h1 className={`text-center text-${props.color} fw-bolder`} > {props.content}</h1>
        

    )

}

export default MyTitle;