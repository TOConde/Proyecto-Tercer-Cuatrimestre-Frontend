import './HomeSubscriptions.css';

export const HomeSuscriptions = () => {
    return (
        <div className="container containerSubscription text-center">
            <div className="card-group">
                <div className="card cardContainer">
                    <div className="card-body">
                        <h5 className="card-title">Free User</h5>
                        <p className="card-text">Solo un dispositivo a la vez.</p>
                        <p className="card-text">Resolucion Full HD.</p>
                        <p className="card-text">Acceso limitado en peliculas y series.</p>
                        <p className="card-text">GRATIS</p>
                    </div>
                </div>
                <div className="card cardContainer">
                    <div className="card-body">
                        <h5 className="card-title">Premium</h5>
                        <p className="card-text">Hasta 4 dispositivos a la vez.</p>
                        <p className="card-text">Resolucion 4k.</p>
                        <p className="card-text">Acceso ilimitado.</p>
                        <p className="card-text">50 descargas para disfrutar offline.</p>
                        <p className="card-text">4.999/Mensuales</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
       