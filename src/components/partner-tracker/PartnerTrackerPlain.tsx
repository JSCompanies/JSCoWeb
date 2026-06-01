"use client";

import { useEffect, useMemo, useState } from "react";

// ────────────────────────────────────────────────────────────────
// Partner & Intimacy Tracker (plain HTML + Tailwind version)
//
// This implementation avoids external UI component libraries such as
// shadcn/ui. It uses plain HTML elements styled with Tailwind classes
// and includes simple tab switching logic. The functionality remains
// the same: you can add partners, archive/unarchive them, log
// encounters with activities and ratings, and persist everything in
// localStorage. Export and import to JSON are also supported.
// ────────────────────────────────────────────────────────────────

const STORAGE_KEY = "partnerTracker:v1";

const DEFAULT_ACTIVITIES = [
  "Holding hands",
  "Hugging",
  "Kissing (closed-mouth)",
  "Kissing (open-mouth)",
  "Neck touching/kissing",
  "Manual sex (giving)",
  "Manual sex (receiving)",
  "Oral sex (giving)",
  "Oral sex (receiving)",
  "Anal play (giving)",
  "Anal play (receiving)",
  "Affectionate touch without asking",
  "Sexual touch without asking",
  "Public affection",
  "Public sexual touch",
  "Nudity with lights on",
  "Nudity with lights off",
  "Eye contact during intimacy",
  "Talking about each other's body",
  "Sex involving identity or difference",
  "Shaving/trimming pubic hair",
];

// Generate a unique id string
const uid = () => Math.random().toString(36).slice(2) + Date.now().toString(36);

