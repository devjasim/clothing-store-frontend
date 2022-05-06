import {
  Facebook,
  Instagram,
  Linkedin,
  Pinterest,
  Telegram,
  Twitter,
  Youtube,
} from '~/constants/icons/footerSocial';

export const mainMenuLinks = [
  {label: 'Supported Block Chains', href: '/'},
  {label: 'Merchant Tools', href: '/tools'},
  {label: 'StablePay Partners', href: '/partners'},
  {label: 'Fees', href: '/fees'},
  {label: 'Developers', href: '/developers'},
];

export const footerLinks = [
  {
    label: 'StablePay',
    links: [
      {label: 'Fees/Pricing', href: '/'},
      {label: 'Supported BlockChains', href: '/contact'},
    ],
  },
  {
    label: 'Resources',
    links: [
      {label: 'Merchant Tools', href: '/'},
      {label: 'Integration Guide', href: '/'},
      {label: 'Store Directory', href: '/'},
      {label: 'Affiliate Information', href: '/'},
      {label: 'FAQ', href: '/'},
    ],
  },
  {
    label: 'Contact',
    links: [
      {label: 'Support', href: '/'},
      {label: 'Add your Stable coin', href: '/'},
    ],
  },
  {
    label: 'Legal',
    links: [
      {label: 'Recruited Jurisdictions', href: '/'},
      {label: 'User Agreement', href: '/'},
      {label: 'Privacy Policy', href: '/'},
    ],
  },
];

export const footerSocialLinks = [
  {url: '/', icon: Twitter},
  {url: '/', icon: Instagram},
  {url: '/', icon: Facebook},
  {url: '/', icon: Telegram},
  {url: '/', icon: Youtube},
  {url: '/', icon: Linkedin},
  {url: '/', icon: Pinterest},
];
