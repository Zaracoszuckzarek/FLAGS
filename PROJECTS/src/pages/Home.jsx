import {Link} from "react-router-dom"
const Home = () => {
  return (
    <div className="home-wrapper-container">
    <div className="hero-page">
    <h1>Welcome to FlagsHome home of flags</h1>
    <p>
    We are the leading producers of all kind of Flags all over the world. We
    have national flags, soccer flags, political campaign flags, American
    football clubs flags of all kinds, baseball clubs, basketball, volley,
    netball etc etc. Why the hustle? We have all for you
    </p>
    </div>
      <div className="hero-wrapper-container">
        <div className="inner-hero-container red">
        <h3>Sports clubs flags</h3>
          <p>We have all kinds of sporting clubs flags and all kinds of accessories</p>
        </div>

        <div className="inner-hero-container blue">
        <h3>Country flags</h3>
          <p>We have all kinds of country flags from far eastern Asia countries to North American to European and then African countries</p>
          <Link to="flags">find a country flag</Link>
        </div>

        <div className="inner-hero-container green">
        <h3>schools flags</h3>
          <p>Talk of schools f all kinds from nurssery to the highest Universities in the world. Harvard University flags and ll kinds you may think of we have all</p>
        </div>

        <div className="inner-hero-container black">
        <h3>political flags</h3>
          <p>We are politics because we have all kinds of political campaign flags for all seasons from local assemplies to national presidential campaigns we have you covered</p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
