export type HeadingColor = "primary" | "dark";

export default interface HeadingInterface {
  variant: "h1" | "h2";
  color?: HeadingColor;
}
