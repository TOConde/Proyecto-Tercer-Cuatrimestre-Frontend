import './HomeSubscriptions.css';

export const HomeSuscriptions = () => {
    return (
        <div className="container text-center containerSubs">
            <div className="container text-center containerCard">
                <div className="row">
                    <div className="col">
                        <div className="card" style={{width: "18rem"}}>
                            <div className="card-body cardSubs">
                                <h5 className="card-title">Basico con anuncios</h5>
                                <p className="card-text">Solo un dispositivo a la vez.</p>
                                <p className="card-text">Resolucion Full HD.</p>
                                <p className="card-text">Acceso limitado en peliculas y series.</p>
                                <p className="card-text">GRATIS</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" style={{width: "18rem"}}>
                            <div className="card-body cardSubs">
                                <h5 className="card-title">Premium</h5>
                                <p className="card-text">Hasta 4 dispositivos a la vez.</p>
                                <p className="card-text">Resolucion 4k.</p>
                                <p className="card-text">Acceso ilimitado.</p>
                                <p className="card-text">50 descargas para disfrutar offline.</p>
                                <p className="card-text">4.999/mes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};