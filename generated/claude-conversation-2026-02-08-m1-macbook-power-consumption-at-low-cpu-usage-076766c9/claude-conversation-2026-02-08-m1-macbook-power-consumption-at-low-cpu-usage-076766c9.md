---
kind: note
id: claude-conversation-2026-02-08-m1-macbook-power-consumption-at-low-cpu-usage-076766c9
updatedAt: 1770581463196
createdAt: 1770581371713
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: 076766c9-6333-4fae-8e56-9fe18aa6a292
created_at: 2026-02-08T20:09:31.713105Z
updated_at: 2026-02-08T20:11:03.196290Z
title: "M1 MacBook power consumption at low CPU usage"
---

# M1 MacBook power consumption at low CPU usage

## Metadata

- Claude conversation UUID: `076766c9-6333-4fae-8e56-9fe18aa6a292`
- Created: `2026-02-08T20:09:31.713105Z`
- Updated: `2026-02-08T20:11:03.196290Z`
- Message count: 6
- Transcript chars extracted: 2596

## Claude summary

**Conversation Overview**

The user inquired about the energy consumption and costs of running different devices 24/7 at low CPU usage levels. The conversation began with a question about an M1 MacBook plugged in continuously while using only 10% CPU, then expanded to compare power consumption across multiple devices including a Raspberry Pi and Samsung Galaxy S22. Claude provided detailed power draw estimates, annual energy consumption calculations, and cost projections for each device at approximately $0.30/kWh electricity rates.

The discussion revealed specific power consumption patterns: M1 MacBooks draw 7-15 watts depending on display state and usage, Raspberry Pi models range from 0.8W (Pi Zero 2W) to 4-5W (Pi 5), and smartphones like the Galaxy S22 consume only 1-2W when plugged in continuously. Claude presented comparative annual costs ranging from $2 for a Pi Zero to $39 for a MacBook, helping the user understand the energy efficiency trade-offs between different computing platforms. The conversation included practical considerations like battery degradation for always-plugged devices and suggested use cases for each option, such as lightweight server applications being well-suited for Raspberry Pi devices due to their exceptional power efficiency.

## Quick excerpt

A M1 MacBook plugged in 24/7 at ~10% CPU usage typically draws around **7–15 watts** from the wall, depending on the model and display state. **Rough breakdown:** - **Display off/lid closed (clamshell mode):** ~7–10W - **Display on, dimmed, light use:** ~12–15W - **Idle/sleep:** ~1–2W **Annual energy cost estimate:** At ~10W average draw: - 10W × 24h × 365 days = **87.6 kWh/year** - At SF's ~$0.30/kWh → roughly **$26/year** At ~15W average: - ~131 kWh/year → about **$39/year** For comparison, th

## Transcript

## human\n\nEnergy demand of m1 MacBook plugged in 247 only using 10% cpu\n
## assistant\n\nA M1 MacBook plugged in 24/7 at ~10% CPU usage typically draws around **7–15 watts** from the wall, depending on the model and display state.

**Rough breakdown:**

- **Display off/lid closed (clamshell mode):** ~7–10W
- **Display on, dimmed, light use:** ~12–15W
- **Idle/sleep:** ~1–2W

**Annual energy cost estimate:**

At ~10W average draw:
- 10W × 24h × 365 days = **87.6 kWh/year**
- At SF's ~$0.30/kWh → roughly **$26/year**

At ~15W average:
- ~131 kWh/year → about **$39/year**

For comparison, that's roughly equivalent to leaving a dim LED bulb on 24/7. The M1 chip is remarkably efficient — even under sustained light load, it sips power compared to most desktops or Intel-era laptops.\n
## human\n\nWhat about a raspberry pi\n
## assistant\n\nA Raspberry Pi is even more efficient:

**Typical power draw:**

| Model | Idle | 10% CPU | Max Load |
|-------|------|---------|----------|
| Pi 4B | ~2.7W | ~3–3.5W | ~6.4W |
| Pi 5 | ~3.5W | ~4–5W | ~8.5W |
| Pi Zero 2W | ~0.4W | ~0.8W | ~1.8W |

**Annual cost (Pi 4 at ~3.5W average):**

- 3.5W × 24h × 365 = **30.7 kWh/year**
- At $0.30/kWh → roughly **$9/year**

So about **1/3 the energy cost** of the M1 MacBook for a Pi 4, and even less for a Pi Zero. The tradeoff is obviously way less compute power — but for a lightweight always-on server (DNS, home automation, small web services, etc.), it's hard to beat.

If you're thinking about running something 24/7 like a lightweight MCP server or similar, a Pi could make a lot of sense over keeping the MacBook plugged in.\n
## human\n\nWhat about Samsung Galaxy s22\n
## assistant\n\nA Samsung Galaxy S22 plugged in 24/7 at light usage:

**Typical power draw:**

- **Idle/light use:** ~1–2W
- **Screen on, light tasks:** ~2–4W
- **Charging from depleted:** ~15–25W (peak, temporary)

Once fully charged and plugged in, it essentially bypasses the battery and draws very little — maybe **1–1.5W** just to stay topped off and run background tasks.

**Annual cost (~1.5W average):**

- 1.5W × 24h × 365 = **13.1 kWh/year**
- At $0.30/kWh → roughly **$4/year**

**Comparison:**

| Device | Avg Draw | Annual kWh | Annual Cost |
|--------|----------|------------|-------------|
| M1 MacBook | ~10–15W | 88–131 | $26–39 |
| Raspberry Pi 4 | ~3.5W | 31 | $9 |
| Galaxy S22 | ~1.5W | 13 | $4 |
| Pi Zero 2W | ~0.8W | 7 | $2 |

The phone is surprisingly efficient as an always-on device. The main concern would be battery degradation from being plugged in 24/7 — lithium batteries don't love sitting at 100% charge indefinitely, though Samsung does have a "Protect battery" setting that caps at 85%.\n