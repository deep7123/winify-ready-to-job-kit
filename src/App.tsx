import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { 
  FileText, Linkedin, Mail, Target, Briefcase, 
  MessageSquare, Wrench, Users, ArrowRight, 
  CheckCircle2, AlertCircle, Sparkles, ChevronRight,
  Clock, Shield, Bot, Check, X, Cpu,
  Award, TrendingUp, Layers, Send, Zap,
  BarChart3, ArrowUpRight, Compass,
  FolderKanban, Code, Palette, LineChart, Menu,
  Download, Copy, CheckCheck, FolderArchive, Terminal, ExternalLink
} from 'lucide-react';

const WA_LINK = "https://wa.me/917990262500?text=HEY%20WINIFY%20I%20WANT%20WINIFY%20JOB%20KIT";

const fadeInUp = {
  hidden: { opacity: 0, y: 32, filter: "blur(4px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.08 }
  }
};

const floatAnim = (duration = 5, delay = 0, yOffset = 8, xOffset = 3) => ({
  animate: {
    y: [-yOffset / 2, yOffset / 2, -yOffset / 2],
    x: [-xOffset / 2, xOffset / 2, -xOffset / 2],
    rotate: [-0.8, 0.8, -0.8],
    transition: {
      duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay
    }
  }
});

const PROJECT_FILES = {
  "package.json": JSON.stringify({
    "name": "winify-ready-to-job-kit",
    "private": true,
    "version": "1.0.0",
    "type": "module",
    "scripts": {
      "dev": "vite",
      "build": "tsc -b && vite build",
      "preview": "vite preview"
    },
    "dependencies": {
      "clsx": "^2.1.1",
      "framer-motion": "^11.18.2",
      "lucide-react": "^0.475.0",
      "react": "^18.3.1",
      "react-dom": "^18.3.1",
      "tailwind-merge": "^2.6.0"
    },
    "devDependencies": {
      "@types/node": "^22.13.4",
      "@types/react": "^18.3.18",
      "@types/react-dom": "^18.3.5",
      "@vitejs/plugin-react": "^4.3.4",
      "autoprefixer": "^10.4.20",
      "postcss": "^8.5.2",
      "tailwindcss": "^3.4.17",
      "typescript": "^5.7.3",
      "vite": "^6.1.0"
    }
  }, null, 2),

  "vite.config.ts": `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
});`,

  "tsconfig.json": JSON.stringify({
    "compilerOptions": {
      "target": "ES2020",
      "useDefineForClassFields": true,
      "lib": ["ES2020", "DOM", "DOM.Iterable"],
      "module": "ESNext",
      "skipLibCheck": true,
      "moduleResolution": "bundler",
      "allowImportingTsExtensions": true,
      "resolveJsonModule": true,
      "isolatedModules": true,
      "noEmit": true,
      "jsx": "react-jsx",
      "strict": false,
      "noUnusedLocals": false,
      "noUnusedParameters": false,
      "noFallthroughCasesInSwitch": true
    },
    "include": ["src"]
  }, null, 2),

  "tailwind.config.js": `/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#fef2f2',
          100: '#fee2e2',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          950: '#450a0a'
        }
      }
    },
  },
  plugins: [],
};`,

  "postcss.config.js": `export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};`,

  "index.html": `<!doctype html>
<html lang="en" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23dc2626'><path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'/></svg>" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Winify Ready-to-Job Kit | Shape Your Resume. Elevate Your Career.</title>
    <meta name="description" content="Your complete job-search system, built around your profile, target role and market." />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  </head>
  <body class="bg-[#FAF9F7] text-slate-900 font-['Plus_Jakarta_Sans',sans-serif] antialiased">
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`,

  "src/index.css": `@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  background-color: #FAF9F7;
  color: #0f172a;
}`,

  "src/main.tsx": `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);`,

  "README.md": `# Winify Ready-to-Job Kit — Complete Web Application

A premium digital experience built for **Winify Resume & Career Services**.

## Quick Start Instructions

1. Install dependencies:
\`\`\`bash
npm install
\`\`\`

2. Run development server:
\`\`\`bash
npm run dev
\`\`\`

3. Build for production:
\`\`\`bash
npm run build
\`\`\`

All WhatsApp conversion CTAs point directly to:
\`https://wa.me/917990262500?text=HEY%20WINIFY%20I%20WANT%20WINIFY%20JOB%20KIT\`
`
};

const renderIcon = (IconComponent, className = "w-4 h-4") => {
  if (!IconComponent) return null;
  if (React.isValidElement(IconComponent)) {
    return React.cloneElement(IconComponent, {
      className: `${IconComponent.props.className || ''} ${className}`.trim()
    });
  }
  if (typeof IconComponent === 'function' || typeof IconComponent === 'object') {
    const Component = IconComponent;
    return <Component className={className} />;
  }
  return null;
};

const FloatingBadge = ({ 
  icon: Icon, 
  children, 
  className = "", 
  variant = "glass", 
  floatOffset = 6,
  xOffset = 3,
  duration = 5,
  delay = 0 
}) => {
  const variants = {
    glass: "bg-white/85 backdrop-blur-xl border border-white/95 text-slate-800 shadow-[0_8px_20px_rgba(0,0,0,0.06)]",
    redGlass: "bg-red-50/90 backdrop-blur-xl border border-red-200/90 text-red-900 shadow-[0_8px_20px_rgba(220,38,38,0.12)]",
    darkGlass: "bg-slate-900/90 backdrop-blur-xl border border-slate-700/80 text-white shadow-[0_10px_25px_rgba(15,23,42,0.2)]",
    mutedGlass: "bg-slate-100/90 backdrop-blur-xl border border-slate-200/90 text-slate-600 shadow-sm"
  };

  return (
    <motion.div
      {...floatAnim(duration, delay, floatOffset, xOffset)}
      whileHover={{ scale: 1.08, y: -2 }}
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider select-none pointer-events-auto transition-all ${variants[variant] || variants.glass} ${className}`}
    >
      {renderIcon(Icon, "w-3.5 h-3.5 text-red-600 shrink-0")}
      {typeof children === 'string' || typeof children === 'number' ? (
        <span>{children}</span>
      ) : (
        children
      )}
    </motion.div>
  );
};

const GlassCard = ({ 
  children, 
  className = "", 
  level = "level-1",
  hoverEffect = true, 
  spotlight = true 
}) => {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!spotlight || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const levelStyles = {
    "level-1": "bg-white/65 backdrop-blur-xl border border-white/80 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:border-white/95 hover:bg-white/75",
    "level-2": "bg-white/85 backdrop-blur-2xl border border-white/95 shadow-[0_16px_40px_rgba(220,38,38,0.05)] hover:border-red-200 hover:shadow-[0_22px_50px_rgba(220,38,38,0.09)]",
    "level-3": "bg-gradient-to-br from-white/95 via-white/90 to-red-50/40 backdrop-blur-3xl border-2 border-red-200/90 shadow-[0_24px_60px_rgba(185,28,28,0.08)] ring-1 ring-red-100/80"
  };

  return (
    <motion.div
      ref={cardRef}
      variants={fadeInUp}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={hoverEffect ? { y: -6, scale: 1.01 } : {}}
      transition={{ type: "spring", stiffness: 340, damping: 24 }}
      className={`relative overflow-hidden rounded-3xl group ${levelStyles[level] || levelStyles["level-1"]} ${className}`}
    >
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none z-20" />
      
      {spotlight && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 rounded-3xl z-0"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(420px circle at ${mousePos.x}px ${mousePos.y}px, rgba(239, 68, 68, 0.09), transparent 60%)`
          }}
        />
      )}

      <motion.div 
        initial={{ x: "-150%" }}
        animate={{ x: isHovered ? "150%" : "-150%" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] z-10"
      />

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

const CTAButton = ({ children, className = "", variant = "primary" }) => {
  const baseStyle = "group relative inline-flex items-center justify-center px-8 py-4 font-black tracking-wide transition-all duration-300 rounded-full overflow-hidden shadow-lg select-none cursor-pointer text-center text-xs sm:text-sm";

  const variants = {
    primary: "bg-gradient-to-r from-red-600 via-rose-700 to-red-800 text-white shadow-[0_12px_35px_rgba(220,38,38,0.35)] hover:shadow-[0_18px_50px_rgba(220,38,38,0.55)] hover:-translate-y-0.5 active:translate-y-0",
    glass: "bg-white/85 backdrop-blur-xl border border-white text-slate-900 hover:bg-white shadow-md shadow-slate-950/5 hover:-translate-y-0.5",
    outline: "bg-transparent border-2 border-red-600/60 text-red-700 hover:bg-red-50/60"
  };

  return (
    <motion.a 
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.975 }}
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyle} ${variants[variant] || variants.primary} ${className}`}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>

      {variant === 'primary' && (
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-rose-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
          <motion.div 
            initial={{ x: "-120%" }}
            animate={{ x: "220%" }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", repeatDelay: 1 }}
            className="absolute top-0 bottom-0 w-20 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-22deg] z-0 pointer-events-none"
          />
        </>
      )}
    </motion.a>
  );
};

const ProjectExportModal = ({ isOpen, onClose }) => {
  const [activeFile, setActiveFile] = useState("package.json");
  const [copied, setCopied] = useState(false);
  const [isZipping, setIsZipping] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(PROJECT_FILES[activeFile] || "");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadZip = async () => {
    setIsZipping(true);
    try {
      if (!window.JSZip) {
        await new Promise((resolve, reject) => {
          const script = document.createElement("script");
          script.src = "https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js";
          script.onload = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
        });
      }

      const zip = new window.JSZip();
      
      // Add configuration and root files
      zip.file("package.json", PROJECT_FILES["package.json"]);
      zip.file("vite.config.ts", PROJECT_FILES["vite.config.ts"]);
      zip.file("tsconfig.json", PROJECT_FILES["tsconfig.json"]);
      zip.file("tailwind.config.js", PROJECT_FILES["tailwind.config.js"]);
      zip.file("postcss.config.js", PROJECT_FILES["postcss.config.js"]);
      zip.file("index.html", PROJECT_FILES["index.html"]);
      zip.file("README.md", PROJECT_FILES["README.md"]);

      // Add src files
      const src = zip.folder("src");
      src.file("main.tsx", PROJECT_FILES["src/main.tsx"]);
      src.file("index.css", PROJECT_FILES["src/index.css"]);
      
      // Grab current running App.tsx/App.jsx code from document or memory
      const currentAppCode = document.querySelector('script[type="module"]')?.textContent || 
        document.documentElement.outerHTML;
      src.file("App.tsx", PROJECT_FILES["src/App.tsx"] || currentAppCode);

      const content = await zip.generateAsync({ type: "blob" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(content);
      link.download = "winify-ready-to-job-kit.zip";
      link.click();
      URL.revokeObjectURL(link.href);
    } catch (err) {
      console.error("ZIP Generation failed:", err);
    } finally {
      setIsZipping(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-xl animate-fadeIn">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-5xl w-full max-h-[90vh] flex flex-col overflow-hidden text-left">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-150 flex items-center justify-between bg-slate-50/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-red-600 text-white flex items-center justify-center shadow-md shadow-red-600/30">
              <FolderArchive className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-black text-slate-900 text-lg sm:text-xl tracking-tight">Deployable Project Exporter</h3>
              <p className="text-xs text-slate-500 font-medium">Ready for Vite + React + TypeScript + Tailwind CSS</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={downloadZip}
              disabled={isZipping}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-black text-xs transition-all shadow-md active:scale-95 cursor-pointer disabled:opacity-50"
            >
              <Download className="w-4 h-4" />
              <span>{isZipping ? "PACKAGING ZIP..." : "DOWNLOAD COMPLETE PROJECT (.ZIP)"}</span>
            </button>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-slate-200/80 hover:bg-slate-300 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: File tree and code viewer */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 overflow-hidden">
          
          {/* File Explorer Sidebar */}
          <div className="md:col-span-4 p-4 border-r border-slate-200 bg-slate-100/60 overflow-y-auto space-y-1">
            <div className="text-[10px] font-black uppercase text-slate-400 tracking-wider mb-2 px-2">Project Files</div>
            {Object.keys(PROJECT_FILES).map((fileName) => (
              <button
                key={fileName}
                onClick={() => setActiveFile(fileName)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition-all text-left cursor-pointer ${
                  activeFile === fileName 
                    ? 'bg-white text-red-700 shadow-sm border border-red-200/80' 
                    : 'text-slate-600 hover:bg-slate-200/60'
                }`}
              >
                <div className="flex items-center gap-2 truncate">
                  <Code className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  <span className="truncate">{fileName}</span>
                </div>
                {activeFile === fileName && <ChevronRight className="w-3.5 h-3.5 text-red-600 shrink-0" />}
              </button>
            ))}

            <div className="mt-6 p-3 bg-red-50 rounded-2xl border border-red-200 text-[11px] text-red-900 font-semibold space-y-1.5">
              <div className="font-black flex items-center gap-1 text-red-700">
                <Terminal className="w-3.5 h-3.5" /> Quick Deploy
              </div>
              <p className="font-mono text-[10px] bg-white p-1.5 rounded border border-red-100 text-slate-700">
                npm install<br/>
                npm run dev
              </p>
            </div>
          </div>

          {/* Code Viewer Panel */}
          <div className="md:col-span-8 flex flex-col bg-slate-950 text-slate-200 overflow-hidden">
            <div className="flex items-center justify-between p-3 border-b border-slate-800 bg-slate-900/90 text-xs font-mono">
              <span className="text-slate-400">{activeFile}</span>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1 px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 text-white font-bold text-[11px] transition-colors cursor-pointer"
              >
                {copied ? <CheckCheck className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "COPIED" : "COPY CODE"}</span>
              </button>
            </div>
            
            <pre className="flex-1 p-4 text-xs font-mono overflow-auto leading-relaxed text-emerald-300">
              <code>{PROJECT_FILES[activeFile]}</code>
            </pre>
          </div>

        </div>

      </div>
    </div>
  );
};

