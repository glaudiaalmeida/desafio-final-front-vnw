import S from "./queroDoar.module.scss"
import livro from "../../assets/livro-aberto.png"

export default function Doados() {
    return(
        <section className={S.principal}>
            <section className={S.container}>
                <h2>Por favor, preencha o formulário com suas informações e as informações do Livro</h2>
                <form action="">
                    <div>
                        <img src={livro} alt="Imagem de um livro aberto"/>
                        <h3>Informações do Livro</h3>
                    </div>
                    <input type="text" placeholder="Título" />
                    <input type="text" placeholder="Categoria" />
                    <input type="text" placeholder="Autor" />
                    <input type="text" placeholder="Link da Imagem" />
                </form>
            </section>
        </section>
        
    )

}