import { Switch, Route } from "react-router-dom";
import Cards from "./components/Cards/Cards";

import React, {Fragment} from "react";
// import Navbar from "./components/Navbar";
import Home from "./components/home/Home";
import Questions from "./components/questions/Questions";
import QuestionsFreelance from "./components/questions/QuestionsFreelance";



function App()  {

    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
      }
      
      const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
      }

    
    return (
      <Fragment>
      {/* <Navbar /> */}
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
           <Route
              path="/questions-freelancer"
              render={props =>
                <QuestionsFreelance {...props} />
              }

              
          />
          <Route
              path="/matches"
              render={props =>
                <Cards {...props} />
              }

              
          />

      </Switch>

  </Fragment>

    )
};


export default App;
