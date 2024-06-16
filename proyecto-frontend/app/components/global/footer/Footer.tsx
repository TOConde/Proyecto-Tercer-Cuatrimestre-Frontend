import './Footer.css'

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
      <div className='row conteinerSocials'>
        <img className='socialImg' src="./img/footer/logosRedSocial/youtube.png" alt="youtube" />
        <img className='socialImg' src="./img/footer/logosRedSocial/instagram.png" alt="instagram" />
        <img className='socialImg' src="./img/footer/logosRedSocial/xtwitter.png" alt="twitter" />
      </div>
      <div className='containerGithub'>
        <a href="https://github.com/TOConde/Proyecto-Tercer-Cuatrimestre-Frontend" target="_blank">
          <img className='githubImg' src="./img/footer/github.png" alt="github" />
        </a>
      </div>
    </footer>
  );
}