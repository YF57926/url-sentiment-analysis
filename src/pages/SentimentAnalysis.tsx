
import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import SentimentTable from '../components/SentimentTable';

const SentimentAnalysis = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Sentiment Analysis - Omi AI</h1>
              <p className="text-gray-600 mt-2">Detailed sentiment analysis across different pages and sources</p>
            </div>
            <SentimentTable />
          </div>
        </main>
      </div>
    </div>
  );
};

export default SentimentAnalysis;
