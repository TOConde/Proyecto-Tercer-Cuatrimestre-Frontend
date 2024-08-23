import './Footer.css'
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer>
      <ul className='containerButton'>
        <a href="/browse">
          <button type="button" className="btn buttonFooter">AHORA EN FLIXORAMA</button>
        </a>
        <a href="/browse">
          <button type="button" className="btn buttonFooter">PELICULAS</button>
        </a>
        <a href="/browse">
          <button type="button" className="btn buttonFooter">SERIES</button>
        </a>
        <a href="">
          <button type="button" className="btn buttonFooter">NIÑOS Y FAMILIA</button>
        </a>
        <a href="">
          <button type="button" className="btn buttonFooter">AYUDA</button>
        </a>
      </ul>
      <div className='conteinerSocials'>
        <IoLogoYoutube className='socialImg'/>
        <FaInstagramSquare className='socialImg' />
        <FaSquareXTwitter className='socialImg'/>
      </div>
      <div className='containerGithub'>
        <a href="https://github.com/TOConde/Proyecto-Tercer-Cuatrimestre-Frontend" target="_blank">
          <FaGithub className='githubImg'/>
        </a>
      </div>
    </footer>
  );
}