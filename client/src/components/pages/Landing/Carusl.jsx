
import { Carousel } from 'flowbite-react';

export default function Carusl() {
  return (
    <div className="h-96">
      <Carousel slide={false}>
        <img src="https://www.myhealthathand.com/wp-content/uploads/2017/09/school.jpg" className="w-full h-full object-cover" />
        <img src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="..." />        
        <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover" />
      </Carousel>
    </div>
  );
}
