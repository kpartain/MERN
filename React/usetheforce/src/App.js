import React, { useState } from "react";
import { BrowserRouter, Link, Switch, Route, Redirect } from "react-router-dom";

import PeoplePage from "./components/PeoplePage";
import PlanetPage from "./components/PlanetPage";
import IndexPage from "./components/IndexPage";
import ShowPage from "./components/ShowPage";

function App() {
    const inline = {
        display: "flex",
        alignItems: "center",
        gap: "2vw",
    };

    const [partOne, setPartOne] = useState("");
    const updateURLOne = (e) => {
        e.preventDefault();
        setPartOne(e.target.value);
    };

    const [partTwo, setPartTwo] = useState("");
    const updateURLTwo = (e) => {
        e.preventDefault();
        setPartTwo(e.target.value);
    };

    const [shouldRedirect, setShouldRedirect] = useState(false);
    const renderSearch = () => {
        if (shouldRedirect === true) {
            var newURL = "/" + partOne + "/" + partTwo;
            console.log(newURL)
            return <Redirect to={newURL} />;
        }
    };
    const redirectWithParams = (e) => {
        e.preventDefault();
        setShouldRedirect(true);
    };

    return (
        <BrowserRouter>
            <div style={inline}>
                <label htmlFor="partOne">Search for:</label>
                <select name="partOne" onChange={updateURLOne}>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>

                <label htmlFor="partTwo">ID:</label>
                <input
                    type="text"
                    name="partTwo"
                    placeholder="ID of searched item"
                    onChange={updateURLTwo}
                />

                <button type="submit" onClick={redirectWithParams}>
                    search
                </button>
            </div>
            <p>
                <Link to="/">Home</Link>
                &nbsp;|&nbsp;
                <Link to="/planets">Planets</Link>
                &nbsp;|&nbsp;
                <Link to="/people">People</Link>
                {renderSearch()}
            </p>
            <Switch>
                <Route path="/:peopleOrPlanet/:id">
                    <ShowPage peopleOrPlanet={partOne} id={partTwo} />
                </Route>
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
