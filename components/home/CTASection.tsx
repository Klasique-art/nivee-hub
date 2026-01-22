import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { technologies } from "@/data/static.data";

const CTASection = () => {

  const benefits = [
    "Learn with live instructor support",
    "Build portfolio-worthy projects",
    "Join a community of 100+ students",
    "Get career guidance and mentorship",
    "Earn industry-recognized skills",
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: "from-emerald-500 to-emerald-600",
      blue: "from-blue-500 to-blue-600",
      purple: "from-purple-500 to-purple-600",
      orange: "from-orange-500 to-orange-600"
    };
    return colors[color as keyof typeof colors] || colors.emerald;
  };

  return (
    <section className="relative overflow-hidden bg-slate-900 px-2 xs:px-4 py-8 xs:py-10 sm:py-14 md:py-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* linear Overlays */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" aria-hidden="true" />

      <div className="inner-wrapper relative">
        {/* Technologies Grid */}
        <div className="mb-12 sm:mb-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="big-text-2 font-bold text-white mb-3">
              Master In-Demand Technologies
            </h2>
            <p className="normal-text text-slate-300 max-w-2xl mx-auto">
              Choose from our range of specialized programming cohorts
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech) => {
              const Icon = tech.icon;
              const linearClass = getColorClasses(tech.color);

              return (
                <div
                  key={tech.name}
                  className="group relative rounded-2xl bg-slate-800/50 border border-slate-700 p-6 transition-all hover:bg-slate-800 hover:border-slate-600 hover:-translate-y-1"
                >
                  {/* Icon with linear background */}
                  <div className={`inline-flex items-center justify-center rounded-xl bg-linear-to-br ${linearClass} p-3 mb-4 shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>

                  {/* Content */}
                  <h3 className="big-text-5 font-bold text-white mb-2">
                    {tech.name}
                  </h3>
                  <p className="normal-text-2 text-slate-400">
                    {tech.description}
                  </p>

                  {/* Arrow indicator on hover */}
                  <div className="mt-4 flex items-center gap-2 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="small-text font-medium">Explore cohorts</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Main CTA Card */}
        <div className="relative rounded-3xl bg-linear-to-br from-slate-800 to-slate-900 border border-slate-700 overflow-hidden">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-linear-to-br from-emerald-500/10 via-transparent to-blue-500/10" aria-hidden="true" />

          <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12 p-8 sm:p-10 md:p-12">
            {/* Left: Main CTA */}
            <div className="space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 px-4 py-2 normal-text font-medium text-emerald-400 mb-4">
                  Limited Seats Available
                </div>
                <h2 className="big-text-1 font-bold text-white mb-4 leading-tight">
                  Start Your Programming Journey{" "}
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-blue-400">
                    Today
                  </span>
                </h2>
                <p className="big-text-5 text-slate-300 leading-relaxed">
                  Join our next cohort and learn from expert instructors. Spaces are filling up fast!
                </p>
              </div>

              {/* Pricing */}
              <div className="rounded-xl bg-slate-800/50 border border-slate-700 p-2">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="massive-text font-bold text-white">GHC 2,000</span>
                  <span className="normal-text text-slate-400">per year</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col xs:flex-row gap-4">
                <Link
                  href="/courses"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-linear-to-r from-emerald-500 to-emerald-600 px-6 sm:px-8 py-3 sm:py-4 big-text-5 font-semibold text-white shadow-lg shadow-emerald-500/30 transition-all hover:shadow-xl hover:shadow-emerald-500/40 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                  aria-label="View all available cohorts"
                >
                  View All Courses
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </Link>
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-700 border border-slate-600 px-6 sm:px-8 py-3 sm:py-4 big-text-5 font-semibold text-white transition-all hover:bg-slate-600 hover:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                  aria-label="Create your free account"
                >
                  Sign Up
                </Link>
              </div>

              {/* Trust badge */}
              <div className="flex items-center gap-2 pt-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-linear-to-br from-emerald-400 to-blue-500 border-2 border-slate-800"
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Benefits List */}
            <div className="space-y-4">
              <h3 className="big-text-4 font-bold text-white mb-6">
                What You&apos;ll Get:
              </h3>
              <div className="space-y-3">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-3 group"
                  >
                    <div className="shrink-0 mt-0.5">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" aria-hidden="true" />
                    </div>
                    <span className="normal-text text-slate-300 group-hover:text-white transition-colors">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-8 pt-6 border-t border-slate-700 space-y-3">
                <div className="flex items-center justify-between normal-text-2 text-slate-400">
                  <span>Duration:</span>
                  <span className="font-semibold text-white">1 year</span>
                </div>
                <div className="flex items-center justify-between normal-text-2 text-slate-400">
                  <span>Time Commitment:</span>
                  <span className="font-semibold text-white">2 hours/pay</span>
                </div>
                <div className="flex items-center justify-between normal-text-2 text-slate-400">
                  <span>Time Commitment:</span>
                  <span className="font-semibold text-white">2 days/week</span>
                </div>
                <div className="flex items-center justify-between normal-text-2 text-slate-400">
                  <span>Cohort Starts:</span>
                  <span className="font-semibold text-emerald-400">February 20, 2026</span>
                </div>
                <div className="flex items-center justify-between normal-text-2 text-slate-400">
                  <span>Format:</span>
                  <span className="font-semibold text-white">Live + Self-Paced</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;