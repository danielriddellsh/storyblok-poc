// "use server";
import { SbBlokData, storyblokEditable } from "@storyblok/react/rsc";
import Title from "../Title/title";
import { render } from 'storyblok-rich-text-react-renderer';

interface Props {
  blok: SbBlokData;
}

const Hero = ({ blok }: Props) => {
  return (
    <div {...storyblokEditable(blok)} data-test="hero" style={{
      backgroundImage: `url(${(blok.heroBackground as any)?.filename})`,
      backgroundSize: 'cover',
      minHeight: '50vh'
    }}>
      <Title blok={blok} align='text-start' />
      {render(blok.heroContent)}
    </div>
  );
};

export default Hero;