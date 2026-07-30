import { useEffect, useState } from "react";


function useTheme(){


const [dark,setDark]=useState(false);



useEffect(()=>{


const saved=

localStorage.getItem("theme");


if(saved==="dark"){

setDark(true);

document.documentElement.dataset.theme="dark";

}


},[]);



const toggleTheme=()=>{


const newTheme=!dark;


setDark(newTheme);



document.documentElement.dataset.theme =

newTheme ? "dark" : "light";



localStorage.setItem(

"theme",

newTheme ? "dark" : "light"

);


};



return {

dark,

toggleTheme

};


}



export default useTheme;