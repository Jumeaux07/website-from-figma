import Title from "../font/Title";
import Description from "../font/Description";
import Button from "../button/Button";
import ButtonOutline from "../button/Button-outline";

const CardHero = ()=>{
    return(
      <div>
        <div className="mb-5">
          <Title>
            Introduce Your Product Quickly & Effectively
          </Title>
        </div>
        <Description>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
        </Description>
        <div className="m-3 lg:m-9 md:m-8 flex flex-row">
          <div className="mr-7">
            <Button>Purchase UI Kit</Button>
          </div>
          <div>
            <ButtonOutline>Learn More</ButtonOutline>
          </div>
      
        </div>
      </div>
        
    );
}
export default CardHero;