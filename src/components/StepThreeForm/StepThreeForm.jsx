export default function StepThree({ formData, handleChange }) {
    const decorations = ["Bows", "Butterflies", "Pearls", "Cake Drip"];

    return (
        <div>
            <h2 className="text-lg font-bold mb-2 uppercase tracking-wide">Decorations & Add-ons</h2>
            <hr className="border-black mb-4"/>

            <p className="text-sm">Check all that you would like:</p>

            <div className="mt-2">
                {decorations.map((item, index) => (
                    <label key={index} className="flex items-center space-x-2 mt-2">
                        <input 
                            type="checkbox" 
                            name="decorations" 
                            value={item} 
                            checked={formData.decorations.includes(item)} 
                            onChange={handleChange}
                            className="h-4 w-4"
                        />
                        <span>{item}</span>
                    </label>
                ))}
            </div>
        </div>
    );
}
