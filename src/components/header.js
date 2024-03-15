import { Link, Navigate, useNavigate } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import {logout,setCurrentuser}from "../reduxconfig/userslice.js";

export default function Header({props})
{
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const{isLoggedin}=useSelector(state=>state.user.value);

let lout=()=>
{
        // dispatch({type:"user"},logout());

      dispatch(logout());
}
let loginUser=()=>
{
        // dispatch({type:"user"},logout());

      dispatch(setCurrentuser());
}
  return (

    <>
         <header className="header_section pb-0" Style="position:relative;" >
          <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          
          <Link to className="navbar-brand" href="index.html">
            
            <img src="images/logo.png" alt=""/>

            <span>
              Lodge
            </span>
          </Link >

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse pb-3 pt-3" id="navbarSupportedContent"style={{backgroundColor: "#262626",color:'blue'}}>
            <div className="d-flex ml-auto flex-column flex-lg-row align-items-center" >
              <ul className="navbar-nav  " >
                <li className="nav-item active" >
                  <Link to="" className="nav-link">Home <span className="sr-only">(current)</span></Link >
                </li>
                <li className="nav-item">

                  <Link to="/jewellry" className="nav-link" > jewellery</Link >
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link" >About </Link >
                </li>
                <li className="nav-item">
                  <Link to="/contactus" className="nav-link">Contact us</Link >
                </li>
                <li className="nav-item">
                  {

                   !isLoggedin &&
                  <Link to="/login" className="nav-link" >

                <a onClick={setCurrentuser}> Login</a> 

                  </Link >
                  
                  }
                </li>
                <li className="nav-item">
                  {
                !isLoggedin &&
                  <Link to="/signup" className="nav-link">Sign up</Link >
                  }
                </li>
                <li>
                {
              isLoggedin &&
              <Link to="/signout" className="nav-link">
                <a onClick={lout}>signout</a>
              </Link >
                }

                </li>

              </ul>

            </div>
            <div className="quote_btn-container ">
              <Link to="">
                <img src="images/cart.png" alt=""/>
                <div className="cart_number">
                  0
                </div>
              </Link >
              <form className="form-inline">
                <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </header>
   
    </>
    )
}