import typography from "./typography"
import breakpoints from "./breakpoints"
import { Breakpoints } from "../types/index"
import variables from "./variables"

export const fontSize: (size: number) => string = (size) => {
    return (<any>typography)[`font${size}`]
}

export const mediaBreakpointUp: (breakpoint: Breakpoints) => string = (breakpoint) => {
    return `@media(min-width: ${breakpoints[breakpoint]})`
}

export const mediaBreakpointDown: (breakpoint: Breakpoints) => string = (breakpoint) => {
    return `@media(max-width: ${breakpoints[breakpoint]})`
}

export const vw: (value: number, screenWidth?: number) => string = (value, screenWidth = 1920) => {
    return `${value / screenWidth * 100}vw`
}

export const vh: (value: number, screenHeight?: number) => string = (value, screenHeight = 1080) => {
    return `${value / screenHeight * 100}vh`
}

export const cols: (value: number) => string = (value) => {
    return `${variables.col * value}vw`
}