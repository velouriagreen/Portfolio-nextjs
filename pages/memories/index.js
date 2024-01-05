import Card from '../../memorial/Comments/Card'
import Navbar from '../../memorial/MemorialNavbar';
import styles from './memories.module.css';
import { memories } from './memoriesData';

const Memories = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.heroDiv}></div>
      <section className={styles.commentsSection}>

        {memories.map(memory => (
          <Card memory={memory} />
        ))}
      </section>
    </div>
  )
}

export default Memories;