export default function VerticalBox({ title, children, bgColor = 'bg-gray-300'}) {
    return (
        <div className={`w-full p-6 flex flex-col items-center rounded-3xl shadow-lg ${bgColor}`}>
            {/* Title */}
            <h2 className="text-2xl sm:text-[26px] lg:text-4xl xl:text-5xl lavishly-yours-regular tracking-wide text-center">
                - {title} -
            </h2>

            {/* Content */}
            <div className="text-xs sm:text-sm md:text-base text-center">
                {children}
            </div>
        </div>
    );
}
