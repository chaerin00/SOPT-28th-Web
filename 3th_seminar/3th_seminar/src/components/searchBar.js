import React, { useState } from 'react';
import styled from 'styled-components';
import { BiSearchAlt2 } from 'react-icons/bi';

const SearchBarDiv = styled.div`
    input{
        width: 300px;
        padding: 15px;
        font-size: 15px;
        font-weight: bold;
        margin-top: 15vh;
    }
`;

const SearchBar = ({ getData }) => {
    const [userName, setUserName] = useState(null);

    const changeHandler = e => {
        e.preventDefault();
        setUserName(e.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        getData(userName);
        setUserName("");
    };
    return (
        <SearchBarDiv>
            <form onSubmit={handleSubmit}>
                <BiSearchAlt2 style={{
                    top: '10px',
                    fontSize: '30px',
                }} />
                <input
                    className="searchBar_input"
                    type="text"
                    placeholder="GitHub ID를 입력하세요"
                    value={userName}
                    onChange={changeHandler}
                />
            </form>
        </SearchBarDiv>
    )
}

export default SearchBar;
