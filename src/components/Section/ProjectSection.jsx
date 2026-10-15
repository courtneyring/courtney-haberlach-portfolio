import Text from '../Text/Text';
import Image from '../Image/Image';
import Video from '../Video/Video';
import Background from '../Background/Background';
import Section from './Section';
import { Container } from '@courtneyring/components-library';
import styles from './Section.module.scss';


export default function ProjectSection({ section, content, ...rest }) {
  const Tag = section.layout;

  return (
    <Container  {...section.container} {...rest}>
      <Tag {...section.component} />
    </Container>
  );
}
