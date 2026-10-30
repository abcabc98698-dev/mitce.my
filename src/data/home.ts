import type { HeroStat, SectionHeading } from '../types';

/** Copy for the homepage hero */
export const hero = {
  eyebrow: '2026 跨境网络实测天梯榜 · 主推光速云',
  headline: [
    { text: '专线实测，', tint: false },
    { text: '看晚高峰，', tint: false },
    { text: '不看虚标，', tint: true },
    { text: '稳在每一秒。', tint: true },
  ],
  lead: 'MITCE指南深度收录 42 家主流机场一手评测数据。首推光速云（IEPL+自研客户端+年付8元起+147永久套餐），涵盖微风网络、暮光加速等专线梯队，提供全平台客户端下载与订阅配置教程。',
  primaryCta: { label: '主推·光速云领券直达', href: 'https://sahude.gsyvipaff.com/#/?code=keqgvT5Y' },
  secondaryCta: { label: '查阅 42 家天梯大盘', href: '/brands' },
  image: '/images/ai-agency-hero.webp',
  credentials: [
    { icon: 'clock', label: '2020 稳定老牌' },
    { icon: 'shield-check', label: 'IEPL / IPLC 物理专线' },
    { icon: 'bars', label: '晚高峰 0% 丢包率基线' },
  ] as const,
};

export const heroStats: HeroStat[] = [
  { value: '42 家', label: '主流跨境机场深度收录与持续核验' },
  { value: '¥8 起', label: '光速云等核心专线年付入门月均价' },
  { value: '147 永久', label: '斯诺克不过期大流量经典套餐' },
  { value: '6 大平台', label: 'Win/iOS/安卓/Mac/软路由客户端覆盖' },
];

export const clients = {
  label: '评测覆盖头部品牌',
  names: ['光速云 (主推)', '微风网络', '暮光加速', '飞猫云', '星岛梦', '二猫云', '唯兔云', 'Firefly'],
};

export const sections: Record<
  'solutions' | 'platform' | 'process' | 'work' | 'sectors' | 'testimonial' | 'team' | 'pricing' | 'insights' | 'faq' | 'contact',
  SectionHeading
> = {
  solutions: {
    kicker: '选型维度',
    title: '五大专线指标。一份严谨标准。',
    lead: '拒绝虚假千兆宣传。从物理专线出口、原生IP洁净度、晚高峰抗拥堵、全协议支持到免配置客户端，提供全方位可信赖的选型参考。',
  },
  platform: {
    kicker: '专线架构解析',
    title: '为长效稳定而生，<br>绝非普通中转。',
    lead: '点对点企业级内网穿透（IEPL/IPLC），绕过公网拥堵与国际出口限制。无论晚高峰跨国追剧还是海外大模型交互，始终保持低延迟无感直连。',
  },
  process: {
    kicker: '新手三步上手',
    title: '三分钟从小白<br>到高速直连。',
    lead: '选型明确、配置极简。告别复杂的规则编写与报错调试，轻松畅享全球互联网自由。',
  },
  work: {
    kicker: '实机测速报告',
    title: '晚高峰实测数据，<br>不靠口头承诺。',
    lead: '所有测速均在 20:30–22:30 晚高峰黄金时段实机采样，记录真实丢包率、TLS 握手延迟与 4K 缓冲表现。',
  },
  sectors: {
    kicker: '业务赋能场景',
    title: '高风控与大流量业务的坚实底座',
    lead: '无论是跨境电商出海、海外 AI 生产力协同，还是 4K 影音与学术科研，原生洁净 IP 护航每一项关键业务。',
  },
  testimonial: { kicker: '真实用户声音', title: '' },
  team: {
    kicker: '评测实验室',
    title: '客观·中立·独立维护',
    lead: '由专业网络工程师与出海开发者共同维护，坚持实机复核、标注数据来源，不收录劣质跑路盘。',
  },
  pricing: {
    kicker: '核心推荐方案',
    title: '按需选购，丰俭由人',
    lead: '涵盖月付灵活档、年付特惠档与独家永久不限时包。明码标价，无隐藏倍率套路。',
  },
  insights: {
    kicker: '避坑指南',
    title: '网络前沿评测与选型干货',
    lead: '解析协议演进、辨析专线真伪、传授客户端高阶分流技巧，助您少走弯路。',
  },
  faq: {
    kicker: '常见答疑',
    title: '购买与使用前<br>必看避坑指南',
    lead: '汇总新手最常遇到的退款政策、节点超时、客户端报错与流媒体解锁问题。',
  },
  contact: {
    kicker: '联系实验室',
    title: '提交机场测评<br>或数据纠错',
    lead: '如果您是机场服务商或出海用户，欢迎向我们提交最新线路动态或测速反馈，我们会在核实后更新大盘。',
  },
};

export const platformImage = {
  src: '/images/platform-operations-lead.webp',
  alt: '网络工程师在监控多地区专线出口节点稳定性',
  tag: 'IEPL 晚高峰 0 丢包',
};

export const finalCta = {
  kicker: '2026 跨境网络首选推荐',
  title: '告别断流卡顿。立即体验光速云 IEPL 专线。',
  lead: '输入独家优惠码 AMM 享即时减免。特设致敬斯诺克 147 永久套餐，一次付费 247GB 永不过期。',
};

export const contactForm = {
  workflows: [
    '机场品牌测速数据纠错',
    '新机场品牌收录评测申请',
    '客户端教程优化建议',
    '商务合作与咨询',
    '其他反馈',
  ],
  submitLabel: '提交反馈信息',
  note: '人工审核每一条反馈，确保大盘数据真实可信。',
};

export const newsletter = {
  title: '订阅网络评测速递',
  description: '每月一期：新测速结果、跑路风险预警与高性价比专线特惠。绝无垃圾广告。',
  submitLabel: '免费订阅',
};
