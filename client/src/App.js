import { Switch, Route } from "react-router-dom";
import Navbar from "./components/organisms/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Footer from "./components/organisms/Footer";
import Bar from "./components/molecules/Bar"; 
import { conditionalExpression } from "../node_modules/@babel/types";
import Swipe from  "./utils/Swipe"; 

const App = () => {



    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
      }
      
      const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
      }
      

    return (
        <>
            <header>
                <h1>Starter template</h1>
            </header>
            <Navbar />
            <Switch>
                <Route
                    exact path="/"
                    render={props =>
                      <Home {...props} />
                      
                    }
                />
                <Route
                    path="/about"
                    render={props =>
                      <About {...props} />
                    }
                />
                <Route
                    path="/contact"
                    render={props =>
                      <Contact {...props} />
                     
                    }
                  
                />
                 <div>
                
                     </div>
            </Switch>
            <Footer />
                
              
        </>
    )
};

export default App;
