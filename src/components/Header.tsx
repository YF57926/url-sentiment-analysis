
import React from 'react';
import { ChevronRight } from 'lucide-react';

const Header = () => {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center space-x-2 text-sm text-gray-600">
        <span className="hover:text-gray-900 cursor-pointer">Dashboard</span>
        <ChevronRight className="w-4 h-4" />
        <span className="text-gray-900 font-medium">Ranking</span>
      </div>
    </div>
  );
};

export default Header;
