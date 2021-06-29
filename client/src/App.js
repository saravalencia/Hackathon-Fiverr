import { Switch, Route } from "react-router-dom";
import React, {Fragment} from "react";
import Navbar from "./components/Navbar";
<<<<<<< HEAD
import Home from "./components/Home";
import Questions from "./components/questions/Questions";
=======
import Home from "./components/home/Home";
import Question1 from "./components/questions/Question1";
import Question2 from "./components/questions/Question2";
import Question3 from "./components/questions/Question3";
import Question4 from "./components/questions/Question4";
>>>>>>> main



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
                    path="/questions"
                    render={props =>
                      <Questions {...props} />
                    }
                />
               
            </Switch>
            
        </Fragment>
    )
};

export default App;
