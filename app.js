// State Management for Sovereign Financial AI Agent Platform
const state = {
  lang: 'ar',
  institutionName: 'المؤسسة المالية الكبرى',
  agentName: 'الوكيل السيادي الذكي (Sovereign AI)',
  aumBillions: 142.85,
  liquidityBillions: 28.40,
  alphaPercent: 18.64,
  riskScore: 99.4,
  voiceActive: false,
  allocations: [
    { name: 'السندات والصكوك السيادية (AAA)', pct: 34, color: 'bg-amber-500' },
    { name: 'الأسهم القيادية وصناديق الذكاء الاصطناعي', pct: 29, color: 'bg-emerald-500' },
    { name: 'الائتمان المؤسسي وتمويل الشركات الكبرى', pct: 22, color: 'bg-cyan-500' },
    { name: 'الذهب والاحتياطي الاستراتيجي والسلع', pct: 15, color: 'bg-blue-500' }
  ],
  subAgents: [
    {
      id: 'wealth',
      name: 'وكيل إدارة الثروات والأصول السيادية',
      role: 'Sovereign Wealth & Asset Allocation Agent',
      icon: 'fa-vault',
      color: 'amber',
      autonomy: 'تنفيذي شبه مستقل',
      status: 'نشط • يراقب 14 سوقاً عالمياً',
      metricLabel: 'العائد المحقق هذا الربع',
      metricValue: '+$4.12B',
      lastAction: 'إعادة توازن محفظة السندات السيادية لرفع العائد بـ 45 نقطة أساس.'
    },
    {
      id: 'risk',
      name: 'وكيل المخاطر والامتثال المالي (AML/Basel III)',
      role: 'Enterprise Risk & Regulatory Compliance Agent',
      icon: 'fa-shield-halved',
      color: 'emerald',
      autonomy: 'حماية تلقائية كاملة',
      status: 'نشط • 0 خروقات مسجلة',
      metricLabel: 'العمليات المفحوصة لحظياً',
      metricValue: '1.42M / يوم',
      lastAction: 'اجتياز اختبار الضغط السيادي (Stress Test) بنجاح بنسبة أمان 99.4%.'
    },
    {
      id: 'quant',
      name: 'وكيل التداول الكمي والخزانة المركزية',
      role: 'Quantitative Treasury & Liquidity Agent',
      icon: 'fa-chart-candlestick',
      color: 'cyan',
      autonomy: 'تنفيذي عالي السرعة',
      status: 'نشط • زمن استجابة 12ms',
      metricLabel: 'كفاءة السيولة اللحظية',
      metricValue: '98.9%',
      lastAction: 'تحوط تلقائي على عقود العملات الأجنبية (USD/EUR/SAR) لحماية الخزانة.'
    },
    {
      id: 'credit',
      name: 'وكيل الائتمان وصفقات الاستحواذ (M&A)',
      role: 'Corporate Credit & M&A Structuring Agent',
      icon: 'fa-handshake-angle',
      color: 'blue',
      autonomy: 'استشاري لمجلس الإدارة',
      status: 'نشط • يحلل 6 صفقات كبرى',
      metricLabel: 'محفظة التمويل المؤسسي',
      metricValue: '$31.4B',
      lastAction: 'إعداد نموذج التقييم المالي لصفقة استحواذ قطاع التكنولوجيا المالية.'
    }
  ],
  approvals: [
    {
      id: 'TX-9941',
      title: 'إعادة هيكلة محفظة السندات السيادية والذهب',
      department: 'وكيل إدارة الثروات والخزانة',
      amount: '$1,250,000,000',
      impact: '+$68M عائد سنوي إضافي متوقع',
      risk: 'منخفض جداً (AAA)',
      status: 'pending',
      time: 'منذ 8 دقائق'
    },
    {
      id: 'TX-9942',
      title: 'تمويل استحواذ مؤسسي في قطاع البنية التحتية الرقمية',
      department: 'وكيل الائتمان وصفقات M&A',
      amount: '$450,000,000',
      impact: 'معدل عائد داخلي (IRR) متوقع 21.4%',
      risk: 'متوسط - مغطى بضمانات أصول',
      status: 'pending',
      time: 'منذ 24 دقيقة'
    },
    {
      id: 'TX-9943',
      title: 'تفعيل عقد تحوط عملات وفائدة (Interest Rate Swap)',
      department: 'وكيل المخاطر والامتثال المالي',
      amount: '$820,000,000',
      impact: 'تخفيض مخاطر تقلب الفائدة بنسبة 64%',
      risk: 'تحوط وقائي (Basel III)',
      status: 'pending',
      time: 'منذ 45 دقيقة'
    }
  ],
  telemetry: [
    { time: 'الآن', agent: 'QUANT-AI', text: 'فحص سيولة الخزانة المركزية: الفائض المتاح $28.4B', type: 'emerald' },
    { time: 'منذ 2 د', agent: 'RISK-AI', text: 'تحديث مصفوفة الائتمان لـ 240 شركة مقترضة — لا توجد تعثرات', type: 'cyan' },
    { time: 'منذ 5 د', agent: 'WEALTH-AI', text: 'رصد فرصة عائد مرتفع في الصكوك السيادية الخليجية (+5.6%)', type: 'amber' },
    { time: 'منذ 11 د', agent: 'COMPLIANCE', text: 'تأكيد الامتثال الكامل لمعايير مكافحة غسل الأموال الدولية', type: 'blue' }
  ]
};

