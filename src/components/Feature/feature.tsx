// "use server";
import { storyblokEditable, SbBlokData } from "@storyblok/react";

interface Props {
  blok: SbBlokData;
}

const Feature = ({ blok }: Props) => {
  return (
    <div {...storyblokEditable(blok)} key={blok._uid} data-test="feature">
      <div>
        <div>{blok.name as string}</div>
        <p>{blok.description as string}</p>
      </div>
    </div>
  );
};

export default Feature;