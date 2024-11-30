import S from "./footer.module.scss"
import facebook from "../../assets/facebook.png"
import twitte from "../../assets/twitte.png"
import youtube from "../../assets/youtube.png"
import linkedin from "../../assets/linkedin.png"
import instagram from "../../assets/instagram.png"


export default function Footer() {
    return(
        <footer>
            <section className={S.contactIcons}>
                <h3>4002-8922</h3>
                <nav>
                    <a href="https://www.facebook.com/"><img src={facebook} alt="Logo da rede social Facebook"/></a>
                    <a href="https://x.com/"><img src={twitte} alt="Logo da rede social x"/></a>
                    <a href="https://www.youtube.com/"><img src={youtube} alt="Logo da rede social Youtube"/></a>
                    <a href="https://www.linkedin.com/"><img src={linkedin} alt="Logo da rede social Linkedin"/></a>
                    <a href="https://www.instagram.com/"><img src={instagram} alt="Logo da rede social Instagram"/></a>
                </nav>
            </section>
            <section className={S.direitosAutorais}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
            </section>
        </footer>
    )
}