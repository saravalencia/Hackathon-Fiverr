import { Switch, Route } from "react-router-dom";


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

        </>
    )
};

export default App;
