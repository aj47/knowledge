---
kind: note
id: tax-fbar-prep-2025
title: FBAR Prep — 2025
context: search-only
updatedAt: 1773765021886
tags: tax
createdAt: 1773763999624
summary: FinCEN Form 114 prep notes for AJ / Arash Joobandi. Aggregate value of foreign financial accounts exceeded USD $10,000 at some point in calendar year 2025. Known trigger: - ING Savings account reac...
references: tax/fbar-prep-2025.md
---

# FBAR Prep — 2025

FinCEN Form 114 prep notes for AJ / Arash Joobandi.

## Why FBAR is likely required
Aggregate value of foreign financial accounts exceeded USD $10,000 at some point in calendar year 2025.

Known trigger:
- ING Savings account reached **AUD 19,195.57** on **2025-06-16**

## Accounts identified so far

### 1) ING Orange Everyday
- Institution: ING
- Account type: Everyday / transaction account
- Account number: **needs confirmation**
- Source file: `ING-Transactions-2025.csv`
- Max balance found: **AUD 9,868.78**
- Date of max balance: **2025-05-16**
- Notes: CSV includes running balance column, suitable support for max-balance calculation.

### 2) ING Savings Maximiser
- Institution: ING
- Account type: Savings account
- Account number: **0803627632** (from transfer descriptions; confirm official account number formatting)
- Source file: `ING-Savings-2025.csv`
- Max balance found: **AUD 19,195.57**
- Date of max balance: **2025-06-16**
- Notes: This account alone likely pushes AJ over the FBAR threshold.

### 3) Westpac USD Currency Account
- Institution: Westpac
- Account type: USD currency account
- Account number / identifier: **507688**
- BSB shown in PDF: **034-702**
- Source file: `westpac 2025.pdf`
- Max balance to use: **USD 1,438.60**
- Notes: User confirmed max balance was 1,438.60 USD.


### 4) St.George Freedom
- Institution: St.George
- Account type: Freedom / transaction account
- Account number: **needs confirmation**
- Source file: `stg freedom.csv`
- Max balance found: **AUD 8,883.39**
- Date of max balance: **2025-03-24**
- Notes: CSV includes balance column and is suitable support for max-balance calculation.

## Supporting documents currently in tax folder
- `ING-Transactions-2025.csv`
- `ING-Savings-2025.csv`
- `westpac 2025.pdf`
- `stg freedom.csv`

## Still useful to confirm before filing
- Full legal account names exactly as they should appear on FBAR
- Bank addresses / country for each institution
- Official account number for ING Orange Everyday
- Official account number for St.George Freedom
- Whether there were any additional foreign accounts in 2025:
  - other Australian bank accounts
  - brokerage / trading accounts
  - Wise / Revolut / PayPal balances
  - crypto exchange fiat accounts if relevant to reporting

## Working conclusion
Based on current records, AJ likely needs to file an FBAR for 2025.

## Quick account summary
| Institution | Account | Currency | Max balance | Date |
|---|---|---:|---:|---|
| ING | Orange Everyday | AUD | 9,868.78 | 2025-05-16 |
| ING | Savings Maximiser | AUD | 19,195.57 | 2025-06-16 |
| Westpac | USD Currency Account 507688 | USD | 1,438.60 | user confirmed |
| St.George | Freedom | AUD | 8,883.39 | 2025-03-24 |
