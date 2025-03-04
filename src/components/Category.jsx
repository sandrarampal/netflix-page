const Category = ({ category }) => {
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
};
