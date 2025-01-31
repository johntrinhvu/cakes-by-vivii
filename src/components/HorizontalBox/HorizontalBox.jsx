export default function HorizontalBox({ title, children, bgColor = 'bg-gray-300' }) {
    return (
        <div className={`w-full p-6 flex justify-between items-center rounded-2xl shadow-lg ${bgColor}`}>
            {/* Title */}
            <h2 className="text-2xl sm:text-[26px] lg:text-4xl xl:text-5xl lavishly-yours-regular tracking-wide text-center w-1/3">
                - {title} -
            </h2>
            <div className="text-xs sm:text-sm md:text-base w-2/3 flex flex-col items-end gap-3 mr-2">
                {children}
            </div>
        </div>
    );
}