export const metadata = {
  title: "ADHD Global — Free ADHD Screening & Management Tools",
  description:
    "Take a free, research-based ADHD screening test. Explore focus tools, calming music, and daily check-ins — designed specifically for ADHD brains.",
};

const toolCards = [
  {
    emoji: "🎯",
    title: "ADHD Focus Timer",
    description:
      "15-minute focus cycles proven to work for ADHD brains. Visual countdown + break reminders.",
    button: "Start Focusing →",
    bg: "bg-blue-50",
    buttonBg: "bg-blue-500 hover:bg-blue-600",
  },
  {
    emoji: "🎵",
    title: "Focus Music",
    description:
      "Binaural beats, lo-fi, and brown noise — scientifically backed sounds for ADHD concentration.",
    button: "Play Music →",
    bg: "bg-teal-50",
    buttonBg: "bg-teal-500 hover:bg-teal-600",
  },
  {
    emoji: "😊",
    title: "Daily Check-In",
    description:
      "30-second daily mood & energy check-in. Understand your ADHD patterns over time.",
    button: "Check In Today →",
    bg: "bg-purple-50",
    buttonBg: "bg-purple-500 hover:bg-purple-600",
  },
];

const hubCards = [
  {
    icon: "📋",
    title: "Screening Test",
    description:
      "Take the clinically-validated ASRS v1.1 questionnaire to assess your ADHD risk level.",
    href: "/adhd-test",
  },
  {
    icon: "📘",
    title: "Education Hub",
    description:
      "Access comprehensive resources about ADHD symptoms, treatments, and daily management tips.",
    href: "/resources",
  },
  {
    icon: "🧑‍⚕️",
    title: "Find a Specialist",
    description:
      "Connect with psychiatrists, psychologists, and ADHD coaches in your area.",
    href: "/resources",
  },
  {
    icon: "👥",
    title: "Community Forum",
    description:
      "Join discussions with others navigating ADHD. Share experiences and support each other.",
    href: "/resources",
  },
];

const evidenceCards = [
  { emoji: "🛡️", label: "WHO Guidelines" },
  { emoji: "🧪", label: "Peer-Reviewed Research" },
  { emoji: "🔒", label: "Privacy Protected" },
];

const roleOptions = [
  "Adult with ADHD",
  "Parent of a child with ADHD",
  "Teen with ADHD",
  "Just curious",
];

const challengeOptions = [
  "Focus & attention",
  "Hyperactivity",
  "Emotions",
  "Daily management",
  "Work & school",
];

