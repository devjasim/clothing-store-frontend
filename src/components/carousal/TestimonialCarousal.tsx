import Image from 'next/image';
import React from 'react';

import {Carousal} from './Carousal';

export const TestimonialCarousal = () => {
  return (
    <div>
      <Carousal>
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="space-y-5">
            <div className="mx-auto max-w-max">
              <div className="relative mx-auto h-[100px] w-[100px] md:h-[150px] md:w-[150px]">
                <Image
                  src="/assets/images/person.png"
                  alt=""
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h3 className="text-center text-lg font-[500]">
                David Okerekenke
              </h3>
              <h4 className="text-center text-sm text-gray-600">
                Frankfurth, Germany
              </h4>
            </div>

            <p className="mx-auto max-w-[30ch] text-center text-sm sm:max-w-[80ch]  sm:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              ridiculus hendrerit aenean quam rhoncus ac libero nunc netus.
              Augue id faucibus libero, aliquam, eu purus vitae. Tincidunt id
              aliquam i nteger felis donec magna bibendum.
            </p>
          </div>
        ))}
      </Carousal>
    </div>
  );
};
