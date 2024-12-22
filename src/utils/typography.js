import Typography from "typography"
import Theme from "typography-theme-moraga"

Theme.googleFonts.push({
// Noto Sans JP フォントを利用する
  name: "Noto+Sans+JP",
  styles: ["400", "700"],
})
Theme.bodyFontFamily = ["Noto Sans JP", "Roboto", "serif"]
Theme.baseFontSize = "17px";
const typography = new Typography(Theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale