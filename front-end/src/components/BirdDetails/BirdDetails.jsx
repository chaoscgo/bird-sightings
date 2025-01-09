import { AuthedUserContext } from '../../App';
import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import * as birdService from '../../services/birdService';
import CommentForm from '../CommentForm/CommentForm';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';
import styles from './BirdDetails.module.css';

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
          <header className={styles.header}>
            <br></br>
            <br></br>
            <br></br>
          <h1><u>{bird.name}</u></h1>
              <div>
                <p className={styles.post}>
                    User named {bird.author.username} posted on&nbsp;
                    {new Date(bird.createdAt).toLocaleDateString()}:
                    <br></br>
                    <br></br>
                    <strong>I spotted this bird in {bird.location} on {new Date(bird.date).toLocaleDateString()}.</strong>
                    <br></br>
                    <br></br>
                    <strong>Notes: <i>{bird.notes}</i></strong>
                </p>

               {bird.author._id === user._id && (
                <>
               <Link to={`/birds/${birdId}/edit`}>
                   Edit Bird
                </Link>
               <button onClick={() => props.handleDeleteBird(birdId)}>
                  Delete Bird
                </button>
                </>
                )}
              </div>

          </header>

          <section className={styles.comsec}>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h2>Comments</h2>
            <CommentForm handleAddComment={handleAddComment} />

            {!bird.comments.length && <p>There are no comments.</p>}

            {bird.comments.map((comment) => (
                <article key={comment._id} className={styles.artsec}>
                 <header className={styles.header2}>
                    <div className={styles.divcom}>
                        <p className={styles.comment}>
                            {comment.author.username} posted on
                            {new Date(comment.createdAt).toLocaleDateString()}
                            <p>{comment.text}</p>
                        </p>
                    </div>
                 </header>
               </article>
            ))}
          </section>
        </main>
      );
  };
  
  export default BirdDetails;