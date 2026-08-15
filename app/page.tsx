// ---------------------------------------------------------------------------
// EDIT ME FIRST
//
// CONTACT_EMAIL  — the address every "Book" / "Start" button opens.
// PRICING        — placeholder figures. Replace "$X,XXX" with real numbers
//                  before this goes live. Nothing else needs to change to
//                  set prices; every package reads from this one object.
// ---------------------------------------------------------------------------

const CONTACT_EMAIL = "joshuajaisellers@gmail.com";

const PRICING = {
  formation: "Starting at $X,XXX",
  governance: "Starting at $X,XXX",
  funding: "Starting at $X,XXX",
  identity: "Starting at $X,XXX",
  retainer: "$X,XXX / month",
};

function inquiry(subject: string) {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;
}

const practices = [
  {
    id: "consulting",
    name: "JaiSellers Consulting",
    role: "The core practice",
    line: "Governance, compliance, and funding readiness for nonprofit organizations.",
    detail:
      "Formation and IRS filings, bylaws and policy sets, board structure and decision rights, program design, budgets, and the grant narratives that carry it all to funders. This is the work most executives and boards come here for.",
    serves: "Executive directors, founding boards, and organizations approaching an audit, a filing, or a growth year.",
  },
  {
    id: "designs",
    name: "JaiSellers Designs and Photography",
    role: "Identity and image",
    line: "Brand systems, campaign language, and portraiture with a point of view.",
    detail:
      "Logos and full identity systems, print and digital layouts, campaign worlds, editorial portraits, and founder imagery. Built so that a small organization looks as serious as the work it actually does.",
    serves: "Organizations rebuilding their public face, and leaders who need to be seen clearly.",
  },
  {
    id: "initiatives",
    name: "Just Systems Initiatives",
    role: "Civic and operational",
    line: "Operating frameworks and civic projects that outlast the people who start them.",
    detail:
      "Process design, documentation standards, planning cycles, and the practical systems that turn a good instinct into something a successor can run without a translator.",
    serves: "Coalitions, civic programs, and teams whose work has outgrown improvisation.",
  },
];

const packages = [
  {
    id: "formation",
    kicker: "For new organizations",
    name: "Formation",
    price: PRICING.formation,
    summary:
      "Everything required to become a real, filed, governable nonprofit — assembled in one engagement instead of five scattered ones.",
    includes: [
      "Articles of incorporation and state filing support",
      "Bylaws drafted to your actual structure",
      "IRS 1023 or 1023-EZ readiness and application package",
      "Conflict-of-interest, records retention, and financial policies",
      "Founding board slate, roles, and first-year meeting calendar",
      "EIN, registered agent, and post-approval checklist",
    ],
    timeline: "6–10 weeks",
  },
  {
    id: "governance",
    kicker: "For existing organizations",
    name: "Governance Reset",
    price: PRICING.governance,
    summary:
      "For the organization that grew on charisma and urgency, and now needs a structure a board can actually govern through.",
    includes: [
      "Bylaws and policy review against current practice",
      "Board roles, decision rights, and committee structure",
      "Meeting, agenda, and minutes system that holds up under review",
      "Board onboarding packet and annual governance calendar",
      "Executive–board boundary and reporting cadence",
      "Adopted-by-resolution document set",
    ],
    timeline: "8–12 weeks",
  },
  {
    id: "funding",
    kicker: "For organizations seeking funding",
    name: "Funding Readiness",
    price: PRICING.funding,
    summary:
      "The documents funders ask for, written so your programs and your numbers tell the same story.",
    includes: [
      "Program logic model and outcomes framework",
      "Organizational and program budgets",
      "Case for support and funder-facing one-pager",
      "Reusable grant narrative library",
      "Evaluation plan and reporting templates",
      "Prospect research and submission calendar",
    ],
    timeline: "6–8 weeks",
  },
  {
    id: "identity",
    kicker: "For organizations being seen",
    name: "Identity and Presence",
    price: PRICING.identity,
    summary:
      "A visual system and set of images that make a small organization legible, credible, and unmistakably itself.",
    includes: [
      "Logo and full identity system",
      "Brand guide: type, color, usage, voice",
      "Editorial portraits and organizational imagery",
      "Templates for decks, letterhead, and reports",
      "Campaign or program collateral",
      "Web-ready asset package",
    ],
    timeline: "5–8 weeks",
  },
];

const retainer = {
  name: "Advisory Retainer",
  price: PRICING.retainer,
  summary:
    "Ongoing counsel for executives carrying decisions that need judgment rather than a deliverable.",
  includes: [
    "Standing monthly working session",
    "Board meeting preparation and debrief",
    "Document and correspondence review",
    "On-call judgment between sessions",
  ],
};

const engagementTerms = [
  {
    title: "Fixed scope, fixed fee",
    copy: "Every package is quoted in writing before work begins. No hourly drift, no surprise invoices for a board to explain.",
  },
  {
    title: "Documents, not advice alone",
    copy: "Each engagement ends in artifacts your board can adopt, your auditor can read, and your successor can use.",
  },
  {
    title: "Board-ready language",
    copy: "Policies, minutes, and filings are drafted to withstand review by counsel, funders, and the IRS.",
  },
  {
    title: "A named counterpart",
    copy: "You work directly with Joshua Sellers throughout. Nothing is handed to a junior team you have not met.",
  },
];

