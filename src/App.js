import React, { useState, useEffect } from 'react';
import { ChevronRight, Activity, Shield, Settings, TrendingUp, AlertCircle, Monitor, BarChart3, ShoppingCart, Bell, History, Globe, User, Send, Copy, Maximize2, RefreshCw, Download, Upload, HelpCircle, CheckCircle, XCircle, Zap, Cpu, HardDrive, Wifi, Lock, Bot, Home, Search, FileText, Phone, X, Plus, Minus, AlertTriangle, ArrowUp, LogOut, ChevronDown, Info, Eye, EyeOff, Clock, Calendar, Server, PieChart, TrendingDown, DollarSign, ArrowUpRight, ArrowDownRight, Users, MessageSquare, Newspaper, LineChart, BarChart, Target, Award, Briefcase } from 'lucide-react';

const WikiFXVPS = () => {
  // 动画样式
  const animationStyles = `
    @keyframes slideDown {
      from {
        transform: translateY(-100%);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
    
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    
    @keyframes slideInRight {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    
    @keyframes pulse {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: 0.5;
      }
    }
  `;

  // 状态管理
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isVPSConnecting, setIsVPSConnecting] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [showRenewalReminder, setShowRenewalReminder] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [aiMessages, setAiMessages] = useState([
    { type: 'ai', content: '您好！我是WikiFX AI助手v2.0。我可以为您提供以下服务：\n\n📊 每日行情问答 - 分析最新市场动态\n📰 每日新闻晨报 - 整合重要财经资讯\n📈 数据分析问答 - 解读您的交易数据\n\n请问有什么可以帮助您的吗？' },
  ]);
  const [aiInput, setAiInput] = useState('');
  const [selectedAccount, setSelectedAccount] = useState(0);
  const [showNotificationModal, setShowNotificationModal] = useState(false);
  const [showRenewalModal, setShowRenewalModal] = useState(false);
  const [riskTab, setRiskTab] = useState('monitoring');
  const [tradeTab, setTradeTab] = useState('ai-insights');
  const [aiAssistantMode, setAiAssistantMode] = useState('daily-market');

  // 账户数据
  const accounts = [
    { 
      id: 0, 
      account: '8003000045', 
      platform: 'MT4', 
      broker: 'AvaTrade',
      balance: '$45,230',
      profit: '+$1,662',
      profitPercent: '+3.68%',
      status: 'running',
      serverLocation: '伦敦',
      latency: '0.8ms'
    },
    { 
      id: 1, 
      account: '8003000046', 
      platform: 'MT4', 
      broker: 'IC Markets',
      balance: '$28,450',
      profit: '+$892',
      profitPercent: '+3.14%',
      status: 'running',
      serverLocation: '纽约',
      latency: '1.2ms'
    },
    { 
      id: 2, 
      account: '8003000047', 
      platform: 'MT5', 
      broker: 'XM Trading',
      balance: '$15,320',
      profit: '-$245',
      profitPercent: '-1.57%',
      status: 'running',
      serverLocation: '东京',
      latency: '2.1ms'
    }
  ];

  // 登录后显示续费提醒
  useEffect(() => {
    if (isLoggedIn && !isVPSConnecting) {
      setTimeout(() => {
        setShowRenewalReminder(true);
      }, 1500);
    }
  }, [isLoggedIn, isVPSConnecting]);

  // 处理登录
  const handleLogin = () => {
    if (loginForm.username && loginForm.password) {
      setIsVPSConnecting(true);
      
      // 模拟VPS连接过程
      setTimeout(() => {
        setIsVPSConnecting(false);
        setIsLoggedIn(true);
        addNotification('success', '登录成功', `欢迎回来，${loginForm.username}`);
      }, 3000);
    }
  };

  // 添加通知
  const addNotification = (type, title, message) => {
    const newNotification = {
      id: Date.now(),
      type,
      title,
      message,
      time: new Date().toLocaleTimeString()
    };
    setNotifications(prev => [newNotification, ...prev]);
  };

  // 发送AI消息
  const sendAiMessage = () => {
    if (aiInput.trim()) {
      setAiMessages([...aiMessages, { type: 'user', content: aiInput }]);
      
      // 模拟AI响应
      setTimeout(() => {
        let response = '';
        
        // 根据不同模式生成不同的AI响应
        if (aiAssistantMode === 'daily-market') {
          response = `📊 **今日行情分析**\n\n主要货币对表现：\n• EURUSD：1.0862 (+0.15%) - 欧元区经济数据向好\n• GBPUSD：1.2534 (-0.08%) - 英国央行鹰派言论影响\n• USDJPY：148.23 (+0.22%) - 美元走强趋势延续\n\n黄金现货：$2,042/盎司 (+0.45%)\n原油期货：$78.32/桶 (-0.12%)\n\n💡 **交易建议**\n基于当前市场情绪和技术指标：\n1. EURUSD在1.0850有强支撑，可考虑逢低买入\n2. 黄金维持看涨，但需注意2050阻力位\n3. 美元指数若突破104.50，其他主要货币对可能承压`;
        } else if (aiAssistantMode === 'daily-news') {
          response = `📰 **WikiFX每日新闻晨报**\n${new Date().toLocaleDateString('zh-CN')}\n\n🔥 **头条新闻**\n• 美联储官员暗示利率可能维持高位更长时间\n• 欧洲央行考虑放缓加息步伐\n• 中国经济数据超预期，提振风险偏好\n\n📈 **市场要闻**\n• 美股三大指数收涨，科技股领涨\n• 比特币突破45,000美元关口\n• 日本央行维持超宽松货币政策\n\n⚡ **今日关注**\n• 14:00 德国CPI数据\n• 20:30 美国初请失业金人数\n• 22:00 美联储会议纪要\n\n💭 **分析师观点**\n多数分析师认为，当前市场处于关键转折点，建议保持谨慎乐观态度。`;
        } else if (aiAssistantMode === 'user-data') {
          response = `📊 **您的交易数据分析**\n\n**账户整体表现**\n• 总资产：$89,000 (+$2,309，+2.66%)\n• 活跃账户：3个\n• 平均收益率：+2.08%\n\n**最佳表现账户**\nAvaTrade (MT4) - 8003000045\n• 收益：+$1,662 (+3.68%)\n• 胜率：68.5%\n• 最大回撤：-3.2%\n\n**需要关注**\nXM Trading (MT5) - 8003000047\n• 亏损：-$245 (-1.57%)\n• 建议：考虑调整策略或减少仓位\n\n**交易习惯分析**\n• 您在亚洲时段的胜率最高(72%)\n• EURUSD是您最擅长的交易品种\n• 建议控制单笔风险在2%以内`;
        }
        
        setAiMessages(prev => [...prev, { 
          type: 'ai', 
          content: response 
        }]);
      }, 1000);
      setAiInput('');
    }
  };

  // 登录页面
  const renderLoginPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500 rounded-full filter blur-3xl"></div>
      </div>

      {/* VPS连接动画 */}
      {isVPSConnecting && (
        <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-2xl p-8 max-w-md w-full mx-4 text-center">
            <div className="mb-6">
              <div className="w-20 h-20 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center animate-pulse">
                <Monitor className="text-white" size={40} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">正在连接VPS服务器</h3>
              <p className="text-gray-400">请稍候，正在建立安全连接...</p>
            </div>
            
            <div className="space-y-3 text-left">
              <div className="flex items-center gap-3">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center ${true ? 'bg-green-500' : 'bg-gray-600'}`}>
                  {true && <CheckCircle size={16} className="text-white" />}
                </div>
                <span className="text-gray-300">验证用户凭据</span>
              </div>
              <div className="flex items-center gap-3">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center ${isVPSConnecting ? 'bg-blue-500 animate-pulse' : 'bg-gray-600'}`}>
                  {isVPSConnecting && <div className="w-3 h-3 bg-white rounded-full"></div>}
                </div>
                <span className="text-gray-300">连接到VPS服务器 (106.75.6.118)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-gray-600"></div>
                <span className="text-gray-400">初始化远程桌面</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-gray-600"></div>
                <span className="text-gray-400">加载交易环境</span>
              </div>
            </div>

            <div className="mt-6">
              <div className="bg-gray-700 rounded-full h-2 overflow-hidden">
                <div className="bg-blue-500 h-full transition-all duration-1000 animate-pulse" style={{width: '60%'}}></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 登录框 */}
      <div className="bg-gray-800 bg-opacity-90 backdrop-blur-xl rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 relative z-10 border border-gray-700">
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
                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
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
                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all pr-12"
                placeholder="请输入您的密码"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 text-blue-500 bg-gray-700 border-gray-600 rounded focus:ring-blue-500" />
              <span className="text-gray-300 text-sm">记住我</span>
            </label>
            <a href="#" className="text-blue-400 text-sm hover:text-blue-300 transition-colors">忘记密码？</a>
          </div>

          <button
            onClick={handleLogin}
            disabled={isVPSConnecting}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isVPSConnecting ? '连接中...' : '登录'}
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm">
            还没有账号？
            <a href="#" className="text-blue-400 hover:text-blue-300 ml-1 transition-colors">立即注册</a>
          </p>
        </div>
      </div>
    </div>
  );

  // 概览页面
  const renderOverview = () => (
    <div className="h-full bg-gray-900">
      {/* 关键指标 */}
      <div className="grid grid-cols-5 gap-4 mb-6">
        <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-all duration-300 cursor-pointer transform hover:scale-105">
          <div className="text-gray-400 text-sm mb-1">总资产</div>
          <div className="text-2xl font-bold text-white">$89,000</div>
          <div className="text-gray-400 text-sm mt-1 flex items-center gap-1">
            <TrendingUp size={16} className="text-green-500" />
            <span>3个账户</span>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-all duration-300 cursor-pointer transform hover:scale-105">
          <div className="text-gray-400 text-sm mb-1">总盈亏</div>
          <div className="text-2xl font-bold text-green-500">+$2,309</div>
          <div className="text-green-500 text-sm mt-1 flex items-center gap-1">
            <ArrowUp size={16} />
            <span>+2.66%</span>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-all duration-300 cursor-pointer transform hover:scale-105">
          <div className="text-gray-400 text-sm mb-1">平均胜率</div>
          <div className="text-2xl font-bold text-white">68.8%</div>
          <div className="text-gray-400 text-sm mt-1">优于平均</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-all duration-300 cursor-pointer transform hover:scale-105">
          <div className="text-gray-400 text-sm mb-1">平均延迟</div>
          <div className="text-2xl font-bold text-white">1.4ms</div>
          <div className="text-gray-400 text-sm mt-1 flex items-center gap-1">
            <Activity size={16} className="text-green-500" />
            <span>稳定运行中</span>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-all duration-300 cursor-pointer transform hover:scale-105">
          <div className="text-gray-400 text-sm mb-1">CPU使用率</div>
          <div className="text-2xl font-bold text-white">67%</div>
          <div className="text-gray-400 text-sm mt-1 flex items-center gap-1">
            <Cpu size={16} className="text-blue-500" />
            <span>性能良好</span>
          </div>
        </div>
      </div>

      {/* VPS Standard 区域 */}
      <div className="bg-gray-800 rounded-lg p-6 mb-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <h3 className="text-xl font-bold text-white">VPS Standard</h3>
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm animate-pulse">运行中</span>
          </div>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105">
            立即升级
          </button>
        </div>

        <div className="bg-gray-900 rounded-lg p-4 mb-6 border border-yellow-600 border-opacity-50">
          <h4 className="text-yellow-500 font-medium mb-3 flex items-center gap-2">
            <AlertTriangle size={20} />
            检测到您的VPS有安全风险，请点击立刻进行升级和优化
          </h4>
          <div className="grid grid-cols-5 gap-8 text-sm">
            <div>
              <div className="text-gray-400 mb-1">VPS IP</div>
              <div className="text-white">106.75.6.118</div>
            </div>
            <div>
              <div className="text-gray-400 mb-1">服务器地址</div>
              <div className="text-white flex items-center gap-2">
                <span className="w-6 h-4 bg-red-600 rounded"></span>
                <span>北京</span>
              </div>
            </div>
            <div>
              <div className="text-gray-400 mb-1">到期日期</div>
              <div className="text-white">2025-01-27</div>
            </div>
            <div>
              <div className="text-gray-400 mb-1">系统语言</div>
              <div className="text-white">简体中文</div>
            </div>
            <div>
              <div className="text-gray-400 mb-1">VPS账号</div>
              <div className="text-white">Administrator</div>
              <div className="text-gray-400 mt-2">VPS登录密码</div>
              <div className="text-white flex items-center gap-2">
                <span>••••••••••••</span>
                <button 
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={() => addNotification('success', '复制成功', '密码已复制到剪贴板')}
                >
                  <Copy size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <button 
            onClick={() => setActiveTab('remote')}
            className="bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <Monitor size={20} />
            远程连接
          </button>
          <button 
            onClick={() => {
              if(confirm('确定要重启VPS吗？这将断开所有连接。')) {
                addNotification('warning', '正在重启', 'VPS正在重新启动，请稍候...');
                setTimeout(() => {
                  addNotification('success', '重启完成', 'VPS已成功重启');
                }, 3000);
              }
            }}
            className="bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <RefreshCw size={20} />
            重新启动
          </button>
          <button 
            onClick={() => {
              if(confirm('确定要注销VPS吗？')) {
                addNotification('success', '注销成功', '已安全注销VPS');
              }
            }}
            className="bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <LogOut size={20} />
            注销
          </button>
        </div>
      </div>

      {/* 账户列表 */}
      <div className="grid grid-cols-3 gap-4">
        {accounts.map((account, index) => (
          <div key={account.id} className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="bg-gray-700 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src="/api/placeholder/40/40" alt="Broker" className="w-10 h-10 rounded" />
                <div>
                  <div className="text-white font-medium">{account.account}</div>
                  <div className="text-gray-400 text-sm">{account.platform} • {account.broker}</div>
                </div>
              </div>
              <span className="bg-gray-600 text-gray-300 px-2 py-1 rounded text-xs">真实</span>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="text-gray-400 text-sm">余额</div>
                  <div className="text-white font-medium">{account.balance}</div>
                </div>
                <div>
                  <div className="text-gray-400 text-sm">净值</div>
                  <div className="text-white font-medium">{account.balance}</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="text-gray-400 text-sm">今日盈亏</div>
                  <div className={`font-medium ${account.profit.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                    {account.profit}
                  </div>
                </div>
                <div>
                  <div className="text-gray-400 text-sm">收益率</div>
                  <div className={`font-medium ${account.profitPercent.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                    {account.profitPercent}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm mb-3">
                <div className="flex items-center gap-2">
                  <Server size={14} className="text-gray-400" />
                  <span className="text-gray-400">{account.serverLocation}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Activity size={14} className="text-green-500" />
                  <span className="text-green-500">{account.latency}</span>
                </div>
              </div>
              <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 rounded transition-all duration-300">
                查看详情
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // 风险管理中心 v2.0
  const renderRiskManagement = () => (
    <div className="h-full bg-gray-900">
      <div className="flex gap-2 mb-6 bg-gray-800 p-1 rounded-lg">
        <button
          onClick={() => setRiskTab('monitoring')}
          className={`flex-1 py-2 px-4 rounded ${riskTab === 'monitoring' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white'} transition-all`}
        >
          实时监控
        </button>
        <button
          onClick={() => setRiskTab('broker')}
          className={`flex-1 py-2 px-4 rounded ${riskTab === 'broker' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white'} transition-all`}
        >
          交易商监管
        </button>
        <button
          onClick={() => setRiskTab('sentiment')}
          className={`flex-1 py-2 px-4 rounded ${riskTab === 'sentiment' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white'} transition-all`}
        >
          市场情绪
        </button>
        <button
          onClick={() => setRiskTab('environment')}
          className={`flex-1 py-2 px-4 rounded ${riskTab === 'environment' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white'} transition-all`}
        >
          交易环境
        </button>
      </div>

      {riskTab === 'monitoring' && (
        <div className="grid grid-cols-3 gap-6">
          {/* 安全评分卡片 */}
          <div className="bg-gray-800 rounded-lg p-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-blue-500"></div>
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-white font-medium">安全评分</h4>
              <span className="bg-green-500 bg-opacity-20 text-green-500 px-3 py-1 rounded-full text-sm">安全</span>
            </div>
            <div className="flex justify-center mb-4">
              <div className="relative w-32 h-32">
                <svg className="transform -rotate-90 w-32 h-32">
                  <circle cx="64" cy="64" r="56" stroke="#374151" strokeWidth="8" fill="none" />
                  <circle cx="64" cy="64" r="56" stroke="#10b981" strokeWidth="8" fill="none" 
                          strokeDasharray={`${2 * Math.PI * 56 * 0.89} ${2 * Math.PI * 56 * 0.11}`} />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">8.9</div>
                    <div className="text-xs text-gray-400">综合评分</div>
                  </div>
                </div>
              </div>
            </div>
            <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 rounded transition-colors">
              查看详情
            </button>
          </div>

          {/* 交易商风险提醒 */}
          <div className="bg-gray-800 rounded-lg p-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 to-orange-500"></div>
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-white font-medium">交易商风险提醒</h4>
              <span className="bg-yellow-500 bg-opacity-20 text-yellow-500 px-3 py-1 rounded-full text-sm">警告</span>
            </div>
            <div className="space-y-3 mb-4">
              <div className="flex items-start gap-2">
                <AlertCircle className="text-yellow-500 mt-0.5" size={16} />
                <span className="text-gray-300 text-sm">澳大利亚ASIC监管牌照即将到期</span>
              </div>
              <div className="flex items-start gap-2">
                <Info className="text-blue-500 mt-0.5" size={16} />
                <span className="text-gray-300 text-sm">最新用户曝光：出金延迟问题</span>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded text-sm transition-colors">
                了解更多
              </button>
              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded text-sm transition-colors">
                更换交易商
              </button>
            </div>
          </div>

          {/* 账户安全状态 */}
          <div className="bg-gray-800 rounded-lg p-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-white font-medium">账户安全状态</h4>
              <span className="bg-green-500 bg-opacity-20 text-green-500 px-3 py-1 rounded-full text-sm">正常</span>
            </div>
            <div className="space-y-3 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-400">防火墙保护</span>
                <span className="text-green-500">✓ 已启用</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">SSL加密</span>
                <span className="text-green-500">✓ 已启用</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">交易监控</span>
                <span className="text-green-500">✓ 已启用</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">天眼盾</span>
                <span className="text-red-500">✗ 未开启</span>
              </div>
            </div>
            <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded transition-colors">
              立即开启天眼盾
            </button>
          </div>
        </div>
      )}

      {riskTab === 'broker' && (
        <div className="space-y-6">
          {/* 交易商监管信息监控 */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <Shield className="text-blue-500" size={24} />
              交易商监管信息监控
            </h3>
            
            {/* 交易商卡片 */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-900 rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <img src="/api/placeholder/48/48" alt="AvaTrade" className="w-12 h-12 rounded" />
                    <div>
                      <h4 className="text-white font-medium">AvaTrade</h4>
                      <p className="text-gray-400 text-sm">WikiFX评分：8.52</p>
                    </div>
                  </div>
                  <span className="bg-green-500 bg-opacity-20 text-green-500 px-2 py-1 rounded text-xs">正常</span>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">ASIC监管</span>
                    <span className="text-green-500">✓ 有效</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">CySEC监管</span>
                    <span className="text-green-500">✓ 有效</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">最新曝光</span>
                    <span className="text-gray-500">无</span>
                  </div>
                </div>
                
                <button className="w-full mt-4 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded text-sm transition-colors">
                  查看详细报告
                </button>
              </div>

              <div className="bg-gray-900 rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <img src="/api/placeholder/48/48" alt="IC Markets" className="w-12 h-12 rounded" />
                    <div>
                      <h4 className="text-white font-medium">IC Markets</h4>
                      <p className="text-gray-400 text-sm">WikiFX评分：9.21</p>
                    </div>
                  </div>
                  <span className="bg-yellow-500 bg-opacity-20 text-yellow-500 px-2 py-1 rounded text-xs">注意</span>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">ASIC监管</span>
                    <span className="text-yellow-500">⚠ 即将到期</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">FCA监管</span>
                    <span className="text-green-500">✓ 有效</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">最新曝光</span>
                    <span className="text-red-500">出金延迟</span>
                  </div>
                </div>
                
                <button className="w-full mt-4 bg-yellow-600 hover:bg-yellow-700 text-white py-2 rounded text-sm transition-colors">
                  立即处理
                </button>
              </div>
            </div>

            {/* 用户曝光提醒 */}
            <div className="mt-6 bg-gray-900 rounded-lg p-4">
              <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                <AlertTriangle className="text-red-500" size={20} />
                最新用户曝光
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-sm">
                  <span className="text-gray-500">2025-01-20</span>
                  <div className="flex-1">
                    <p className="text-gray-300">IC Markets - 用户反映出金延迟超过3天</p>
                    <p className="text-gray-500">来自：用户138****2341</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <span className="text-gray-500">2025-01-19</span>
                  <div className="flex-1">
                    <p className="text-gray-300">XM Trading - 点差异常扩大，影响交易</p>
                    <p className="text-gray-500">来自：用户155****8876</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {riskTab === 'sentiment' && (
        <div className="space-y-6">
          {/* 市场情绪监控报告 */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <TrendingUp className="text-purple-500" size={24} />
              市场情绪监控报告
            </h3>
            
            {/* 综合市场情绪指标 */}
            <div className="bg-gray-900 rounded-lg p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-white font-medium">综合市场情绪</h4>
                  <p className="text-gray-400 text-sm">基于多空持仓和交易量分析</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-green-500">65</div>
                  <div className="text-green-500 text-sm">贪婪</div>
                </div>
              </div>
              <div className="relative h-8 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full overflow-hidden">
                <div className="absolute top-0 w-1 h-full bg-white shadow-lg animate-pulse" style={{left: '65%'}}></div>
              </div>
              <div className="flex justify-between mt-2 text-xs text-gray-400">
                <span>极度恐慌</span>
                <span>恐慌</span>
                <span>中性</span>
                <span>贪婪</span>
                <span>极度贪婪</span>
              </div>
            </div>

            {/* 主要货币对情绪 */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-900 rounded-lg p-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-white font-medium">EURUSD</span>
                  <span className="text-green-500 text-sm">看涨</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-green-500">多头 68%</span>
                      <span className="text-red-500">空头 32%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-500 to-red-500" style={{width: '68%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg p-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-white font-medium">GBPUSD</span>
                  <span className="text-red-500 text-sm">看跌</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-green-500">多头 42%</span>
                      <span className="text-red-500">空头 58%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-500 to-red-500" style={{width: '42%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg p-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-white font-medium">XAUUSD</span>
                  <span className="text-green-500 text-sm">强烈看涨</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-green-500">多头 78%</span>
                      <span className="text-red-500">空头 22%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-500 to-red-500" style={{width: '78%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* AI市场分析报告 */}
            <div className="bg-gray-900 rounded-lg p-4">
              <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                <Bot className="text-purple-500" size={20} />
                AI市场情绪分析报告
              </h4>
              <div className="text-gray-300 text-sm space-y-3">
                <p>
                  <strong className="text-white">市场概况：</strong>
                  当前市场情绪偏向贪婪（65/100），主要受美元走弱和风险资产上涨推动。投资者对经济复苏保持乐观，但需警惕过度乐观带来的回调风险。
                </p>
                <p>
                  <strong className="text-white">货币对分析：</strong>
                  EURUSD显示强劲买入信号（68%多头），主要受欧洲央行鹰派言论支撑。GBPUSD承压（58%空头），英国经济数据疲软。黄金维持强势（78%多头），避险需求和通胀预期支撑金价。
                </p>
                <p>
                  <strong className="text-white">交易建议：</strong>
                  1. EURUSD可在1.0850-1.0880区间逢低买入，目标1.0950
                  2. GBPUSD建议观望，等待1.2500支撑确认
                  3. 黄金继续持有多头，但需注意2050阻力位
                </p>
                <p className="text-gray-500 text-xs">
                  更新时间：{new Date().toLocaleString('zh-CN')}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {riskTab === 'environment' && (
        <div className="space-y-6">
          {/* 交易环境/速度监控 */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <Server className="text-blue-500" size={24} />
              交易环境/速度监控
            </h3>

            {/* 服务器连接状态 */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {accounts.map((account) => (
                <div key={account.id} className="bg-gray-900 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="text-white font-medium">{account.broker}</h4>
                      <p className="text-gray-400 text-sm">{account.platform} - {account.account}</p>
                    </div>
                    <span className="bg-green-500 bg-opacity-20 text-green-500 px-2 py-1 rounded text-xs">在线</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">服务器位置</span>
                        <span className="text-white">{account.serverLocation}</span>
                      </div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">延迟</span>
                        <span className={`${parseFloat(account.latency) < 1 ? 'text-green-500' : parseFloat(account.latency) < 2 ? 'text-yellow-500' : 'text-red-500'}`}>
                          {account.latency}
                        </span>
                      </div>
                    </div>
                    
                    <div className="h-20">
                      {/* 模拟延迟波动图 */}
                      <div className="h-full bg-gray-800 rounded relative overflow-hidden">
                        <div className="absolute inset-0 flex items-end justify-around">
                          {[65, 72, 68, 75, 70, 78, 73, 69, 71, 68].map((height, i) => (
                            <div key={i} className="w-2 bg-blue-500 opacity-70" style={{height: `${height}%`}}></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 优化建议 */}
            <div className="bg-gray-900 rounded-lg p-4">
              <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                <Zap className="text-yellow-500" size={20} />
                服务器优化建议
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-1.5"></div>
                  <div className="flex-1">
                    <p className="text-gray-300 text-sm">
                      您的XM Trading账户连接到东京服务器，延迟为2.1ms。建议考虑切换到新加坡服务器以获得更低延迟。
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5"></div>
                  <div className="flex-1">
                    <p className="text-gray-300 text-sm">
                      AvaTrade和IC Markets的连接速度优秀，继续保持当前配置。
                    </p>
                  </div>
                </div>
              </div>
              <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded text-sm transition-colors">
                查看详细优化方案
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  // 交易管理中心 v2.0
  const renderTradeManagement = () => (
    <div className="h-full bg-gray-900">
      <div className="flex gap-2 mb-6 bg-gray-800 p-1 rounded-lg">
        <button
          onClick={() => setTradeTab('ai-insights')}
          className={`flex-1 py-2 px-4 rounded ${tradeTab === 'ai-insights' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white'} transition-all`}
        >
          AI洞察
        </button>
        <button
          onClick={() => setTradeTab('alerts')}
          className={`flex-1 py-2 px-4 rounded ${tradeTab === 'alerts' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white'} transition-all`}
        >
          异常提醒
        </button>
        <button
          onClick={() => setTradeTab('performance')}
          className={`flex-1 py-2 px-4 rounded ${tradeTab === 'performance' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white'} transition-all`}
        >
          交易表现
        </button>
        <button
          onClick={() => setTradeTab('optimization')}
          className={`flex-1 py-2 px-4 rounded ${tradeTab === 'optimization' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white'} transition-all`}
        >
          策略优化
        </button>
      </div>

      {tradeTab === 'ai-insights' && (
        <div className="grid grid-cols-3 gap-6">
          {/* 每日AI洞察晨报 */}
          <div className="col-span-2 bg-gray-800 rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6">
              <h3 className="text-white font-bold text-xl mb-2 flex items-center gap-2">
                <Newspaper className="text-white" size={24} />
                WikiFX AI 每日洞察晨报
              </h3>
              <p className="text-purple-200">{new Date().toLocaleDateString('zh-CN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
            
            <div className="p-6 space-y-6">
              {/* 交易时段评估分析 */}
              <div>
                <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                  <Clock className="text-blue-500" size={20} />
                  交易时段评估分析
                </h4>
                <div className="bg-gray-900 rounded-lg p-4">
                  <div className="grid grid-cols-4 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-gray-400 text-sm mb-1">亚洲时段</div>
                      <div className="text-2xl font-bold text-green-500">72.5%</div>
                      <div className="text-gray-500 text-xs">胜率最高</div>
                    </div>
                    <div className="text-center">
                      <div className="text-gray-400 text-sm mb-1">欧洲时段</div>
                      <div className="text-2xl font-bold text-yellow-500">65.3%</div>
                      <div className="text-gray-500 text-xs">表现平稳</div>
                    </div>
                    <div className="text-center">
                      <div className="text-gray-400 text-sm mb-1">美国时段</div>
                      <div className="text-2xl font-bold text-orange-500">58.7%</div>
                      <div className="text-gray-500 text-xs">波动较大</div>
                    </div>
                    <div className="text-center">
                      <div className="text-gray-400 text-sm mb-1">交叉时段</div>
                      <div className="text-2xl font-bold text-blue-500">69.2%</div>
                      <div className="text-gray-500 text-xs">机会较多</div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">
                    <strong>AI建议：</strong>您在亚洲时段（北京时间9:00-15:00）的交易表现最佳，建议继续保持。欧美交叉时段（20:00-24:00）也有不错的机会，但需注意控制风险。
                  </p>
                </div>
              </div>

              {/* 交易策略分析报告 */}
              <div>
                <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                  <Target className="text-green-500" size={20} />
                  交易策略分析报告
                </h4>
                <div className="bg-gray-900 rounded-lg p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-300">趋势跟踪策略</span>
                    </div>
                    <div className="text-right">
                      <span className="text-green-500 font-medium">表现优秀</span>
                      <p className="text-gray-500 text-xs">近期胜率 75.8%</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span className="text-gray-300">区间震荡策略</span>
                    </div>
                    <div className="text-right">
                      <span className="text-yellow-500 font-medium">需要调整</span>
                      <p className="text-gray-500 text-xs">近期胜率 52.3%</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="text-gray-300">高频剥头皮</span>
                    </div>
                    <div className="text-right">
                      <span className="text-red-500 font-medium">建议暂停</span>
                      <p className="text-gray-500 text-xs">近期胜率 41.2%</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 今日重点关注 */}
              <div>
                <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                  <AlertCircle className="text-yellow-500" size={20} />
                  今日重点关注
                </h4>
                <div className="bg-gray-900 rounded-lg p-4 space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-500">•</span>
                    <p className="text-gray-300 text-sm">14:00 欧洲央行利率决议，预计维持当前利率水平</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-500">•</span>
                    <p className="text-gray-300 text-sm">20:30 美国初请失业金人数，关注就业市场变化</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-500">•</span>
                    <p className="text-gray-300 text-sm">EURUSD接近关键阻力位1.0900，注意潜在回调风险</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 右侧快速数据 */}
          <div className="space-y-4">
            <div className="bg-gray-800 rounded-lg p-4">
              <h4 className="text-white font-medium mb-3">今日交易统计</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">交易次数</span>
                  <span className="text-white font-medium">12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">获利交易</span>
                  <span className="text-green-500 font-medium">8</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">亏损交易</span>
                  <span className="text-red-500 font-medium">4</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">今日胜率</span>
                  <span className="text-white font-medium">66.7%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">净盈亏</span>
                  <span className="text-green-500 font-medium">+$486</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-4">
              <h4 className="text-white font-medium mb-3">AI交易建议</h4>
              <div className="space-y-3">
                <div className="bg-green-900 bg-opacity-20 border border-green-700 rounded p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <ArrowUpRight className="text-green-500" size={16} />
                    <span className="text-green-500 font-medium">买入机会</span>
                  </div>
                  <p className="text-gray-300 text-sm">EURUSD @ 1.0862</p>
                  <p className="text-gray-400 text-xs">目标: 1.0920 止损: 1.0840</p>
                </div>
                <div className="bg-red-900 bg-opacity-20 border border-red-700 rounded p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <ArrowDownRight className="text-red-500" size={16} />
                    <span className="text-red-500 font-medium">卖出机会</span>
                  </div>
                  <p className="text-gray-300 text-sm">GBPUSD @ 1.2534</p>
                  <p className="text-gray-400 text-xs">目标: 1.2480 止损: 1.2560</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {tradeTab === 'alerts' && (
        <div className="grid grid-cols-2 gap-6">
          {/* 异常交易提醒 */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <AlertTriangle className="text-red-500" size={24} />
              异常交易提醒
            </h3>
            <div className="space-y-4">
              <div className="bg-red-900 bg-opacity-20 border border-red-700 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="text-red-500 mt-1" size={20} />
                  <div className="flex-1">
                    <h4 className="text-red-500 font-medium mb-1">高频交易警告</h4>
                    <p className="text-gray-300 text-sm mb-2">您在过去1小时内进行了15笔交易，远超正常频率</p>
                    <div className="flex items-center gap-4 text-xs">
                      <span className="text-gray-400">账户：AvaTrade (8003000045)</span>
                      <span className="text-gray-400">时间：14:32</span>
                    </div>
                    <div className="mt-3 flex gap-2">
                      <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm transition-colors">
                        查看详情
                      </button>
                      <button className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded text-sm transition-colors">
                        忽略
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-900 bg-opacity-20 border border-yellow-700 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="text-yellow-500 mt-1" size={20} />
                  <div className="flex-1">
                    <h4 className="text-yellow-500 font-medium mb-1">仓位过大提醒</h4>
                    <p className="text-gray-300 text-sm mb-2">EURUSD仓位占用资金超过账户余额的30%</p>
                    <div className="flex items-center gap-4 text-xs">
                      <span className="text-gray-400">账户：IC Markets (8003000046)</span>
                      <span className="text-gray-400">时间：13:15</span>
                    </div>
                    <div className="mt-3">
                      <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-1 rounded text-sm transition-colors">
                        调整仓位
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-900 bg-opacity-20 border border-blue-700 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Info className="text-blue-500 mt-1" size={20} />
                  <div className="flex-1">
                    <h4 className="text-blue-500 font-medium mb-1">连续亏损提醒</h4>
                    <p className="text-gray-300 text-sm mb-2">检测到连续5笔亏损交易，建议暂停交易冷静分析</p>
                    <div className="flex items-center gap-4 text-xs">
                      <span className="text-gray-400">账户：XM Trading (8003000047)</span>
                      <span className="text-gray-400">时间：11:45</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 交易环境/速度监控 */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <Activity className="text-blue-500" size={24} />
              交易环境监控
            </h3>
            
            <div className="space-y-4">
              {accounts.map((account) => (
                <div key={account.id} className="bg-gray-900 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="text-white font-medium">{account.broker}</h4>
                      <p className="text-gray-400 text-sm">{account.platform} • {account.serverLocation}</p>
                    </div>
                    <div className="text-right">
                      <div className={`text-lg font-medium ${parseFloat(account.latency) < 1 ? 'text-green-500' : parseFloat(account.latency) < 2 ? 'text-yellow-500' : 'text-red-500'}`}>
                        {account.latency}
                      </div>
                      <div className="text-gray-500 text-xs">延迟</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-800 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-300 ${
                          parseFloat(account.latency) < 1 ? 'bg-green-500' : 
                          parseFloat(account.latency) < 2 ? 'bg-yellow-500' : 
                          'bg-red-500'
                        }`}
                        style={{width: `${Math.min(100, (1 / parseFloat(account.latency)) * 100)}%`}}
                      ></div>
                    </div>
                    <span className={`text-xs ${parseFloat(account.latency) < 1 ? 'text-green-500' : parseFloat(account.latency) < 2 ? 'text-yellow-500' : 'text-red-500'}`}>
                      {parseFloat(account.latency) < 1 ? '优秀' : parseFloat(account.latency) < 2 ? '良好' : '需优化'}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 bg-gray-900 rounded-lg p-3">
              <p className="text-gray-300 text-sm">
                <strong className="text-white">优化建议：</strong>
                XM Trading连接延迟较高，建议切换到更近的服务器或联系客服优化网络路由。
              </p>
            </div>
          </div>
        </div>
      )}

      {tradeTab === 'performance' && (
        <div className="grid grid-cols-3 gap-6">
          {/* 交易表现概览 */}
          <div className="col-span-2 bg-gray-800 rounded-lg p-6">
            <h3 className="text-white font-bold text-lg mb-6">交易表现分析</h3>
            
            {/* 模拟收益曲线 */}
            <div className="bg-gray-900 rounded-lg p-4 mb-6">
              <h4 className="text-white font-medium mb-4">收益曲线</h4>
              <div className="h-48 relative">
                <div className="absolute inset-0 flex items-end justify-around">
                  {[45, 52, 48, 55, 58, 62, 59, 65, 68, 72, 70, 75].map((height, i) => (
                    <div key={i} className="w-8 bg-gradient-to-t from-blue-600 to-blue-400 opacity-80 rounded-t" style={{height: `${height}%`}}>
                      <div className="text-xs text-gray-400 text-center mt-2">{i + 1}月</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 详细统计 */}
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-gray-900 rounded-lg p-4 text-center">
                <PieChart className="text-blue-500 mx-auto mb-2" size={32} />
                <div className="text-2xl font-bold text-white">68.8%</div>
                <div className="text-gray-400 text-sm">总体胜率</div>
              </div>
              <div className="bg-gray-900 rounded-lg p-4 text-center">
                <TrendingUp className="text-green-500 mx-auto mb-2" size={32} />
                <div className="text-2xl font-bold text-green-500">2.35</div>
                <div className="text-gray-400 text-sm">盈亏比</div>
              </div>
              <div className="bg-gray-900 rounded-lg p-4 text-center">
                <Award className="text-yellow-500 mx-auto mb-2" size={32} />
                <div className="text-2xl font-bold text-white">12.5%</div>
                <div className="text-gray-400 text-sm">月均收益</div>
              </div>
              <div className="bg-gray-900 rounded-lg p-4 text-center">
                <TrendingDown className="text-red-500 mx-auto mb-2" size={32} />
                <div className="text-2xl font-bold text-red-500">-8.3%</div>
                <div className="text-gray-400 text-sm">最大回撤</div>
              </div>
            </div>
          </div>

          {/* 最佳/最差交易 */}
          <div className="space-y-4">
            <div className="bg-gray-800 rounded-lg p-4">
              <h4 className="text-white font-medium mb-3">最佳交易</h4>
              <div className="space-y-3">
                <div className="bg-green-900 bg-opacity-20 rounded p-3">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-white font-medium">XAUUSD</span>
                    <span className="text-green-500 font-medium">+$856</span>
                  </div>
                  <p className="text-gray-400 text-xs">买入 @ 2015.50</p>
                  <p className="text-gray-400 text-xs">2025-01-18 14:32</p>
                </div>
                <div className="bg-green-900 bg-opacity-20 rounded p-3">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-white font-medium">EURUSD</span>
                    <span className="text-green-500 font-medium">+$523</span>
                  </div>
                  <p className="text-gray-400 text-xs">买入 @ 1.0825</p>
                  <p className="text-gray-400 text-xs">2025-01-19 09:15</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-4">
              <h4 className="text-white font-medium mb-3">最差交易</h4>
              <div className="space-y-3">
                <div className="bg-red-900 bg-opacity-20 rounded p-3">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-white font-medium">GBPUSD</span>
                    <span className="text-red-500 font-medium">-$412</span>
                  </div>
                  <p className="text-gray-400 text-xs">卖出 @ 1.2615</p>
                  <p className="text-gray-400 text-xs">2025-01-17 20:45</p>
                </div>
                <div className="bg-red-900 bg-opacity-20 rounded p-3">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-white font-medium">USDJPY</span>
                    <span className="text-red-500 font-medium">-$287</span>
                  </div>
                  <p className="text-gray-400 text-xs">买入 @ 148.95</p>
                  <p className="text-gray-400 text-xs">2025-01-16 15:20</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {tradeTab === 'optimization' && (
        <div className="grid grid-cols-2 gap-6">
          {/* 策略优化建议 */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <Target className="text-purple-500" size={24} />
              策略优化建议
            </h3>
            
            <div className="space-y-4">
              <div className="bg-gray-900 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-white font-medium">趋势跟踪优化</h4>
                  <span className="bg-green-500 bg-opacity-20 text-green-500 px-2 py-1 rounded text-xs">推荐</span>
                </div>
                <p className="text-gray-300 text-sm mb-3">
                  您的趋势跟踪策略表现优秀，建议增加仓位比例至账户的3-5%，同时设置追踪止损以锁定利润。
                </p>
                <div className="flex gap-2">
                  <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm transition-colors">
                    应用建议
                  </button>
                  <button className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded text-sm transition-colors">
                    查看详情
                  </button>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-white font-medium">风险管理优化</h4>
                  <span className="bg-yellow-500 bg-opacity-20 text-yellow-500 px-2 py-1 rounded text-xs">重要</span>
                </div>
                <p className="text-gray-300 text-sm mb-3">
                  检测到部分交易未设置止损，建议所有交易都设置止损，将单笔风险控制在账户余额的1-2%。
                </p>
                <div className="flex gap-2">
                  <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-1 rounded text-sm transition-colors">
                    立即设置
                  </button>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-white font-medium">交易时段调整</h4>
                  <span className="bg-blue-500 bg-opacity-20 text-blue-500 px-2 py-1 rounded text-xs">建议</span>
                </div>
                <p className="text-gray-300 text-sm mb-3">
                  您在美国时段的胜率偏低(58.7%)，建议减少该时段的交易频率，或使用更保守的策略。
                </p>
                <div className="flex gap-2">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm transition-colors">
                    调整计划
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* EA使用建议 */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <Bot className="text-blue-500" size={24} />
              EA使用建议
            </h3>
            
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-lg p-4">
                <h4 className="text-white font-medium mb-2">推荐EA策略</h4>
                <p className="text-blue-200 text-sm mb-3">
                  基于您的交易风格和历史表现，AI推荐以下EA策略：
                </p>
                <div className="space-y-2">
                  <div className="bg-black bg-opacity-30 rounded p-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <h5 className="text-white font-medium">黄金趋势猎手 Pro</h5>
                        <p className="text-gray-400 text-xs">适合您的趋势跟踪风格</p>
                      </div>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm transition-colors">
                        查看
                      </button>
                    </div>
                  </div>
                  <div className="bg-black bg-opacity-30 rounded p-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <h5 className="text-white font-medium">智能网格交易系统</h5>
                        <p className="text-gray-400 text-xs">震荡市场自动获利</p>
                      </div>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm transition-colors">
                        查看
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg p-4">
                <h4 className="text-white font-medium mb-2">当前EA表现</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">活跃EA数量</span>
                    <span className="text-white">2个</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">EA总收益</span>
                    <span className="text-green-500">+$1,245</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">EA胜率</span>
                    <span className="text-white">71.3%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  // 远程桌面
  const renderRemoteDesktop = () => (
    <div className="h-full flex">
      {/* 主要内容区 - MT4界面 */}
      <div className="flex-1 bg-black relative">
        {/* 远程桌面工具栏 */}
        <div className="bg-gray-800 p-2 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-gray-300 text-sm">远程连接 - VPS Standard (106.75.6.118)</span>
            <span className="text-green-500 text-sm flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              已连接
            </span>
          </div>
          <div className="flex gap-2">
            <button className="text-gray-400 hover:text-white p-1 transition-colors">
              <Upload size={18} />
            </button>
            <button className="text-gray-400 hover:text-white p-1 transition-colors">
              <Download size={18} />
            </button>
            <button className="text-gray-400 hover:text-white p-1 transition-colors">
              <Copy size={18} />
            </button>
            <button className="text-gray-400 hover:text-white p-1 transition-colors">
              <Maximize2 size={18} />
            </button>
            <button className="text-gray-400 hover:text-white p-1 transition-colors">
              <RefreshCw size={18} />
            </button>
            <button className="text-red-500 hover:text-red-400 p-1 transition-colors" onClick={() => setActiveTab('overview')}>
              <X size={18} />
            </button>
          </div>
        </div>

        {/* MT4 界面模拟 */}
        <div className="h-full bg-gray-950 relative flex items-center justify-center">
          {/* WikiFXDefense 标识 */}
          <div className="absolute top-4 left-4 bg-yellow-500 text-black px-4 py-2 rounded font-bold z-20 animate-pulse">
            WikiFXDefense
          </div>

          {/* WikiFXDefense 弹窗 */}
          <div className="bg-purple-600 text-white rounded-lg p-8 shadow-2xl z-10 animate-pulse">
            <div className="font-bold text-2xl mb-3">WikiFXDefense</div>
            <div className="mb-2 text-lg">状态：绑定成功！</div>
            <div className="text-sm text-purple-200">
              请勿关闭窗口，请勿在设置窗口加载其它EA！
            </div>
          </div>

          {/* 模拟的MT4背景 */}
          <div className="absolute inset-0 opacity-20">
            <div className="h-full flex">
              <div className="w-64 bg-gray-800 border-r border-gray-700"></div>
              <div className="flex-1 bg-black"></div>
            </div>
          </div>
        </div>
      </div>

      {/* 右侧 AI 助手 v2.0 */}
      <div className="w-96 bg-gray-900 border-l border-gray-800 flex flex-col">
        <div className="p-4 border-b border-gray-800">
          <h3 className="text-white font-bold text-lg flex items-center gap-2">
            <Bot className="text-purple-500" size={24} />
            WikiFX AI 助手 v2.0
          </h3>
        </div>
        
        {/* AI功能切换 */}
        <div className="flex gap-1 p-2 bg-gray-800">
          <button
            onClick={() => setAiAssistantMode('daily-market')}
            className={`flex-1 py-2 px-3 rounded text-sm ${aiAssistantMode === 'daily-market' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white'} transition-all`}
          >
            每日行情
          </button>
          <button
            onClick={() => setAiAssistantMode('daily-news')}
            className={`flex-1 py-2 px-3 rounded text-sm ${aiAssistantMode === 'daily-news' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white'} transition-all`}
          >
            新闻晨报
          </button>
          <button
            onClick={() => setAiAssistantMode('user-data')}
            className={`flex-1 py-2 px-3 rounded text-sm ${aiAssistantMode === 'user-data' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white'} transition-all`}
          >
            数据分析
          </button>
        </div>
        
        <div className="flex-1 overflow-auto p-4">
          <div className="space-y-4">
            {aiMessages.map((msg, idx) => (
              <div key={idx} className={`${msg.type === 'user' ? 'text-right' : ''}`}>
                <div className={`inline-block max-w-[90%] rounded-lg p-3 ${
                  msg.type === 'user' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-800 text-gray-200 border border-gray-700'
                }`}>
                  <div className="text-sm whitespace-pre-line">{msg.content}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="p-4 border-t border-gray-800">
          <div className="flex gap-2 mb-3">
            <button 
              onClick={() => {
                setAiAssistantMode('daily-market');
                setAiInput('分析今日行情');
                sendAiMessage();
              }}
              className="flex-1 bg-gray-800 hover:bg-gray-700 text-gray-300 py-2 rounded text-sm transition-colors"
            >
              今日行情分析
            </button>
            <button 
              onClick={() => {
                setAiAssistantMode('user-data');
                setAiInput('分析我的交易数据');
                sendAiMessage();
              }}
              className="flex-1 bg-gray-800 hover:bg-gray-700 text-gray-300 py-2 rounded text-sm transition-colors"
            >
              交易数据分析
            </button>
          </div>
          <div className="flex gap-2">
            <input 
              type="text" 
              value={aiInput}
              onChange={(e) => setAiInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendAiMessage()}
              placeholder="输入您的问题..."
              className="flex-1 bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-blue-500"
            />
            <button 
              onClick={sendAiMessage}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // 其他页面保持原有内容...
  const renderTradingQuery = () => (
    <div className="h-full bg-gray-900 p-6">
      <div className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-6">交易商查询</h2>
        <div className="mb-6">
          <div className="relative">
            <input 
              type="text" 
              placeholder="请输入交易商名称进行查询"
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 pr-12"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded">
              <Search size={20} />
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 cursor-pointer transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img src="/api/placeholder/60/60" alt="Broker" className="w-12 h-12 rounded" />
                <div>
                  <h4 className="text-white font-medium">AvaTrade</h4>
                  <p className="text-gray-400 text-sm">爱尔兰知名外汇交易商</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-green-500 font-bold text-lg">8.52</div>
                <div className="text-gray-400 text-sm">天眼评分</div>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 cursor-pointer transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img src="/api/placeholder/60/60" alt="Broker" className="w-12 h-12 rounded" />
                <div>
                  <h4 className="text-white font-medium">IC Markets</h4>
                  <p className="text-gray-400 text-sm">澳大利亚领先ECN交易商</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-green-500 font-bold text-lg">9.21</div>
                <div className="text-gray-400 text-sm">天眼评分</div>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 cursor-pointer transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img src="/api/placeholder/60/60" alt="Broker" className="w-12 h-12 rounded" />
                <div>
                  <h4 className="text-white font-medium">XM Trading</h4>
                  <p className="text-gray-400 text-sm">全球知名外汇交易平台</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-green-500 font-bold text-lg">8.86</div>
                <div className="text-gray-400 text-sm">天眼评分</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMarketData = () => (
    <div className="h-full bg-gray-900 p-6">
      <div className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-6">实时行情数据</h2>
        
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-gray-700 rounded-lg p-4">
            <div className="text-gray-400 text-sm mb-2">EURUSD</div>
            <div className="text-2xl font-bold text-green-500">1.0862</div>
            <div className="text-green-500 text-sm">+0.15%</div>
          </div>
          <div className="bg-gray-700 rounded-lg p-4">
            <div className="text-gray-400 text-sm mb-2">GBPUSD</div>
            <div className="text-2xl font-bold text-red-500">1.2534</div>
            <div className="text-red-500 text-sm">-0.08%</div>
          </div>
          <div className="bg-gray-700 rounded-lg p-4">
            <div className="text-gray-400 text-sm mb-2">USDJPY</div>
            <div className="text-2xl font-bold text-green-500">148.23</div>
            <div className="text-green-500 text-sm">+0.22%</div>
          </div>
          <div className="bg-gray-700 rounded-lg p-4">
            <div className="text-gray-400 text-sm mb-2">XAUUSD</div>
            <div className="text-2xl font-bold text-green-500">2042.15</div>
            <div className="text-green-500 text-sm">+0.45%</div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-gray-400 text-sm border-b border-gray-700">
                <th className="text-left py-3">品种</th>
                <th className="text-right py-3">买价</th>
                <th className="text-right py-3">卖价</th>
                <th className="text-right py-3">点差</th>
                <th className="text-right py-3">涨跌幅</th>
                <th className="text-right py-3">最高</th>
                <th className="text-right py-3">最低</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-white border-b border-gray-700/50">
                <td className="py-4">EURUSD</td>
                <td className="text-right py-4">1.0860</td>
                <td className="text-right py-4">1.0862</td>
                <td className="text-right py-4">0.2</td>
                <td className="text-right py-4 text-green-500">+0.15%</td>
                <td className="text-right py-4">1.0875</td>
                <td className="text-right py-4">1.0845</td>
              </tr>
              <tr className="text-white border-b border-gray-700/50">
                <td className="py-4">GBPUSD</td>
                <td className="text-right py-4">1.2532</td>
                <td className="text-right py-4">1.2534</td>
                <td className="text-right py-4">0.2</td>
                <td className="text-right py-4 text-red-500">-0.08%</td>
                <td className="text-right py-4">1.2548</td>
                <td className="text-right py-4">1.2520</td>
              </tr>
              <tr className="text-white border-b border-gray-700/50">
                <td className="py-4">USDJPY</td>
                <td className="text-right py-4">148.21</td>
                <td className="text-right py-4">148.23</td>
                <td className="text-right py-4">0.2</td>
                <td className="text-right py-4 text-green-500">+0.22%</td>
                <td className="text-right py-4">148.35</td>
                <td className="text-right py-4">147.95</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderEAMarket = () => (
    <div className="h-full bg-gray-900 p-6">
      <div className="bg-gray-800 rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-white">EA商城</h2>
          <div className="flex gap-2">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">全部</button>
            <button className="bg-gray-700 text-gray-300 px-4 py-2 rounded hover:bg-gray-600">趋势型</button>
            <button className="bg-gray-700 text-gray-300 px-4 py-2 rounded hover:bg-gray-600">震荡型</button>
            <button className="bg-gray-700 text-gray-300 px-4 py-2 rounded hover:bg-gray-600">网格型</button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="bg-gray-700 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all cursor-pointer">
            <div className="bg-gradient-to-r from-green-600 to-green-700 p-4">
              <h4 className="text-white font-bold text-lg mb-2">黄金趋势猎手</h4>
              <p className="text-green-200 text-sm">专注黄金趋势交易，稳定盈利</p>
            </div>
            <div className="p-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">月均收益</span>
                <span className="text-green-500 font-bold">+15.8%</span>
              </div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">最大回撤</span>
                <span className="text-white">8.2%</span>
              </div>
              <div className="flex justify-between text-sm mb-4">
                <span className="text-gray-400">使用人数</span>
                <span className="text-white">1,234</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-white">¥299</span>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                  立即购买
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all cursor-pointer">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4">
              <h4 className="text-white font-bold text-lg mb-2">震荡收割机</h4>
              <p className="text-blue-200 text-sm">震荡市场稳定获利神器</p>
            </div>
            <div className="p-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">月均收益</span>
                <span className="text-green-500 font-bold">+8.5%</span>
              </div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">最大回撤</span>
                <span className="text-white">4.1%</span>
              </div>
              <div className="flex justify-between text-sm mb-4">
                <span className="text-gray-400">使用人数</span>
                <span className="text-white">856</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-white">¥199</span>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                  立即购买
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all cursor-pointer">
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-4">
              <h4 className="text-white font-bold text-lg mb-2">智能网格交易</h4>
              <p className="text-purple-200 text-sm">AI优化网格策略，适应各种行情</p>
            </div>
            <div className="p-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">月均收益</span>
                <span className="text-green-500 font-bold">+12.3%</span>
              </div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">最大回撤</span>
                <span className="text-white">6.5%</span>
              </div>
              <div className="flex justify-between text-sm mb-4">
                <span className="text-gray-400">使用人数</span>
                <span className="text-white">2,156</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-white">¥399</span>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                  立即购买
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderHelpCenter = () => (
    <div className="h-full bg-gray-900 p-6">
      <div className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-6">帮助中心</h2>
        
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 cursor-pointer transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-blue-600 p-3 rounded-lg">
                <FileText className="text-white" size={24} />
              </div>
              <h3 className="text-white font-medium text-lg">使用文档</h3>
            </div>
            <p className="text-gray-400 text-sm">详细的VPS使用说明和操作指南</p>
          </div>

          <div className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 cursor-pointer transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-green-600 p-3 rounded-lg">
                <Bot className="text-white" size={24} />
              </div>
              <h3 className="text-white font-medium text-lg">AI助手</h3>
            </div>
            <p className="text-gray-400 text-sm">智能问答，快速解决您的问题</p>
          </div>

          <div className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 cursor-pointer transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-purple-600 p-3 rounded-lg">
                <Phone className="text-white" size={24} />
              </div>
              <h3 className="text-white font-medium text-lg">在线客服</h3>
            </div>
            <p className="text-gray-400 text-sm">7×24小时专业客服支持</p>
          </div>

          <div className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 cursor-pointer transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-orange-600 p-3 rounded-lg">
                <HelpCircle className="text-white" size={24} />
              </div>
              <h3 className="text-white font-medium text-lg">常见问题</h3>
            </div>
            <p className="text-gray-400 text-sm">快速查看常见问题解答</p>
          </div>
        </div>

        <div className="bg-gray-700 rounded-lg p-4">
          <h3 className="text-white font-medium mb-4">热门问题</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 hover:bg-gray-600 rounded cursor-pointer">
              <span className="text-gray-300">如何连接VPS？</span>
              <ChevronRight className="text-gray-400" size={20} />
            </div>
            <div className="flex items-center justify-between p-3 hover:bg-gray-600 rounded cursor-pointer">
              <span className="text-gray-300">如何安装EA？</span>
              <ChevronRight className="text-gray-400" size={20} />
            </div>
            <div className="flex items-center justify-between p-3 hover:bg-gray-600 rounded cursor-pointer">
              <span className="text-gray-300">VPS无法连接怎么办？</span>
              <ChevronRight className="text-gray-400" size={20} />
            </div>
            <div className="flex items-center justify-between p-3 hover:bg-gray-600 rounded cursor-pointer">
              <span className="text-gray-300">如何续费VPS？</span>
              <ChevronRight className="text-gray-400" size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch(activeTab) {
      case 'overview':
        return renderOverview();
      case 'remote':
        return renderRemoteDesktop();
      case 'risk':
        return renderRiskManagement();
      case 'trade':
        return renderTradeManagement();
      case 'trading':
        return renderTradingQuery();
      case 'market':
        return renderMarketData();
      case 'ea':
        return renderEAMarket();
      case 'help':
        return renderHelpCenter();
      default:
        return renderOverview();
    }
  };

  const renderSidebarStatus = () => {
    switch(activeTab) {
      case 'overview':
        return (
          <div className="p-4 space-y-4">
            <div className="bg-gray-800 rounded-lg p-4">
              <h4 className="text-white font-medium mb-3 text-sm">实时安全检测</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">防火墙保护</span>
                  <span className="text-green-500 text-sm">● 已启动</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">SSL加密</span>
                  <span className="text-green-500 text-sm">● 已启动</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">系统更新</span>
                  <span className="text-green-500 text-sm">● 最新版本</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">交易监控</span>
                  <span className="text-green-500 text-sm">● 已启动</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">环境监控</span>
                  <span className="text-green-500 text-sm">● 已启动</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">AI智能提醒</span>
                  <span className="text-green-500 text-sm">● 已开启</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">天眼盾</span>
                  <span className="text-red-500 text-sm">● 未开启</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-4">
              <h4 className="text-white font-medium mb-3 text-sm">安全建议</h4>
              <div className="bg-gray-700 rounded p-3">
                <p className="text-gray-300 text-xs mb-3">
                  检测到您尚未开启天眼盾保护，建议立即开启以保障交易安全。
                </p>
                <button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-2 rounded text-sm transition-all">
                  立即开启天眼盾
                </button>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  // 通知模态框
  const NotificationModal = () => (
    <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ${showNotificationModal ? '' : 'hidden'}`}>
      <div className="bg-gray-800 rounded-lg p-6 max-w-md w-full mx-4 max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-white">通知中心</h3>
          <button onClick={() => setShowNotificationModal(false)} className="text-gray-400 hover:text-white">
            <X size={24} />
          </button>
        </div>
        <div className="space-y-3">
          {notifications.length === 0 ? (
            <p className="text-gray-400 text-center py-8">暂无通知</p>
          ) : (
            notifications.map(notif => (
              <div key={notif.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  {notif.type === 'success' && <CheckCircle className="text-green-500" size={20} />}
                  {notif.type === 'warning' && <AlertTriangle className="text-yellow-500" size={20} />}
                  {notif.type === 'error' && <XCircle className="text-red-500" size={20} />}
                  <div className="flex-1">
                    <h4 className="text-white font-medium">{notif.title}</h4>
                    <p className="text-gray-400 text-sm mt-1">{notif.message}</p>
                    <p className="text-gray-500 text-xs mt-2">{notif.time}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );

  // 续费模态框
  const RenewalModal = () => (
    <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ${showRenewalModal ? '' : 'hidden'}`}>
      <div className="bg-gray-800 rounded-lg p-6 max-w-lg w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-white">VPS续费</h3>
          <button onClick={() => setShowRenewalModal(false)} className="text-gray-400 hover:text-white">
            <X size={24} />
          </button>
        </div>
        
        <div className="bg-gray-700 rounded-lg p-4 mb-6">
          <div className="flex justify-between mb-2">
            <span className="text-gray-400">当前套餐</span>
            <span className="text-white font-medium">VPS Standard</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-400">到期时间</span>
            <span className="text-white font-medium">2025-01-27</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">月费用</span>
            <span className="text-blue-500 font-medium">¥299/月</span>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-white font-medium mb-3">选择续费时长</h4>
          <div className="grid grid-cols-3 gap-3">
            <label className="cursor-pointer">
              <input type="radio" name="duration" value="1" className="hidden peer" />
              <div className="bg-gray-700 border-2 border-gray-600 rounded-lg p-3 text-center hover:border-blue-500 transition-colors peer-checked:border-blue-500">
                <div className="text-white font-medium">1个月</div>
                <div className="text-blue-500 text-sm">¥299</div>
              </div>
            </label>
            <label className="cursor-pointer">
              <input type="radio" name="duration" value="3" className="hidden peer" defaultChecked />
              <div className="bg-gray-700 border-2 border-gray-600 rounded-lg p-3 text-center hover:border-blue-500 transition-colors peer-checked:border-blue-500 peer-checked:bg-gray-600">
                <div className="text-white font-medium">3个月</div>
                <div className="text-blue-500 text-sm">¥897</div>
                <div className="text-green-500 text-xs">推荐</div>
              </div>
            </label>
            <label className="cursor-pointer">
              <input type="radio" name="duration" value="12" className="hidden peer" />
              <div className="bg-gray-700 border-2 border-gray-600 rounded-lg p-3 text-center hover:border-blue-500 transition-colors peer-checked:border-blue-500">
                <div className="text-white font-medium">12个月</div>
                <div className="text-blue-500 text-sm">¥3,588</div>
                <div className="text-green-500 text-xs">省¥300</div>
              </div>
            </label>
          </div>
        </div>

        <div className="flex gap-3">
          <button onClick={() => setShowRenewalModal(false)} className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded transition-colors">
            取消
          </button>
          <button onClick={() => {
            setShowRenewalModal(false);
            setShowRenewalReminder(false);
            addNotification('success', '续费成功', 'VPS服务已续费3个月');
          }} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition-colors">
            确认续费
          </button>
        </div>
      </div>
    </div>
  );

  // 如果未登录，显示登录页面
  if (!isLoggedIn) {
    return (
      <>
        <style>{animationStyles}</style>
        {renderLoginPage()}
      </>
    );
  }

  // 主界面
  return (
    <>
      <style>{animationStyles}</style>
      <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col">
      {/* 续费提醒 */}
      {showRenewalReminder && (
        <div className="bg-gradient-to-r from-red-600 to-red-700 px-6 py-3 flex items-center justify-between" style={{animation: 'slideDown 0.5s ease-out'}}>
          <div className="flex items-center gap-3">
            <AlertCircle className="text-white animate-pulse" size={20} />
            <span className="text-white">您的VPS将在7天后到期，请及时续费以避免服务中断</span>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setShowRenewalModal(true)}
              className="bg-white text-red-600 px-4 py-1.5 rounded font-medium hover:bg-gray-100 transition-colors"
            >
              立即续费
            </button>
            <button 
              onClick={() => setShowRenewalReminder(false)}
              className="text-white hover:text-gray-200"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-1">
        {/* 左侧导航栏 */}
        <div className="w-48 bg-gray-900 border-r border-gray-800 flex flex-col">
          <div className="p-4">
            <h1 className="text-xl font-bold text-white">WikiFX VPS</h1>
          </div>
          
          <nav className="flex-1 px-3">
            <div className="mb-6">
              <div className="text-gray-500 text-xs uppercase tracking-wider mb-3 px-2">主要功能</div>
              <button
                onClick={() => setActiveTab('overview')}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all text-sm ${
                  activeTab === 'overview' 
                    ? 'bg-gray-800 text-white' 
                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <Home size={18} />
                <span>概览仪表盘</span>
              </button>
              <button
                onClick={() => setActiveTab('remote')}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all text-sm ${
                  activeTab === 'remote' 
                    ? 'bg-gray-800 text-white' 
                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <Monitor size={18} />
                <span>远程连接</span>
              </button>
              <button
                onClick={() => setActiveTab('risk')}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all text-sm relative ${
                  activeTab === 'risk' 
                    ? 'bg-gray-800 text-white' 
                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <Shield size={18} />
                <span>风险管理中心</span>
                <span className="absolute right-3 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">3</span>
              </button>
              <button
                onClick={() => setActiveTab('trade')}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all text-sm ${
                  activeTab === 'trade' 
                    ? 'bg-gray-800 text-white' 
                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <TrendingUp size={18} />
                <span>交易管理中心</span>
              </button>
            </div>
            
            <div>
              <div className="text-gray-500 text-xs uppercase tracking-wider mb-3 px-2">WikiFX相关</div>
              <button
                onClick={() => setActiveTab('trading')}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all text-sm ${
                  activeTab === 'trading' 
                    ? 'bg-gray-800 text-white' 
                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <Search size={18} />
                <span>交易商查询</span>
              </button>
              <button
                onClick={() => setActiveTab('market')}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all text-sm ${
                  activeTab === 'market' 
                    ? 'bg-gray-800 text-white' 
                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <BarChart3 size={18} />
                <span>行情数据</span>
              </button>
              <button
                onClick={() => setActiveTab('ea')}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all text-sm ${
                  activeTab === 'ea' 
                    ? 'bg-gray-800 text-white' 
                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <ShoppingCart size={18} />
                <span>EA商城</span>
              </button>
              <button
                onClick={() => setActiveTab('help')}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all text-sm ${
                  activeTab === 'help' 
                    ? 'bg-gray-800 text-white' 
                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <HelpCircle size={18} />
                <span>帮助中心</span>
              </button>
            </div>
          </nav>
        </div>

        {/* 主内容区 */}
        <div className="flex-1 flex flex-col">
          {/* 顶部栏 */}
          <div className="bg-gray-900 border-b border-gray-800 px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-white font-medium">
                {activeTab === 'overview' && '概览仪表盘'}
                {activeTab === 'remote' && '远程连接'}
                {activeTab === 'risk' && '风险管理中心 v2.0'}
                {activeTab === 'trade' && '交易管理中心 v2.0'}
                {activeTab === 'trading' && '交易商查询'}
                {activeTab === 'market' && '行情数据'}
                {activeTab === 'ea' && 'EA商城'}
                {activeTab === 'help' && '帮助中心'}
              </span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gray-400 text-sm">{loginForm.username}</span>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setShowNotificationModal(true)}
                className="relative p-2 hover:bg-gray-800 rounded transition-colors"
              >
                <Bell size={20} className="text-gray-400" />
                {notifications.length > 0 && (
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                )}
              </button>
              <button
                onClick={() => {
                  if(confirm('确定要退出登录吗？')) {
                    setIsLoggedIn(false);
                    setLoginForm({ username: '', password: '' });
                    setShowRenewalReminder(false);
                  }
                }}
                className="flex items-center gap-2 px-3 py-1.5 hover:bg-gray-800 rounded transition-colors text-gray-400 hover:text-white"
              >
                <LogOut size={16} />
                <span className="text-sm">退出</span>
              </button>
            </div>
          </div>

          {/* 页面内容区 */}
          <div className="flex-1 flex">
            <div className={`flex-1 ${activeTab === 'remote' ? '' : 'p-6'} overflow-auto`}>
              {renderContent()}
            </div>

            {/* 右侧状态栏 - 只在概览页显示 */}
            {activeTab === 'overview' && (
              <div className="w-80 bg-gray-900 border-l border-gray-800">
                <div className="p-4 border-b border-gray-800">
                  <h3 className="text-white font-medium">实时安全检测</h3>
                  <p className="text-green-500 text-sm mt-1">8.9/10</p>
                </div>
                {renderSidebarStatus()}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 模态框 */}
      <NotificationModal />
      <RenewalModal />
    </div>
    </>
  );
};

export default WikiFXVPS;
