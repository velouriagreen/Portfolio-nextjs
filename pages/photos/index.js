import Photos from '../../memorial/Photos';
import Navbar from '../../memorial/MemorialNavbar';
import MemorialFooter from '../../memorial/MemorialFooter/Footer';

const PhotosPage = () => {
  return (
    <div className='bg-slate-100'>
      <Navbar/>
      <Photos /> 
      <MemorialFooter />
    </div>
     
  );
}

export default PhotosPage;