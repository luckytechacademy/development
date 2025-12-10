import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Slider from "../Componants/Slider/Slider.jsx";
import { Topcoursers, Containercard } from "../Componants/Topcourses/Topcoursers.jsx";
import { Ourteam, Facultycard } from "../Componants/Faclty/Ourteam.jsx";
import { Frequentlynumber } from '../Componants/Form/Frequentlynumber.jsx';
import { Whyluckytech, ClassRoom } from '../Componants/Whyluckytech/Whyluckytech.jsx';
function Home() {
    return (
        <>
            <Slider />
            <Topcoursers />
            <Containercard />
            <Frequentlynumber />
            <Ourteam />
            <Facultycard />
            <Whyluckytech />
            <ClassRoom />
        </>

    )
}

export default Home;