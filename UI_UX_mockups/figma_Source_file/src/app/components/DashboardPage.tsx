import { useState } from 'react';
import { BookOpen, Clock, TrendingUp, Award, Bell, Search, User, LogOut, Settings, Calendar, MessageSquare, BarChart3, Plus, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function DashboardPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('Dashboard');

  // Navigation tabs
  const navTabs = ['Dashboard', 'Courses', 'Calendar', 'Grades', 'Messages', 'Analytics'];

  // Stats data
  const stats = [
    { label: 'Total Courses', value: '5', icon: '📚', color: '#2563EB' },
    { label: 'In Progress', value: '3', icon: '⏳', color: '#F59E0B' },
    { label: 'Completed', value: '12', icon: '✅', color: '#10B981' },
    { label: 'Current GPA', value: '3.8', icon: '📊', color: '#8B5CF6' },
  ];

  // Upcoming assignments
  const assignments = [
    {
      id: 1,
      title: 'Assignment 1 - CS101',
      dueDate: 'Due: Tomorrow 11:59 PM',
      status: 'Not Started',
      statusColor: '#DC2626',
      icon: '📝',
    },
    {
      id: 2,
      title: 'Quiz 2 - MATH201',
      dueDate: 'Due: Friday 5:00 PM',
      status: 'In Progress',
      statusColor: '#F59E0B',
      icon: '🧪',
    },
  ];

  // Recent activity
  const activities = [
    {
      id: 1,
      title: 'Graded: Assignment 3 - CS201',
      subtitle: 'Score: 95/100',
      subtitleColor: '#10B981',
      icon: '🎯',
    },
    {
      id: 2,
      title: 'New discussion: Ethics in Technology',
      subtitle: 'PHIL101 - 2 hours ago',
      subtitleColor: '#64748B',
      icon: '💬',
    },
  ];

  // Courses
  const courses = [
    {
      id: 1,
      code: 'CS',
      title: 'CS101',
      description: 'Intro to Programming',
      progress: 75,
      bgColor: '#DBEAFE',
      textColor: '#1D4ED8',
    },
    {
      id: 2,
      code: 'WD',
      title: 'WEB201',
      description: 'Web Development',
      progress: 60,
      bgColor: '#E0E7FF',
      textColor: '#4C1D95',
    },
    {
      id: 3,
      code: 'DS',
      title: 'CS202',
      description: 'Data Structures',
      progress: 45,
      bgColor: '#D1FAE5',
      textColor: '#065F46',
    },
    {
      id: 4,
      code: 'DB',
      title: 'DB301',
      description: 'Database Systems',
      progress: 90,
      bgColor: '#FEE2E2',
      textColor: '#991B1B',
    },
  ];

  return (
    <div 
      className="min-h-screen bg-[#F8FAFC]"
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
          <div className="text-2xl font-bold text-[#2563EB]">MoodlePro</div>
          
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

      {/* Main Navigation */}
      <nav className="h-16 bg-white border-b border-[#E2E8F0]">
        <div className="h-full max-w-[1440px] mx-auto px-20 flex items-center gap-8">
          {navTabs.map((tab) => (
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
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2563EB]"></div>
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-[1440px] mx-auto px-20 py-10">
        {/* Welcome Section */}
        <div
          className="relative h-[120px] rounded-xl overflow-hidden mb-10"
          style={{
            background: 'linear-gradient(90deg, #2563EB 0%, #1D4ED8 100%)',
          }}
        >
          <div className="absolute inset-0 flex items-center justify-between px-10">
            <div>
              <h1 className="text-[28px] font-bold text-white mb-2">
                Welcome back, John!
              </h1>
              <p className="text-base text-[#DBEAFE] mb-4">
                5 courses in progress • 3 pending assignments
              </p>
            </div>
            <button className="h-10 px-6 bg-white text-[#2563EB] text-sm font-semibold rounded-lg hover:bg-[#F8FAFC] transition-colors">
              View Progress Report
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-5 mb-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="h-[120px] bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.03)] p-6"
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-sm text-[#64748B] mb-1">{stat.label}</div>
              <div
                className="text-[32px] font-bold"
                style={{ color: stat.color }}
              >
                {stat.value}
              </div>
            </div>
          ))}
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-2 gap-5 mb-10">
          {/* Upcoming Deadlines */}
          <div className="bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.03)] p-10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-[#1E293B]">Upcoming Deadlines</h2>
              <button className="text-sm text-[#2563EB] font-semibold hover:text-[#1d4ed8]">
                View All
              </button>
            </div>

            <div className="space-y-3">
              {assignments.map((assignment) => (
                <div
                  key={assignment.id}
                  className="h-20 bg-[#F8FAFC] rounded-lg px-5 flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-2xl">{assignment.icon}</div>
                    <div>
                      <div className="text-sm font-semibold text-[#1E293B]">
                        {assignment.title}
                      </div>
                      <div
                        className="text-sm mt-1"
                        style={{ color: assignment.statusColor }}
                      >
                        {assignment.dueDate}
                      </div>
                    </div>
                  </div>
                  <div
                    className="text-sm font-medium"
                    style={{ color: assignment.statusColor }}
                  >
                    {assignment.status}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.03)] p-10">
            <h2 className="text-xl font-bold text-[#1E293B] mb-6">Recent Activity</h2>

            <div className="space-y-3">
              {activities.map((activity) => (
                <div
                  key={activity.id}
                  className="h-20 bg-[#F8FAFC] rounded-lg px-5 flex items-center"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-2xl">{activity.icon}</div>
                    <div>
                      <div className="text-sm font-semibold text-[#1E293B]">
                        {activity.title}
                      </div>
                      <div
                        className="text-sm mt-1"
                        style={{ color: activity.subtitleColor }}
                      >
                        {activity.subtitle}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Course Cards Section */}
        <div>
          <h2 className="text-2xl font-bold text-[#1E293B] mb-6">My Courses</h2>
          
          <div className="grid grid-cols-4 gap-5">
            {courses.map((course) => (
              <div
                key={course.id}
                onClick={() => navigate('/courses')}
                className="h-60 bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.03)] p-6 flex flex-col cursor-pointer hover:shadow-lg transition-shadow"
              >
                <div
                  className="w-16 h-16 rounded-lg flex items-center justify-center text-2xl font-bold mb-5"
                  style={{
                    backgroundColor: course.bgColor,
                    color: course.textColor,
                  }}
                >
                  {course.code}
                </div>

                <div className="text-base font-bold text-[#1E293B] mb-1">
                  {course.title}
                </div>
                <div className="text-sm text-[#64748B] mb-6">
                  {course.description}
                </div>

                <div className="mt-auto">
                  {/* Progress Bar */}
                  <div className="w-full h-2 bg-[#E2E8F0] rounded-full overflow-hidden mb-2">
                    <div
                      className="h-full bg-[#2563EB] rounded-full transition-all"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-[#64748B] mb-4">
                    {course.progress}% complete
                  </div>

                  <button className="w-full h-8 bg-[#2563EB] text-white text-sm font-semibold rounded-lg hover:bg-[#1d4ed8] transition-colors">
                    Continue
                  </button>
                </div>
              </div>
            ))}

            {/* Add New Course Card */}
            <div className="h-60 bg-[#F8FAFC] border-2 border-dashed border-[#CBD5E1] rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-[#2563EB] hover:bg-white transition-colors">
              <div className="w-12 h-12 flex items-center justify-center text-4xl text-[#64748B] mb-3">
                +
              </div>
              <div className="text-sm font-medium text-[#64748B]">
                Add New Course
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}