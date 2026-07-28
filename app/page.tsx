const portfolioItems = [
  {
    title: "The House",
    type: "Governance + operating model",
    description:
      "A complete read on how authority, accountability, board practice, and leadership rhythm should be arranged for the next chapter.",
  },
  {
    title: "The Map",
    type: "Program architecture",
    description:
      "A sharper way to organize programs, budgets, outcomes, and language so the work becomes easier to run, fund, and explain.",
  },
  {
    title: "The Cadence",
    type: "Executive infrastructure",
    description:
      "Planning cycles, meeting systems, documentation, and follow-through that give leaders fewer loose threads and better decisions.",
  },
];

const blogPosts = [
  {
    title: "When A Mission Outgrows Its Informal Systems",
    kicker: "Briefing",
    excerpt:
      "The moment when charisma, urgency, and improvisation need a more durable operating shape.",
  },
  {
    title: "The Board As A Room, Not A Rubber Stamp",
    kicker: "Governance",
    excerpt:
      "A useful board creates the conditions for judgment, trust, candor, and real stewardship.",
  },
  {
    title: "Stability Is A Creative Advantage",
    kicker: "Practice",
    excerpt:
      "The right support makes leaders less alone, teams less scattered, and the work less fragile.",
  },
];

const principles = [
  "Useful governance, not ornamental governance.",
  "Programs with shape, proof, and a fundable story.",
  "Operations that create calm without dulling ambition.",
  "Executive support that protects attention and judgment.",
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
            <a href="#philosophy">Approach</a>
            <a href="#work">Engagements</a>
            <a href="#journal">Notes</a>
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
      </section>

      <section className="opening band" aria-label="JaiSellers Companies introduction">
        <div className="opening-inner">
          <div>
          <p className="eyebrow">Strategic advisory for nonprofit leaders</p>
            <h1>
              <span>Make the work</span>
              <span>more durable.</span>
            </h1>
          </div>
          <div className="opening-copy">
            <p>
              Governance design, program architecture, and executive support for
              mission-led organizations ready to become more durable without
              becoming ordinary.
            </p>
            <div className="hero-actions" aria-label="Primary actions">
              <a className="button primary" href="#contact">
                Start the conversation
              </a>
              <a className="button secondary dark" href="#philosophy">
                Explore the practice
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="manifesto band" id="philosophy">
        <div className="section-label">Approach</div>
        <div className="manifesto-grid">
          <div>
            <h2>A private advisory house for organizations at a threshold.</h2>
          </div>
          <div className="manifesto-copy">
            <p>
              JaiSellers Companies works with leaders carrying work that has
              become too important to depend on informal systems. The practice
              brings order to governance, programs, language, planning, and the
              executive decisions that determine whether momentum becomes
              institution.
            </p>
            <p>
              The work is precise, but not sterile. Strategic, but not generic.
              Built for nonprofits, cultural organizations, artist-led
              institutions, and mission-driven teams that need a more elegant
              way to hold complexity.
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
            <p className="eyebrow">Services</p>
            <h2>Quiet systems. Strong rooms. Better decisions.</h2>
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
                  Service models, initiative maps, outcomes, budgets, and a
                  narrative spine that lets funders and teams see the same work.
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
          <p className="eyebrow">Engagements</p>
          <h2>Three rooms where the work becomes clearer.</h2>
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
          <p className="eyebrow">The Index</p>
          <h2>Briefings on leadership, structure, trust, and institutional imagination.</h2>
        </div>
        <div className="journal-list">
          {blogPosts.map((post) => (
            <article className="journal-card" key={post.title}>
              <p>{post.kicker}</p>
              <h3>{post.title}</h3>
              <span>{post.excerpt}</span>
              <a href="#contact" aria-label={`Discuss ${post.title}`}>
                Discuss this note
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
            <h2>For leaders who need discernment, design, and a steadier table.</h2>
            <p>
              The work is centered on nonprofit clients, especially leaders
              carrying cultural, creative, civic, or mission-driven complexity.
              The promise is not more noise. It is a cleaner way to see the
              organization, make the next decision, and carry the work forward.
            </p>
          </div>
        </div>
      </section>

      <section className="contact band" id="contact">
        <div className="contact-inner">
          <div>
            <p className="eyebrow">Begin</p>
            <h2>Bring the complicated thing. We will find the elegant shape.</h2>
          </div>
          <div className="contact-panel">
            <p>
              Best fit: nonprofit leaders, artist-led organizations, cultural
              programs, and mission-driven teams ready for structure that feels
              precise, human, and made for the work in front of them.
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
