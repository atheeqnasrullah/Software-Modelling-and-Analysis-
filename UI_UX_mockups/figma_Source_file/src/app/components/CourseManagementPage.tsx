import { useState } from 'react';
import { Search, Bell, Settings as SettingsIcon, Users, Edit, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CourseManagementPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('Overview');
  const [selectedModule, setSelectedModule] = useState(3);

  const tabs = ['Overview', 'Modules', 'Assignments', 'Grades', 'Discussions', 'Analytics', 'Resources'];

  const modules = [
    { id: 1, number: '1️⃣', title: 'Getting Started' },
    { id: 2, number: '2️⃣', title: 'Variables & Data Types' },
    { id: 3, number: '3️⃣', title: 'Control Structures' },
    { id: 4, number: '4️⃣', title: 'Functions & Methods' },
    { id: 5, number: '5️⃣', title: 'Data Structures' },
    { id: 6, number: '6️⃣', title: 'Object-Oriented Programming' },
  ];

  const learningObjectives = [
    'Understand if-else statements',
    'Implement switch cases',
    'Work with loops (for, while)',
    'Apply control flow in programs',
  ];

  const contentItems = [
    {
      id: 1,
      icon: '🎬',
      type: 'Video Lecture',
      title: 'If-Else Statements Explained',
      badge: '15 min',
    },
    {
      id: 2,
      icon: '📖',
      type: 'Reading Material',
      title: 'Control Flow Guide',
      badge: 'PDF • 8 pages',
    },
    {
      id: 3,
      icon: '✏️',
      type: 'Practice Exercise',
      title: 'Implement If-Else Logic',
      badge: 'Due: Oct 30',
    },
    {
      id: 4,
      icon: '🧪',
      type: 'Quiz',
      title: 'Control Structures Quiz',
      badge: '10 questions',
    },
  ];

  return (
    <div 
      className="min-h-screen bg-[#F8FAFC] relative"
      style={{
        backgroundImage: `linear-gradient(rgba(248, 250, 252, 0.95), rgba(248, 250, 252, 0.95)), url('https://images.unsplash.com/photo-1655964581196-14735105c38c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbGlicmFyeSUyMGJvb2tzJTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc3MDA2MzY0MHww&ixlib=rb-4.1.0&q=80&w=1080')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Top Navigation */}
      <header className="h-20 bg-white shadow-[0_1px_4px_rgba(0,0,0,0.04)] sticky top-0 z-50">
        <div className="h-full max-w-[1440px] mx-auto px-20 flex items-center justify-between">
          <button
            onClick={() => navigate('/dashboard')}
            className="text-2xl font-bold text-[#2563EB] hover:text-[#1d4ed8] transition-colors"
          >
            MoodlePro
          </button>
          
          {/* Search Bar */}
          <div className="flex-1 max-w-[400px] mx-8">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search courses, assignments..."
                className="w-full h-12 pl-4 pr-12 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg text-sm text-[#1E293B] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-[#64748B]" size={20} />
            </div>
          </div>

          {/* Header Actions */}
          <div className="flex items-center gap-4">
            <button className="relative w-12 h-12 flex items-center justify-center text-2xl hover:bg-[#F1F5F9] rounded-full transition-colors">
              🔔
              <span className="absolute top-2 right-2 w-5 h-5 bg-[#DC2626] rounded-full flex items-center justify-center text-[10px] text-white font-semibold">
                3
              </span>
            </button>
            <div className="w-12 h-12 bg-[#F1F5F9] rounded-full flex items-center justify-center text-sm font-semibold text-[#475569]">
              JD
            </div>
          </div>
        </div>
      </header>

      {/* Course Title Header */}
      <div
        className="h-[120px]"
        style={{
          background: 'linear-gradient(90deg, #1E293B 0%, #334155 100%)',
        }}
      >
        <div className="h-full max-w-[1440px] mx-auto px-20 flex items-center justify-between">
          <div>
            <h1 className="text-[32px] font-bold text-white mb-2">
              CS101: Introduction to Programming
            </h1>
            <p className="text-sm text-[#CBD5E1]">
              Instructor: Dr. Sarah Johnson • 45 Students • Spring 2024
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button className="h-10 px-6 bg-white/10 text-white text-sm font-semibold rounded-lg hover:bg-white/20 transition-colors flex items-center gap-2">
              <Users size={16} />
              Students (45)
            </button>
            <button className="h-10 px-6 bg-white/10 text-white text-sm font-semibold rounded-lg hover:bg-white/20 transition-colors flex items-center gap-2">
              <SettingsIcon size={16} />
              Settings
            </button>
          </div>
        </div>
      </div>

      {/* Course Tabs */}
      <nav className="h-16 bg-white border-b border-[#E2E8F0]">
        <div className="h-full max-w-[1440px] mx-auto px-20 flex items-center gap-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`h-16 px-4 text-sm font-semibold transition-colors relative ${
                activeTab === tab
                  ? 'text-[#2563EB]'
                  : 'text-[#64748B] hover:text-[#1E293B]'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#2563EB]"></div>
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-[1440px] mx-auto px-20 py-10">
        <div className="flex gap-8">
          {/* Left Column - Modules */}
          <div className="w-80 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.03)] p-5">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-bold text-[#1E293B]">Course Modules</h2>
                <button className="text-sm text-[#2563EB] font-semibold hover:text-[#1d4ed8]">
                  + Add Module
                </button>
              </div>

              <div className="space-y-3">
                {modules.map((module) => (
                  <button
                    key={module.id}
                    onClick={() => setSelectedModule(module.id)}
                    className={`w-full h-12 rounded-lg px-4 flex items-center gap-3 transition-all ${
                      selectedModule === module.id
                        ? 'bg-[#DBEAFE] border-2 border-[#2563EB] text-[#1E293B]'
                        : 'bg-[#F8FAFC] border-2 border-transparent text-[#475569] hover:bg-[#F1F5F9]'
                    }`}
                  >
                    <span className="text-xl">{module.number}</span>
                    <span className="text-sm font-medium">{module.title}</span>
                  </button>
                ))}
              </div>

              <button className="w-full mt-5 text-sm text-[#64748B] font-medium hover:text-[#1E293B]">
                Collapse All
              </button>
            </div>
          </div>

          {/* Right Column - Module Content */}
          <div className="flex-1">
            <div className="bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.03)] p-8">
              {/* Module Header */}
              <div className="bg-[#F1F5F9] rounded-lg p-6 mb-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-[#1E293B] mb-2">
                      Module 3: Control Structures
                    </h2>
                    <p className="text-sm text-[#64748B]">
                      Estimated: 2 weeks • 4 items
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button className="h-10 px-4 bg-white text-[#475569] text-sm font-semibold rounded-lg hover:bg-[#F8FAFC] transition-colors flex items-center gap-2">
                      <Edit size={14} />
                      Edit
                    </button>
                    <button className="h-10 px-4 bg-[#2563EB] text-white text-sm font-semibold rounded-lg hover:bg-[#1d4ed8] transition-colors">
                      Publish
                    </button>
                  </div>
                </div>
              </div>

              {/* Learning Objectives */}
              <div className="bg-[#F8FAFC] rounded-lg p-6 mb-6">
                <h3 className="text-base font-bold text-[#1E293B] mb-4">
                  Learning Objectives
                </h3>
                <div className="space-y-2">
                  {learningObjectives.map((objective, index) => (
                    <div key={index} className="flex items-start gap-2 text-sm text-[#475569]">
                      <span className="text-[#10B981] mt-0.5">✓</span>
                      <span>{objective}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Content Items */}
              <div>
                <h3 className="text-base font-bold text-[#1E293B] mb-4">
                  Content Items
                </h3>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  {contentItems.map((item) => (
                    <div
                      key={item.id}
                      className="h-[120px] bg-white border border-[#E2E8F0] rounded-lg p-5 hover:border-[#2563EB] hover:shadow-md transition-all cursor-pointer"
                    >
                      <div className="flex gap-4">
                        <div className="text-3xl">{item.icon}</div>
                        <div className="flex-1">
                          <div className="text-xs text-[#64748B] mb-1">
                            {item.type}
                          </div>
                          <div className="text-sm font-semibold text-[#1E293B] mb-3">
                            {item.title}
                          </div>
                          <div className="inline-flex items-center px-2 py-1 bg-[#F1F5F9] rounded text-xs text-[#64748B]">
                            {item.badge}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Add Content Button */}
                <button className="w-full h-16 bg-[#F8FAFC] border-2 border-dashed border-[#CBD5E1] rounded-lg flex items-center justify-center gap-2 text-[#64748B] font-medium hover:border-[#2563EB] hover:text-[#2563EB] transition-all">
                  <span className="text-2xl">+</span>
                  <span className="text-sm">Add Content Item</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
