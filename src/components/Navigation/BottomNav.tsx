
import { Link } from "react-router-dom";
import { Home, Map, Building, Landmark, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

interface BottomNavProps {
  activeTab: string;
}

interface NavItemProps {
  to: string;
  label: string;
  icon: React.ReactNode;
  active: boolean;
}

const NavItem = ({ to, label, icon, active }: NavItemProps) => {
  return (
    <Link 
      to={to} 
      className={cn(
        "flex flex-col items-center justify-center flex-1 py-2",
        active 
          ? "text-baku-primary" 
          : "text-gray-500 hover:text-baku-secondary transition-colors"
      )}
    >
      <div className="relative">
        {active && (
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-baku-primary rounded-full" />
        )}
        {icon}
      </div>
      <span className={cn(
        "text-xs mt-1",
        active ? "font-medium" : "font-normal"
      )}>
        {label}
      </span>
    </Link>
  );
};

const BottomNav = ({ activeTab }: BottomNavProps) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-1px_3px_rgba(0,0,0,0.1)] flex justify-around items-center z-10 border-t border-gray-200">
      <NavItem 
        to="/" 
        label="Home" 
        icon={<Home size={20} />} 
        active={activeTab === "home"} 
      />
      <NavItem 
        to="/transport" 
        label="Transport" 
        icon={<Map size={20} />} 
        active={activeTab === "transport"} 
      />
      <NavItem 
        to="/places" 
        label="Places" 
        icon={<Landmark size={20} />} 
        active={activeTab === "places"} 
      />
      <NavItem 
        to="/services" 
        label="Services" 
        icon={<Building size={20} />} 
        active={activeTab === "services"} 
      />
    </nav>
  );
};

export default BottomNav;
