import React from 'react';
import {
    BrowserRouter as Router, NavLink, Route, Switch
} from "react-router-dom";
import About from '../About/About';
import Blog from '../Blog/Blog';
import Home from '../Home/Home';
import NotFound from '../NotFound/NotFound';
import "./Body.css";

const Body = (props) => {
    const {searchText} = props;
    return (
       <div>
            <div className="container mx-auto grid grid-cols-12 gap-4">
                {/* Menu */}
                <Router>
                    <div className="col-span-3">
                        <div style={{height:"85vh"}} className="bg-gray-100 py-4  overflow-y-scroll scrollbar-container">
                            <ul id="menu" className="text-center">
                                <NavLink to="/home"><li className="bg-gray-300 border-t border-b border-gray-400 py-2 font-bold">Home</li></NavLink>
                                <NavLink to="/about"><li className="bg-gray-300 border-b border-gray-400 py-2 font-bold">About</li></NavLink>
                                <NavLink to="/blog"><li className="bg-gray-300 border-b border-gray-400 py-2 font-bold">Blog</li></NavLink>
                                <li className="bg-gray-300 border-b border-gray-400 py-2 font-bold">Shop</li>
                                <li className="bg-gray-300 border-b border-gray-400 py-2 font-bold">Products</li>
                                <li className="bg-gray-300 border-b border-gray-400 py-2 font-bold">Order</li>
                            
                                <li className="bg-gray-300 border-b border-gray-400 py-2 font-bold">Review</li>
                                
                            </ul>
                        </div>
                    </div>
                    <div style={{height: '85vh'}} className="col-span-9 overflow-y-scroll  scrollbar-container">
                        <Switch>
                            <Route path="/home">
                                <Home searchText={searchText}></Home>
                            </Route>
                            <Route path="/about">
                                <About></About>
                            </Route>
                            <Route path="/blog">
                                <Blog></Blog>
                            </Route>
                            <Route exact path="/">
                                <Home searchText={searchText}></Home>
                            </Route>
                            <Route path="*">
                                <NotFound></NotFound>
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </div>
       
       </div>
    );
};

export default Body;