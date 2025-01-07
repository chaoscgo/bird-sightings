import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as birdService from '../../services/birdService';

const BirdDetails = (props) => {

    const [bird, setBird] = useState(null);

    const { birdId } = useParams();

    useEffect(() => {
        const fetchBird = async () => {
          const birdData = await birdService.show(birdId);
          console.log('birdData', birdData);
          setBird(birdData);
        };
        fetchBird();
      }, [birdId]);
      
      console.log('bird state:', bird);

      if (!bird) return <main>Loading...</main>;

      return (
        <main>
          <header>
            <p>
              <h1>{bird.name}</h1>
              {bird.author.username} posted on
              {new Date(bird.createdAt).toLocaleDateString()}
            </p>
          </header>
          <p>
            Spotted this bird at {bird.location} on {bird.date}
          </p>
          <p>
            Notes: {bird.notes}
          </p>
          <section>
            <h2>Comments</h2>

            {!bird.comments.length && <p>There are no comments.</p>}

            {bird.comments.map((comment) => (
                <article key={comment._id}>
                 <header>
                   <p>
                    {comment.author.username} posted on
                    {new Date(comment.createdAt).toLocaleDateString()}
                  </p>
                 </header>
                   <p>{comment.text}</p>
               </article>
            ))}
          </section>
        </main>
      );
  };
  
  export default BirdDetails;