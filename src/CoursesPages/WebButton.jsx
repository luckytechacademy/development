import { useState } from "react";
import FoundationSection from "./WebDevelopment/FoundationSection";
import IntermediateSection from "./WebDevelopment/IntermediateSection";
import AdvancedSection from "./WebDevelopment/AdvancedSection";
import ArchitectureSection from "./WebDevelopment/ArchitectureSection";

function WebButton() {
    const [selectCatagory, setSelectCatagory] = useState("FoundationSection");

    function handleCatagoryChange(catagory) {
        setSelectCatagory(catagory);
    }
    function rendersection() {

        switch (selectCatagory) {
            case "FoundationSection":
                return <FoundationSection />;
            case "IntermediateSection":
                return <IntermediateSection />;
            case "AdvancedSection":
                return <AdvancedSection />;
            case "ArchitectureSection":
                return <ArchitectureSection />;
            default:
                return <FoundationSection />;
        }
    }
    return (
        <>
            <div className="container-fluid text-center">
                <div className="row mb-4">
                    <div className="col d-flex justify-content-center gap-3 flex-wrap">
                        <button className="btn btn-primary" onClick={() => handleCatagoryChange("FoundationSection")}>FoundationSection</button>
                        <button className="btn btn-primary" onClick={() => handleCatagoryChange("IntermediateSection")}>IntermediateSection </button>
                        <button className="btn btn-primary" onClick={() => handleCatagoryChange("AdvancedSection")}>AdvancedSection</button>
                        <button className="btn btn-primary" onClick={() => handleCatagoryChange("ArchitectureSection")}>ArchitectureSection </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {rendersection()}
                    </div>
                </div>
            </div>
        </>
    )
}
export default WebButton;