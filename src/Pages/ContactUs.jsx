
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Componants from '../Componants/ContactUs/Componants';
import ContactForm from '../Componants/ContactUs/ContactForm';
import MapComponent from '../Componants/ContactUs/MapComponent';

function ContactUs() {

    return (
        <>
            <Componants />
            <ContactForm />
            <MapComponent />
        </>
    )
}

export default ContactUs;