import './App.css'
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Tasks from "./Components/Tasks/Tasks";
import {Switch, Route, Redirect} from 'react-router-dom'


function App() {
    return (
        <div className="App">
            <div className="container">
                <Header/>
                <div className="row p-0 m-0 container">
                    <div className="col-12 col-sm-4 row__block-left">
                        <Nav/>
                    </div>
                    <div className="col-12 col-sm-8 row__block-right">
                        <Switch>
                            <Route path="/tasks/:folderId?" component={Tasks}/>
                            <Route exact path="/">
                                <Redirect to="/tasks/1"/>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
