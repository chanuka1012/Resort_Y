import { useEffect } from "react";
import { site } from "../data/siteData.js";

export function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | ${site.name}` : site.name;
  }, [title]);
}