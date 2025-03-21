import {useEffect, useState} from 'react'
import './App.css'
import NavBar from "./Componets/NavBar/NavBar.jsx";
import Breeds from "./Componets/Breeds/Breeds.jsx";
import ListCats from "./Componets/ListCats/ListCats.jsx";

function App() {


    return (
        <div className="min-h-screen w-full max-w-screen-lg mx-auto">
            <NavBar/>
            <Breeds/>
            <ListCats/>

        </div>
    )
}

export default App
