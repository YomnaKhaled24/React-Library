import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { changeLanguageAction } from "../Store/Actions/changeLangAction";
import { changeThemAction } from "../Store/Actions/changeThemeAction";
import { changeWishlistAction } from "../Store/Actions/changeWishlistAction";
import { useEffect , useState} from "react";

function Navbar()
{ 
  //To read or get from reducer => use this hook (useSelector)

  // const myLanguage = useSelector((state) => state.langR.lang);

  // To change data in reducer => use this hook (useDispatch)
  const dispatch = useDispatch()

  const changeLanguage = ()=>{
    //call function or dispatch action 

    // console.log("clicked");

    // dispatch(changeLanguageAction(myLanguage === "En" ? "Ar": "En"));

    // if(myLanguage === "En")
    // {
    //   dispatch(changeLanguageAction("Ar"));

    // }
    // else
    // {
    //   dispatch(changeLanguageAction("En"));
    // }
    

  }

  const myTheme = useSelector((state) => state.themeR.theme);

  // const dispatch2 = useDispatch()
  // const changeTheme = ()=>{

  //   dispatch(changeThemAction(myTheme === "Light" ? "Dark": "Light"))
  // }

  const myWishlist = useSelector((state) => state.wishlistR.cartItems);

  const cards = useSelector((state) => state.cardR.cards)

  // console.log(myWishlist);

  // const changeWishlist = (item)=>{

  //   dispatch(changeWishlistAction(item))
  // }

  // let signStatus = JSON.parse(localStorage.getItem('signed'));

  // localStorage.setItem('signed', JSON.stringify('false'));
  // const [signStatus, setSignStatus] = useState(JSON.parse(localStorage.getItem('signed')));

  const [signStatus, setSignStatus] = useState(() => {
    const storedSignStatus = localStorage.getItem('signed');
    return storedSignStatus ? JSON.parse(storedSignStatus) : false;
  });

  const Logout = () =>{
    setSignStatus('false');

    // localStorage.setItem('signed', JSON.stringify('false'));
  }

  // useEffect(()=>{

  //   // const signstatus = JSON.parse(localStorage.getItem('signed'));
  //   setSignStatus(JSON.parse(localStorage.getItem('signed')));

  // },[JSON.parse(localStorage.getItem('signed'))])

  useEffect(() => {
    
    window.addEventListener('storage', () => {
      // When local storage changes, dump the list to
      // the console.
      setSignStatus(JSON.parse(localStorage.getItem('signed')))
    });
    
       
    }, [])


  useEffect(()=>{

    // const signStatus = JSON.parse(localStorage.getItem('signed'));
    // setSignStatus(signStatus);

    localStorage.setItem('signed', JSON.stringify(signStatus));

    // window.addEventListener('storage', () => {
    //   // When local storage changes, dump the list to
    //   // the console.
    //   setSignStatus(JSON.parse(localStorage.getItem('signed')))
    // });
  },[signStatus])
   



  return <>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark container" style={{width:'69.8rem'}}>
  <div className="container">
    <Link className="navbar-brand" to="/">SmartShop</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link text-light" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/favourits">
            {myWishlist.length > 0 ? 
              <svg xmlns="http://www.w3.org/2000/svg" fill="red" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/>
              </svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181"/>
              </svg>
            } {myWishlist.length}
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/cards">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24" height="24" viewBox="0 0 24 24">
              <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"/>
            </svg> {cards.length}
          </Link>
        </li>
      </ul>
      <div className="navbar-nav">
        {signStatus === 'true' ?
          <Link className="nav-link text-light" onClick={Logout} to="/">Logout</Link>
          :
          <>
            <Link className="nav-link text-light" to="/login">Login</Link>
            <Link className="nav-link text-light" to="/register">Register</Link>
          </>
        }
      </div>
    </div>
  </div>
</nav>
</>


  //   return <>
  //   <nav className="navbar navbar-expand-lg   container" style={{width:'1115px', backgroundColor:'#222325'}}>
  //    <div className="container ">
  //   <Link className="navbar-brand text-light" to="/">Movies</Link>
  //   <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  //     <span className="navbar-toggler-icon textlight"></span>
  //   </button>
  //   <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
  //     <div className="navbar-nav  ">
  //       <div className=" d-flex justify-content-between">
  //         <div className="d-flex flex-grow-1 ">
  //         <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>

         
  //         <Link className="nav-link text-danger" to="/favourits">{(myWishlist.length > 0) ? 
  //                                  <svg className ="" xmlns="http://www.w3.org/2000/svg" fill="red" width="24" height="22" viewBox="0 0 24 24" fill-rule="evenodd" clip-rule="evenodd">
  //                                  <path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/>
  //                                  </svg>

  //                                  :<svg className=""  width="24" height="22" fill="red" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
  //                                  <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181"/>
  //                                  </svg>} {myWishlist.length}</Link>
  //         <Link className="nav-link text-light  " to="/cards"><svg xmlns="http://www.w3.org/2000/svg" 
  //         width="26" height="26" fill="white" className="me-1" viewBox="0 0 24 24"><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"/></svg> 
  //                  {cards.length}</Link>



  //         </div>
          



  //         <div className="navbar-nav ms-auto">
  //           { signStatus === 'true' ?
            
  //               <Link className="nav-link text-light" onClick={Logout} to="/">Logout</Link>
  //             :
  //             <>
  //               <Link className="nav-link text-light" to="/login">Login</Link>
  //               <Link className="nav-link text-light"  to="/register" >Register</Link>
  //             </>
               
  //           }
          
  //       </div>
  //     </div>
        
  //     </div>
  //   </div>
  // </div>
  //  </nav>
    
    
  //   </>
}


export default Navbar