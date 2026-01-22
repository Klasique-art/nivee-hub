import Image from "next/image";
import { Target, Lightbulb, Heart, TrendingUp } from "lucide-react";

const WhoWeAreSection = () => {
  const values = [
    {
      icon: Target,
      title: "Practical Learning",
      description: "Learn by building real-world projects that prepare you for actual development work, not just theoretical concepts.",
      color: "emerald"
    },
    {
      icon: Lightbulb,
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of experience at top tech companies in Ghana and beyond.",
      color: "blue"
    },
    {
      icon: Heart,
      title: "Community Support",
      description: "Join a vibrant community of learners, get help when stuck, and build lasting professional connections.",
      color: "purple"
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "From beginner to job-ready. Our cohorts are designed to accelerate your journey into tech careers.",
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: {
        bg: "bg-emerald-100",
        text: "text-emerald-600",
        border: "border-emerald-200"
      },
      blue: {
        bg: "bg-blue-100",
        text: "text-blue-600",
        border: "border-blue-200"
      },
      purple: {
        bg: "bg-purple-100",
        text: "text-purple-600",
        border: "border-purple-200"
      },
      orange: {
        bg: "bg-orange-100",
        text: "text-orange-600",
        border: "border-orange-200"
      }
    };
    return colors[color as keyof typeof colors] || colors.emerald;
  };

  return (
    <section className="bg-white px-2 xs:px-4 py-8 xs:py-10 sm:py-14 md:py-16">
      <div className="inner-wrapper">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left: Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Large Image */}
              <div className="col-span-2 relative h-70 sm:h-80 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop"
                  alt="Instructor teaching programming concepts to engaged students in a modern classroom"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Two smaller images */}
              <div className="relative h-45 sm:h-55 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                  alt="Group of diverse students collaborating on a coding project"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative h-45 sm:h-55 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop"
                  alt="Student successfully completing a programming challenge with laptop"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -z-10" aria-hidden="true" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -z-10" aria-hidden="true" />
          </div>

          {/* Right: Content */}
          <div className="space-y-6">
            {/* Section Badge */}
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 normal-text font-medium text-emerald-700">
                About Niveel Hub
              </span>
            </div>

            {/* Heading */}
            <h2 className="big-text-1 font-bold text-slate-900 leading-tight">
              Empowering Ghana&apos;s Next Generation of{" "}
              <span className="text-emerald-600">Software Developers</span>
            </h2>

            {/* Description */}
            <div className="space-y-4">
              <p className="normal-text text-slate-700 leading-relaxed">
                Niveel Hub is Ghana&apos;s premier cohort-based programming education platform. We believe that learning to code is best achieved through structured, interactive sessions with expert instructors and a supportive peer community.
              </p>
              <p className="normal-text text-slate-700 leading-relaxed">
                Unlike traditional online courses where you&apos;re learning alone, our cohort model ensures you progress with a group of motivated peers, get real-time feedback, and build projects that matter.
              </p>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mt-12 sm:mt-16 md:mt-20">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="big-text-2 font-bold text-slate-900 mb-3">
              Why Choose Niveel Hub?
            </h3>
            <p className="normal-text text-slate-600 max-w-2xl mx-auto">
              We&apos;re not just another online course provider. Here&apos;s what makes us different:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              const colors = getColorClasses(value.color);
              
              return (
                <div
                  key={value.title}
                  className="group relative rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:shadow-lg hover:border-slate-300"
                >
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center rounded-xl ${colors.bg} p-3 mb-4`}>
                    <Icon className={`w-6 h-6 ${colors.text}`} aria-hidden="true" />
                  </div>

                  {/* Content */}
                  <h4 className="big-text-5 font-bold text-slate-900 mb-2">
                    {value.title}
                  </h4>
                  <p className="normal-text-2 text-slate-600 leading-relaxed">
                    {value.description}
                  </p>

                  {/* Hover effect border */}
                  <div className={`absolute inset-0 rounded-2xl border-2 ${colors.border} opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`} aria-hidden="true" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;