import type { FAQSection } from './types'

export const FAQ_SECTIONS: FAQSection[] = [
  {
    heading: 'What is dollrbin?',
    questions: [
      {
        q: 'What is dollrbin?',
        a: 'dollrbin is a marketplace for buying and selling used vinyl records. Every sale is protected. Payment goes directly to the seller\'s Stripe account, but payouts to their bank are held until the record is delivered. You then have 7 days to play it, inspect it, and open a dispute if something isn\'t right.',
      },
      {
        q: 'How is dollrbin different from other marketplaces?',
        a: 'dollrbin has a built-in dispute resolution system. If your record never shows up or arrives damaged, you can open a dispute directly from your order page and our team will step in. Sellers are required to provide tracking, and payouts are delayed to ensure funds are available for refunds if needed.',
      },
      {
        q: 'Is dollrbin free to join?',
        a: 'Yes. Creating an account is free for both buyers and sellers.',
      },
    ],
  },
  {
    heading: 'Buying',
    questions: [
      {
        q: 'Are there any fees for buyers?',
        a: 'No. Buyers pay no platform or service fee — you pay the item price, shipping, and any applicable sales tax, and that\'s it. Buyer protection is included at no extra cost. You\'ll always see the exact total before you pay.',
      },
      {
        q: 'What happens if my record never arrives?',
        a: 'Open a dispute from your order page. Upload photos and describe the issue. The seller has 5 days to respond. If they don\'t, the dispute is automatically resolved in your favor with a full refund. Once the seller responds, both parties can exchange messages and evidence, and our team makes a final decision.',
      },
      {
        q: 'What if the record isn\'t as described?',
        a: 'Open a dispute from your order page within 7 days of delivery. Upload at least one photo showing the issue. The seller has 5 days to respond, and both parties can exchange messages and evidence. Our team reviews everything and decides the outcome: partial refund, full refund with or without return, or dispute denied. We take condition misrepresentation seriously, and sellers who repeatedly misrepresent items risk suspension.',
      },
      {
        q: 'When does the seller get paid?',
        a: 'Payment is captured at checkout and deposited into the seller\'s Stripe balance. Payouts to the seller\'s bank are held until delivery is confirmed via tracking, then released 2 to 7 days later depending on the seller\'s track record. Your right to open a dispute is separate: you always get 7 days from delivery, whether or not the seller has been paid yet. If a dispute is upheld after the seller was paid, we recover the refund from them.',
      },
      {
        q: 'How long do I have to complete payment?',
        a: 'For a fixed-price purchase you have 24 hours from the time you initiate it. If you win an auction, you have 48 hours to pay. Either way, if you don\'t pay within the window the order is automatically cancelled and the listing becomes available again.',
      },
      {
        q: 'Are auction bids binding?',
        a: 'Yes. Placing a bid is a commitment to buy at that price. If you win, you have 48 hours to complete payment. If you don\'t pay, the order is cancelled, the record is released, and the non-payment is recorded against your account. Repeated non-payment suspends your ability to bid — the first time is a warning, a second results in a 30-day bidding suspension, and further offenses lead to a longer suspension and account review. You can always still buy fixed-price listings. Only bid if you intend to pay.',
      },
      {
        q: 'What payment methods are accepted?',
        a: 'Credit and debit cards via Stripe. We don\'t handle card details ourselves. Stripe processes everything on their secure hosted page.',
      },
      {
        q: 'Can I buy without an account?',
        a: 'You need an account to buy. It takes about 30 seconds to sign up and lets us protect your order and handle any issues that come up.',
      },
      {
        q: 'Will I be charged sales tax?',
        a: 'Sales tax is calculated and added at checkout where required by law, based on your shipping address. dollrbin collects and remits sales tax as a marketplace facilitator. The exact amount is shown before you pay.',
      },
      {
        q: 'Will I be charged import duties on international orders?',
        a: 'International orders may be subject to import duties, taxes, or customs fees charged by your country. These fees are determined and collected by your local customs authority, not by dollrbin or the seller. They are the buyer\'s responsibility and are not included in the item price or shipping cost.',
      },
    ],
  },
  {
    heading: 'Selling',
    questions: [
      {
        q: 'How much does it cost to sell?',
        a: 'There are no listing fees. A 5% transaction fee is deducted from the sale price when an item sells. This is lower than most competing marketplaces.',
      },
      {
        q: 'When do I get paid?',
        a: 'Payouts are released when the buyer confirms receipt, or automatically after delivery is confirmed via tracking \u2014 whichever comes first. How long we hold it depends on your track record: 7 days when you\'re starting out, 4 days once you have 5 completed sales, and 2 days once you\'re a Trusted Seller (5+ ratings averaging 4.5\u2605 or better). You can see which tier you\'re on, and what gets you to the next one, on your Payouts page. After release, the payout transfers to your bank automatically (typically 2 business days).',
      },
      {
        q: 'How does payment actually reach me?',
        a: 'Through Stripe Connect. You\'ll connect a bank account during setup, and Stripe handles the payout directly. Standard transfer times apply (typically 2 business days).',
      },
      {
        q: 'Do I need to set up Stripe before I can list?',
        a: 'You can create listings without Stripe connected, but buyers won\'t be able to complete checkout until your payout account is set up. We\'ll prompt you to connect it from your dashboard.',
      },
      {
        q: 'What happens if a buyer opens a dispute?',
        a: 'You\'ll get a notification and have 5 days to respond with one proposal. You can review the buyer\'s claim, upload your own evidence, and propose a resolution (accept refund, counter with partial refund, or deny). If you don\'t respond within 5 days, the dispute is automatically resolved in the buyer\'s favor. Once you respond, the buyer has 5 days to accept your proposal or escalate to our team. If the buyer doesn\'t respond, your proposal is automatically accepted. Both parties can exchange messages through the dispute thread while the case is open.',
      },
      {
        q: 'Can I list auctions?',
        a: 'Yes. You can list records as fixed price or auction. Auctions run for 1, 3, 5, 7, or 9 days. Once an auction ends, the highest bidder becomes the buyer and the same buyer protection applies.',
      },
      {
        q: 'Can I cancel an auction?',
        a: 'Only before any bids are placed. Once someone has bid, the auction runs to completion.',
      },
      {
        q: 'What if the winning bidder doesn\'t pay?',
        a: 'Winners have 48 hours to pay. If they don\'t, the order is automatically cancelled and your listing is released so you can relist it — you\'re never left waiting indefinitely. The non-paying bidder receives a strike against their bidding privileges, and repeat offenders are suspended from bidding.',
      },
      {
        q: 'How many photos do I need?',
        a: 'At least 2 listing photos of the actual item you\'re selling (front cover and center label). When you ship, you\'re also required to upload at least 2 photos of the item and packaging — you can take these with your camera or upload them, and they\'re used as evidence if a dispute or chargeback is filed.',
      },
      {
        q: 'Do I need a return address?',
        a: 'Yes. You must set a return address in your profile before publishing listings. This ensures returns can be shipped to you if a dispute requires one.',
      },
      {
        q: 'How long do I have to ship?',
        a: 'Sellers must ship within 5 days of payment. If you don\'t ship within that window, the order is automatically cancelled, the buyer is refunded, and your listing is reactivated.',
      },
      {
        q: 'What happens if I repeatedly fail to ship orders?',
        a: 'Each order that is auto-cancelled for non-shipment counts against your account. A pattern of unshipped orders — or a high cancellation rate — flags your account for review and can lead to warnings, temporary selling restrictions (such as held payouts or being unable to create new listings), or suspension. Because payouts are only released after delivery is confirmed, you are never paid for an order you don\'t ship; these measures exist to protect buyers from sellers who repeatedly take orders they can\'t fulfill.',
      },
      {
        q: 'How do I ship my records safely?',
        a: 'Use a sturdy mailer with cardboard stiffeners or a purpose-built LP mailer. Wrap the record in a plastic sleeve and cushion it to prevent seam splits. Always use tracked shipping \u2014 you\'re required to add a tracking number to every order.',
      },
      {
        q: 'Can I set a minimum offer price?',
        a: 'Yes. When creating a listing, you can set an auto-decline threshold. Any offers below that amount are automatically rejected. You can also save this as a default in your Settings so it applies to all new listings.',
      },
    ],
  },
  {
    heading: 'Auctions',
    questions: [
      {
        q: 'How do auctions work?',
        a: 'dollrbin uses proxy bidding (like eBay). You enter the maximum you\'re willing to pay, but the system only bids the minimum needed to keep you in the lead. If no one else bids, you win at the starting price, not your max. If someone outbids you, you\'ll get a notification.',
      },
      {
        q: 'What is proxy bidding?',
        a: 'When you place a bid, you set a maximum. The system automatically bids on your behalf using the smallest increment needed to stay ahead. You only pay more if another bidder pushes the price up. If two bidders have the same max, the first bidder wins at that amount.',
      },
      {
        q: 'How are bid increments calculated?',
        a: 'Bid increments scale with price: $0.05 under $1, $0.25 from $1 to $4.99, $0.50 from $5 to $24.99, $1 from $25 to $99.99, and so on. This prevents penny-bidding on expensive items.',
      },
      {
        q: 'Can I raise my max bid?',
        a: 'Yes. If you\'re already the highest bidder, you can increase your max bid at any time without changing the current visible bid. This protects your position against future bidders.',
      },
    ],
  },
  {
    heading: 'Shipping',
    questions: [
      {
        q: 'Is tracking required?',
        a: 'Yes. Sellers are required to provide a valid tracking number for every order. This protects both parties in case of disputes.',
      },
    ],
  },
  {
    heading: 'Offers & messaging',
    questions: [
      {
        q: 'Can I make an offer on a fixed-price listing?',
        a: 'Yes. You can submit an offer on any fixed-price listing. The seller can accept, counter, or decline. If they set an auto-decline threshold, offers below that amount are automatically rejected.',
      },
      {
        q: 'Can I message a buyer or seller?',
        a: 'Yes. You can message the other party from the order detail page. This is useful for coordinating shipping details, asking about condition, or resolving issues before opening a formal dispute.',
      },
    ],
  },
  {
    heading: 'Buyer & seller protection',
    questions: [
      {
        q: 'How does payment protection work?',
        a: 'When a buyer pays, funds go directly to the seller\'s Stripe account, but the payout to their bank is held until the record is delivered. Two things then happen on separate clocks: the buyer gets 7 days to inspect the record and raise a dispute, and the seller is paid 2 to 7 days after delivery depending on their track record. The buyer\'s 7 days never changes \u2014 if a dispute is upheld after the seller has been paid, dollrbin recovers the refund from the seller.',
      },
      {
        q: 'How does buyer protection work?',
        a: 'Payment goes directly to the seller\'s Stripe account, but the payout to their bank is held until the record is delivered. If it arrives damaged or not as described, open a dispute from your order page within 7 days. You do not need to beat the seller\'s payout \u2014 your 7 days stand even if they have already been paid, and we recover the refund from them. Our team reviews the case and can issue a full or partial refund. Stripe\'s 120-day chargeback window provides an additional layer of protection.',
      },
      {
        q: 'How does seller protection work?',
        a: 'Sellers are required to provide tracking numbers, which serve as proof of delivery. Buyer\'s remorse is not a valid reason for a dispute. Only condition issues, damage in transit, or non-delivery qualify. We fight fraudulent chargebacks using tracking evidence on the seller\'s behalf.',
      },
      {
        q: 'How long do I have to open a dispute?',
        a: 'You have 7 days after delivery is confirmed to inspect the record and open a dispute \u2014 enough time to actually get it on a turntable and play both sides. Delivery is tracked automatically. Confirming receipt yourself ends the window early and releases the seller\'s funds, so only confirm once you\'re happy with the record.',
      },
      {
        q: 'What happens if a return is required?',
        a: 'If a dispute is resolved with a return, the buyer has 7 days to ship the item back with tracking (14 days for international returns) and must upload at least 2 photos of the item packed for return. The refund is only issued after the seller confirms receipt, not when the return ships. The seller must record an unboxing video when receiving the return. If the buyer doesn\'t ship by the deadline, the refund is cancelled and funds are released to the seller. Once the return is delivered, the seller has 48 hours to confirm or reject it. If they don\'t respond, the return is automatically confirmed and the buyer is refunded.',
      },
      {
        q: 'What if the seller doesn\'t respond to my dispute?',
        a: 'A seller ignoring a dispute does not stall your case. When you open a dispute the seller is notified and given a chance to respond, but our team reviews every case based on the available evidence — tracking, your photos, and your message history with the seller — and issues a resolution regardless of whether the seller replies. Where a dispute is resolved with a return, the seller has 48 hours after the return is delivered to confirm or reject it; if they don\'t respond, the return is automatically confirmed and you are refunded. Sellers who repeatedly go silent on disputes are flagged for review and may face restrictions or suspension.',
      },
      {
        q: 'Who pays for return shipping?',
        a: 'Return shipping is the seller\'s responsibility — never the buyer\'s, and never dollrbin\'s. A return only happens when a dispute is resolved in the buyer\'s favor (the item wasn\'t as described, was the wrong item, or arrived damaged), so the cost of sending it back falls to the seller, not the buyer. When a return is required, you ship the item back with tracking and, once the seller confirms receipt, you receive a full refund of everything you paid — item price, original shipping, and any sales tax. For low-value or destroyed items where a return isn\'t worth the postage, a dispute may instead be resolved with a partial or full refund and no return required.',
      },
      {
        q: 'What if someone files a chargeback instead of a dispute?',
        a: 'We automatically submit tracking evidence, shipping photos, delivery confirmation, and order details to Stripe to fight chargebacks on the seller\'s behalf. Sellers can also submit additional evidence from the order page. Chargeback fees assessed by Stripe are the seller\'s responsibility, but dollrbin fights every chargeback automatically using all available evidence. Buyers who file a chargeback are permanently banned from making future purchases on dollrbin. This is a zero-tolerance policy. We strongly encourage using our in-app dispute system instead, which is faster and protects both parties.',
      },
      {
        q: 'Is my payment information secure?',
        a: 'Yes. We never see or store your card details. All payments are processed by Stripe, which is PCI-compliant and used by millions of businesses worldwide.',
      },
    ],
  },
]
