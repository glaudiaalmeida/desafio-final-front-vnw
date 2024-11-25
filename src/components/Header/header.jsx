import logo from "../../assets/logo.png"
import search from "../../assets/search.png"


export default function Header() {
    return(
        <header>
            <section>
                <img src={logo} alt="imagem de um livro" />
                <h1>Livros Vai na Web</h1>
            </section>
            <nav>
                <ul>
                    <li>Inicio</li>
                    <li>Livros Doados</li>
                    <li>Quero Doar</li>
                </ul>
            </nav>
            <div>
                <input type="text" />
                <img src={search} alt="caixa de pesquisa" />
            </div>
        </header>
    )
}