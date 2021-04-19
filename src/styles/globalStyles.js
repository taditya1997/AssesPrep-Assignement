import {createGlobalStyle} from "styled-components";

export const GlobalStyles=createGlobalStyle`
body
{
    background:${({theme})=>theme.body};
    color:${({theme})=>theme.text};
}
`;

export const lightTheme=
{
    body:'#E2E2E2',
    text:'#363537'
    
};

export const darkTheme=
{
    body: '#363537',
    text: '#FAFAFA',
}