import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";

function App() {
    return (
        <Switch>
            <Route path="/login">
                <LoginFormPage />
            </Route>
            <Route path="/signup">
                <SignupFormPage />
            </Route>
        </Switch>
    );
}

export default App;
