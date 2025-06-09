import { apiRequest } from "./config";

export const apiFetchSkips = ({ url }: { url: string }) =>
  apiRequest({ type: "get", url });
