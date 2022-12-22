import { useEffect, useState } from "react";

export const sizes = {
  mobileSmall: 320,
  mobile: 560,
  tabletPortrait: 767,
  tabletLandscape: 960,
  laptop: 1200,
  desktop: 1800,
};

const minWidthQuery = (width) => `@media (min-width: ${width}px)`;

export const from = Object.keys(sizes).reduce((acc, key) => ({
  ...acc,
  [key]: minWidthQuery(sizes[key]),
}));

export const useMediaQuery = (query, defaultValue) => {
  const mediaQuery = query.toString().replace("@media", "").trim();
  const [match, setMatch] = useState(!!defaultValue);

  useEffect(() => {
    setMatch(() => window.matchMedia(mediaQuery).matches);

    const mediaQueryList = window.matchMedia(mediaQuery);

    const handleChange = (event) => setMatch(event.matches);

    mediaQueryList.addEventListener("change", handleChange);

    return () => mediaQueryList.removeEventListener("change", handleChange);
  }, [mediaQuery]);

  return !!match;
};
