import type { Sector } from '../types';

export const sectors: Sector[] = [
  {
    title: 'AI 大模型生产力开发',
    description: '深度交互 ChatGPT Plus、Claude 3.5 Sonnet 与 Google Gemini，洁净原生 IP 降低封控与风控几率。',
    image: '/images/sector-ai.svg',
    imageAlt: 'AI 大模型交互与双 ISP 纯净原生住宅 IP',
    workflows: ['ChatGPT 访问', 'Claude 长上下文', 'API 接口调用'],
  },
  {
    title: '跨境电商与海外社媒',
    description: '支持 TikTok 跨区免拔卡直播、Amazon / Shopify 店铺多账号防关联登录，专线低延迟直达。',
    image: '/images/sector-ecommerce.svg',
    imageAlt: '跨境电商出海独立站与 TikTok 专线直播',
    workflows: ['TikTok 直播', '店铺后台防封', '社媒广告投放'],
  },
  {
    title: '全球 4K/8K 极致影音',
    description: '解锁 Netflix 各地区非自制剧、Disney+ IMAX 增强、YouTube 4K 秒开不缓冲，全家大屏畅享。',
    image: '/images/sector-streaming.svg',
    imageAlt: '全球 4K 60FPS 流媒体秒开与原生解锁',
    workflows: ['Netflix 全区', 'Disney+', 'YouTube Premium'],
  },
  {
    title: '跨国软件研发与开源同步',
    description: 'GitHub 代码极速拉取推送、Docker 镜像高速下载、Slack 与 Discord 团队语音毫无卡顿。',
    image: '/images/sector-dev.svg',
    imageAlt: '跨国开发协作 Git 极速拉取与 Docker 镜像加速',
    workflows: ['GitHub 加速', 'NPM/Pip 依赖', '远程会议低延迟'],
  },
  {
    title: '学术科研与海量文献检索',
    description: 'Google Scholar、arXiv、IEEE 与 Nature 顶刊论文高速检索下载，为学者提供稳定科研后盾。',
    image: '/images/sector-academic.svg',
    imageAlt: '学术顶刊数据库检索与高校科研学术专线',
    workflows: ['Google Scholar', '海外期刊下载', '学术数据采集'],
  },
  {
    title: '外贸金融与国际商务往来',
    description: '海外邮件毫秒级接收、国际电汇网银稳定登录、Zoom 跨国高清会议音视频同步流畅。',
    image: '/images/sector-business.svg',
    imageAlt: '外贸企业专线与国际银行安全鉴权',
    workflows: ['企业邮件稳定', '国际银行鉴权', '高清 Zoom 会议'],
  },
];
