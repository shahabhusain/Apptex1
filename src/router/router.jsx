import React from "react"
import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Services from "../pages/Services"
import Portfolio from "../pages/Portfolio"
import Blog from "../pages/Blog"
import Contact from "../pages/Contact"
import OmniPage from "../pages/OmniPage"
import LocalPage from "../pages/LocalPage"
import MovlaPage from "../pages/MovlaPage"
import DevelopmenCenterPage from "../pages/DevelopmenCenterPage"
import WinnerPage from "../pages/WinnerPage"
import CheapsKatePage from "../pages/CheapsKatePage"
import Skiwit from "../pages/Skiwit"
import AskmidPage from "../pages/AskmidPage"

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
           <Route path="/services" element={<Services />} />
           <Route path="/portfolio" element={<Portfolio />} />
           <Route path="/blog" element={<Blog />} />
           <Route path="/contact" element={<Contact />} />
           <Route path="/omni" element={<OmniPage/> } />
           <Route path="/local" element={<LocalPage /> } />
           <Route path="/movla" element={<MovlaPage /> } />
           <Route path="/develop" element={<DevelopmenCenterPage /> } />
           <Route path="/winner" element={<WinnerPage /> } />
            <Route path="/cheap" element={<CheapsKatePage /> } />
            <Route path="/skiwit" element={<Skiwit /> } />
            <Route path="/askmid" element={<AskmidPage /> } />
        </>
    )
)