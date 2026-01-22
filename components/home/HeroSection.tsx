import Image from "next/image";
import Link from "next/link";
import { Code2, Users, Award, ArrowRight } from "lucide-react";

const HeroSection = () => {
    return (
        <section className="relative overflow-hidden bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 px-2 xs:px-4 py-16 xs:py-20 sm:py-24 md:py-28 lg:py-32">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="inner-wrapper relative">
                <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6 sm:space-y-8">

                        {/* Main Heading */}
                        <h1 className="massive-text font-bold text-white leading-tight">
                            Master Programming Through{" "}
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-blue-500">
                                Cohort-Based Learning
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="big-text-5 text-slate-300 leading-relaxed max-w-2xl">
                            Join expert-led programming cohorts and learn web development, mobile apps, data science, and more. Build real projects, collaborate with peers, and get personalized mentorship.
                        </p>

                        {/* Feature Pills */}
                        <div className="flex flex-wrap gap-3 sm:gap-4">
                            <div className="flex items-center gap-2 rounded-lg bg-slate-800/50 border border-slate-700 px-3 sm:px-4 py-2">
                                <Code2 className="w-5 h-5 text-blue-400" aria-hidden="true" />
                                <span className="normal-text text-slate-200 font-medium">
                                    Hands-On Projects
                                </span>
                            </div>
                            <div className="flex items-center gap-2 rounded-lg bg-slate-800/50 border border-slate-700 px-3 sm:px-4 py-2">
                                <Users className="w-5 h-5 text-emerald-400" aria-hidden="true" />
                                <span className="normal-text text-slate-200 font-medium">
                                    Live Instructor Support
                                </span>
                            </div>
                            <div className="flex items-center gap-2 rounded-lg bg-slate-800/50 border border-slate-700 px-3 sm:px-4 py-2">
                                <Award className="w-5 h-5 text-purple-400" aria-hidden="true" />
                                <span className="normal-text text-slate-200 font-medium">
                                    Industry Level Skills
                                </span>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col xs:flex-row gap-4 pt-4">
                            <Link
                                href="/cohorts"
                                className="inline-flex items-center justify-center gap-2 rounded-lg bg-linear-to-r from-emerald-500 to-emerald-600 px-6 sm:px-8 py-3 sm:py-4 big-text-5 font-semibold text-white shadow-lg shadow-emerald-500/30 transition-all hover:shadow-xl hover:shadow-emerald-500/40 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                                aria-label="Browse all programming cohorts"
                            >
                                Browse Courses
                                <ArrowRight className="w-5 h-5" aria-hidden="true" />
                            </Link>
                            <Link
                                href="/register"
                                className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-800 border border-slate-700 px-6 sm:px-8 py-3 sm:py-4 big-text-5 font-semibold text-white transition-all hover:bg-slate-700 hover:border-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                                aria-label="Get started for free"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative lg:h-150 h-100">
                        {/* Main Image */}
                        <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
                            <Image
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                                alt="Students collaborating on programming projects in a modern learning environment"
                                fill
                                priority
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            {/* Overlay linear */}
                            <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent" />
                        </div>

                        {/* Floating Card 1 */}
                        <div className="absolute -bottom-4 -left-4 sm:bottom-8 sm:left-8 rounded-xl bg-white shadow-xl p-2 sm:p-4 max-w-60 border border-slate-200 hidden sm:block">
                            <div className="flex items-start gap-3">
                                <div className="rounded-lg bg-emerald-100 p-2">
                                    <Code2 className="w-6 h-6 text-emerald-600" aria-hidden="true" />
                                </div>
                                <div>
                                    <div className="normal-text font-bold text-slate-900">
                                        Live Coding Sessions
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Card 2 */}
                        <div className="absolute -top-4 -right-4 sm:top-8 sm:right-8 rounded-xl bg-white shadow-xl p-2 sm:p-4 max-w-60 border border-slate-200 hidden md:block">
                            <div className="flex items-start gap-3">
                                <div className="rounded-lg bg-blue-100 p-2">
                                    <Users className="w-6 h-6 text-blue-600" aria-hidden="true" />
                                </div>
                                <div>
                                    <div className="normal-text font-bold text-slate-900">
                                        Peer Collaboration
                                    </div>
                                    <div className="small-text text-slate-600">
                                        Learn with a supportive community
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;