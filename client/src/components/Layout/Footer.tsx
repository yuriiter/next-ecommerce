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
              Our vision at Morent is to simplify and enhance your car rental
              experience.
            </p>
          </div>
          <div className="footer__navs">
            <div className="footer__nav">
              <p className="footer__nav-title">About</p>
              <nav>
                <ul className="footer__nav-link-list">
                  <li>
                    <Link
                      className="footer__nav-link"
                      href="/articles/how-it-works"
                    >
                      How it works
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="footer__nav-link"
                      href="/articles/featured"
                    >
                      Featured
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="footer__nav-link"
                      href="/articles/partnership"
                    >
                      Partnership
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="footer__nav-link"
                      href="/articles/business-relation"
                    >
                      Business Relation
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
                    <Link className="footer__nav-link" href="/articles/events">
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link className="footer__nav-link" href="/articles/blog">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="footer__nav-link"
                      href="https://www.apple.com/apple-podcasts/"
                    >
                      Podcast
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="footer__nav-link"
                      href="https://instagram.com/"
                    >
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
                    <Link
                      className="footer__nav-link"
                      href="https://discord.com/"
                    >
                      Discord
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="footer__nav-link"
                      href="https://instagram.com/"
                    >
                      Instagram
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="footer__nav-link"
                      href="https://twitter.com/"
                    >
                      (X) Twitter
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="footer__nav-link"
                      href="https://facebook.com/"
                    >
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
              <Link
                href="/articles/privacy-and-policy"
                className="footer__bottom-link"
              >
                Privacy & Policy
              </Link>
              <Link
                href="/articles/terms-and-conditions"
                className="footer__bottom-link"
              >
                Terms & Condition
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