export default function PartnerTrackerPlain() {
  // Partners state and new partner form
  const [partners, setPartners] = useState<any[]>([]);
  const [selectedPartnerId, setSelectedPartnerId] = useState<string | null>(null);
  const [newPartner, setNewPartner] = useState({
    name: "",
    connectionType: "",
    pronouns: "",
    notes: "",
  });

  // Encounter form
  const [encounter, setEncounter] = useState({
    date: "",
    activities: [] as string[],
    rating: "",
    notes: "",
  });

  // Current tab (active, archived, activities)
  const [tab, setTab] = useState<"active" | "archived" | "activities">("active");

  // Load partners from localStorage on mount
  useEffect(() => {
    try {
      const raw = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setPartners(parsed);
      }
    } catch (err) {
      console.warn("Failed to load partner tracker data", err);
    }
  }, []);

  // Save partners to localStorage whenever they change
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(partners));
      }
    } catch (err) {
      console.warn("Failed to save partner tracker data", err);
    }
  }, [partners]);

  // Compute selected partner object
  const selectedPartner = useMemo(
    () => partners.find((p) => p.id === selectedPartnerId) || null,
    [partners, selectedPartnerId],
  );

  // Handler to add new partner
  const addPartner = () => {
    if (!newPartner.name.trim()) return;
    const partner = {
      id: uid(),
      name: newPartner.name.trim(),
      connectionType: newPartner.connectionType.trim(),
      pronouns: newPartner.pronouns.trim(),
      notes: newPartner.notes.trim(),
      encounters: [],
      archived: false,
      createdAt: new Date().toISOString(),
    };
    setPartners((prev) => [partner, ...prev]);
    setNewPartner({ name: "", connectionType: "", pronouns: "", notes: "" });
  };

  // Delete partner
  const deletePartner = (id: string) => {
    setPartners((prev) => prev.filter((p) => p.id !== id));
    if (selectedPartnerId === id) setSelectedPartnerId(null);
  };

  // Update partner fields
  const updatePartner = (id: string, patch: any) => {
    setPartners((prev) => prev.map((p) => (p.id === id ? { ...p, ...patch } : p)));
  };

  // Archive or unarchive partner
  const toggleArchive = (id: string) => {
    const p = partners.find((x) => x.id === id);
    if (!p) return;
    updatePartner(id, { archived: !p.archived });
  };

  // Add encounter to selected partner
  const addEncounter = () => {
    if (!selectedPartner) return;
    if (!encounter.date) return;
    const entry = {
      id: uid(),
      date: encounter.date,
      activities: [...encounter.activities],
      rating: encounter.rating ? Number(encounter.rating) : null,
      notes: encounter.notes.trim(),
      createdAt: new Date().toISOString(),
    };
    updatePartner(selectedPartner.id, { encounters: [entry, ...selectedPartner.encounters] });
    setEncounter({ date: "", activities: [], rating: "", notes: "" });
  };

  // Delete encounter
  const deleteEncounter = (encounterId: string) => {
    if (!selectedPartner) return;
    updatePartner(
      selectedPartner.id,
      { encounters: selectedPartner.encounters.filter((e: any) => e.id !== encounterId) },
    );
  };

  // Toggle activity in encounter form
  const toggleEncounterActivity = (activity: string) => {
    setEncounter((prev) => ({
      ...prev,
      activities: prev.activities.includes(activity)
        ? prev.activities.filter((a) => a !== activity)
        : [...prev.activities, activity],
    }));
  };

  // Export JSON file
  const exportJSON = () => {
    const data = JSON.stringify(partners, null, 2);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `partner-tracker-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Import JSON file
  const importJSON = (file: File | null) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const parsed = JSON.parse(String(e.target?.result || ""));
        if (Array.isArray(parsed)) setPartners(parsed);
      } catch (err) {
        alert("Import failed: invalid JSON file.");
      }
    };
    reader.readAsText(file);
  };

  // Derived lists for active and archived partners
  const activePartners = partners.filter((p) => !p.archived);
  const archivedPartners = partners.filter((p) => p.archived);

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-950 dark:to-neutral-900">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b bg-white/70 dark:bg-neutral-900/70 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 via-rose-500 to-amber-500">
                Partner &amp; Intimacy Tracker
              </span>
            </h1>
            <p className="text-sm text-muted-foreground leading-tight">
              Honoring Stories. Building Systems. Driving Change.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="h-8 px-3 py-1 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 text-sm"
              onClick={exportJSON}
            >
              Export JSON
            </button>
            <label className="cursor-pointer">
              <span className="sr-only">Import JSON</span>
              <input
                type="file"
                accept="application/json"
                onChange={(e) => importJSON(e.target.files?.[0] || null)}
                className="hidden"
              />
              <span className="h-8 px-3 py-1 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 text-sm inline-flex items-center">
                Import JSON
              </span>
            </label>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-6 space-y-6">
        {/* Add Partner Form */}
        <div className="rounded-lg border shadow-sm p-4">
          <div className="mb-3">
            <h2 className="text-xl font-semibold">Add New Partner</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Partner Name or Alias"
              value={newPartner.name}
              onChange={(e) => setNewPartner({ ...newPartner, name: e.target.value })}
              className="h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
            <input
              type="text"
              placeholder="Connection Type (e.g., casual, ongoing, romantic)"
              value={newPartner.connectionType}
              onChange={(e) => setNewPartner({ ...newPartner, connectionType: e.target.value })}
              className="h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
            <input
              type="text"
              placeholder="Pronouns"
              value={newPartner.pronouns}
              onChange={(e) => setNewPartner({ ...newPartner, pronouns: e.target.value })}
              className="h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
            <textarea
              placeholder="Notes on dynamic or energy between you"
              value={newPartner.notes}
              onChange={(e) => setNewPartner({ ...newPartner, notes: e.target.value })}
              className="flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
          </div>
          <div className="pt-4 flex gap-2">
            <button
              onClick={addPartner}
              className="h-8 px-4 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 text-sm"
            >
              Add Partner
            </button>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="flex gap-2 border-b">
          <button
            className={`px-4 py-2 text-sm ${tab === "active" ? "border-b-2 border-primary" : "text-muted-foreground"}`}
            onClick={() => setTab("active")}
          >
            Active
          </button>
          <button
            className={`px-4 py-2 text-sm ${tab === "archived" ? "border-b-2 border-primary" : "text-muted-foreground"}`}
            onClick={() => setTab("archived")}
          >
            Archived
          </button>
          <button
            className={`px-4 py-2 text-sm ${tab === "activities" ? "border-b-2 border-primary" : "text-muted-foreground"}`}
            onClick={() => setTab("activities")}
          >
            Activities
          </button>
        </div>

        {/* Tab Contents */}
        {tab === "active" && (
          <div className="pt-4">
            {activePartners.length === 0 ? (
              <p className="text-sm text-muted-foreground">No partners yet. Add one above.</p>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {activePartners.map((p: any) => (
                  <div
                    key={p.id}
                    onClick={() => setSelectedPartnerId(p.id)}
                    className="rounded-lg border shadow-sm p-4 hover:shadow cursor-pointer transition"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">{p.name}</h3>
                        <p className="text-sm italic text-muted-foreground">{p.connectionType}</p>
                        <p className="text-sm">Pronouns: {p.pronouns || "—"}</p>
                      </div>
                    </div>
                    {p.notes && (
                      <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{p.notes}</p>
                    )}
                    <div className="my-3 border-t"></div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>
                        {p.encounters.length} encounter{p.encounters.length === 1 ? "" : "s"}
                      </span>
                      <div className="flex gap-2">
                        <button
                          className="h-6 px-2 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleArchive(p.id);
                          }}
                        >
                          Archive
                        </button>
                        <button
                          className="h-6 px-2 rounded-md bg-destructive text-destructive-foreground hover:bg-destructive/90 text-xs"
                          onClick={(e) => {
                            e.stopPropagation();
                            deletePartner(p.id);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
        {tab === "archived" && (
          <div className="pt-4">
            {archivedPartners.length === 0 ? (
              <p className="text-sm text-muted-foreground">No archived partners.</p>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {archivedPartners.map((p: any) => (
                  <div
                    key={p.id}
                    onClick={() => setSelectedPartnerId(p.id)}
                    className="rounded-lg border shadow-sm p-4 hover:shadow cursor-pointer transition"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">{p.name}</h3>
                        <p className="text-sm italic text-muted-foreground">{p.connectionType}</p>
                        <p className="text-sm">Pronouns: {p.pronouns || "—"}</p>
                      </div>
                    </div>
                    {p.notes && (
                      <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{p.notes}</p>
                    )}
                    <div className="my-3 border-t"></div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>
                        {p.encounters.length} encounter{p.encounters.length === 1 ? "" : "s"}
                      </span>
                      <div className="flex gap-2">
                        <button
                          className="h-6 px-2 rounded-md border border-input text-xs hover:bg-accent hover:text-accent-foreground"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleArchive(p.id);
                          }}
                        >
                          Unarchive
                        </button>
                        <button
                          className="h-6 px-2 rounded-md bg-destructive text-destructive-foreground hover:bg-destructive/90 text-xs"
                          onClick={(e) => {
                            e.stopPropagation();
                            deletePartner(p.id);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
        {tab === "activities" && (
          <div className="pt-4">
            <div className="rounded-lg border shadow-sm p-4">
              <h3 className="text-xl font-semibold mb-2">Activities Reference List</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {DEFAULT_ACTIVITIES.map((a) => (
                  <label key={a} className="flex items-start gap-2 text-sm py-1">
                    <input type="checkbox" checked readOnly className="mt-0.5" />
                    <span>{a}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Selected Partner Drawer */}
        {selectedPartner && (
          <div className="rounded-lg border-2 border-fuchsia-200/60 dark:border-fuchsia-900/50 shadow-sm p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold mb-1">{selectedPartner.name}</h2>
                <p className="text-sm italic text-muted-foreground mb-2">
                  {selectedPartner.connectionType || "—"}
                </p>
                <p className="text-sm">
                  <span className="font-medium">Pronouns:</span> {selectedPartner.pronouns || "—"}
                </p>
                {selectedPartner.notes && (
                  <p className="mt-2 text-sm text-muted-foreground whitespace-pre-line">
                    {selectedPartner.notes}
                  </p>
                )}
              </div>
              <div className="flex gap-2">
                <button
                  className="h-8 px-3 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 text-sm"
                  onClick={() => toggleArchive(selectedPartner.id)}
                >
                  {selectedPartner.archived ? "Unarchive" : "Archive"}
                </button>
                <button
                  className="h-8 px-3 rounded-md bg-destructive text-destructive-foreground hover:bg-destructive/90 text-sm"
                  onClick={() => deletePartner(selectedPartner.id)}
                >
                  Delete
                </button>
                <button
                  className="h-8 px-3 rounded-md border border-input hover:bg-accent hover:text-accent-foreground text-sm"
                  onClick={() => setSelectedPartnerId(null)}
                >
                  Close
                </button>
              </div>
            </div>
            <div className="my-4 border-t"></div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Log encounter form */}
              <div className="lg:col-span-1">
                <h3 className="text-lg font-semibold mb-2">Log an Encounter</h3>
                <div className="space-y-3">
                  <div>
                    <label className="text-xs">Date</label>
                    <input
                      type="date"
                      value={encounter.date}
                      onChange={(e) => setEncounter((prev) => ({ ...prev, date: e.target.value }))}
                      className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs">Rating (1–10)</label>
                    <input
                      type="number"
                      min={1}
                      max={10}
                      value={encounter.rating}
                      onChange={(e) => setEncounter((prev) => ({ ...prev, rating: e.target.value }))}
                      className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs">Notes</label>
                    <textarea
                      rows={4}
                      placeholder="Vibe, consent check-ins, boundaries affirmed, aftercare…"
                      value={encounter.notes}
                      onChange={(e) => setEncounter((prev) => ({ ...prev, notes: e.target.value }))}
                      className="flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs mb-1 block">Activities</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-56 overflow-auto pr-1">
                      {DEFAULT_ACTIVITIES.map((a) => (
                        <label key={a} className="flex items-start gap-2 text-sm">
                          <input
                            type="checkbox"
                            checked={encounter.activities.includes(a)}
                            onChange={() => toggleEncounterActivity(a)}
                            className="mt-0.5"
                          />
                          <span>{a}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <button
                    className="h-8 px-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 text-sm"
                    onClick={addEncounter}
                  >
                    Add Encounter
                  </button>
                </div>
              </div>
              {/* Encounter history */}
              <div className="lg:col-span-2">
                <h3 className="text-lg font-semibold mb-2">Encounter History</h3>
                {selectedPartner.encounters.length === 0 ? (
                  <p className="text-sm text-muted-foreground">
                    No encounters yet for {selectedPartner.name}.
                  </p>
                ) : (
                  <div className="space-y-3">
                    {selectedPartner.encounters.map((e: any) => (
                      <div key={e.id} className="rounded-lg border shadow-sm p-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="text-sm font-medium">{formatDate(e.date)}</p>
                            {typeof e.rating === "number" && (
                              <p className="text-xs text-muted-foreground">Rating: {e.rating}/10</p>
                            )}
                          </div>
                          <div className="flex gap-2">
                            <button
                              className="h-6 px-2 rounded-md bg-destructive text-destructive-foreground hover:bg-destructive/90 text-xs"
                              onClick={() => deleteEncounter(e.id)}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                        {e.activities?.length ? (
                          <div className="mt-3 text-xs flex flex-wrap gap-2">
                            {e.activities.map((a: string) => (
                              <span
                                key={a}
                                className="px-2 py-1 rounded-full border text-muted-foreground"
                              >
                                {a}
                              </span>
                            ))}
                          </div>
                        ) : null}
                        {e.notes && <p className="mt-3 text-sm whitespace-pre-line">{e.notes}</p>}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </main>
      <footer className="py-8 text-center text-xs text-muted-foreground">
        Built for JaiSellers Companies · Private by default (saved in your browser)
      </footer>
    </div>
  );
}

// Format a date string to a local date representation
function formatDate(isoOrYYYYMMDD: string) {
  if (!isoOrYYYYMMDD) return "—";
  try {
    const d = new Date(isoOrYYYYMMDD);
    if (!isNaN(d.getTime())) return d.toLocaleDateString();
    return isoOrYYYYMMDD;
  } catch {
    return isoOrYYYYMMDD;
  }
}