import { signal } from "@lit-labs/signals";
import { Settings } from "../types/settings";

export const settings = signal<Settings>({
  Locale: localStorage.getItem("locale") ?? "en",
});
