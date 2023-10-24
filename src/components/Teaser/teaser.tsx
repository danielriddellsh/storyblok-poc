// "use server";
import { storyblokEditable, SbBlokData } from "@storyblok/react";
import Link from "../Link/link";
import Image from "../Image/image";

interface Props {
  blok: SbBlokData;
}

const Teaser = ({ blok }: Props) => {
  return (
    <div {...storyblokEditable(blok)} data-test="teaser">
      <div>
        {blok.imgSource && <Image blok={blok} />}
        <div>{blok.featureTitle as string}</div>
        <p>{blok.featureText as string}</p>
        {blok.ctaLink && <Link blok={blok} />}
      </div>
    </div>
  );
};

export default Teaser;