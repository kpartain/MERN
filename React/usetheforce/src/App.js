import React, { useState } from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import axios from "axios";

import PeoplePage from "./components/PeoplePage";
import PlanetPage from "./components/PlanetPage";
import IndexPage from "./components/IndexPage";

function App() {
    const inline = {
        display: "flex",
        alignItems: "center",
        gap: "2vw",
    };
    const [getPlanets, setPlanets] = useState([]);
    const asyncFetchPlanets = async () => {
        const result = await axios("https://swapi.dev/api/planets");
        setPlanets(result.data.results);
    };

    return (
        <BrowserRouter>
            <div style={inline}>
                <p>Search for:</p>
                <select></select>
                <p>ID:</p>
                <input type="text" />
            </div>
            <p>
                <Link to="/">Home</Link>
                &nbsp;|&nbsp;
                <Link to="/planets">
                    Planets
                </Link>
                &nbsp;|&nbsp;
                <Link to="/people">
                    People
                </Link>
            </p>
            <Switch>
                <Route path="/people">
                    <PeoplePage />
                </Route>
                <Route path="/planets">
                    <PlanetPage />
                </Route>
                <Route exact path="/">
                    <IndexPage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
