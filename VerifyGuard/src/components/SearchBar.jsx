import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SearchBar = () => {
  const [url, setUrl] = useState('');
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (!url) {
      alert('Please enter a URL.');
      return;
    }

    try {
      // Encode the URL for VirusTotal
      const encodedURL = encodeURIComponent(url);

      const apiKey=process.env.REACT_APP_API_KEY;
      
      // Step 1: Submit the URL for scanning
      const submissionResponse = await axios.post(
        'https://www.virustotal.com/api/v3/urls',
        { url: encodedURL },
        {
          headers: {
            'x-apikey': apiKey, 
            'Content-Type': 'application/json',
          },
        }
      );

      const analysisUrl = submissionResponse.data.data.id;

      // Step 2: Retrieve the scan results
      const analysisResponse = await axios.get(
        `https://www.virustotal.com/api/v3/analyses/${analysisUrl}`,
        {
          headers: {
            'x-apikey': apiKey, 
          },
        }
      );

      const isMalicious = analysisResponse.data.data.attributes.stats.malicious > 0;

      // Navigate to the Report page with the scan result
      navigate('/report', { state: { url, result: { isMalicious } } });
      
      // Optionally, record the URL on your server here using another API call
    } catch (error) {
      console.error('Error scanning URL:', error);
      alert('Failed to scan the URL. Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex w-full max-w-md">
        <input
          type="text"
          placeholder="Enter Website URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="flex-grow px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Scan
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
