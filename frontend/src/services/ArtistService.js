import { http } from "./http";

export const ArtistService = {
  registerArtist: (payload, token) =>
    http("/api/auth/register/artist", {
      method: "POST",
      body: payload,
      token,
    }),
  getArtistById: (id, token) =>
    http(`/api/artists/${id}`, {
      method: "GET",
      token,
    }),
  updateArtist: (id, payload, token) =>
    http(`/api/artists/${id}`, {
      method: "PUT",
      body: payload,
      token,
    }),
  deleteArtist: (id, token) =>
    http(`/api/artists/${id}`, {
      method: "DELETE",
      token,
    }),
};
