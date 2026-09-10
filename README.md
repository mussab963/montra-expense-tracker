# Montra

Montra is an Arabic-first bilingual personal finance web app built with HTML, CSS and vanilla JavaScript.

## Core experience

- Arabic is the default language with Tajawal typography and full RTL support
- Full English interface with LTR layout
- Regular income can be weekly or monthly
- Income can be entered in USD or SYP
- Every expense/income keeps the currency the user actually paid or received
- No global display-currency switch: amounts stay in their original currency
- Each income and expense shows its live equivalent in the other currency
- Live conversion is shown while typing, before saving
- Automatic USD/SYP exchange rate with source and update timestamp visible in the UI
- Primary FX source: LiraScope public API, preferring its effective/market USD rate
- Fallback FX source: ExchangeRate-API open endpoint if the primary service is unavailable
- FX responses are cached locally for six hours to avoid unnecessary API traffic
- Previously fetched FX data stays available if the user temporarily loses connectivity
- Safe daily spending estimate based on expected income, recorded expenses and unpaid monthly commitments
- Month-end spending forecast
- Current week vs previous week spending comparison
- Frequent-expense quick add
- Monthly recurring commitments (rent, internet, subscriptions, etc.)
- "Mark as paid" turns a commitment into a real expense transaction
- Category budgets
- Savings goals in USD or SYP
- Smart, context-aware insights
- Daily money principles inspired by Ramit Sethi, Morgan Housel, and the 50/30/20 framework
- Search and filter transactions
- CSV export
- LocalStorage persistence with no backend required
- Responsive desktop/mobile design

## Run locally

For the automatic exchange-rate API, serving the folder through a local static server is recommended instead of opening `index.html` with a `file://` URL.

For example with VS Code Live Server, or any other static server, open the project root and serve `index.html`.

## GitHub Pages

Push the contents of this folder to a GitHub repository and enable GitHub Pages. No API secret is stored in this project.

## Exchange-rate behavior

Montra requests the USD/SYP rate automatically. It prefers LiraScope's effective or market rate because the app is designed for practical personal spending. The UI always identifies the data source and timestamp. If LiraScope cannot be reached, Montra attempts the keyless ExchangeRate-API endpoint as a reference fallback. If both are unavailable, Montra keeps the most recently cached rate instead of inventing a new one.

## First-run experience

- Arabic is the default language with Tajawal typography.
- On the first visit, Montra asks only for the user name.
- A concise four-step usage guide explains the recommended workflow and links directly to adding income or the first expense.
- The guide stays available from the sidebar at any time.
- Light and dark appearance modes are available and persist locally.
