import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Ourteam.css';
export function Ourteam() {

    return (
        <>
            <div className="container text-center">
                <div className="row align-items-start" >
                    <div className="col">
                        <h3>Our Faculty</h3>
                    </div>
                </div>
            </div>

        </>
    )
}

export function Facultycard() {

    const imagecard = [
        { id: 1, imagepath: "src/assets/images/team/Lucky.jpeg", name: "Lucky Rajput", position: "Software Consultant",education:"BCA . MCA" },
        { id: 2, imagepath: "src/assets/images/team/Ajay.jpeg", name: "Ajay Shakya", position: "Sr. Software Developer", },
        { id: 3, imagepath: "src/assets/images/team/Ramniwas.jpg", name: "Ramniwas Verma", position: " Software Developer", },
        { id: 4, imagepath: "src/assets/images/team/Anil.jpeg", name: "Anil Kumar", position: "Software Developer", },
        { id: 5, imagepath: "src/assets/images/gallery/23dfba10-5391-4e31-a0f0-96a0e3992e18.jpg", name: "Devendra Singh", position: "DSA Expert", },
        { id: 6, imagepath: "src/assets/images/team/CV.jpeg", name: "C.V. Singh", position: "English Communication trainer", },
    ]
    return (
        <>
            <div className="container text-center container_faculty">
                <div className="row align-items-center">
                    {imagecard.map((item) => (
                        <div className="col" key={item.id}>
                            <div className="circle-card">
                                <img src={item.imagepath} alt={item.name} />
                                <div className="circle-info">
                                    <div className="circle-title">{item.name}</div>
                                    <div className="circle-subtitle">{item.position}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

