const Pictures = ({ url }) => {
  return (
    <div className="film-picture">
      <img src={url} alt="une photo d'une affiche de film" />
    </div>
  );
};

export default Pictures;
