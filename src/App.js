import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import News from "./pages/News";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/a-propos" exact component={About} />
        <Route path="/news" exact component={News} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
