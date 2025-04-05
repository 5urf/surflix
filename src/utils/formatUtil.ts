export const formatRuntime = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours}시간 ${mins}분`;
};

export const formatGenres = (genres: Movie.Genre[], maxCount = 4) => {
  if (genres.length <= maxCount) {
    return genres.map((g) => g.name).join(", ");
  }

  return `${genres
    .slice(0, maxCount)
    .map((g) => g.name)
    .join(", ")}...`;
};

export const formatFullYear = (data: Date) => new Date(data).getFullYear();

export const formatLocaleString = (data: Date) => data.toLocaleString();

export const formatRating = (average: number) => average.toFixed(1);
