"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc"

import Page from "../Page/page";
import Section from "../Section/section";
import Grid from "../Grid/grid";
import Feature from "../Feature/feature";
import Link from "../Link/link";
import Image from "../Image/image";
import Hero from "../Hero/hero";
import Teaser from "../Teaser/teaser";
import Testimonial from "../Testimonial/testimonial";
import Title from "../Title/title";

storyblokInit({
  accessToken: process.env.storyBlok_ApiToken,
  use: [apiPlugin],
  components: {
    page: Page,
    box: Section,
    teaser: Teaser,
    grid: Grid,
    feature: Feature,
    link: Link,
    image: Image,
    hero: Hero,
    testimonial: Testimonial,
    title: Title
  },
});

export default function StoryblokProvider({
    children,
}: {
    children: React.ReactNode
}) {
  return children;
}