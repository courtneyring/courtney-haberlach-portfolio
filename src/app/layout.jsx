import "./globals.scss";
import PortfolioNavbar from "@/components/PortfolioNavbar/PortfolioNavbar";
import { Footer, Container, Toolbar } from "@courtneyring/components-library";
import styles from './layout.module.scss';
import localFont from 'next/font/local';

const Lemon = localFont({
  src: [
    { path: "../fonts/Chonburi-Regular.ttf", weight: "300", style: "regular" },
  ],
  variable: "--font-humor",
  // display: "swap",
});

export const metadata = {
  title: "Courtney Haberlach",
  description: "Courtney Haberlach | Technology Lead, Product & Experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body >
        <PortfolioNavbar />
        {children}
        <Container color='color-primary-dark'>
          <Footer
            logo="/courtney-haberlach-logo.svg"
            className={styles.footer}
            links={[
              
            ]}
          />
        </Container>
        {/* <Toolbar /> */}
      </body>
    </html>
  );
}
