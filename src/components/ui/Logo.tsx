import {SVGProps} from 'react';

export const Logo = ({
  width,
  height,
  color,
  text = true,
  ...rest
}: SVGProps<SVGSVGElement> & {text?: boolean}) => {
  return (
    <div>
      <svg
        width={width || '158'}
        height={height || '38'}
        viewBox="0 0 158 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        <g clipPath="url(#clip0_20_11)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.2115 6.3504L23.4262 6.31831C24.6457 6.30064 25.6486 7.28333 25.6663 8.50275C25.684 9.72217 24.7099 10.7335 23.4905 10.7512L21.2656 10.7834C18.8174 10.8189 16.8615 12.8323 16.8969 15.2805C16.9324 17.7287 18.9458 19.6846 21.394 19.6491L23.6189 19.6169C24.8383 19.5992 25.8413 20.5819 25.859 21.8013C25.8767 23.0207 24.9026 24.0321 23.6832 24.0497L21.4583 24.082C21.4583 24.082 21.4583 24.082 21.4583 24.082C21.4582 24.082 21.4582 24.082 21.4582 24.082C16.5618 24.1529 12.535 20.2411 12.4641 15.3447C12.3931 10.4483 16.3049 6.42149 21.2013 6.35055L21.2115 6.3504Z"
            fill="url(#paint0_linear_20_11)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.9121 30.4841L20.7027 30.5161C19.4833 30.5337 18.4803 29.551 18.4627 28.3316C18.445 27.1122 19.4191 26.1009 20.6385 26.0832L22.8634 26.051C25.3116 26.0155 27.2674 24.0021 27.232 21.5539C27.1965 19.1057 25.1831 17.1498 22.7349 17.1853L20.51 17.2175C19.2906 17.2352 18.2876 16.2525 18.27 15.0331C18.2523 13.8136 19.2264 12.8023 20.4458 12.7847L22.6707 12.7524C27.5671 12.6815 31.594 16.5933 31.6649 21.4897C31.7359 26.3861 27.8241 30.4129 22.9277 30.4838L22.9121 30.4841Z"
            fill="url(#paint1_linear_20_11)"
          />
          <rect
            x="7.06436"
            y="30.7137"
            width="4.44339"
            height="12.7135"
            transform="rotate(-90.8301 7.06436 30.7137)"
            fill="url(#paint2_linear_20_11)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.6863 15.262C12.6036 15.1581 12.4343 15.2123 12.4362 15.345C12.5072 20.2414 16.534 24.1532 21.4304 24.0823L21.4304 24.0823L23.6553 24.05C24.8747 24.0324 25.8488 23.021 25.8311 21.8016C25.8134 20.5822 24.8105 19.5995 23.591 19.6172L21.3661 19.6494C20.4438 19.6628 19.5832 19.3935 18.8668 18.9218C18.5059 18.6841 18.1125 18.4918 17.6906 18.3978C15.6826 17.9504 13.9278 16.8209 12.6863 15.262Z"
            fill="url(#paint3_linear_20_11)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M31.6603 21.0818C31.6684 21.2169 31.6735 21.3528 31.6755 21.4895C31.7464 26.3859 27.8346 30.4127 22.9382 30.4837L22.9382 30.4837L18.5054 30.5479L18.4411 26.115L22.874 26.0508C24.0343 26.034 25.0841 25.5729 25.8636 24.8317C28.2719 24.4107 30.3408 23.0201 31.6603 21.0818Z"
            fill="url(#paint4_linear_20_11)"
          />
        </g>
        {text && (
          <path
            d="M47.3719 14.256C46.3879 12.504 44.7319 11.52 42.7159 11.52C39.9799 11.52 37.3879 13.272 37.3879 16.2C37.3879 18.72 39.2599 19.896 41.3239 20.784L42.5719 21.312C44.1319 21.96 45.6919 22.8 45.6919 24.744C45.6919 26.64 44.2999 28.272 42.3559 28.272C40.4119 28.272 38.8279 26.832 38.8519 24.84L36.5719 25.32C36.9559 28.224 39.2359 30.384 42.1639 30.384C45.4039 30.384 47.9479 28.032 47.9479 24.744C47.9479 21.72 46.0279 20.304 43.4599 19.296L42.1639 18.792C41.0359 18.36 39.6439 17.616 39.6439 16.2C39.6439 14.616 41.2279 13.632 42.6679 13.632C44.0359 13.632 44.8999 14.208 45.5719 15.336L47.3719 14.256ZM52.6545 20.784H54.7666V18.768H52.6545V14.472H50.4945V18.768H49.3185V20.784H50.4945V30H52.6545V20.784ZM60.7962 28.464C58.5162 28.464 57.2442 26.496 57.2442 24.384C57.2442 22.296 58.5642 20.352 60.7962 20.352C63.1242 20.352 64.4442 22.2 64.4442 24.384C64.4442 26.592 63.1482 28.464 60.7962 28.464ZM66.4842 18.768H64.3242V20.64H64.2762C63.3882 19.296 62.0442 18.432 60.3882 18.432C57.1242 18.432 55.0842 21.24 55.0842 24.312C55.0842 27.528 57.0282 30.384 60.4602 30.384C62.0682 30.384 63.4122 29.52 64.2762 28.248H64.3242V30H66.4842V18.768ZM74.7081 28.464C72.4281 28.464 71.1561 26.496 71.1561 24.384C71.1561 22.296 72.4761 20.352 74.7081 20.352C77.0361 20.352 78.3561 22.2 78.3561 24.384C78.3561 26.592 77.0601 28.464 74.7081 28.464ZM69.1161 30H71.2761V28.248H71.3241C72.1881 29.52 73.5561 30.384 75.1401 30.384C78.5961 30.384 80.5161 27.528 80.5161 24.312C80.5161 21.24 78.4761 18.432 75.2361 18.432C73.5561 18.432 72.2121 19.296 71.3241 20.64H71.2761V9.168H69.1161V30ZM84.876 9.168H82.716V30H84.876V9.168ZM97.8044 24.744V24.408C97.8044 21.072 96.1244 18.432 92.5484 18.432C88.9244 18.432 87.0764 21.024 87.0764 24.48C87.0764 27.792 89.1644 30.384 92.5964 30.384C94.7804 30.384 96.7484 29.256 97.8044 27.312L95.9804 26.28C95.1644 27.624 94.2764 28.464 92.6204 28.464C90.5564 28.464 89.2604 26.664 89.2364 24.744H97.8044ZM89.3564 23.112C89.6204 21.504 90.8684 20.304 92.5484 20.304C94.2764 20.304 95.3804 21.432 95.6444 23.112H89.3564ZM105.923 20.4C105.323 19.176 104.219 18.432 102.851 18.432C101.027 18.432 99.5391 19.872 99.5391 21.696C99.5391 23.232 100.451 23.856 101.699 24.528L103.811 25.656C104.315 25.992 104.603 26.28 104.603 26.88C104.603 27.84 103.811 28.464 102.899 28.464C101.867 28.464 101.315 27.864 100.859 27.024L99.0111 27.864C99.6111 29.448 101.267 30.384 102.899 30.384C104.987 30.384 106.763 28.8 106.763 26.664C106.763 24.888 105.491 24.072 104.171 23.472C102.851 22.872 101.555 22.44 101.555 21.456C101.555 20.832 102.131 20.352 102.731 20.352C103.355 20.352 103.907 20.784 104.171 21.336L105.923 20.4ZM111.366 22.416H112.662C116.094 22.416 118.998 20.952 118.998 17.136C118.998 13.824 117.27 11.904 111.702 11.904H109.11V30H111.366V22.416ZM111.366 13.92H111.966C114.198 13.92 116.886 14.256 116.886 17.088C116.886 19.968 114.39 20.4 112.086 20.4H111.366V13.92ZM125.601 28.464C123.321 28.464 122.049 26.496 122.049 24.384C122.049 22.296 123.369 20.352 125.601 20.352C127.929 20.352 129.249 22.2 129.249 24.384C129.249 26.592 127.953 28.464 125.601 28.464ZM131.289 18.768H129.129V20.64H129.081C128.193 19.296 126.849 18.432 125.193 18.432C121.929 18.432 119.889 21.24 119.889 24.312C119.889 27.528 121.833 30.384 125.265 30.384C126.873 30.384 128.217 29.52 129.081 28.248H129.129V30H131.289V18.768ZM137.425 28.08L133.009 36.432H135.457L144.553 18.768H142.129L138.601 25.896L134.809 18.768H132.289L137.425 28.08Z"
            fill={color || 'black'}
          />
        )}
        <defs>
          <linearGradient
            id="paint0_linear_20_11"
            x1="19.2418"
            y1="24.1141"
            x2="18.9849"
            y2="6.38267"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#348888" />
            <stop offset="1" stopColor="#22BABB" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_20_11"
            x1="24.8871"
            y1="12.7203"
            x2="25.1441"
            y2="30.4517"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#348888" />
            <stop offset="1" stopColor="#22BABB" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_20_11"
            x1="9.28605"
            y1="30.7137"
            x2="9.22566"
            y2="42.6644"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#348888" />
            <stop offset="1" stopColor="#A3DDDD" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_20_11"
            x1="19.214"
            y1="24.1144"
            x2="19.0835"
            y2="15.1132"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FA7F08" />
            <stop offset="1" stopColor="#9CACFF" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_20_11"
            x1="25.1546"
            y1="30.4516"
            x2="25.0203"
            y2="21.178"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FA7F08" />
            <stop offset="1" stopColor="#F5DBC1" />
          </linearGradient>
          <clipPath id="clip0_20_11">
            <rect
              width="24.8039"
              height="24.4274"
              fill="white"
              transform="translate(7 6.28632)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};
