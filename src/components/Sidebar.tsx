
import React from 'react';
import { BarChart3, Home, Trophy, FileText, Database, Users, Tag, User, Building, CreditCard, Settings } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: Home, label: 'Dashboard', section: 'General' },
    { icon: Trophy, label: 'Ranking', section: 'General', active: true },
    { icon: FileText, label: 'Prompts', section: null },
    { icon: Database, label: 'Sources', section: null },
    { icon: Users, label: 'Competitors', section: 'Preferences', count: 2 },
    { icon: Tag, label: 'Tags', section: 'Preferences' },
    { icon: User, label: 'People', section: 'Settings' },
    { icon: Building, label: 'Workspace', section: 'Settings' },
    { icon: Building, label: 'Company', section: 'Settings' },
    { icon: CreditCard, label: 'Billing', section: 'Settings' },
  ];

  const sections = ['General', 'Preferences', 'Settings'];

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <img src="/lovable-uploads/40c66020-53bd-41e0-8b63-ae426996ee88.png" alt="Omi AI" className="w-6 h-6" />
          <span className="font-semibold text-gray-900">Omi AI</span>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto py-4">
        {sections.map((section) => (
          <div key={section} className="mb-6">
            <div className="px-4 mb-2">
              <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                {section}
              </h3>
            </div>
            {menuItems
              .filter(item => item.section === section)
              .map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className={`mx-2 px-3 py-2 rounded-lg flex items-center justify-between cursor-pointer transition-colors ${
                      item.active 
                        ? 'bg-gray-100 text-gray-900' 
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{item.label}</span>
                    </div>
                    {item.count && (
                      <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
                        {item.count}
                      </span>
                    )}
                  </div>
                );
              })}
          </div>
        ))}
        
        {/* Items without sections */}
        <div className="mx-2">
          {menuItems
            .filter(item => !item.section)
            .map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="px-3 py-2 rounded-lg flex items-center space-x-3 cursor-pointer transition-colors text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              );
            })}
        </div>
      </div>
      
      <div className="p-4 border-t border-gray-200">
        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-sm font-medium text-gray-900 mb-1">You're on trial</p>
          <p className="text-xs text-gray-600 mb-3">7 days remaining</p>
          <button className="w-full bg-gray-900 text-white text-sm font-medium py-2 px-3 rounded-md hover:bg-gray-800 transition-colors">
            Unlock full access
          </button>
          <button className="w-full text-gray-600 text-sm font-medium py-2 px-3 hover:text-gray-900 transition-colors">
            Manage your plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
