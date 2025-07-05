
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import RankingTable from '../components/RankingTable';
import { Button } from '@/components/ui/button';
import { BarChart3 } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  const handleAnalyzeSentiment = () => {
    console.log('Analyzing sentiment...');
    navigate('/sentiment-analysis');
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <RankingTable />
            <div className="mt-6 flex justify-center">
              <Button 
                onClick={handleAnalyzeSentiment}
                className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 text-sm font-medium rounded-lg flex items-center space-x-2 transition-colors"
              >
                <BarChart3 className="w-4 h-4" />
                <span>Analyze Sentiment</span>
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
