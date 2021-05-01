import React,{useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe("pk_test_51HY82EC5Jq1coe8rmuWGVxW8sQbi6s8HvvvnouH7aVdaFriC7pYM8IJgR8Y9L4Hqnltu6oUZRCGeqd8UN5OoVGUb00bwNYSG1W");


function App() {
    const [{ }, dispatch] = useStateValue();
    useEffect(() => {
        auth.onAuthStateChanged(authUser => {
            console.log("USER >>>", authUser);
            if (authUser) {
                // User logged in at the moment
                dispatch({
                    type: "SET_USER",
                    user: authUser,
                });
            } else {
                // User not logged in at the moment
                dispatch({
                    type: "SET_USER",
                    user: null,
                });
            }
        })
        return () => {
            // cleanup work
        }
    }, [])
    return (
      <Router>
        <div className="app">
            
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                    
                <Route path="/checkout">
                    <Header />
                    <Checkout />
                </Route>
                    
                <Route path="/payment">
                    <Header />
                    <Elements stripe={promise}>
                        <Payment />
                    </Elements>
                </Route>
                        
                <Route path="/">
                    <Header />
                    <Home />
                </Route>
            </Switch>  
        </div> 
      </Router>
  );
}

export default App;
