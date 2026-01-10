// src/types/images.d.ts
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.webp";
declare module "*.svg";

export type Jam = {
  id: string;
  title: string;
  date: string;
  image: string;

  speaker?: string;
  excerpt?: string;
  theme?: string;
};
