import React from "react";
import Card from "../components/main/Card";
import Styled from "styled-components";
import { getCardData } from "../lib/api";
import { withRouter } from "react-router-dom";

import NewCard from "../components/main/NewCard";

const MainWrap = Styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  row-gap: 25px;
`;

const Main = ({ year, month, match, history }) => {
  const [userData, setUserData] = React.useState(null);
  const [rawData, setRawData] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      const data = await getCardData();
      console.log(data);
      setRawData(data);
      data[year] && setUserData(data[year][month]);
    })();
  }, [year, month]);
  React.useEffect(() => {
    console.log(match);
  }, []);

  return (
    <MainWrap>
      {userData &&
        userData.map((data, index) => {
          return (
            <Card
              key={index}
              props={data}
              onClickFunc={() => history.push(`/diary/${data.id}`)}
            />
          );
        })}
      <NewCard
        year={year}
        month={month}
        rawData={rawData}
        setUserData={setUserData}
        id={userData ? userData.length + 1 : 1}
      />
    </MainWrap>
  );
};
export default withRouter(Main);