const advisoryScore = [
  {
    number: "01",
    verb: "Read",
    title: "See the hidden architecture",
    copy: "A close diagnostic of roles, pressure points, decision habits, board function, programs, and the places where momentum leaks.",
  },
  {
    number: "02",
    verb: "Frame",
    title: "Name the working shape",
    copy: "A clear model for what the organization is becoming: its rooms, rhythms, authority, program logic, and fundable story.",
  },
  {
    number: "03",
    verb: "Build",
    title: "Produce the documents",
    copy: "Bylaws, policies, filings, budgets, narratives, and systems — drafted, reviewed with you, and prepared for adoption.",
  },
  {
    number: "04",
    verb: "Hold",
    title: "Support the next passage",
    copy: "Ongoing advisory presence for leaders carrying decisions that need judgment, steadiness, and a more elegant table.",
  },
];

const workItems = [
  {
    practice: "Consulting",
    title: "Nonprofit Strategy and Compliance",
    description:
      "IRS 1023 readiness, bylaws, board structure, budgets, and grant narratives — the practical documents that let mission work stand up straight.",
  },
  {
    practice: "Designs",
    title: "Brand and Identity Systems",
    description:
      "Logos, visual systems, campaign language, print pieces, and digital layouts for organizations with something to say.",
  },
  {
    practice: "Photography",
    title: "Portrait and Organizational Image",
    description:
      "Editorial portraits, founder imagery, and atmospheric photography that make the people behind the work feel present.",
  },
];

