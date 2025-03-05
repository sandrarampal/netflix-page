import data from "../assets/data.json";
import Pictures from "./Pictures";

const Section = ({ netflixObj }) => {
  return (
    <div className="category-div">
      <h1>{netflixObj.category}</h1>
      <div className="carrousel">
        {netflixObj.images.map((url, index) => {
          return <Pictures key={index} url={url} />;
        })}
      </div>
    </div>
  );
};

export default Section;
