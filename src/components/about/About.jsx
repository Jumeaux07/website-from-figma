import SubTitle from "../font/SubTitle";
import SubDescription from "../font/SubDescription";
import Image from "../image/Image";

const About = ({image})=>{
    return(
        <div className="mt-10 lg:mt-30">
        
            <div className="mt-5 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 ">
                {/* Bloc de gauche */}
                <div className="self-center">
                     <div className="mb-9 w">
                        <SubTitle>
                        Light, Fast & Powerful
                    </SubTitle>
                     </div>
                    <SubDescription>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
                        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                    </SubDescription>
                </div>
                <div>
                    <Image w={470} h={420} image={image}/>
                </div>
                    
            </div>
        </div>
    );
}
export default About;