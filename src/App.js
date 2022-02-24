import Owner from "./layouts/Owner";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/vacunacion" component={Owner} />
        <Redirect from="/" to="/vacunacion/solicitantes" />
      </Switch>
    </Router>
  );
};

export default App;
