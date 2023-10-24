// "use server";
import { storyblokEditable, SbBlokData } from "@storyblok/react";
import Link from "../Link/link";
import Image from "../Image/image";

interface Props {
  blok: SbBlokData;
}

const Feature = ({ blok }: Props) => {
  return (
    <div {...storyblokEditable(blok)} data-test="feature">
      <div>
        <div>{blok.featureTitle as string}</div>
        <p>{blok.featureText as string}</p>
        {blok.ctaLink && <Link blok={blok} />}
        {blok.imgSource && <Image blok={blok} />}
      </div>
    </div>
  );
};

export default Feature;