// "use server";
import { storyblokEditable, SbBlokData } from "@storyblok/react";

interface Props {
  blok: SbBlokData;
  className?: string
}

const Image = ({ blok, className = '' }: Props) => {
  return (
    <div {...storyblokEditable(blok)} data-test="image">
      <img src={(blok.imgSource as any)?.filename as string}
        alt={blok.imgAlt as string} 
        className={className} />
    </div>
  );
};

export default Image;