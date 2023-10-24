// "use server";
import { SbBlokData, storyblokEditable } from "@storyblok/react/rsc";

interface Props {
  blok: SbBlokData;
}

const Testimonial = ({ blok }: Props) => {
  return (
    <div {...storyblokEditable(blok)} data-test="testimonial">
      <p>{blok.quote as string}</p>
      <cite>{blok.author as string}</cite>
    </div>
  );
};

export default Testimonial;