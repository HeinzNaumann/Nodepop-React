import client from "../../api/client";

const anunciosBaseUrl = "/api";

export const getUltimosAnuncios = () => {
  const url = `${anunciosBaseUrl}/anuncios`;
  return client.get(url);
};
