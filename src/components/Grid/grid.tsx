// "use server";
import { StoryblokComponent, storyblokEditable, SbBlokData,} from "@storyblok/react";
import ListGroup from 'react-bootstrap/ListGroup';

interface Props {
  blok: SbBlokData;
}

const Grid = ({ blok }: Props) => (
  <ListGroup {...storyblokEditable(blok)} data-test="grid">
    {(blok.columns as SbBlokData[]).map((nestedBlok) => (
      <ListGroup.Item key={nestedBlok._uid}>
        <StoryblokComponent blok={nestedBlok} />
      </ListGroup.Item>
    ))}
  </ListGroup>
);

export default Grid;