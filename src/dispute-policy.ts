import type { DisputePolicySection } from './types'

export const DISPUTE_POLICY_SECTIONS: DisputePolicySection[] = [
  {
    heading: 'How disputes work',
    items: [
      'If something goes wrong with an order, the buyer can open a dispute directly from the order page.',
      'Upload photos showing the issue and describe what happened.',
      'The seller has 5 days to respond to the dispute. If the seller doesn\'t respond, the dispute is automatically resolved in the buyer\'s favor with a full refund.',
      'Once the seller responds, both parties can exchange messages and additional evidence through the dispute thread.',
      'dollrbin reviews the evidence from both sides and makes a final decision.',
    ],
  },
  {
    heading: 'What qualifies for a dispute',
    items: [
      'Not as described: the record\'s condition is significantly worse than listed (e.g., listed VG+ but has loud surface noise or visible scratches).',
      'Wrong item: you received a different record than what was listed.',
      'Damaged in transit: the record arrived cracked, warped, or with a split seam that wasn\'t disclosed.',
      'Never received: tracking shows no delivery and the seller can\'t provide proof of shipment.',
    ],
  },
  {
    heading: 'What doesn\'t qualify',
    items: [
      'Buyer\'s remorse: you changed your mind or no longer want the record.',
      'Minor cosmetic issues consistent with the listed condition grade (e.g., light sleeve wear on a VG+ record).',
      'Disagreement about subjective grading within one grade level. Grading is inherently subjective. If a record is listed as VG+ and you\'d call it VG, that alone may not qualify.',
      'Issues reported after the 48-hour inspection window has closed (starts when delivery is confirmed via tracking).',
    ],
  },
  {
    heading: 'Possible outcomes',
    subsections: [
      {
        title: 'Partial refund (no return required)',
        text: 'For minor condition discrepancies where the record is still playable and desirable. The buyer keeps the record and receives a partial refund (minimum 15% of the sale price or $1, whichever is greater).',
      },
      {
        title: 'Full refund with return',
        text: 'For significant issues. The buyer has 7 days to ship the record back with tracking and must upload at least 2 photos of the item packed for return. The refund is only issued after the seller confirms receipt \u2014 not before. The seller must record a video of themselves unboxing the return package as evidence. If the buyer doesn\'t ship within the 7-day deadline, the refund is cancelled and funds are released to the seller. The seller also has 7 days to respond to the return \u2014 if they don\'t, the return is automatically confirmed and the buyer is refunded. If the seller disputes the return contents, the case is escalated back to our team for a final decision. When the issue is the seller\'s fault, a return shipping credit may be included to cover the buyer\'s return postage.',
      },
      {
        title: 'Full refund without return',
        text: 'For cases where the record arrived destroyed (cracked, severely warped) or the cost of return shipping exceeds the item\'s value. This is at dollrbin\'s discretion.',
      },
      {
        title: 'Dispute denied',
        text: 'If the evidence doesn\'t support the claim, or the issue doesn\'t qualify (e.g., buyer\'s remorse). The order proceeds as normal and the seller receives their payout. If the buyer stops participating in the dispute for 7 days, it is automatically denied.',
      },
    ],
  },
  {
    heading: 'Timeline',
    items: [
      'Dispute window: buyers can open a dispute within the 48-hour inspection window after delivery is confirmed via tracking.',
      'Seller response: the seller has 5 days to respond. A reminder is sent after 48 hours. If the seller doesn\'t respond, the dispute is resolved in the buyer\'s favor.',
      'Dispute messaging: once the seller responds, both parties can exchange messages and photos for up to 7 days while dollrbin reviews.',
      'Return deadline: if a return is required, the buyer has 7 days to ship it. The seller has 7 days to confirm or reject the return after receiving it.',
      'Refund processing: once approved, refunds are processed immediately.',
    ],
  },
  {
    heading: 'Photo & video evidence',
    items: [
      'Photo evidence is required for all disputes. Upload at least 2 photos clearly showing the issue.',
      'Sellers must upload at least 2 photos of the item and packaging before shipping every order. These photos are captured live from your camera to ensure authenticity.',
      'Return photos from the buyer must also be captured live (at least 2 photos of the item packed for return).',
      'Sellers must record an unboxing video when receiving a return \u2014 this is required whether confirming or rejecting the return.',
      'Clear, well-lit photos and video help resolve disputes faster.',
    ],
  },
  {
    heading: 'Seller protection',
    items: [
      'Sellers are never required to accept returns for buyer\'s remorse.',
      'Tracking numbers serve as proof of delivery, so always provide tracking when you ship.',
      'We automatically fight chargebacks on your behalf by submitting tracking evidence, shipping photos, delivery confirmation, and order details to Stripe.',
      'Sellers can submit additional chargeback evidence (photos, screenshots, written statements) from the order page.',
      'For full refunds with return, the refund is only issued after you confirm receipt \u2014 not when the buyer ships it.',
      'If the return contents are wrong (empty box, different item), you can reject the return with your unboxing video as evidence and dollrbin will re-review.',
      'You must set a return address in your profile before publishing listings to ensure returns can be shipped to you.',
      'Orders over $100 automatically require delivery signature for strongest chargeback defense.',
    ],
  },
  {
    heading: 'Chargebacks',
    items: [
      'We strongly encourage buyers to use our in-app dispute system rather than filing a chargeback with their bank.',
      'When a chargeback is filed, we automatically submit evidence to Stripe on the seller\'s behalf, including tracking information, shipping photos, and delivery confirmation.',
      'Chargeback fees assessed by our payment processor are the seller\'s responsibility. dollrbin fights every chargeback automatically to minimize seller losses.',
      'Buyers who file a chargeback instead of using our dispute system may be permanently suspended from making future purchases on dollrbin.',
      'Sellers can submit additional evidence to support the chargeback defense from the order page.',
      'If you have an issue with an order, please use our dispute system first. It\'s faster and protects both parties.',
    ],
  },
  {
    heading: 'Repeat violations',
    items: [
      'Sellers who repeatedly misrepresent item condition will receive warnings and may be suspended.',
      'Buyers with a dispute rate above 20% (with 3 or more purchases) are blocked from making new purchases.',
      'Buyers who file a chargeback may be permanently suspended from purchasing.',
      'We track dispute rates for both buyers and sellers. Patterns matter.',
      'Maximum 2 disputes can be filed per order, and only 1 can be active at a time.',
    ],
  },
  {
    heading: 'Auctions',
    items: [
      'Auction purchases are subject to the same dispute policy as fixed-price sales.',
      'Winning bidders who do not complete payment within 24 hours forfeit the auction and may face account restrictions.',
    ],
  },
  {
    heading: 'Platform role and decision finality',
    items: [
      'dollrbin resolves disputes based on available evidence and platform policies. Dispute decisions are administrative and do not constitute legal determinations of fault or liability.',
      'dollrbin acts as a neutral facilitator and is not a party to transactions between buyers and sellers. We do not inspect, authenticate, or take possession of items.',
      'Dispute decisions are final and binding on all parties, as outlined in our Terms of Service. By using dollrbin, you agree to accept dispute outcomes as described in these policies.',
    ],
  },
]
