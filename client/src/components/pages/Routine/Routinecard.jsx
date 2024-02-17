import React, { useState } from 'react';

import { DownloadOutlined } from '@ant-design/icons';
import { Button, Divider, Flex, Radio } from 'antd';
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
          <tr style={{ backgroundColor: '#27aa80', border: '1px solid black' }}>
            <th  className='text-white' style={{ border: '1px solid black' }}>Date</th>
            <th  className='text-white' style={{ border: '1px solid black' }}>Time</th>
            <th  className='text-white' style={{ border: '1px solid black' }}>Duration</th>
            <th  className='text-white' style={{ border: '1px solid black' }}>Subject</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index} style={{ backgroundColor: '#a8ff3e', border: '1px solid black' }}>
              <td style={{ border: '1px solid black' }}>{entry.Date}</td>
              <td style={{ border: '1px solid black' }}>{entry.Time}</td>
              <td style={{ border: '1px solid black' }}>{entry.Duration}</td>
              <td style={{ border: '1px solid black' }}>{entry.Subject}</td>
            </tr>
          ))}
          <tr style={{ backgroundColor: '#32ff6a' }}>
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
      <Button className='m-2 ' onClick={handleAddEntry} type="primary" shape="circle" style={{ backgroundColor: 'green' }}> + </Button>
      <Button className='m-2 '  type="primary" shape="round" style={{ backgroundColor: 'green' }}>Submit</Button>
      <table style={{ borderRadius: '10px', border: '1px solid black' }}>
          <tr style={{ backgroundColor: '#27aa80', border: '1px solid black' }}>
            <th className='text-white' style={{ border: '1px solid black', padding: '2px', margin:'2px' }}>Gpts Msg Here</th>
          </tr>
      </table>
    </div>
  );
};

export default Routinecard;
