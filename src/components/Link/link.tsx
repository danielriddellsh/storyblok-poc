// "use server";
import { storyblokEditable, SbBlokData } from "@storyblok/react";

interface Props {
  blok: SbBlokData;
}

const Link = ({ blok }: Props) => {
  return (
    <div {...storyblokEditable(blok)} data-test="link">
      <a href={(blok.ctaLink as any)?.url as string}>
        {blok.ctaLabel as string}
      </a>
    </div>
  );
};

export default Link;