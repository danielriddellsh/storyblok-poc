// "use server";
import { storyblokEditable, StoryblokComponent, SbBlokData } from "@storyblok/react/rsc";

interface Props {
  blok: SbBlokData;
}

const Section = ({ blok }: Props) => (
  <section {...storyblokEditable(blok)} data-test="section">
    {(blok.sectionBlocks as SbBlokData[]).map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </section>
);

export default Section;