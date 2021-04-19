import styles from "./Search.module.css";
import React from 'react';
import { SearchOutlined } from '@material-ui/icons';

const SearchBar = (props) => {
    return(
        
        <div className={styles.container}>
       <div className={styles.searchcontainer}>
        <SearchOutlined  style={{ color: "black" }} />
        <input   placeholder="Type to search for books" type="text"/>
        </div>
        
        </div>
    );
};

export default SearchBar;


















