const portfolioItems = [
  {
    title: "Artist-Led Nonprofit Framework",
    type: "Governance + operating model",
    description:
      "A practical structure for moving from inspired work to fundable programs, clear roles, and a board that protects the mission.",
  },
  {
    title: "Program House For Creative Work",
    type: "Portfolio architecture",
    description:
      "A way to organize projects, stories, budgets, and outcomes so the art can be seen without being flattened into administration.",
  },
  {
    title: "Stability Plan For Growing Organizations",
    type: "Support systems",
    description:
      "Cadence, documentation, and decision paths that give teams enough steadiness to make bold work without drifting into chaos.",
  },
];

const blogPosts = [
  {
    title: "What Baroque Music Teaches Nonprofits About Freedom",
    kicker: "Essay",
    excerpt:
      "Strict tempo, disciplined form, and then lift. The point of structure is not control. It is the ground an artist can rise from.",
  },
  {
    title: "A Board Should Be A Resonating Chamber",
    kicker: "Governance",
    excerpt:
      "The best boards do more than approve documents. They amplify signal, absorb shock, and keep the mission audible.",
  },
  {
    title: "The Difference Between Support And Interference",
    kicker: "Practice",
    excerpt:
      "A healthy operating system gives creative leaders stability without stealing authorship from the work.",
  },
];

const principles = [
  "Structure is rhythm, not a cage.",
  "Administration should protect the imagination.",
  "Support systems must be clear enough to trust and light enough to move.",
  "The mission is not paperwork. The paperwork is there to hold the mission.",
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="top" aria-label="JaiSellers Companies">
        <nav className="nav" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="JaiSellers Companies home">
            <span className="brand-mark">JSCo</span>
            <span>JaiSellers Companies</span>
          </a>
          <div className="nav-links">
            <a href="#philosophy">Philosophy</a>
            <a href="#work">Portfolio</a>
            <a href="#journal">Blog</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Nonprofit structure for creative work</p>
            <h1>The structure is the beat. The art is the flight.</h1>
            <p className="hero-lede">
              JaiSellers Companies helps nonprofit clients build the support,
              stability, governance, and operating rhythm that lets their real
              work rise above the machinery.
            </p>
            <div className="hero-actions" aria-label="Primary actions">
              <a className="button primary" href="#contact">
                Start the conversation
              </a>
              <a className="button secondary" href="#philosophy">
                Read the idea
              </a>
            </div>
          </div>

          <figure className="hero-image">
            <img
              src="/jaisellers-hero.jpg"
              alt="Joshua Sellers in profile with the JaiSellers Companies logo"
            />
            <figcaption>
              Foundation for the form. Space for the rise.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="manifesto band" id="philosophy">
        <div className="section-label">The Idea</div>
        <div className="manifesto-grid">
          <div>
            <h2>Baroque music has rules, strict beats, and form. Then the artist soars.</h2>
          </div>
          <div className="manifesto-copy">
            <p>
              That is the work. Not bureaucracy for its own sake. Not a binder
              full of lifeless policy. The right structure gives the art a floor,
              a tempo, and enough confidence to leave the ground.
            </p>
            <p>
              JaiSellers Companies designs nonprofit structures that create
              support and stability so clients can do the work they were called
              to do: build programs, serve communities, fund the mission, and
              protect the creative center.
            </p>
          </div>
        </div>
      </section>

      <section className="principles band" aria-label="Core principles">
        {principles.map((principle, index) => (
          <article className="principle" key={principle}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{principle}</p>
          </article>
        ))}
      </section>

      <section className="method band" aria-label="How JaiSellers Companies works">
        <div className="method-inner">
          <div className="method-visual">
            <img
              src="/jaisellers-office.png"
              alt="Joshua Sellers seated in an office with planning documents and books"
            />
          </div>
          <div className="method-copy">
            <p className="eyebrow">What gets built</p>
            <h2>Support that can hold pressure without stealing the stage.</h2>
            <div className="method-list">
              <div>
                <h3>Governance with a pulse</h3>
                <p>
                  Board roles, decision rights, bylaws, committees, and leadership
                  cadence that make authority legible and mission-centered.
                </p>
              </div>
              <div>
                <h3>Programs with architecture</h3>
                <p>
                  Clear service models, initiative maps, outcomes, budgets, and
                  stories that make the work easier to fund and easier to run.
                </p>
              </div>
              <div>
                <h3>Operations with tempo</h3>
                <p>
                  Practical systems for meetings, documentation, planning, and
                  follow-through so the organization can move with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio band" id="work">
        <div className="section-heading">
          <p className="eyebrow">Portfolio</p>
          <h2>Structures designed to make mission work visible, stable, and alive.</h2>
        </div>
        <div className="card-grid">
          {portfolioItems.map((item) => (
            <article className="portfolio-card" key={item.title}>
              <p>{item.type}</p>
              <h3>{item.title}</h3>
              <span>{item.description}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="journal band" id="journal">
        <div className="section-heading">
          <p className="eyebrow">Blog</p>
          <h2>Notes on structure, art, governance, and the conditions for flight.</h2>
        </div>
        <div className="journal-list">
          {blogPosts.map((post) => (
            <article className="journal-card" key={post.title}>
              <p>{post.kicker}</p>
              <h3>{post.title}</h3>
              <span>{post.excerpt}</span>
              <a href="#contact" aria-label={`Discuss ${post.title}`}>
                Discuss this idea
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="about band">
        <div className="about-inner">
          <div className="about-image">
            <img
              src="/joshua-portrait-wide.png"
              alt="Joshua Sellers looking toward the camera in a studio portrait"
            />
          </div>
          <div className="about-copy">
            <p className="eyebrow">About JaiSellers Companies</p>
            <h2>For clients who need both imagination and a working system.</h2>
            <p>
              The audience is mainly nonprofit clients, but the promise travels:
              artists, founders, institutions, and funders all need structures
              that support the work without smothering it.
            </p>
          </div>
        </div>
      </section>

      <section className="contact band" id="contact">
        <div className="contact-inner">
          <div>
            <p className="eyebrow">Begin</p>
            <h2>Bring the beautiful, complicated thing. We will give it form.</h2>
          </div>
          <div className="contact-panel">
            <p>
              Best fit: nonprofit leaders, artist-led organizations, cultural
              programs, and mission-driven teams ready to build steadier support
              around meaningful work.
            </p>
            <a className="button primary" href="mailto:?subject=JaiSellers%20Companies%20Inquiry">
              Draft an inquiry
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
