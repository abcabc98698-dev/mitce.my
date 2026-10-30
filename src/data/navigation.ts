import type { Link, NavigationItem } from '../types';

/**
 * 顶部全局主导航 (桌面端保持精简优雅，禁止拥挤换行)
 */
export const mainNav: NavigationItem[] = [
  { label: '首页', href: '/' },
  { label: '机场推荐', href: '/jichang/', matchPath: '/jichang' },
  { label: '品牌库', href: '/brands/', matchPath: '/brands' },
  { label: '客户端教程', href: '/tutorial/', matchPath: '/tutorial' },
  { label: '免费资源', href: '/free/', matchPath: '/free' },
  { label: '深度测评', href: '/blog/', matchPath: '/blog' },
];

/** 移动端弹出导航 (全量垂直展示所有核心专题与栏目) */
export const mobileNav: NavigationItem[] = [
  { label: '首页', href: '/' },
  { label: '机场推荐', href: '/jichang/', matchPath: '/jichang' },
  { label: '品牌评测库', href: '/brands/', matchPath: '/brands' },
  { label: '客户端教程', href: '/tutorial/', matchPath: '/tutorial' },
  { label: 'Clash 专题', href: '/clash/', matchPath: '/clash' },
  { label: 'VPN 推荐', href: '/vpn/', matchPath: '/vpn' },
  { label: '节点大盘', href: '/nodes/', matchPath: '/nodes' },
  { label: '梯子选型', href: '/tizi/', matchPath: '/tizi' },
  { label: '免费资源', href: '/free/', matchPath: '/free' },
  { label: '跑路预警雷达', href: '/topics/runaway-radar/', matchPath: '/topics/runaway-radar' },
  { label: '终极答疑百科', href: '/topics/faq/', matchPath: '/topics/faq' },
  { label: '深度测评专栏', href: '/blog/', matchPath: '/blog' },
  { label: '主推·光速云 (年付8元起)', href: 'https://sahude.gsyvipaff.com/#/?code=keqgvT5Y' },
];

export interface FooterColumn {
  title: string;
  links: Link[];
}

export const footerColumns: FooterColumn[] = [
  {
    title: '核心推荐',
    links: [
      { label: '光速云 (综合主推第一)', href: '/brands/guangsu-cloud/' },
      { label: '微风网络 (7元IEPL入门)', href: '/brands/weifeng/' },
      { label: '暮光加速 (多设备BGP专线)', href: '/brands/muguang/' },
      { label: '飞猫云 (专属免配客户端)', href: '/brands/feimao/' },
      { label: '星岛梦 (永久不限时包)', href: '/brands/xingdaomeng/' },
    ],
  },
  {
    title: '客户端教程',
    links: [
      { label: '全平台教程库', href: '/tutorial/' },
      { label: 'Clash 专题配置', href: '/clash/' },
      { label: '客户端下载中心', href: '/clients/' },
      { label: '终极答疑 50+ 问', href: '/topics/faq/' },
    ],
  },
  {
    title: '栏目与雷达',
    links: [
      { label: '2026 专线机场天梯榜', href: '/jichang/' },
      { label: '翻墙 VPN 深度实测', href: '/vpn/' },
      { label: '全球节点延迟大盘', href: '/nodes/' },
      { label: '科学上网梯子防失联', href: '/tizi/' },
      { label: '免费资源与白嫖节点', href: '/free/' },
      { label: '跑路预警雷达黑名单', href: '/topics/runaway-radar/' },
      { label: '42 家机场品牌库', href: '/brands/' },
    ],
  },
];

export const legalLinks: Link[] = [
  { label: '推广佣金与合规声明', href: '/#disclosure' },
  { label: 'RSS 订阅源', href: '/rss.xml' },
  { label: '站点地图 Sitemap', href: '/sitemap-index.xml' },
];