const BackgroundAtmosphere = () => {
  const { scrollY } = useScroll();
  const yOrb1 = useTransform(scrollY, [0, 3000], [0, 240]);
  const yOrb2 = useTransform(scrollY, [0, 3000], [0, -260]);
  const yOrb3 = useTransform(scrollY, [0, 3000], [0, 180]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#FAF9F7] pointer-events-none">
      <motion.div 
        style={{ y: yOrb1 }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.18, 0.26, 0.18] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[12%] -left-[8%] w-[65vw] h-[65vw] max-w-[850px] max-h-[850px] bg-red-400/25 blur-[160px] rounded-full" 
      />
      <motion.div 
        style={{ y: yOrb2 }}
        animate={{ scale: [1.1, 0.95, 1.1], opacity: [0.16, 0.24, 0.16] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[32%] -right-[12%] w-[60vw] h-[60vw] max-w-[850px] max-h-[850px] bg-rose-400/20 blur-[170px] rounded-full" 
      />
      <motion.div 
        style={{ y: yOrb3 }}
        animate={{ scale: [0.95, 1.12, 0.95], opacity: [0.14, 0.22, 0.14] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[70%] left-[12%] w-[55vw] h-[55vw] max-w-[780px] max-h-[780px] bg-red-500/15 blur-[160px] rounded-full" 
      />
      <div className="absolute inset-0 bg-[radial-gradient(#e11d48_0.65px,transparent_0.65px)] [background-size:36px_36px] opacity-[0.032]" />
    </div>
  );
};

const Navbar = ({ onOpenExport }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 25);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { 
      label: "READY-TO-JOB KIT", 
      href: "#services", 
      badge: "9-PART",
      isPrimary: true 
    },
    { 
      label: "PORTFOLIO", 
      href: "#portfolio", 
      icon: FolderKanban 
    },
    { 
      label: "SMART JOB SEARCH", 
      href: "#smart-search", 
      icon: Cpu, 
      badge: "AI" 
    },
    { 
      label: "HOW IT WORKS", 
      href: "#workflow" 
    },
    { 
      label: "WHO IT'S FOR", 
      href: "#who-its-for" 
    }
  ];

  return (
    <motion.nav 
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-2.5' : 'py-5'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/85 backdrop-blur-2xl border border-white/90 shadow-[0_12px_35px_rgba(0,0,0,0.06)]' 
            : 'bg-white/65 backdrop-blur-xl border border-white/70 shadow-sm'
        }`}>
          <a href="#top" className="flex items-center gap-3 group select-none">
            <motion.div 
              whileHover={{ rotate: 8, scale: 1.05 }}
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 via-rose-700 to-red-900 flex items-center justify-center shadow-md shadow-red-700/25 text-white font-black text-xl shrink-0"
            >
              W
            </motion.div>
            <div className="text-left">
              <span className="font-black text-lg tracking-tight text-slate-900 block leading-tight">WINIFY</span>
              <span className="text-[10px] font-black text-red-700 tracking-widest uppercase block">CAREER SERVICES</span>
            </div>
          </a>
          
          <div className="hidden lg:flex items-center gap-5 xl:gap-7 text-[11px] uppercase tracking-wider font-extrabold text-slate-600">
            {navLinks.map((item, idx) => {
              if (item.isPrimary) {
                return (
                  <a
                    key={idx}
                    href={item.href}
                    className="relative group flex items-center gap-1.5 py-1 text-red-700 font-black tracking-wider transition-all hover:text-red-800"
                  >
                    <span>{item.label}</span>
                    <span className="text-[8px] font-black tracking-normal px-1.5 py-0.5 rounded-full bg-red-100/90 text-red-800 border border-red-200/80 shadow-[0_2px_8px_rgba(220,38,38,0.1)]">
                      {item.badge}
                    </span>
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-red-600 to-rose-600 rounded-full opacity-80 group-hover:opacity-100 transition-opacity" />
                  </a>
                );
              }
              return (
                <a
                  key={idx}
                  href={item.href}
                  className="transition-colors flex items-center gap-1.5 py-1 hover:text-red-700 font-bold"
                >
                  {renderIcon(item.icon, "w-3.5 h-3.5 text-red-600 shrink-0")}
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[9px] bg-red-100 text-red-800 px-1.5 py-0.5 rounded-full font-black tracking-normal border border-red-200/70">
                      {item.badge}
                    </span>
                  )}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={onOpenExport}
              title="Export complete deployable project ZIP"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-black text-xs transition-colors border border-slate-200 shadow-xs cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-red-600" />
              <span>EXPORT ZIP</span>
            </button>

            <CTAButton variant="primary" className="!py-2.5 !px-5 !text-xs !shadow-md hidden sm:flex">
              TALK TO WINIFY
            </CTAButton>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="lg:hidden w-10 h-10 rounded-xl bg-white/80 border border-slate-200 flex items-center justify-center text-slate-800 hover:text-red-600 transition-colors shadow-xs"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden mt-2 p-5 rounded-2xl bg-white/95 backdrop-blur-2xl border border-white shadow-2xl text-left"
            >
              <div className="space-y-2 mb-4">
                {navLinks.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between p-3 rounded-xl transition-colors text-xs uppercase tracking-wider ${
                      item.isPrimary
                        ? 'bg-red-50/80 text-red-900 font-black border border-red-100/80'
                        : 'hover:bg-red-50/70 text-slate-800 font-bold'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {renderIcon(item.icon, "w-4 h-4 text-red-600")}
                      <span>{item.label}</span>
                      {item.badge && (
                        <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-black tracking-normal ${
                          item.isPrimary 
                            ? 'bg-red-200/80 text-red-900' 
                            : 'bg-red-100 text-red-800 border border-red-200/70'
                        }`}>
                          {item.badge}
                        </span>
                      )}
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </a>
                ))}
              </div>

              <div className="pt-2 border-t border-slate-200 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenExport();
                  }}
                  className="w-full py-3 rounded-xl bg-slate-100 font-black text-xs text-slate-800 border border-slate-200 flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4 text-red-600" /> EXPORT FULL PROJECT (.ZIP)
                </button>

                <CTAButton variant="primary" className="w-full !py-3.5 !text-xs !shadow-lg">
                  TALK TO WINIFY
                </CTAButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

