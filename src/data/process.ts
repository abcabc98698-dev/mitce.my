import type { ProcessStep } from '../types';

export const processSteps: ProcessStep[] = [
  {
    number: '1',
    title: '按需选型与领取优惠',
    description:
      '根据预算与用途查阅 42 家天梯大盘。首选推荐光速云（年付 8 元/月起或 147 永久套餐），结算时输入专属优惠码 AMM 享即时立减。',
    timing: '第 1 步 — 挑选套餐与节点地区',
  },
  {
    number: '2',
    title: '一键获取客户端或订阅',
    description:
      '电脑小白可直接下载机场专属客户端登录即连；进阶用户可复制通用订阅链接导入 Clash Verge Rev、v2rayN 或 iOS 小火箭。',
    timing: '第 2 步 — 客户端一键部署',
  },
  {
    number: '3',
    title: '开启智能分流，畅享出海',
    description:
      '选择「规则模式」或「TUN 虚拟网卡模式」，大陆网站直连不耗流量，海外站点与 AI 业务通过专线极速分流，无感畅游。',
    timing: '第 3 步 — 晚高峰极速直连',
  },
];
