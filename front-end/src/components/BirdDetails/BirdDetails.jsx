import { AuthedUserContext } from '../../App';
import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import * as birdService from '../../services/birdService';
import CommentForm from '../CommentForm/CommentForm';
import { Link } from 'react-router-dom';
import styles from './BirdDetails.module.css';
import Loading from '../Loading/Loading';
import Icon from '../Icon/Icon';

const BirdDetails = (props) => {

    const [bird, setBird] = useState(null);
    const user = useContext(AuthedUserContext);
    const { birdId } = useParams();

    useEffect(() => {
        const fetchBird = async () => {
          const birdData = await birdService.show(birdId);
          setBird(birdData);
        };
        fetchBird();
      }, [birdId]);

      const handleAddComment = async (commentFormData) => {
        const newComment = await birdService.createComment(birdId, commentFormData);
        setBird({ ...bird, comments: [...bird.comments, newComment] });
      };

      if (!bird) return <Loading />;

      return (
        <main className={styles.container}>
          <header>

              <h1>{bird.name}</h1>

              <div>
                <p>
                    {bird.author.username} posted on &nbsp;
                    {new Date(bird.createdAt).toLocaleDateString()}

                    Spotted this bird at {bird.location} on  {bird.date}

                    Notes: {bird.notes}
                </p>

               {bird.author._id === user._id && (
                <>
               <Link to={`/birds/${birdId}/edit`}>
                 <Icon category="Edit" />
                   Edit Bird
                </Link>
               <button onClick={() => props.handleDeleteBird(birdId)}>
                  <Icon category="Trash" />
                  Delete Bird
                </button>
                </>
                )}
              </div>

          </header>

          <section>
            <h2>Comments</h2>
            <CommentForm handleAddComment={handleAddComment} />

            {!bird.comments.length && <p>There are no comments.</p>}

            {bird.comments.map((comment) => (
                <article key={comment._id}>
                 <header>
                    <div>
                        <p>
                            {comment.author.username} posted on
                            {new Date(comment.createdAt).toLocaleDateString()}
                        </p>
                    </div>
                 </header>
                   <p>{comment.text}</p>
               </article>
            ))}
          </section>
        </main>
      );
  };
  
  export default BirdDetails;