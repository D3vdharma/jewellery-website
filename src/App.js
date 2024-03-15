import Footer from "./components/footer";
import Header from "./components/header";
import Home from   "./components/home.js";
import About from "./components/about.js";
import Jewellry from "./components/jewellry.js";
import ContactUs from "./components/contactus.js";
import LogIn from "./components/login.js"
import SignUp from "./components/signup";
import { Routes,Route} from "react-router-dom";


function App() {
  return (
<>
       <Header>
        
       </Header>

        <Routes>

        <Route path="/"  element={<Home/>}></Route>
        <Route path="/about"  element={<About/>}></Route>
        <Route path="/jewellry"  element={<Jewellry/>}></Route>
        <Route path="/contactus"  element={<ContactUs/>}></Route>
        <Route path ="/login"   element={<LogIn/>}> </Route>
        <Route path ="/signup"   element={<SignUp/>}> </Route>
        <Route path ="/signout"   element={<LogIn/>}> </Route>
        
        </Routes>
        
        <Footer></Footer> 
</>
  );
}

export default App;
