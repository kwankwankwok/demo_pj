import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { NavBar } from '../components'
import { HorsesList, HorsesInsert, HorsesUpdate, HomePage } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route 
                    path="/"
                    exact
                    element={<HomePage/>}
                />
                <Route 
                    path="/horses/list"
                    exact
                    element={<HorsesList/>}
                />
                <Route path="/horses/create"
                    exact
                    element={<HorsesInsert/>}
                />
                <Route
                    path="/horses/update/:id"
                    exact
                    element={<HorsesUpdate/>}
                />
            </Routes>
        </Router>
    )
}

export default App