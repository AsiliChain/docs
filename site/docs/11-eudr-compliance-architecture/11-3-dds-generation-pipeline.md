---
id: dds-generation-pipeline
title: 11.3 DDS Generation Pipeline
sidebar_position: 3
---

```mermaid
flowchart TB
    s1[Exporter initiates DDS for BatchToken XYZ] --> s2[/api/eudr/generate-dds?tokenId=XYZ Next.js API route]

    s2 --> m1[Mantle RPC\nBatchToken metadata]
    s2 --> h1[Hedera HCS\nfull stage history]
    s2 --> g1[Global Forest Watch API\ndeforestation check]

    m1 --> p1[pdf-lib generates DDS with all required fields]
    h1 --> p1
    g1 --> p1

    p1 --> w1[Cooperative wallet signs DDS hash EIP-712]
    w1 --> i1[Pinata SDK pins PDF to IPFS]
    i1 --> o1[IPFS hash stored in BatchToken metadata Mantle]
    o1 --> o2[DDS available for EU information system submission]
```

Figure 18: Automated EUDR DDS generation pipeline
