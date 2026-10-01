import hero from "../assets/hero.png";

function Home() {
  return (
    <section className="hero">
    <section className="stats">
  <div className="stat-card">
    <h2>1200+</h2>
    <p>Students</p>
  </div>

  <div className="stat-card">
    <h2>80+</h2>
    <p>Teachers</p>
  </div>

  <div className="stat-card">
    <h2>25+</h2>
    <p>Years Excellence</p>
  </div>
</section>
<section className="about-preview">
  <h2>About Greenwood Academy</h2>

  <p>
    Greenwood Academy is committed to academic excellence,
    character development, and preparing students for future
    success through innovative learning experiences.
  </p>
</section>
<section className="programs">
  <h2>Our Programs</h2>

  <div className="program-cards">
    <div className="card">
      <h3>Primary School</h3>
      <p>Strong foundation for young learners.</p>
    </div>

    <div className="card">
      <h3>Secondary School</h3>
      <p>Comprehensive academic development.</p>
    </div>

    <div className="card">
      <h3>Sports & Activities</h3>
      <p>Encouraging leadership and teamwork.</p>
    </div>
  </div>
</section>
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