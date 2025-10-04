import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Code,
  Award,
  Briefcase,
  GraduationCap,
  Wrench,
  Sparkles,
  Rocket,
  Star,
  Zap,
} from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    // Replace these with your EmailJS credentials
    const SERVICE_ID = "service_j4rf3oe"; // Replace with your Service ID
    const TEMPLATE_ID = "template_183yugn"; // Replace with your Template ID
    const PUBLIC_KEY = "KJWH85L0Wus9Utqxh"; // Replace with your Public Key

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setStatus({
          type: "success",
          message: "🎉 Message sent successfully! I'll get back to you soon.",
        });
        setFormData({ from_name: "", from_email: "", message: "" });
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.log("FAILED...", error);
        setStatus({
          type: "error",
          message:
            "❌ Oops! Something went wrong. Please try again or email me directly.",
        });
        setIsSubmitting(false);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="from_name"
          className="block text-sm font-semibold text-cyan-400 mb-2"
        >
          Your Name *
        </label>
        <input
          type="text"
          id="from_name"
          name="from_name"
          value={formData.from_name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
          placeholder="John Doe"
        />
      </div>

      <div>
        <label
          htmlFor="from_email"
          className="block text-sm font-semibold text-cyan-400 mb-2"
        >
          Your Email *
        </label>
        <input
          type="email"
          id="from_email"
          name="from_email"
          value={formData.from_email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
          placeholder="john@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-cyan-400 mb-2"
        >
          Your Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all resize-none"
          placeholder="Tell me about your project or just say hi..."
        ></textarea>
      </div>

      {status.message && (
        <div
          className={`p-4 rounded-xl ${
            status.type === "success"
              ? "bg-green-500/20 border border-green-500/50 text-green-400"
              : "bg-red-500/20 border border-red-500/50 text-red-400"
          }`}
        >
          {status.message}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full group relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 rounded-xl font-bold text-lg transform group-hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Sending...
            </>
          ) : (
            <>
              <Mail size={24} />
              Send Message
            </>
          )}
        </div>
      </button>
    </form>
  );
};

