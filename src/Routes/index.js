import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Layouts/Header/Header";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";
import Project from "../Pages/Projects/Project";

const Index = () => {
  return (
    <BrowserRouter>
      {/* declare static Components here  */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/abouts" element={<About />} />
        <Route path="/projects" element={<Project />} />

        <Route path="*" element={<Error />} />
      </Routes>
      {/* declare static Components here  */}
    </BrowserRouter>
  );
};

export default Index;
