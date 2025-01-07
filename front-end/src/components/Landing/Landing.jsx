// src/components/Landing/Landing.jsx

import styles from './Landing.module.css';
import Hawk from '../../assets/images/hawk-1853120_640.jpg';
import Stars from '../../assets/images/stars.svg';
import Logotype from '../../assets/images/logotype.svg';

const Landing = () => {
  return (
    <>
      <main className={styles.container}>
        <section className={styles.splash}>
          <img src={Hawk} alt="A majestic hawk" />
        </section>

        <section className={styles.about}>
          <header>
            <h3>WHO WE ARE</h3>
            <h1>ABOUT US</h1>
          </header>
          <article>
            <p>
              Have you ever wished you had somewhere to keep track of all of those 
              cool birds you see when you're out and about?  You know, when you write
              down on a napkin that you saw a Yellow Bellied Sap Sucker when out 
              walking the dog?  Then you get home and that napkin gets lost somewher?
              Well, now you can keep track of all your bird sighting in one place. No 
              wondering what it was you saw or where you saw it or even when!  Also,
              you can peruse the bird sightings of all of your fellow birders and leave 
              comments, etc.  How cool is that?
            </p>
          </article>
        </section>

        <section className={styles.testimonial}>
          <header>
            <h3>BIRDING IS AWESOME</h3>
            <h1>TESTIMONIALS</h1>
          </header>
          <article>
            <header>
              <h4>Joe Smith</h4>
              <p>Retiree</p>
            </header>
            <p>
              My fellow birders and I use Bird Sightings not only to post our
              bird sightings, but also to keep up to date with our friends' 
              sightings.  If someone posts that they saw an eagle, you can bet 
              we'll all be in the car to meet them at that spot!
            </p>
            <footer>
              <img src={Stars} alt="Four blue stars" />
            </footer>
          </article>
        </section>
      </main>

      <footer className={styles.footer}>
        © 2025 BIRD SIGHTINGS-ALL RIGHTS RESERVED
      </footer>
    </>
  );
};

export default Landing;
