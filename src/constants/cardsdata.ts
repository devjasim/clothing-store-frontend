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
    gradient: 1,
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
    gradient: 2,
  },
];
