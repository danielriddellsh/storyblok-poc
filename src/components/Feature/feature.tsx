// "use server";
import { storyblokEditable, SbBlokData } from "@storyblok/react";
import Link from "next/link";
import { CardLink } from "react-bootstrap";

interface Props {
  blok: SbBlokData;
}

const Feature = ({ blok }: Props) => {
  return (
    <div {...storyblokEditable(blok)} key={blok._uid} data-test="feature">
      <div>
        <div>{blok.featureTitle as string}</div>
        <p>{blok.featureText as string}</p>
        {blok.featureButton !== undefined && <Link href={blok.featureButton?.url as string}>{blok.featureButton?.url as string}</Link>}
      </div>
    </div>
  );
};

export default Feature;