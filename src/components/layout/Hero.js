import Image from "next/image";
import Right from "../icons/Right";

export default function Hero() {
    return (
        <section className="hero mt-4" >
            <div className="py-12">
            <h1 className="text-4xl font-semibold">Eat, Bite, 
            <span className="text-primary"> Enjoy!</span>
             </h1>
            <p className=" my-4 text-gray-500 text-sm">Your one-stop destination for delicious bites <br /> and refreshing sips!</p>      
            <div className=" flex gap-4 text-sm ">
                <button className="bg-primary uppercase flex items-center gap-2 text-white px-4 py-2 rounded-full ">Order Now! <Right /> </button>
                <button className="flex gap-2 py-2 text-gray-600 font-semibold"> Learn More <Right /> </button>
            </div>
            </div>
            <div className="relative">
            <Image src={'/pizza.png'} layout={'fill'} objectFit={'contain'} alt={'food'} />     
            </div>    
        </section>

    ); 
}