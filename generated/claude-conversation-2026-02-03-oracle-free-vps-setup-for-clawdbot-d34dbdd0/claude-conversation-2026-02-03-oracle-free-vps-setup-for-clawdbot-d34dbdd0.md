---
kind: note
id: claude-conversation-2026-02-03-oracle-free-vps-setup-for-clawdbot-d34dbdd0
updatedAt: 1770143295393
createdAt: 1770142699691
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: d34dbdd0-d7fc-44b7-b2b9-9830a6506187
created_at: 2026-02-03T18:18:19.691364Z
updated_at: 2026-02-03T18:28:15.393353Z
title: "Oracle free VPS setup for clawdbot"
---

# Oracle free VPS setup for clawdbot

## Metadata

- Claude conversation UUID: `d34dbdd0-d7fc-44b7-b2b9-9830a6506187`
- Created: `2026-02-03T18:18:19.691364Z`
- Updated: `2026-02-03T18:28:15.393353Z`
- Message count: 6
- Transcript chars extracted: 6547

## Claude summary

**Conversation Overview**

The user sought technical guidance for configuring an Oracle Cloud Always Free tier VPS to run their "openclaw clawdbot" continuously. Claude provided comprehensive configuration recommendations, focusing on the ARM Ampere A1 instance as the optimal choice due to its generous free allocation of 4 OCPUs and 24GB RAM compared to the limited AMD alternative. The discussion covered optimal OS selection (Ubuntu 22.04/24.04 aarch64), region selection strategies, network configuration, and systemd service setup for 24/7 operation.

When the user asked about "on demand capacity," Claude explained the common capacity constraint issues with Oracle's popular ARM instances and provided multiple workarounds including automated retry scripts using OCI CLI, trying different availability domains and regions, starting with smaller resource requests, and timing attempts during off-peak hours. The user then expressed concern about potential future deprovisioning, prompting Claude to explain Oracle's idle instance policy which can reclaim instances with consistently low utilization after 7 days. Claude reassured that active bot usage should prevent reclamation and suggested simple keepalive strategies as insurance, while noting that policy changes represent a bigger long-term risk than reclamation of actively used instances.

## Quick excerpt

The user is asking about configuring an Oracle Cloud "Always Free" tier VPS to run their "openclaw clawdbot" 24/7. Let me help them with the optimal configuration for this use case. Oracle Cloud's Always Free tier offers some generous resources. Let me provide practical advice on the best configuration. Key points about Oracle's Always Free tier: 1. ARM-based Ampere A1 instances (up to 4 OCPUs and 24GB RAM total) 2. AMD-based instances (2 VMs with 1/8 OCPU and 1GB RAM each) 3. Boot volumes, bloc

## Transcript

## human\n\ngive me the best config for an always free VPS on oracle to run my openclaw clawdbot 247\n
## assistant\n\nThe user is asking about configuring an Oracle Cloud "Always Free" tier VPS to run their "openclaw clawdbot" 24/7. Let me help them with the optimal configuration for this use case.

Oracle Cloud's Always Free tier offers some generous resources. Let me provide practical advice on the best configuration.

Key points about Oracle's Always Free tier:
1. ARM-based Ampere A1 instances (up to 4 OCPUs and 24GB RAM total)
2. AMD-based instances (2 VMs with 1/8 OCPU and 1GB RAM each)
3. Boot volumes, block storage
4. Networking resources

For running a bot 24/7, the ARM Ampere instances are the best choice due to their generous free allocation.

Let me give them practical configuration advice.For running your OpenClaw/Clawdbot 24/7 on Oracle's Always Free tier, here's the optimal setup:

## Instance Shape

**Go with the ARM Ampere A1** — it's the clear winner for always-free:
- **Shape:** `VM.Standard.A1.Flex`
- **OCPUs:** 4 (max free allocation)
- **RAM:** 24GB (max free allocation)
- **Boot volume:** 200GB (max free)

This crushes the AMD option (which only gives you 1/8 OCPU and 1GB RAM).

## OS & Image

**Ubuntu 22.04 or 24.04 aarch64** — best compatibility for ARM, wide package support. Oracle Linux works too if you prefer it.

## Region Selection

Pick a region with availability — ARM instances are in high demand. Try:
- US West (Phoenix)
- US East (Ashburn)  
- Frankfurt or Amsterdam if you're outside the US

If you get capacity errors, either try off-peak hours (early morning UTC) or set up a script to retry provisioning.

## Network Config

```
# Open required ports in your security list/NSG:
- 22 (SSH)
- 443 (if your bot needs HTTPS)
- Any other ports your bot uses
```

Don't forget to also open ports in the OS firewall (`iptables` or `ufw`).

