import {

FaMoon,

FaSun

} from "react-icons/fa";

import useTheme from "../hooks/useTheme";


function ThemeToggle(){


const {

dark,

toggleTheme

}=useTheme();



return(

<button

className="theme-toggle"

onClick={toggleTheme}

aria-label="Toggle theme"

>


{

dark ?

<FaSun/>

:

<FaMoon/>

}


</button>

);


}


export default ThemeToggle;