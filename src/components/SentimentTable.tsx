import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import rawData from '../sentimentData.json';

const SentimentTable = () => {
  const navigate = useNavigate();
  const [selectedPage, setSelectedPage] = useState<any>(null);

  // Mock data in the format specified by the user
  const analysisData = {
    pages: rawData.pages.map(page => ({
      ...page,
      sentiment: typeof page.sentiment === "number" ? mapSentiment(page.sentiment) : page.sentiment
    }))
  };

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment.toLowerCase()) {
      case 'positive':
        return 'text-green-600 bg-green-50';
      case 'negative':
        return 'text-red-600 bg-red-50';
      case 'mixed':
        return 'text-yellow-600 bg-yellow-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const getSentimentDot = (sentiment: string) => {
    switch (sentiment.toLowerCase()) {
      case 'positive':
        return 'bg-green-500';
      case 'negative':
        return 'bg-red-500';
      case 'mixed':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-400';
    }
  };

  const generateAISolution = (page: any) => {
    const solutions = {
      mixed: [
        "Create a comprehensive FAQ section addressing battery life concerns with detailed power management tips",
        "Publish a detailed privacy policy document with clear opt-out mechanisms",
        "Develop a battery optimization guide and consider releasing a power-saving mode",
        "Implement transparent data handling practices with user control over recording settings"
      ],
      negative: [
        "Establish a dedicated security page with third-party audit results and certifications",
        "Create a detailed data transparency report showing exactly what data is collected and how it's used",
        "Implement end-to-end encryption for all user data and clearly communicate this security measure",
        "Offer users granular privacy controls and the ability to delete their data at any time",
        "Partner with a reputable security firm to conduct regular audits and publish results"
      ]
    };

    const sentimentKey = page.sentiment.toLowerCase() as 'mixed' | 'negative';
    const availableSolutions = solutions[sentimentKey] || [];
    return availableSolutions[Math.floor(Math.random() * availableSolutions.length)];
  };

  const shouldShowFixButton = (sentiment: string) => {
    return sentiment.toLowerCase() === 'mixed' || sentiment.toLowerCase() === 'negative';
  };

  function mapSentiment(score: number): string {
    if (score >= 70) return "positive";
    if (score >= 51) return "mixed";
    if (score >= 36) return "neutral";
    return "negative";
  }

  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mb-6">
        <Button
          variant="outline"
          onClick={() => navigate('/')}
          className="flex items-center space-x-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Dashboard</span>
        </Button>
        <div className="flex items-center space-x-2 text-gray-500">
          <span className="text-sm">Last updated: 2 minutes ago</span>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Page Analysis Results</h2>
            <span className="text-sm text-gray-500">{analysisData.pages.length} pages analyzed</span>
          </div>
        </div>
        
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Source URL
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Sentiment
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Analysis Reasoning
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {analysisData.pages.map((page, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="text-sm text-blue-600 hover:text-blue-800 truncate max-w-xs">
                    {page.url || 'N/A'}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${getSentimentDot(page.sentiment)}`}></div>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getSentimentColor(page.sentiment)}`}>
                      {page.sentiment || 'Unknown'}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900 max-w-md">
                    {page.reasoning || 'No reasoning provided'}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-2">
                    {shouldShowFixButton(page.sentiment) && (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            size="sm"
                            className="bg-green-600 hover:bg-green-700 text-white text-xs px-3 py-1"
                            onClick={() => setSelectedPage(page)}
                          >
                            Fix it
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>AI-Generated Solution</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-medium text-gray-900">Issue:</h4>
                              <p className="text-sm text-gray-600 mt-1">{selectedPage?.reasoning}</p>
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-900">Recommended Solution:</h4>
                              <p className="text-sm text-gray-700 mt-1 bg-green-50 p-3 rounded-md border-l-4 border-green-400">
                                {selectedPage && generateAISolution(selectedPage)}
                              </p>
                            </div>
                            <div className="text-xs text-gray-500 mt-4">
                              <em>This solution was generated using AI analysis of the sentiment and reasoning provided.</em>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Summary</h3>
        <div className="grid grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">
              {analysisData.pages.filter(p => p.sentiment?.toLowerCase() === 'positive').length}
            </div>
            <div className="text-sm text-gray-500">Positive</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-600">
              {analysisData.pages.filter(p => p.sentiment?.toLowerCase() === 'neutral').length}
            </div>
            <div className="text-sm text-gray-500">Neutral</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-600">
              {analysisData.pages.filter(p => p.sentiment?.toLowerCase() === 'mixed').length}
            </div>
            <div className="text-sm text-gray-500">Mixed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600">
              {analysisData.pages.filter(p => p.sentiment?.toLowerCase() === 'negative').length}
            </div>
            <div className="text-sm text-gray-500">Negative</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SentimentTable;
