// scss.d.ts
declare module '*.css' {
  const content: { [className: string]: string; };
  export default content;
}
declare module '*.scss' {
  const content: { [className: string]: string; };
  export default content;
}
declare module "*.png" {
  const value: string;
  export default value;
}
declare module "*.jpg" {
  const value: string;
  export default value;
}
declare module "*.gif" {
  const value: string;
  export default value;
}