const notes = [
  {
    kicker: "Governance",
    title: "When a mission outgrows its informal systems",
    excerpt: "The moment when charisma, urgency, and improvisation need a more durable operating shape.",
  },
  {
    kicker: "Boards",
    title: "The board as a room, not a rubber stamp",
    excerpt: "A useful board creates the conditions for judgment, trust, candor, and real stewardship.",
  },
  {
    kicker: "Practice",
    title: "Stability is a creative advantage",
    excerpt: "The right support makes leaders less alone, teams less scattered, and the work less fragile.",
  },
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="site-header-inner">
          <a className="brand" href="#top">
            <img src="/jsco-brand-mark.png" alt="" className="brand-logo" />
            <span className="brand-name">JaiSellers Companies</span>
          </a>
          <nav className="nav-links" aria-label="Main navigation">
            <a href="#practices">Practices</a>
            <a href="#packages">Packages</a>
            <a href="#process">Process</a>
            <a href="#work">Work</a>
            <a href="#about">About</a>
          </nav>
          <a className="button gold compact" href={inquiry("Consultation request")}>
            Book a consult
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-label="JaiSellers Companies">
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="eyebrow gold">JaiSellers Companies</p>
              <h1>
                Structure where <em>Art</em> can thrive.
              </h1>
              <p className="hero-lede">
                Governance, compliance, and funding readiness for nonprofit
                organizations — delivered as fixed-scope packages, with the
                documents your board can adopt at the end of it.
              </p>
              <div className="hero-actions">
                <a className="button gold" href="#packages">
                  See the packages
                </a>
                <a className="button ghost" href={inquiry("Consultation request")}>
                  Book a consult
                </a>
              </div>
              <ul className="hero-proof">
                <li>Fixed scope, quoted in writing</li>
                <li>Board-ready documents</li>
                <li>Direct work with Joshua Sellers</li>
              </ul>
            </div>
            <div className="hero-portrait">
              <img
                src="/joshua-portrait-wide.jpg"
                alt="Joshua Sellers, founder of JaiSellers Companies"
                fetchPriority="high"
              />
            </div>
          </div>
        </section>

        <section className="practices" id="practices">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow gold">The House</p>
              <h2>One house. Three practices.</h2>
              <p className="section-lede">
                Most organizations arrive for the first. Many stay for the other
                two, because structure and image are the same problem seen from
                two directions.
              </p>
            </div>
            <div className="practice-list">
              {practices.map((practice, index) => (
                <article className="practice" id={practice.id} key={practice.id}>
                  <div className="practice-index">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{practice.role}</p>
                  </div>
                  <div className="practice-body">
                    <h3>{practice.name}</h3>
                    <p className="practice-line">{practice.line}</p>
                    <p className="practice-detail">{practice.detail}</p>
                    <p className="practice-serves">
                      <span>Serves</span>
                      {practice.serves}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="packages" id="packages">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow gold">Packages</p>
              <h2>Buy the engagement, not the hour.</h2>
              <p className="section-lede">
                Each package is a defined body of work with a written scope, a
                schedule, and a set of documents you keep. Built for
                organizations that need to know the number before they begin.
              </p>
            </div>

            <div className="package-grid">
              {packages.map((pkg) => (
                <article className="package" key={pkg.id}>
                  <div className="package-head">
                    <p className="package-kicker">{pkg.kicker}</p>
                    <h3>{pkg.name}</h3>
                    <p className="package-price">{pkg.price}</p>
                    <p className="package-summary">{pkg.summary}</p>
                  </div>
                  <ul className="package-includes">
                    {pkg.includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="package-foot">
                    <p className="package-timeline">
                      <span>Typical timeline</span>
                      {pkg.timeline}
                    </p>
                    <a className="button gold wide" href={inquiry(`${pkg.name} package inquiry`)}>
                      Start {pkg.name}
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <article className="retainer">
              <div className="retainer-copy">
                <p className="eyebrow gold">Ongoing</p>
                <h3>{retainer.name}</h3>
                <p>{retainer.summary}</p>
                <ul>
                  {retainer.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="retainer-action">
                <p className="package-price">{retainer.price}</p>
                <a className="button gold wide" href={inquiry("Advisory retainer inquiry")}>
                  Enquire about the retainer
                </a>
                <p className="retainer-note">
                  Retainers begin after an initial engagement or a scoping
                  conversation.
                </p>
              </div>
            </article>

            <p className="packages-footnote">
              Need something between two packages, or none of them? Scope is
              written to the organization.{" "}
              <a href={inquiry("Custom engagement inquiry")}>Describe the situation</a>.
            </p>
          </div>
        </section>

        <section className="terms" aria-label="How engagements work">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow gold">For executives and boards</p>
              <h2>How an engagement is run.</h2>
              <p className="section-lede">
                What a board can expect before it approves a contract, and what
                it holds when the work is finished.
              </p>
            </div>
            <div className="terms-grid">
              {engagementTerms.map((term) => (
                <article className="term" key={term.title}>
                  <h3>{term.title}</h3>
                  <p>{term.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="score" id="process">
          <div className="container score-inner">
            <div className="score-intro">
              <p className="eyebrow gold">The Advisory Score</p>
              <h2>
                <span>Four movements.</span>
                <span className="accent">One steadier institution.</span>
              </h2>
              <p className="section-lede">
                Every package moves through the same four passages, whether the
                engagement lasts six weeks or a year.
              </p>
            </div>
            <ol className="score-grid">
              {advisoryScore.map((item) => (
                <li className="score-card" key={item.number}>
                  <div className="score-card-top">
                    <span>{item.number}</span>
                    <p>{item.verb}</p>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="work" id="work">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow gold">Selected work</p>
              <h2>Identity, image, and nonprofit structure.</h2>
            </div>
            <div className="work-grid">
              {workItems.map((item) => (
                <article className="work-card" key={item.title}>
                  <p className="work-practice">{item.practice}</p>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about" id="about">
          <div className="container about-inner">
            <div className="about-image">
              <img
                src="/jaisellers-hero.jpg"
                alt="Joshua Sellers in profile, with the JaiSellers Companies monogram"
                loading="lazy"
              />
            </div>
            <div className="about-copy">
              <p className="eyebrow gold">About</p>
              <h2>Joshua Sellers</h2>
              <p>
                JaiSellers Companies works with leaders carrying work that has
                become too important to depend on informal systems — nonprofit
                executives, founding boards, artist-led institutions, and civic
                programs at the point where momentum has to become
                infrastructure.
              </p>
              <p>
                The practice holds the unglamorous essentials and the expressive
                work in the same room: filings and bylaws alongside brand
                systems and portraiture. That combination is deliberate. An
                organization is believed when its structure and its image agree.
              </p>
              <p className="about-cta">
                <a href={inquiry("Consultation request")}>Book a consult</a>
              </p>
            </div>
          </div>
        </section>

        <section className="notes" id="notes">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow gold">The Index</p>
              <h2>Notes on leadership, structure, and trust.</h2>
            </div>
            <div className="notes-grid">
              {notes.map((note) => (
                <article className="note-card" key={note.title}>
                  <p className="note-kicker">{note.kicker}</p>
                  <h3>{note.title}</h3>
                  <p>{note.excerpt}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="container contact-inner">
            <div>
              <p className="eyebrow gold">Begin</p>
              <h2>Bring the complicated thing.</h2>
              <p className="contact-lede">
                A first conversation costs nothing and ends with a
                recommendation, whether or not it points here.
              </p>
            </div>
            <div className="contact-panel">
              <p>
                Tell me the organization, where it is stuck, and what has to be
                true in six months. You will get a written scope and a fixed
                quote.
              </p>
              <a className="button gold wide" href={inquiry("Consultation request")}>
                Book a consult
              </a>
              <p className="contact-email">
                or write directly:{" "}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <img src="/jsco-brand-mark.png" alt="" className="brand-logo" />
            <div>
              <p className="footer-name">JaiSellers Companies</p>
              <p className="footer-tag">Structure where Art can thrive.</p>
            </div>
          </div>
          <nav className="footer-nav" aria-label="Footer navigation">
            <a href="#consulting">JaiSellers Consulting</a>
            <a href="#designs">JaiSellers Designs and Photography</a>
            <a href="#initiatives">Just Systems Initiatives</a>
          </nav>
          <div className="footer-contact">
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            <p>&copy; {new Date().getFullYear()} JaiSellers Companies</p>
          </div>
        </div>
      </footer>
    </>
  );
}
