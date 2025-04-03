export const makeImagePath = (image: string, format?: "w300" | "w500") => {
  return `https://image.tmdb.org/t/p/${format ?? "original"}${image}`;
};
