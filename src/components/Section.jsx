import data from "../assets/data.json";
import Pictures from "./Pictures";

const Section = () => {
  return (
    <section>
      {data.map((netflixObj, index) => {
        // console.log(netflixObj.category);
        return (
          <div className="category-div">
            <h1>{netflixObj.category}</h1>
            <div className="carrousel">
              {netflixObj.images.map((url, index) => {
                return <Pictures url={netflixObj.images[index]} />;
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Section;
