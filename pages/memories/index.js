import Card from '../../memorial/Comments/Card'
import Navbar from '../../memorial/MemorialNavbar';
import styles from './memories.module.css';
import { memories } from '../../memorial/Data/memoriesData';
import MemorialFooter from '../../memorial/MemorialFooter';

const Memories = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.heroDiv}></div>
      <section className={styles.commentsSection}>

        {memories.map(memory => (
          <Card memory={memory} key={memory.name} />
        ))}
      </section>
      <MemorialFooter />
    </div>
  )
}

export default Memories;