import CardHero from "./cardHero";
import image from "../../assets/hello.png";
import Image from "../image/Image";
import Title from "../font/Title";
import Description from "../font/Description";

const Hero = ()=>{
    return(
       <div className="mt-10 lg:mt-30">
        {/*Ligne du Hero */}
            <div className=" grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1" >
                <CardHero/>
               <Image w={820} h={820} image={image}/>
            </div>
       </div>
    );
}
export default Hero;