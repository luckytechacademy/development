
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {Welcome,Learning,SkillsKnowledge, Training,FreeDemo} from '../Componants/Aboutus/Welcome.jsx';
function AboutUs() {
    return (
        <>
          <Welcome/> 
           <Learning/>
           <SkillsKnowledge/> 
           < Training/>
           <FreeDemo/>
        </>
    )
}

export default AboutUs;