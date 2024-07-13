import React, {useContext} from "react";
import {UserContext} from "../context/UserContext";
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/login/Login";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Article from "../pages/Article";
import FormArticle from "../pages/FormArticle";
import Signup from "../pages/signup/Signup";

export default function NavRoutes() {
    const {user} = useContext(UserContext);
    return (
        <Routes>
            <Route path="/" element={user ? <Home/> : <Login />}/>
            <Route path="/about" element={user ?<About /> : <Login />}/>
            <Route path="/contact" element={user ?<Contact />  : <Login />}/>
            <Route path="/articles/:urlId" element={user ?<Article/> : <Login />}/>
            <Route path="/edit/:urlId" element={user ?<FormArticle /> : <Login />}/>
            <Route path="/new" element={user ?<FormArticle /> : <Login />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<Signup /> }/>
            <Route path="/*" element={<Navigate to="/"/> }/>
        </Routes>
    );
}