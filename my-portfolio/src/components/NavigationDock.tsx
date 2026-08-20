import {
  FaHome,
  FaUser,
  FaCode,
  FaFolderOpen,
  FaBriefcase,
  FaEnvelope,
} from "react-icons/fa";

import { HiSparkles } from "react-icons/hi2";

import "./NavigationDock.css";

const navigationItems = [
  {
    id: "hero",
    label: "Portfolio",
    icon: <FaHome />,
  },
  {
    id: "introduction",
    label: "Introduction",
    icon: <HiSparkles />,
  },
  {
    id: "about",
    label: "About",
    icon: <FaUser />,
  },
  {
    id: "skills",
    label: "Skills",
    icon: <FaCode />,
  },
  {
    id: "projects",
    label: "Projects",
    icon: <FaFolderOpen />,
  },
  {
    id: "experience",
    label: "Experience",
    icon: <FaBriefcase />,
  },
  {
    id: "contact",
    label: "Contact",
    icon: <FaEnvelope />,
  },
];

function NavigationDock() {

  const handleNavigation = (id: string) => {

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

  };

  return (

    <nav
      className="navigation-dock"
      aria-label="Portfolio navigation"
    >

      {navigationItems.map((item) => (

        <button
          key={item.id}
          className="dock-item"
          onClick={() => handleNavigation(item.id)}
          aria-label={`Go to ${item.label}`}
        >

          <span className="dock-icon">
            {item.icon}
          </span>

          <span className="dock-label">
            {item.label}
          </span>

        </button>

      ))}

    </nav>

  );
}

export default NavigationDock;