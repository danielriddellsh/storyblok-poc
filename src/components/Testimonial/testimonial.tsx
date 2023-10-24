// "use server";
import { SbBlokData, storyblokEditable } from "@storyblok/react/rsc";
import { render } from 'storyblok-rich-text-react-renderer';

interface Props {
  blok: SbBlokData;
}

const Testimonial = ({ blok }: Props) => {
  return (
    <div {...storyblokEditable(blok)} data-test="testimonial">
      {render(blok.quote)}
      <cite>{blok.author as string}</cite>
    </div>
  );
};

export default Testimonial;