import './HomeAbout.css';
import { HomeAboutText } from './HomeAboutText';
import { HomeAboutImg } from './HomeAboutImg';

export const HomeAbout = () => {
    return (
        <div className="container text-center containerAbout">
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <HomeAboutText />
                    </div>
                    <div className="col">
                        <HomeAboutImg />
                    </div>
                </div>
            </div>
        </div>
    );
}