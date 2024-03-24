import { Article } from "@/components/Article";

const termsAndConditionsContent = `
Welcome to Morent! These Terms and Conditions outline the rules and regulations for the use of our website and services.

By accessing this website or using our services, you accept these Terms and Conditions in full. If you disagree with any part of these terms, please do not use our website or services.

## Intellectual Property Rights

Unless otherwise stated, Morent and/or its licensors own the intellectual property rights for all material on our website and services. All intellectual property rights are reserved.

## Restrictions

You are specifically restricted from:

- Publishing any website material in any other media.
- Selling, sublicensing, or otherwise commercializing any website material.
- Using this website or services in any way that is or may be damaging to the website or services.
- Using this website or services in any way that impacts user access to the website or services.
- Engaging in any data mining, harvesting, or other similar activity.

## No Warranties

This website and services are provided "as is," with all faults, and Morent makes no representations or warranties of any kind related to our website or services.

## Limitation of Liability

In no event shall Morent, nor any of its officers, directors, and employees, be liable to you for anything arising out of or in any way connected with your use of this website or services.

## Severability

If any provision of these Terms and Conditions is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.

## Variation of Terms

Morent is permitted to revise these Terms and Conditions at any time as it sees fit, and by using this website or services, you are expected to review these Terms and Conditions regularly.

## Governing Law

These Terms and Conditions will be governed by and construed in accordance with the laws of [Your Jurisdiction], and you submit to the non-exclusive jurisdiction of the state and federal courts located in [Your Jurisdiction] for the resolution of any disputes.

## Contact Us

If you have any questions or concerns about these Terms and Conditions, please contact us at terms@morent.com.

`;

export default function TermsAndConditionsPage() {
  return (
    <Article title="Terms and Conditions">{termsAndConditionsContent}</Article>
  );
}
