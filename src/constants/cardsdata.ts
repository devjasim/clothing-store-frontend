import {BussinessIcon, PersonIcon} from '~/constants/icons';
import {CardProps} from '~/ui/Card';

export const cardsData: CardProps[] = [
  {
    title: 'Bussiness',
    subtitle: 'Serving 100,000+ merchants globally',
    benefits: [
      'Real-time global payments',
      'Industry-low processing fees of only 0.5%',
      'Reduced fraud risk with no chargebacks',
      'Fiat conversion options',
    ],
    icon: BussinessIcon,
    color: '#348888',
    gradient:
      'linear-gradient(95.51deg, #22BABB -8.37%, rgba(158, 248, 238, 0.76) 118.77%);',
  },
  {
    title: 'Personal',
    subtitle: '1,000,000+ Wallet users love these features',
    benefits: [
      'Hold 2,315+ cryptocurrencies on one platform',
      'Convert your crypto',
      'Purchase gift cards',
    ],
    icon: PersonIcon,
    color: '#FA7F08',
    gradient:
      'linear-gradient(95.99deg, #8D8D8D -8.42%, rgba(140, 140, 140, 0.57) 106.38%), linear-gradient(95.51deg, #939393 -8.37%, #3B403F 118.77%)',
  },
];
