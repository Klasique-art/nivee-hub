import React, { forwardRef } from "react";

type Props = {
    sectionStyles?: string;
    containerStyles?: string;
    title?: string;
    subtitle?: string;
    children: React.ReactNode;
    ariaLabelledby?: string | undefined;
    titleId?: string;
};

const Section = forwardRef<HTMLElement, Props>(
    (
        { sectionStyles, containerStyles, title, subtitle, children, ariaLabelledby, titleId },
        ref
    ) => {
        return (
            <section
                ref={ref} // ✅ now works!
                className={`${sectionStyles} py-20 bg-white dark:bg-slate-900`}
                aria-labelledby={ariaLabelledby ? ariaLabelledby : undefined}
            >
                <div className="inner-wrapper">
                    {/* Section Header */}
                    {title && (
                        <div
                            className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${containerStyles}`}
                        >
                            <h2
                                id={titleId}
                                className="mb-4 uppercase font-bold text-slate-900 dark:text-white big-text-2"
                            >
                                {title}
                            </h2>
                            <p className="big-text-5 text-slate-600 dark:text-slate-400 leading-relaxed">
                                {subtitle}
                            </p>
                        </div>
                    )}

                    <div>{children}</div>
                </div>
            </section>
        );
    }
);

Section.displayName = "Section"; // 👈 helps React DevTools

export default Section;
