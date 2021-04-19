import React from "react";
import {useState} from "react";

export const UserDarkMode = ()=>
{
    const [theme,setTheme] = useState('dark');

    const setMode = mode => {
        window.localStorage.setItem('theme', mode);
        setTheme(mode);
      }
    const toggleTheme=()=>{theme === 'dark' ? setMode('light'): setMode('dark');
    }
    
    return [theme,toggleTheme];
}
