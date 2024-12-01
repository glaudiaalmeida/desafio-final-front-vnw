import S from "./donating.module.scss"
import book from "../../assets/livro-aberto.png"

export default function Donated() {
    return(
        <section className={S.mainDonating}>
            <section className={S.container}>
                <h2>Por favor, preencha o formulário com suas informações e as informações do Livro</h2>
                <form action="">
                    <div>
                        <img src={book} alt="Imagem de um livro aberto"/>
                        <h3>Informações do Livro</h3>
                    </div>
                    <input type="text" placeholder="Título" />
                    <input type="text" placeholder="Categoria" />
                    <input type="text" placeholder="Autor" />
                    <input type="text" placeholder="Link da Imagem" />
                    <input className={S.donate}type="submit" value="Doar" />
                </form>
            </section>
        </section>
        
    )

}