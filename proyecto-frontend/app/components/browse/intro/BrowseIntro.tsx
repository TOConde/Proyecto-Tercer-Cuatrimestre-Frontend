import './BrowseIntro.css'

export const BrowseIntro = () => {
    return (
        <div className="container text-center containerBrowseIntro">
            <div className='containerBrowsePeliculaIntro'>
                <div className='containerBrowseIntroSinopsis'>
                    <p>The Godfather</p>
                    <p>Don Vito Corleone es el jefe de una familia de la mafia de Nueva York en los años 40. Cuando otro capo intenta asesinar a Corleone, empieza una cruenta lucha entre los distintos clanes.</p>
                </div>
                <div className='containerBrowseIntroImg'>
                    <img className='browseIntroImg' src="./img/browse/introMovies/theGodFather.jpg" alt="" />
                </div>
            </div>
        </div>
    );
}