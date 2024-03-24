import { Article } from "@/components/Article";

const privacyPolicyContent = `
At Morent, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our website and services.

## Information We Collect

We may collect personal information from you when you interact with our website or use our services. This information may include:

- Contact Information: such as your name, email address, phone number, and mailing address.
- Account Information: such as your username, password, and other account details.
- Payment Information: such as credit card details or other payment methods.
- Usage Data: such as your browsing activity, IP address, device information, and cookies.

## How We Use Your Information

We may use your information for various purposes, including:

- Providing and improving our services.
- Personalizing your experience and customizing content.
- Communicating with you about your account and transactions.
- Marketing and promotional purposes, with your consent.
- Analyzing usage trends and gathering demographic information.

## Data Security

We take data security seriously and implement various measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.

## Your Rights and Choices

You have the right to access, update, or delete your personal information. You may also opt-out of certain communications or marketing activities. Please contact us if you wish to exercise any of these rights or have any questions about how we handle your data.

## Changes to this Privacy Policy

We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website or through other communication channels.

## Contact Us

If you have any questions, concerns, or complaints about our Privacy Policy or data practices, please contact us at privacy@morent.com.

`;

export default function PrivacyPolicyPage() {
  return <Article title="Privacy & Policy">{privacyPolicyContent}</Article>;
}
