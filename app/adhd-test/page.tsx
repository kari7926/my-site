"use client";

import { useMemo, useState } from "react";

const audiences = [
  { id: "adult", icon: "🧑", label: "Adult (18+)" },
  { id: "teen", icon: "🧒", label: "Teen (13-17)" },
  { id: "child", icon: "👶", label: "Child (6-12)" },
  { id: "parent", icon: "👨‍👩‍👧", label: "Parent / Guardian" },
];

const questions = [
  "How often do you find it hard to finish tasks once the most difficult part is done?",
  "How often do you struggle to organize tasks or activities?",
  "How often do you delay getting started on tasks that require a lot of thought?",
  "How often do you misplace or forget things you need for work, school, or home?",
  "How often do you feel distracted by noises, movement, or thoughts around you?",
  "How often do you find yourself forgetting appointments or planned activities?",
  "How often do you feel restless when expected to stay seated for a long time?",
  "How often do you feel like your mind is always racing from one thought to another?",
  "How often do you interrupt people before they finish speaking?",
  "How often do you lose track of what you were doing in the middle of a task?",
  "How often do you make small mistakes because you rush through details?",
  "How often do you avoid tasks that need steady concentration?",
  "How often do you start several things but finish very few of them?",
  "How often do you have trouble waiting your turn in daily situations?",
  "How often do you feel overwhelmed by planning and prioritizing?",
  "How often do you forget instructions unless they are repeated or written down?",
  "How often do you find it hard to switch attention back after being interrupted?",
  "How often do you feel frustrated by your own focus or self-control?",
];

const answerOptions = [
  { label: "Never", value: 0 },
  { label: "Rarely", value: 1 },
  { label: "Sometimes", value: 2 },
  { label: "Often", value: 3 },
  { label: "Very Often", value: 4 },
];

