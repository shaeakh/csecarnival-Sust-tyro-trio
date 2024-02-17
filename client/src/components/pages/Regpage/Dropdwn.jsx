import { Dropdown, DropdownItem } from 'flowbite-react';

export default function Dropdwn() {
  return (
    <div >        
    <Dropdown className='mt-2' label="Class" dismissOnClick={false} style={{backgroundColor:'#5850ec'}} >        
        <DropdownItem>Class 1</DropdownItem>
        <DropdownItem>Class 2</DropdownItem>
        <DropdownItem>Class 3</DropdownItem>
        <DropdownItem>Class 4</DropdownItem>
        <DropdownItem>Class 5</DropdownItem>
        <DropdownItem>Class 6</DropdownItem>
        <DropdownItem>Class 7</DropdownItem>
        <DropdownItem>Class 8</DropdownItem>
        <DropdownItem>Class 9-10</DropdownItem>
        
        <DropdownItem>Class 11-12</DropdownItem>               
      </Dropdown>
    </div>
  );
}
