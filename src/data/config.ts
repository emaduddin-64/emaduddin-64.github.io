export const CONFIG = {
  // ---------------------------------------------------------------------------
  // Site Settings
  // ---------------------------------------------------------------------------
  site: {
    url: "https://emaduddin-64.github.io",
    locale: "en_US",
    twitterHandle: "@alexmercer_dev",
  },

  // ---------------------------------------------------------------------------
  // SEO Settings
  // ---------------------------------------------------------------------------
  seo: {
    titleTemplate: "%s | %n", // %s = page title, %n = DATA.name
    twitterCard: "summary_large_image" as const,
    robots: "index, follow",
  },

  // ---------------------------------------------------------------------------
  // Typography
  // ---------------------------------------------------------------------------
  typography: {
    // Base font size as a percentage. 100 = browser default (16px).
    // 110 = 10% larger or 90 = 10% smaller, across all text, headings, and links simultaneously.
    baseFontSize: 115,
  },

  // ---------------------------------------------------------------------------
  // Blog Settings
  // ---------------------------------------------------------------------------
  blog: {
    postsPerPage: 10,
  },

  // ---------------------------------------------------------------------------
  // Font Settings
  // See https://fontsource.org/?variable=true for fonts that can be installed via package registry
  // To change fonts:
  // 1. pnpm install @fontsource-variable/<font-name> (for example 'pnpm add @fontsource-variable/inter'). Install BOTH the sans and mono fonts.
  // 2. Edit src/styles/global.css - swap the @import and --font-sans and --font-mono values
  // ---------------------------------------------------------------------------

  // ---------------------------------------------------------------------------
  // Design Settings
  // 1. Pick a theme at ui.shadcn.com/themes or generate one with a tool like tweakcn.com
  // 2. Copy the CSS variables block
  // 3. Paste into BELOW with the naming conversion already used
  // ---------------------------------------------------------------------------

  theme: {
    radius: "0.625rem",

    light:
    {
      background: "oklch(0.9751,0.0127,244.2507)",
      foreground: "oklch(0.3729,0.0306,259.7328)",
      card: "oklch(1.0000,0,0)",
      cardForeground: "oklch(0.3729,0.0306,259.7328)",
      popover: "oklch(1.0000,0,0)",
      popoverForeground: "oklch(0.3729,0.0306,259.7328)",
      primary: "oklch(0.7227,0.1920,149.5793)",
      primaryForeground: "oklch(1.0000,0,0)",
      secondary: "oklch(0.9514,0.0250,236.8242)",
      secondaryForeground: "oklch(0.4461,0.0263,256.8018)",
      muted: "oklch(0.9670,0.0029,264.5419)",
      mutedForeground: "oklch(0.5510,0.0234,264.3637)",
      accent: "oklch(0.9505,0.0507,163.0508)",
      accentForeground: "oklch(0.3729,0.0306,259.7328)",
      destructive: "oklch(0.6368,0.2078,25.3313)",
      destructiveForeground: "oklch(1.0000,0,0)",
      border: "oklch(0.9276,0.0058,264.5313)",
      input: "oklch(0.9276,0.0058,264.5313)",
      ring: "oklch(0.7227,0.1920,149.5793)",
    },

    dark:
    {
      background: "oklch(0.2077,0.0398,265.7549)",
      foreground: "oklch(0.8717,0.0093,258.3382)",
      card: "oklch(0.2795,0.0368,260.0310)",
      cardForeground: "oklch(0.8717,0.0093,258.3382)",
      popover: "oklch(0.2795,0.0368,260.0310)",
      popoverForeground: "oklch(0.8717,0.0093,258.3382)",
      primary: "oklch(0.7729,0.1535,163.2231)",
      primaryForeground: "oklch(0.2077,0.0398,265.7549)",
      secondary: "oklch(0.3351,0.0331,260.9120)",
      secondaryForeground: "oklch(0.7118,0.0129,286.0665)",
      muted: "oklch(0.2463,0.0275,259.9628)",
      mutedForeground: "oklch(0.5510,0.0234,264.3637)",
      accent: "oklch(0.3729,0.0306,259.7328)",
      accentForeground: "oklch(0.7118,0.0129,286.0665)",
      destructive: "oklch(0.6368,0.2078,25.3313)",
      destructiveForeground: "oklch(0.2077,0.0398,265.7549)",
      border: "oklch(0.4461,0.0263,256.8018)",
      input: "oklch(0.4461,0.0263,256.8018)",
      ring: "oklch(0.7729,0.1535,163.2231)",
    },
  },

} as const;
