import type { Customer } from '../types';

export const customers: Customer[] = [
  {
    company: '光速云 (主推第一)',
    title: '光速云 — 晚高峰 4K 影音与 AI 协同实测',
    sector: 'IEPL 综合专线',
    description:
      '2020 年至今稳定运营。采用 IEPL+企业内网专线双架构，香港节点延迟低至 22ms，单节点最高 2.5Gbps 带宽，全面解锁 ChatGPT、Claude 及 Netflix 4K 原创剧。',
    image: '/images/customer-fintech.webp',
    imageAlt: '光速云测速与节点运行大盘',
    metrics: [
      { value: '22ms', label: '香港近端延迟' },
      { value: '529Mbps', label: '晚高峰实测下载' },
    ],
    featured: true,
  },
  {
    company: '微风网络',
    title: '微风网络 — 7元平价 IEPL 跨境电商实测',
    sector: '入门高性价比',
    description:
      '月均 7 元的低门槛专线代表，VLESS 协议搭配原生 IP 节点，全面支持 TikTok 跨区直连、日常学术查阅与 7×24 小时客服值守。',
    image: '/images/customer-healthcare.webp',
    imageAlt: '微风网络节点实测',
    metrics: [
      { value: '¥7/月', label: '入门年付折算' },
      { value: '100%', label: '专线稳定性' },
    ],
  },
  {
    company: '暮光加速',
    title: '暮光加速 — 多设备 BGP 专线团队协作实测',
    sector: '多设备跨平台',
    description:
      'BGP 智能多线调度，专线级出口。全平台覆盖 Windows/Mac/iOS/Android/Linux，支持多端同时在线不掉线，适合工作室多设备协同。',
    image: '/images/customer-logistics.webp',
    imageAlt: '暮光加速多端协作',
    metrics: [
      { value: '多设备', label: '不限并发同时在线' },
      { value: '509Mbps', label: '香港下行测速' },
    ],
  },
];