## Keeping It Running 24/7

Use **systemd** for process management:

```bash
# /etc/systemd/system/clawdbot.service
[Unit]
Description=OpenClaw Clawdbot
After=network.target

[Service]
Type=simple
User=ubuntu
WorkingDirectory=/home/ubuntu/clawdbot
ExecStart=/usr/bin/node index.js  # or whatever your start command is
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
```

Then:
```bash
sudo systemctl enable clawdbot
sudo systemctl start clawdbot
```

## Pro Tips

1. **Avoid idle reclamation** — Oracle can reclaim "idle" instances. Keep some baseline activity or set up a simple cron ping.

2. **Snapshot your boot volume** — free backup, easy recovery if something breaks.

3. **Use swap** — even with 24GB RAM, adding 4-8GB swap is cheap insurance:
   ```bash
   sudo fallocate -l 8G /swapfile
   sudo chmod 600 /swapfile
   sudo mkswap /swapfile
   sudo swapon /swapfile
   echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
   ```

Want me to help you with the specific deployment steps for your Clawdbot setup?\n
## human\n\non deman capacity?>\n
## assistant\n\nThe user is asking about the "on-demand capacity" issue with Oracle Cloud's Always Free ARM instances. This is a very common problem - Oracle ARM instances are extremely popular and often unavailable due to capacity constraints. People often get "Out of capacity" errors when trying to provision them.

I should explain:
1. What the capacity issue is
2. Solutions/workarounds to actually get an instanceYeah, the "Out of host capacity" error is the biggest pain point with Oracle's free ARM instances — everyone wants them.

## Workarounds

**1. Keep retrying with a script**

The classic approach — poll the API until capacity opens up:

```bash
# Simple bash loop using OCI CLI
while true; do
  oci compute instance launch \
    --availability-domain "AD-1" \
    --compartment-id "ocid1.compartment.oc1..xxx" \
    --shape "VM.Standard.A1.Flex" \
    --shape-config '{"ocpus":4,"memoryInGb":24}' \
    --image-id "ocid1.image.oc1..xxx" \
    --subnet-id "ocid1.subnet.oc1..xxx" \
    --assign-public-ip true \
    && break
  echo "No capacity, retrying in 60s..."
  sleep 60
done
```

Run it on a cheap VPS, your local machine, or even GitHub Actions.

**2. Try different availability domains**

Each region has multiple ADs — cycle through them:
- AD-1, AD-2, AD-3 (not all regions have 3)

**3. Try different regions**

Less popular regions often have more capacity:
- US West (San Jose)
- Canada (Toronto/Montreal)
- Brazil (Sao Paulo)
- Some EU regions

**4. Start smaller, then scale**

Request 1 OCPU / 6GB first, then resize once you have the instance. Sometimes smaller requests go through easier.

**5. Try early morning UTC**

Capacity often frees up around 2-6 AM UTC when instances get reclaimed.

---

Realistically, expect to run that script for anywhere from a few hours to a few days. It's annoying but it works eventually. Want help setting up the OCI CLI or an automated provisioning script?\n
## human\n\nwill oracle one day deprovision if i eventually get in\n
## assistant\n\nThe user is asking whether Oracle will eventually deprovision/reclaim their Always Free tier instance if they manage to get one provisioned. This is a legitimate concern because Oracle has policies around idle instances.The short answer: **probably not, if you're actually using it** — but there's some nuance.

## Oracle's Idle Instance Policy

Oracle reserves the right to reclaim Always Free instances that are "idle" for 7 days. Their criteria:

- CPU utilization below 10%
- Network utilization below 10%
- Memory utilization below 10% (for some shapes)

They send an email warning before reclaiming, giving you a few days to take action.

## Reality Check

In practice:

1. **Running a bot 24/7 should keep you safe** — any consistent activity (network traffic, CPU usage from your Clawdbot) typically keeps you above the threshold.

2. **People have had instances for years** without issues, as long as they're actively using them.

3. **The reclamation waves seem sporadic** — Oracle does periodic sweeps, not continuous enforcement.

## Cheap Insurance

To be safe, add a simple cron job that creates minimal activity:

```bash
# /etc/cron.d/keepalive
*/5 * * * * root curl -s https://example.com > /dev/null
```

Or run a lightweight process that does occasional work — your bot itself probably generates enough activity.

## The Bigger Risk

Honestly, the bigger risk is **Oracle changing their Always Free policy** entirely someday, not reclaiming active instances. They've been generous so far, but it's not a contractual guarantee.

Keep backups/snapshots so you can migrate elsewhere if needed. Your Hetzner setup would be a solid fallback.\n