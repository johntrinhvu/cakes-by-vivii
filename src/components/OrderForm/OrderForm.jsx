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
        <div className="max-w-lg mx-auto mb-10 contact-bg p-6 shadow-md shadow-zinc-400 rounded-lg mt-10">
            {step === 1 && <StepOneForm formData={formData} handleChange={handleChange} />}
            {step === 2 && <StepTwoForm formData={formData} handleChange={handleChange} />}
            {step === 3 && <StepThreeForm formData={formData} handleChange={handleChange} />}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-6">
                {step > 1 && (
                    <button onClick={prevStep} className="bg-[#664382] text-white px-6 py-2 rounded-lg shadow-md">
                        Back
                    </button>
                )}
                {step < 3 ? (
                    <button onClick={nextStep} className="bg-[#664382] text-white px-6 py-2 rounded-lg shadow-md">
                        Next
                    </button>
                ) : (
                    <button onClick={() => alert("Order Submitted!")} className="bg-green-600 text-white px-6 py-2 rounded-lg shadow-md">
                        Submit
                    </button>
                )}
            </div>
        </div>
    );
}
