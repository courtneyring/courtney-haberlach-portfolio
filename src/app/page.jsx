import Image from "next/image";
import styles from "./page.module.scss";
import { Container, ImageGrid, TextHero } from '@courtneyring/components-library';
import projects from "@/app/[id]/projects";


export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Container
          color="color-primary-medium"
          styleless={true}
        >
          <TextHero header='Courtney Haberlach' subheader='Technology Lead | Product & Experience'/>
            </Container>
          <Container color="color-primary-medium" className={styles.projectsContainer}>
          <ImageGrid tiles={projects}/>
        </Container>
      </main>
    </div>
  );
}
