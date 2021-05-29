import Main from "./pages/Main";
import Diary from "./pages/Diary";
import MainHeader from "./components/common/MainHeader";
import Calendar from "./components/common/Calendar";
import Title from "./components/common/Title";
import Footer from "./components/common/Footer";
import React, { useState } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

const getCurrDate = () => {
  const now = new Date();
  const currYear = now.getFullYear();
  const currMonth = now.getMonth();
  return { year: currYear, month: currMonth };
};
function App() {
  const [year, setYear] = useState(getCurrDate().year);
  const [month, setMonth] = useState(getCurrDate().month);
  return (
    <div className="App">
      <BrowserRouter>
        <MainHeader />
        <Calendar
          currYear={year}
          setCurrYear={setYear}
          currMonth={month}
          setCurrMonth={setMonth}
        />
        <Title />
        <Switch>
          <Route
            exact
            path="/"
            component={() => <Main year={year} month={month} />}
          />
          <Route
            exact
            path="/diary/:id"
            component={() => <Diary year={year} month={month} />}
          />
          <Route
            exact
            path="/diary/edit/:id"
            component={() => <Diary year={year} month={month} />}
          />
          <Route component={() => <div>Not Found</div>} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
