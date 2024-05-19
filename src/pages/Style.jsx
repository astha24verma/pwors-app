import React, { useState } from 'react';
import axios from 'axios';

const Style = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [outputImages, setOutputImages] = useState([]);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      const response = await axios.post('http://localhost:5000/process_image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setOutputImages(response.data.output_links);
    } catch (error) {
      console.error('Error processing image:', error);
    }
  };

  return (
    <div className='mt-5'>
      <h3 className="text-2xl font-semibold text-gray-800 mt-7">Upload Image</h3>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        {previewUrl && (
          <div className="mt-4">
            <h4 className="text-lg font-semibold text-gray-800">Selected Image</h4>
            <img src={previewUrl} alt="Selected" style={{ maxHeight: '300px', maxWidth: '300px' }} />
          </div>
        )}
        <button type="submit" className="mt-4">Recommend</button>
      </form>

      {outputImages.length > 0 && (
        <div>
          <h2>Output Images</h2>
          {outputImages.map((link, index) => (
            <img key={index} src={link} alt={`Output ${index + 1}`} style={{ maxHeight: '300px', maxWidth: '300px' }} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Style;
