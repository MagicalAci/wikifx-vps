import React, { useState } from 'react';
import { Home, Monitor, Shield, TrendingUp, Search, BarChart3, ShoppingCart, HelpCircle, User, Eye, EyeOff, X, LogOut, AlertCircle } from 'lucide-react';

const WikiFXVPS = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  const handleLogin = () => {
    if (loginForm.username && loginForm.password) {
      setIsLoggedIn(true);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <div className="bg-gray-800 bg-opacity-90 backdrop-blur-xl rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 border border-gray-700">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
              WikiFX VPS
            </h1>
            <p className="text-gray-400">智能云主机管理平台</p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">账号</label>
              <div className="relative">
                <input
                  type="text"
                  value={loginForm.username}
                  onChange={(e) => setLoginForm({...loginForm, username: e.target.value})}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400"
                  placeholder="请输入您的账号"
                />
                <User className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">密码</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400"
                  placeholder="请输入您的密码"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button
              onClick={handleLogin}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 rounded-lg hover:from-blue-600 hover:to-purple-700"
            >
              登录
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex">
      <div className="w-48 bg-gray-900 border-r border-gray-800">
        <div className="p-4">
          <h1 className="text-xl font-bold text-white">WikiFX VPS</h1>
        </div>
        <nav className="px-3">
          <button
            onClick={() => setActiveTab('overview')}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg mb-1 ${
              activeTab === 'overview' ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-800'
            }`}
          >
            <Home size={18} />
            <span>概览仪表盘</span>
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg mb-1 text-gray-400 hover:bg-gray-800">
            <Monitor size={18} />
            <span>远程连接</span>
          </button>
        </nav>
      </div>

      <div className="flex-1">
        <div className="bg-gray-900 border-b border-gray-800 px-6 py-3 flex justify-between">
          <span className="text-white font-medium">概览仪表盘</span>
          <button
            onClick={() => setIsLoggedIn(false)}
            className="flex items-center gap-2 text-gray-400 hover:text-white"
          >
            <LogOut size={16} />
            <span>退出</span>
          </button>
        </div>

        <div className="p-6">
          <div className="bg-yellow-900 bg-opacity-20 border border-yellow-600 rounded-lg p-4 mb-6">
            <div className="flex items-center gap-2 text-yellow-500">
              <AlertCircle size={20} />
              <span>您的VPS将在7天后到期，请及时续费</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="text-gray-400 text-sm mb-1">总资产</div>
              <div className="text-2xl font-bold text-white">$89,000</div>
              <div className="text-green-500 text-sm mt-1">+2.66%</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="text-gray-400 text-sm mb-1">今日盈亏</div>
              <div className="text-2xl font-bold text-green-500">+$2,309</div>
              <div className="text-gray-400 text-sm mt-1">3个账户</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="text-gray-400 text-sm mb-1">平均延迟</div>
              <div className="text-2xl font-bold text-white">1.4ms</div>
              <div className="text-green-500 text-sm mt-1">稳定运行中</div>
            </div>
          </div>

          <div className="mt-6 bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-4">VPS Standard</h2>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <div className="text-gray-400 text-sm">IP地址</div>
                <div className="text-white">106.75.6.118</div>
              </div>
              <div>
                <div className="text-gray-400 text-sm">到期时间</div>
                <div className="text-white">2025-01-27</div>
              </div>
              <div>
                <div className="text-gray-400 text-sm">状态</div>
                <div className="text-green-500">运行中</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WikiFXVPS;
