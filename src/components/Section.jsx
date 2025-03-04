import data from "../assets/data.json";

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
                return (
                  <div className="film-picture">
                    <img src={url} alt="" />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Section;
