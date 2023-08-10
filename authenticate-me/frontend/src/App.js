import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";

function App() {
    return (
        <>
            <Navigation />
                <Switch>
                    <Route path="/signup">
                        <SignupFormPage />
                    </Route>
                </Switch>
        </>
    );
}

export default App;
