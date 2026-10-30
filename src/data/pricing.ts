import type { PricingPlan } from '../types';

export const pricingPlans: PricingPlan[] = [
  {
    name: '轻量年付尝鲜版',
    price: '¥8',
    billing: '起 / 月（年付¥99/年）',
    description:
      '折算后每月仅需 8 元左右，含每月 69GB 流量。原生稳定节点，支持全协议与不限设备在线，日常网页查阅与轻度影音首选。',
    features: [
      '光速云·轻量版（¥99/年，69GB/月）',
      '全线原生稳定节点，单节点最高2.5Gbps',
      '自研专属客户端免配置直连',
      '兼容 Clash、Shadowrocket 订阅导入',
      '支持微信 / 支付宝 / USDT 充值',
    ],
    cta: { label: '选购光速云轻量版', href: 'https://sahude.gsyvipaff.com/#/?code=keqgvT5Y' },
  },
  {
    name: '极速专线旗舰版',
    price: '¥25',
    billing: '/ 月（168GB/月）',
    description:
      '主推热门旗舰！全球 IEPL/IPLC 内网专线直连，全节点 ×1 倍率不掺水，晚高峰 0 丢包，4K 影音秒开与 AI 工具长期在线标配。',
    features: [
      '光速云·极速版（¥25/月，168GB/月）',
      '全节点 1 倍率，香港/日本/美/新/台原生节点',
      '单节点最高 2.5Gbps 超高冗余带宽',
      '支持 ChatGPT、Claude、Netflix 全解锁',
      '7×24 小时技术保障与实时工单',
    ],
    highlighted: true,
    badge: '👑 综合主推第一',
    cta: { label: '主推光速云·领券直达', href: 'https://sahude.gsyvipaff.com/#/?code=keqgvT5Y' },
  },
  {
    name: '斯诺克147永久套餐',
    price: '¥147',
    billing: '一次性付费（247GB永不过期）',
    description:
      '致敬斯诺克 147 经典款！一次付费 247GB 流量永久有效，无按月清零压力，用量不固定的备用防失联终极神器。',
    features: [
      '致敬斯诺克 147 永久套餐（247GB 永久有效）',
      '流量永不清零，不用不扣费',
      '全线享受与月付完全一致的高速 IEPL 专线',
      '不限设备连接数，多端共用不浪费',
      '完美作为主力月付之外的防断连备用站',
    ],
    cta: { label: '入手斯诺克永久套餐', href: 'https://sahude.gsyvipaff.com/#/?code=keqgvT5Y' },
  },
];
