import { Switch, Route } from "react-router-dom";
import React, {Fragment} from "react";
import Navbar from "./components/Navbar";
import Home from "./components/home/Home";
import Question1 from "./components/questions/Question1";
import Question2 from "./components/questions/Question2";
import Question3 from "./components/questions/Question3";
import Question4 from "./components/questions/Question4";



function App()  {

    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
      }
      
      const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
      }

    
    return (
        <Fragment>
            <Navbar />
            <Switch>
                <Route
                    exact path="/"
                    render={props =>
                      <Home {...props} />
                    }
                />
              

                <Route
                    path="/question1"
                    render={props =>
                      <Question1 {...props} />
                    }
                />
                <Route
                    path="/question2"
                    render={props =>
                      <Question2 {...props} />
                    }
                />
                 <Route
                    path="/question3"
                    render={props =>
                      <Question3 {...props} />
                    }
                />
                 <Route
                    path="/question4"
                    render={props =>
                      <Question4 {...props} />
                    }
                />
            </Switch>
            
        </Fragment>
    )
};

export default App;
