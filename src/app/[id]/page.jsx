import projects from "@/app/[id]/projects";
import ProjectSection from "@/components/Section/ProjectSection";
import { SimpleHero, Intro, Container, ImageGrid } from "@courtneyring/components-library";
import styles from "./page.module.scss";

export async function generateStaticParams() {
  return projects.map((c) => ({ id: c.id }));
}

const ProjectPage = async ({ params }) => {
  const { id } = await params;
  const project = projects.find((project) => project.id === id);
  return (
    <div className={styles.root}>
      <SimpleHero image={project.heroImg} />
      <Container
        color="color-primary-medium"
        maxWidth="lg"
        className={styles.intro}
      >
        <Intro header={project.title} body={project.summary} />
      </Container>

      {project.sections.map((section, idx) => (
        <ProjectSection
          section={section}
          content={project}
          idx={idx}
          key={section.id}
        />
      ))}
      <Container maxWidth='lg' color='color-primary-medium'>
        <ImageGrid tiles={project.recommended} header='Explore More'/>
      </Container>
    </div>
  );
};

export default ProjectPage;
