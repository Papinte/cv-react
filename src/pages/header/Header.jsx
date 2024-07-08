import "../header/Header.css";

const Header = ({ title, subtitle, imageUrlBase }) => {
  return (
    <div>
      <picture>
        <source media="(min-width: 1200px)" srcSet={`${imageUrlBase}.jpg`} />
        <source
          media="(min-width: 768px)"
          srcSet={`${imageUrlBase}-tablette.jpg`}
        />
        <img
          src={`${imageUrlBase}-mobile.jpg`}
          className="img-fluid"
          alt="Bannière bleu"
        />
      </picture>
      <div className="header-text text-center">
        <h1 className="text-uppercase">{title}</h1>
        <p>{subtitle}</p>
        <hr className="my-4 border-primary border-2 w-25 mx-auto opacity-100" />
      </div>
    </div>
  );
};

export default Header;
