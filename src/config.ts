import type {
  ExpressiveCodeConfig,
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: '坤哥IKUN',
  subtitle: '一个小透明的透明世界',
  lang: 'zh_CN', // Language code, e.g. 'en', 'zh_CN', 'ja', etc.
  themeColor: {
    hue: 210, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
    fixed: true, // Hide the theme color picker for visitors
  },
  banner: {
    enable: true,
    src: '/banner.webp', // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    position: 'top', // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
    credit: {
      enable: false, // Display the credit text of the banner image
      text: '', // Credit text to be displayed
      url: '', // (Optional) URL link to the original artwork or artist's page
    },
  },
  toc: {
    enable: true, // Display the table of contents on the right side of the post
    depth: 2, // Maximum heading depth to show in the table, from 1 to 3
  },
  favicon: [
    // Leave this array empty to use the default favicon
    // {
    //   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
    //   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
    //   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
    // }
  ],
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    LinkPreset.Friends,
    {
      name: 'GitHub',
      url: 'https://github.com/kylinIKUN1314/nyakku.moe', // Internal links should not include the base path, as it is automatically added
      external: true, // Show an external link icon and will open in a new tab
    },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: '/avatar.jpg', // Relative to the /src directory. Relative to the /public directory if it starts with '/'
  name: 'Nyakku Shigure',
  bio: '我唯愿毛主席身体健康～',
  links: [
    {
      name: 'GitHub',
      icon: 'fa6-brands:github', // Visit https://icones.js.org/ for icon codes
      url: 'https://github.com/kylinIKUN1314',
    },
    {
      name: 'RSS',
      icon: 'fa6-solid:rss',
      url: 'https://nyakku.moe/rss.xml',
    },
    {
      name: 'Telegram',
      icon: 'fa6-brands:telegram',
      url: 'https://t.me/kylinghhb',
    },
    {
      name: 'Email',
      icon: 'fa6-solid:envelope',
      url: 'mailto:1685563877@qq.com',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'IKUN团队成员官网',
  url: 'http://ikun.xn--ikun-pg2g85k.xyz//',
}

export const expressiveCodeConfig: ExpressiveCodeConfig = {
  // Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
  // Please select a dark theme, as this blog theme currently only supports dark background color
  theme: 'github-dark',
}
<script type="text/javascript" src="https://myhkw.cn/player/js/jquery.min.js"></script>
<script type="text/javascript" id="myhk" src="https://myhkw.cn/api/player/176072969545" key="176072969545" m="1"></script>