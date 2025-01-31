import { useState } from "react";
import "./MultiStepForm.css";

export default function MultiStepForm() {
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
        decorations: ""
    });

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value });
    };

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    // submission
    const handleSubmit = (event) => {
        // prevent render
        event.preventDefault();
        console.log("test submit: ", formData);
        alert("Order submitted");
    };

    return (
        <div className="max-w-lg mx-auto contact-bg p-6 shadow-md shadow-zinc-400 rounded-lg mt-10">


        </div>
    );
}