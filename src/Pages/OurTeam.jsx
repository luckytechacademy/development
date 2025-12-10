
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import WelcomeOurTeam from '../Componants/ourteam/WelcomeOurTeam';
import { Facultycard, Ourteam } from '../Componants/Faclty/Ourteam';
 
function OurTeam(){

    return(
        <>
        <WelcomeOurTeam/>
        <Ourteam/>
        <Facultycard/>
        </>
    )
}

export default OurTeam;