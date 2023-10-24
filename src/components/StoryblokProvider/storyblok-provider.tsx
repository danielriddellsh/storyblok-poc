"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

import Page from "../Page/page";
import Teaser from "../Teaser/teaser";
import Grid from "../Grid/grid";
import Feature from "../Feature/feature";

storyblokInit({
  accessToken: "Pfx3cHRXE7mZU2V2QTly8Att",
  use: [apiPlugin],
  components: {
    teaser: Teaser,
    page: Page,
    grid: Grid,
    feature: Feature,
  },
});

export default function StoryblokProvider({
    children,
}: {
    children: React.ReactNode
}) {
  return children;
}