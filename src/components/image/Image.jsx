const Image = ({ image, w=100, h=100 }) => {
    return (
        <div className="">
            <img width={w} height={h} src={image} alt="hero" className="" />
        </div>
    );
}
export default Image;