import React from 'react';

import './Footer.scss';

// TODO: Don't forget to add addresses to links

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__categories">
        <div className="footer__category">
          <span className="footer__category__header">Support</span>
          <div className="footer__category__content">
            <div className="footer__link">help@bullbet.net</div>
            <dov className="footer__link">
              <a href="#">FAQ</a>
            </dov>
          </div>
        </div>
        <div className="footer__category">
          <span className="footer__category__header">BullBet</span>
          <div className="footer__category__content">
            <div className="footer__link">
              <a href="#">About Us</a>
            </div>
            <div className="footer__link">
              <a href="#">Privacy Policy</a>
            </div>
            <div className="footer__link">
              <a href="#">Promotions</a>
            </div>
            <div className="footer__link">
              <a href="#">Affiliate</a>
            </div>
          </div>
        </div>
        <div className="footer__category">
          <span className="footer__category__header">More Info</span>
          <div className="footer__category__content">
            <div className="footer__link">
              <a href="#">Terms and Conditions</a>
            </div>
            <ldivi className="footer__link">
              <a href="#">Cookie Policy</a>
            </ldivi>
            <div className="footer__link">
              <a href="#">Betting Rules</a>
            </div>
          </div>
        </div>
        <div className="footer__category">
          <span className="footer__category__header">Connect with Us</span>
          <div className="socials">
            <a
              href="https://twitter.com"
              target="_blank"
              aria-label="Twitter"
              rel="noreferrer"
            >
              <svg width="20" height="20" fill="none" className="twitter">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.931 0c1.013 0 1.88.367 2.598 1.1.719.734 1.079 1.617 1.079 2.65v12.5c0 1.033-.36 1.916-1.08 2.65-.718.733-1.584 1.1-2.597 1.1H3.676c-1.012 0-1.878-.367-2.597-1.1C.359 18.166 0 17.283 0 16.25V3.75C0 2.717.36 1.834 1.079 1.1 1.798.367 2.664 0 3.676 0h12.255zm-.919 8.047c0-.157-.004-.274-.013-.352.537-.39.983-.864 1.34-1.419a5.597 5.597 0 01-1.543.443c.578-.348.974-.855 1.187-1.524a5.27 5.27 0 01-1.71.664c-.52-.573-1.171-.86-1.954-.86-.74 0-1.373.268-1.896.802a2.661 2.661 0 00-.785 1.933c0 .252.021.46.064.625a7.474 7.474 0 01-3.09-.846 7.629 7.629 0 01-2.45-2.018 2.75 2.75 0 00-.37 1.38c0 .99.387 1.75 1.161 2.279-.4-.01-.825-.122-1.276-.339v.026c0 .651.212 1.23.638 1.739.426.507.949.822 1.57.944-.247.069-.464.103-.65.103-.111 0-.277-.017-.499-.052.18.547.496.999.951 1.355.456.356.973.538 1.551.546-.987.782-2.097 1.173-3.331 1.173-.222 0-.434-.013-.639-.04a7.416 7.416 0 004.11 1.225c.954 0 1.848-.155 2.681-.463.835-.308 1.55-.72 2.145-1.237a8.163 8.163 0 001.538-1.784 7.994 7.994 0 001.27-4.303z"
                  fill="#919AA2"
                />
              </svg>
            </a>

            <a
              href="https://discordapp.com"
              target="_blank"
              aria-label="Discord"
              rel="noreferrer"
            >
              <svg
                height="20"
                viewBox="0 0 24 24"
                width="20"
                className="discord"
              >
                <path
                  d="M3.58 21.196h14.259l-.681-2.205 1.629 1.398 1.493 1.338L23 24V2.475C22.932 1.137 21.78 0 20.352 0L3.585.003C2.158.003 1 1.142 1 2.48v16.24c0 1.411 1.156 2.476 2.58 2.476zM14.128 5.683l-.033.012.012-.012zM6.497 6.952c1.833-1.334 3.532-1.27 3.532-1.27l.137.135c-2.243.535-3.26 1.537-3.26 1.537s.272-.133.747-.336c3.021-1.188 6.32-1.102 9.374.402 0 0-1.019-.937-3.124-1.537l.186-.183c.291.001 1.831.055 3.479 1.26 0 0 1.844 3.15 1.844 7.02-.061-.074-1.144 1.666-3.931 1.726 0 0-.472-.534-.808-1 1.63-.468 2.24-1.404 2.24-1.404-.535.337-1.023.537-1.419.737-.609.268-1.219.4-1.828.535-2.884.468-4.503-.315-6.033-.936l-.523-.266s.609.936 2.174 1.404a22.262 22.262 0 00-.818 1.002c-2.786-.066-3.802-1.806-3.802-1.806 0-3.876 1.833-7.02 1.833-7.02z"
                  fill="#919AA2"
                />
                <path
                  d="M14.308 12.771c.711 0 1.29-.6 1.29-1.34 0-.735-.576-1.335-1.29-1.335v.003c-.708 0-1.288.598-1.29 1.338 0 .734.579 1.334 1.29 1.334zM9.69 12.771c.711 0 1.29-.6 1.29-1.34 0-.735-.575-1.335-1.286-1.335l-.004.003c-.711 0-1.29.598-1.29 1.338 0 .734.579 1.334 1.29 1.334z"
                  fill="#919AA2"
                />
              </svg>
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              aria-label="Instagram"
              rel="noreferrer"
            >
              <svg width="20" height="20" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.042 0h7.25c3.336 0 6.041 2.799 6.041 6.25v7.5c0 3.451-2.705 6.25-6.041 6.25h-7.25C2.705 20 0 17.201 0 13.75v-7.5C0 2.799 2.705 0 6.042 0zm7.25 18.125c2.332 0 4.229-1.962 4.229-4.375v-7.5c0-2.413-1.897-4.375-4.23-4.375h-7.25c-2.331 0-4.229 1.962-4.229 4.375v7.5c0 2.413 1.898 4.375 4.23 4.375h7.25z"
                  fill="#919AA2"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.833 10c0-2.761 2.164-5 4.833-5 2.67 0 4.834 2.239 4.834 5s-2.165 5-4.834 5c-2.669 0-4.833-2.239-4.833-5zm1.813 0c0 1.723 1.355 3.125 3.02 3.125s3.021-1.402 3.021-3.125c0-1.724-1.356-3.125-3.02-3.125C8 6.875 6.645 8.276 6.645 10zM14.863 5.291a.655.655 0 00.644-.666.655.655 0 00-.644-.666.655.655 0 00-.644.666c0 .368.288.666.644.666z"
                  fill="#919AA2"
                />
              </svg>
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              aria-label="Facebook"
              rel="noreferrer"
            >
              <svg width="20" height="20" fill="none" className="facebook">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20 3.334C20 1.582 18.419 0 16.667 0H3.333C1.581 0 0 1.582 0 3.334v13.332C0 18.418 1.581 20 3.334 20H10v-7.556H7.556V9.111H10V7.812c0-2.24 1.682-4.256 3.75-4.256h2.694v3.333H13.75c-.295 0-.639.358-.639.894v1.328h3.333v3.333h-3.333V20h3.556C18.419 20 20 18.418 20 16.666V3.334z"
                  fill="#919AA2"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
