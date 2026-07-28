const portfolioItems = [
  {
    title: "Institutional Readiness",
    type: "Governance + operating model",
    description:
      "Board structure, leadership cadence, decision paths, and internal clarity for organizations preparing for their next level.",
  },
  {
    title: "Program Architecture",
    type: "Mission portfolio",
    description:
      "A sharper way to organize programs, budgets, stories, outcomes, and growth so the work becomes easier to run and easier to fund.",
  },
  {
    title: "Executive Support Systems",
    type: "Stability + execution",
    description:
      "Planning rhythms, documentation, meeting systems, and operating support for leaders carrying complex missions.",
  },
];

const blogPosts = [
  {
    title: "The Architecture Behind A Strong Mission",
    kicker: "Field Note",
    excerpt:
      "A mission does not become less creative because it has a strong house around it. It becomes more durable.",
  },
  {
    title: "What A Board Is Really Holding",
    kicker: "Governance",
    excerpt:
      "The best boards do more than approve documents. They hold trust, pressure, memory, and possibility.",
  },
  {
    title: "The Quiet Work Of Organizational Stability",
    kicker: "Practice",
    excerpt:
      "Support should make the leader feel less alone, the team less scattered, and the work less fragile.",
  },
];

const principles = [
  "Governance that people can actually use.",
  "Programs that can be explained, funded, and sustained.",
  "Operations that create calm without slowing momentum.",
  "Support that lets leaders return to the work only they can do.",
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="top" aria-label="JaiSellers Companies">
        <nav className="nav" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="JaiSellers Companies home">
            <img src="/jsco-brand-mark.png" alt="" className="brand-logo" />
            <span>JaiSellers Companies</span>
          </a>
          <div className="nav-links">
            <a href="#philosophy">Philosophy</a>
            <a href="#work">Portfolio</a>
            <a href="#journal">Blog</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-card-frame">
          <img
            src="/jaisellers-hero-card.png"
            alt="JaiSellers Companies. Structure where Art can thrive. Joshua Sellers in profile."
            className="hero-card-image"
          />
        </div>

        <div className="hero-copy" aria-label="JaiSellers Companies introduction">
          <p className="eyebrow">Nonprofit structure for creative work</p>
          <h1>
            <span>JaiSellers</span>
            <span>Companies</span>
          </h1>
          <p className="tagline">Structure where Art can thrive</p>
          <p className="hero-lede">
            Strategic structure, governance design, and executive support for
            nonprofit leaders building meaningful work under real pressure.
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
      </section>

      <section className="manifesto band" id="philosophy">
        <div className="section-label">The Practice</div>
        <div className="manifesto-grid">
          <div>
            <h2>Elegant structure for organizations doing uncommon work.</h2>
          </div>
          <div className="manifesto-copy">
            <p>
              JaiSellers Companies works with nonprofit leaders who need more
              than advice. They need a thinking partner who can translate vision
              into a working shape: governance, programs, systems, language, and
              the executive rhythm to keep it all moving.
            </p>
            <p>
              The result is not a heavier organization. It is a steadier one.
              Clear enough to trust. Flexible enough to grow. Beautiful enough
              to still feel like the mission that started it.
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
            <p className="eyebrow">Advisory Work</p>
            <h2>High-trust support for the invisible work that makes visible work possible.</h2>
            <div className="method-list">
              <div>
                <h3>Governance Design</h3>
                <p>
                  Board roles, decision rights, bylaws, committees, and
                  leadership practices that make responsibility easier to see.
                </p>
              </div>
              <div>
                <h3>Program Strategy</h3>
                <p>
                  Service models, initiative maps, outcomes, budgets, and
                  language that help a mission become legible without becoming
                  generic.
                </p>
              </div>
              <div>
                <h3>Executive Infrastructure</h3>
                <p>
                  Planning cycles, documentation, meeting systems, and follow-up
                  structures that give leaders more room to lead.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio band" id="work">
        <div className="section-heading">
          <p className="eyebrow">Portfolio</p>
          <h2>Selected ways the work takes shape.</h2>
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
          <h2>Notes on leadership, structure, trust, and institutional imagination.</h2>
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
            <h2>For leaders who need discernment, design, and dependable support.</h2>
            <p>
              The work is centered on nonprofit clients, especially leaders
              carrying creative, cultural, or mission-driven complexity. The
              promise is simple: build the structure around the work so the work
              can keep becoming itself.
            </p>
          </div>
        </div>
      </section>

      <section className="contact band" id="contact">
        <div className="contact-inner">
          <div>
            <p className="eyebrow">Begin</p>
            <h2>Bring the beautiful, complicated thing. We will make it workable.</h2>
          </div>
          <div className="contact-panel">
            <p>
              Best fit: nonprofit leaders, artist-led organizations, cultural
              programs, and mission-driven teams ready for structure that feels
              precise, human, and alive.
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
