import { FaFacebook } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { IoLogoWhatsapp } from "react-icons/io"
import '../styles/App.css'

function Footer() {
    return (
        <>
        <footer id="footer">
            <nav className="nav-footer">
                <div className="nav-grid">
            <ul>
                <h2>MENU</h2>
                <li><a href="">Legalidade</a></li>
                <li><a href="">Documentação</a></li>
                <li><a href="">FAQ</a></li>
            </ul>
            <ul>
                <h2>CONTATO</h2>
                <li><FaFacebook /><a href="">Facebook</a></li>
                <li><MdEmail /><a href="">E-mail</a></li>
                <li><IoLogoWhatsapp /><a href="">Whatsapp</a></li>
                <li id="footer-nome">©IsabellaSGoncalves</li>
            </ul>
            </div>
            </nav>                
        </footer>
        </>
    )

}
export default Footer
