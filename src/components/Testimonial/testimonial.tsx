// "use server";
import { SbBlokData, storyblokEditable } from "@storyblok/react/rsc";
import { render } from 'storyblok-rich-text-react-renderer';

interface Props {
  blok: SbBlokData;
}

const Testimonial = ({ blok }: Props) => {
  return (
    <div {...storyblokEditable(blok)} data-test="testimonial" className="text-center">
      {render(blok.quote)}
      <br/><cite>{blok.author as string}</cite>
    </div>
  );
};

export default Testimonial;