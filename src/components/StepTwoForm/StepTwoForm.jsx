import { FaCircle, FaHeart } from "react-icons/fa6";

export default function StepTwo({ formData, handleChange }) {
    const commonButtonClasses = "w-36 h-24 sm:w-40 sm:h-28 border rounded-3xl p-2 flex flex-col items-center justify-center shadow-md shadow-zinc-400 transition ease-in";

    return (
        <div>
            <h2 className="text-lg font-bold mb-2 uppercase tracking-wide sm:tracking-widest">Cake Details</h2>
            <hr className="border-black mb-4"/>

            {/* Shape of Cake */}
            <div className="mb-4">
                <label className="text-sm font-medium tracking-wide sm:tracking-widest">Shape of Cake</label>
                <div className="flex gap-4 mt-2">
                    <button onClick={() => handleChange({ target: { name: "shape", value: "Round" } })}
                        className={`${commonButtonClasses} ${formData.shape === "Round" ? "bg-gray-300" : "bg-white"}`}>
                        <span className="tracking-wide">Round</span>
                        <FaCircle className="text-[#554242] text-3xl mt-2" />
                    </button>
                    <button onClick={() => handleChange({ target: { name: "shape", value: "Heart" } })}
                        className={`${commonButtonClasses} ${formData.shape === "Heart" ? "bg-gray-300" : "bg-white"}`}>
                        <span className="tracking-wide">Heart</span>
                        <FaHeart className="text-[#554242] text-3xl mt-2" />
                    </button>
                </div>
            </div>

            {/* Size of Cake */}
            <div className="mb-4">
                <label className="text-sm font-medium tracking-wide sm:tracking-widest">Size of Cake</label>
                <div className="flex gap-4 mt-2">
                    <button onClick={() => handleChange({ target: { name: "size", value: "6-inch" } })}
                        className={`${commonButtonClasses} ${formData.size === "6-inch" ? "bg-gray-300" : "bg-white"}`}>
                        <span className="tracking-wide">6-inch</span>
                        <p className="mt-2 text-xs">serves 6-8 generously or 8-12 with regular portions</p>
                    </button>
                    <button onClick={() => handleChange({ target: { name: "size", value: "8-inch" } })}
                        className={`${commonButtonClasses} ${formData.size === "8-inch" ? "bg-gray-300" : "bg-white"}`}>
                        <span className="tracking-wide">8-inch</span>
                        <p className="mt-2 text-xs">serves 14-16 generously or 20-24 with regular portions</p>
                    </button>
                </div>
            </div>

            {/* Select Boxes */}
            {/* Flavor of Cake */}
            <div className="mt-4 flex items-center">
                <label className="text-sm font-medium w-1/2">Flavor of Cake</label>
                <select
                    name="flavorOfCake" value={formData.email} onChange={handleChange}
                    className="w-11/12 px-3 border rounded-full shadow-md shadow-zinc-400"
                >
                    <option value="Classic">Classic</option>
                    <option value="Fruit">Fruit</option>
                    <option value="Specialty">Specialty</option>
                </select>
            </div>

            {/* Filling */}
            <div className="mt-4 flex items-center">
                <label className="text-sm font-medium w-1/5">Filling</label>
                <select
                    name="flavorOfCake" value={formData.email} onChange={handleChange}
                    className="w-11/12 px-3 border rounded-full shadow-md shadow-zinc-400"
                >
                    <option value="Classic">Classic</option>
                    <option value="Fruit">Fruit</option>
                    <option value="Fruit">Cream & Fruit</option>
                    <option value="Specialty">Specialty</option>
                </select>
            </div>

            {/* Frosting */}
            <div className="mt-4 flex items-center">
                <label className="text-sm font-medium w-1/4">Frosting</label>
                <select
                    name="flavorOfCake" value={formData.email} onChange={handleChange}
                    className="w-11/12 px-3 border rounded-full shadow-md shadow-zinc-400"
                >
                    <option value="Classic">Classic</option>
                    <option value="Fruit">Fruit</option>
                    <option value="Specialty">Specialty</option>
                </select>
            </div>

            {/* Style of Cake */}
            <div className="mt-4">
                <label className="text-sm font-medium tracking-wide sm:tracking-widest">Style of Cake</label>
                <div className="flex gap-4 mt-2">
                    <button onClick={() => handleChange({ target: { name: "style", value: "Vintage" } })}
                        className={`${commonButtonClasses} ${formData.style === "Vintage" ? "bg-gray-300" : "bg-white"}`}>
                        <span className="tracking-wide">Vintage</span>
                    </button>
                    <button onClick={() => handleChange({ target: { name: "style", value: "Modern" } })}
                        className={`${commonButtonClasses} ${formData.style === "Modern" ? "bg-gray-300" : "bg-white"}`}>
                        <span className="tracking-wide">Modern</span>
                    </button>
                    <button onClick={() => handleChange({ target: { name: "style", value: "Custom" } })}
                        className={`${commonButtonClasses} ${formData.style === "Custom" ? "bg-gray-300" : "bg-white"}`}>
                        <span className="tracking-wide">Custom</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
