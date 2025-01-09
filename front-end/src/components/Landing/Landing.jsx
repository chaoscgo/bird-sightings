import styles from './Landing.module.css';
import Stars from '../../assets/images/stars.svg';

const Landing = () => {
  return (
    <>
      <main className={styles.container}>
        
        <section className={styles.splash}>
          <h1>Welcome to the Bird Sightings App!</h1>
        </section>

        <section className={styles.about}>
          <header>
            <h2>ABOUT US</h2>
          </header>
          <article>
            <p>
              Have you ever wished you had somewhere to keep track of all of those 
              cool birds you see when you're out and about?  You know, when you write
              down on a napkin that you saw a Yellow-Bellied Sapsucker out 
              walking the dog?  Then you get home and that napkin gets lost somewhere?
              Well, now you can keep track of all your bird sightings in one place. No 
              more wondering what it was you saw or where you saw it or even when!  Also,
              you can peruse the bird sightings of all of your fellow birders and leave 
              comments, etc.  How cool is that?
            </p>
          </article>
        </section>

        <section className={styles.testimonial}>
          <header>
            <h2>TESTIMONIALS</h2>
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
      <footer>Background image designed by <a class="attribution" href="https://pixabay.com">Pixabay</a></footer>
      <footer className={styles.footer}>
        © 2025 BIRD SIGHTINGS-ALL RIGHTS RESERVED
      </footer>
    </>
  );
};

export default Landing;
