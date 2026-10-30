import type { Testimonial } from '../types';

export const testimonials: Testimonial[] = [
  {
    quote:
      '我们出海团队最怕晚高峰 TikTok 直播突然断流以及 ChatGPT 疯狂跳人机验证。换了光速云的 IEPL 专线后，香港与美国原生 IP 延迟常年稳在 20 多毫秒，直播稳定、AI 交互丝滑，真专线和普通中转差距太明显了。',
    name: '林经理',
    role: '出海电商运营总监',
    company: '跨境独立站团队',
    image: '/images/testimonial-portrait.webp',
    imageAlt: '林经理 跨境电商出海团队主管肖像',
    link: { label: '查看光速云深度实测报告', href: '/brands/guangsu-cloud' },
  },
];
