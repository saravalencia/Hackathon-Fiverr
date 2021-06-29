import { Switch, Route } from "react-router-dom";
import React, {Fragment} from "react";
// import Navbar from "./components/Navbar";
import Home from "./components/home/Home";
import Questions from "./components/questions/Questions";
<<<<<<< HEAD
import QuestionTest from "./components/questions/QuestionTest";
=======
>>>>>>> 2e564575c1640650545986141c07a45367bc5729
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
<<<<<<< HEAD
                
=======
>>>>>>> 2e564575c1640650545986141c07a45367bc5729
                 <Route
                    path="/questions-freelancer"
                    render={props =>
                      <QuestionsFreelance {...props} />
                    }
                />
<<<<<<< HEAD
                <Route
                    path="/questions-freelancer"
                    render={props =>
                      <QuestionsTest />
                    }
                />
=======
>>>>>>> 2e564575c1640650545986141c07a45367bc5729
               
            </Switch>
            
        </Fragment>
    )
};


export default App;
