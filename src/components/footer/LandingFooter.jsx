import Button from "../button/Button";

const LandingFooter = ()=>{
    return (
        <div className="bg-blue-200 navbar h-10">
            <div className="grid grid-cols-3 justify-items-center md:w-full">
                <div className="navbar-start">
                     <span className="text-gray-400 text-sm">©2025 Yourcompany.</span>
                </div>
                <div className="navbar-center">
                     <span className=" text-xl font-bold">Landing</span>
                </div>
                <div className="navbar-end">
                     <Button>
                        Purchase now
                     </Button>
                </div>
            </div>
        </div>
    );
}
export default LandingFooter;