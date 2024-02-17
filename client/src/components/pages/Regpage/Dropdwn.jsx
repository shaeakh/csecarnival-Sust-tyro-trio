    import { useState } from 'react';
    import { Dropdown, DropdownItem } from 'flowbite-react';

    export default function Dropdwn() {
        var cs;
        const [selectedClass, setSelectedClass] = useState('Class');

        const handleClassSelect = (classValue) => {
            setSelectedClass(classValue);
        };
        return (
            <div>
                <Dropdown className='mt-2' label={selectedClass} dismissOnClick={false} style={{backgroundColor:'#5850ec'}}>
                    <DropdownItem onClick={() => handleClassSelect('Class 1')}>Class 1</DropdownItem>
                    <DropdownItem onClick={() => handleClassSelect('Class 2')}>Class 2</DropdownItem>
                    <DropdownItem onClick={() => handleClassSelect('Class 3')}>Class 3</DropdownItem>
                    <DropdownItem onClick={() => handleClassSelect('Class 4')}>Class 4</DropdownItem>
                    <DropdownItem onClick={() => handleClassSelect('Class 5')}>Class 5</DropdownItem>
                    <DropdownItem onClick={() => handleClassSelect('Class 6')}>Class 6</DropdownItem>
                    <DropdownItem onClick={() => handleClassSelect('Class 7')}>Class 7</DropdownItem>
                    <DropdownItem onClick={() => handleClassSelect('Class 8')}>Class 8</DropdownItem>
                    <DropdownItem onClick={() => handleClassSelect('Class 9-10')}>Class 9-10</DropdownItem>
                    <DropdownItem onClick={() => handleClassSelect('Class 11-12')}>Class 11-12</DropdownItem>
                </Dropdown>

                
            </div>
        );
    }