import './LandingPage.css'
import Lottie from 'react-lottie'
import gameboy from '../Lotties/gameboy.json';

const lottieOptions = {
    animationData: gameboy
}

const LandingPage = () => {
    return <div className="hero">
            <div className="hero-up">
                <Lottie options={lottieOptions} width={500}></Lottie>
            </div>
            <div className="hero-down">
                <h1>A good place to record you progression!</h1>
                <h2>GameLog offers you bunch of tools to record your progression and track the games you have played.</h2>
                <h3>You can register right now and start using it for free.</h3>
            </div>
        </div>
}

export default LandingPage