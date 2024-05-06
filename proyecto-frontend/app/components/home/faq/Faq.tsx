import './faq.css'

export const Faq = () => {
  return (
    <div className='containerAccordion'>
      <h1 className='faqTitulo'>Preguntas Frecuentes</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item accordionRespuesta">
          <h2 className="accordion-header ">
            <button className="accordion-button collapsed accordionPregunta" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              ¿Qué es Flixorama?
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <p>Flixorama es un servicio de streaming que funciona mediante suscripción y permite a sus usuarios ver series y películas en cualquier dispositivo conectado a internet.</p>
            </div>
          </div>
        </div>
        <div className="accordion-item accordionRespuesta">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed accordionPregunta" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              ¿En qué dispositivos funciona Flixorama?
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <div>
                <p className='respuestaTittle'>Flixorama está disponible en los siguientes dispositivos:</p>
                <div>
                  <p>TV</p>
                  <ul>
                    <li>Amazon Fire</li>
                    <li>Android TV</li>
                    <li>Apple TV</li>
                    <li>Chromecast</li>
                    <li>LG</li>
                    <li>Roku</li>
                    <li>Samsung</li>
                  </ul>
                </div>
                <div>
                  <p>Computadora</p>
                  <ul>
                    <li>Chrome OS</li>
                    <li>MacOS</li>
                    <li>Windows PC</li>
                  </ul>
                </div>
                <div>
                  <p>Consola de Videojuegos</p>
                  <ul>
                    <li>PS4</li>
                    <li>PS5</li>
                    <li>Xbox One</li>
                    <li>Xbox Series X|S</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item accordionRespuesta">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed accordionPregunta" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              ¿Qué incluye Flixorama?
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <div>
                <p className='respuestaTittle'>Beneficios de la suscripción a Flixorama:</p>
                <ul>
                  <li>Experiencia de entretenimiento exclusiva</li>
                  <li>Descargas ilimitadas hasta en diez dispositivos compatibles</li>
                  <li>Más de 300 títulos en 4K UHD y HDR.</li>
                  <li>Hasta cuatro pantallas a la vez: ¡disfrutan todos!</li>
                  <li>IMAX Enhanced: disponible en algunos títulos de Marvel y en todos los dispositivos compatibles</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item accordionRespuesta">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed accordionPregunta" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              ¿Cómo puedo pagar?
            </button>
          </h2>
          <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <p>Podés pagar con tarjeta de crédito, débito, Mercado Pago o también a través de terceros, como App Store de Apple, Mercado Libre y proveedores locales de TV, telefonía e internet.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}