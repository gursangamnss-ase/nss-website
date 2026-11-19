"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import careerJobsData from "@/data/careerJobsData";

function ChevronDownIcon({ className = "h-4 w-4" }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="M6 9l6 6 6-6" />
        </svg>
    );
}

export default function CareerApplicationSection() {
    const shouldReduceMotion = useReducedMotion();
    const positionSelectRef = useRef(null);
    const [isPositionHighlighted, setIsPositionHighlighted] = useState(false);

    const [formData, setFormData] = useState({
        applyPosition: "",
        experience: "",
        contactTiming: "Anytime during business hours",
        name: "",
        email: "",
        phone: "",
        gender: "",
        country: "",
        state: "",
        city: "",
        cv: null,
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Listen for "Apply for this position" event from modal / job openings
    useEffect(() => {
        const handleJobSelection = (event) => {
            const jobTitle = event.detail?.jobTitle;
            if (jobTitle) {
                setFormData((previous) => ({
                    ...previous,
                    applyPosition: jobTitle,
                }));
                setError("");

                // Smooth scroll to application form
                const section = document.getElementById("application");
                if (section) {
                    section.scrollIntoView({ behavior: "smooth", block: "start" });
                }

                // Temporary highlight ring effect
                setIsPositionHighlighted(true);
                setTimeout(() => setIsPositionHighlighted(false), 2400);

                // Focus select dropdown
                setTimeout(() => {
                    positionSelectRef.current?.focus();
                }, 450);
            }
        };

        window.addEventListener("nss:apply-job", handleJobSelection);

        // Also check URL parameters on initial load (?position=... or ?job=...)
        if (typeof window !== "undefined") {
            const params = new URLSearchParams(window.location.search);
            const paramPosition = params.get("position") || params.get("job");
            if (paramPosition) {
                setFormData((previous) => ({
                    ...previous,
                    applyPosition: paramPosition,
                }));
            }
        }

        return () => {
            window.removeEventListener("nss:apply-job", handleJobSelection);
        };
    }, []);

    const handleChange = (event) => {
        const { name, value, files } = event.target;

        setError("");
        setSuccess("");

        if (files) {
            const file = files[0];

            if (!file) return;

            // 1 MB validation
            if (file.size > 1024 * 1024) {
                setError("CV must be less than 1 MB.");
                return;
            }

            // File type validation
            const allowedTypes = [
                "application/pdf",
                "application/msword",
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            ];

            if (!allowedTypes.includes(file.type)) {
                setError("Please upload a PDF, DOC, or DOCX file.");
                return;
            }

            setFormData((previous) => ({
                ...previous,
                [name]: file,
            }));

            return;
        }

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        setError("");
        setSuccess("");

        if (!formData.applyPosition) {
            setError("Please select the position you are applying for.");
            return;
        }

        if (!formData.experience) {
            setError("Please select your total experience.");
            return;
        }

        if (!formData.contactTiming) {
            setError("Please select your preferred contact timing.");
            return;
        }

        if (!formData.name.trim()) {
            setError("Please enter your name.");
            return;
        }

        if (!formData.email.trim()) {
            setError("Please enter your email address.");
            return;
        }

        if (!formData.phone.trim()) {
            setError("Please enter your phone number.");
            return;
        }

        if (!formData.gender) {
            setError("Please select your gender.");
            return;
        }

        if (!formData.country.trim()) {
            setError("Please enter your country.");
            return;
        }

        if (!formData.state.trim()) {
            setError("Please enter your state.");
            return;
        }

        if (!formData.city.trim()) {
            setError("Please enter your city.");
            return;
        }

        if (!formData.cv) {
            setError("Please upload your CV.");
            return;
        }

        if (formData.cv.size > 1024 * 1024) {
            setError("CV must be less than 1 MB.");
            return;
        }

        try {
            setIsSubmitting(true);

            /*
             * Connect backend API here when ready.
             */
            await new Promise((resolve) => setTimeout(resolve, 900));

            setSuccess(
                "Your application has been submitted successfully."
            );

            setFormData({
                applyPosition: "",
                experience: "",
                contactTiming: "Anytime during business hours",
                name: "",
                email: "",
                phone: "",
                gender: "",
                country: "",
                state: "",
                city: "",
                cv: null,
            });
        } catch (submitError) {
            setError(
                "Something went wrong while submitting your application. Please try again."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    const benefits = [
        {
            id: 1,
            title: "Grow With Us",
            description:
                "Work on meaningful projects while continuously developing your technical and professional skills.",
            icon: (
                <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                >
                    <path d="M3 17l6-6 4 4 7-8" />
                    <path d="M14 7h6v6" />
                </svg>
            ),
        },
        {
            id: 2,
            title: "Keep Learning",
            description:
                "Learn through real-world work, collaboration, experimentation, and exposure to modern technologies.",
            icon: (
                <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                >
                    <rect x="3" y="4" width="18" height="13" rx="1.5" />
                    <path d="M2 20h20" />
                    <path d="M8 20l1-3h6l1 3" />
                </svg>
            ),
        },
        {
            id: 3,
            title: "Build Your Future",
            description:
                "Bring your ideas to life and build a career around creativity, responsibility, and continuous growth.",
            icon: (
                <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                >
                    <path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 18.2l-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3z" />
                </svg>
            ),
        },
    ];

    return (
        <Section
            id="application"
            spacing="none"
            background="dark"
            className="relative overflow-hidden py-20 sm:py-24 lg:py-32"
        >
            {/* =========================================================
                BACKGROUND
            ========================================================== */}

            <div
                className="pointer-events-none absolute inset-0 overflow-hidden"
                aria-hidden="true"
            >
                {/* Base dark background */}
                <div className="absolute inset-0 bg-[#090a0c]" />

                {/* Background Image */}
                <motion.div
                    initial={false}
                    animate={
                        shouldReduceMotion
                            ? {}
                            : {
                                  scale: [1, 1.035, 1],
                                  x: [0, 8, 0],
                                  y: [0, -4, 0],
                              }
                    }
                    transition={
                        shouldReduceMotion
                            ? {}
                            : {
                                  duration: 18,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                              }
                    }
                    className="absolute inset-[-3%] will-change-transform"
                >
                    <Image
                        src="/career/career-application-back.webp"
                        alt=""
                        fill
                        loading="lazy"
                        sizes="100vw"
                        className="object-cover object-center opacity-[0.52]"
                    />
                </motion.div>

                {/* Soft dark overlay */}
                <div className="absolute inset-0 bg-black/30" />

                {/* Gradient for text readability */}
                <div
                    className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/55"
                />

                {/* Very subtle floating glow */}
                <motion.div
                    initial={false}
                    animate={
                        shouldReduceMotion
                            ? {}
                            : {
                                  x: [0, 35, -20, 0],
                                  y: [0, -20, 25, 0],
                              }
                    }
                    transition={
                        shouldReduceMotion
                            ? {}
                            : {
                                  duration: 24,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                              }
                    }
                    className="absolute -left-48 top-[15%] h-[420px] w-[420px] rounded-full bg-white/[0.025] blur-[120px] will-change-transform"
                />
            </div>

            {/* =========================================================
                CONTENT
            ========================================================== */}

            <Container
                size="2xl"
                className="relative z-10"
            >
                {/* =====================================================
                    HEADER
                ====================================================== */}

                <motion.div
                    initial={
                        shouldReduceMotion
                            ? false
                            : {
                                  opacity: 0,
                                  y: 25,
                              }
                    }
                    whileInView={
                        shouldReduceMotion
                            ? {}
                            : {
                                  opacity: 1,
                                  y: 0,
                              }
                    }
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                    transition={{
                        duration: 0.7,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mx-auto max-w-4xl text-center"
                >
                    {/* Small Label */}

                    <div
                        className="flex items-center justify-center gap-2 text-sm font-medium tracking-[0.02em] text-white/75"
                    >
                        <span
                            className="text-white"
                            aria-hidden="true"
                        >
                            +
                        </span>

                        <span>
                            Join Our Team
                        </span>
                    </div>

                    {/* Heading */}

                    <h2
                        className="mt-5 text-[clamp(2.5rem,6.5vw,4.5rem)] font-medium leading-[0.88] tracking-[-0.055em] text-white"
                    >
                        Start Your

                        <span
                            className="block font-script mt-8 text-[clamp(2.5rem,6.5vw,4.5rem)] font-normal leading-[0.75] tracking-[-0.02em] text-white/90"
                        >
                            Journey
                        </span>
                    </h2>

                    {/* Description */}

                    <p
                        className="mx-auto mt-7 max-w-2xl text-sm leading-6 text-white/65 sm:text-base sm:leading-7"
                    >
                        Tell us about yourself and explore an opportunity
                        to grow, learn, create, and build your future with
                        NetSquare Softwares.
                    </p>
                </motion.div>

                {/* =====================================================
                    APPLICATION CARD
                ====================================================== */}

                <motion.div
                    initial={
                        shouldReduceMotion
                            ? false
                            : {
                                  opacity: 0,
                                  y: 35,
                              }
                    }
                    whileInView={
                        shouldReduceMotion
                            ? {}
                            : {
                                  opacity: 1,
                                  y: 0,
                              }
                    }
                    viewport={{
                        once: true,
                        amount: 0.12,
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 0.08,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mt-12 overflow-hidden rounded-[28px] border border-white/15 bg-white shadow-[0_30px_100px_rgba(0,0,0,0.30)] sm:mt-16 sm:rounded-[36px] lg:mt-20"
                >
                    <div
                        className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.65fr)_minmax(300px,0.75fr)]"
                    >
                        {/* =================================================
                            FORM
                        ================================================== */}

                        <div
                            className="p-6 sm:p-8 lg:p-10 xl:p-12"
                        >
                            {/* Form Heading */}

                            <div>
                                <div
                                    className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-black/45"
                                >
                                    <span
                                        className="h-2 w-2 rounded-full bg-black"
                                    />

                                    Application Form
                                </div>

                                <h3
                                    className="text-2xl font-semibold tracking-[-0.035em] text-black sm:text-3xl"
                                >
                                    Apply for an Opportunity
                                </h3>

                                <p
                                    className="mt-2 max-w-xl text-sm leading-relaxed text-[#5b5b5b] sm:text-base"
                                >
                                    Apply for open positions, internships, or career opportunities at NetSquare Softwares.
                                </p>
                            </div>

                            {/* Error */}

                            {error && (
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: -8,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    className="mt-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600"
                                >
                                    {error}
                                </motion.div>
                            )}

                            {/* Success */}

                            {success && (
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: -8,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    className="mt-6 rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700"
                                >
                                    {success}
                                </motion.div>
                            )}

                            {/* FORM */}

                            <form
                                onSubmit={handleSubmit}
                                className="mt-8"
                            >
                                {/* =================================================
                                    ROW 1: OPEN POSITION & TOTAL EXPERIENCE
                                ================================================== */}

                                <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
                                    {/* Applying For Position */}
                                    <div>
                                        <label
                                            htmlFor="applyPosition"
                                            className="mb-2 block text-sm font-semibold text-black"
                                        >
                                            Applying For Position
                                            <span className="ml-1 text-red-500">
                                                *
                                            </span>
                                        </label>

                                        <div className="relative">
                                            <select
                                                id="applyPosition"
                                                name="applyPosition"
                                                ref={positionSelectRef}
                                                value={formData.applyPosition}
                                                onChange={handleChange}
                                                className={`h-12 w-full appearance-none rounded-full border bg-white px-5 pr-11 text-sm text-black outline-none transition-all duration-300 focus:border-black focus:ring-4 focus:ring-black/[0.05] ${
                                                    isPositionHighlighted
                                                        ? "border-black ring-4 ring-black/15 shadow-[0_0_20px_rgba(0,0,0,0.12)]"
                                                        : "border-black/15"
                                                } ${!formData.applyPosition ? "text-black/45" : "text-black font-medium"}`}
                                            >
                                                <option value="" disabled>
                                                    Select an open position
                                                </option>
                                                {careerJobsData.map((job) => (
                                                    <option
                                                        key={job.id}
                                                        value={job.title}
                                                        className="text-black"
                                                    >
                                                        {job.title} ({job.category})
                                                    </option>
                                                ))}
                                                <option
                                                    value="Internship / Industrial Training"
                                                    className="text-black"
                                                >
                                                    Internship / Industrial Training
                                                </option>
                                                <option
                                                    value="Other / General Application"
                                                    className="text-black"
                                                >
                                                    Other / General Application
                                                </option>
                                            </select>

                                            <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-black/45">
                                                <ChevronDownIcon />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Total Experience */}
                                    <div>
                                        <label
                                            htmlFor="experience"
                                            className="mb-2 block text-sm font-semibold text-black"
                                        >
                                            Total Experience
                                            <span className="ml-1 text-red-500">
                                                *
                                            </span>
                                        </label>

                                        <div className="relative">
                                            <select
                                                id="experience"
                                                name="experience"
                                                value={formData.experience}
                                                onChange={handleChange}
                                                className={`h-12 w-full appearance-none rounded-full border border-black/15 bg-white px-5 pr-11 text-sm outline-none transition-all duration-300 focus:border-black focus:ring-4 focus:ring-black/[0.05] ${
                                                    !formData.experience
                                                        ? "text-black/45"
                                                        : "text-black font-medium"
                                                }`}
                                            >
                                                <option value="" disabled>
                                                    Select total experience
                                                </option>
                                                <option
                                                    value="Fresher / Entry Level (< 1 Year)"
                                                    className="text-black"
                                                >
                                                    Fresher / Entry Level (&lt; 1 Year)
                                                </option>
                                                <option
                                                    value="1 – 2 Years"
                                                    className="text-black"
                                                >
                                                    1 – 2 Years
                                                </option>
                                                <option
                                                    value="3 – 5 Years"
                                                    className="text-black"
                                                >
                                                    3 – 5 Years
                                                </option>
                                                <option
                                                    value="5+ Years"
                                                    className="text-black"
                                                >
                                                    5+ Years
                                                </option>
                                            </select>

                                            <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-black/45">
                                                <ChevronDownIcon />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* =================================================
                                    ROW 2: CONTACT TIMING & GENDER
                                ================================================== */}

                                <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
                                    {/* Preferred Contact Timing */}
                                    <div>
                                        <label
                                            htmlFor="contactTiming"
                                            className="mb-2 block text-sm font-semibold text-black"
                                        >
                                            Preferred Contact Timing
                                            <span className="ml-1 text-red-500">
                                                *
                                            </span>
                                        </label>

                                        <div className="relative">
                                            <select
                                                id="contactTiming"
                                                name="contactTiming"
                                                value={formData.contactTiming}
                                                onChange={handleChange}
                                                className="h-12 w-full appearance-none rounded-full border border-black/15 bg-white px-5 pr-11 text-sm font-medium text-black outline-none transition-all duration-300 focus:border-black focus:ring-4 focus:ring-black/[0.05]"
                                            >
                                                <option
                                                    value="Anytime during business hours"
                                                    className="text-black"
                                                >
                                                    Anytime during business hours
                                                </option>
                                                <option
                                                    value="Morning (9:00 AM – 12:00 PM)"
                                                    className="text-black"
                                                >
                                                    Morning (9:00 AM – 12:00 PM)
                                                </option>
                                                <option
                                                    value="Afternoon (12:00 PM – 4:00 PM)"
                                                    className="text-black"
                                                >
                                                    Afternoon (12:00 PM – 4:00 PM)
                                                </option>
                                                <option
                                                    value="Evening (4:00 PM – 7:00 PM)"
                                                    className="text-black"
                                                >
                                                    Evening (4:00 PM – 7:00 PM)
                                                </option>
                                            </select>

                                            <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-black/45">
                                                <ChevronDownIcon />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Gender */}
                                    <fieldset>
                                        <legend
                                            className="mb-2 text-sm font-semibold text-black"
                                        >
                                            Gender
                                            <span className="ml-1 text-red-500">
                                                *
                                            </span>
                                        </legend>

                                        <div
                                            className="flex h-12 items-center justify-between rounded-full border border-black/15 bg-white px-3.5 sm:px-4 lg:px-3 xl:px-4"
                                        >
                                            {[
                                                {
                                                    id: "male",
                                                    label: "Male",
                                                },
                                                {
                                                    id: "female",
                                                    label: "Female",
                                                },
                                                {
                                                    id: "other",
                                                    label: "Other",
                                                },
                                            ].map((option) => (
                                                <label
                                                    key={option.id}
                                                    className="flex cursor-pointer items-center gap-1.5 sm:gap-2 text-[13px] sm:text-sm font-medium text-black whitespace-nowrap select-none"
                                                >
                                                    <input
                                                        type="radio"
                                                        name="gender"
                                                        value={option.id}
                                                        checked={
                                                            formData.gender ===
                                                            option.id
                                                        }
                                                        onChange={
                                                            handleChange
                                                        }
                                                        className="h-4 w-4 shrink-0 accent-black"
                                                    />

                                                    <span>{option.label}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </fieldset>
                                </div>

                                {/* =================================================
                                    ROW 3: NAME & EMAIL
                                ================================================== */}

                                <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
                                    {/* Name */}
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="mb-2 block text-sm font-semibold text-black"
                                        >
                                            Name
                                            <span className="ml-1 text-red-500">
                                                *
                                            </span>
                                        </label>

                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Enter your full name"
                                            className="h-12 w-full rounded-full border border-black/15 bg-white px-5 text-sm text-black outline-none transition-all duration-300 placeholder:text-black/35 focus:border-black focus:ring-4 focus:ring-black/[0.05]"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="mb-2 block text-sm font-semibold text-black"
                                        >
                                            Email Address
                                            <span className="ml-1 text-red-500">
                                                *
                                            </span>
                                        </label>

                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Enter your email address"
                                            className="h-12 w-full rounded-full border border-black/15 bg-white px-5 text-sm text-black outline-none transition-all duration-300 placeholder:text-black/35 focus:border-black focus:ring-4 focus:ring-black/[0.05]"
                                        />
                                    </div>
                                </div>

                                {/* =================================================
                                    ROW 4: PHONE & CV UPLOAD
                                ================================================== */}

                                <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
                                    {/* Phone */}
                                    <div>
                                        <label
                                            htmlFor="phone"
                                            className="mb-2 block text-sm font-semibold text-black"
                                        >
                                            Phone
                                            <span className="ml-1 text-red-500">
                                                *
                                            </span>
                                        </label>

                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Enter your contact number"
                                            className="h-12 w-full rounded-full border border-black/15 bg-white px-5 text-sm text-black outline-none transition-all duration-300 placeholder:text-black/35 focus:border-black focus:ring-4 focus:ring-black/[0.05]"
                                        />
                                    </div>

                                    {/* CV */}
                                    <div>
                                        <label
                                            htmlFor="cv"
                                            className="mb-2 block text-sm font-semibold text-black"
                                        >
                                            Upload CV
                                            <span className="ml-1 text-red-500">
                                                *
                                            </span>
                                        </label>

                                        <label
                                            htmlFor="cv"
                                            className="flex min-h-[48px] cursor-pointer items-center justify-between gap-3 rounded-full border border-black/15 px-4 transition-all duration-300 hover:border-black/45"
                                        >
                                            <span
                                                className="min-w-0 truncate text-sm text-black/50"
                                            >
                                                {formData.cv
                                                    ? formData.cv.name
                                                    : "PDF / DOC / DOCX · Max 1MB"}
                                            </span>

                                            <span
                                                className="shrink-0 rounded-full bg-black px-4 py-2 text-xs font-semibold text-white transition-transform duration-300 hover:scale-105"
                                            >
                                                Browse
                                            </span>

                                            <input
                                                id="cv"
                                                name="cv"
                                                type="file"
                                                accept=".pdf,.doc,.docx"
                                                onChange={handleChange}
                                                className="sr-only"
                                            />
                                        </label>
                                    </div>
                                </div>

                                {/* =================================================
                                    ROW 5: COUNTRY, STATE & CITY
                                ================================================== */}

                                <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-3">
                                    {/* Country */}
                                    <div>
                                        <label
                                            htmlFor="country"
                                            className="mb-2 block text-sm font-semibold text-black"
                                        >
                                            Country
                                            <span className="ml-1 text-red-500">
                                                *
                                            </span>
                                        </label>

                                        <input
                                            id="country"
                                            name="country"
                                            type="text"
                                            value={formData.country}
                                            onChange={handleChange}
                                            placeholder="Enter your country"
                                            className="h-12 w-full rounded-full border border-black/15 bg-white px-5 text-sm text-black outline-none transition-all duration-300 placeholder:text-black/35 focus:border-black focus:ring-4 focus:ring-black/[0.05]"
                                        />
                                    </div>

                                    {/* State */}
                                    <div>
                                        <label
                                            htmlFor="state"
                                            className="mb-2 block text-sm font-semibold text-black"
                                        >
                                            State
                                            <span className="ml-1 text-red-500">
                                                *
                                            </span>
                                        </label>

                                        <input
                                            id="state"
                                            name="state"
                                            type="text"
                                            value={formData.state}
                                            onChange={handleChange}
                                            placeholder="Enter your state"
                                            className="h-12 w-full rounded-full border border-black/15 bg-white px-5 text-sm text-black outline-none transition-all duration-300 placeholder:text-black/35 focus:border-black focus:ring-4 focus:ring-black/[0.05]"
                                        />
                                    </div>

                                    {/* City */}
                                    <div>
                                        <label
                                            htmlFor="city"
                                            className="mb-2 block text-sm font-semibold text-black"
                                        >
                                            City
                                            <span className="ml-1 text-red-500">
                                                *
                                            </span>
                                        </label>

                                        <input
                                            id="city"
                                            name="city"
                                            type="text"
                                            value={formData.city}
                                            onChange={handleChange}
                                            placeholder="Enter your city"
                                            className="h-12 w-full rounded-full border border-black/15 bg-white px-5 text-sm text-black outline-none transition-all duration-300 placeholder:text-black/35 focus:border-black focus:ring-4 focus:ring-black/[0.05]"
                                        />
                                    </div>
                                </div>

                                {/* =================================================
                                    SUBMIT
                                ================================================== */}

                                <div className="mt-8">
                                    <Button
                                        type="submit"
                                        variant="solid"
                                        size="md"
                                        arrow
                                        disabled={isSubmitting}
                                        className="rounded-full !bg-black !px-7 !py-3.5 !text-white hover:!bg-[#171717]"
                                    >
                                        {isSubmitting
                                            ? "Submitting..."
                                            : "Submit Application"}
                                    </Button>
                                </div>
                            </form>
                        </div>

                        {/* =================================================
                            WHY NETSQUARE
                        ================================================== */}

                        <aside
                            className="border-t border-black/10 bg-[#f5f5f5] p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10 xl:p-12"
                        >
                            {/* Label */}

                            <div
                                className="flex items-center gap-3"
                            >
                                <span
                                    className="h-2 w-2 rounded-full bg-black"
                                />

                                <span
                                    className="text-xs font-semibold uppercase tracking-[0.12em] text-black/50"
                                >
                                    Why NetSquare
                                </span>
                            </div>

                            {/* Heading */}

                            <h3
                                className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.035em] text-black sm:text-3xl"
                            >
                                Build something
                                <br className="hidden sm:block" />
                                meaningful with us.
                            </h3>

                            {/* Benefits */}

                            <div className="mt-8 space-y-7">
                                {benefits.map((benefit, index) => (
                                    <motion.div
                                        key={benefit.id}
                                        initial={
                                            shouldReduceMotion
                                                ? false
                                                : {
                                                      opacity: 0,
                                                      x: 18,
                                                  }
                                        }
                                        whileInView={
                                            shouldReduceMotion
                                                ? {}
                                                : {
                                                      opacity: 1,
                                                      x: 0,
                                                  }
                                        }
                                        viewport={{
                                            once: true,
                                            amount: 0.2,
                                        }}
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.08,
                                            ease: [
                                                0.22,
                                                1,
                                                0.36,
                                                1,
                                            ],
                                        }}
                                        className="group flex gap-4"
                                    >
                                        {/* Icon */}

                                        <div
                                            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-black text-white transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_10px_25px_rgba(0,0,0,0.15)]"
                                        >
                                            {benefit.icon}
                                        </div>

                                        {/* Content */}

                                        <div className="min-w-0">
                                            <h4
                                                className="text-base font-semibold tracking-[-0.02em] text-black sm:text-lg"
                                            >
                                                {benefit.title}
                                            </h4>

                                            <p
                                                className="mt-1.5 text-sm leading-6 text-black/55"
                                            >
                                                {benefit.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Bottom Quote */}

                            <div
                                className="mt-10 border-t border-black/10 pt-6"
                            >
                                <p
                                    className="text-sm font-medium leading-6 text-black/55"
                                >
                                    Great work starts with great people,
                                    curious minds, and the willingness
                                    to keep moving forward.
                                </p>
                            </div>
                        </aside>
                    </div>
                </motion.div>
            </Container>
        </Section>
    );
}