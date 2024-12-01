

import logo from "../../assets/logo.png"
import search from "../../assets/search.png"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import S from "../Header/header.module.scss"
import Start from "../../Pages/Start/start"
import Donated from "../../Pages/Donated/donated"
import Donating from "../../Pages/Donating/donating"


export default function header() {
    return(
        <BrowserRouter>
            <header>
                <section className={S.boxLogo}>
                    <img src={logo} alt="imagem de um livro aberto" />
                    <h1>Livros Vai na Web</h1>
                </section>
                <nav className={S.boxMenu}>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/donate">Livros Doados</Link></li>
                        <li><Link to="/donating">Quero Doar</Link></li>
                    </ul>
                </nav>
                <div className={S.boxInput}>
                    <input type="text" placeholder="O que você procura?" />
                    <img src={search} alt="caixa de pesquisa" />
                </div>
            </header>
            <Routes>
                <Route path="/" element={<Start/>}/>
                <Route path="/donated" element={<Donated/>}/>
                <Route path="/donating" element={<Donating/>}/>
            </Routes>
        </BrowserRouter>
    )
}