function BrainIcon({ className = "h-6 w-6" }: { className?: string }) {
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

export default function ADHDTestPage() {
  const [selectedAudience, setSelectedAudience] = useState("adult");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(questions.length).fill(null)
  );
  const [finished, setFinished] = useState(false);

  const progress = finished
    ? 100
    : Math.round(((currentQuestion + 1) / questions.length) * 100);

  const selectedAnswer = answers[currentQuestion];
  const answeredCount = answers.filter((item) => item !== null).length;

  const selectedAudienceLabel = useMemo(() => {
    return audiences.find((item) => item.id === selectedAudience)?.label ?? "Adult (18+)";
  }, [selectedAudience]);

  function chooseAnswer(value: number) {
    const next = [...answers];
    next[currentQuestion] = value;
    setAnswers(next);
  }

  function goNext() {
    if (selectedAnswer === null) return;

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      return;
    }

    setFinished(true);
  }

  function goBack() {
    if (finished) {
      setFinished(false);
      return;
    }

    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  }

  function restartPreview() {
    setFinished(false);
    setCurrentQuestion(0);
    setAnswers(Array(questions.length).fill(null));
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <a href="/" className="flex items-center gap-2 text-lg font-bold text-sky-700">
            <BrainIcon className="h-7 w-7" />
            <span>ADHD Global</span>
          </a>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href="/"
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            >
              Home
            </a>
            <a
              href="/tools"
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            >
              Tools
            </a>
            <a
              href="/resources"
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            >
              Learn
            </a>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-br from-sky-500 via-indigo-600 to-violet-700 px-4 py-14 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 scale-150 rounded-full bg-white/10 blur-2xl" />
              <div className="relative rounded-full border border-white/20 bg-white/15 p-5 backdrop-blur-sm">
                <BrainIcon className="h-14 w-14 text-white" />
              </div>
            </div>
          </div>

          <h1 className="mb-3 text-3xl font-extrabold md:text-5xl">
            ADHD Screening Test
          </h1>

          <p className="mx-auto max-w-2xl text-base text-white/85 md:text-lg">
            Choose an age group, move through the screening flow, and preview the page design.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-8 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          This page is a working design preview. Replace the sample questions with your final validated wording before launch.
        </div>

        <div className="mb-10">
          <h2 className="mb-2 text-2xl font-bold">Choose age group</h2>
          <p className="mb-6 text-sm text-slate-600">
            Select the person who will take or be assessed by this screening flow.
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {audiences.map((item) => {
              const active = selectedAudience === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedAudience(item.id)}
                  className={`flex flex-col items-center gap-3 rounded-xl border-2 p-6 transition-all ${
                    active
                      ? "border-sky-600 bg-sky-50 shadow-md"
                      : "border-slate-200 bg-white hover:border-sky-300"
                  }`}
                >
                  <span className="text-4xl">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {!finished ? (
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <div className="mb-6">
                <div className="mb-2 flex justify-between text-sm text-slate-500">
                  <span>
                    Part A — Question {currentQuestion + 1} of {questions.length}
                  </span>
                  <span>{progress}%</span>
                </div>

                <div className="h-3 w-full overflow-hidden rounded-full bg-slate-200">
                  <div
                    className="h-full rounded-full bg-sky-600 transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <div className="mb-6">
                <div className="mb-3 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                  {selectedAudienceLabel}
                </div>

                <h3 className="mb-3 text-2xl font-bold leading-tight">
                  {questions[currentQuestion]}
                </h3>

                <p className="text-sm text-slate-600">
                  Choose the option that best matches the last 6 months.
                </p>
              </div>

              <div className="space-y-3">
                {answerOptions.map((option) => {
                  const active = selectedAnswer === option.value;

                  return (
                    <button
                      key={option.label}
                      type="button"
                      onClick={() => chooseAnswer(option.value)}
                      className={`flex w-full items-center justify-between rounded-xl border px-4 py-4 text-left transition ${
                        active
                          ? "border-sky-600 bg-sky-50 shadow-sm"
                          : "border-slate-200 bg-white hover:border-sky-300 hover:bg-slate-50"
                      }`}
                    >
                      <span className="font-medium">{option.label}</span>
                      <span className="text-sm text-slate-500">
                        {active ? "Selected" : ""}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-8 flex items-center justify-between">
                <button
                  type="button"
                  onClick={goBack}
                  disabled={currentQuestion === 0}
                  className="rounded-lg border border-slate-300 px-4 py-2 font-medium text-slate-700 transition disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Back
                </button>

                <button
                  type="button"
                  onClick={goNext}
                  disabled={selectedAnswer === null}
                  className="rounded-lg bg-slate-900 px-5 py-2.5 font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {currentQuestion === questions.length - 1 ? "Finish Preview" : "Next Question"}
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h4 className="mb-3 text-lg font-bold">Session summary</h4>
                <div className="space-y-2 text-sm text-slate-600">
                  <p>
                    <span className="font-semibold text-slate-900">Selected group:</span>{" "}
                    {selectedAudienceLabel}
                  </p>
                  <p>
                    <span className="font-semibold text-slate-900">Current step:</span>{" "}
                    Question {currentQuestion + 1} / {questions.length}
                  </p>
                  <p>
                    <span className="font-semibold text-slate-900">Answered:</span>{" "}
                    {answeredCount} / {questions.length}
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h4 className="mb-3 text-lg font-bold">What this page already has</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• age group selection cards</li>
                  <li>• progress bar</li>
                  <li>• 18-question flow shell</li>
                  <li>• selectable answers</li>
                  <li>• finish screen</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h4 className="mb-3 text-lg font-bold">Next upgrade</h4>
                <p className="mb-4 text-sm text-slate-600">
                  After this works, the next natural step is to add a real result screen and score logic.
                </p>
                <a
                  href="/tools"
                  className="inline-block rounded-lg bg-sky-600 px-4 py-2 font-semibold text-white"
                >
                  Explore Tools
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mb-4 text-5xl">✅</div>
              <h2 className="mb-3 text-3xl font-bold">Preview complete</h2>
              <p className="mb-6 text-slate-600">
                You finished the design flow for the ADHD test page.
              </p>

              <div className="mx-auto mb-8 grid max-w-xl gap-4 text-left sm:grid-cols-3">
                <div className="rounded-xl bg-slate-50 p-4">
                  <div className="text-xs uppercase tracking-wide text-slate-500">Audience</div>
                  <div className="mt-1 font-semibold">{selectedAudienceLabel}</div>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <div className="text-xs uppercase tracking-wide text-slate-500">Answered</div>
                  <div className="mt-1 font-semibold">
                    {answeredCount} / {questions.length}
                  </div>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <div className="text-xs uppercase tracking-wide text-slate-500">Progress</div>
                  <div className="mt-1 font-semibold">100%</div>
                </div>
              </div>

              <div className="flex flex-col justify-center gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={restartPreview}
                  className="rounded-lg border border-slate-300 px-5 py-3 font-medium text-slate-700"
                >
                  Restart Preview
                </button>

                <a
                  href="/"
                  className="rounded-lg bg-slate-900 px-5 py-3 font-semibold text-white"
                >
                  Back to Home
                </a>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}