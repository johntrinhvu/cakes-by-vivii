import Title from "../../components/Title/Title";
import HorizontalBox from "../../components/HorizontalBox/HorizontalBox";
import VerticalBox from "../../components/VerticalBox/VerticalBox";
import { FaCircle, FaHeart } from "react-icons/fa6";

export default function Flavors() {
    return (
        <div>
            <Title titleOfPage="flavor menu" />
            <div className="flex flex-col justify-center gap-6 p-10">
                {/* Shape and Size */}
                <div className="flex flex-col md:flex-row gap-10">
                    <HorizontalBox title="Shape" bgColor="bg-[#C9C8D9]">
                        <div className="flex flex-col items-end">
                            <div className="flex items-center gap-3">
                                <span>Round</span>
                                <FaCircle className="text-black text-2xl sm:w-7 sm:h-7 md:w-8 md:h-8" />
                            </div>
                            <div className="flex items-center gap-3 mt-2">
                                <span>Heart</span>
                                <FaHeart className="text-black text-2xl sm:w-7 sm:h-7 md:w-8 md:h-8" />
                            </div>
                        </div>
                    </HorizontalBox>

                    <HorizontalBox title="Size" bgColor="bg-[#DBDAFF]">
                        <div className="flex flex-col">
                            <div className="flex gap-3">
                                <h4 className="font-bold">6 inch</h4>
                                <p>serves 6-8 generously or 8-12 with regular portions</p>
                            </div>
                            <div className="flex gap-3 mt-2">
                                <h4 className="font-bold">8 inch</h4>
                                <p>serves 14-16 generously or 20-24 with regular portions</p>
                            </div>
                        </div>
                    </HorizontalBox>
                </div>

                {/* Filling/Styles */}
                <div className="flex flex-col md:flex-row gap-10 mt-6">

                    {/* Flavors */}
                    <VerticalBox title="Flavors" bgColor="bg-[#DDCBE1]">
                        <div>
                            <h3 className="text-md sm:text-lg md:text-xl font-semibold mt-6 tracking-widest">CLASSIC</h3>
                            <p className="mt-2">Yellow Vanilla</p>
                            <p>White Vanilla</p>
                            <p>Chocolate Vanilla</p>
                        </div>

                        <div>
                            <h3 className="text-md sm:text-lg md:text-xl font-semibold mt-4 tracking-widest">FRUIT</h3>
                            <p className="mt-2">Strawberry</p>
                        </div>

                        <div>
                            <h3 className="text-sm sm:text-lg md:text-xl font-semibold mt-4 tracking-widest">SPECIALTY</h3>
                            <p className="mt-2">Cookies & Creme</p>
                            <p>Red Velvet</p>
                        </div>
                    </VerticalBox>

                    {/* Filling */}
                    <VerticalBox title="Filling" bgColor="bg-[#EAD7D7]">
                        <div>
                            <h3 className="text-md sm:text-lg md:text-xl font-semibold mt-6 tracking-widest">CLASSIC</h3>
                            <p className="mt-2">Yellow Vanilla</p>
                            <p>White Vanilla</p>
                            <p>Chocolate Vanilla</p>
                        </div>

                        <div>
                            <h3 className="text-md sm:text-lg md:text-xl font-semibold mt-4 tracking-widest">FRUIT</h3>
                            <p className="mt-2">Strawberry</p>
                        </div>

                        <div>
                            <h3 className="text-md sm:text-lg md:text-xl font-semibold mt-4 tracking-widest">CREAM & FRUIT</h3>
                            <p>Chantilly Cream</p>
                            <p>+</p>
                            <p>Any fruit option</p>
                        </div>

                        <div>
                            <h3 className="text-md sm:text-lg md:text-xl font-semibold mt-4 tracking-widest">SPECIALTY</h3>
                            <p className="mt-2">Oreo Chantilly Cream</p>
                            <p>(whipped cream w/ crushed Oreo cookies)</p>
                        </div>
                    </VerticalBox>

                    {/* Style */}
                    <VerticalBox title="Style" bgColor="bg-[#DCD8DD]">
                        <div>
                            <h3 className="text-md sm:text-lg md:text-xl font-semibold mt-6 tracking-widest">VINTAGE</h3>
                            <p className="mt-2">Our most popular option. Vintage cakes combine intricate piping with elegant details to create an extravagant look. Perfect for any birthdays, anniversaries, or special occasions for your lady.</p>
                        </div>

                        <div>
                            <h3 className="text-md sm:text-lg md:text-xl font-semibold mt-4 tracking-widest">MODERN</h3>
                            <p className="mt-2">Modern cakes feature a minimalist design. These cakes are typically have fresh greenery like rosemary and are topped with a selection of fruits for a natural taste.</p>
                        </div>

                        <div>
                            <h3 className="text-md sm:text-lg md:text-xl font-semibold mt-4 tracking-widest">CUSTOM</h3>
                            <p className="mt-2">Unique to your liking.</p>
                        </div>
                    </VerticalBox>
                </div>
            </div>
        </div>
    );
}