const Hero = () => {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothMouseY, [-250, 250], [5, -5]);
  const rotateY = useTransform(smoothMouseX, [-250, 250], [-5, 5]);

  const resumeX = useTransform(smoothMouseX, [-250, 250], [-10, 10]);
  const resumeY = useTransform(smoothMouseY, [-250, 250], [-8, 8]);

  const profileX = useTransform(smoothMouseX, [-250, 250], [14, -14]);
  const profileY = useTransform(smoothMouseY, [-250, 250], [12, -12]);

  const portfolioX = useTransform(smoothMouseX, [-250, 250], [-6, 6]);
  const portfolioY = useTransform(smoothMouseY, [-250, 250], [10, -10]);

  const glowX = useTransform(smoothMouseX, [-250, 250], [20, -20]);
  const glowY = useTransform(smoothMouseY, [-250, 250], [18, -18]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - (rect.left + rect.width / 2));
    mouseY.set(e.clientY - (rect.top + rect.height / 2));
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section 
      id="top"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 overflow-hidden scroll-mt-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="lg:col-span-6 max-w-xl text-left"
          >
            <motion.div 
              variants={fadeInUp}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 backdrop-blur-xl border border-red-200/90 text-red-700 text-xs font-black mb-6 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-red-600 animate-pulse" />
              <span className="tracking-widest uppercase">WINIFY READY-TO-JOB KIT</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.07] mb-6">
              Your Next Opportunity Starts With How You <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-rose-600 to-red-800">Present Yourself.</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-base sm:text-lg text-slate-600 mb-4 leading-relaxed font-medium">
              Your complete job-search system, built around your profile, target role and market.
            </motion.p>

            <motion.div 
              variants={fadeInUp} 
              whileHover={{ scale: 1.01 }}
              className="text-xs sm:text-sm text-red-900 font-bold mb-8 flex items-start sm:items-center gap-2.5 bg-red-50/85 backdrop-blur-md border border-red-200 rounded-2xl p-4 shadow-xs"
            >
              <Sparkles className="w-4 h-4 shrink-0 text-red-600 mt-0.5 sm:mt-0" />
              <span>Not a one-size-fits-all template. We shape your materials around your actual profile, target role and job market.</span>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center mb-8">
              <CTAButton className="text-sm">
                GET MY READY-TO-JOB KIT 
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1.5 transition-transform" />
              </CTAButton>
              <a 
                href="#portfolio" 
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-bold text-xs uppercase tracking-wider text-slate-700 bg-white/80 hover:bg-white border border-white/90 transition-all shadow-sm"
              >
                <FolderKanban className="w-4 h-4 text-red-600" />
                EXPLORE PORTFOLIO CREATION
              </a>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-widest text-slate-500 pt-3 border-t border-slate-200/80">
              <span className="text-red-700 flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> Present Yourself</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-700">Stand Out</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-900 font-extrabold">Get Hired</span>
            </motion.div>
          </motion.div>

          <motion.div 
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="lg:col-span-6 relative h-[570px] hidden sm:block perspective-1000"
          >
            <motion.div 
              style={{ x: glowX, y: glowY }}
              className="absolute inset-0 bg-gradient-to-tr from-red-500/15 via-rose-500/10 to-transparent blur-3xl rounded-full pointer-events-none" 
            />

            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="absolute -top-2 left-6 z-40"
            >
              <FloatingBadge icon={Sparkles} duration={5.2} delay={0.2} variant="glass">
                PROFILE-FIRST
              </FloatingBadge>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="absolute top-14 right-0 z-40"
            >
              <FloatingBadge icon={Target} duration={6.1} delay={0.6} variant="redGlass">
                TARGET ROLE
              </FloatingBadge>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.6 }}
              className="absolute bottom-24 right-4 z-40"
            >
              <FloatingBadge icon={Bot} duration={5.7} delay={1} variant="darkGlass">
                AI-ASSISTED
              </FloatingBadge>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95, duration: 0.6 }}
              className="absolute bottom-4 left-4 z-40"
            >
              <FloatingBadge icon={Compass} duration={6.4} delay={1.4} variant="glass">
                JOB MARKET ALIGNED
              </FloatingBadge>
            </motion.div>

            <motion.div 
              style={{ x: profileX, y: profileY }}
              initial={{ opacity: 0, scale: 0.94, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.8, ease: "easeOut" }}
              className="absolute top-4 right-6 w-80 bg-white/85 backdrop-blur-2xl border border-white/90 rounded-2xl shadow-xl shadow-red-950/10 p-5 z-10 text-left"
            >
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-md bg-[#0A66C2] flex items-center justify-center text-white text-[10px] font-bold">
                    in
                  </div>
                  <span className="text-xs font-black text-slate-800">Recruiter Optimization</span>
                </div>
                <span className="px-2 py-0.5 text-[9px] font-black bg-blue-50 text-blue-700 rounded-full">
                  Profile Narrative
                </span>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=140&h=140&q=80" 
                  alt="Candidate" 
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-500/80" 
                />
                <div>
                  <div className="font-black text-xs text-slate-900 leading-tight">Jordan Tyler</div>
                  <div className="text-[10px] text-slate-500 font-medium">Senior Product Operations Specialist</div>
                </div>
              </div>
              <div className="text-[10px] bg-slate-50 rounded-lg p-2 text-slate-600 leading-relaxed font-medium mb-2 border border-slate-150">
                "Product strategy & operations lead driving roadmap governance, cross-functional pods, and customer telemetry."
              </div>
            </motion.div>

            <motion.div 
              style={{ x: resumeX, y: resumeY }}
              initial={{ opacity: 0, scale: 0.94, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.85, ease: "easeOut" }}
              className="absolute top-24 left-4 w-84 bg-white/95 backdrop-blur-3xl border border-white rounded-3xl shadow-2xl shadow-red-900/15 p-6 z-20 text-left"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center text-red-600">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-black text-slate-900">ATS Resume Enhancement</div>
                    <div className="text-[10px] text-slate-400 font-bold">Standard Single-Column Layout</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-1 rounded-full text-[10px] font-black">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>ATS-Friendly</span>
                </div>
              </div>

              <div className="space-y-2 text-left mb-4">
                <div className="text-[11px] font-bold text-slate-800 border-b border-slate-100 pb-1 flex justify-between">
                  <span>EXPERIENCE: STRATEGY & OPERATIONS</span>
                  <span className="text-slate-400 text-[10px]">2022 – PRESENT</span>
                </div>
                <div className="text-[10px] text-slate-600 leading-relaxed space-y-1">
                  <p className="flex items-start gap-1.5">
                    <span className="text-red-500 font-bold">›</span>
                    <span>Spearheaded cross-functional delivery across 5 pods, accelerating deployment cadence by <strong>28%</strong>.</span>
                  </p>
                  <p className="flex items-start gap-1.5">
                    <span className="text-red-500 font-bold">›</span>
                    <span>Integrated key telemetry frameworks, boosting activation retention metrics from <strong>62% to 81%</strong>.</span>
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                {['Scrum Governance', 'Roadmapping', 'SQL / Telemetry', 'B2B Scaling'].map((tag, idx) => (
                  <span key={idx} className="text-[9px] font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div 
              style={{ x: portfolioX, y: portfolioY }}
              initial={{ opacity: 0, scale: 0.94, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.9, ease: "easeOut" }}
              className="absolute bottom-10 left-12 right-6 bg-white/95 backdrop-blur-2xl border border-white rounded-2xl shadow-xl shadow-red-950/10 p-3.5 z-30 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-red-600 to-rose-700 flex items-center justify-center text-white shrink-0 shadow-md">
                  <FolderKanban className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-black text-slate-900">Professional Portfolio Creation</div>
                  <div className="text-[10px] text-slate-600 font-medium">Show your work • Structured case studies & projects</div>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-1 text-[11px] font-bold text-red-700 bg-red-50 px-2.5 py-1 rounded-lg border border-red-100">
                <Sparkles className="w-3 h-3 text-red-600" /> Showcase
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const RevealSection = () => {
  return (
    <section className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-70px" }}
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-700 text-xs font-black mb-4 uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" /> THE HIDDEN BOTTLENECK
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Your Resume Is Only One Part of Your Job Search.
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            You can have strong experience, valuable skills and good qualifications — but your job search becomes harder when you focus only on applying with a resume while LinkedIn, portfolio, job portals, outreach, and interview prep are unaligned.
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-14 p-5 sm:p-7 rounded-3xl bg-white/70 backdrop-blur-xl border border-slate-200/80 shadow-sm text-center"
        >
          <div className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-3">
            THE FRAGMENTED APPLICATION REALITY
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm font-black text-slate-800">
            <span className="px-3.5 py-2 rounded-xl bg-slate-100 text-slate-600 border border-slate-200">RESUME</span>
            <span className="text-red-500 font-bold text-base">✕</span>
            <span className="px-3.5 py-2 rounded-xl bg-slate-100 text-slate-600 border border-slate-200">LINKEDIN</span>
            <span className="text-red-500 font-bold text-base">✕</span>
            <span className="px-3.5 py-2 rounded-xl bg-slate-100 text-slate-600 border border-slate-200">PORTFOLIO</span>
            <span className="text-red-500 font-bold text-base">✕</span>
            <span className="px-3.5 py-2 rounded-xl bg-slate-100 text-slate-600 border border-slate-200">OUTREACH</span>
            <span className="text-red-500 font-bold text-base">✕</span>
            <span className="px-3.5 py-2 rounded-xl bg-slate-100 text-slate-600 border border-slate-200">INTERVIEW</span>
          </div>

          <div className="mt-5 pt-4 border-t border-slate-200/60 flex items-center justify-center gap-2 text-xs sm:text-sm font-extrabold text-red-700">
            <Sparkles className="w-4 h-4 text-red-600 shrink-0" />
            <span>WHAT IF THEY ALL WORKED TOGETHER AROUND YOUR ACTUAL CAREER STORY?</span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          <GlassCard level="level-1" className="lg:col-span-5 p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200/60">
                <div className="flex items-center gap-2 text-slate-600 font-black text-xs uppercase tracking-widest">
                  <AlertCircle className="w-4 h-4 text-amber-500" />
                  <span>The Isolated Method</span>
                </div>
                <FloatingBadge variant="mutedGlass" duration={0}>
                  LOW CONVERSION
                </FloatingBadge>
              </div>
              <h3 className="text-2xl font-black text-slate-800 mb-6 text-left">Just Applying</h3>
              
              <div className="space-y-4 relative text-left">
                <div className="p-4 bg-white/80 border border-slate-200/90 rounded-2xl flex items-center justify-between shadow-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-xs">01</div>
                    <span className="font-bold text-sm text-slate-700">Isolated Resume</span>
                  </div>
                  <span className="text-xs text-slate-400 font-medium">Standard upload</span>
                </div>

                <div className="flex justify-center text-slate-400">
                  <ArrowRight className="w-5 h-5 rotate-90 text-slate-300" />
                </div>

                <div className="p-4 bg-white/80 border border-slate-200/90 rounded-2xl flex items-center justify-between shadow-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-xs">02</div>
                    <span className="font-bold text-sm text-slate-700">Mass Job Applications</span>
                  </div>
                  <span className="text-xs text-slate-400 font-medium">500+ applicants queue</span>
                </div>

                <div className="flex justify-center text-slate-400">
                  <ArrowRight className="w-5 h-5 rotate-90 text-slate-300" />
                </div>

                <div className="p-4 bg-red-50/70 border-2 border-dashed border-red-300 rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center text-red-600 font-bold text-xs">03</div>
                    <span className="font-bold text-sm text-red-900">Wait in Uncertainty</span>
                  </div>
                  <span className="text-xs text-red-600 font-bold flex items-center gap-1">
                    <X className="w-3.5 h-3.5" /> Black Hole
                  </span>
                </div>
              </div>
            </div>

            <p className="mt-8 text-xs text-slate-500 font-semibold text-center">
              Relying on one isolated document without a cohesive multi-channel presence can leave you with fewer meaningful responses.
            </p>
          </GlassCard>

          <GlassCard level="level-3" className="lg:col-span-7 p-8 flex flex-col justify-between relative">
            <div>
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-red-100">
                <div className="flex items-center gap-2 text-red-700 font-black text-xs uppercase tracking-widest">
                  <Sparkles className="w-4 h-4 text-red-600" />
                  <span>The Winify System</span>
                </div>
                <FloatingBadge icon={Check} variant="redGlass" duration={0}>
                  FULL COHESION
                </FloatingBadge>
              </div>

              <div className="text-xs font-black uppercase text-red-700 tracking-wider mb-1 text-left">ONE KIT. ONE COORDINATED JOB-SEARCH SYSTEM.</div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-6 text-left">Building Your Position</h3>

              <div className="grid sm:grid-cols-2 gap-3.5 mb-6 text-left">
                {[
                  { title: "ATS Optimized Resume", desc: "Structured around your actual experience", icon: FileText, badge: "ATS-Friendly" },
                  { title: "Targeted Cover Letter", desc: "Connects your experience with the role", icon: Mail, badge: "Personalized" },
                  { title: "LinkedIn Brand Makeover", desc: "Positioned around your career direction", icon: Linkedin, badge: "Recruiter-Ready" },
                  { title: "Professional Portfolio", desc: "Shows your work instead of just describing it", icon: FolderKanban, badge: "Showcase" },
                  { title: "Job Portal Harmonization", desc: "Consistent information across portals", icon: Target, badge: "Consistency" },
                  { title: "Personalized Cold Emails", desc: "Outreach tailored for recruiters vs. hiring managers", icon: Send, badge: "Targeted" },
                  { title: "Hiring Manager Scripts", desc: "Tailored direct conversation starters", icon: MessageSquare, badge: "Conversation" },
                  { title: "Interview Prep System", desc: "Answers prepared around your background", icon: Bot, badge: "Interview Ready" }
                ].map((item, idx) => (
                  <div 
                    key={idx}
                    className="p-3.5 rounded-2xl bg-white/90 border border-slate-200/80 shadow-xs flex items-start gap-3 hover:border-red-200 hover:bg-red-50/40 transition-all cursor-default"
                  >
                    <div className="w-8 h-8 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-600 shrink-0 mt-0.5">
                      {renderIcon(item.icon, "w-4 h-4")}
                    </div>
                    <div>
                      <div className="font-extrabold text-sm text-slate-900 leading-snug">{item.title}</div>
                      <div className="text-[11px] text-slate-500 font-medium">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-gradient-to-r from-red-50/90 to-rose-50/90 border border-red-200 text-center">
              <span className="text-xs sm:text-sm font-black text-red-900 flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4 text-red-600 shrink-0" />
                Every touchpoint works together to reinforce your credibility, experience, and value.
              </span>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

const IdentitySection = () => {
  const quotes = [
    { q: "I keep applying to dozens of roles but rarely hear back.", icon: AlertCircle, sticker: "APPLY BETTER" },
    { q: "My resume doesn't feel like it reflects the level I'm truly capable of.", icon: FileText, sticker: "ATS-FRIENDLY" },
    { q: "I have projects and practical work, but no clear way to showcase them.", icon: FolderKanban, sticker: "PORTFOLIO" },
    { q: "I don't know what to write when messaging recruiters or hiring managers.", icon: Send, sticker: "OUTREACH" },
    { q: "My LinkedIn profile looks like a generic resume duplicate.", icon: Linkedin, sticker: "PROFILE POSITIONING" },
    { q: "I'm a fresher and don't know how to compete with experienced applicants.", icon: Users, sticker: "PROJECT-LED" },
    { q: "I'm changing career paths and don't know how to translate my skills.", icon: TrendingUp, sticker: "TRANSFERABLE SKILLS" },
    { q: "I'm targeting international roles in the US, UK, or Canada and feel unready.", icon: Compass, sticker: "REGIONAL STANDARDS" }
  ];

  return (
    <section className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-black mb-3 uppercase tracking-wider">
            COMMON OBSTACLES
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Does Your Job Search Feel Like This?
          </h2>
          <p className="text-base text-slate-600 font-medium">Recognizing the bottleneck is the first step to fixing it.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {quotes.map((item, idx) => (
            <GlassCard key={idx} level="level-1" className="p-6 flex flex-col justify-between text-left relative">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-600 shadow-xs">
                  {renderIcon(item.icon, "w-5 h-5")}
                </div>
                <FloatingBadge variant="glass" duration={5} delay={idx * 0.2}>
                  {item.sticker}
                </FloatingBadge>
              </div>
              <p className="text-slate-800 font-bold text-sm sm:text-base leading-relaxed mb-6">
                "{item.q}"
              </p>
              <div className="text-[11px] font-black uppercase tracking-wider text-red-700 flex items-center gap-1.5 pt-3 border-t border-slate-100">
                <CheckCircle2 className="w-3.5 h-3.5 text-red-600" /> Winify Solves This
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const services = [
    { 
      num: "01", 
      icon: FileText, 
      title: "ATS Resume Enhancement", 
      desc: "We don't simply place your text into a format. Your experience, achievements, strengths and target role determine how your resume is structured.", 
      sticker: "ATS-FRIENDLY",
      highlight: false 
    },
    { 
      num: "02", 
      icon: Mail, 
      title: "Professional Cover Letter", 
      desc: "Written around your actual background, the opportunity you're targeting and the value you can bring — not a boilerplate template.", 
      sticker: "TARGETED",
      highlight: false 
    },
    { 
      num: "03", 
      icon: Linkedin, 
      title: "LinkedIn Makeover", 
      desc: "Positioned around who you are, what you've achieved, what roles you want next and how you want to be found. Not a duplicate resume.", 
      sticker: "PROFILE POSITIONING",
      highlight: false 
    },
    { 
      num: "04", 
      icon: Target, 
      title: "Job Portal Makeover", 
      desc: "Keep your credentials, target titles and search keywords consistent across major job portals.", 
      sticker: "PROFILE CONSISTENCY",
      highlight: false 
    },
    { 
      num: "05", 
      icon: FolderKanban, 
      title: "Professional Portfolio Creation", 
      desc: "Show your work. Don't just describe it. Planned and built around your work, projects, case studies and desired role direction.", 
      sticker: "BUILT AROUND YOU",
      highlight: true 
    },
    { 
      num: "06", 
      icon: MessageSquare, 
      title: "Personalized Cold Emails", 
      desc: "Different candidates need different messages. Outreach tailored for recruiters vs. hiring managers based on your profile, role and target market.", 
      sticker: "PERSONALIZED OUTREACH",
      highlight: true 
    },
    { 
      num: "07", 
      icon: Users, 
      title: "LinkedIn Outreach Frameworks", 
      desc: "Your message changes depending on who you're contacting and why — tailored for recruiters, hiring managers, referrals and networking.", 
      sticker: "CONVERSATIONS",
      highlight: true 
    },
    { 
      num: "08", 
      icon: Wrench, 
      title: "Free Job Search Tools", 
      desc: "Curated collection of practical tools to discover roles, research companies, track applications and stay organized.", 
      sticker: "CURATED TOOLS",
      highlight: true 
    },
    { 
      num: "09", 
      icon: Bot, 
      title: "Interview Preparation Kit", 
      desc: "Prepare around your actual experience, projects and the specific questions you are most likely to face in your target field.", 
      sticker: "INTERVIEW READY",
      highlight: true 
    }
  ];

  return (
    <section id="services" className="py-24 relative z-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-3">
            <FloatingBadge icon={Sparkles} variant="redGlass" duration={5}>
              WHAT YOU GET
            </FloatingBadge>
            <FloatingBadge icon={CheckCircle2} variant="glass" duration={6}>
              9-PART SYSTEM
            </FloatingBadge>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-3">
            THE 9-PART READY-TO-JOB KIT
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            Your complete professional toolkit. Everything included in your package to present yourself with authority.
          </p>
        </div>

        <div className="max-w-xl mx-auto mb-12 text-center">
          <GlassCard level="level-2" className="inline-flex items-center gap-3.5 px-6 py-3.5">
            <div className="w-8 h-8 rounded-xl bg-red-600 text-white flex items-center justify-center shrink-0 shadow-xs">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="text-xs font-black tracking-wider text-slate-900 uppercase">
                WHAT YOU GET: 9 COMPLETE DELIVERABLES
              </div>
              <div className="text-[11px] font-bold text-red-700">
                Your profile. Your target role. Your market.
              </div>
            </div>
          </GlassCard>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <GlassCard 
              key={idx}
              level={service.highlight ? "level-3" : "level-2"}
              className="p-7 flex flex-col justify-between text-left"
            >
              <div>
                <div className="flex justify-between items-center mb-5">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    service.highlight 
                      ? 'bg-red-600 text-white shadow-md shadow-red-600/30' 
                      : 'bg-red-50 text-red-600 border border-red-100'
                  }`}>
                    {renderIcon(service.icon, "w-6 h-6")}
                  </div>
                  <FloatingBadge variant={service.highlight ? "redGlass" : "glass"} duration={0}>
                    {service.sticker}
                  </FloatingBadge>
                </div>
                <div className="text-xs font-black text-slate-400 mb-1">DELIVERABLE {service.num}</div>
                <h3 className="text-lg font-black mb-2 text-slate-900">{service.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium mb-4">{service.desc}</p>
              </div>

              {service.highlight && (
                <div className="pt-3 border-t border-red-100 flex items-center gap-1.5 text-[11px] font-black text-red-700">
                  <Sparkles className="w-3.5 h-3.5" /> High-Value Component
                </div>
              )}
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

const WorkflowProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.25 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView || isHovered) return;

    const timer = setInterval(() => {
      setActiveStep((prev) => {
        if (prev === 4) {
          setIsCompleted(true);
          setTimeout(() => setIsCompleted(false), 1600);
          return 0;
        }
        return prev + 1;
      });
    }, 2600);

    return () => clearInterval(timer);
  }, [isInView, isHovered]);

  const stages = [
    {
      step: "01",
      name: "UNDERSTAND",
      summary: "Your profile, experience & strengths",
      badge: "PROFILE-FIRST",
      icon: CheckCircle2,
      renderVisual: (isActive) => (
        <div className={`p-3.5 rounded-2xl border transition-all text-left space-y-2 relative overflow-hidden ${
          isActive ? 'bg-white shadow-sm border-red-200' : 'bg-white/70 border-slate-200/80'
        }`}>
          {isActive && (
            <motion.div 
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent"
            />
          )}
          <div className="flex items-center justify-between text-[10px] font-black uppercase text-slate-500 border-b border-slate-100 pb-1.5">
            <span>Diagnostic Signal</span>
            <span className="text-emerald-700 font-extrabold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> VERIFIED
            </span>
          </div>
          <div className="space-y-1.5 text-[11px] font-bold text-slate-800">
            <div className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-red-600 shrink-0" /> Strengths Audit</div>
            <div className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-red-600 shrink-0" /> Experience Metrics</div>
          </div>
        </div>
      )
    },
    {
      step: "02",
      name: "TARGET",
      summary: "Role, industry & job market",
      badge: "ROLE ALIGNED",
      icon: Target,
      renderVisual: (isActive) => (
        <div className={`p-3.5 rounded-2xl border transition-all text-left space-y-2 relative overflow-hidden ${
          isActive ? 'bg-slate-950 text-white border-slate-800 shadow-md' : 'bg-slate-900/90 text-slate-200 border-slate-800'
        }`}>
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-black uppercase tracking-wider text-red-400">Market Radar</span>
            <span className="text-[9px] font-black bg-slate-800 px-1.5 py-0.5 rounded text-slate-300 border border-slate-700">USA • UK • CA</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-black pt-0.5">
            <motion.div 
              animate={isActive ? { rotate: 360 } : {}}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="w-5 h-5 rounded-full border border-dashed border-red-400 flex items-center justify-center shrink-0"
            >
              <Target className="w-3 h-3 text-red-400" />
            </motion.div>
            <span className="truncate">Role Calibration</span>
          </div>
        </div>
      )
    },
    {
      step: "03",
      name: "POSITION",
      summary: "Your professional story & direction",
      badge: "STRATEGIC STORY",
      icon: Sparkles,
      renderVisual: (isActive) => (
        <div className={`p-3 rounded-2xl border transition-all text-center space-y-2 ${
          isActive ? 'bg-white shadow-sm border-red-200' : 'bg-white/70 border-slate-200/80'
        }`}>
          <div className="flex justify-center items-center gap-1 text-[10px] font-black text-slate-600">
            <span className="px-1.5 py-0.5 bg-slate-100 rounded">Strengths</span>
            <span className="text-red-500 font-bold">+</span>
            <span className="px-1.5 py-0.5 bg-slate-100 rounded">Target Value</span>
          </div>
          <div className="p-1.5 bg-gradient-to-r from-red-600 to-rose-700 text-white rounded-xl text-[11px] font-black uppercase shadow-xs">
            Unified Value Narrative
          </div>
        </div>
      )
    },
    {
      step: "04",
      name: "BUILD",
      summary: "Resume, LinkedIn, portfolio & career assets",
      badge: "BUILT AROUND YOU",
      icon: Layers,
      isPrimaryDeliverable: true,
      renderVisual: (isActive) => (
        <div className={`p-3 rounded-2xl border transition-all text-left space-y-2 relative ${
          isActive ? 'bg-red-50/90 border-red-300 shadow-md ring-1 ring-red-200' : 'bg-red-50/50 border-red-200/70'
        }`}>
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-black text-red-900 uppercase">Presence Hub</span>
            <span className="text-[8px] font-black bg-red-600 text-white px-1.5 py-0.5 rounded-full shadow-xs">
              NO FIXED FORMAT
            </span>
          </div>
          <div className="grid grid-cols-2 gap-1 text-[9px] font-black text-slate-800">
            <span className="bg-white p-1 rounded-lg text-center border border-slate-200/80 shadow-2xs">Resume</span>
            <span className="bg-white p-1 rounded-lg text-center border border-slate-200/80 shadow-2xs">LinkedIn</span>
            <span className="bg-white p-1 rounded-lg text-center border border-red-200 text-red-700 font-black shadow-2xs">Portfolio</span>
            <span className="bg-white p-1 rounded-lg text-center border border-slate-200/80 shadow-2xs">Cover Letter</span>
          </div>
          <div className="text-[8.5px] font-bold text-red-800 text-center leading-tight">
            Built around your work, projects and target role
          </div>
        </div>
      )
    },
    {
      step: "05",
      name: "PREPARE",
      summary: "Outreach, job-search tools & interview preparation",
      badge: "READY TO APPLY",
      icon: Bot,
      renderVisual: (isActive) => (
        <div className={`p-3 rounded-2xl border transition-all text-center space-y-2 ${
          isActive ? 'bg-white shadow-sm border-emerald-300' : 'bg-white/70 border-slate-200/80'
        }`}>
          <div className="text-[9px] font-black text-slate-500 uppercase tracking-tight">
            Outreach + AI + Interview Kit
          </div>
          <div className="inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-full text-[10px] font-black">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>READY TO APPLY BETTER</span>
          </div>
        </div>
      )
    }
  ];

  return (
    <section ref={sectionRef} id="workflow" className="py-24 relative z-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-black mb-3 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-red-600" />
            <span>HOW WE WORK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-3">
            01 → 02 → 03 → 04 → 05
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            Our 5-stage personalized sequence. Built entirely around your background, target role and market standards.
          </p>
        </div>

        <AnimatePresence>
          {isCompleted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: -10 }}
              className="mb-8 p-3.5 rounded-2xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white text-center font-black text-xs sm:text-sm tracking-wider uppercase shadow-xl flex items-center justify-center gap-2.5 max-w-xl mx-auto"
            >
              <span>01 ✓ 02 ✓ 03 ✓ 04 ✓ 05 ✓</span>
              <span className="px-2.5 py-0.5 rounded-full bg-white text-red-700 font-black text-xs shadow-xs">
                READY-TO-JOB
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        <div 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative"
        >
          <div className="hidden lg:block absolute top-[52px] left-12 right-12 h-1 bg-slate-200/80 rounded-full z-0 overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-red-600 via-rose-600 to-red-700 rounded-full"
              animate={{ width: `${((activeStep + 0.5) / 5) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
            <motion.div 
              animate={{ x: ["-10%", "110%"] }}
              transition={{ repeat: Infinity, duration: 2.4, ease: "linear" }}
              className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-white to-transparent blur-[2px]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 relative z-10">
            {stages.map((stg, idx) => {
              const isActive = activeStep === idx;

              return (
                <motion.div
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  animate={{ 
                    scale: isActive ? 1.03 : 0.98,
                    y: isActive ? -4 : 0
                  }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className={`p-5 rounded-3xl backdrop-blur-2xl border transition-all cursor-pointer flex flex-col justify-between text-left ${
                    isActive 
                      ? 'bg-white/95 border-red-400 shadow-[0_16px_40px_rgba(220,38,38,0.14)] ring-2 ring-red-200/80' 
                      : 'bg-white/70 border-white/80 opacity-80 hover:opacity-100 hover:bg-white/85 shadow-sm'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-11 h-11 rounded-2xl flex items-center justify-center font-black text-sm transition-colors ${
                        isActive 
                          ? 'bg-gradient-to-br from-red-600 to-rose-700 text-white shadow-md shadow-red-600/30' 
                          : 'bg-red-50 text-red-700 border border-red-100'
                      }`}>
                        {renderIcon(stg.icon, "w-5 h-5")}
                      </div>
                      <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full border transition-colors ${
                        isActive 
                          ? 'bg-red-100 text-red-900 border-red-200 font-black' 
                          : 'bg-slate-100 text-slate-600 border-slate-200'
                      }`}>
                        {stg.badge}
                      </span>
                    </div>

                    <div className="text-[10px] font-black text-red-700 tracking-widest uppercase mb-0.5">
                      STAGE {stg.step}
                    </div>
                    <h3 className="text-base font-black text-slate-900 tracking-tight mb-1">
                      {stg.name}
                    </h3>
                    <p className="text-xs text-slate-600 font-medium leading-snug mb-4">
                      "{stg.summary}"
                    </p>
                  </div>

                  <div>
                    {stg.renderVisual ? stg.renderVisual(isActive) : null}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 bg-white/90 border border-red-200 rounded-full shadow-sm">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <span className="text-xs sm:text-sm font-black text-slate-900">
              01 Understand → 02 Target → 03 Position → 04 Build → 05 Prepare = <span className="text-red-700">READY-TO-JOB</span>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

const PortfolioSection = () => {
  const [selectedDiscipline, setSelectedDiscipline] = useState(0);
  const [transformerMode, setTransformerMode] = useState('custom');

  const candidateArchitectures = [
    {
      id: "designers",
      title: "Designers & Creatives",
      icon: Palette,
      format: "Visual Project Showcase",
      badge: "Visual-First Architecture",
      headline: "Visual Case Studies, Design Systems & Interactive Prototypes",
      desc: "Clean visual project presentations, design systems, wireframes, and measured user experience impact.",
      deliverables: ["Visual Case Studies", "Design Systems & Tokens", "Live Prototypes", "Usability Conversions"],
      hiringManagerLooksFor: "Visual taste, systems thinking, user empathy, and business outcome metrics."
    },
    {
      id: "developers",
      title: "Developers & Technical Roles",
      icon: Code,
      format: "Project + Technology + GitHub Architecture",
      badge: "Code & Systems Architecture",
      headline: "Live Deployed Demos, Clean Repositories & System Blueprints",
      desc: "System scale, technology stack breakdown, clean code repositories, API integrations, and architecture decisions.",
      deliverables: ["Curated Repositories", "System Architecture Diagrams", "Production Deployments", "Tech Stack Specs"],
      hiringManagerLooksFor: "Clean code practices, architecture reasoning, performance, and engineering judgment."
    },
    {
      id: "engineers",
      title: "Engineers & Data Analysts",
      icon: LineChart,
      format: "Technical Case Studies & Analysis",
      badge: "Data & Systems Analysis",
      headline: "Telemetry Dashboards, Query Architecture & Process Optimization",
      desc: "Complex data models, telemetry dashboards, SQL/Python query architecture, and measurable performance gains.",
      deliverables: ["Dashboard Blueprints", "Data Modeling Case Studies", "Technical Reports", "Query Documentation"],
      hiringManagerLooksFor: "Analytical rigor, structured thinking, commercial impact, and technical clarity."
    },
    {
      id: "marketers",
      title: "Marketers & Business Specialists",
      icon: TrendingUp,
      format: "Campaigns, Strategy & Results",
      badge: "Commercial Impact Architecture",
      headline: "Go-to-Market Roadmaps, Growth Funnels & Pipeline Attribution",
      desc: "Go-to-market roadmaps, campaign acquisition metrics, conversion funnels, CAC/LTV improvements, and pipeline growth.",
      deliverables: ["Full-Funnel Blueprints", "GTM Strategy Slides", "Revenue & Pipeline Attribution", "Experimentation Logs"],
      hiringManagerLooksFor: "Strategic vision, growth track-record, data-driven decisions, and pipeline velocity."
    },
    {
      id: "freshers",
      title: "Freshers & Graduates",
      icon: Award,
      format: "Academic, Practical & Personal Projects",
      badge: "Proof of Competence Showcase",
      headline: "Capstone Blueprints, Practical Builds & Applied Knowledge",
      desc: "Transform capstone projects, academic research, and coursework into high-credibility proof of competence.",
      deliverables: ["Capstone Project Deep Dives", "Hackathon Builds", "Practical Skill Blueprints", "Problem Solving Demos"],
      hiringManagerLooksFor: "Foundational fundamentals, hands-on initiative, and execution speed."
    },
    {
      id: "career-changers",
      title: "Career Changers",
      icon: Layers,
      format: "Transferable-Competency Portfolio",
      badge: "Bridge-to-New-Role Architecture",
      headline: "Cross-Functional Capability & Real-World Bridge Projects",
      desc: "Spotlight cross-functional capability so hiring managers see demonstrable proof rather than tenure gaps.",
      deliverables: ["Bridge Case Studies", "Transferable Capability Proof", "New Domain Builds", "Transition Narrative"],
      hiringManagerLooksFor: "Demonstrated competence in the new field, maturity, and adaptive learning."
    }
  ];

  const activeArch = candidateArchitectures[selectedDiscipline];

  return (
    <section id="portfolio" className="py-28 relative z-10 bg-gradient-to-b from-transparent via-red-50/30 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-4xl mx-auto mb-14">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
            <FloatingBadge icon={FolderKanban} variant="redGlass" duration={5.2}>
              SPECIALIZED SERVICE SPOTLIGHT
            </FloatingBadge>
            <FloatingBadge icon={Sparkles} variant="glass" duration={6.1}>
              SHOW YOUR WORK
            </FloatingBadge>
          </div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight mb-5 leading-[1.07]"
          >
            YOUR WORK DESERVES MORE THAN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-rose-600 to-red-800">
              A BULLET POINT.
            </span>
          </motion.h2>

          <p className="text-lg sm:text-xl text-slate-800 font-bold leading-relaxed mb-3">
            “Your resume tells employers what you've done. Your portfolio can show what you can actually do.”
          </p>

          <p className="text-base text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto">
            We don't fit every candidate into the same portfolio format. We plan and build your portfolio around your profile, projects, experience, target role, industry and job market.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-16 relative">
          <div className="absolute -top-3 left-6 z-20">
            <FloatingBadge icon={X} variant="mutedGlass" duration={5.5}>
              NO FIXED FORMAT
            </FloatingBadge>
          </div>
          <div className="absolute -top-3 right-6 z-20">
            <FloatingBadge icon={Sparkles} variant="redGlass" duration={6}>
              BUILT AROUND YOUR CAREER
            </FloatingBadge>
          </div>

          <GlassCard level="level-3" className="p-8 sm:p-12 text-center">
            <div className="text-xs font-black tracking-widest uppercase text-red-700 mb-2">
              FOUNDATIONAL DIFFERENTIATION
            </div>

            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4 leading-tight">
              WE DON'T FIT YOU INTO A PORTFOLIO TEMPLATE. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-rose-600">
                WE BUILD THE PORTFOLIO AROUND YOU.
              </span>
            </h3>

            <div className="my-6 inline-flex items-center gap-2 p-1.5 bg-slate-100/90 rounded-2xl border border-slate-200">
              <button
                onClick={() => setTransformerMode('template')}
                className={`px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                  transformerMode === 'template' 
                    ? 'bg-white text-slate-800 shadow-sm' 
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Generic Template View
              </button>
              <button
                onClick={() => setTransformerMode('custom')}
                className={`px-4 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer ${
                  transformerMode === 'custom' 
                    ? 'bg-red-600 text-white shadow-md shadow-red-600/30' 
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                Custom Architecture
              </button>
            </div>

            <AnimatePresence mode="wait">
              {transformerMode === 'template' ? (
                <motion.div
                  key="template-view"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 rounded-2xl bg-slate-50 border-2 border-dashed border-slate-300 max-w-2xl mx-auto mb-8 text-center"
                >
                  <div className="text-xs font-black uppercase text-slate-400 mb-2">FIXED TEMPLATE SCHEME</div>
                  <div className="text-sm font-bold text-slate-600 mb-2">Generic Project Grid (Same 3 Images + Title for Everyone)</div>
                  <div className="text-xs text-red-600 font-semibold">
                    ✕ Does not reflect whether you write code, design interfaces, manage pipelines, or lead campaigns.
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="custom-view"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 rounded-2xl bg-white/95 border border-red-200 shadow-sm max-w-3xl mx-auto mb-8 text-center"
                >
                  <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-black text-slate-800">
                    <span className="px-3 py-1.5 rounded-xl bg-red-50 text-red-900 border border-red-100">YOUR PROFILE</span>
                    <span className="text-red-500 font-bold">+</span>
                    <span className="px-3 py-1.5 rounded-xl bg-red-50 text-red-900 border border-red-100">YOUR PROJECTS</span>
                    <span className="text-red-500 font-bold">+</span>
                    <span className="px-3 py-1.5 rounded-xl bg-red-50 text-red-900 border border-red-100">YOUR TARGET ROLE</span>
                    <span className="text-red-500 font-bold">=</span>
                    <span className="px-4 py-1.5 rounded-xl bg-red-600 text-white font-black shadow-xs">CUSTOM PORTFOLIO STRUCTURE</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-left pt-6 border-t border-red-100">
              {[
                "No fixed portfolio format",
                "No one-template-for-everyone",
                "Personalized project selection",
                "Personalized structure & narrative",
                "Personalized presentation",
                "Target role alignment",
                "Job market standards (US/UK/CA)",
                "Proof of Capability"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 p-3 rounded-2xl bg-white/90 border border-slate-200/80 shadow-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="text-xs font-bold text-slate-800 leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 mb-8 max-w-5xl mx-auto">
            {candidateArchitectures.map((cand, idx) => {
              const isActive = selectedDiscipline === idx;
              return (
                <motion.button
                  key={idx}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setSelectedDiscipline(idx)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-black transition-all cursor-pointer ${
                    isActive
                      ? 'bg-red-600 text-white shadow-md shadow-red-600/30 scale-102 ring-2 ring-red-300'
                      : 'bg-white/85 text-slate-700 hover:bg-white border border-slate-200 hover:border-red-200'
                  }`}
                >
                  {renderIcon(cand.icon, `w-4 h-4 ${isActive ? 'text-white' : 'text-red-600'}`)}
                  <span>{cand.title}</span>
                </motion.button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeArch.id}
              initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <GlassCard level="level-2" className="max-w-5xl mx-auto p-7 sm:p-9 text-left">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-150 mb-6">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center text-red-600 shadow-xs">
                      {renderIcon(activeArch.icon, "w-6 h-6")}
                    </div>
                    <div>
                      <div className="text-xs font-black uppercase tracking-wider text-red-700">{activeArch.format}</div>
                      <h4 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">{activeArch.title}</h4>
                    </div>
                  </div>
                  <FloatingBadge icon={Sparkles} variant="redGlass" duration={0}>
                    {activeArch.badge}
                  </FloatingBadge>
                </div>

                <div className="grid md:grid-cols-12 gap-8">
                  <div className="md:col-span-7 space-y-4">
                    <div>
                      <div className="text-[11px] font-black uppercase tracking-wider text-slate-400 mb-1">Architecture Objective</div>
                      <p className="text-sm sm:text-base font-bold text-slate-900 leading-snug">{activeArch.headline}</p>
                    </div>

                    <div>
                      <div className="text-[11px] font-black uppercase tracking-wider text-slate-400 mb-1">Content Strategy & Overview</div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">{activeArch.desc}</p>
                    </div>
                  </div>

                  <div className="md:col-span-5 space-y-4">
                    <div className="p-4 rounded-2xl bg-red-50/70 border border-red-100">
                      <div className="text-[10px] font-black uppercase tracking-wider text-red-700 mb-2">Tailored Deliverables</div>
                      <div className="space-y-1.5">
                        {activeArch.deliverables.map((item, dIdx) => (
                          <div key={dIdx} className="flex items-center gap-2 text-xs font-bold text-slate-800">
                            <Check className="w-3.5 h-3.5 text-red-600 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-white border border-slate-200">
                      <div className="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1">What Target Employers Look For</div>
                      <p className="text-xs text-slate-700 font-bold">{activeArch.hiringManagerLooksFor}</p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <CTAButton>
              GET MY READY-TO-JOB KIT
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1.5 transition-transform" />
            </CTAButton>
            <CTAButton variant="glass" className="!border-red-200 hover:!border-red-400 text-red-800">
              <FolderKanban className="w-4 h-4 text-red-600 shrink-0" />
              BUILD MY PORTFOLIO
            </CTAButton>
          </div>
          <p className="text-[11px] text-slate-500 font-semibold mt-3">
            * Portfolio creation is included in the full Ready-to-Job Kit or can be initiated directly.
          </p>
        </div>

      </div>
    </section>
  );
};

const SmartJobSearchSection = () => {
  const cards = [
    {
      icon: Cpu,
      title: "AI Tools for Your Job Search",
      desc: "Use practical AI-assisted tools to improve how you search, tailor applications, research opportunities and prepare your next move — while your profile stays in control.",
      tags: ["Search Smarter", "Apply Better", "Research Roles", "Target Alignment"],
      badge: "AI-ASSISTED"
    },
    {
      icon: Mail,
      title: "Cold Emails Based on Your Profile",
      desc: "Get personalized outreach ideas and cold-email templates shaped around your background, target role, target company and job-search situation.",
      tags: ["Recruiters", "Hiring Managers", "Referrals", "Follow-Ups"],
      badge: "PERSONALIZED"
    },
    {
      icon: Target,
      title: "Interview Preparation Kit",
      desc: "Prepare with practical interview guidance, question frameworks and resources designed around your professional profile, projects and target opportunities.",
      tags: ["Questions", "Answer Frameworks", "Interview Confidence"],
      badge: "INTERVIEW READY"
    },
    {
      icon: Wrench,
      title: "Free Job Search Tools",
      desc: "A useful collection of curated free resources to help with job discovery, company research, application tracking and professional preparation.",
      tags: ["Free Resources", "Job Discovery", "Application Tracking"],
      badge: "CURATED"
    }
  ];

  return (
    <section id="smart-search" className="py-28 relative z-10 overflow-hidden bg-gradient-to-b from-transparent via-red-50/30 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
            <FloatingBadge icon={Bot} variant="darkGlass" duration={5}>
              AI-ASSISTED
            </FloatingBadge>
            <FloatingBadge icon={Sparkles} variant="redGlass" duration={6}>
              SEARCH SMARTER
            </FloatingBadge>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight mb-5 leading-tight">
            DON'T JUST APPLY MORE. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-rose-600 to-red-800">
              APPLY BETTER.
            </span>
          </h2>
          
          <p className="text-base sm:text-xl text-slate-600 leading-relaxed font-medium">
            AI helps with the process. Your profile drives the direction. Use practical AI-assisted tools to research opportunities, improve applications, and prepare for interviews — while your experience, goals, portfolio and target market remain at the center.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {cards.map((card, i) => (
            <GlassCard key={i} level="level-2" className="p-8 text-left">
              <div className="flex items-center justify-between mb-6">
                <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-red-50 to-white border border-red-100 text-red-700 flex items-center justify-center shadow-xs">
                  {renderIcon(card.icon, "w-6 h-6")}
                </div>
                <FloatingBadge variant="glass" duration={0}>
                  {card.badge}
                </FloatingBadge>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2.5">{card.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed font-medium text-xs sm:text-sm">{card.desc}</p>
              <div className="flex flex-wrap gap-2">
                {card.tags.map((tag, idx) => (
                  <span key={idx} className="text-xs font-bold bg-white border border-slate-200 px-3 py-1 rounded-lg text-slate-700 shadow-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>

        <GlassCard level="level-1" className="p-5 max-w-3xl mx-auto text-center">
          <p className="text-xs sm:text-sm text-slate-700 font-bold flex items-center justify-center gap-2">
            <Shield className="w-4 h-4 text-red-600 shrink-0" />
            <span>AI is used as a practical support layer — your profile, experience and goals stay at the center.</span>
          </p>
        </GlassCard>
      </div>
    </section>
  );
};

const InteractiveShowcase = () => {
  const [activeTab, setActiveTab] = useState('resume');
  const [viewMode, setViewMode] = useState('after');
  const [outreachType, setOutreachType] = useState('manager');
  const [activeTooltip, setActiveTooltip] = useState(null);

  const outreachSamples = {
    manager: {
      title: "Hiring Manager Direct Value Outreach",
      to: "sarah.jenkins@fintechleader.com",
      subject: "Senior Product Operations Lead — Jordan Tyler (Initiatives & Delivery)",
      generic: "Hi Sarah,\n\nI am applying for your open role. I have over 6 years of experience in product and would love to work at your company. Please see my attached resume.",
      winify: "Hi Sarah,\n\nI noticed your team is scaling enterprise SaaS pods this quarter. Over the past 5 years, I’ve specialized in sprint governance and customer telemetry across cross-functional squads, helping reduce deployment latency by 28%.\n\nI’ve outlined brief observations on scaling pod delivery that might be relevant for your upcoming sprint rollout. Would you be open to a 10-minute chat next Tuesday?"
    },
    recruiter: {
      title: "Talent Acquisition Role Alignment",
      to: "talent@enterprisegrowth.co",
      subject: "Candidate Inquiry: Product Operations Manager (Ref: Senior Track)",
      generic: "Hello,\n\nI saw a job on your careers page. I think my skills match. Let me know if you are hiring for this or any other open position.",
      winify: "Hello Marcus,\n\nI noticed the Product Operations opening on your careers portal. My background centers on technical roadmap orchestration and cross-functional pod delivery for high-growth SaaS.\n\nAttached is my role-aligned resume and portfolio case study demonstrating recent telemetry framework deployments. I’d welcome the chance to connect for current or upcoming pipeline considerations."
    },
    referral: {
      title: "Mutual Connection & Peer Introduction",
      to: "alex.kumar@techguild.org",
      subject: "Product Delivery Architecture — Quick question on your pod model",
      generic: "Hey Alex,\n\nCan you refer me for the product job at your company? Here is my resume.",
      winify: "Hi Alex,\n\nI saw your recent engineering blog on scaling micro-pod accountability. I’ve led similar sprint transformations over the past 4 years.\n\nI noticed your team is currently looking for an Operations Lead. If you feel there's mutual relevance, I’d love to connect for a quick 5-minute perspective on your squad culture."
    },
    followup: {
      title: "Value-Adding Follow-Up",
      to: "sarah.jenkins@fintechleader.com",
      subject: "Re: Product Operations Pods — Quick follow-up note",
      generic: "Hi Sarah,\n\nJust following up on my previous email. Did you have a chance to look at my resume?",
      winify: "Hi Sarah,\n\nFollowing up on my previous note. I put together a quick 1-page breakdown of how our team resolved dependency bottlenecks across multi-tier release cycles, which might be helpful as your pods scale.\n\nHappy to share the case study link whenever you have a brief moment."
    }
  };

  return (
    <section id="interactive-showcase" className="py-28 relative z-10 bg-gradient-to-b from-transparent via-slate-100/40 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-700 text-xs font-black mb-3 uppercase tracking-wider">
            INTERACTIVE SYSTEM DEMO
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
            See the Difference in Presentation.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            Toggle between the live modules of the Winify Ready-To-Job Kit to experience real structural clarity.
          </p>

          <div className="mt-8 inline-flex flex-wrap justify-center p-1.5 bg-white/85 backdrop-blur-xl border border-slate-200/80 rounded-2xl shadow-sm gap-1">
            {[
              { id: 'resume', label: 'Resume Enhancement', icon: FileText },
              { id: 'linkedin', label: 'LinkedIn Makeover', icon: Linkedin },
              { id: 'portfolio', label: 'Portfolio Architecture', icon: FolderKanban },
              { id: 'outreach', label: 'Personalized Outreach', icon: Send }
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                    isActive 
                      ? 'bg-red-600 text-white shadow-md shadow-red-600/30' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {renderIcon(tab.icon, "w-3.5 h-3.5")}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="text-xs font-bold text-slate-500">Preview Mode:</span>
            <div className="inline-flex p-1 bg-slate-200/70 rounded-xl">
              <button
                onClick={() => setViewMode('before')}
                className={`px-3 py-1 rounded-lg text-xs font-black transition-all cursor-pointer ${
                  viewMode === 'before'
                    ? 'bg-white text-slate-800 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Generic Approach
              </button>
              <button
                onClick={() => setViewMode('after')}
                className={`px-3 py-1 rounded-lg text-xs font-black transition-all flex items-center gap-1 cursor-pointer ${
                  viewMode === 'after'
                    ? 'bg-red-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Sparkles className="w-3 h-3" />
                Winify Approach
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            
            {activeTab === 'resume' && (
              <motion.div
                key="resume-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-5 text-left">
                  <div className="flex items-center gap-2 mb-2">
                    <FloatingBadge icon={FileText} variant="redGlass" duration={0}>
                      ATS-FRIENDLY
                    </FloatingBadge>
                    <FloatingBadge icon={Target} variant="glass" duration={0}>
                      ROLE ALIGNED
                    </FloatingBadge>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 leading-tight">
                    Structured Around Your Actual Background
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                    We don't simply place your text into a standard template. Your experience, key strengths, achievements and target role determine how your resume is organized and positioned.
                  </p>

                  <div className="space-y-2 mb-6">
                    {[
                      "Clean single-column parsing layout",
                      "Target role keyword integration",
                      "Quantified achievement positioning",
                      "Consistent job titles and timeline flow",
                      "Grammar, clarity and readability review"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-bold text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 bg-red-50 rounded-xl border border-red-100 text-[11px] text-red-800 font-semibold">
                    * ATS-friendly resume enhancement designed for human recruiters and modern corporate systems.
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <GlassCard level="level-2" className="p-6 sm:p-8">
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-150">
                      <div className="text-left">
                        <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">Layout Format</span>
                        <div className="font-extrabold text-xs text-slate-900">
                          {viewMode === 'after' ? 'Standard Single-Column Layout' : 'Complex Multi-Column Template'}
                        </div>
                      </div>
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-black flex items-center gap-1 ${
                        viewMode === 'after'
                          ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                          : 'bg-amber-50 text-amber-800 border border-amber-200'
                      }`}>
                        {viewMode === 'after' ? <Check className="w-3 h-3 text-emerald-600" /> : <AlertCircle className="w-3 h-3 text-amber-600" />}
                        {viewMode === 'after' ? 'ATS-Friendly Structure' : 'Unstructured Columns'}
                      </span>
                    </div>

                    {viewMode === 'after' ? (
                      <div className="bg-white border border-slate-200 rounded-xl p-5 text-slate-800 text-left font-sans shadow-xs space-y-3">
                        <div className="border-b border-slate-200 pb-2">
                          <div className="text-lg font-black text-slate-900">JORDAN M. TYLER</div>
                          <div className="text-[11px] font-semibold text-slate-600">Product Strategy & Operations • London / New York</div>
                        </div>

                        <div>
                          <div className="text-[10px] font-black uppercase text-red-700 tracking-wider mb-1">Target Summary</div>
                          <p className="text-[11px] text-slate-600 leading-relaxed font-medium">
                            Results-oriented Product Operations Specialist with 6+ years driving cross-functional scaling, roadmap governance, and customer telemetry across enterprise SaaS platforms.
                          </p>
                        </div>

                        <div>
                          <div className="text-[10px] font-black uppercase text-red-700 tracking-wider mb-1">Core Competencies & Keywords</div>
                          <div className="flex flex-wrap gap-1.5">
                            {["Product Lifecycle Governance", "SQL Telemetry", "Cross-Functional Pods", "Scrum Frameworks"].map((kw, i) => (
                              <motion.span 
                                key={i}
                                whileHover={{ scale: 1.05 }}
                                className="text-[9px] font-bold bg-red-50 text-red-900 border border-red-200 px-2 py-0.5 rounded cursor-default"
                              >
                                {kw}
                              </motion.span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <div className="text-[10px] font-black uppercase text-red-700 tracking-wider mb-1">Impact-Focused Experience</div>
                          <div className="text-[11px] text-slate-600 leading-relaxed space-y-1.5 font-medium">
                            <p className="p-1 rounded hover:bg-red-50/50 transition-colors">
                              • Spearheaded restructuring of sprint governance across 5 product pods, decreasing deployment latency by <strong className="text-red-900 font-black">28%</strong>.
                            </p>
                            <p className="p-1 rounded hover:bg-red-50/50 transition-colors">
                              • Integrated key telemetry tracking, raising activation retention benchmarks from <strong className="text-red-900 font-black">62% to 81%</strong>.
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-slate-50 border border-dashed border-slate-300 rounded-xl p-5 text-slate-500 text-left font-sans space-y-3">
                        <div className="border-b border-slate-200 pb-2 opacity-75">
                          <div className="text-base font-bold text-slate-700">JORDAN TYLER</div>
                          <div className="text-[10px] text-slate-400">Hardworking professional seeking any opportunity in tech</div>
                        </div>
                        <div>
                          <div className="text-[10px] font-bold uppercase text-slate-400 mb-1">Generic Duties</div>
                          <p className="text-[11px] text-slate-500 leading-relaxed">
                            Responsible for attending meetings, managing daily tasks, communicating with team members, and helping the company grow with high motivation.
                          </p>
                        </div>
                        <div className="p-2.5 rounded-lg bg-red-50 text-red-700 text-[10px] font-semibold border border-red-200 flex items-center gap-1.5">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>Lacks role-targeted keywords, quantifiable business outcomes, and hierarchy.</span>
                        </div>
                      </div>
                    )}
                  </GlassCard>
                </div>
              </motion.div>
            )}

            {activeTab === 'linkedin' && (
              <motion.div
                key="linkedin-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid lg:grid-cols-12 gap-8 items-start"
              >
                <div className="lg:col-span-5 text-left">
                  <div className="flex items-center gap-2 mb-2">
                    <FloatingBadge icon={Linkedin} variant="glass" duration={0}>
                      PROFILE POSITIONING
                    </FloatingBadge>
                    <FloatingBadge icon={Sparkles} variant="redGlass" duration={0}>
                      RECRUITER READY
                    </FloatingBadge>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3 tracking-tight leading-snug">
                    Turn LinkedIn Into Your Career Landing Page
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 font-medium">
                    Your profile should communicate who you are, what you've achieved, and where you're headed — without reading like a duplicate resume. Hover over highlighted sections on the right to inspect alignment points.
                  </p>

                  <div className="space-y-2 mb-5">
                    {[
                      { key: 'headline', label: "Target-role-focused headline", tip: "Positioned for target role" },
                      { key: 'about', label: "Personalized About section narrative", tip: "Professional positioning" },
                      { key: 'experience', label: "Achievement-focused experience bullets", tip: "Achievement-focused" },
                      { key: 'skills', label: "Search-friendly keyword indexing", tip: "Relevant keywords" }
                    ].map((item, idx) => (
                      <div 
                        key={idx} 
                        onMouseEnter={() => setActiveTooltip(item.key)}
                        onMouseLeave={() => setActiveTooltip(null)}
                        className={`flex items-center justify-between p-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                          activeTooltip === item.key ? 'bg-red-50 text-red-900 border border-red-200' : 'text-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#0A66C2] shrink-0" />
                          <span>{item.label}</span>
                        </div>
                        <span className="text-[10px] font-black uppercase text-red-600">{item.tip}</span>
                      </div>
                    ))}
                  </div>

                  <CTAButton variant="glass" className="!text-xs !py-3 !px-6 w-full sm:w-auto">
                    GET MY READY-TO-JOB KIT
                  </CTAButton>
                </div>

                <div className="lg:col-span-7">
                  <GlassCard level="level-2" className="overflow-hidden text-left p-0">
                    <div className="h-28 sm:h-32 w-full relative bg-gradient-to-r from-slate-800 via-slate-900 to-slate-950 overflow-hidden">
                      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px]" />
                      <div className="absolute bottom-2.5 right-4 text-[9px] font-bold text-slate-300 bg-black/40 px-2 py-0.5 rounded">
                        Product Strategy & Operations
                      </div>
                    </div>

                    <div className="px-5 pb-5 pt-0 relative">
                      <div className="flex justify-between items-end -mt-12 mb-3">
                        <img
                          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&h=240&q=80"
                          alt="Jordan Tyler"
                          className="w-20 h-20 rounded-full object-cover border-[3px] border-white shadow-md bg-slate-100"
                        />
                        <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-[10px] font-black">
                          Open to Work
                        </span>
                      </div>

                      {viewMode === 'after' ? (
                        <>
                          <div 
                            onMouseEnter={() => setActiveTooltip('headline')}
                            onMouseLeave={() => setActiveTooltip(null)}
                            className={`mb-3 p-2 rounded-xl transition-all relative ${
                              activeTooltip === 'headline' ? 'bg-red-50/80 ring-1 ring-red-200' : ''
                            }`}
                          >
                            {activeTooltip === 'headline' && (
                              <div className="absolute -top-3 right-2 bg-slate-900 text-white text-[9px] font-black px-2 py-0.5 rounded shadow-sm">
                                Positioned for target role
                              </div>
                            )}
                            <div className="flex items-center gap-2">
                              <h4 className="text-lg font-black text-slate-900">Jordan Tyler</h4>
                              <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-1.5 py-0.2 rounded">1st</span>
                            </div>
                            <p className="text-xs font-bold text-slate-800 mt-0.5">
                              Senior Product Operations Specialist | Scaling SaaS Pods & Sprint Governance
                            </p>
                            <p className="text-[11px] text-slate-500 font-medium">
                              London, United Kingdom • 500+ connections
                            </p>
                          </div>

                          <div 
                            onMouseEnter={() => setActiveTooltip('about')}
                            onMouseLeave={() => setActiveTooltip(null)}
                            className={`border-t border-slate-100 p-2 rounded-xl transition-all relative ${
                              activeTooltip === 'about' ? 'bg-red-50/80 ring-1 ring-red-200' : ''
                            }`}
                          >
                            {activeTooltip === 'about' && (
                              <div className="absolute -top-3 right-2 bg-slate-900 text-white text-[9px] font-black px-2 py-0.5 rounded shadow-sm">
                                Professional positioning
                              </div>
                            )}
                            <div className="text-[10px] font-black uppercase text-slate-900 tracking-wider mb-1">About Narrative</div>
                            <p className="text-[11px] text-slate-600 leading-relaxed font-medium">
                              Product strategist and operations specialist with 6+ years bridging delivery pods with commercial roadmap governance. Focused on SaaS scaling, telemetry architectures, and accelerating deployment velocity.
                            </p>
                          </div>
                        </>
                      ) : (
                        <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-500">
                          <div className="text-base font-bold text-slate-700">Jordan Tyler</div>
                          <p className="text-xs text-slate-400">Employee at Company XYZ</p>
                          <p className="text-[11px] text-slate-400 mt-2">
                            About: Hello, I am Jordan. I work hard and look forward to new opportunities.
                          </p>
                          <div className="mt-2 text-[10px] text-red-600 font-semibold">
                            ⚠️ Generic headline and empty about narrative makes it difficult for recruiters to find or evaluate you.
                          </div>
                        </div>
                      )}
                    </div>
                  </GlassCard>
                </div>
              </motion.div>
            )}

            {activeTab === 'portfolio' && (
              <motion.div
                key="portfolio-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-5 text-left">
                  <div className="flex items-center gap-2 mb-2">
                    <FloatingBadge icon={FolderKanban} variant="redGlass" duration={0}>
                      SHOW YOUR WORK
                    </FloatingBadge>
                    <FloatingBadge icon={CheckCircle2} variant="glass" duration={0}>
                      CASE STUDY ARCHITECTURE
                    </FloatingBadge>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 leading-tight">
                    Show Your Work Instead of Describing It
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                    Your portfolio format depends on your career — not a standard template. We plan and build case studies around your actual deliverables and target market standards.
                  </p>

                  <div className="space-y-2 mb-6">
                    {[
                      "Context, Challenge, Action & Outcome structure",
                      "Visual prototypes & repository documentation",
                      "Evidence of commercial or technical impact",
                      "Target-role aligned presentation"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-bold text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <CTAButton variant="glass" className="!text-xs !py-3 !px-6 w-full sm:w-auto">
                    BUILD MY PORTFOLIO
                  </CTAButton>
                </div>

                <div className="lg:col-span-7">
                  <GlassCard level="level-2" className="p-6 sm:p-7 text-left">
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-150">
                      <div>
                        <span className="text-[10px] font-black uppercase text-red-700">Featured Case Study</span>
                        <h4 className="text-sm font-black text-slate-900">Sprint Cadence & Telemetry Framework</h4>
                      </div>
                      <span className="px-2.5 py-1 bg-red-50 text-red-700 border border-red-100 rounded-lg text-[10px] font-black">
                        {viewMode === 'after' ? 'Structured Case Study' : 'Unorganized Bullet'}
                      </span>
                    </div>

                    {viewMode === 'after' ? (
                      <div className="space-y-3 bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                        <div className="grid grid-cols-2 gap-2 text-[11px]">
                          <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-150">
                            <span className="text-[9px] font-black uppercase text-slate-400 block">The Challenge</span>
                            <span className="font-bold text-slate-800">5 pods facing release cadence blockers & 4-week cycle latency.</span>
                          </div>
                          <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-150">
                            <span className="text-[9px] font-black uppercase text-slate-400 block">The Action</span>
                            <span className="font-bold text-slate-800">Standardized sprint rituals and introduced SQL telemetry governance.</span>
                          </div>
                        </div>
                        <div className="p-3 rounded-lg bg-emerald-50/70 border border-emerald-200 text-[11px] text-emerald-900 font-bold">
                          Measured Result: Deployment latency reduced by 28% and customer onboarding retention raised from 62% to 81%.
                        </div>
                      </div>
                    ) : (
                      <div className="p-4 bg-slate-50 rounded-xl border border-dashed border-slate-300 text-[11px] text-slate-500">
                        <p>"Worked on sprint projects with team."</p>
                        <div className="mt-2 text-[10px] text-red-600 font-semibold">
                          ⚠️ Without a structured problem-action-impact case study, hiring managers have no proof of how you solve real challenges.
                        </div>
                      </div>
                    )}
                  </GlassCard>
                </div>
              </motion.div>
            )}

            {activeTab === 'outreach' && (
              <motion.div
                key="outreach-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-5 text-left">
                  <div className="flex items-center gap-2 mb-2">
                    <FloatingBadge icon={Send} variant="redGlass" duration={0}>
                      DON'T SEND THE SAME MESSAGE
                    </FloatingBadge>
                    <FloatingBadge icon={MessageSquare} variant="glass" duration={0}>
                      SITUATION SPECIFIC
                    </FloatingBadge>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 leading-tight">
                    Different Situations Need Different Messages
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 font-medium">
                    A recruiter looking for keyword fit needs a different message than a hiring manager solving an active delivery bottleneck.
                  </p>

                  <div className="space-y-1.5 mb-5">
                    {[
                      { id: 'manager', label: 'Hiring Manager Outreach' },
                      { id: 'recruiter', label: 'Recruiter Matching' },
                      { id: 'referral', label: 'Employee Referral' },
                      { id: 'followup', label: 'Value-Adding Follow-Up' }
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setOutreachType(item.id)}
                        className={`w-full text-left p-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                          outreachType === item.id 
                            ? 'bg-red-50 border border-red-200 text-red-900 shadow-xs' 
                            : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-red-600" />
                      </button>
                    ))}
                  </div>

                  <CTAButton className="!text-xs !py-3 !px-6">
                    GET OUTREACH TEMPLATES
                  </CTAButton>
                </div>

                <div className="lg:col-span-7">
                  <GlassCard level="level-2" className="p-6 text-left">
                    <div className="flex flex-wrap items-center gap-1.5 mb-3 text-[9px] font-black uppercase text-slate-500">
                      <span className="bg-slate-100 px-2 py-0.5 rounded">Profile</span>
                      <span>→</span>
                      <span className="bg-slate-100 px-2 py-0.5 rounded">Message Prepared</span>
                      <span>→</span>
                      <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Recipient Type</span>
                      <span>→</span>
                      <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">Outreach Ready</span>
                    </div>

                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                      </div>
                      <span className="text-[10px] font-black uppercase text-slate-400">
                        {outreachSamples[outreachType].title}
                      </span>
                    </div>

                    <div className="space-y-1 text-xs text-slate-600 font-medium mb-3">
                      <div><strong className="text-slate-900">To:</strong> {outreachSamples[outreachType].to}</div>
                      <div><strong className="text-slate-900">Subject:</strong> {outreachSamples[outreachType].subject}</div>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 leading-relaxed whitespace-pre-line font-mono">
                      {viewMode === 'after' 
                        ? outreachSamples[outreachType].winify 
                        : outreachSamples[outreachType].generic
                      }
                    </div>
                  </GlassCard>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

const AudienceSection = () => {
  const audiences = [
    { 
      title: "FRESHERS & GRADUATES", 
      desc: "Start your career on strong footing with polished positioning, project portfolios and clear narrative frameworks.", 
      icon: Award, 
      badge: "PROJECT-LED" 
    },
    { 
      title: "EXPERIENCED PROFESSIONALS", 
      desc: "Elevate your accomplishments and package leadership achievements for higher-level roles.", 
      icon: TrendingUp, 
      badge: "IMPACT-DRIVEN" 
    },
    { 
      title: "CAREER CHANGERS", 
      desc: "Highlight transferable competencies and relevant projects so employers see relevance instead of missing experience.", 
      icon: Layers, 
      badge: "TRANSFERABLE SKILLS" 
    },
    { 
      title: "INTERNATIONAL SEEKERS", 
      desc: "Structure resumes for target markets in the USA, UK, and Canada with standard regional formatting and expectations.", 
      icon: Compass, 
      badge: "REGIONAL STANDARDS" 
    }
  ];

  return (
    <section id="who-its-for" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mb-3 tracking-tight">Built For Your Career Stage</h2>
        <p className="text-xs sm:text-sm font-bold text-red-700 uppercase tracking-wider mb-2">
          Different career situations need different positioning — your approach should reflect yours.
        </p>
        <p className="text-slate-600 font-medium text-base mb-16 max-w-2xl mx-auto">Wherever you currently stand, the Ready-To-Job Kit aligns your presentation to your target goals.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((aud, i) => (
            <GlassCard key={i} level="level-2" className="p-7 flex flex-col items-center text-center justify-between">
              <div>
                <div className="w-13 h-13 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center mb-4 text-red-600 mx-auto">
                  {renderIcon(aud.icon, "w-6 h-6")}
                </div>
                <FloatingBadge variant="glass" duration={0} className="mb-4">
                  {aud.badge}
                </FloatingBadge>
                <h3 className="text-base font-black text-slate-900 mb-2">{aud.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">{aud.desc}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

const TrustSection = () => {
  const pillars = [
    {
      title: "Personalized Approach",
      desc: "No forced templates or auto-generated boilerplate. Every resume, cover letter, and portfolio is mapped to your actual raw career materials.",
      icon: CheckCircle2
    },
    {
      title: "Professional Presentation",
      desc: "Clean typography, single-column parsing geometry, and clear visual hierarchy designed for both human evaluators and parsing screeners.",
      icon: Sparkles
    },
    {
      title: "Practical Job-Search Support",
      desc: "Targeted scripts, multi-channel outreach strategies, and curated discovery tools that guide daily outreach cadence.",
      icon: Target
    },
    {
      title: "Clear 5-Stage Process",
      desc: "Structured milestone roadmap from initial profile diagnostic through asset construction to interview readiness.",
      icon: Layers
    },
    {
      title: "Human Guidance",
      desc: "Direct personalized consultation to ensure every bullet, case study, and message accurately reflects your authentic voice.",
      icon: Users
    }
  ];

  return (
    <section className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-black mb-3 uppercase tracking-wider">
            <Shield className="w-3.5 h-3.5 text-red-600" />
            <span>GROUNDED METHODOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Built Around Your Career Story.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            We focus on genuine positioning, clean structure, and cohesive career storytelling across every professional touchpoint.
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
          {pillars.map((pillar, idx) => (
            <GlassCard key={idx} level="level-2" className="p-6 text-left flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-600 mb-4 shadow-xs">
                  {renderIcon(pillar.icon, "w-5 h-5")}
                </div>
                <h3 className="font-black text-slate-900 text-base mb-2">{pillar.title}</h3>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">{pillar.desc}</p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-emerald-700">
                <Check className="w-3.5 h-3.5 text-emerald-600" /> Grounded In Value
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

const EmotionalSection = () => {
  return (
    <section className="py-20 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <GlassCard level="level-3" className="p-8 sm:p-14 text-center relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-black mb-6 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-red-600" />
            <span>THE NEXT STEP</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight mb-6 leading-tight">
            Your Experience Deserves <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-rose-600 to-red-800">
              to Be Seen.
            </span>
          </h2>

          <div className="max-w-2xl mx-auto space-y-2 mb-8 text-base sm:text-lg text-slate-700 font-semibold leading-relaxed">
            <p>You may already have the skills.</p>
            <p>You may already have the experience.</p>
            <p className="text-slate-900 font-black">
              Now make sure your professional presence communicates it.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white/90 border border-red-200 max-w-md mx-auto mb-8 shadow-xs text-xs sm:text-sm font-bold text-red-900">
            “Don't just apply. Present yourself with purpose.”
          </div>

          <div className="flex justify-center">
            <CTAButton className="!px-10 !py-4 !text-sm !shadow-xl">
              I WANT WINIFY JOB KIT
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1.5 transition-transform" />
            </CTAButton>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-br from-red-700 via-rose-800 to-red-950 text-white overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/20 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center backdrop-blur-2xl bg-white/10 p-8 sm:p-12 rounded-3xl border border-white/20 shadow-xl">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
              Ready to Present Yourself Better?
            </h2>
            <p className="text-base sm:text-lg text-red-100 font-medium mb-8 max-w-xl mx-auto">
              Build a stronger professional foundation for your next job search across USA, UK, and Canadian markets.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full bg-white text-red-900 font-black text-sm tracking-wide shadow-2xl hover:bg-red-50 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <span>GET MY WINIFY JOB KIT</span>
                <ArrowRight className="w-4 h-4 text-red-700" />
              </a>
            </div>

            <div className="text-xs font-black uppercase tracking-widest text-red-200">
              Present Yourself. Stand Out. Get Hired.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ onOpenExport }) => {
  return (
    <footer className="relative z-10 pt-16 pb-12 border-t border-slate-200 bg-white/60 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-200">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-red-600 via-rose-700 to-red-900 flex items-center justify-center shadow-md shadow-red-700/25 text-white font-black text-lg">
                W
              </div>
              <span className="font-black text-lg tracking-tight text-slate-900">WINIFY</span>
            </div>
            <div className="text-xs font-black text-red-700 tracking-wider uppercase mb-1">
              WINIFY RESUME & CAREER SERVICES
            </div>
            <p className="text-xs text-slate-500 font-semibold italic">
              “Shape Your Resume. Elevate Your Career.”
            </p>
            <p className="text-xs text-slate-700 font-black mt-1">
              “Present Yourself. Stand Out. Get Hired.”
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 text-center md:text-right">
            <div>
              <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Target Geographies</div>
              <div className="text-xs font-black text-slate-800">USA • UK • Canada</div>
              <div className="text-xs text-slate-500 font-bold mt-1">WhatsApp: +91 79902 62500</div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onOpenExport}
                className="px-4 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-black border border-slate-200 transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <Download className="w-3.5 h-3.5 text-red-600" />
                <span>EXPORT CODE</span>
              </button>

              <CTAButton variant="primary" className="!py-3 !px-6 !text-xs !shadow-md">
                TALK TO WINIFY
              </CTAButton>
            </div>
          </div>
        </div>

        <div className="pt-8 text-center max-w-4xl mx-auto">
          <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
            Winify Resume & Career Services provides professional resume, career-document and job-search support. Our services are designed to help candidates present their experience more effectively and approach their job search more professionally. We do not guarantee employment, interviews, recruiter responses, job offers, visa sponsorship, or placement. Hiring and visa/work authorization decisions are made by employers and relevant authorities.
          </p>
          <div className="mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            © {new Date().getFullYear()} Winify Resume & Career Services. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

const FloatingFAB = () => {
  return (
    <motion.a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-gradient-to-r from-red-600 via-rose-700 to-red-800 text-white font-black text-xs uppercase tracking-wider shadow-2xl shadow-red-600/40 border border-white/30 backdrop-blur-xl group cursor-pointer select-none"
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
      </span>
      <MessageSquare className="w-4 h-4 text-white" />
      <span>TALK TO WINIFY</span>
    </motion.a>
  );
};

export default function App() {
  const [exportModalOpen, setExportModalOpen] = useState(false);

  return (
    <div className="font-sans antialiased text-slate-900 selection:bg-red-200 selection:text-red-900 overflow-x-hidden min-h-screen">
      <BackgroundAtmosphere />
      <Navbar onOpenExport={() => setExportModalOpen(true)} />
      
      <main>
        <Hero />
        <RevealSection />
        <IdentitySection />
        <ServicesSection />
        <WorkflowProcessSection />
        <PortfolioSection />
        <SmartJobSearchSection />
        <InteractiveShowcase />
        <AudienceSection />
        <TrustSection />
        <EmotionalSection />
        <FinalCTA />
      </main>
      
      <Footer onOpenExport={() => setExportModalOpen(true)} />
      <FloatingFAB />

      <ProjectExportModal 
        isOpen={exportModalOpen} 
        onClose={() => setExportModalOpen(false)} 
      />
    </div>
  );
}