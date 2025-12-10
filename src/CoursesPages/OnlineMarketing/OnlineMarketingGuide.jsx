
import { useState } from "react";
import Basics from "../OnlineMarketing/Basics";
import Intermediate from "../OnlineMarketing/Intermediate";
import Advanced from "../OnlineMarketing/Advanced";
function OnlineMarketingGuide() {
    const [selectCatagory, setSelectCatagory] = useState("Basics");

    function handleClick(catagory) {
        setSelectCatagory(catagory);
        console.log(selectCatagory);
    }
    function renderingSection() {
        switch (selectCatagory) {
            case "Basics":
                return <Basics />;
            case "Intermediate":
                return <Intermediate />;
            case "Advanced":
                return <Advanced />;

            default:
                return <Basics />;
        }
    }

    return (
        <>
            <header className="max-w-3xl mx-auto text-center py-16 px-4 sm:px-6 lg:px-8">

                <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">Online Marketing — Basic to Advanced</h1>
                <p className="mt-3 text-slate-600 text-lg">A practical, project-driven path from marketing fundamentals to advanced growth systems.</p>
                <div className="position-sticky top-0 bg-white shadow-sm z-3">
                    <nav className="d-flex gap-4 small fw-semibold justify-content-center py-2">
                        <a href="#basics" className="text-decoration-none text-dark" onClick={() => handleClick("Basics")}>Basics</a>
                        <a href="#intermediate" className="text-decoration-none text-dark" onClick={() => handleClick("Intermediate")}>Intermediate</a>
                        <a href="#advanced" className="text-decoration-none text-dark" onClick={() => handleClick("Advanced")}>Advanced</a>
                    </nav>
                </div>
            </header>
            <div className="row">
                <div className="col">
                    {renderingSection()}
                </div>
            </div>


        </>
    )
}
export default OnlineMarketingGuide;