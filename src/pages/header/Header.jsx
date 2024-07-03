const Header = ({ title, subtitle, imageUrl }) => {
  return (
    <div>
      <img className="img-fluid" src={imageUrl} alt="Bannière bleu" />
      <div className="text-center">
        <h1 className="text-uppercase">{title}</h1>
        <h2>{subtitle}</h2>
        <hr className="my-4 border-primary border-2 w-25 mx-auto opacity-100" />
      </div>
    </div>
  );
};

export default Header;
