// "use server";
import { storyblokEditable, SbBlokData } from "@storyblok/react";
import Link from "../Link/link";
import Image from "../Image/image";
import { render } from 'storyblok-rich-text-react-renderer';

interface Props {
  blok: SbBlokData;
}

const Feature = ({ blok }: Props) => {
  return (
    <div {...storyblokEditable(blok)} data-test="feature" className="card">
      {blok.imgSource && <Image blok={blok} className="card-img-top" />}

      <div className="card-body">
        <div className="card-title">
          {render(blok.featureTitle)}
        </div>
        <div className="card-text">
          {render(blok.featureText)}
        </div>
        {blok.ctaLink && <Link blok={blok} className="btn btn-success"/>}
      </div>
    </div>
  );
};

export default Feature;