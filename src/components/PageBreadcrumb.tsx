import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface PageBreadcrumbProps {
  items: BreadcrumbItem[];
  /** Use "dark" on navy hero backgrounds, "light" on white/light backgrounds */
  variant?: "dark" | "light";
}

const PageBreadcrumb = ({ items, variant = "dark" }: PageBreadcrumbProps) => {
  const linkClass = variant === "dark"
    ? "text-navy-300 hover:text-brand-orange-400 transition-colors"
    : "text-navy-500 hover:text-brand-orange-500 transition-colors";
  const separatorClass = variant === "dark" ? "text-navy-500" : "text-navy-300";
  const currentClass = variant === "dark" ? "text-white/80 font-medium" : "text-navy-800 font-medium";

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight className={`w-3.5 h-3.5 ${separatorClass}`} />}
            {item.path ? (
              <Link to={item.path} className={linkClass}>
                {item.label}
              </Link>
            ) : (
              <span className={currentClass}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default PageBreadcrumb;
