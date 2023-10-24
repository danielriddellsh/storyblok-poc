// "use server";
import { SbBlokData, storyblokEditable } from "@storyblok/react/rsc";

interface Props {
  blok: SbBlokData;
}

const Title = ({ blok }: Props) => {
  return (
    <div {...storyblokEditable(blok)} data-test="title">
      <h2>{blok.title as string}</h2>
    </div>
  );
};

export default Title;