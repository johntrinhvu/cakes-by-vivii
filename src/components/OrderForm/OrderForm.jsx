import { useState } from "react";
import StepOneForm from "../StepOneForm/StepOneForm";
import StepTwoForm from "../StepTwoForm/StepTwoForm";
import StepThreeForm from "../StepThreeForm/StepThreeForm";
import "./OrderForm.css";

export default function OrderForm() {
    // tracker
    const [step, setStep] = useState(1);

    // form data
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        shapeOfCake: "",
        sizeOfCake: "",
        flavorOfCake: "",
        filling: "",
        frosting: "",
        styleOfCake: "",
        decorations: []
    });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        if (type === 'checkbox') {
            setFormData(prev => ({
                ...prev,
                decorations: checked
                ? [...prev.decorations, value]
                : prev.decorations.filter(item => item !== value)
            }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    return (
        <div className="ml-4 mr-4 mb-10 contact-bg pt-10 pl-10 pr-10 pb-6 sm:pt-16 sm:pl-16 sm:pr-16 sm:pb-10 sm:mx-auto shadow-md shadow-zinc-400 rounded-3xl mt-10">
            {step === 1 && <StepOneForm formData={formData} handleChange={handleChange} />}
            {step === 2 && <StepTwoForm formData={formData} handleChange={handleChange} />}
            {step === 3 && <StepThreeForm formData={formData} handleChange={handleChange} />}

            {/* Navigation Buttons */}
            <div className={`flex mt-6 ${step > 1 ? 'justify-between' : 'justify-end'}`}>
                {step > 1 && (
                    <button onClick={prevStep} className="bg-[#664382] text-white px-10 py-2 rounded-full shadow-md shadow-zinc-400 transition ease-in-out hover:bg-[#554242] hover:text-[#EAD7D7]">
                        Back
                    </button>
                )}
                {step < 3 ? (
                    <button onClick={nextStep} className="bg-[#664382] text-white px-10 py-2 rounded-full shadow-md shadow-zinc-400 transition ease-in-out hover:bg-[#554242] hover:text-[#EAD7D7]">
                        Next
                    </button>
                ) : (
                    <button onClick={() => alert("Order Submitted!")} className="bg-[#664382] text-white px-10 py-2 rounded-full shadow-md shadow-zinc-400 transition ease-in-out hover:bg-[#554242] hover:text-[#EAD7D7]">
                        Submit
                    </button>
                )}
            </div>
        </div>
    );
}
