// "use server";
import { storyblokEditable, SbBlokData } from "@storyblok/react";
import Link from "../Link/link";
import Image from "../Image/image";
import { render } from 'storyblok-rich-text-react-renderer';

interface Props {
  blok: SbBlokData;
}

const Teaser = ({ blok }: Props) => {
  return (
    <div {...storyblokEditable(blok)} data-test="teaser" className="row">
      <div className="col">
        {blok.imgSource && <Image blok={blok} />}
      </div>
      <div className="col">
        <div className="card-body">
          {render(blok.featureTitle)}
          {render(blok.featureText)}
          {blok.ctaLink && <Link blok={blok} />}
        </div>
      </div>
    </div>
  );
};

export default Teaser;