# 安徽东渐进出口有限公司 - 官方网站 (AEC GROUP Website)

这是一个为 **安徽东渐进出口有限公司 (Anhui Eastern Progress Import & Export Co., Ltd)** 升级重构后的全新现代化企业官方网站。网站采用响应式、高端大气、国际化的视觉设计，并针对现代 Web 平台（如 Vercel）和搜索引擎（SEO）进行了全方位的优化。

*   **官方域名：** [www.boppfilmsale.com](http://www.boppfilmsale.com)
*   **GitHub 仓库：** `boppfilmsales-design/oldwebsite-boppfilmsale`
*   **部署平台推荐：** Vercel (支持零配置一键部署)

---

## ✨ 新版核心升级与特色

1.  **极简现代视觉设计：** 
    *   主色调采用深邃的“深海蓝 (Navy Blue)”搭配高贵的“香槟金 (Gold Accent)”，充分展现国际化外贸集团的专业与稳重。
    *   全站引入毛玻璃模糊背景、柔和渐变色以及流体微动效，呈现“高端、大气、国际化”的科技质感。
2.  **极速页面性能：**
    *   全站采用原生、无依赖的高性能静态 HTML5 / CSS3 / JavaScript。
    *   CSS 使用高性能 flexbox & grid 布局，交互微动效纯 CSS 实现，流畅度高。
    *   不依赖任何重型框架，秒开速度，极度适合 Vercel 等全球 CDN 加速部署。
3.  **完美移动端/响应式适配：**
    *   完美适配手机、平板、台式机等各种屏幕尺寸。
    *   移动端包含自适应折叠导航栏及流畅的抽屉菜单交互。
4.  **全功能产品中心 & 询盘交互：**
    *   精细梳理并展示了东渐公司的 8 大核心产品：BOPP 双向拉伸聚丙烯薄膜、BOPET 聚酯薄膜、POF 热收缩膜、涂布膜与胶粘带、打印碳带与标签、纸制品、机械设备以及光伏太阳能板。
    *   设计了精美的**在线询盘表单**，客户提交后可一键拉起邮件（Email）向官方邮箱 `sale@boppfilmsale.com` 发送格式化的询盘邮件。
5.  **SEO 与国际化：**
    *   针对 Google 和百度等搜索引擎，内置了完善的 Meta 描述、关键词以及语义化 HTML 标签。

---

## 📂 源码文件结构

```bash
.
├── index.html          # 官网主页 (集成所有模块，包含完整的 HTML/CSS/JavaScript)
└── README.md           # 本说明文件 (项目说明与一键部署指南)
```

> **注：** 本项目采用高内聚的**单页面单文件（SPA-style Single File）**设计，将全部 HTML 标记、现代 CSS 样式（包含高级响应式网格及毛玻璃动效）、SVG 矢量图标以及交互逻辑 JS 代码高密度整合于 `index.html` 内。这种设计可以做到：
> *   **零资源丢失率：** 部署在 Vercel 时，不会因为相对路径错乱或第三方静态资源未加载导致页面崩塌。
> *   **极致的 CDN 加速：** Vercel 会直接把这一个文件分发到全球边缘节点（Edge Network），海外客户打开速度呈毫秒级。

---

## 🚀 部署到 Vercel 指南

你可以非常轻松地在几秒钟内将此网站在 Vercel 上免费部署上线，并绑定你的官方域名。步骤如下：

### 第一步：导入 GitHub 仓库
1. 访问并登录 [Vercel 官网](https://vercel.com/) (建议直接使用你的 GitHub 账号登录)。
2. 点击右上角的 **"Add New..."** 按钮，选择 **"Project"**。
3. 在 Git 仓库列表中，找到并选择你的 GitHub 仓库 `boppfilmsales-design/oldwebsite-boppfilmsale`，点击 **"Import"**。

### 第二步：配置并部署
由于这是一个 100% 静态的项目：
1. **Framework Preset (框架预设)：** 保持默认的 **"Other"** 即可。
2. **Build and Output Settings：** 无需填写任何构建命令，直接保持默认空白。
3. 点击最下方的 **"Deploy"** 按钮。
4. 等待 5~10 秒钟，系统会提示部署成功，并为你生成一个免费的 `*.vercel.app` 临时访问域名！

### 第三步：绑定官方域名
如果你想让网站通过你的官方域名 `www.boppfilmsale.com` 或其他子域名直接访问：
1. 在 Vercel 该项目控制台中，点击顶部导航栏的 **"Settings"**。
2. 在左侧菜单中选择 **"Domains"**。
3. 在输入框中输入你的域名（例如 `boppfilmsale.com` 或 `www.boppfilmsale.com`），点击 **"Add"**。
4. Vercel 会向你展示需要配置的 DNS 解析记录（通常是添加一条指向 `cname.vercel-dns.com` 的 `CNAME` 记录，或者指向 Vercel IP 的 `A` 记录）。
5. 登录你的域名注册商后台（如阿里云、腾讯云、GoDaddy 等），在解析设置中添加相应的记录。
6. 解析生效后，即可通过你的官方域名安全、快速地访问全新的安徽东渐官方网站！

---

## 📞 联系与技术支持

若在后期维护或部署过程中有任何问题，可以参考网站中嵌入的官方联系信息，或通过 GitHub 仓库提交 issue。
*   **邮箱：** sale@boppfilmsale.com
*   **手机/微信：** 18919659471
*   **地址：** 安徽省合肥市包河区徽州大道1158号银杏大厦 (中国科学技术大学南校区对面)
