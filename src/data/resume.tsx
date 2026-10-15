import { Icons } from "@/components/icons";
import { House, Library } from "lucide-react";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Emaduddin Al-Chmri - Developer & Artist",
  initials: "E-MAD",
  url: "https://e-mad.com",
  location: "Sharjah, UAE",
  locationLink: "https://www.google.com/maps/place/austin+tx",
  description:
    "Fresh multimedia graduate, game developer, writer, and character illustrator. Bringing creative ideas to life.",
  summary:
    "A creative that dabbled in everything under the sun, currently focusing on game development, animation, and illustration. [I completed my IT Multimedia bachelors degree with highest honours](/#education), [interned at the region's largest planetarium](/#work), and [honed my skills with countless personal projects](/#projects).",
  avatarUrl: "/picofme.png",
  ogImage: "/og_image.png",
  sections: {
    about: { order: 1, enabled: true, heading: "About" },
    work: { order: 2, enabled: true, heading: "Work Experience", presentLabel: "Present" },
    education: { order: 3, enabled: true, heading: "Education" },
    skills: { order: 4, enabled: true, heading: "Skills" },
    games: {
      order: 5, enabled: true,
      label: "Game Projects",
      heading: "My latest gaming-related projects",
      text: "From original games, to fangames, to mods.",
    },
    animations: {
      order: 6, enabled: true,
      label: "Animation Projects",
      heading: "My latest animations and films",
      text: "From cartoons to VFX work.",
    },
    projects: {
      order: 7, enabled: true,
      label: "Other Projects",
      heading: "Recent miscellaneous projects",
      text: "Other projects I've been involved with.",
    },

    tradIllust: {
      order: 8, enabled: true,
      heading: "Ink-on-paper Illustrations",
    },

    digitalIllust: {
      order: 9, enabled: true,
      heading: "Coloured Digital Pieces",
      text:"Includes artwork for other online users."
    },
    
    contact: {
      order: 10, enabled: true,
      label: "Contact",
      heading: "Get in Touch",
      text: "Got an inquiry, a job offer, or just want to chat? Email me, or send me a message on Discord!",
    },
  },
  tradIllust: [
    { src: "/Webp/Trad/1.webp", alt: "Illustration 1", note: "APP-333: Angel Statue" },
    { src: "/Webp/Trad/2.webp", alt: "Illustration 2", note: "Berserk | Art Nouveau Study" },
    { src: "/Webp/Trad/3.webp", alt: "Illustration 3", note: "Champions: Curla & Munir" },
    { src: "/Webp/Trad/4.webp", alt: "Illustration 4", note: "Desert Hunt: Buzz & Dread" },
    { src: "/Webp/Trad/12.webp", alt: "Illustration 5", note: "Fear & Hunger: Termina | Renaissance Art Study" },
    { src: "/Webp/Trad/7.webp", alt: "Illustration 6", note: "Gyakuten | Birthday Gift" },
    { src: "/Webp/Trad/10.webp", alt: "Illustration 7", note: "The Trinity | Pompadour, Spike, & Deux Tails" },
    { src: "/Webp/Trad/11.webp", alt: "Illustration 8", note: "The Blind Guardian" },
    { src: "/Webp/Trad/5.webp", alt: "Illustration 9", note: "Doom & Bloom" },

  ],
  digitalIllust: [
    { src: "/Webp/Digital/2.webp", alt: "Illustration 1", note: "Pompadour Character Sheet" },
    { src: "/Webp/Digital/12.webp", alt: "Illustration 2", note: "Spike Character Sheet" },
    { src: "/Webp/Digital/11.webp", alt: "Illustration 3", note: "Deux Tails Character Sheet" },
    { src: "/Webp/Digital/1.webp", alt: "Illustration 4", note: "Hatsune Mike & Kisane Teto" },
    { src: "/Webp/Digital/5.webp", alt: "Illustration 5", note: "For ~StarryStellar" },
    { src: "/Webp/Digital/6.webp", alt: "Illustration 6", note: "For ~dunnybee" },
    //{ src: "/Webp/Digital/7.webp", alt: "Illustration 7", note: "For ~Imjaejuingit" },
    { src: "/Webp/Digital/8.webp", alt: "Illustration 7", note: "For ~totg4" },
    { src: "/Webp/Digital/10.webp", alt: "Illustration 8", note: "For ~Ashuhlilee" },
    { src: "/Webp/Digital/13.webp", alt: "Illustration 9", note: "Arean Arts | Promotional Poster" },

  ],
  skills: [
    { name: "C#", icon: Csharp },
    { name: "Unity 2D/3D", icon: Icons.unity },
    { name: "Audacity", icon: Icons.audacity},
    { name: "GIMP", icon: Icons.gimp},
    { name: "Microsoft Office", icon: Icons.msoffice},
    { name: "Google Workspace", icon: Icons.googleDrive},
    { name: "Adobe Suite", icon: Icons.adobe },
  ],
  navbar: [
    { href: "/", icon: House, label: "Home" },
    { href: "/", icon: Library, label: "[Under Construction!]" },
  ],
  contact: {
    email: "emadeddin.alchmri@outlook.com",
    tel: "+971 58 621 7975",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/emadeddin-al-chmri",
        icon: Icons.linkedin,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/@emaduddinmedia",
        icon: Icons.youtube,
        navbar: true,
      },
      Discord: {
        name: "Discord",
        url: "https://discord.com/users/1030467739380363346",
        icon: Icons.discord,
        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:emadeddin.alchmri@outlook.com",
        icon: Icons.email,
        navbar: true,
      },
      CV: {
        name: "Download CV",
        url: "/CV.pdf",
        download: "EmadEddin Al-Chmri-CV-2026.pdf",
        icon: Icons.cv,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Sharjah Space & Astronomy Hub",
      href: "https://www.sharjah.ac.ae/SSAH",
      badges: [],
      location: "Sharjah, UAE",
      title: "Planetarium Dept. Intern",
      logoUrl: "https://api.sharjah.ac.ae/-/media/project/uos/sites/uos/ssah/logo/ssah-logo/trans-black.svg",
      start: "June 2026",
      end: "August 2026",
      description:
        "Assisted with creating digital assets and editing for several planetarium shows, as well as directing a brand new show.",
    },
  ],
  education: [
    {
      school: "University of Sharjah",
      href: "https://www.sharjah.ac.ae/",
      degree: "BSc. Information Technology - Multimedia",
      logoUrl: "https://api.sharjah.ac.ae/-/media/project/uos/sites/uos/others/navigation-logos/brand-logo-black.svg",
      start: "2022",
      end: "2026",
    },
    
  ],
  animations: [
{
      order: 1,
      title: "Sleepover - Animated Short Film",
      href: "https://www.youtube.com/watch?v=5NEGQX92NnU",
      dates: "January 2026 - May 2026",
      active: false,
      description:
        "A short comedic film that utilizes visual effects to composite a character into a real-life environment.",
      technologies: [
        "3ds Max",
        "Audacity",
        "Adobe AfterEffects",
      ],
      links: [
        {
          type: "Film",
          href: "https://www.youtube.com/watch?v=5NEGQX92NnU",
          icon: <Icons.youtube className="size-3" />,
        },
      ],
      image: "",
      video: "/Videos/Sleepover.mp4",
    },
    {
      order: 2,
      title: "Once, there was a Dott - Animated Short Film",
      href: "https://www.youtube.com/watch?v=SSr6VTvoSkQ",
      dates: "September 2024 - November 2024",
      active: false,
      description:
        "A short comedic 3D film animated to appear like 1920s cartoons.",
      technologies: [
        "3ds Max",
        "Audacity",
        "Adobe Premiere Pro",
      ],
      links: [
        {
          type: "Film",
          href: "https://www.youtube.com/watch?v=SSr6VTvoSkQ",
          icon: <Icons.youtube className="size-3" />,
        },
      ],
      image: "",
      video: "/Videos/Dott.mp4",
    },
  ],
  games: [
    {
      order: 1,
      title: "Arean Arts",
      href: "https://emaduddin.itch.io/arean-arts",
      dates: "September 2025 - Present",
      active: true,
      description:
        "Designed and developed a hybrid deckbuilding fighting game with an ancient Greek aesthetic. Continually updated, with full changelogs, video devlogs, and instructional short-form content. Includes 45+ cards, a CPU player, a roguelike mode, an achievements system, and cosmetics.",
      technologies: [
        "C#",
        "Unity",
        "GIMP",
        "Audacity",
        "Pivot Animator",
        "Adobe Premiere Pro",
      ],
      links: [
        {
          type: "Game",
          href: "https://emaduddin.itch.io/arean-arts",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/Videos/AreanArts.mp4",
    },
    {
      order: 2,
      title: "Ghost Trick - Spectral Stray",
      href: "https://emaduddin.itch.io/ghost-trick-spectral-stray",
      dates: "March 2025 - September 2025",
      active: false,
      description:
        "Fully designed and developed a 3D narrative-driven fangame based in CAPCOM's Ghost Trick universe.",
      technologies: [
        "C#",
        "Unity",
        "Audacity",
        "Adobe Premiere Pro",
      ],
      links: [
        {
          type: "Game",
          href: "https://emaduddin.itch.io/ghost-trick-spectral-stray",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Webp/Projects/SS.webp",
      video: "",
    },
    {
      order: 3,
      title: "Ib - Fanmade Arabic Localization",
      href: "https://emaduddin.itch.io/ib-arabic-fan-localization",
      dates: "July 2025 - August 2025",
      active: false,
      description:
        "Fully localized a narrative-driven indie game from English to Arabic, including all 6800+ lines of text, graphics, and gameplay mechanics.",
      technologies: [
        "RPG Maker MV",
        "Google Sheets",
      ],
      links: [
        {
          type: "Game Mod",
          href: "https://emaduddin.itch.io/ib-arabic-fan-localization",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/Videos/Ib.mp4",
    },
    {
      order: 4,
      title: "Golden Sun - Class System Reverse Engineering",
      href: "https://docs.google.com/spreadsheets/d/1BFd93xxH8ApXOzk06GPf4c94rKwzM2cfZNrl5rGOQRk/edit?usp=sharing",
      dates: "April 2026 - May 2026",
      active: false,
      description:
        "Complete and thorough analysis of a complex game system in Google Sheets. Done as an exercise in game design and systems engineering. Includes meaningful visuals, a simulator, full databases, step-by-step operations, and in-depth notes.",
      technologies: [
        "Google Sheets",
      ],
      links: [
        {
          type: "Sheets",
          href: "https://docs.google.com/spreadsheets/d/1BFd93xxH8ApXOzk06GPf4c94rKwzM2cfZNrl5rGOQRk/edit?usp=sharing",
          icon: <Icons.googleDrive className="size-3" />,
        },
      ],
      image: "/Webp/Projects/GS.webp",
      video: "",
    },
  ],
  projects: [
    {
      order: 99,
      title: "LISAN",
      href: "https://progquack.online",
      dates: "January 2025 - December 2025",
      active: false,
      description:
        "University senior project, worked with a team as the lead designer. Designed the UI and UX of an LLM-powered Arabic dialect detection system that responds with the detected dialectical text or audio input.",
      technologies: [
        "HTML",
        "CSS",
        "JS",
        "GIMP",
        "Adobe Premiere Pro"
      ],
      links: [
        {
          type: "Website",
          href: "https://progquack.online",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/Videos/LISAN.mp4",
    },
  ],
  hackathons: [
    {
      title: "PNW Hacks 2022",
      dates: "October 14th - 16th, 2022",
      location: "Seattle, Washington",
      description: "Built a real-time collaborative code review tool using WebSockets and Monaco Editor. Won best developer tool.",
      image: "https://avatar.vercel.sh/pnw-hacks?size=40",
      win: "Best Developer Tool",
      links: [],
    },
    {
      title: "nwHacks 2022",
      dates: "January 15th - 16th, 2022",
      location: "Vancouver, BC",
      description: "Created an accessibility-first browser extension that rewrites complex legal documents into plain English using GPT-3.",
      image: "https://avatar.vercel.sh/nwhacks-2022?size=40",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "HackTheNorth 2021",
      dates: "September 17th - 19th, 2021",
      location: "Waterloo, Ontario (Remote)",
      description: "Built a distributed key-value store in Go with a Raft consensus implementation from scratch. Finalist in the systems track.",
      image: "https://avatar.vercel.sh/hackthenorth-2021?size=40",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/alexmercer-dev/raftdb",
        },
      ],
    },
    {
      title: "DubHacks 2021",
      dates: "October 9th - 10th, 2021",
      location: "Seattle, Washington",
      description: "Developed a carbon footprint tracker that integrates with Google Maps to suggest lower-emission commute alternatives.",
      image: "https://avatar.vercel.sh/dubhacks-2021?size=40",
      win: "Best Sustainability Hack",
      links: [],
    },
    {
      title: "StormHacks 2021",
      dates: "April 24th - 25th, 2021",
      location: "Burnaby, BC (Remote)",
      description: "Built a multiplayer browser game where players collaboratively debug a shared codebase before a timer runs out.",
      image: "https://avatar.vercel.sh/stormhacks-2021?size=40",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/bugout",
        },
      ],
    },
    {
      title: "HackCamp 2020",
      dates: "November 14th - 15th, 2020",
      location: "Vancouver, BC (Remote)",
      description: "Created a CLI tool that automatically generates unit test scaffolding from TypeScript function signatures using static analysis.",
      image: "https://avatar.vercel.sh/hackcamp-2020?size=40",
      win: "1st Place Overall",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/alexmercer-dev/testgen",
        },
      ],
    },
    {
      title: "cmd-f 2020",
      dates: "March 7th - 8th, 2020",
      location: "Vancouver, BC",
      description: "Built a mobile-first job board specifically for junior developers, aggregating listings from GitHub Jobs, HN Who's Hiring, and LinkedIn.",
      image: "https://avatar.vercel.sh/cmd-f-2020?size=40",
      links: [],
    },
    {
      title: "nwHacks 2020",
      dates: "January 11th - 12th, 2020",
      location: "Vancouver, BC",
      description: "Developed a peer-to-peer study session platform with live video, shared whiteboards, and Pomodoro timers.",
      image: "https://avatar.vercel.sh/nwhacks-2020?size=40",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "HackTheNorth 2019",
      dates: "September 13th - 15th, 2019",
      location: "Waterloo, Ontario",
      description: "Built an API rate-limit visualizer that tracks usage across multiple providers and surfaces anomalies in real time.",
      image: "https://avatar.vercel.sh/hackthenorth-2019?size=40",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/alexmercer-dev/ratelens",
        },
      ],
    },
    {
      title: "DeltaHacks V",
      dates: "January 18th - 19th, 2019",
      location: "Hamilton, Ontario",
      description: "Created a VS Code extension that suggests variable names based on type signatures and surrounding code context using a local ML model.",
      image: "https://avatar.vercel.sh/deltahacks-v?size=40",
      links: [],
    },
    {
      title: "StormHacks 2019",
      dates: "March 2nd - 3rd, 2019",
      location: "Burnaby, BC",
      description: "Built a network latency heatmap tool that visualises CDN performance across regions using real user data injected via a lightweight JS snippet.",
      image: "https://avatar.vercel.sh/stormhacks-2019?size=40",
      win: "Best Infrastructure Hack",
      links: [],
    },
  ],
} as const;
