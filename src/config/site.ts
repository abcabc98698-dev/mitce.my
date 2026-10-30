import type { SiteConfig } from '../types';

/**
 * MITCE 指南 — 跨境网络与机场评测指南中心配置
 */
export const siteConfig: SiteConfig = {
  name: 'MITCE 指南',
  brand: { prefix: 'MITCE', accent: '指南', suffix: '' },
  tagline: '2026 跨境网络与机场评测指南 · 专线实测与网络可观测性实验室',
  description:
    'MITCE指南深度收录42家主流机场品牌实测数据，提供晚高峰测速、IEPL/IPLC专线拓扑、ChatGPT/流媒体解锁矩阵，以及全平台代理客户端下载与配置指南。客观、真实、无虚标。',
  lang: 'zh-CN',
  locale: 'zh_CN',

  email: 'contact@mitce.my',
  phone: '+60 3-2100 8888',
  phoneHref: '+60321008888',
  location: {
    label: '网络实验室',
    lines: ['MITCE Network Observatory', 'Kuala Lumpur, Malaysia'],
  },
  responseTime: '数据定期轮巡测试更新，问题 1 个工作日内回复',

  footerBlurb:
    'MITCE指南致力于提供客观、透明、可验证的跨境网络评测数据。所有测速与流媒体解锁均标明测试环境与时间节点，谢绝虚标与不实承诺。',
  copyright: `© ${new Date().getFullYear()} MITCE 指南 (mitce.my). All rights reserved.`,

  social: [
    { label: '品牌库', href: '/brands', icon: 'bars' },
    { label: '客户端', href: '/clients', icon: 'shield-check' },
    { label: '测评专栏', href: '/blog', icon: 'rss' },
    { label: 'RSS 订阅', href: '/rss.xml', icon: 'rss' },
  ],

  seo: {
    titleSeparator: ' — ',
    defaultTitle: 'MITCE 指南 — 2026 42家机场专线实测天梯榜与客户端下载库',
    ogImage: '/images/mitce-og-cover.svg',
    ogImageAlt: 'MITCE 指南 42家机场专线实测、测速面板与客户端下载配置指南',
    twitterHandle: '@mitce_my',
    themeColor: '#EC5A11',
  },

  cta: {
    label: '主推光速云（年付8元起）',
    shortLabel: '主推·光速云',
    href: 'https://sahude.gsyvipaff.com/#/?code=keqgvT5Y',
  },

  forms: {
    contactAction: '',
    newsletterAction: '',
    netlify: false,
  },

  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || '',
    bing: process.env.BING_SITE_VERIFICATION || '',
    shenma: process.env.SHENMA_SITE_VERIFICATION || '',
    baidu: process.env.BAIDU_SITE_VERIFICATION || '',
  },
};
