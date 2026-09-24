import Header from "@/components/Header/Header";
import { Container, ImageTextBlock } from "@courtneyring/components-library";
import styles from './page.module.scss'

const AboutPage = ()=> {
    return (
      <Container color="color-primary-medium" maxWidth="lg">
        <Header title="About Me" />
        <ImageTextBlock reverse body="Hi there, I'm Courtney, a tech lead based in New York City. I've worked in the industry for nine years with roles ranging from individually contributing as a developer to managing teams as a lead. My expertise lies at the intersection of design and technology, which gives me a unique set of skills within the tech realm. I can be the digital expert during the ideation process, the prototyper during discovery, and the point person during project development. I thrive on figuring out new solutions and exploring emerging tech to ultimately deliver experiences that give users that true surprise-and-delight moment." image='/images/profile-image.jpg' className={styles.imageTextBlock}/>
      </Container>
    );
}

export default AboutPage;