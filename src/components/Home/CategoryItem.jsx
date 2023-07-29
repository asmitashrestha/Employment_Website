import OpenWithIcon from "@mui/icons-material/OpenWith";
const CategoryItem = ({ value }) => {
  return (
    <>
      <div className="logo">
        <div className="openicon">
          <OpenWithIcon style={{fontSize:"16px"}}/>
        </div>
        <div className="log">
          <p>{value}</p>
        </div>
      </div>
    </>
  );
};

export default CategoryItem;