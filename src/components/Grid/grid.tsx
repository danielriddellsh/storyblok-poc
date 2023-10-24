// "use server";
import { StoryblokComponent, storyblokEditable, SbBlokData,} from "@storyblok/react";
import ListGroup from 'react-bootstrap/ListGroup';

interface Props {
  blok: SbBlokData;
}

const Grid = ({ blok }: Props) => (
  <div {...storyblokEditable(blok)} className="row" data-test="grid">
    {(blok.columns as SbBlokData[]).map((nestedBlok) => (
      <div key={nestedBlok._uid} className="col">
        <StoryblokComponent blok={nestedBlok} />
      </div>
    ))}
  </div>
);

export default Grid;