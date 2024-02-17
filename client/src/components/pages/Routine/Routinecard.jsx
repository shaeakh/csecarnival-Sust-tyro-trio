import React, { useState } from 'react';
import ResizableBox from './ResizableBox.jsx';
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Navbar } from 'flowbite-react';
const Routinecard = () => {
  const [entries, setEntries] = useState([]);
  const [formData, setFormData] = useState({});
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddEntry = () => {
    if (
      formData.Date &&
      formData.Time &&
      formData.Duration &&
      formData.Subject
    ) {
      setEntries([...entries, formData]);
      setFormData({});
      setError('');
    } else {
      setError('Please fill in all fields');
    }
  };

  return (
    <div>
      <table style={{ borderRadius: '10px', border: '1px solid black' }}>
        <thead>
          <tr style={{ backgroundColor: 'indigo', border: '1px solid black' }}>
            <th  className='text-white' style={{ border: '1px solid black' }}>Date</th>
            <th  className='text-white' style={{ border: '1px solid black' }}>Time</th>
            <th  className='text-white' style={{ border: '1px solid black' }}>Duration</th>
            <th  className='text-white' style={{ border: '1px solid black' }}>Subject</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index} style={{ backgroundColor: '#665aa6', border: '1px solid black' }}>
              <td className='text-white' style={{ border: '1px solid black' }}>{entry.Date}</td>
              <td className='text-white' style={{ border: '1px solid black' }}>{entry.Time}</td>
              <td className='text-white' style={{ border: '1px solid black' }}>{entry.Duration}</td>
              <td className='text-white' style={{ border: '1px solid black' }}>{entry.Subject}</td>
            </tr>
          ))}
          <tr style={{ backgroundColor: '#ffffff' }}>
          <td style={{ border: '1px solid black' }}>
              <input
                type="text"
                name="Date"
                value={formData.Date || ''}
                onChange={handleInputChange}
                style={{ background: 'transparent', border: 'none' }}
              />
            </td>
            <td style={{ border: '1px solid black' }}>
              <input
                type="text"
                name="Time"
                value={formData.Time || ''}
                onChange={handleInputChange}
                style={{ background: 'transparent', border: 'none' }}
              />
            </td>
            <td style={{ border: '1px solid black' }}>
              <input
                type="text"
                name="Duration"
                value={formData.Duration || ''}
                onChange={handleInputChange}
                style={{ background: 'transparent', border: 'none' }}
              />
            </td>
            <td style={{ border: '1px solid black' }}>
              <input
                type="text"
                name="Subject"
                value={formData.Subject || ''}
                onChange={handleInputChange}
                style={{ background: 'transparent', border: 'none' }}
              />
            </td>
          </tr>
        </tbody>
      </table>
      {error && <p>{error}</p>}      
      {/* <Button className='m-2 ' onClick={handleAddEntry} type="primary" shape="circle" style={{ backgroundColor: 'indigo' }}> + </Button>
      <Button className='m-2 '  type="primary" shape="round" style={{ backgroundColor: 'indigo' }}>Submit</Button> */}
      <div style={{ display: 'flex', gap: '2px' }}>
        <Button className='m-2' onClick={handleAddEntry} type="primary" shape="circle" style={{ backgroundColor: 'indigo' }}> + </Button>
        <Button className='m-2' type="primary" shape="round" style={{ backgroundColor: 'indigo' }}>Submit</Button>
      </div>
      <div className='flex justify-center'>
        <table  style={{ backgroundColor: '#171133'}}>
          <th className='text-white' style={{ padding: '10px' }}>
            GPT's Code here 
          </th>
      </table>
      </div>
    </div>
  );
};

export default Routinecard;
