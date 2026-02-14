import { useState } from 'react';
import { Eye, EyeOff, BookOpen, GraduationCap, Shield, Users, Mail, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('22ug2-0237@sitc.ac.lk');
  const [password, setPassword] = useState('password123');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic
    console.log('Login submitted', { email, password, rememberMe });
    // Navigate to dashboard
    navigate('/dashboard');
  };

  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 50%, #6366f1 100%)',
      }}
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        
        {/* Decorative Icons */}
        <div className="absolute top-32 right-32 text-white/10 text-6xl">🎓</div>
        <div className="absolute bottom-40 left-40 text-white/10 text-5xl">📚</div>
        <div className="absolute top-1/3 left-20 text-white/10 text-4xl">💡</div>
      </div>

      {/* Main Content */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12">
        {/* Header Logo and Badges */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <GraduationCap className="text-white" size={28} />
            </div>
            <h1 className="text-4xl font-bold text-white">
              MoodlePro <span className="text-3xl">✨</span>
            </h1>
          </div>

          {/* Badges */}
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Shield className="text-white" size={16} />
              <span className="text-sm text-white font-medium">Secure</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Users className="text-white" size={16} />
              <span className="text-sm text-white font-medium">2M+ Students</span>
            </div>
          </div>
        </div>

        {/* Login Card */}
        <div 
          className="w-full max-w-[420px] rounded-3xl p-8 backdrop-blur-xl"
          style={{
            background: 'rgba(255, 255, 255, 0.15)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          }}
        >
          {/* Book Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <BookOpen className="text-white" size={32} />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold text-white text-center mb-2">
            Welcome Back! 👋
          </h2>
          <p className="text-base text-white/80 text-center mb-8">
            Sign in to continue learning
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div>
              <label className="flex items-center gap-2 text-sm text-white mb-2 font-medium">
                <Mail size={16} />
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-12 px-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                placeholder="22ug2-0237@sitc.ac.lk"
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="flex items-center gap-2 text-sm text-white mb-2 font-medium">
                <Lock size={16} />
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-12 px-4 pr-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                  placeholder="••••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-white/30 bg-white/10 text-white focus:ring-white/50 cursor-pointer"
                />
                <label htmlFor="remember" className="ml-2 text-sm text-white cursor-pointer">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-white underline hover:text-white/80">
                Forgot password?
              </a>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full h-12 bg-white text-[#2563EB] text-base font-bold rounded-xl hover:bg-white/90 transition-colors flex items-center justify-center gap-2"
            >
              Sign In ✨
            </button>
          </form>

          {/* Sign Up Link */}
          <p className="text-center text-sm text-white mt-6">
            Don't have an account?{' '}
            <a href="#" className="font-semibold underline hover:text-white/80">
              Sign up free ✨
            </a>
          </p>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-transparent text-sm text-white/80">Or continue with</span>
            </div>
          </div>

          {/* Social Login Buttons */}
          <div className="grid grid-cols-3 gap-3">
            <button
              type="button"
              className="h-11 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-sm text-white font-medium hover:bg-white/20 transition-colors"
            >
              Google
            </button>
            <button
              type="button"
              className="h-11 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-sm text-white font-medium hover:bg-white/20 transition-colors"
            >
              Microsoft
            </button>
            <button
              type="button"
              className="h-11 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-sm text-white font-medium hover:bg-white/20 transition-colors"
            >
              GitHub
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex items-center gap-4 mt-8 text-sm text-white/70">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <span>•</span>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <span>•</span>
          <a href="#" className="hover:text-white transition-colors">Support</a>
        </div>
      </div>
    </div>
  );
}