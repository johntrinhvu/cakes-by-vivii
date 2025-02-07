export default function StepOne({ formData, handleChange }) {
    return (
        <div>
            <h2 className="text-lg font-bold mb-2 uppercase tracking-wide sm:tracking-widest">Personal Information</h2>
            <hr className="border-black mb-4"/>

            {/* First / Last Name */}
            <div className="flex gap-4">
                <div className="flex items-center w-1/2">
                    <label className="text-sm font-medium w-1/3">First Name</label>
                    <input 
                        type="text" name="firstName" value={formData.firstName} onChange={handleChange}
                        className="w-3/4 px-3 border rounded-full shadow-md shadow-zinc-400"
                    />
                </div>
                <div className="flex items-center w-1/2">
                    <label className="text-sm font-medium w-1/3">Last Name</label>
                    <input 
                        type="text" name="lastName" value={formData.lastName} onChange={handleChange}
                        className="w-3/4 px-3 border rounded-full shadow-md shadow-zinc-400"
                    />
                </div>
            </div>

            {/* Email Address */}
            <div className="mt-4 flex items-center">
                <label className="text-sm font-medium w-1/4">Email Address</label>
                <input 
                    type="email" name="email" value={formData.email} onChange={handleChange}
                    className="w-11/12 px-3 border rounded-full shadow-md shadow-zinc-400"
                />
            </div>

            {/* Phone Number */}
            <div className="mt-4 flex items-center">
                <label className="text-sm font-medium w-1/4">Phone Number</label>
                <input 
                    type="text" name="phone" value={formData.phone} onChange={handleChange}
                    className="w-11/12 px-3 border rounded-full shadow-md shadow-zinc-400"
                />
            </div>
        </div>
    );
}
