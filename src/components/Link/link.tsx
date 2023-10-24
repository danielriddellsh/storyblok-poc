// "use server";
import { storyblokEditable, SbBlokData } from "@storyblok/react";
import { ReactElement } from "react";

interface Props {
  blok: SbBlokData;
  className?: string
}

const Link = ({ blok, className = '' }: Props) => {
  return (
    <div {...storyblokEditable(blok)} data-test="link" className={className}>
      <a href={(blok.ctaLink as any)?.url as string} style={{ color: 'white', textDecoration: 'none' }}>
        {blok.ctaLabel as string}
      </a>
    </div>
  );
};

export default Link;