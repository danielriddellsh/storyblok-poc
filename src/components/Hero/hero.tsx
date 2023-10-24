// "use server";
import { SbBlokData, storyblokEditable } from "@storyblok/react/rsc";
import Title from "../Title/title";

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
      <Title blok={blok} />
      <p>{blok.heroContent as string}</p>
    </div>
  );
};

export default Hero;