// "use server";
import { SbBlokData, storyblokEditable } from "@storyblok/react/rsc";

interface Props {
  blok: SbBlokData;
}

const Teaser = ({ blok }: Props) => {
  return (
    <h2 data-cy="teaser" {...storyblokEditable(blok)}>
      {blok.headline as string}
    </h2>
  );
};

export default Teaser;