const Portfolio = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const skills = {
    languages: ["C++", "Java", "JavaScript", "HTML", "CSS"],
    frameworks: ["ReactJS", "NodeJS", "Material-UI"],
    databases: ["MongoDB", "Firebase"],
    tools: ["Git", "Github", "Postman", "Netlify", "VScode"],
  };

  const projects = [
    {
      title: "Urban Market Hub",
      tech: "MERN, Bootstrap, Context API",
      description:
        "Advanced e-commerce platform with 30% performance enhancement",
      highlights: [
        "10,000+ concurrent users",
        "25% increase in listings",
        "Full-stack MERN",
      ],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Mail Sphere",
      tech: "MERN, APIs, Material-UI",
      description: "Full-stack Gmail clone with complete email functionality",
      highlights: [
        "20% user familiarity boost",
        "Complete CRUD operations",
        "1000+ email delivery",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Codepen.io Clone",
      tech: "React, Material-UI, Codemirror",
      description: "Real-time code editor with live preview",
      highlights: [
        "40% code reduction",
        "50% faster debugging",
        "Real-time detection",
      ],
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const achievements = [
    {
      icon: "🏆",
      text: "Top 500 in Flipkart Grid 2023 among 10,000 participants",
    },
    { icon: "💻", text: "700+ DSA problems solved across platforms" },
    { icon: "⭐", text: "1625 max rating on Codechef" },
    { icon: "🚀", text: "Top 1500 teams in Walmart Sparkathon" },
    { icon: "🥇", text: "National Rank 34, State Rank 2 - Math Olympiad" },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <style>
        {`
          @keyframes gradient-x {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-gradient-x {
            background-size: 200% auto;
            animation: gradient-x 3s linear infinite;
          }
          @keyframes float {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            33% { transform: translate(30px, -30px) rotate(120deg); }
            66% { transform: translate(-20px, 20px) rotate(240deg); }
          }
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in-up {
            animation: fade-in-up 1s ease-out;
          }
          @keyframes scroll {
            0% { transform: translateY(0); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateY(20px); opacity: 0; }
          }
          .animate-scroll {
            animation: scroll 2s ease-in-out infinite;
          }
          .bg-grid-pattern {
            background-image: 
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px);
            background-size: 50px 50px;
          }
        `}
      </style>

      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
        <div
          className="absolute w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"
          style={{
            top: "10%",
            left: "10%",
            animation: "float 20s ease-in-out infinite",
          }}
        ></div>
        <div
          className="absolute w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"
          style={{
            bottom: "10%",
            right: "10%",
            animation: "float 15s ease-in-out infinite reverse",
          }}
        ></div>
        <div
          className="absolute w-64 h-64 bg-cyan-500/30 rounded-full blur-3xl"
          style={{
            top: `${mousePosition.y / 20}px`,
            left: `${mousePosition.x / 20}px`,
            transition: "all 0.3s ease-out",
          }}
        ></div>

        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav
          className={`fixed w-full z-50 transition-all duration-500 ${
            scrolled
              ? "bg-black/80 backdrop-blur-xl shadow-2xl shadow-cyan-500/10 border-b border-cyan-500/20"
              : "bg-transparent"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
                SS
                <Sparkles className="inline ml-1 text-cyan-400" size={20} />
              </div>

              <div className="hidden md:flex space-x-10">
                {["Home", "About", "Experience", "Projects", "Contact"].map(
                  (item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="text-lg font-semibold hover:text-cyan-400 transition-all duration-300 relative group"
                    >
                      {item}
                      <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
                    </a>
                  )
                )}
              </div>

              <button
                className="md:hidden relative w-10 h-10"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-50"></div>
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="w-6 h-5 flex flex-col justify-between">
                    <span
                      className={`w-full h-0.5 bg-white transition-all ${
                        isMenuOpen ? "rotate-45 translate-y-2" : ""
                      }`}
                    ></span>
                    <span
                      className={`w-full h-0.5 bg-white transition-all ${
                        isMenuOpen ? "opacity-0" : ""
                      }`}
                    ></span>
                    <span
                      className={`w-full h-0.5 bg-white transition-all ${
                        isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                      }`}
                    ></span>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-cyan-500/20">
              {["Home", "About", "Experience", "Projects", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block px-6 py-4 hover:bg-cyan-500/10 transition-all text-lg font-semibold border-l-4 border-transparent hover:border-cyan-400"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center pt-20 px-4"
        >
          <div className="max-w-7xl mx-auto text-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-full backdrop-blur-sm mb-4">
                <Rocket className="text-cyan-400 animate-bounce" size={20} />
                <span className="text-sm font-semibold text-cyan-400">
                  Available for opportunities
                </span>
              </div>

              <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient-x inline-block">
                  SHUBHAM
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent animate-gradient-x inline-block">
                  SHEKHAR
                </span>
              </h1>

              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-400"></div>
                <p className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Software Engineer
                </p>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-400"></div>
              </div>

              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Crafting{" "}
                <span className="text-cyan-400 font-semibold">
                  exceptional digital experiences
                </span>{" "}
                with cutting-edge technologies. Passionate about building{" "}
                <span className="text-purple-400 font-semibold">
                  scalable solutions
                </span>{" "}
                that make a difference.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {[
                  {
                    href: "https://www.linkedin.com/in/shubham-s-036166210/",
                    icon: Linkedin,
                    label: "LinkedIn",
                    color: "from-blue-600 to-blue-700",
                  },
                  {
                    href: "https://github.com/beastyboy24",
                    icon: Github,
                    label: "GitHub",
                    color: "from-gray-700 to-gray-800",
                  },
                  {
                    href: "https://leetcode.com/u/shubhamsh22/",
                    icon: Code,
                    label: "LeetCode",
                    color: "from-orange-600 to-orange-700",
                  },
                  {
                    href: "https://auth.geeksforgeeks.org/user/shubhamshekhar256",
                    icon: Code,
                    label: "GFG",
                    color: "from-green-600 to-green-700",
                  },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${social.color} rounded-xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300`}
                    ></div>
                    <div
                      className={`relative bg-gradient-to-r ${social.color} px-6 py-3 rounded-xl flex items-center gap-2 font-semibold transform group-hover:scale-110 transition-all duration-300`}
                    >
                      <social.icon size={20} /> {social.label}
                    </div>
                  </a>
                ))}
              </div>

              <div className="flex flex-wrap justify-center gap-8 text-gray-400">
                {[
                  {
                    icon: Mail,
                    text: "shubhamshekhar256@gmail.com",
                    href: "mailto:shubhamshekhar256@gmail.com",
                  },
                  {
                    icon: Phone,
                    text: "+91-9162527075",
                    href: "tel:+919162527075",
                  },
                  { icon: MapPin, text: "Gurugram, India", href: null },
                ].map((contact, idx) => (
                  <a
                    key={idx}
                    href={contact.href || "#"}
                    className="flex items-center gap-2 hover:text-cyan-400 transition-all duration-300 group cursor-pointer px-4 py-2 rounded-lg hover:bg-cyan-500/10"
                  >
                    <contact.icon
                      size={20}
                      className="group-hover:animate-bounce"
                    />
                    <span className="font-medium">{contact.text}</span>
                  </a>
                ))}
              </div>

              <div className="mt-16 animate-bounce">
                <div className="w-6 h-10 border-2 border-cyan-400 rounded-full mx-auto flex justify-center">
                  <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-scroll"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-400 transition-all duration-500 transform hover:scale-105">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl">
                      <GraduationCap size={32} />
                    </div>
                    <h3 className="text-3xl font-bold">Education</h3>
                  </div>
                  <div className="space-y-6">
                    <div className="p-4 bg-black/40 rounded-xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all">
                      <h4 className="text-2xl font-bold text-cyan-400 mb-2">
                        B.Tech. (CSE)
                      </h4>
                      <p className="text-gray-300 font-semibold">
                        LNCT Group of Colleges
                      </p>
                      <p className="text-gray-400">2020 - 2024</p>
                      <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30">
                        <Star className="text-yellow-400" size={16} />
                        <span className="text-cyan-400 font-bold">
                          CGPA: 8.67
                        </span>
                      </div>
                    </div>
                    <div className="p-4 bg-black/40 rounded-xl border border-purple-500/20 hover:border-purple-400/50 transition-all">
                      <h4 className="text-2xl font-bold text-purple-400 mb-2">
                        Higher Secondary
                      </h4>
                      <p className="text-gray-300 font-semibold">
                        St. Michael's High School, Patna
                      </p>
                      <p className="text-gray-400">2018</p>
                      <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30">
                        <Star className="text-yellow-400" size={16} />
                        <span className="text-purple-400 font-bold">86%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl border border-purple-500/30 hover:border-purple-400 transition-all duration-500 transform hover:scale-105">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                      <Award size={32} />
                    </div>
                    <h3 className="text-3xl font-bold">Achievements</h3>
                  </div>
                  <ul className="space-y-4">
                    {achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 p-3 bg-black/40 rounded-xl hover:bg-black/60 transition-all border border-purple-500/20 hover:border-purple-400/50 group/item"
                      >
                        <span className="text-3xl">{achievement.icon}</span>
                        <span className="text-gray-300 group-hover/item:text-white transition-colors">
                          {achievement.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl border border-blue-500/30 hover:border-blue-400 transition-all duration-500">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                    <Wrench size={32} />
                  </div>
                  <h3 className="text-3xl font-bold">Technical Arsenal</h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {Object.entries(skills).map(([category, items]) => (
                    <div key={category}>
                      <h4 className="text-xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent capitalize">
                        {category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {items.map((skill) => (
                          <span
                            key={skill}
                            className="px-4 py-2 bg-gradient-to-r from-slate-800 to-slate-700 rounded-full text-sm font-semibold hover:from-cyan-500/20 hover:to-blue-500/20 border border-slate-700 hover:border-cyan-400 transition-all cursor-pointer transform hover:scale-110"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-32 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                Experience
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto rounded-full"></div>
            </div>

            <div className="group relative max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 p-10 rounded-2xl border border-cyan-500/30 hover:border-cyan-400 transition-all duration-500">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8">
                  <div>
                    <div className="inline-flex items-center gap-2 mb-3">
                      <Briefcase className="text-cyan-400" size={28} />
                      <h3 className="text-3xl font-bold text-cyan-400">
                        SDE Intern
                      </h3>
                    </div>
                    <p className="text-2xl text-gray-200 font-semibold mb-2">
                      Desi QnA
                    </p>
                  </div>
                  <div className="text-gray-400 mt-2 md:mt-0 md:text-right">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30 mb-2">
                      <Zap className="text-yellow-400" size={16} />
                      <p className="font-semibold text-cyan-400">
                        Oct 2023 - Present
                      </p>
                    </div>
                    <p className="flex items-center gap-1 justify-end">
                      <MapPin size={16} />
                      Bhopal, India
                    </p>
                  </div>
                </div>
                <ul className="space-y-4">
                  {[
                    "Developed responsive webpage attracting 1,00,000+ daily visitors",
                    "Led User Verification project - 30% reduction in fraudulent activities",
                    "Integrated Google reCAPTCHA - 30% increase in DDoS protection",
                  ].map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 p-4 bg-black/40 rounded-xl hover:bg-black/60 transition-all border border-cyan-500/20 hover:border-cyan-400/50 group/item"
                    >
                      <Zap
                        className="text-cyan-400 mt-1 flex-shrink-0 group-hover/item:animate-pulse"
                        size={20}
                      />
                      <span className="text-gray-300 text-lg group-hover/item:text-white transition-colors">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, idx) => (
                <div key={idx} className="group relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl blur-xl opacity-20 group-hover:opacity-50 transition-opacity duration-500`}
                  ></div>
                  <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-transparent hover:shadow-2xl transition-all duration-500 transform hover:scale-105 h-full flex flex-col">
                    <div
                      className={`flex items-center gap-3 mb-4 p-3 rounded-xl bg-gradient-to-r ${project.gradient} bg-opacity-10`}
                    >
                      <Code className="text-white" size={28} />
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                    </div>
                    <p className="text-sm text-gray-400 mb-4 font-semibold">
                      {project.tech}
                    </p>
                    <p className="text-gray-300 mb-6 text-lg leading-relaxed flex-grow">
                      {project.description}
                    </p>
                    <ul className="space-y-3">
                      {project.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-gray-400 p-2 bg-black/40 rounded-lg hover:bg-black/60 transition-all"
                        >
                          <span
                            className={`text-lg bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}
                          >
                            ▪
                          </span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                Let's Connect
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full"></div>
            </div>

            <p className="text-gray-300 mb-12 text-xl leading-relaxed text-center">
              Currently seeking exciting opportunities to contribute and grow.
              Whether it's a project, question, or just a friendly hello – I'd
              love to hear from you!
            </p>

            {/* Contact Form */}
            <div className="group relative max-w-2xl mx-auto mb-12">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl border border-cyan-500/30">
                <ContactForm />
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="mailto:shubhamshekhar256@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 rounded-xl flex items-center gap-3 text-lg font-bold transform group-hover:scale-110 transition-all duration-300">
                  <Mail size={24} /> Direct Email
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/shubham-s-036166210/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 rounded-xl flex items-center gap-3 text-lg font-bold transform group-hover:scale-110 transition-all duration-300">
                  <Linkedin size={24} /> LinkedIn
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 px-4 border-t border-cyan-500/20">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-gray-400 text-lg">
              © 2024{" "}
              <span className="font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Shubham Shekhar
              </span>
            </p>
            <p className="text-gray-500 mt-2">
              Crafted with React, Tailwind CSS & lots of ☕
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;
