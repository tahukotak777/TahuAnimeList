export const apiAnimeResponse = async (resource, query) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
  );
  const anime = await response.json();
  return anime;
};

export const apiNestedAnimeResponse = async (resource, objectProp, amount) => {
  const res = await apiAnimeResponse(resource);
  const nested = res.data.flatMap((item) => item[objectProp]);
  const response = {
    data: nested.slice(0, amount),
  };
  return response;
};

