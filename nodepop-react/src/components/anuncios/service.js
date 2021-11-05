import client from "../../api/client";

const anunciosBaseUrl = "/v1";

export const getUltimosAnuncios = () => {
  const url = `${anunciosBaseUrl}/adverts`;
  return client.get(url);
};
