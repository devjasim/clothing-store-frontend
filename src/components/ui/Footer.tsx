import React from 'react';

import {footerLinks, footerSocialLinks} from '~/constants/links';

import {Button} from './Button';
import {FooterLogo} from './footerLogo';
import {NextLink} from './NextLink';
import {TextInput} from './TextInput';

type FooterLinkColumnProps = {
  title: string;
  links: {label: string; href: string}[];
};

const FooterLinkColumn = ({links, title}: FooterLinkColumnProps) => {
  return (
    <div className="flex flex-col space-y-3">
      <h3 className="text-2xl font-[500]">{title}</h3>
      {links.map((link, i) => (
        <NextLink
          href={link.href}
          key={i}
          className="text-sm text-white/60 hover:underline"
        >
          {link.label}
        </NextLink>
      ))}
    </div>
  );
};

export const Footer = () => {
  return (
    <div className="min-h-[300px]  w-full bg-[#2C4444] py-[60px] px-5 text-white/90">
      <footer className="mx-auto flex  max-w-[1200px] flex-col space-y-14">
        <section className="grid gap-5 sm:grid-cols-2 md:grid-cols-[repeat(4,1fr),25%]">
          {footerLinks.map((column, i) => (
            <FooterLinkColumn
              key={i}
              title={column.label}
              links={column.links}
            />
          ))}

          <div className="flex flex-col space-y-4">
            <h3 className="text-2xl font-[500]">News Letter</h3>
            <p className="text-sm text-white/60">
              Stay Up toDate with the Latest News
            </p>
            <div className="grid h-[55px] w-full grid-cols-[66%,35%] rounded-xl bg-white p-[2px] pr-1">
              <TextInput type="'email" />
              <Button
                variant="primary"
                className="w-full rounded-xl px-1 text-[12px]"
              >
                Email Address
              </Button>
            </div>
          </div>
        </section>

        <div className="flex flex-col items-center space-y-3 self-center">
          <FooterLogo className="w-[200px] sm:w-full" />
          <small className="text-center text-lg text-white/60">
            © 2013-2022 StablesPay, all Rights Reserved
          </small>
        </div>

        <div className="mx-auto flex w-full max-w-[600px] flex-auto flex-row flex-wrap justify-around gap-3">
          {footerSocialLinks.map((social, i) => (
            <div key={i} className="flex items-center space-x-3">
              <NextLink href={social.url}>{<social.icon />}</NextLink>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
};
