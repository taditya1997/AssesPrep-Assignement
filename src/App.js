import './App.css';
import SearchBar from '../src/SearchBar/SearchBar.js';
import Collection from '../src/Collection/Collection.js';
import {fetchData} from '../src/Api/Api.js';
import { useEffect,useState } from 'react';
import { UserDarkMode } from './styles/UserDarkMode';
import styled,{ThemeProvider} from "styled-components";
import Toggle from './styles/Toggle.js';
import {GlobalStyles,lightTheme,darkTheme} from './styles/globalStyles.js'

// const LightTheme={
//   pageBackground:"white",
//   titleColor:"#dc658b",
//   tagLineColor:"black"
// };


// const DarkTheme={
//   pageBackground:"#282c36",
//   titleColor:"lightpink",
//   tagLineColor:"lavender"
// }

// const themes={
//   light:LightTheme,
//   dark:DarkTheme
// }

const Container=styled.div`
 text-align: center;
  display:grid;
  place-items:center;
  height:100vh;
  background-repeat: repeat-y;
`;

function App() 
{
  const [data,getData]=useState([]);
  const [theme,toggleTheme]= UserDarkMode();
  const themeMode = theme ==='light'? lightTheme : darkTheme;
    
useEffect(()=>
    {
    const fetchValue = async ()=>
    {
     
    const value = await fetchData();
    
    getData(value);
    
    }
       
    fetchValue();

    console.log(data);
    },[])


  return (
    <ThemeProvider theme={themeMode}>
       <Container>
          <GlobalStyles />
          <SearchBar />
          <Toggle theme={theme} toggleTheme={toggleTheme}/>
          <h1>Lets Create the BookStore</h1>
          <Collection data={data} />
        </Container>
    </ThemeProvider>
  );
}

export default App;
