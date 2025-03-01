const Button = ({children})=>{
    return (
        <>
      
        <button className="btn bg-black text-white w-auto btn-xs md:btn lg:btn-lg md:bg-black md:text-white lg:bg-black lg:text-white">
            {children}
        </button>

        </>
    );
}
export default Button;