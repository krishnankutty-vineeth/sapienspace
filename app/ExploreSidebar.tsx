"use client";

import Link from "next/link";
import { useNavigation } from "./NavigationProvider";

import type { ComponentType } from "react";

type NavLinkItem = {
  name: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
};

type NavSectionProps = {
  title: string;
  links: NavLinkItem[];
  onNavigate: () => void;
};

const NAV_SECTIONS = [
  {
    title: "Sapienspace",
    links: [
      { name: "Home", href: "/" },
      { name: "Platform", href: "/platform" },
      { name: "Projects", href: "/projects" },
      { name: "Research", href: "/research" },
    ],
  },
  {
    title: "Capabilities",
    links: [
      { name: "Observatory", href: "/observatory" },
      { name: "Communication", href: "/communication" },
      { name: "AI & Robotics", href: "/robotics" },
    ],
  },
  {
    title: "Labs & Learning",
    links: [
      { name: "Research Lab", href: "/labs/research" },
      { name: "AI Lab", href: "/labs/ai" },
      { name: "Systems Lab", href: "/labs/systems" },
    ],
  },
];

export default function ExploreSidebar() {
  const { sidebarOpen, setSidebarOpen } = useNavigation();
  if (!sidebarOpen) return null;

  return (
    <div className="fixed inset-0 z-40 flex">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60"
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <aside className="relative w-72 bg-black text-white border-r border-white/10 p-6 overflow-y-auto">
        <div className="mb-6 flex items-center justify-between"> 
          <h2 className="text-lg font-semibold">Explore</h2>
          <button onClick={() => setSidebarOpen(false)}>✕</button>
        </div>

        <nav className="space-y-4 text-sm">
          {NAV_SECTIONS.map((section) => (
            <NavSection
              key={section.title}
              title={section.title}
              links={section.links}
              onNavigate={() => setSidebarOpen(false)}
            />
          ))}
        </nav>
      </aside>
    </div>
  );
}

/* ---------------- Components ---------------- */

function NavSection({ title, links, onNavigate }: NavSectionProps) {
  return (
    <div>
      <div className="text-xs uppercase text-gray-400 mb-2">
        {title}
      </div>
      <div className="space-y-2">
        {links.map((link) => {
          return (
            <Link
              key={link.name}
              href={link.href}
              prefetch
              onClick={onNavigate}
              className="block hover:underline"
            >
              <span>{link.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
