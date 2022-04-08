import breakpoints from "./breakpoints";

const getAdaptiveFont = (mobileSize: number, tabletSize: number, desktopSize: number) => {
    return `
        font-size: ${ mobileSize }px;

        @media (min-width: ${ breakpoints.sm }) {
            font-size: calc(${ mobileSize }px + ${(tabletSize - mobileSize)} * (100vw - ${breakpoints.sm}) / (1400 - 576));
        }

        @media (min-width: ${ breakpoints.xxl }) {
            font-size: calc(${ tabletSize }px + ${(desktopSize - tabletSize)} * (100vw - ${breakpoints.xxl}) / (1920 - 1400));
        }
    `
}

const typography = {
    font14: getAdaptiveFont(12, 13, 14),
    font16: getAdaptiveFont(14, 14, 16),
    font18: getAdaptiveFont(14, 16, 18),
    font20: getAdaptiveFont(14, 16, 20),
    font25: getAdaptiveFont(15, 18, 25),
    font35: getAdaptiveFont(20, 26, 35),
    font38: getAdaptiveFont(20, 27, 38),
    font40: getAdaptiveFont(20, 28, 40),
    font50: getAdaptiveFont(20, 36, 50),
    font56: getAdaptiveFont(30, 38, 56),
    font70: getAdaptiveFont(36, 50, 70),
    font80: getAdaptiveFont(30, 52, 80),
    font100: getAdaptiveFont(42, 64, 100),
	font120: getAdaptiveFont(56, 90, 120),
    font138: getAdaptiveFont(30, 85, 138),
	font150: getAdaptiveFont(62, 95, 150),
    font200: getAdaptiveFont(60, 110, 200)
}

export default typography