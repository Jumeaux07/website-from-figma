const Icon = ({ path,w,h }) => {
  return(
    <div>
        <img src={path} alt="icon" width={w} height={h} />
    </div>
  );
}
export default Icon;