const ButtonOutline = ({children})=>{
    return (
        <button className="border-2 rounded-sm text-xs py-0.5 px-2 hover:bg-black hover:text-white md:btn md:btn-outline md:hover:bg-black md:hover:text-white lg:btn-lg lg:btn-outline lg:hover:bg-black lg:hover:text-white ">{children}</button>
    )
}
export default ButtonOutline;