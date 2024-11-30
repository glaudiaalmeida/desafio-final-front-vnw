import S from "./inicio.module.scss"
import community from "../../assets/community.png"
import reading from "../../assets/reading.png"
import transform from "../../assets/transform.png"
import balance from "../../assets/balance.png"

export default function Inicio() {
    return(
        <section>
            <section className={S.banner}>
                <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
            </section>
            <section className={S.devoDoar}>
                <div>
                    <h2>Por que devo doar?</h2>
                </div>
                <section className={S.boxCard}>
                    <article>
                        <img src={community} alt="Imagem representado uma comunidade."/>
                        <p>Oferece Livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
                    </article>
                    <article>
                        <img src={reading} alt="Imagem de um bonequinho lendo um livro."/>
                        <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                    </article>
                    <article>
                        <img src={transform} alt="Imagem representando várias pessoas fortalecidas pela leitura."/>
                        <p>Fornece conhecimento e inspiração, permitindo que indíviduos transformem suas vidas.</p>
                    </article>
                    <article>
                        <img src={balance} alt="Imagem de uma balança simbolo do direito."/>
                        <p>Garante que todos, independente de sua condição, tenham oportunidades de aprendizado.</p>
                    </article>
                </section>
            </section>
        </section>
    )

}