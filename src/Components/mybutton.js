
// function MyButton(props)
// {
//     return (<button className={`btn btn-${props.color}`}> {props.content}</button>)

// }

function MyButton({ color = 'primary', content = 'Button' ,link = '#'})
{
    // return (<button className= {`btn btn-${color} btn-lg`}> {content}</button>)
    return (
        <a href={link} target="_blank" className={`btn btn-${color} btn-lg`}>
            {content}
        </a>
    );

}


export default MyButton;