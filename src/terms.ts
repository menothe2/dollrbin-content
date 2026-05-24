import type { TermsSection } from './types'

export const LAST_UPDATED = 'May 2026'

export const TERMS_SECTIONS: TermsSection[] = [
  {
    title: '1. Acceptance',
    body: 'By creating an account or using dollrbin ("the Service"), you agree to these Terms of Service. If you do not agree, do not use the Service. You must be at least 18 years old to use the Service.',
  },
  {
    title: '2. The Service',
    body: 'dollrbin is an online marketplace that connects buyers and sellers of vinyl records. The Service provides tools for listing, discovering, purchasing, and selling vinyl records, as well as want list tracking and notifications. dollrbin is a venue and payment facilitator \u2014 we are not a party to transactions between buyers and sellers, and we do not take possession of, inspect, or authenticate any items.',
  },
  {
    title: '3. Your account',
    body: 'You are responsible for maintaining the security of your account. You must provide accurate information when signing up, including a valid phone number for identity verification. You may not share your account or use the Service on behalf of others without permission. One person may not operate multiple accounts. By creating an account, you consent to receiving transactional communications from dollrbin via email, push notifications, and SMS, including order updates, dispute notifications, and security alerts.',
  },
  {
    title: '4. Acceptable use',
    body: 'You agree not to:',
    items: [
      'Attempt to scrape, reverse engineer, or abuse the Service',
      'Use the Service for any unlawful purpose',
      'Import data you do not have the right to use',
      'List counterfeit, bootleg, or stolen records',
      'Misrepresent the condition of items you sell',
      'Manipulate prices, ratings, or dispute outcomes',
      'Harass, threaten, or abuse other users',
    ],
  },
  {
    title: '5. Fees and payments',
    body: 'Buying on dollrbin incurs a service fee added at checkout (currently 10% of the item price, minimum $1). There are no listing fees or transaction fees for sellers. Fees are shown clearly before you complete any purchase. dollrbin reserves the right to adjust fee percentages with 30 days\' notice.\n\nAll payments are processed by Stripe directly on the seller\'s connected payment account. dollrbin never stores your payment card details. Funds are held in the seller\'s Stripe balance during shipping and released 48 hours after delivery is confirmed by the carrier, provided no dispute has been opened. Buyers can also confirm receipt early to release funds immediately.',
  },
  {
    title: '6. Seller obligations',
    body: 'Sellers are solely responsible for the accuracy of their listings, including condition grades, descriptions, and photos. dollrbin does not verify, inspect, or authenticate items listed on the platform.',
    items: [
      'Sellers must ship orders within 5 days of payment. Orders not shipped within this window are automatically cancelled and the buyer is refunded.',
      'Sellers must provide a valid tracking number when marking an order as shipped.',
      'Listings must include at least 3 photos of the actual item being sold.',
      'Condition grades must accurately reflect the item. Repeated misrepresentation may result in account suspension.',
      'Sellers must upload at least 2 photos of the item and packaging before shipping every order. These photos are captured live from your camera and are used as evidence in disputes and chargebacks.',
      'Sellers must set a return address in their profile before publishing listings.',
      'Sellers must connect a Stripe account to receive payouts before listing items for sale.',
      'Orders over $100 automatically require delivery signature for strongest chargeback defense.',
    ],
  },
  {
    title: '7. Buyer obligations',
    items: [
      'Buyers must complete payment within 24 hours of initiating a purchase. Unpaid orders are automatically cancelled.',
      'Buyers should inspect items promptly upon delivery and report issues within the dispute window.',
      'Buyers with a dispute rate above 20% (with 3 or more purchases) are blocked from making new purchases.',
      'Buyers who file a chargeback with their bank instead of using our dispute system may be permanently suspended from making future purchases.',
      'International buyers are solely responsible for any customs duties, import taxes, tariffs, or brokerage fees imposed by their country. These charges are not included in the item price or shipping cost and are not collected or controlled by dollrbin or the seller. Refusal to pay customs charges resulting in a returned package does not entitle the buyer to a refund of shipping costs.',
    ],
  },
  {
    title: '8. Payment protection and payouts',
    body: 'dollrbin controls seller payouts during shipping to protect both parties:',
    items: [
      'Payment is captured at checkout and deposited into the seller\'s Stripe balance. Payouts to the seller\'s bank are held until delivery is confirmed.',
      'Once the carrier confirms delivery, the seller\'s payout is released after a 48-hour inspection window.',
      'Buyers can confirm receipt at any time to release the seller\'s payout immediately.',
      'If a dispute is opened before the payout is released, the seller\'s payout is held until the dispute is resolved.',
      'If delivery tracking is unavailable, a fallback release window applies to ensure sellers are eventually paid.',
      'Sellers are responsible for any chargeback fees assessed by our payment processor. dollrbin automatically submits tracking and shipping evidence to fight chargebacks on the seller\'s behalf.',
    ],
  },
  {
    title: '9. Disputes and returns',
    body: 'Our full dispute policy is available at dollrbin.com/dispute-policy. Key points:',
    items: [
      'Buyers may open a dispute within the 48-hour inspection window after delivery is confirmed by the carrier.',
      'Valid dispute reasons include: item not as described, wrong item, damaged in transit, or never received.',
      'Buyer\'s remorse is not a valid dispute reason.',
      'Disputes can only be opened on orders that are currently shipping or have been delivered. Orders that have been cancelled, refunded, or completed cannot be disputed.',
      'The seller has 5 days to respond to a dispute with one proposal. If the seller doesn\'t respond, the dispute is automatically resolved in the buyer\'s favor with a full refund.',
      'If the seller proposes a resolution, the buyer has 5 days to accept or escalate. If the buyer doesn\'t respond, the seller\'s proposal is automatically accepted.',
      'Once both parties have submitted evidence, our team reviews and may issue a partial refund, full refund (with or without return), or deny the dispute.',
      'Partial refunds have a minimum of 15% of the sale price or $1, whichever is greater.',
      'When a return is required, the buyer has 7 days to ship with tracking and must upload photos. The refund is issued only after the seller confirms receipt.',
      'Sellers must record an unboxing video when receiving a return.',
      'Maximum 2 disputes can be filed per order, and only 1 can be active at a time.',
      'If the buyer stops participating in a dispute for 7 days, it is automatically denied.',
    ],
  },
  {
    title: '10. Account suspension',
    body: 'We reserve the right to suspend or terminate accounts that violate these terms, including but not limited to: repeated condition misrepresentation, fraudulent disputes, filing chargebacks instead of using our dispute system, harassment of other users, listing prohibited items, or any form of marketplace manipulation. Suspended users will be notified by email.',
  },
  {
    title: '11. Disclaimers',
    body: 'The Service is provided "as is" without warranties of any kind. We do not guarantee uninterrupted availability, accuracy of match alerts, or that any specific record will be found. dollrbin is not a party to transactions between buyers and sellers. We facilitate the transaction and provide dispute resolution, but we do not take possession of items or guarantee their condition.',
  },
  {
    title: '12. Dispute decision authority',
    body: 'You acknowledge and agree that dollrbin has sole and absolute discretion to resolve disputes between buyers and sellers. Our dispute decisions \u2014 including determinations regarding refunds, partial refunds, returns, and account actions \u2014 are final and binding on all parties.\n\ndollrbin acts as a neutral facilitator and is not a party to any transaction between buyers and sellers. We do not guarantee the accuracy of listings, the condition of items, or the conduct of any user. We are not liable for the actions, omissions, or representations of any buyer or seller on the platform.\n\nBy using the Service, you waive any right to challenge, appeal, or seek judicial review of dispute decisions made by dollrbin, except through the arbitration process described in Section 13 or as required by applicable law.',
  },
  {
    title: '13. Binding arbitration and class action waiver',
    body: 'PLEASE READ THIS SECTION CAREFULLY. IT AFFECTS YOUR LEGAL RIGHTS, INCLUDING YOUR RIGHT TO FILE A LAWSUIT IN COURT.\n\nYou and dollrbin agree that any dispute, claim, or controversy arising out of or relating to these Terms, the Service, or any transaction facilitated through the Service (collectively, "Disputes") will be resolved through binding individual arbitration rather than in court, except that either party may bring qualifying claims in small claims court.\n\nArbitration rules: Arbitration will be administered by JAMS under its Streamlined Arbitration Rules and Procedures, or by another mutually agreed-upon arbitration provider. The arbitration will be conducted in English. The arbitrator\'s decision will be final and binding and may be entered as a judgment in any court of competent jurisdiction.\n\nInformal resolution first: Before initiating arbitration, you agree to first contact us at hello@dollrbin.com and attempt to resolve the Dispute informally for at least 30 days. If we cannot resolve the Dispute informally, either party may then proceed to arbitration.\n\nClass action waiver: YOU AND DOLLRBIN AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS, CONSOLIDATED, OR REPRESENTATIVE ACTION. The arbitrator may not consolidate more than one person\'s claims and may not preside over any form of representative or class proceeding.\n\nOpt-out: You may opt out of this arbitration agreement by sending written notice to hello@dollrbin.com within 30 days of creating your account. If you opt out, you and dollrbin may each bring claims against the other in court.',
  },
  {
    title: '14. Indemnification',
    body: 'You agree to indemnify, defend, and hold harmless dollrbin, its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, costs, and expenses (including reasonable attorneys\' fees) arising out of or relating to: (a) your use of the Service; (b) your violation of these Terms; (c) your violation of any rights of another party, including any buyer or seller; or (d) any content you submit to the Service, including listings, photos, messages, and dispute evidence.',
  },
  {
    title: '15. Limitation of liability',
    body: 'To the fullest extent permitted by law, dollrbin\'s total liability to you for any claim arising from use of the Service is limited to the greater of (a) the amount you paid to dollrbin in fees during the 3 months preceding the claim, or (b) $100.\n\nIn no event shall dollrbin be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, goodwill, or other intangible losses, regardless of whether we have been advised of the possibility of such damages.',
  },
  {
    title: '16. Governing law and jurisdiction',
    body: 'These Terms are governed by the laws of the State of California, without regard to its conflict of law provisions. To the extent that arbitration does not apply, you agree to submit to the exclusive jurisdiction of the state and federal courts located in Los Angeles County, California.',
  },
  {
    title: '17. Changes',
    body: 'We may update these terms from time to time. If we make material changes, we will notify you by email or through the Service at least 30 days before the changes take effect. Continued use of the Service after changes take effect constitutes acceptance of the new terms. If you do not agree to the updated terms, you must stop using the Service.',
  },
  {
    title: '18. Copyright and DMCA',
    body: 'dollrbin respects the intellectual property rights of others and expects users of the Service to do the same. We will respond to notices of alleged copyright infringement that comply with applicable law and are properly provided to our designated Copyright Agent.\n\nIf you believe that your copyrighted work has been copied or used in a way that constitutes copyright infringement, please visit dollrbin.com/copyright for instructions on how to submit a takedown notice.\n\nIt is dollrbin\'s policy, in appropriate circumstances, to terminate the accounts of users who are repeat infringers.',
  },
  {
    title: '19. Severability',
    body: 'If any provision of these Terms is found to be unenforceable or invalid by a court or arbitrator, that provision will be enforced to the maximum extent permissible, and the remaining provisions will remain in full force and effect.',
  },
  {
    title: '20. Contact',
    body: 'Questions? Email hello@dollrbin.com.',
  },
]
