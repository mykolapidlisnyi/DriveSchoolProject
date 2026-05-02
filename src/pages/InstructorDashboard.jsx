import React, { useState } from 'react';
import { 
  Search, 
  Home, 
  LayoutGrid, 
  BarChart2, 
  User,
  Instagram,
  Youtube,
  Twitter,
  MapPin,
  ChevronRight
} from 'lucide-react';

export default function InstructorDashboard() {
  const[activeDate, setActiveDate] = useState('Wed 25');
  const [activeTab, setActiveTab] = useState('home');

  const dates =[
    { day: 'Sun', num: '22' },
    { day: 'Mon', num: '23' },
    { day: 'Tue', num: '24' },
    { day: 'Wed', num: '25' },
    { day: 'Thu', num: '26' },
    { day: 'Fri', num: '27' },
    { day: 'Sat', num: '28' },
  ];

  return (
    <div className="w-full sm:max-w-md sm:mx-auto min-h-screen bg-[#F6F5FA] font-sans pb-32 relative sm:shadow-[0_0_50px_rgba(0,0,0,0.05)] overflow-hidden selection:bg-purple-200">
      
      {/* 1. Скляний Header */}
      <div className="flex justify-between items-center px-6 pt-12 pb-4 sticky top-0 z-40 bg-[#F6F5FA]/80 backdrop-blur-xl">
        <button className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-[0_4px_10px_rgba(0,0,0,0.05)] active:scale-90 transition-transform">
          <img 
            src="https://i.pravatar.cc/150?img=47" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </button>
        <div className="flex flex-col items-center">
          <h1 className="text-lg font-extrabold text-slate-900 tracking-tight">Hello, Instructor</h1>
          <span className="text-xs text-slate-500 font-medium mt-0.5">Today 25 Nov.</span>
        </div>
        <button className="w-12 h-12 rounded-full border border-slate-200 bg-white/50 flex items-center justify-center text-slate-700 shadow-sm hover:bg-white active:scale-90 transition-all">
          <Search className="w-5 h-5" />
        </button>
      </div>

      {/* 2. Hero Card (Daily Challenge) */}
      <div className="px-6 mt-2">
        <div className="bg-gradient-to-br from-[#A898FF] to-[#927CFF] rounded-[2.5rem] p-7 relative overflow-hidden shadow-[0_20px_40px_-15px_rgba(168,152,255,0.6)] group active:scale-[0.98] transition-transform duration-300">
          
          <h2 className="text-[2.1rem] font-black text-slate-900 leading-[1.1] mb-2 relative z-10 tracking-tight">
            Daily<br/>challenge
          </h2>
          <p className="text-sm font-semibold text-slate-900/70 mb-8 relative z-10">
            Do your plan before 09:00 AM
          </p>
          
          {/* Аватарки студентів */}
          <div className="flex items-center relative z-10">
            <img src="https://i.pravatar.cc/150?img=1" className="w-10 h-10 rounded-full border-[3px] border-[#9A85FF] shadow-sm -ml-0" alt="S1" />
            <img src="https://i.pravatar.cc/150?img=2" className="w-10 h-10 rounded-full border-[3px] border-[#9A85FF] shadow-sm -ml-4" alt="S2" />
            <img src="https://i.pravatar.cc/150?img=3" className="w-10 h-10 rounded-full border-[3px] border-[#9A85FF] shadow-sm -ml-4" alt="S3" />
            <div className="w-10 h-10 rounded-full border-[3px] border-[#9A85FF] shadow-sm -ml-4 bg-[#2A2A32] flex items-center justify-center">
              <span className="text-[11px] font-bold text-white">+4</span>
            </div>
          </div>

          {/* Імітація 3D-елементів (більш об'ємні) */}
          <div className="absolute -right-6 -bottom-6 w-36 h-36 bg-gradient-to-tr from-[#FF9D00] to-[#FFD54F] rounded-full shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.1)] opacity-95 group-hover:scale-105 transition-transform duration-500"></div>
          <div className="absolute right-10 top-4 w-16 h-16 bg-gradient-to-br from-[#5A5A5A] to-[#2D2D2D] rounded-[1.25rem] rotate-[15deg] shadow-[inset_4px_4px_10px_rgba(255,255,255,0.2),_5px_10px_20px_rgba(0,0,0,0.3)]"></div>
          <div className="absolute right-1 top-20 w-20 h-20 bg-gradient-to-bl from-[#F4E1D7] to-[#D4C1B8] rounded-full shadow-[inset_5px_5px_15px_rgba(255,255,255,0.5),_0_10px_20px_rgba(0,0,0,0.2)]"></div>
          <div className="absolute right-24 bottom-6 w-10 h-10 bg-[#FFD54F] rounded-full border-[6px] border-[#FF9D00] shadow-lg"></div>
        </div>
      </div>

      {/* 3. Горизонтальний календар */}
      <div className="mt-8">
        <div className="flex gap-3 overflow-x-auto pb-4 px-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden">
          {dates.map((item) => {
            const isActive = activeDate === `${item.day} ${item.num}`;
            return (
              <button
                key={item.num}
                onClick={() => setActiveDate(`${item.day} ${item.num}`)}
                className={`snap-center flex-shrink-0 flex flex-col items-center justify-center w-[4rem] h-[5rem] rounded-full border transition-all duration-300 active:scale-90 ${
                  isActive 
                    ? 'bg-gradient-to-b from-[#2A2A32] to-[#18181A] border-[#18181A] text-white shadow-[0_10px_20px_rgba(0,0,0,0.15)] scale-105' 
                    : 'bg-white/50 border-slate-200/80 text-slate-500 hover:bg-white hover:border-slate-300'
                }`}
              >
                <span className={`text-[11px] font-semibold mb-1 ${isActive ? 'text-slate-300' : 'text-slate-400'}`}>
                  {item.day}
                </span>
                <span className={`text-xl font-black ${isActive ? 'text-white' : 'text-slate-800'}`}>
                  {item.num}
                </span>
                <div className={`w-1.5 h-1.5 rounded-full mt-1.5 transition-all duration-300 ${isActive ? 'bg-white opacity-100' : 'bg-transparent opacity-0'}`}></div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. Секція "Your plan" (Bento Box) */}
      <div className="px-6 mt-4">
        <h3 className="text-[1.35rem] font-bold text-slate-900 mb-5 tracking-tight flex items-center justify-between">
          Your plan
          <button className="text-sm text-slate-400 hover:text-slate-600 font-medium flex items-center">
            See all <ChevronRight className="w-4 h-4 ml-0.5" />
          </button>
        </h3>
        
        <div className="grid grid-cols-2 gap-4">
          
          {/* Ліва картка (Помаранчева) */}
          <div className="bg-gradient-to-b from-[#FFC270] to-[#FFA93A] rounded-[2.5rem] p-6 flex flex-col justify-between shadow-[0_15px_30px_-10px_rgba(255,169,58,0.4)] active:scale-[0.97] transition-transform duration-300">
            <div>
              <span className="inline-block px-3.5 py-1.5 bg-white/25 backdrop-blur-md rounded-full text-xs font-bold text-[#7A4B0E] mb-5 shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-white/20">
                Medium
              </span>
              <h4 className="text-[1.65rem] font-black text-slate-900 leading-[1.1] mb-3">
                City<br/>Driving
              </h4>
              <div className="space-y-1">
                <p className="text-xs font-semibold text-slate-800/70">25 Nov.</p>
                <p className="text-xs font-semibold text-slate-800/70">14:00-15:00</p>
                <p className="text-xs font-semibold text-slate-800/70">A5 car</p>
              </div>
            </div>
            
            <div className="mt-10 flex items-center gap-3 bg-white/20 backdrop-blur-sm p-2.5 rounded-[1.5rem] border border-white/20">
              <img src="https://i.pravatar.cc/150?img=5" className="w-9 h-9 rounded-full border-2 border-white/50 shadow-sm" alt="Student" />
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-[#7A4B0E] uppercase tracking-wider">Student</span>
                <span className="text-sm font-bold text-slate-900 leading-tight">Sarah J.</span>
              </div>
            </div>
          </div>

          {/* Права колонка */}
          <div className="flex flex-col gap-4">
            
            {/* Блакитна картка */}
            <div className="bg-gradient-to-b from-[#B1D0FF] to-[#8EBAFF] rounded-[2.5rem] p-6 flex-1 relative overflow-hidden shadow-[0_15px_30px_-10px_rgba(142,186,255,0.4)] active:scale-[0.97] transition-transform duration-300 group">
              <span className="inline-block px-3.5 py-1.5 bg-white/30 backdrop-blur-md rounded-full text-xs font-bold text-[#194080] mb-3 shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-white/20">
                Light
              </span>
              <h4 className="text-2xl font-black text-slate-900 mb-2 relative z-10">Highway</h4>
              <p className="text-[11px] font-semibold text-slate-800/70 relative z-10 leading-tight">28 Nov.<br/>18:00-19:30<br/>A2 car</p>
              
              {/* Абстрактні 3D-сфери */}
              <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-gradient-to-tl from-[#D4C1B8] to-[#F4E1D7] rounded-full shadow-[inset_-5px_-5px_15px_rgba(0,0,0,0.1),_0_10px_20px_rgba(0,0,0,0.2)] group-hover:scale-110 transition-transform duration-500"></div>
              <div className="absolute bottom-6 right-10 w-10 h-10 bg-gradient-to-br from-[#689489] to-[#45645C] rounded-full shadow-[inset_2px_2px_5px_rgba(255,255,255,0.3),_0_5px_10px_rgba(0,0,0,0.2)]"></div>
              <div className="absolute bottom-3 right-6 w-6 h-6 bg-gradient-to-br from-[#FFC270] to-[#FFA93A] rounded-full shadow-md"></div>
            </div>

            {/* Рожева картка (Quick Actions) */}
            <div className="bg-gradient-to-br from-[#FFADFC] to-[#FF80F9] rounded-[2.5rem] p-5 flex items-center justify-between shadow-[0_15px_30px_-10px_rgba(255,128,249,0.4)]">
              <button className="w-11 h-11 bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-[#991590] shadow-[0_4px_10px_rgba(0,0,0,0.05)] hover:bg-white/60 active:scale-90 transition-all border border-white/20">
                <Instagram className="w-5 h-5" />
              </button>
              <button className="w-11 h-11 bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-[#991590] shadow-[0_4px_10px_rgba(0,0,0,0.05)] hover:bg-white/60 active:scale-90 transition-all border border-white/20">
                <Youtube className="w-5 h-5" />
              </button>
              <button className="w-11 h-11 bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-[#991590] shadow-[0_4px_10px_rgba(0,0,0,0.05)] hover:bg-white/60 active:scale-90 transition-all border border-white/20">
                <Twitter className="w-5 h-5" />
              </button>
            </div>
            
          </div>
        </div>
      </div>

      {/* 5. Плаваюча нижня навігація (Floating Pill) */}
      <div className="fixed bottom-6 w-full sm:max-w-md px-6 z-50">
        <div className="bg-[#1C1C1E]/95 backdrop-blur-2xl rounded-full p-2.5 flex justify-between items-center shadow-[0_20px_40px_rgba(0,0,0,0.25)] border border-white/10">
          
          <button 
            onClick={() => setActiveTab('home')}
            className="relative w-14 h-14 flex items-center justify-center rounded-full active:scale-90 transition-all duration-300"
          >
            {activeTab === 'home' && (
              <div className="absolute inset-0 bg-white rounded-full shadow-md"></div>
            )}
            <Home className={`w-6 h-6 relative z-10 ${activeTab === 'home' ? 'text-slate-900' : 'text-slate-400 hover:text-white transition-colors'}`} />
          </button>

          <button 
            onClick={() => setActiveTab('grid')}
            className="relative w-14 h-14 flex items-center justify-center rounded-full active:scale-90 transition-all duration-300"
          >
            {activeTab === 'grid' && (
              <div className="absolute inset-0 bg-white rounded-full shadow-md"></div>
            )}
            <LayoutGrid className={`w-6 h-6 relative z-10 ${activeTab === 'grid' ? 'text-slate-900' : 'text-slate-400 hover:text-white transition-colors'}`} />
          </button>

          <button 
            onClick={() => setActiveTab('stats')}
            className="relative w-14 h-14 flex items-center justify-center rounded-full active:scale-90 transition-all duration-300"
          >
            {activeTab === 'stats' && (
              <div className="absolute inset-0 bg-white rounded-full shadow-md"></div>
            )}
            <BarChart2 className={`w-6 h-6 relative z-10 ${activeTab === 'stats' ? 'text-slate-900' : 'text-slate-400 hover:text-white transition-colors'}`} />
          </button>

          <button 
            onClick={() => setActiveTab('profile')}
            className="relative w-14 h-14 flex items-center justify-center rounded-full active:scale-90 transition-all duration-300"
          >
            {activeTab === 'profile' && (
              <div className="absolute inset-0 bg-white rounded-full shadow-md"></div>
            )}
            <User className={`w-6 h-6 relative z-10 ${activeTab === 'profile' ? 'text-slate-900' : 'text-slate-400 hover:text-white transition-colors'}`} />
          </button>

        </div>
      </div>

    </div>
  );
}