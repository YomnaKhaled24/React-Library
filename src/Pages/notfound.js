import MyTitle from "../Components/mytitle.js";

function NotFound(){

return <>

<div className="mt-5">
<MyTitle color="danger" content="Page Not Found" />
</div>

<div className="d-flex justify-content-center mt-4">
    <img src="error.gif" style={{width:``,height:`20rem`}}/>
</div>


</>
}
export default NotFound