// Initialize Market Ticker
function renderTicker() {
  const items = [
    { sym: 'GOLD / XAU', val: '$2,748.40', chg: '+1.24%', up: true },
    { sym: 'S&P 500', val: '5,985.20', chg: '+0.68%', up: true },
    { sym: 'TASI / تداول', val: '12,418.90', chg: '+0.92%', up: true },
    { sym: 'US 10Y TREASURY', val: '4.18%', chg: '-0.05%', up: false },
    { sym: 'BRENT CRUDE', val: '$78.65', chg: '+1.40%', up: true },
    { sym: 'SOVEREIGN AI INDEX', val: '1,842.10', chg: '+3.15%', up: true },
    { sym: 'USD / SAR', val: '3.7502', chg: '0.00%', up: true },
    { sym: 'EUR / USD', val: '1.0894', chg: '+0.21%', up: true }
  ];

  const html = [...items, ...items].map(item => `
    <div class="flex items-center gap-2 shrink-0">
      <span class="font-bold text-slate-300 font-mono">${item.sym}</span>
      <span class="text-white font-mono">${item.val}</span>
      <span class="px-1.5 py-0.5 rounded text-[10px] font-bold font-mono ${item.up ? 'bg-emerald-500/15 text-emerald-400' : 'bg-rose-500/15 text-rose-400'}">
        ${item.chg}
      </span>
    </div>
  `).join('');

  document.getElementById('market-ticker').innerHTML = html;
}

// Render Allocation Bars
function renderAllocations() {
  const container = document.getElementById('allocation-bars');
  container.innerHTML = state.allocations.map(item => `
    <div>
      <div class="flex justify-between text-xs mb-1">
        <span class="text-slate-300 font-medium">${item.name}</span>
        <span class="text-white font-bold font-mono">${item.pct}%</span>
      </div>
      <div class="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-white/5">
        <div class="${item.color} h-full rounded-full transition-all duration-700" style="width: ${item.pct}%"></div>
      </div>
    </div>
  `).join('');
}

// Render Live Telemetry
function renderTelemetry() {
  const container = document.getElementById('live-telemetry-feed');
  const badgeMap = {
    emerald: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    amber: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
    cyan: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30',
    blue: 'bg-blue-500/15 text-blue-400 border-blue-500/30'
  };

  container.innerHTML = state.telemetry.map(log => `
    <div class="p-3 rounded-xl bg-slate-900/75 border border-white/5 flex items-start gap-2.5 text-xs">
      <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold border shrink-0 ${badgeMap[log.type] || badgeMap.amber}">
        ${log.agent}
      </span>
      <div class="flex-1">
        <p class="text-slate-200 leading-relaxed">${log.text}</p>
        <span class="text-[10px] text-slate-500">${log.time}</span>
      </div>
    </div>
  `).join('');
}

