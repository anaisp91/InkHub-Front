import { http } from "./http";

export const StudioService = {
  getStudioById: (id, token) =>
    http(`/api/studio/${id}`, {
      method: "GET",
      token,
    }),
  getStudioArtists: (id, token) =>
    http(`/api/studio/${id}/artists`, {
      method: "GET",
      token,
    }),
  updateStudio: (id, payload, token) =>
    http(`/api/studio/${id}`, {
      method: "PUT",
      body: payload,
      token,
    }),
  deleteStudio: (id, token) =>
    http(`/api/studio/${id}`, {
      method: "DELETE",
      token,
    }),
};
