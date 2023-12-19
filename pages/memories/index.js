import Card from '../../memorial/Comments/Card'
import Navbar from '../../memorial/MemorialNavbar';

const memories = [
    {
     name: 'john',
     date: '2 hours',
     comment: 'test'
    },
    {
        name: 'john',
        date: '2 hours',
        comment: 'test'
       },
       {
        name: 'john',
        date: '3 hours',
        comment: 'test'
       },
]

const Memories = () => {
    return (
        <div className='bg-indigo-300 pb-16 h-screen'>
            <Navbar/>
        
        {memories.map(memory => (
            <Card memory={memory}/>
        ))}
       
               </div>
     
    )
}

export default Memories;