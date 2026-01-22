import { Users, BookOpen, Award, Briefcase, TrendingUp, Star } from "lucide-react";

const StatsSection = () => {
  const mainStats = [
    {
      icon: Users,
      value: "1,200+",
      label: "Active Students",
      description: "Learning programming across Ghana",
      color: "emerald"
    },
    {
      icon: BookOpen,
      value: "24",
      label: "Live Cohorts",
      description: "Running this quarter",
      color: "blue"
    },
    {
      icon: Award,
      value: "850+",
      label: "Certificates Issued",
      description: "Recognized by industry",
      color: "purple"
    },
    {
      icon: Briefcase,
      value: "78%",
      label: "Job Placement Rate",
      description: "Within 6 months of completion",
      color: "orange"
    }
  ];

  const additionalStats = [
    {
      icon: TrendingUp,
      value: "95%",
      label: "Completion Rate",
      detail: "Students who start a cohort finish it"
    },
    {
      icon: Star,
      value: "4.8/5",
      label: "Average Rating",
      detail: "Based on 500+ student reviews"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: {
        bg: "bg-emerald-50",
        iconBg: "bg-emerald-500",
        text: "text-emerald-600",
        border: "border-emerald-200"
      },
      blue: {
        bg: "bg-blue-50",
        iconBg: "bg-blue-500",
        text: "text-blue-600",
        border: "border-blue-200"
      },
      purple: {
        bg: "bg-purple-50",
        iconBg: "bg-purple-500",
        text: "text-purple-600",
        border: "border-purple-200"
      },
      orange: {
        bg: "bg-orange-50",
        iconBg: "bg-orange-500",
        text: "text-orange-600",
        border: "border-orange-200"
      }
    };
    return colors[color as keyof typeof colors] || colors.emerald;
  };

  return (
    <section className="bg-linear-to-br from-slate-50 to-slate-100 px-2 xs:px-4 py-8 xs:py-10 sm:py-14 md:py-16">
      <div className="inner-wrapper">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 normal-text font-medium text-emerald-700 mb-4">
            Our Impact
          </div>
          <h2 className="big-text-1 font-bold text-slate-900 mb-4">
            Transforming Lives Through{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-blue-600">
              Quality Education
            </span>
          </h2>
          <p className="normal-text text-slate-600 max-w-2xl mx-auto">
            See how Niveel Hub is making a difference in Ghana&apos;s tech ecosystem
          </p>
        </div>

        {/* Main Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8 sm:mb-12">
          {mainStats.map((stat) => {
            const Icon = stat.icon;
            const colors = getColorClasses(stat.color);
            
            return (
              <div
                key={stat.label}
                className="group relative rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 transition-all hover:shadow-xl hover:-translate-y-1"
              >
                {/* Background decoration */}
                <div className={`absolute top-0 right-0 w-24 h-24 ${colors.bg} rounded-bl-full opacity-50 z-0`} aria-hidden="true" />

                {/* Icon */}
                <div className={`inline-flex items-center justify-center rounded-xl ${colors.iconBg} p-3 mb-4 shadow-lg relative z-10`}>
                  <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                </div>

                {/* Stats */}
                <div className="relative z-10">
                  <div className="massive-text font-bold text-slate-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="big-text-5 font-semibold text-slate-800 mb-2">
                    {stat.label}
                  </div>
                  <div className="normal-text-2 text-slate-600">
                    {stat.description}
                  </div>
                </div>

                {/* Hover border effect */}
                <div className={`absolute inset-0 rounded-2xl border-2 ${colors.border} opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`} aria-hidden="true" />
              </div>
            );
          })}
        </div>

        {/* Additional Stats Bar */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {additionalStats.map((stat) => {
            const Icon = stat.icon;
            
            return (
              <div
                key={stat.label}
                className="flex items-center gap-4 rounded-xl bg-white border border-slate-200 p-6 shadow-md"
              >
                <div className="shrink-0 rounded-lg bg-linear-to-br from-emerald-500 to-blue-500 p-3 shadow-lg">
                  <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <div className="big-text-3 font-bold text-slate-900">
                    {stat.value}
                  </div>
                  <div className="normal-text font-semibold text-slate-800">
                    {stat.label}
                  </div>
                  <div className="small-text text-slate-600">
                    {stat.detail}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Testimonial Quote */}
        <div className="mt-12 sm:mt-16 max-w-3xl mx-auto">
          <div className="relative rounded-2xl bg-linear-to-r from-emerald-500 to-blue-500 p-8 sm:p-10 text-white shadow-2xl">
            {/* Quote marks */}
            <div className="absolute top-4 left-4 text-6xl font-serif opacity-20" aria-hidden="true">
              &ldquo;
            </div>

            <blockquote className="relative z-10">
              <p className="big-text-5 font-medium mb-6 leading-relaxed">
                Niveel Hub transformed my career. I went from knowing basic HTML to landing a full-stack developer role at a top tech company in Accra. The cohort structure kept me accountable, and the instructors were amazing!
              </p>
              <footer className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="normal-text font-bold">KM</span>
                </div>
                <div>
                  <cite className="normal-text font-semibold not-italic">Kwame Mensah</cite>
                  <p className="small-text opacity-90">Full-Stack Developer, Accra</p>
                </div>
              </footer>
            </blockquote>

            {/* Decorative elements */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl" aria-hidden="true" />
          </div>
        </div>

        {/* Partner Logos Section */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="normal-text-2 text-slate-600 mb-6">
            Our graduates work at leading companies including:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60 grayscale">
            {/* Placeholder for company logos - replace with actual logos */}
            <div className="normal-text font-semibold text-slate-700">Microsoft</div>
            <div className="normal-text font-semibold text-slate-700">Google</div>
            <div className="normal-text font-semibold text-slate-700">MTN</div>
            <div className="normal-text font-semibold text-slate-700">Vodafone</div>
            <div className="normal-text font-semibold text-slate-700">Ecobank</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;