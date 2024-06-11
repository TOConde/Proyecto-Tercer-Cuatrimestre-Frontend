import './ListaPelis.css'

export const ListaPelis = () => {
  return (
    <div className="containerListaRecomen">
      <div>
        <p>Lista de Recomendación</p>
      </div>
      <div className="row">
        <div className="col">
          <img className='imgMovie' src="/img/browse/movies/bandOfBrother.webp" alt="" />
        </div>
        <div className="col">
          <img className='imgMovie' src="/img/browse/movies/bladeRunner2049.webp" alt="" />
        </div>
        <div className="col">
          <img className='imgMovie' src="/img/browse/movies/johnWick2.webp" alt="" />
        </div>
        <div className="col">
          <img className='imgMovie' src="/img/browse/movies/pulFiction.webp" alt="" />
        </div>
        <div className="col">
          <img className='imgMovie' src="/img/browse/movies/theTrumanShow.webp" alt="" />
        </div>
      </div>
    </div>
  );
}