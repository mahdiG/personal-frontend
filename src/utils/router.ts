import { html, LitElement, ReactiveControllerHost } from "lit";
import { msg, str } from "./localization";
import { Router } from "@lit-labs/router";

import "../pages/resume/resume-page";
import "../pages/home/home-page";
//import "../pages/portfolio/portfolio-page";
//import "../pages/journal/journal-page";

export function createRouter(
  rootElement: ReactiveControllerHost & HTMLElement,
): Router {
  return new Router(rootElement, [
    {
      path: "/resume",
      render: () => html`<resume-page></resume-page>`,
    },
    {
      path: "/",
      render: () => html`<home-page></home-page>`,
    },
    {
      path: "/*",
      render: (params) => html`
        <div class="notFound">
          <div class="title">${msg("Not found", { id: "app-404-title" })}</div>
          <div class="subtitle">
            ${msg(str`No page for /${params[0] ?? ""}`, {
              id: "app-404-subtitle",
            })}
          </div>
          <a class="navLink" href="/"
            >${msg("Go home", { id: "app-404-home" })}</a
          >
        </div>
      `,
    },
  ]);
}

export function navigate(componentThis: LitElement, path: string) {
  componentThis.dispatchEvent(
    new CustomEvent("navigate", {
      detail: {
        path: path,
        shouldUpdateHistory: true,
      },
      bubbles: true,
      composed: true,
    }),
  );
}
