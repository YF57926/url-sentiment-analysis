import React from 'react';
import { ChevronDown, Calendar, Filter, HelpCircle } from 'lucide-react';

const RankingTable = () => {
  const brands = [
    {
      rank: 1,
      name: 'Limitless',
      icon: '/lovable-uploads/05273478-3251-4899-b2b9-93face0eca8e.png',
      iconType: 'image',
      position: 1.4,
      sentiment: 48,
      sentimentColor: 'text-gray-600',
      visibility: '44%'
    },
    {
      rank: 2,
      name: 'PLAUD',
      icon: '/lovable-uploads/acc9b877-a07c-4f23-8923-ae1b194104a3.png',
      iconType: 'image',
      position: 2.3,
      sentiment: 58,
      sentimentColor: 'text-gray-600',
      visibility: '17%'
    },
    {
      rank: 3,
      name: 'Omi AI',
      icon: '/lovable-uploads/cd6a9f84-16c7-4462-ae36-9424c74bc1a8.png',
      iconType: 'image',
      position: 1.0,
      sentiment: 52,
      sentimentColor: 'text-gray-600',
      visibility: '6%'
    },
    {
      rank: 4,
      name: 'Bee',
      icon: '/lovable-uploads/a4c5a9df-1f55-422a-b447-7484274560ca.png',
      iconType: 'image',
      position: 6.0,
      sentiment: 87,
      sentimentColor: 'text-green-600',
      visibility: '6%'
    },
    {
      rank: 5,
      name: 'Pickle',
      icon: '/lovable-uploads/534b4c0e-6114-4524-b818-4d8687939fcf.png',
      iconType: 'image',
      position: '—',
      sentiment: '—',
      sentimentColor: 'text-gray-400',
      visibility: '0%'
    }
  ];

  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-white border border-gray-200 rounded-lg px-3 py-2">
            <Calendar className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-700">Last 7 days</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>
          <div className="flex items-center space-x-2 bg-white border border-gray-200 rounded-lg px-3 py-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-700">All Models</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>
        </div>
        <div className="flex items-center space-x-2 text-gray-500">
          <span className="text-sm">8:41:11</span>
          <span className="text-sm">Docs</span>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                #
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Brand
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center space-x-1">
                  <span>Position</span>
                  <HelpCircle className="w-3 h-3" />
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center space-x-1">
                  <span>Sentiment</span>
                  <HelpCircle className="w-3 h-3" />
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center space-x-1">
                  <span>Visibility</span>
                  <HelpCircle className="w-3 h-3" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {brands.map((brand) => (
              <tr key={brand.rank} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {brand.rank}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-3">
                    {brand.iconType === 'image' ? (
                      <img src={brand.icon} alt={brand.name} className="w-5 h-5" />
                    ) : (
                      <span className="text-lg">{brand.icon}</span>
                    )}
                    <span className="text-sm font-medium text-gray-900">{brand.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {brand.position}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${brand.sentiment === '—' ? 'bg-gray-300' : brand.sentimentColor === 'text-green-600' ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                    <span className={`text-sm ${brand.sentimentColor}`}>
                      {brand.sentiment}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {brand.visibility}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RankingTable;
