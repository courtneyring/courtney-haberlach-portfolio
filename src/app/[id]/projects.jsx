import {
  Background,
  Banner,
  Masonry,
  Quote,
  Carousel,
  Video,
  Image
} from "@courtneyring/components-library";
import styles from "./page.module.scss";

const projects = [
  {
    id: "ford-drive",
    title: "Ford Built Wild & Electric",
    summary:
      "A digital keepsake experience for Ford’s Bronco and Mach-E, using onboard sensors to capture riders’ reactions at peak incline and acceleration, then auto-editing a personalized video to take home.",
    heroImg: "/images/ford-drive/hero.jpeg",
    heroPos: "50% 35%",
    tileImg: "/images/ford-drive/tile.png",
    sections: [
      {
        layout: Masonry,
        container: {
          color: "color-primary-medium",
          maxWidth: "xl",
        },
        component: {
          images: [
            { src: "/images/ford-drive/masonry-1.jpg" },
            { src: "/images/ford-drive/masonry-2.jpg" },
            { src: "/images/ford-drive/masonry-3.jpg" },
            { src: "/images/ford-drive/masonry-4.jpg" },
          ],
        },
      },
      {
        layout: Banner,
        component: {
          className: "banner",
          header: "Why This Mattered",
          body: "When auto shows returned after COVID in the summer of 2021, Ford wanted its return to make an impression — specifically with its two flashiest vehicles, the Bronco and the Mach-E. Off-roading and 0-60 acceleration don’t translate well to a showroom floor, so the challenge was building physical experiences that let attendees feel those capabilities firsthand, then giving them something to take home and share.",
          alignment: "left",
        },
        container: {
          color: "color-primary-light",
          maxWidth: "sm",
        },
      },
      {
        layout: Background,
        component: {
          image: "/images/ford-drive/grey-bronco-on-obstacle.jpg",
          x: "69%",
          y: "39%",
        },
        container: {
          styleless: true,
        },
      },
      {
        layout: Banner,
        component: {
          alignment: "left",
          header: "My Role",
          body: "As Senior Software Engineer, I designed and built the system that powered both experiences: sensors in each vehicle detected the exact moments of peak incline, decline, and acceleration, triggering a video pipeline that automatically edited and delivered a personalized keepsake to every rider. I also provided onsite support across the activation’s run, troubleshooting hardware and software in real time as the program traveled to 8 auto shows over eight months — keeping the experience reliable at each new venue with a different crowd, layout, and set of constraints.",
        },
        container: {
          color: "color-primary-medium",
          maxWidth: "sm",
        },
      },
      {
        layout: Carousel,
        component: {
          items: [
            {
              image: "/images/ford-drive/carousel-1.jpg",
              caption:
                "An obstacle course ending in “The Mountain” let attendees feel the Bronco’s peak incline and decline angles firsthand.",
            },
            {
              image: "/images/ford-drive/carousel-2.jpg",
              caption:
                "The Mach-E goes 0-60 in 3.5 seconds — so we built a straightaway and let drivers feel it themselves.",
            },
            {
              image: "/images/ford-drive/carousel-3.jpg",
              caption:
                "An accelerometer and gyroscope, hidden in the trunk of each vehicle, tracked motion throughout the ride.",
            },
            {
              image: "/images/ford-drive/carousel-4.jpg",
              caption:
                "A Raspberry Pi ran a custom Python script to read and process sensor data continuously as the vehicle moved.",
            },
            {
              image: "/images/ford-drive/carousel-5.jpg",
              caption:
                "The Bronco’s incline angle wasn’t a direct sensor reading — it came from combining both sensors using a complementary filter.",
            },
            {
              image: "/images/ford-drive/carousel-6.jpg",
              caption:
                "A dashboard-mounted webcam recorded riders in the back seat, synced to timestamp triggers at each peak moment.",
            },
            {
              image: "/images/ford-drive/carousel-7.jpg",
              caption:
                "Every ride triggered a backend pipeline — jobs queued with RabbitMQ, processed by a Node worker, and spliced together with FFmpeg.",
            },
            {
              image: "/images/ford-drive/carousel-8.jpg",
              caption:
                "Finished videos were stored on Amazon S3 and emailed directly to riders to keep and share.",
            },
          ],
        },
        container: {
          color: "color-primary-dark",
        },
      },
      {
        layout: Banner,
        component: {
          alignment: "left",
          header: "Outcome",
          body: "“Built Wild” and “Built to Electrify” debuted at the Chicago Auto Show in 2021 to strong results, and Ford extended the program for the rest of the season. Between July 2021 and March 2022, the activation traveled to 8 auto shows and generated 28,552 personalized videos for attendees.",
        },
        container: {
          color: "color-primary-light",
          maxWidth: "sm",
        },
      },
    ],
  },
  {
    id: "dwb",
    title: "Driving While Black",
    summary:
      "An award-winning AR activation at the 2023 Detroit Auto Show that revealed the harsh realities Black drivers face, using a virtual concept car to spark conversation on systemic bias.",
    heroImg: "/images/dwb/hero.jpg",
    heroImgMobile: "background-mobile.webp",
    heroPos: "50% 35%",
    tileImg: "/images/dwb/hero2.webp",
    sections: [
      {
        layout: Masonry,
        container: {
          color: "color-primary-medium",
          maxWidth: "xl",
        },
        component: {
          images: [
            { src: "/images/dwb/masonry-1.jpg" },
            { src: "/images/dwb/masonry-2.jpg" },
            { src: "/images/dwb/masonry-3.jpg" },
            { src: "/images/dwb/masonry-4.jpg" },
          ],
        },
      },
      {
        layout: Banner,
        component: {
          className: "banner",
          header: "Context",
          body: "Black drivers in America face systemic bias, with routine traffic stops often escalating into dangerous situations. The challenge was to create an experience that would bring this issue to the forefront at an event focused on innovation—the 2023 Detroit Auto Show.",
          alignment: "left",
        },
        container: {
          color: "color-primary-light",
          maxWidth: "sm",
        },
      },
      {
        layout: Background,
        component: {
          image: "/images/dwb/dwb-vehicle-front.jpg",
          x: "69%",
          y: "39%",
        },
        container: {
          styleless: true,
        },
      },
      {
        layout: Banner,
        component: {
          alignment: "left",
          header: "The Solution",
          body: "I led development of the AR experience for Critical Mass and Goodby Silverstein & Partners, building it in 8th Wall. Using a 3D concept car model, I implemented the hotspots and animations that revealed the car’s “safety features” as attendees explored it in AR — transparent doors, a steering wheel built to keep hands visible, extreme measures Black drivers might feel they need to feel safe. A high-production video, styled like a luxury car ad, reinforced the message using the same visual language advertisers use to sell aspiration, turned instead toward systemic disparity.",
        },
        container: {
          color: "color-primary-medium",
          maxWidth: "sm",
        },
      },
      {
        layout: Video,
        component: {
          url: "https://www.youtube.com/watch?v=oOAtRE5jwrs",
          title: "Driving While Black",
          poster: "/images/dwb/dwb-vehicle-front.jpg",
        },
        container: {
          color: "color-primary-medium",
          maxWidth: "lg",
        },
      },
      {
        layout: Banner,
        component: {
          alignment: "left",
          header: "Outcome",
          body: "The campaign sparked meaningful conversations about racial bias in policing, gaining widespread attention. It earned top industry honors, including a Clio Grand, multiple Cannes Lions, One Show, and Webby awards. I attended the Andy Awards to accept on behalf of the team, alongside the project’s tech director.",
        },
        container: {
          color: "color-primary-medium",
          maxWidth: "sm",
        },
      },
      {
        layout: Masonry,
        container: {
          color: "color-primary-medium",
          maxWidth: "xl",
        },
        component: {
          images: [
            { src: "/images/dwb/masonry-5.jpg" },
            { src: "/images/dwb/masonry-7.jpg" },
          ],
        },
      },
    ],
  },
  {
    id: "canon-photobooth",
    title: "Canon CES Co-Create",
    heroImg: "/images/canon-photobooth/hero.png",
    heroPos: "76% 50%",
    tileImg: "/images/canon-photobooth/tile.png",
    summary:
      "A personalized photo experience for Canon’s CES 2020 stand, letting participants save studio-quality shots straight from Canon’s cameras to their profile — while showcasing Canon’s Software Developer Kit.",
    sections: [
      {
        layout: Masonry,
        container: {
          color: "color-primary-medium",
          maxWidth: "xl",
        },
        component: {
          images: [
            { src: "/images/canon-photobooth/masonry-1.jpg" },
            { src: "/images/canon-photobooth/masonry-2.jpg" },
            { src: "/images/canon-photobooth/masonry-3.jpg" },
            { src: "/images/canon-photobooth/masonry-4.jpg" },
          ],
        },
      },
      {
        layout: Banner,
        component: {
          className: "banner",
          header: "Why This Mattered",
          body: "For CES 2020, Canon built its stand around a fashion show runway where attendees could try out its cameras on models on the catwalk. Trying a camera in the moment wasn’t enough — Canon wanted attendees to walk away with something, and wanted a way to capture leads from everyone who engaged with the stand.",
          alignment: "left",
        },
        container: {
          color: "color-primary-light",
          maxWidth: "sm",
        },
      },
      {
        layout: Background,
        component: {
          image: "/images/canon-photobooth/woman-taking-picture.jpg",
          x: "69%",
          y: "39%",
        },
        container: {
          styleless: true,
        },
      },
      {
        layout: Banner,
        component: {
          alignment: "left",
          header: "My Role",
          body: "As Frontend Developer, I built the tablet application participants used throughout the experience — from capturing and reviewing photos to saving them to their Canon Passport profile. The app connected to Canon’s Software Developer Kit to pull images directly from their DSLR cameras and let users control camera functions from the tablet itself. I also provided onsite support throughout the show.",
        },
        container: {
          color: "color-primary-medium",
          maxWidth: "sm",
        },
      },
      {
        layout: Masonry,
        container: {
          color: "color-primary-light",
          maxWidth: "lg",
        },
        component: {
          images: [{ src: "/images/canon-photobooth/content-image-2.png" }],
        },
      },
      {
        layout: Banner,
        component: {
          alignment: "left",
          header: "Outcome",
          body: "The experience gave Canon attendees a reason to stay engaged beyond a single photo — participants could revisit their images after the show, while the underlying application showcased Canon’s Software Developer Kit to more technically-minded visitors. Following its debut at CES, the activation was brought to several additional trade shows throughout the year, including ComplexCon, LAAS, and NAB.",
        },
        container: {
          color: "color-primary-medium",
          maxWidth: "sm",
        },
      },
    ],
  },
  {
    id: "aptiv-sva",
    title: "Aptiv Virtual Tool",
    shortTitle: "SVA Becoming Reality",
    subtitle: "lorem ipsum",
    featured: true,
    skills: "Angular, Scss, ThreeJS, Augmented Reality",
    employer: "Imagination",
    client: "Aptiv",
    role: "Frontend Developer",
    heroPos: "47% 90%",
    heroImg: "/images/aptiv-sva/hero.jpg",
    tileImg: "/images/aptiv-sva/tile.jpg",
    summary:
      "An AR tool built during COVID-19 that let Aptiv showcase its Smart Vehicle Architecture in a fully interactive 3D experience — bringing a hands-on, in-person feel to virtual sales meetings and events.",
    sections: [
      {
        layout: Masonry,
        container: {
          color: "color-primary-medium",
          maxWidth: "xl",
        },
        component: {
          images: [
            { src: "/images/aptiv-sva/model-view.jpg" },
            { src: "/images/aptiv-sva/ar-presentation.jpg" },
            { src: "/images/aptiv-sva/virtual-presentation.jpg" },
            { src: "/images/aptiv-sva/ar-sva.jpg" },
          ],
        },
      },
      {
        layout: Banner,
        component: {
          className: "banner",
          header: "Why This Mattered",
          body: "When the pandemic forced Aptiv’s events strategy from in-person to virtual, showing off a complex product like Smart Vehicle Architecture got a lot harder — you can’t hand someone a physical component over a video call. Aptiv needed a way to stand out in a sea of virtual meetings and give customers something closer to a hands-on experience, remotely.",
          alignment: "left",
        },
        container: {
          color: "color-primary-light",
          maxWidth: "sm",
        },
      },
      {
        layout: Background,
        component: {
          image: "/images/aptiv-sva/mockup-2.png",
          x: "69%",
          y: "69%",
        },
        container: {
          styleless: true,
        },
      },
      {
        layout: Banner,
        component: {
          alignment: "left",
          header: "My Role",
          body: "As Frontend Developer, I built the application in Angular, using three.js to power the 3D models, hotspots, and animations, and Google’s <model-viewer> to handle the AR experience. Users could explore a 360° view of the vehicle architecture, click hotspots to zero in on individual components, and either manipulate each part as a 3D model on-screen or launch it in AR to view in their own space. I also made the experience fully responsive, detecting screen type to guide users on how to launch AR correctly on their specific device.",
        },
        container: {
          color: "color-primary-medium",
          maxWidth: "sm",
        },
      },
      {
        layout: Masonry,
        container: {
          color: "color-primary-light",
          maxWidth: "lg",
        },
        component: {
          images: [{ src: "/images/aptiv-sva/mockup.png" }],
        },
      },
      {
        layout: Banner,
        component: {
          alignment: "left",
          header: "Outcome",
          body: "The campaign sparked meaningful conversations about racial bias in policing, gaining widespread attention. It earned top industry honors, including a Clio Grand, multiple Cannes Lions, One Show, and Webby awards, cementing its status as a powerful example of experiential marketing for social change.",
        },
        container: {
          color: "color-primary-medium",
          maxWidth: "sm",
        },
      },
      {
        layout: Quote,
        component: {
          quote:
            "I want to recognize Imagination for […] helping us find innovative solutions for how we can reach our customers, not only from taking a physical product to a digital solution, but also helping bring that technology to life by doing event remotely by applying different types of digital tools to make it engaging.",
          speaker:
            "Rachelle Valdez Vice President, Marketing and Communications, Americas at Aptiv",
        },

        container: {
          color: "color-primary-light",
          maxWidth: "xl",
        },
      },
    ],
  },
  {
    id: "ford-specpods",
    heroImg: "/images/ford-specpods/hero3.png",
    heroPos: "100% 35%",
    tileImg: "/images/ford-specpods/tile.png",
    title: "Ford Touchless Specpods",
    summary:
      "A mobile-first replacement for the shared tablets at Ford’s auto show stands: visitors scan a QR code and explore vehicle specs on their own phones, with no waiting and no shared screens.",
    sections: [
      {
        layout: Masonry,
        container: {
          color: "color-primary-medium",
          maxWidth: "xl",
        },
        component: {
          images: [
            { src: "/images/ford-specpods/masonry-1.jpg" },
            { src: "/images/ford-specpods/masonry-2.jpg" },
            { src: "/images/ford-specpods/masonry-3.jpg" },
            { src: "/images/ford-specpods/masonry-4.jpg" },
          ],
        },
      },
      {
        layout: Banner,
        component: {
          className: "banner",
          header: "Why This Mattered",
          body: "When auto shows returned in summer 2021, Ford wanted vehicle information on its stands to be easier to access and navigate. The standard setup, a single tablet in front of each vehicle, limited interaction to one visitor at a time. After COVID-19, many people were also reluctant to touch shared devices. Ford needed a way to put spec information in visitors’ own hands.",
          alignment: "left",
        },
        container: {
          color: "color-primary-light",
          maxWidth: "sm",
        },
      },
      {
        layout: Background,
        component: {
          image: "/images/ford-specpods/orange-car-specpod.jpg",
          x: "100%",
          y: "39%",
        },
        container: {
          styleless: true,
        },
      },
      {
        layout: Banner,
        component: {
          alignment: "left",
          header: "My Role",
          body: "As Full Stack Developer and DevOps, I built the mobile spec pod application and the infrastructure behind it. Visitors scan a QR code on the stand, which deep-links them straight to that vehicle’s specs on their own device, where they can explore further through links within the app. I built it mobile-first but fully responsive, so visitors could revisit it from a computer later, and to WCAG AAA accessibility standards per Ford’s digital guidelines. Content was managed through an in-house CMS built on Django, deployed with Docker and Ansible.",
        },
        container: {
          color: "color-primary-medium",
          maxWidth: "sm",
        },
      },
      {
        layout: Image,
        container: {
          color: "color-primary-dark",
          maxWidth: "lg",
        },
        component: {
          src: "/images/ford-specpods/specpod-mockup.png",
          objectFit: "contain",
        },
      },
      {
        layout: Banner,
        component: {
          alignment: "left",
          header: "Outcome",
          body: "The spec pods debuted at the Chicago Auto Show in July 2021, the first auto show after restrictions lifted. Ford kept expanding the program from there: we re-skinned the same system for Lincoln stands and built specialty versions for events like SEMA and CES, where special product innovations were highlighted.",
        },
        container: {
          color: "color-primary-light",
          maxWidth: "sm",
        },
      },
    ],
  },
  {
    id: "saudi",
    title: "Open Saudi, Open Hearts, Open Doors",
    heroImg: "/images/saudi/hero.png",
    heroPos: "56% 90%",
    tileImg: "/images/saudi/tile.png",
    summary:
      "A multi-sensory event for VIPs, media, and influencers that introduced the world to Saudi Arabia’s culture and heritage as the Kingdom opened to tourists with its new e-Visa program.",
    sections: [
      {
        layout: Masonry,
        container: {
          color: "color-primary-medium",
          maxWidth: "xl",
        },
        component: {
          images: [
            { src: "/images/saudi/masonry-1.jpg" },
            { src: "/images/saudi/masonry-2.jpg" },
            { src: "/images/saudi/masonry-3.jpg" },
            { src: "/images/saudi/masonry-4.jpg" },
          ],
        },
      },
      {
        layout: Banner,
        component: {
          className: "banner",
          header: "Why This Mattered",
          body: "On September 27, 2019, Saudi Arabia launched its e-Visa tourism program, opening the country to tourism from over 50 countries for the first time. To mark the moment, Imagination organized a multi-sensory event for VIPs, media, and influencers. Offices around the world built different pieces of it, digital and physical. The US office was responsible for the event’s home website, which served as an attractor beforehand and a wrap-up afterward.",
          alignment: "left",
        },
        container: {
          color: "color-primary-light",
          maxWidth: "sm",
        },
      },
      {
        layout: Background,
        component: {
          image: "/images/saudi/woman-viewing-ipad-app.jpg",
          pos: "70% 100%",
        },
        container: {
          styleless: true,
        },
      },
      {
        layout: Banner,
        component: {
          alignment: "left",
          header: "My Role",
          body: "As Frontend Developer, I owned the build of the site, from the technical approach through launch. I chose to build it as a fully responsive, cross-browser Angular application, with Storyblok as the CMS and Amazon S3 for hosting, and delivered it on a 4-week timeline: 3 weeks of development and 1 week of QA.",
        },
        container: {
          color: "color-primary-medium",
          maxWidth: "sm",
        },
      },
      {
        layout: Video,
        container: {
          color: "color-primary-dark",
          maxWidth: "lg",
        },
        component: {
          url: "/images/saudi/saudi-review-video.mp4",
          title: "Saudi Open Hearts Open Doors",
          poster: "/images/saudi/video-placeholder.png",
        },
      },
      {
        layout: Banner,
        component: {
          alignment: "left",
          header: "Outcome",
          body: "The event took place at Ad Diriyah, a UNESCO World Heritage site in Riyadh, before an audience of 400 VVIPs, media, and influencers, with a live TV and online audience across Saudi Arabia and the GCC. It launched the “Open Saudi, Open Hearts, Open Doors” campaign as part of a broader global push to promote Saudi tourism.",
        },
        container: {
          color: "color-primary-light",
          maxWidth: "sm",
        },
      },
    ],
  },
  {
    id: "canon-passport",
    title: "Canon Co-Lab",
    heroImg: "/images/canon-passport/hero.png",
    heroPos: "50% 60%",
    tileImg: "/images/canon-passport/tile.png",
    summary:
      "A creator-led Canon stand at ComplexCon 2019, built around the Co-Lab series, with photo activations and a digital passport that let attendees keep their experience after the show.",
    sections: [
      {
        layout: Masonry,
        container: {
          color: "color-primary-medium",
          maxWidth: "xl",
        },
        component: {
          images: [
            { src: "/images/canon-passport/masonry-1.jpg" },
            { src: "/images/canon-passport/masonry-2.jpg" },
            {
              src: "/images/canon-passport/masonry-3.jpg",
              position: "50% 30%",
            },
            { src: "/images/canon-passport/masonry-4.jpg" },
          ],
        },
      },
      {
        layout: Banner,
        component: {
          className: "banner",
          header: "Why This Mattered",
          body: "Canon wanted to convince Gen Z to put down their phones and pick up a camera. To do it, Canon brought together six creators (a magician, a dancer, a designer, an artist, and two photographers) as the Canon Co-Lab, starring in a Complex reality series about unexpected collaborations. The series finale was filmed at ComplexCon 2019, where Canon’s stand became one of the most visited of the weekend. With that much traffic, Canon needed a way to turn a fun moment into something visitors could take home, and a way to see how people engaged with the stand..",
          alignment: "left",
        },
        container: {
          color: "color-primary-light",
          maxWidth: "sm",
        },
      },
      {
        layout: Background,
        component: {
          image: "/images/canon-passport/lightroom.png",
          x: "69%",
          y: "39%",
        },
        container: {
          styleless: true,
        },
      },
      {
        layout: Banner,
        component: {
          alignment: "left",
          header: "My Role",
          body: "As Frontend Developer and onsite support, I built the digital layer of the stand. That included the photo activations, similar to the experience we built for CES, where attendees shot with Canon cameras and saved their images. It also included the Passport experience: attendees registered, received a QR code, and scanned it at touchpoints to save visits to their profile. Their photos and souvenirs were then waiting on a personalized site after the show, with emails guiding them along the way. I was also onsite throughout the weekend to support it.",
        },
        container: {
          color: "color-primary-medium",
          maxWidth: "sm",
        },
      },
      {
        layout: Masonry,
        container: {
          color: "color-primary-medium",
          maxWidth: "xl",
        },
        component: {
          images: [
            {
              src: "/images/canon-passport/masonry-5.jpg",
              position: "100% 50%",
            },
            { src: "/images/canon-passport/masonry-6.jpg" },
          ],
        },
      },
      {
        layout: Banner,
        component: {
          alignment: "left",
          header: "Outcome",
          body: "The stand drew some of the biggest crowds at ComplexCon, and the digital experiences gave every visitor something to keep and gave Canon visibility into how attendees engaged. The photo activation went on to several more shows during the year, including LAAS and NAB.",
        },
        container: {
          color: "color-primary-medium",
          maxWidth: "sm",
        },
      },
    ],
  },
  // {
  //   id: "nissan-hd-mapping",
  //   title: "Nissan High Definition Road Map",
  //   heroImg: "hero.png",
  //   heroPos: "50% 40%",
  //   tileImg: "/images/nissan-hd-mapping/tile.jpg",
  //   body: "<p>Nissan and Infiniti required an interactive mapping tool to show where their ProPilot Assist hands-free driving technology could be activated. The project was executed in two phases, several years apart. The first phase launched a ProPilot 2.0 map for Nissan US, supporting both English and Spanish. When ProPilot 2.1 was introduced, the scope expanded significantly, requiring new versions for Nissan Canada (English and French), Infiniti Canada (English and French), Infiniti US (English), and an updated Nissan US version in English, all while maintaining the existing ProPilot 2.0 pages. Compliance with Canadian regulations mandated that customers be provided with access to hands-free driving data, and sales in Canada were halted until these new pages were released.</p>",
  //   skills: "OpenLayers, OpenStreetMap, Jinja, Jenkins, Jira, Gulp",
  //   employer: "Critical Mass",
  //   client: "Nissan",
  //   role: "Tech Lead",
  //   sections: [
  //     {
  //       layout: "image",
  //       image: "hd-mapping-mocks.png",
  //       backgroundColor: "#EBECED",
  //     },
  //     {
  //       layout: "text",
  //       title: "The Mission",
  //       body: "As the Tech Lead, I was responsible for designing and implementing a scalable and interactive mapping solution that could handle multiple brands, regions, and languages while ensuring accurate data integration. The challenge was to overlay high-definition driving route data onto a base map while maintaining an intuitive and seamless user experience. The expansion also required adapting the platform to support multilingual content and ensuring the accuracy of new data layers before launch.",
  //       backgroundColor: "#191C23",
  //     },
  //     {
  //       layout: "text",
  //       title: "The Approach",
  //       body: "To achieve this, I utilized OpenLayers to overlay Dynamic Map Platform’s (DMP) highlighted road data onto an OpenStreetMap (OSM) base layer, creating an interactive and accurate visualization of hands-free driving routes. The map dynamically adjusted to center on the user’s region, switching between U.S. and Canadian route layers as needed. In Phase 2, I expanded multilingual support beyond the original English and Spanish implementation to include English and French for the Canadian market, ensuring compliance with regulatory requirements. I collaborated closely with DMP and Nissan-Infiniti to validate map data accuracy and resolve integration challenges. Managing both project phases required coordinating with multiple teams, optimizing performance across different site versions, and ensuring a seamless user experience while meeting tight deadlines.",
  //       backgroundColor: "#191C23",
  //     },
  //     {
  //       layout: "text",
  //       title: "The Outcome",
  //       body: "By delivering accurate, high-definition road data in an intuitive, interactive format, the map provided users with a seamless way to explore where ProPilot Assist could be activated, enhancing accessibility and trust in the technology. Over the first 200 days, the ProPilot Assist HD Map received 5,399 visits, averaging 810 visits per month, with 60-67% of users interacting with the map through actions like clicking and dragging (55-61%) and zooming in and out (36-49%). We continue to maintain these pages, making incremental updates to both the content and data to ensure accuracy and usability as the technology evolves. By implementing a scalable, multi-region, and multi-language solution, I ensured long-term maintainability, making future updates and expansions seamless for Nissan and Infiniti.",
  //       backgroundColor: "#191C23",
  //     },
  //   ],
  // },
  // {
  //   id: "nissan-ariya-launch-campaign",
  //   title: "Nissan ARIYA Launch Campaign",
  //   heroImg: "2023-nissan-ariya.webp",
  //   heroPos: "50% 40%",
  //   tileImg: "/images/nissan-ariya-launch-campaign/desktop-mockup.jpg",
  //   body: '<p>With the long-awaited Nissan ARIYA, rolled out in 2023, Nissan was looking to raise excitement around its new all-electric SUV. For customers coming from their media and social campaigns, they needed a landing page to encourage customers to keep exploring the details of the new vehicle. Drawing from the already existing duality theme of the Ariya, we created a page to demonstrate all that the Ariya could achieve. From "fiercely refined" to "elegantly exhilarating", the site displayed split videos, key metrics, and plenty of images to draw the users into the experience. </p>',
  //   skills: "Gatsby.js, styled-components, Jenkins, Jira",
  //   employer: "Critical Mass",
  //   client: "Nissan",
  //   role: "Tech Lead",
  //   sections: [
  //     {
  //       layout: "image",
  //       image: "ariya-launch-mockup.png",
  //       backgroundColor: "#EBECED",
  //     },
  //     {
  //       layout: "text",
  //       title: "Technical Details",
  //       body: "The site was built with Gatbsy.js, interlacing video and animation. It contains a variety of CTAs to encourage users to read more, try out the ARIYA AR app, as well as visit the virtual reality experience. The site meets WCAG accessibility standards, includes site analytics, and incorporates SEO best practices.  I led a team of two developers and one QA analyst to deliver this site in a very tight three month timeline.  ",
  //       backgroundColor: "#191C23",
  //     },
  //   ],
  // },
  // {
  //   id: "infiniti-rebrand",
  //   title: "Infiniti Rebrand",
  //   heroImg: "hero-2.png",
  //   heroPos: "50% 50%",
  //   tileImg: "/images/infiniti-rebrand/hero-2.png",
  //   body: "<p>In June 2023, Infiniti announced a brand refresh, complete with a new logo, color scheme, showrooms, sounds, and even fragrance. It's digital properties were making the transition from a primarily black & white palette to blue & beige with its signature horizon graphic. Our part in the overhaul was to ensure all Infiniti Shopping Tools pages followed the new brand guideline for both the American and Canadian markets. These pages included its build & price tool, inventory search, and payment estimator. I led a team of 2 developers and 2 QA analysts to complete the project in just under four months.</p>",
  //   skills: "Gatsby.js, styled-components, Jenkins, Jira",
  //   employer: "Critical Mass",
  //   client: "Infiniti",
  //   role: "Tech Lead",
  //   sections: [
  //     {
  //       layout: "image",
  //       image: "mockup.png",
  //       backgroundColor: "#667084",
  //     },
  //     {
  //       layout: "text",
  //       title: "Project Details",
  //       body: "As a crossover between the delivery team and technology team, I helped support project planning  tasks as well as the development and release phases. I provided estimates for frontend tasks to help inform prioritization, scheduling, and resourcing. From there, we agreed on key milestones for each application to ensure we hit our target date and demo progress to the clients. For the development phase, I led a team of two developers and two QA analysts to complete the project in just under four months. The  process also required coordination with the AEM and content management teams as we worked through dependencies. The initial production release was done on June 22, 2023, with rolling releases afterward for subsequent milestones.",
  //       backgroundColor: "#191C23",
  //     },
  //   ],
  // },
  // {
  //   id: "qx60-competitor-compare",
  //   title: "QX60 Competitor Compare",
  //   heroImg: "hero.png",
  //   heroPos: "50% 45%",
  //   tileImg: "/images/qx60-competitor-compare/hero.png",
  //   body: "<p>After the redesign of the QX60 SUV in 2023, Infiniti wanted to create a site that highlighted all the vehicle's stand-out features and showcased where it excelled against its competitors. In contrast to the rest of the site - mostly made up of static pages - they wanted something interactive and dynamic that customers could use to explore all angles of the QX60.</p><p>The biggest challenge in the project brief was load time expectations. The client was planning on making it the landing page of the QX60, a page that was crucial to user journey. The higher the load time, the higher the bounce rate, ending a user’s journey before it even starts. So having the site load in under a few seconds was a non-negotiable.</p>",
  //   skills: "Gatsby.js, styled-components, Jenkins, Jira, GSAP",
  //   employer: "Critical Mass",
  //   client: "Infiniti",
  //   role: "Tech Lead",
  //   sections: [
  //     {
  //       layout: "image",
  //       image: "mockup.png",
  //       backgroundColor: "#667084",
  //     },
  //     {
  //       layout: "text",
  //       title: "Project Details",
  //       body: "With loading times in mind, we ruled out WebGL - the standard approach to 3D experiences. We had to find a way to give the users a similar experience without the overhead of big files. So instead we turned to video. We collaborated with motion designers to define the movements of the QX60 model for each page transition. Those segments were combined into a single video, which we used as the primary asset on the site. Using GSAP ScrollTrigger and scroll snap, we scrubbed the video based on scroll progress and overlaid hotspot at each stopping point. The outcome was everything a 3D experience could provide without the incorporation of actual 3D components.",
  //       backgroundColor: "#191C23",
  //     },
  //   ],
  // },
];

const projectsUpdates = projects.map((project, idx) => ({
  ...project,
  recommended: [1, 2, 3].map((offset) => {
    const { id, tileImg, title } = projects[(idx + offset) % projects.length];
    return { id, tileImg, title };
  }),
}));

export default projectsUpdates;