function BrainIcon({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
      <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
      <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
      <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
      <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
      <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
      <path d="M6 18a4 4 0 0 1-1.967-.516" />
      <path d="M19.967 17.484A4 4 0 0 1 18 18" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 pb-24 lg:pb-0">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <a
            href="/"
            className="flex items-center gap-2 text-xl font-bold text-sky-700 shrink-0"
          >
            <BrainIcon className="h-7 w-7" />
            <span>ADHD Global</span>
          </a>

          <nav className="mx-auto hidden items-center gap-1 lg:flex">
            <a
              href="/"
              className="rounded-md bg-slate-100 px-3 py-2 text-sm font-medium text-slate-900 shadow-sm"
            >
              Home
            </a>
            <a
              href="/adhd-test"
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
            >
              Screening Test
            </a>
            <a
              href="/resources"
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
            >
              Learn
            </a>
            <a
              href="/resources"
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
            >
              Find a Specialist
            </a>
            <a
              href="/resources"
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
            >
              Community
            </a>
            <a
              href="/tools"
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
            >
              Tools
            </a>
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-md text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
            >
              ☀️
            </button>

            <button
              type="button"
              className="rounded-md px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-100"
            >
              🌐 English
            </button>

            <a
              href="/resources"
              className="rounded-md px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
            >
              Log In
            </a>

            <a
              href="/resources"
              className="rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Sign Up
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-slate-600 transition hover:bg-slate-100 lg:hidden"
          >
            ☰
          </button>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-sky-500 via-indigo-600 to-violet-700">
        <div className="absolute left-0 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full bg-white/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 py-24 text-center md:py-32">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 scale-150 rounded-full bg-white/10 blur-2xl" />
              <div className="relative rounded-full border border-white/20 bg-white/15 p-6 shadow-2xl backdrop-blur-sm">
                <BrainIcon className="h-16 w-16 text-white md:h-20 md:w-20" />
              </div>
            </div>
          </div>

          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-7xl">
            Do you have ADHD?
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/85 md:text-xl">
            A reliable test based on the latest research data
          </p>

          <div className="mb-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/adhd-test"
              className="rounded-lg bg-white px-10 py-4 text-lg font-semibold text-slate-900 shadow-lg shadow-black/20 transition hover:scale-[1.01]"
            >
              Take the Free Screening
            </a>

            <a
              href="/resources"
              className="rounded-lg border border-white/30 bg-white/10 px-10 py-4 text-lg font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              Learn About ADHD
            </a>
          </div>

          <div className="mb-10 flex flex-col items-center gap-4">
            <div className="h-px w-24 bg-white/30" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">
              ADHD Management Tools
            </span>

            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="/tools"
                className="rounded-full border border-white/25 bg-white/15 px-5 py-2.5 text-sm font-semibold text-white shadow-sm backdrop-blur-sm transition hover:bg-white/25"
              >
                🎯 Focus Timer
              </a>
              <a
                href="/tools"
                className="rounded-full border border-white/25 bg-white/15 px-5 py-2.5 text-sm font-semibold text-white shadow-sm backdrop-blur-sm transition hover:bg-white/25"
              >
                🎵 Focus Music
              </a>
              <a
                href="/tools"
                className="rounded-full border border-white/25 bg-white/15 px-5 py-2.5 text-sm font-semibold text-white shadow-sm backdrop-blur-sm transition hover:bg-white/25"
              >
                😊 Daily Check-In
              </a>
            </div>

            <p className="max-w-md text-center text-xs text-white/70">
              Proven tools for focus, calm, and self-understanding — built for ADHD brains.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-3 text-white/80 sm:flex-row">
            <div className="flex -space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white/30 bg-white/20 text-xs">
                🛡️
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white/30 bg-white/20 text-xs">
                👥
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white/30 bg-white/20 text-xs">
                🧪
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white/30 bg-white/20 text-xs">
                🧠
              </div>
            </div>

            <span className="text-sm font-medium">
              A reliable test based on the latest research data
            </span>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-extrabold md:text-4xl">
              Tools to Help You Thrive with ADHD
            </h2>
            <p className="mx-auto max-w-xl text-base text-slate-600 md:text-lg">
              Free tools designed for ADHD brains — no sign-up required
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {toolCards.map((card) => (
              <div
                key={card.title}
                className={`rounded-2xl ${card.bg} p-8 shadow-md transition hover:-translate-y-1 hover:shadow-xl`}
              >
                <div className="mb-4 text-5xl">{card.emoji}</div>
                <h3 className="mb-2 text-xl font-bold">{card.title}</h3>
                <p className="mb-6 text-sm leading-relaxed text-slate-600">
                  {card.description}
                </p>
                <a
                  href="/tools"
                  className={`inline-block rounded-lg px-6 py-3 font-semibold text-white transition ${card.buttonBg}`}
                >
                  {card.button}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-12">
        <div className="mx-auto max-w-5xl rounded-2xl border border-sky-200 bg-white p-6 shadow-sm md:p-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-lg bg-sky-100 p-2 text-xl">✨</div>
            <h3 className="text-xl font-bold md:text-2xl">Recommended for You</h3>
          </div>

          <div className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-semibold">
                Who are you? <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {roleOptions.map((label) => (
                  <button
                    key={label}
                    type="button"
                    className="rounded-md border border-slate-200 px-3 py-2 text-xs font-medium transition hover:border-sky-500 hover:text-sky-600"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Main challenge <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {challengeOptions.map((label) => (
                  <button
                    key={label}
                    type="button"
                    className="rounded-md border border-slate-200 px-3 py-2 text-xs font-medium transition hover:border-sky-500 hover:text-sky-600"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-600">
                Anything else? (optional)
              </label>
              <input
                className="w-full rounded-md border border-slate-200 px-3 py-2 outline-none transition focus:border-sky-500"
                placeholder="e.g., recently diagnosed, looking for coping strategies..."
              />
              <p className="mt-1 text-right text-xs text-slate-500">0/100</p>
            </div>

            <button
              type="button"
              className="w-full rounded-md bg-slate-800 px-4 py-3 font-semibold text-white transition hover:bg-slate-700"
            >
              Get My Recommendations
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {hubCards.map((card) => (
            <a
              key={card.title}
              href={card.href}
              className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-2xl">
                {card.icon}
              </div>
              <h3 className="mb-3 text-lg font-semibold transition group-hover:text-sky-700">
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                {card.description}
              </p>
              <div className="mt-4 text-sm font-medium text-sky-700 opacity-0 transition group-hover:opacity-100">
                →
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-slate-100 px-6 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-8 text-2xl font-bold">Evidence-Based & Trusted</h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {evidenceCards.map((item) => (
              <div key={item.label} className="rounded-xl border bg-white p-6 shadow-sm">
                <div className="mb-3 text-3xl">{item.emoji}</div>
                <div className="font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-slate-200 bg-white px-6 py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-6 text-center sm:flex-row">
          <div className="flex items-center gap-2 text-slate-600">
            <span className="text-sky-700">👥</span>
            <span className="text-sm font-medium">
              Total Visits: <span className="text-lg font-bold text-slate-900">400</span>
            </span>
          </div>

          <div className="hidden h-6 w-px bg-slate-200 sm:block" />

          <div className="text-sm font-medium text-slate-600">
            Unique Visitors:{" "}
            <span className="text-lg font-bold text-slate-900">178</span>
          </div>
        </div>
      </div>

      <div className="fixed bottom-24 right-4 z-40 hidden md:block">
        <div className="w-64 rounded-xl border border-slate-200 bg-white p-4 shadow-lg">
          <div className="flex items-center gap-3">
            <a href="/tools" className="flex flex-1 items-center gap-3">
              <div className="rounded-full bg-sky-100 p-2 text-lg">😊</div>
              <div>
                <p className="text-sm font-semibold text-slate-900">How are you today? 😊</p>
                <p className="text-xs text-slate-500">Quick daily check-in</p>
              </div>
            </a>
            <button type="button" className="p-1 text-slate-400">
              ✕
            </button>
          </div>
        </div>
      </div>

      <div className="fixed bottom-20 right-4 z-40 lg:hidden">
        <a
          href="/adhd-test"
          className="rounded-full bg-slate-900 px-6 py-4 text-base font-semibold text-white shadow-lg"
        >
          Screening Test
        </a>
      </div>

      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white/95 backdrop-blur lg:hidden">
        <div className="flex h-16 items-center justify-around">
          <a
            href="/"
            className="flex flex-col items-center justify-center gap-1 text-xs font-medium text-slate-900"
          >
            <span>🏠</span>
            <span>Home</span>
          </a>
          <a
            href="/adhd-test"
            className="flex flex-col items-center justify-center gap-1 text-xs font-medium text-slate-500"
          >
            <span>📋</span>
            <span>Screening</span>
          </a>
          <a
            href="/tools"
            className="flex flex-col items-center justify-center gap-1 text-xs font-medium text-slate-500"
          >
            <span>⏱️</span>
            <span>Focus Timer</span>
          </a>
          <a
            href="/resources"
            className="flex flex-col items-center justify-center gap-1 text-xs font-medium text-slate-500"
          >
            <span>📘</span>
            <span>Learn</span>
          </a>
          <a
            href="/resources"
            className="flex flex-col items-center justify-center gap-1 text-xs font-medium text-slate-500"
          >
            <span>👥</span>
            <span>Community</span>
          </a>
        </div>
      </nav>

      <footer className="hidden border-t bg-slate-100 lg:block">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <a
                href="/"
                className="mb-3 flex items-center gap-2 text-lg font-bold text-slate-900"
              >
                <BrainIcon className="h-6 w-6" />
                <span>ADHD Global</span>
              </a>
              <p className="text-sm text-slate-600">
                Empowering people worldwide to understand and manage ADHD.
              </p>
            </div>

            <div>
              <h4 className="mb-3 font-semibold text-slate-900">Resources</h4>
              <div className="flex flex-col gap-2 text-sm text-slate-600">
                <a href="/adhd-test" className="hover:text-slate-900">
                  Screening Test
                </a>
                <a href="/resources" className="hover:text-slate-900">
                  Learn
                </a>
                <a href="/resources" className="hover:text-slate-900">
                  Find a Specialist
                </a>
                <a href="/tools" className="hover:text-slate-900">
                  Focus Timer
                </a>
                <a href="/tools" className="hover:text-slate-900">
                  Music
                </a>
                <a href="/tools" className="hover:text-slate-900">
                  Daily Check-In
                </a>
              </div>
            </div>

            <div>
              <h4 className="mb-3 font-semibold text-slate-900">About</h4>
              <div className="flex flex-col gap-2 text-sm text-slate-600">
                <a href="/resources" className="hover:text-slate-900">
                  Privacy Policy
                </a>
                <a href="/resources" className="hover:text-slate-900">
                  Terms of Service
                </a>
                <a href="/resources" className="hover:text-slate-900">
                  Contact
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-slate-200 pt-8 text-center text-sm text-slate-500">
            © 2026 ADHD Global. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}