// Render Sub-Agents Swarm
function renderSwarm() {
  const grid = document.getElementById('swarm-grid');
  const colorClasses = {
    amber: 'from-amber-500/20 to-slate-900/90 border-amber-500/30 text-amber-400',
    emerald: 'from-emerald-500/20 to-slate-900/90 border-emerald-500/30 text-emerald-400',
    cyan: 'from-cyan-500/20 to-slate-900/90 border-cyan-500/30 text-cyan-400',
    blue: 'from-blue-500/20 to-slate-900/90 border-blue-500/30 text-blue-400'
  };

  grid.innerHTML = state.subAgents.map(ag => `
    <div class="glass-panel rounded-2xl p-5 border border-white/10 flex flex-col justify-between gap-4 hover:border-amber-500/40 transition">
      <div>
        <div class="flex items-start justify-between gap-3">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-2xl bg-gradient-to-br ${colorClasses[ag.color]} border flex items-center justify-center text-lg">
              <i class="fa-solid ${ag.icon}"></i>
            </div>
            <div>
              <h3 class="text-sm font-extrabold text-white">${ag.name}</h3>
              <p class="text-[11px] text-slate-400 font-mono">${ag.role}</p>
            </div>
          </div>
          <span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
            ${ag.status}
          </span>
        </div>

        <div class="mt-4 p-3 rounded-xl bg-slate-950/70 border border-white/5 text-xs text-slate-300">
          <span class="text-slate-400 block text-[10px] mb-1">آخر عملية للوكيل:</span>
          ${ag.lastAction}
        </div>
      </div>

      <div class="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
        <div>
          <span class="text-[10px] text-slate-400 block">${ag.metricLabel}</span>
          <span class="text-sm font-black text-white font-mono">${ag.metricValue}</span>
        </div>
        <div class="flex items-center gap-2">
          <button onclick="triggerSubAgentTask('${ag.id}')" class="px-3 py-1.5 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/30 text-xs font-bold transition">
            <i class="fa-solid fa-play ml-1"></i>تشغيل مهمة فورية
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Render Executive Approvals
function renderApprovals() {
  const list = document.getElementById('approvals-list');
  const pendingCount = state.approvals.filter(a => a.status === 'pending').length;
  const badge = document.getElementById('pending-badge');
  badge.textContent = pendingCount;
  badge.style.display = pendingCount > 0 ? 'inline-block' : 'none';

  list.innerHTML = state.approvals.map(item => {
    const isPending = item.status === 'pending';
    const isApproved = item.status === 'approved';
    return `
      <div class="p-5 rounded-2xl bg-slate-900/85 border ${isPending ? 'border-amber-500/30' : isApproved ? 'border-emerald-500/30' : 'border-rose-500/30'} flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div class="space-y-1.5">
          <div class="flex flex-wrap items-center gap-2">
            <span class="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-amber-400 border border-white/10">${item.id}</span>
            <h3 class="text-sm font-extrabold text-white">${item.title}</h3>
            <span class="text-[11px] text-slate-400">• ${item.time}</span>
          </div>
          <p class="text-xs text-slate-300">
            <strong class="text-slate-400">الجهة الموصية:</strong> ${item.department} &nbsp;|&nbsp;
            <strong class="text-slate-400">الأثر المالي:</strong> <span class="text-emerald-400 font-semibold">${item.impact}</span> &nbsp;|&nbsp;
            <strong class="text-slate-400">المخاطر:</strong> ${item.risk}
          </p>
        </div>

        <div class="flex items-center gap-3 self-end md:self-center shrink-0">
          <div class="text-left ml-2">
            <span class="text-[10px] text-slate-400 block">حجم العملية</span>
            <span class="text-base font-black text-amber-400 font-mono">${item.amount}</span>
          </div>

          ${isPending ? `
            <button onclick="decideApproval('${item.id}', 'approved')" class="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs transition flex items-center gap-1.5">
              <i class="fa-solid fa-check"></i> اعتماد وتنفيذ
            </button>
            <button onclick="decideApproval('${item.id}', 'rejected')" class="px-3 py-2 rounded-xl bg-rose-500/15 hover:bg-rose-500/25 text-rose-300 border border-rose-500/30 font-bold text-xs transition">
              رفض
            </button>
          ` : `
            <span class="px-3 py-1.5 rounded-xl text-xs font-extrabold ${isApproved ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'}">
              ${isApproved ? '✓ تم الاعتماد والتنفيذ' : '✕ تم الرفض'}
            </span>
          `}
        </div>
      </div>
    `;
  }).join('');
}

// Chat System
function appendMessage(sender, htmlContent, meta = '') {
  const container = document.getElementById('chat-messages');
  const isAgent = sender === 'agent';

  const wrapper = document.createElement('div');
  wrapper.className = `flex items-start gap-3 ${isAgent ? '' : 'flex-row-reverse'}`;

  wrapper.innerHTML = `
    <div class="w-9 h-9 rounded-xl shrink-0 flex items-center justify-center border ${
      isAgent
        ? 'bg-gradient-to-br from-amber-500/20 to-emerald-500/20 border-amber-500/40 text-amber-400'
        : 'bg-slate-800 border-white/10 text-slate-200'
    }">
      <i class="fa-solid ${isAgent ? 'fa-robot' : 'fa-user-tie'} text-sm"></i>
    </div>
    <div class="max-w-[85%] rounded-2xl p-4 text-xs leading-relaxed ${
      isAgent
        ? 'bg-slate-900/95 border border-white/10 text-slate-200 shadow-lg'
        : 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold'
    }">
      ${isAgent && meta ? `<div class="text-[10px] font-mono text-amber-400 mb-1.5 flex items-center justify-between"><span>${meta}</span><span>CONFIDENCE: 99.2%</span></div>` : ''}
      <div class="space-y-2">${htmlContent}</div>
    </div>
  `;

  container.appendChild(wrapper);
  container.scrollTop = container.scrollHeight;
}

// Initial Executive Welcome Message
function initWelcomeChat() {
  const container = document.getElementById('chat-messages');
  container.innerHTML = '';
  appendMessage(
    'agent',
    `
      <p class="text-sm font-bold text-white">مرحباً بك سعادة الرئيس في مركز قيادة <span class="text-amber-400">${state.institutionName}</span>.</p>
      <p>أنا <strong>${state.agentName}</strong>، أعمل حالياً على مراقبة الأصول البالغة <strong>$${state.aumBillions} مليار دولار</strong> وإدارة شبكة الوكلاء الأربعة (الثروات، المخاطر، التداول الكمي، والائتمان المؤسسي).</p>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2">
        <div class="p-2.5 rounded-xl bg-slate-950/80 border border-white/5">
          <span class="text-[10px] text-slate-400 block">حالة السيولة</span>
          <span class="text-xs font-extrabold text-emerald-400">فائض آمن ($28.4B)</span>
        </div>
        <div class="p-2.5 rounded-xl bg-slate-950/80 border border-white/5">
          <span class="text-[10px] text-slate-400 block">فرص استثمارية جاهزة</span>
          <span class="text-xs font-extrabold text-amber-400">3 صفقات بانتظار توقيعك</span>
        </div>
        <div class="p-2.5 rounded-xl bg-slate-950/80 border border-white/5">
          <span class="text-[10px] text-slate-400 block">مخاطر الائتمان</span>
          <span class="text-xs font-extrabold text-cyan-400">تحت السيطرة (AAA)</span>
        </div>
      </div>
      <p class="text-[11px] text-slate-400 pt-1">يمكنك كتابة أي توجيه مالي أو استثماري بالأسفل، أو اختيار أحد الأوامر التنفيذية السريعة.</p>
    `,
    'SOVEREIGN EXECUTIVE BRIEFING • LIVE'
  );
}

// Preset & Intelligent Responses
function generateAgentResponse(query, presetType = null) {
  const q = query.toLowerCase();

  if (presetType === 'portfolio' || q.includes('محفظ') || q.includes('أصول') || q.includes('توزيع')) {
    return {
      meta: 'WEALTH & ASSET ALLOCATION AGENT • REPORT',
      html: `
        <p class="font-bold text-amber-400 text-sm">📊 تقرير التحليل الكمي وتوزيع الأصول السيادية:</p>
        <p>بناءً على بيانات الفائدة الحالية وحركة السيولة العالمية، قام الوكيل الذكي بمراجعة أداء المحفظة البالغة <strong>$${state.aumBillions}B</strong>:</p>
        <div class="overflow-x-auto my-2">
          <table class="w-full text-right border-collapse text-[11px]">
            <thead>
              <tr class="border-b border-white/10 text-slate-400">
                <th class="py-1.5">فئة الأصل</th>
                <th class="py-1.5">الوزن الحالي</th>
                <th class="py-1.5">الوزن الموصى به</th>
                <th class="py-1.5">العائد المتوقع</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-white/5">
              <tr><td class="py-1.5 font-bold">السندات والصكوك السيادية</td><td>34%</td><td class="text-emerald-400 font-bold">36% (+2%)</td><td>+6.4%</td></tr>
              <tr><td class="py-1.5 font-bold">الأسهم القيادية والذكاء الاصطناعي</td><td>29%</td><td class="text-amber-400 font-bold">28% (-1%)</td><td>+24.2%</td></tr>
              <tr><td class="py-1.5 font-bold">الائتمان المؤسسي والخاص</td><td>22%</td><td>20% (-2%)</td><td>+14.8%</td></tr>
              <tr><td class="py-1.5 font-bold">الذهب والاحتياطي الاستراتيجي</td><td>15%</td><td class="text-emerald-400 font-bold">16% (+1%)</td><td>+11.5%</td></tr>
            </tbody>
          </table>
        </div>
        <div class="flex items-center gap-2 pt-2">
          <button onclick="applyAgentRebalance()" class="px-3 py-1.5 rounded-lg bg-emerald-500 text-slate-950 font-extrabold text-[11px]">اعتماد إعادة التوازن الآن</button>
          <button onclick="switchTab('simulator')" class="px-3 py-1.5 rounded-lg bg-white/10 text-white text-[11px]">فتح المحاكي الكمي</button>
        </div>
      `
    };
  }

  if (presetType === 'acquisition' || q.includes('استحواذ') || q.includes('صفق') || q.includes('450')) {
    return {
      meta: 'CORPORATE CREDIT & M&A AGENT • VALUATION',
      html: `
        <p class="font-bold text-amber-400 text-sm">🏦 مذكرة تقييم صفقة الاستحواذ المؤسسي ($450M):</p>
        <p>أكمل وكيل الصفقات (M&A Agent) الفحص النافي للجهالة (Due Diligence) لصفقة البنية التحتية المالية الرقمية:</p>
        <ul class="list-disc list-inside space-y-1 text-slate-300">
          <li><strong>التقييم العادل (DCF Valuation):</strong> $515M (خصم سعري لصالح مؤسستنا بنسبة 12.6%).</li>
          <li><strong>معدل العائد الداخلي المتوقع (IRR):</strong> <span class="text-emerald-400 font-bold">21.4% سنوياً</span> خلال 5 سنوات.</li>
          <li><strong>التدفقات النقدية الحرة (EBITDA):</strong> $64M سنوياً بنمو 19%.</li>
          <li><strong>توصية الوكيل:</strong> هيكلة الصفقة عبر 60% سيولة ذاتية من الخزانة و40% صكوك مؤسسية.</li>
        </ul>
        <div class="pt-2">
          <button onclick="switchTab('approvals')" class="px-3 py-1.5 rounded-lg bg-amber-500 text-slate-950 font-extrabold text-[11px]">الانتقال إلى شاشة التوقيع والاعتماد ←</button>
        </div>
      `
    };
  }

  if (presetType === 'risk' || q.includes('مخاطر') || q.includes('سيول') || q.includes('امتثال')) {
    return {
      meta: 'RISK & BASEL-III COMPLIANCE AGENT • AUDIT',
      html: `
        <p class="font-bold text-emerald-400 text-sm">🛡️ تقرير الفحص اللحظي للمخاطر والسيولة (Basel III Stress Test):</p>
        <p>تم إجراء اختبار ضغط يحاكي هبوط الأسواق العالمية بنسبة 20% وتذبذب أسعار الفائدة بـ 150 نقطة أساس:</p>
        <div class="grid grid-cols-2 gap-2 my-2">
          <div class="p-2.5 rounded-xl bg-slate-950 border border-white/10">
            <span class="text-[10px] text-slate-400 block">نسبة تغطية السيولة (LCR)</span>
            <span class="text-sm font-black text-emerald-400">184.2% (الحد الأدنى 100%)</span>
          </div>
          <div class="p-2.5 rounded-xl bg-slate-950 border border-white/10">
            <span class="text-[10px] text-slate-400 block">كفاية رأس المال (CET1)</span>
            <span class="text-sm font-black text-amber-400">19.8% (تصنيف سيادي AAA)</span>
          </div>
        </div>
        <p class="text-slate-300">النتيجة: <strong>المؤسسة المالية محصّنة بالكامل</strong> ولا توجد أي انكشافات ائتمانية خطرة.</p>
      `
    };
  }

  if (presetType === 'gold' || q.includes('ذهب') || q.includes('سندات')) {
    return {
      meta: 'QUANT TREASURY AGENT • MACRO STRATEGY',
      html: `
        <p class="font-bold text-amber-400 text-sm">🪙 استراتيجية الذهب والاحتياطي السيادي للربع القادم:</p>
        <p>تشير نماذج التنبؤ الكمي (AI Macro Models) إلى استمرار زخم الطلب من البنوك المركزية العالمية على الذهب:</p>
        <ul class="list-disc list-inside space-y-1 text-slate-300">
          <li><strong>السعر المستهدف للذهب (خلال 90 يوماً):</strong> $2,860 - $2,920 للأونصة.</li>
          <li><strong>المركز الحالي للمؤسسة:</strong> $21.4B سبائك وعقود مغطاة.</li>
          <li><strong>الإجراء المقترح:</strong> تعزيز مراكز الذهب بنسبة +1.5% مع جني أرباح جزئي من الأسهم عالية التذبذب.</li>
        </ul>
      `
    };
  }

  // Custom Intelligent Response for any user prompt
  return {
    meta: 'CORE FINANCIAL AI AGENT • CUSTOM ANALYSIS',
    html: `
      <p class="font-bold text-amber-400 text-sm">تم استلام توجيهك التنفيذي وتحليله عبر محرك المؤسسة المالية:</p>
      <p class="text-slate-200">"${query}"</p>
      <div class="p-3 rounded-xl bg-slate-950/90 border border-white/10 space-y-1.5 my-2">
        <div class="flex justify-between text-[11px]"><span class="text-slate-400">حالة التنفيذ:</span><span class="text-emerald-400 font-bold">تمت المحاكاة والتدقيق عبر 4 وكلاء</span></div>
        <div class="flex justify-between text-[11px]"><span class="text-slate-400">الأثر المتوقع على العائد (Alpha):</span><span class="text-amber-400 font-bold">+1.45% سنوياً</span></div>
        <div class="flex justify-between text-[11px]"><span class="text-slate-400">تقييم المخاطر والامتثال:</span><span class="text-cyan-400 font-bold">متوافق 100% مع السياسات السيادية</span></div>
      </div>
      <p>هل ترغب بإدراج هذا القرار ضمن سجل الموافقات التنفيذية للتنفيذ الفوري في الخزانة؟</p>
      <div class="pt-1 flex gap-2">
        <button onclick="createCustomApproval('${query.replace(/'/g, '')}')" class="px-3 py-1.5 rounded-lg bg-amber-500 text-slate-950 font-extrabold text-[11px]">إدراج في سجل الموافقات التنفيذية</button>
      </div>
    `
  };
}

function handleChatSubmit(e) {
  e.preventDefault();
  const input = document.getElementById('chat-input');
  const text = input.value.trim();
  if (!text) return;

  input.value = '';
  appendMessage('user', text);
  triggerAgentReply(text, null);
}

function sendQuickPrompt(type) {
  const labels = {
    portfolio: 'قم بتحليل المحفظة السيادية وتوزيع الأصول للربع القادم مع التوصيات.',
    acquisition: 'اعرض تقييم صفقة الاستحواذ المؤسسي بقيمة 450 مليون دولار والعائد المتوقع.',
    risk: 'نفذ فحص مخاطر وسيولة شامل (Stress Test) وفق معايير بازل 3.',
    gold: 'ما هي استراتيجية الوكيل الذكي للذهب والسندات السيادية خلال الفترة القادمة؟'
  };
  switchTab('command');
  appendMessage('user', labels[type]);
  triggerAgentReply(labels[type], type);
}

function triggerAgentReply(query, presetType) {
  const thinkingEl = document.getElementById('ai-thinking');
  thinkingEl.classList.remove('hidden');

  setTimeout(() => {
    thinkingEl.classList.add('hidden');
    const resp = generateAgentResponse(query, presetType);
    appendMessage('agent', resp.html, resp.meta);
  }, 650);
}

// Create Custom Approval from Chat
function createCustomApproval(titleText) {
  const newId = 'TX-' + Math.floor(1000 + Math.random() * 9000);
  state.approvals.unshift({
    id: newId,
    title: titleText.slice(0, 85),
    department: 'الوكيل التنفيذي المركزي (Core AI)',
    amount: '$250,000,000',
    impact: '+1.45% تحسين في كفاءة العائد السيادي',
    risk: 'منخفض (تم فحصه آلياً)',
    status: 'pending',
    time: 'الآن'
  });
  renderApprovals();
  showToast('تم إدراج القرار في سجل الموافقات التنفيذية بنجاح', 'amber');
  switchTab('approvals');
}

// Rebalance Action
function applyAgentRebalance() {
  state.allocations = [
    { name: 'السندات والصكوك السيادية (AAA)', pct: 36, color: 'bg-amber-500' },
    { name: 'الأسهم القيادية وصناديق الذكاء الاصطناعي', pct: 28, color: 'bg-emerald-500' },
    { name: 'الائتمان المؤسسي وتمويل الشركات الكبرى', pct: 20, color: 'bg-cyan-500' },
    { name: 'الذهب والاحتياطي الاستراتيجي والسلع', pct: 16, color: 'bg-blue-500' }
  ];
  state.alphaPercent = +(state.alphaPercent + 0.42).toFixed(2);
  document.getElementById('kpi-alpha').textContent = `+${state.alphaPercent}%`;
  renderAllocations();

  state.telemetry.unshift({
    time: 'الآن',
    agent: 'WEALTH-AI',
    text: 'تم تنفيذ إعادة التوازن الذكي للمحفظة السيادية ورفع حصة الذهب والسندات',
    type: 'emerald'
  });
  renderTelemetry();
  showToast('تم تطبيق إعادة توازن المحفظة السيادية بنجاح (+42 نقطة أساس)', 'emerald');
}

// Run Autonomous Scan Cycle
function runAutonomousCycle() {
  state.aumBillions = +(state.aumBillions + 0.35).toFixed(2);
  document.getElementById('kpi-aum').textContent = `$${state.aumBillions}B`;

  state.telemetry.unshift({
    time: 'الآن',
    agent: 'CORE-AI',
    text: `اكتمال الفحص الذكي الشامل: تحديث تقييم الأصول إلى $${state.aumBillions}B وتأكيد أمان الخزانة`,
    type: 'amber'
  });
  renderTelemetry();
  showToast('اكتمل الفحص السيادي الذكي لكافة محافظ المؤسسة', 'emerald');
}

// Sub-Agent Instant Task
function triggerSubAgentTask(agentId) {
  const ag = state.subAgents.find(a => a.id === agentId);
  if (!ag) return;

  ag.lastAction = `تم تنفيذ دورة تدقيق وتحسين فورية بنجاح (${new Date().toLocaleTimeString('ar-EG')}).`;
  renderSwarm();
  showToast(`قام "${ag.name}" بتنفيذ المهمة بنجاح`, 'emerald');
}

function deployNewSubAgentModal() {
  const newName = prompt('أدخل اسم الوكيل المالي الفرعي الجديد (مثال: وكيل الصناديق العقارية والعالمية):', 'وكيل الاستثمار العقاري والصناديق السيادية');
  if (!newName) return;

  state.subAgents.push({
    id: 'custom-' + Date.now(),
    name: newName,
    role: 'Specialized Institutional AI Sub-Agent',
    icon: 'fa-building-shield',
    color: 'amber',
    autonomy: 'تنفيذي ذكي',
    status: 'نشط • تم التفعيل للتو',
    metricLabel: 'الميزانية المخصصة',
    metricValue: '$8.5B',
    lastAction: 'بدء مسح الفرص الاستثمارية وربط البيانات مع الخزانة المركزية.'
  });
  renderSwarm();
  showToast(`تم تفعيل "${newName}" وربطه بالمنظومة`, 'amber');
}

// Simulator Calculations
function updateSimulation() {
  const capital = Number(document.getElementById('sim-capital').value);
  const risk = Number(document.getElementById('sim-risk').value);
  const years = Number(document.getElementById('sim-years').value);
  const scenario = document.getElementById('sim-scenario').value;

  document.getElementById('sim-capital-val').textContent = capital >= 1000 ? `$${(capital / 1000).toFixed(2)}B` : `$${capital}M`;

  const riskLabels = {
    1: 'متحفظ سيادي (Conservative)',
    2: 'متحفظ متوازن (Low-Mid)',
    3: 'متوازن سيادي (Moderate)',
    4: 'نمو مؤسسي (Growth)',
    5: 'نمو جريء وعالي العائد (Aggressive Alpha)'
  };
  document.getElementById('sim-risk-val').textContent = riskLabels[risk];
  document.getElementById('sim-years-val').textContent = `${years} سنوات`;

  const scenarioMultiplier = {
    baseline: 1.0,
    rate_cut: 1.22,
    inflation: 0.94,
    crisis: 0.72
  }[scenario] || 1.0;

  const baseCagr = (0.065 + risk * 0.022) * scenarioMultiplier;
  const finalAmount = capital * Math.pow(1 + baseCagr, years);
  const netProfit = finalAmount - capital;
  const varPct = -(1.8 + risk * 1.15 * (scenario === 'crisis' ? 1.5 : 1)).toFixed(1);
  const sharpe = (2.45 - risk * 0.12 + (scenario === 'rate_cut' ? 0.25 : 0)).toFixed(2);

  document.getElementById('sim-total-return').textContent = finalAmount >= 1000 ? `$${(finalAmount / 1000).toFixed(2)}B` : `$${finalAmount.toFixed(1)}M`;
  document.getElementById('sim-net-profit').textContent = netProfit >= 1000 ? `+$${(netProfit / 1000).toFixed(2)}B` : `+$${netProfit.toFixed(1)}M`;
  document.getElementById('sim-cagr').textContent = `عائد سنوي مركب: ${(baseCagr * 100).toFixed(1)}%`;
  document.getElementById('sim-var').textContent = `${varPct}%`;
  document.getElementById('sim-sharpe').textContent = `Sharpe: ${sharpe}`;

  // Render Yearly Chart Bars
  const chartContainer = document.getElementById('sim-chart-bars');
  let barsHtml = '';
  for (let y = 1; y <= years; y++) {
    const val = capital * Math.pow(1 + baseCagr, y);
    const heightPct = Math.min(100, Math.max(18, Math.round((val / finalAmount) * 100)));
    const label = val >= 1000 ? `$${(val / 1000).toFixed(1)}B` : `$${Math.round(val)}M`;
    barsHtml += `
      <div class="flex-1 flex flex-col items-center gap-1 h-full justify-end group">
        <span class="text-[9px] font-mono text-amber-300 opacity-85 group-hover:opacity-100">${label}</span>
        <div class="w-full rounded-t-lg bg-gradient-to-t from-amber-600/80 via-amber-500 to-emerald-400 transition-all duration-300" style="height: ${heightPct}%"></div>
        <span class="text-[10px] text-slate-400 font-mono">سنة ${y}</span>
      </div>
    `;
  }
  chartContainer.innerHTML = barsHtml;
}

function sendSimToAgent() {
  const cap = document.getElementById('sim-capital-val').textContent;
  const total = document.getElementById('sim-total-return').textContent;
  const years = document.getElementById('sim-years-val').textContent;

  switchTab('command');
  const msg = `اعتماد خطة استثمارية بقيمة ${cap} لمدة ${years} بعائد مستهدف يصل إلى ${total}.`;
  appendMessage('user', msg);
  triggerAgentReply(msg, 'portfolio');
  showToast('تم إرسال السيناريو الاستثماري إلى الوكيل الذكي للتنفيذ', 'emerald');
}

// Approvals Actions
function decideApproval(id, status) {
  const item = state.approvals.find(a => a.id === id);
  if (!item) return;
  item.status = status;
  renderApprovals();

  if (status === 'approved') {
    showToast(`تم اعتماد وتنفيذ العملية ${id} بنجاح عبر الخزانة`, 'emerald');
  } else {
    showToast(`تم رفض العملية ${id} وإشعار الوكيل المختص`, 'rose');
  }
}

function approveAllTransactions() {
  state.approvals.forEach(a => {
    if (a.status === 'pending') a.status = 'approved';
  });
  renderApprovals();
  showToast('تم اعتماد وتوقيع كافة العمليات التنفيذية المعلقة', 'emerald');
}

// Tabs Navigation
function switchTab(tabId) {
  document.querySelectorAll('.tab-view').forEach(el => el.classList.add('hidden'));
  document.getElementById(`view-${tabId}`).classList.remove('hidden');

  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.className = 'tab-btn px-3.5 py-2 rounded-lg text-xs font-bold transition flex items-center gap-2 text-slate-300 hover:text-white hover:bg-white/5';
  });
  const activeBtn = document.getElementById(`tab-btn-${tabId}`);
  if (activeBtn) {
    activeBtn.className = 'tab-btn active px-3.5 py-2 rounded-lg text-xs font-bold transition flex items-center gap-2 bg-amber-500 text-slate-950 shadow';
  }
}

// Customize Institution Branding Modal
function openBrandModal() {
  document.getElementById('brand-name-input').value = state.institutionName;
  document.getElementById('agent-name-input').value = state.agentName;
  const modal = document.getElementById('brand-modal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeBrandModal() {
  const modal = document.getElementById('brand-modal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

function saveBrandSettings() {
  const inst = document.getElementById('brand-name-input').value.trim();
  const ag = document.getElementById('agent-name-input').value.trim();
  if (inst) {
    state.institutionName = inst;
    document.getElementById('institution-name').textContent = inst;
  }
  if (ag) {
    state.agentName = ag;
  }
  closeBrandModal();
  initWelcomeChat();
  showToast('تم تحديث اسم المؤسسة المالية والوكيل الذكي بنجاح', 'amber');
}

// Voice Command Simulation
function toggleVoiceInput() {
  const btn = document.getElementById('voice-btn');
  state.voiceActive = !state.voiceActive;
  if (state.voiceActive) {
    btn.className = 'w-10 h-10 rounded-xl bg-rose-500 text-white flex items-center justify-center animate-pulse shrink-0';
    showToast('الاستماع الصوتي نشط... تحدث بأمرك المالي الآن', 'amber');
    setTimeout(() => {
      if (state.voiceActive) {
        toggleVoiceInput();
        const sampleVoice = 'يا وكيل المؤسسة، اعرض لي تقرير السيولة الفورية وأفضل فرصة استثمارية في الصكوك السيادية اليوم';
        document.getElementById('chat-input').value = sampleVoice;
      }
    }, 2200);
  } else {
    btn.className = 'w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-amber-400 transition shrink-0';
  }
}

function updateAgentMode() {
  const mode = document.getElementById('agent-mode').value;
  const names = {
    executive: 'الوضع التنفيذي الشامل',
    quant: 'وضع التحليل الكمي والاستثماري',
    risk: 'وضع الرقابة والمخاطر والائتمان',
    ma: 'وضع صفقات الاستحواذ والاندماج (M&A)'
  };
  showToast(`تم تحويل الوكيل الذكي إلى: ${names[mode]}`, 'amber');
}

function clearChat() {
  initWelcomeChat();
  showToast('تم تحديث جلسة المحادثة التنفيذية', 'amber');
}

// Bilingual Toggle (AR / EN)
function toggleLanguage() {
  const html = document.getElementById('html-root');
  const langBtn = document.getElementById('lang-btn');
  if (state.lang === 'ar') {
    state.lang = 'en';
    html.setAttribute('dir', 'ltr');
    html.setAttribute('lang', 'en');
    langBtn.textContent = 'عربي';
    document.getElementById('institution-name').textContent = state.institutionName === 'المؤسسة المالية الكبرى' ? 'Sovereign Financial Institution' : state.institutionName;
    showToast('Switched to English Executive Interface', 'amber');
  } else {
    state.lang = 'ar';
    html.setAttribute('dir', 'rtl');
    html.setAttribute('lang', 'ar');
    langBtn.textContent = 'EN';
    document.getElementById('institution-name').textContent = state.institutionName;
    showToast('تم التبديل إلى الواجهة العربية السيادية', 'amber');
  }
}

// Toast helper
function showToast(message, color = 'emerald') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  const borderClass = color === 'emerald' ? 'border-emerald-500/40 text-emerald-300' : color === 'rose' ? 'border-rose-500/40 text-rose-300' : 'border-amber-500/40 text-amber-300';

  toast.className = `glass-panel px-4 py-3 rounded-xl border ${borderClass} text-xs font-bold shadow-xl flex items-center gap-2.5 transition-all duration-300 pointer-events-auto`;
  toast.innerHTML = `<i class="fa-solid fa-circle-check"></i><span>${message}</span>`;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// Initialize Everything on DOM Load
document.addEventListener('DOMContentLoaded', () => {
  renderTicker();
  renderAllocations();
  renderTelemetry();
  renderSwarm();
  renderApprovals();
  initWelcomeChat();
  updateSimulation();
});
