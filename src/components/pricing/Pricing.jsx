import Button from "../button/Button";
import SubDescription from "../font/SubDescription"
import SubTitle from "../font/SubTitle"
import Title from "../font/Title";

const Pricing = ()=>{
    return(
        <div className="bg-blue-100">
            <div className=" text-center py-10 lg:w-300 justify-self-center ">
                <SubTitle>
                    A Price To Suit Everyone
                </SubTitle>
                <div className="mt-5">
                    <SubDescription>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
                    </SubDescription>
                </div>
                <div className="mt-5">
                    <Title>
                        $ 40
                    </Title>
                </div>
                <div className="mt-9 grid grid-cols-1">
                    <div className="mb-2">
                        <span className="text-gray-400">See, One price. Simple.</span>
                    </div>
                    <div>
                        <Button>
                        Purchase Now
                    </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Pricing;