import React from 'react';
import { useLocation } from 'react-router-dom';

const DetailedAnalysis = () => {
  const location = useLocation();
  const { result } = location.state || {};

  if (!result) {
    return <div className="p-4">No detailed data available.</div>;
  }

  return (
    <div className="detailed-analysis p-4">
      <h3 className="text-xl font-semibold mb-4">Detailed Analysis</h3>

      <section className="mb-6">
        <h4 className="font-medium">Basic Details</h4>
        <p><strong>Registrar:</strong> {result.registrar || 'NA'}</p>
        <p><strong>Registered on:</strong> {result.registrationDate || 'NA'}</p>
        <p><strong>Expires on:</strong> {result.expiryDate || 'NA'}</p>
      </section>

      <section className="mb-6">
        <h4 className="font-medium">Checks</h4>
        <p><strong>Malware:</strong> {result.malwareStatus || 'NA'}</p>
        <p><strong>Spam:</strong> {result.spamStatus || 'NA'}</p>
      </section>

      <section>
        <h4 className="font-medium">Contact: Email</h4>
        <p><strong>Administrative:</strong> info@trustchecksecurity.com</p>
        <p><strong>Support:</strong> support@trustchecksecurity.com</p>
        <p><strong>Chief:</strong> chief@trustchecksecurity.com</p>
        <p><strong>Domain Registrar:</strong> registrar@trustchecksecurity.com</p>
      </section>
    </div>
  );
};

export default DetailedAnalysis;
