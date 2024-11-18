import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ReportPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { url, result } = location.state || {};

  if (!url || !result) {
    return <div className="p-4">No data available.</div>;
  }

  return (
    <div className="report-page p-4">
      <h2 className="text-2xl font-semibold mb-4">Malware Check Report</h2>
      <p><strong>URL:</strong> {url}</p>
      <p><strong>Status:</strong> {result.isMalicious ? 'Malicious' : 'Clean'}</p>
      <button
        onClick={() => navigate('/detailed-analysis', { state: { result } })}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        View Detailed Analysis
      </button>
    </div>
  );
};

export default ReportPage;
