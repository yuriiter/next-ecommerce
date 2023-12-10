import React from "react";
import { Logo } from "../Logo";
import Link from "next/link";
import { useIsOnRoute } from "@/hooks/useIsOnRoute";

export const Footer = () => {
  const hide = useIsOnRoute(["/account"]);

  if (hide) return <></>;
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__main">
          <div className="footer__logo-par">
            <Logo />
            <p className="footer__par">
              Our vision is to provide convenience and help increase your sales
              business.
            </p>
          </div>
          <div className="footer__navs">
            <div className="footer__nav">
              <p className="footer__nav-title">About</p>
              <nav>
                <ul className="footer__nav-link-list">
                  <li>
                    <Link className="footer__nav-link" href="#">
                      How it works
                    </Link>
                  </li>
                  <li>
                    <Link className="footer__nav-link" href="#">
                      Featured
                    </Link>
                  </li>
                  <li>
                    <Link className="footer__nav-link" href="#">
                      Partnership
                    </Link>
                  </li>
                  <li>
                    <Link className="footer__nav-link" href="#">
                      Bussiness Relation
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="footer__nav">
              <p className="footer__nav-title">Community</p>
              <nav>
                <ul className="footer__nav-link-list">
                  <li>
                    <Link className="footer__nav-link" href="#">
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link className="footer__nav-link" href="#">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link className="footer__nav-link" href="#">
                      Podcast
                    </Link>
                  </li>
                  <li>
                    <Link className="footer__nav-link" href="#">
                      Invite a friend
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="footer__nav">
              <p className="footer__nav-title">Socials</p>
              <nav>
                <ul className="footer__nav-link-list">
                  <li>
                    <Link className="footer__nav-link" href="#">
                      Discord
                    </Link>
                  </li>
                  <li>
                    <Link className="footer__nav-link" href="#">
                      Instagram
                    </Link>
                  </li>
                  <li>
                    <Link className="footer__nav-link" href="#">
                      Twitter
                    </Link>
                  </li>
                  <li>
                    <Link className="footer__nav-link" href="#">
                      Facebook
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="footer__divider"></div>
          <div className="footer__bottom">
            <p className="footer__bottom-rights">
              ©2022 MORENT. All rights reserved
            </p>
            <div className="footer__bottom-links">
              <Link href="#" className="footer__bottom-link">
                Privacy & Policy
              </Link>
              <Link href="#" className="footer__bottom-link">
                Terms & Condition
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
