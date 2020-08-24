import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";

const Landing = () => {
  return <h2>landing</h2>;
};

const Dashboard = () => {
  return <h2>Dashboard</h2>;
};

const SurveyNew = () => {
  return <h2>New survey</h2>;
};

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route exact path="/surveys/new" component={SurveyNew} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
