export const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tabletS: "600px",
  tabletM: "660px",
  tabletL: "768px",
  laptopS: "860px",
  laptopM: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
} as const;

const mediaQuery = {
  device: {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tabletS: `(min-width: ${size.tabletS})`,
    tabletM: `(min-width: ${size.tabletM})`,
    tabletL: `(min-width: ${size.tabletL})`,
    laptopS: `(min-width: ${size.laptopS})`,
    laptopM: `(min-width: ${size.laptopM})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
  },
} as const;

export { mediaQuery };
