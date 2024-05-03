import './Footer.css'

export const Footer = () => {
  return (
      <footer>
        <ul className='containerButton'>
          <button type="button" className="btn buttonFooter">AHORA EN FLIXORAMA</button>
          <button type="button" className="btn buttonFooter">PELICULAS</button>
          <button type="button" className="btn buttonFooter">SERIES</button>
          <button type="button" className="btn buttonFooter">EPISODIOS GRATIS</button>
          <button type="button" className="btn buttonFooter">NIÑOS Y FAMILIA</button>
          <button type="button" className="btn buttonFooter">AYUDA</button>
        </ul>
        <div className='row conteinerSocials'>
            <img className='socialImg' src="./img/footer/logosRedSocial/youtube.png" alt="youtube" />
            <img className='socialImg' src="./img/footer/logosRedSocial/instagram.png" alt="instagram" />  
            <img className='socialImg' src="./img/footer/logosRedSocial/xtwitter.png" alt="twitter" />
        </div>
        <div className='containerGithub'>
          <img className='githubImg' src="./img/footer/github.png" alt="github" />
        </div>
      </footer>
  );
}