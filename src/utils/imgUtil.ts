export const makeImagePath = (imageUrl: string) => {
  return `https://image.tmdb.org/t/p/w500${imageUrl}`;
};

export const makeBgPath = (imageUrl: string) => {
  return `https://image.tmdb.org/t/p/original${imageUrl}`;
};
