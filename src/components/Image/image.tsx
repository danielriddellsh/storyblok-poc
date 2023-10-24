// "use server";
import { storyblokEditable, SbBlokData } from "@storyblok/react";

interface Props {
  blok: SbBlokData;
}

const Image = ({ blok }: Props) => {
  return (
    <div {...storyblokEditable(blok)} data-test="image">
      <img src={(blok.imgSource as any)?.filename as string} alt={blok.imgAlt as string} />
    </div>
  );
};

export default Image;