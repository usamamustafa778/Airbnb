import Image from "next/image";

function LargeCard({ img, title, description, buttonText }) {
    return (
        <div className = "relative py-16 cursor-pointer">
            <div className = "relative h-96 min-w-[300px]">
                <Image
                    src = {img}
                    layout = "fill"
                    objectFit = "cover"
                    className = "rounded-2xl"
                />
            </div>

            <div className="absolute top-32 left-12">
                <h3 className="text-4xl font-bold text-white mb-2 w-64">{ title }</h3>
                <p className="text-lg text-white mb-2 w-64">{ description }</p>

                <button className="text-sm text-black bg-white px-4 py-3 font-medium rounded-lg mt-5 hover:shadow-xl active:scale-90 transition duration-150">{ buttonText }</button>
            </div>
        </div>
    )
}

export default LargeCard
