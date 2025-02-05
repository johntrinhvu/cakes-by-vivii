import { FaCircle, FaHeart } from "react-icons/fa6";

export default function StepTwo({ formData, handleChange }) {
    return (
        <div>
            <h2 className="text-lg font-bold mb-2 uppercase tracking-wide">Cake Details</h2>
            <hr className="border-black mb-4"/>

            <div className="mb-4">
                <label className="text-sm font-medium">Shape of Cake</label>
                <div className="flex gap-4 mt-2">
                    <button onClick={() => handleChange({ target: { name: "shape", value: "Round" } })}
                        className={`p-4 border rounded-lg flex flex-col items-center shadow-md ${formData.shape === "Round" ? "bg-gray-300" : ""}`}>
                        <FaCircle className="text-black text-2xl" />
                        <span>Round</span>
                    </button>
                    <button onClick={() => handleChange({ target: { name: "shape", value: "Heart" } })}
                        className={`p-4 border rounded-lg flex flex-col items-center shadow-md ${formData.shape === "Heart" ? "bg-gray-300" : ""}`}>
                        <FaHeart className="text-black text-2xl" />
                        <span>Heart</span>
                    </button>
                </div>
            </div>

            <div className="mb-4">
                <label className="text-sm font-medium">Size of Cake</label>
                <select name="size" value={formData.size} onChange={handleChange}
                    className="w-full border px-3 py-2 rounded-md mt-1">
                    <option value="">Select Size</option>
                    <option value="6-inch">6-inch</option>
                    <option value="8-inch">8-inch</option>
                </select>
            </div>
        </div>
    );
}
