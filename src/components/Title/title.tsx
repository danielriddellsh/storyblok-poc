// "use server";
import { SbBlokData, storyblokEditable } from "@storyblok/react/rsc";
import { render } from 'storyblok-rich-text-react-renderer';

interface Props {
  blok: SbBlokData;
  align?: 'text-start' | 'text-center' | 'text-end';
}

const Title = ({ blok, align = 'text-start' }: Props) => {
  return (
    <div {...storyblokEditable(blok)} data-test="title" className={blok.align ? (blok.align as string) : align}>
      {render(blok.title)}
    </div>
  );
};


export default Title;