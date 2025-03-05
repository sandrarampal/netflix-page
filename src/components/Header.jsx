import logoNetflix from "../assets/logo-net.png";

const Header = () => {
  return (
    <header>
      <div className="netflix-logo">
        <img src={logoNetflix} alt="" />
      </div>
    </header>
  );
};

export default Header;
