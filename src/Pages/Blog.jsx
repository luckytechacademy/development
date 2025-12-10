
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Blog1,FullStack ,PythonFullStack,CareerullStack,BenefitJava,DifficulttJava} from '../Componants/Blog/Blog1';

 function Blog(){

    return(
        <>
         <Blog1/>
         <FullStack/>
         <PythonFullStack/>
         <CareerullStack/>
         <BenefitJava/>
         <DifficulttJava/>
        </>
    )
}

export default Blog;