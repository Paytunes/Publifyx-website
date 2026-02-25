import { useLocation } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  path?: string;
}

export function useServiceBreadcrumbs(pageLabel: string): BreadcrumbItem[] {
  const location = useLocation();
  const fromServices = (location.state as { fromServices?: boolean })?.fromServices;

  const items: BreadcrumbItem[] = [{ label: "Home", path: "/" }];

  if (fromServices) {
    items.push({ label: "Services" });
  }

  items.push({ label: pageLabel });

  return items;
}
