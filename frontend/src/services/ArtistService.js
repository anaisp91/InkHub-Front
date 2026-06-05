import { http } from "./http";

export const ArtistService = {
  registerArtist: (payload) =>
    http("/api/auth/register/artist", {
      method: "POST",
      body: payload,
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
