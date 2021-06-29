import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Questions from "./components/questions/Questions";



function App()  {

    
    return (
        <>
            <Navbar />
            <Switch>
                <Route
                    exact path="/"
                    render={props =>
                      <Home {...props} />
                    }
                />
              

                <Route
                    path="/questions"
                    render={props =>
                      <Questions {...props} />
                    }
                />
               
            </Switch>
            
        </>
    )
};

export default App;
