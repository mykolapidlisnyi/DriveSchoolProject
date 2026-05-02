import React from 'react';
import { 
  Search, 
  Home, 
  Calendar, 
  User, 
  ChevronRight, 
  MapPin, 
  Clock, 
  Info, 
  MessageCircle, 
  Phone, 
  Video 
} from 'lucide-react';

export default function StudentDashboard() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-32 max-w-md mx-auto relative shadow-2xl overflow-hidden">
      
      {/* 1. Header */}
      <div className="flex justify-between items-center p-6">
        <div className="flex gap-4 items-center">
          <div className="w-12 h-12 rounded-full bg-slate-300 overflow-hidden shadow-sm border-2 border-white">
            <img src="https://i.pravatar.cc/150?img=44" alt="avatar" className="w-full h-full object-cover"/>
          </div>
          <div>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-0.5">Today 25 Nov.</p>
            <h1 className="text-xl font-black text-slate-900 tracking-tight">Hello, Isabella</h1>
          </div>
        </div>
        <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-200 hover:bg-slate-50 transition-colors">
          <Search className="w-5 h-5 text-slate-700" />
        </button>
      </div>

      {/* 2. Hero Card */}
      <div className="mx-6 p-6 rounded-[32px] bg-violet-300 text-slate-900 relative overflow-hidden shadow-sm border border-violet-200">
        <div className="absolute -right-8 -top-8 w-32 h-32 bg-violet-400 rounded-full opacity-50 blur-2xl"></div>
        <div className="relative z-10 flex flex-col gap-8">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-violet-700 mb-1.5 block">Ongoing Lesson</span>
              <h2 className="text-3xl font-black tracking-tight leading-none text-slate-900 mb-1">Driving<br/>Course</h2>
            </div>
            <button className="w-12 h-12 bg-violet-900 hover:bg-violet-800 transition-colors rounded-full flex items-center justify-center shadow-md">
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
          
          <div>
            <div className="flex justify-between items-end mb-2.5">
              <span className="text-sm font-extrabold text-violet-900">40% completed</span>
              <span className="text-xs font-bold text-violet-700">12/30 hrs</span>
            </div>
            <div className="h-3 w-full bg-violet-200/80 rounded-full overflow-hidden p-0.5 border border-violet-400/20">
              <div className="h-full bg-slate-900 rounded-full w-[40%] relative">
                <div className="absolute inset-0 bg-white/20 w-full h-full rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Date Selector */}
      <div className="mt-8">
        <div className="flex gap-3 overflow-x-auto px-6 py-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {/* Active Day */}
          <button className="flex-shrink-0 w-16 h-20 rounded-full bg-slate-900 text-white flex flex-col items-center justify-center shadow-lg transform hover:scale-105 transition-transform">
            <span className="text-xs font-bold uppercase mb-1 text-slate-300">Wed</span>
            <span className="text-xl font-black">25</span>
          </button>
          
          {/* Inactive Days */}
          {[
            { day: 'Thu', date: '26' },
            { day: 'Fri', date: '27' },
            { day: 'Sat', date: '28' },
            { day: 'Sun', date: '29' },
            { day: 'Mon', date: '30' }
          ].map((item, i) => (
            <button key={i} className="flex-shrink-0 w-16 h-20 rounded-full border border-slate-200 bg-white text-slate-400 flex flex-col items-center justify-center hover:bg-slate-50 hover:border-slate-300 transition-all">
              <span className="text-xs font-bold uppercase mb-1">{item.day}</span>
              <span className="text-xl font-bold text-slate-600">{item.date}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 4. Bento Grid */}
      <div className="mt-4 mb-8">
        <h3 className="px-6 text-xl font-black mb-5 text-slate-900 tracking-tight">Your plan</h3>
        <div className="mx-6 grid grid-cols-2 gap-4">
          
          {/* Card 1: Left tall */}
          <div className="row-span-2 bg-orange-200 rounded-[32px] p-5 flex flex-col shadow-sm border border-orange-300/50">
            <div className="bg-orange-300 w-12 h-12 rounded-full flex items-center justify-center mb-6 shadow-sm">
              <MapPin className="w-5 h-5 text-orange-900" />
            </div>
            <div className="flex-1">
              <h4 className="text-2xl font-black text-slate-900 leading-tight mb-3">City<br/>Driving</h4>
              <div className="flex items-center text-orange-900 text-sm font-bold bg-orange-300/40 w-max px-3 py-1.5 rounded-full mb-6">
                <Clock className="w-4 h-4 mr-1.5" />
                14:00 - 15:30
              </div>
            </div>
            <button className="w-full bg-red-500 hover:bg-red-600 active:bg-red-700 transition-colors text-white text-sm font-bold py-3.5 rounded-full shadow-md mt-auto">
              Cancel Lesson
            </button>
          </div>

          {/* Card 2: Right top square */}
          <div className="bg-blue-200 rounded-[32px] p-5 flex flex-col justify-between shadow-sm border border-blue-300/50 relative overflow-hidden">
            <div className="flex justify-between items-start relative z-10">
              <h4 className="text-[17px] font-black text-slate-900 leading-tight">Waitlist<br/>Status</h4>
              <div className="bg-blue-300 p-2 rounded-full text-blue-900 shadow-sm">
                <Info className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-6 relative z-10">
              <p className="text-[11px] text-blue-800 font-black uppercase tracking-widest mb-1">Position</p>
              <p className="text-4xl font-black text-slate-900 tracking-tighter">#2</p>
            </div>
          </div>

          {/* Card 3: Right bottom rect */}
          <div className="bg-pink-300 rounded-[32px] p-4 flex justify-around items-center shadow-sm border border-pink-400/50 h-[100px]">
            <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-pink-500 hover:bg-slate-50 transition-colors">
              <MessageCircle className="w-[22px] h-[22px] fill-current" />
            </button>
            <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-pink-500 hover:bg-slate-50 transition-colors">
              <Phone className="w-[22px] h-[22px] fill-current" />
            </button>
            <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-pink-500 hover:bg-slate-50 transition-colors">
              <Video className="w-[22px] h-[22px] fill-current" />
            </button>
          </div>

        </div>
      </div>

      {/* 5. Floating Bottom Nav */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-[400px] bg-slate-900 rounded-full h-20 flex items-center justify-around px-2 z-50 shadow-2xl border border-slate-800">
        <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform">
          <Home className="w-6 h-6 text-slate-900" />
        </button>
        <button className="w-16 h-16 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
          <Calendar className="w-6 h-6 text-white" />
        </button>
        <button className="w-16 h-16 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
          <User className="w-6 h-6 text-white" />
        </button>
      </div>

    </div>
  );
}