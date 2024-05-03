import './Footer.css'

export const Footer = () => {
  return (
      <footer>
        <div className='row conteinerSocials'>
          <div className='col'>
            <img className='socialImg' src="./img/footer/logosRedSocial/youtube.png" alt="youtube" />
            youtube
          </div>
          <div className='col'>
            <img className='socialImg' src="./img/footer/logosRedSocial/instagram.png" alt="instagram" />
            instagram
          </div>
          <div className='col'>
            <img className='socialImg' src="./img/footer/logosRedSocial/xtwitter.png" alt="twitter" />
            twitter
          </div>
        </div>
        <div className='containerGithub'>
          <img className='githubImg' src="./img/footer/github.png" alt="github" />
          github(al repo)
        </div>
      </footer>
  );
}