export default function StepOne({ formData, handleChange }) {
    return (
        <div>
            <h2 className="text-lg font-bold mb-2 uppercase tracking-wide">Personal Information</h2>
            <hr className="border-black mb-4"/>

            <div className="flex gap-4">
                <div className="w-1/2">
                    <label className="text-sm font-medium">First Name</label>
                    <input 
                        type="text" name="firstName" value={formData.firstName} onChange={handleChange}
                        className="w-full border px-3 py-2 rounded-md mt-1"
                    />
                </div>
                <div className="w-1/2">
                    <label className="text-sm font-medium">Last Name</label>
                    <input 
                        type="text" name="lastName" value={formData.lastName} onChange={handleChange}
                        className="w-full border px-3 py-2 rounded-md mt-1"
                    />
                </div>
            </div>

            <div className="mt-4">
                <label className="text-sm font-medium">Email Address</label>
                <input 
                    type="email" name="email" value={formData.email} onChange={handleChange}
                    className="w-full border px-3 py-2 rounded-md mt-1"
                />
            </div>

            <div className="mt-4">
                <label className="text-sm font-medium">Phone Number</label>
                <input 
                    type="text" name="phone" value={formData.phone} onChange={handleChange}
                    className="w-full border px-3 py-2 rounded-md mt-1"
                />
            </div>
        </div>
    );
}
