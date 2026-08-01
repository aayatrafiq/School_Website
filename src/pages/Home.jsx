import hero from "../assets/hero.png";

function Home() {
  return (
    <section className="hero">
      <img src={hero} alt="School" className="hero-image" />

      <div className="hero-content">
        <h1>Welcome to The Horizon School</h1>
        <p>Empowering Students for a Better Future</p>
        <button>Explore More</button>
      </div>
    </section>
  );
}

export default Home;