import React from 'react';

import {footerLinks, footerSocialLinks} from '~/constants/links';

import {Button} from './Button';
import {FooterLogo} from './footerLogo';
import {NextLink} from './NextLink';

type FooterLinkColumnProps = {
  title: string;
  links: {label: string; href: string}[];
};


export const Footer = () => {
  return (
    <div className="min-h-[80px]  w-full bg-[#2C4444] py-[20px] px-5 text-white/90">
      <footer className="mx-auto flex max-w-[1200px] flex-col">
        <div className="flex flex-col items-center self-center">
          <FooterLogo className="w-[200px] sm:w-full" />
          <small className="text-lg text-center text-white/60">
            © 2033 Clothing Store, all Rights Reserved
          </small>
        </div>
      </footer>
    </div>
  );
};
