import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from './page.module.css';
import Navbar from '@/components/navbar';
import HeroBackground from '@/assets/landing-page/landing-hero-section.svg';
import TeamBanner from '@/assets/landing-page/2023-team-header.webp';
import Willow from '@/assets/landing-page/willow.svg';
import Button from '@/components/button';
import Footer from '@/components/footer';
import Card from '@/components/card';

export const metadata = {
  title: 'Home | UNSW WIT'
};

const Home = () => {
  return (
    <main>
      <div>
        <Navbar />
        <Image src={HeroBackground} alt="Landing Hero Section" width="100" height="100" />
      </div>
      <div>
        <h1 className={styles.title}>UNSW Women In Technology</h1>
        <p>"Empowering and inspiring the architects of change"</p>
        <p>
          Collaborate <span>|</span> Inspire <span>|</span> Change
        </p>
        <Image src={TeamBanner} alt="2023 Team Header" width="100" height="100" />
      </div>
      <div>
        <h2>Who Are We?</h2>
        <p>
          Formed in late 2016, we have grown to be a platform that empowers, unites and up-skills
          female and male students alike that are passionate about our mission. Women in Technology
          (WIT) aims to cultivate future leaders that are prepared to challenge the prejudices and
          bring change into the industry while building a strong community where they can find
          lasting friendships and support.
        </p>
      </div>
      <div>
        <h2>Hear From Us</h2>
        <p>
          Want to know how our amazing organisation all started? Interested in how we have grown and
          expanded since then?
        </p>
        <div>{/* Carousel */}</div>
      </div>
      <div>
        <h2>Community In Numbers</h2>
        <div>
          <Image src={Willow} alt="Willow" width="100" height="100" />
          <div>
            <h4>12345</h4>
            <p>Some text about this section</p>
            <h4>12345</h4>
            <p>Some text about this section</p>
            <h4>12345</h4>
            <p>Some text about this section</p>
          </div>
        </div>
      </div>
      <div>
        <h2>Multimedia</h2>
        {/* Multimedia Stuff */}
        <Button title="View More" />
      </div>
      <div>
        <h2>See What We've Been Up To</h2>
        {/* Event Cards */}
        <Card title="WIT Hackathon" description="Some description" image={null} link="/" />
      </div>
      <div>
        <h2>Annual Events</h2>
        <p>Check out some of our flagship events!</p>
        {/* Event Cards */}
        <Card title="WIT Hackathon" description="Some description" image={null} link="/" />
      </div>
      <div>
        <h2>Sponsors and Affliations</h2>
        {/* Sponsors */}
      </div>
      <div>
        <h2>Newsletter</h2>
        <p>Subscribe to our newsletter to stay up to date with our events and opportunities!</p>
        <form>
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" placeholder="Email Address" required />
          </div>
          <div>
            <label htmlFor="first-name">First Name</label>
            <input type="text" name="first-name" placeholder="First Name" required />
          </div>
          <div>
            <label htmlFor="first-name">Last Name</label>
            <input type="text" name="last-name" placeholder="Last Name" required />
          </div>
          <div>
            <label htmlFor="first-name">Degree</label>
            <input type="text" name="degree" placeholder="Degree" required />
          </div>
          <Button title="Subscribe" />
        </form>
      </div>
      <Footer />
    </main>
  );
};

export default Home;
