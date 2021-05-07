import React from 'react';
import styled from 'styled-components';


const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 30%;
    border: 1px solid;
    margin: 100px;//card margin
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    
    img{
        width: 50%;
        border-radius: 50%;
        margin-top: 10%;
        padding: 5px;
        border: 3px solid black;
    }
    .result_name{
        font-size: 30px;
        margin: 0;
        margin-top: 10px;
    }
    .result_id{
        margin: 0;
        font-size: 20px;
    }
    .result_bio{
        font-size: 15px;
    }
    .result_list{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        p{
            text-align: center;
            border: 1px solid;
            border-top: 2px solid;
            margin: 0;
            padding-top: 20px;
            padding-bottom: 20px;
        }
    }
`;

const UserCard = ({ data }) => {
    return (
        <Card>
            {data && (
                <div className="result_card">
                    <img src={data.avatar_url} alt="" />
                    <p className="result_name">{data.name}</p>
                    <p className="result_id">{data.login}</p>
                    <p className="result_bio">{data.bio}</p>
                    <div className="result_list">
                        <p className="result_followers">Followers: {data.followers}</p>
                        <p className="result_following">Following: {data.following}</p>
                        <p className="result_repos">Repos: {data.public_repos}</p>
                    </div>
                </div>
            )}
        </Card>
    )
}

export default UserCard;
