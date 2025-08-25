export const serviceGroups = [
  {
    id: 'cybersecurity',
    name: 'Cybersecurity Services',
    icon: '🛡️',
    description: 'Comprehensive digital defense solutions for various industries.',
    services: [
      {
        id: 'soc-management',
        title: 'SOC Setup & Management',
        icon: '📊', // Chart/monitoring icon
        description: 'Build and manage a full-fledged Security Operations Center (SOC) with 24x7 threat monitoring and real-time incident response.',
      },
      {
        id: 'network-ops',
        title: 'Network Operations & Monitoring',
        icon: '📡', // Satellite dish/network icon
        description: 'Continuous surveillance and health-check of your digital assets to ensure operational uptime and detect anomalies early.',
      },
      {
        id: 'vapt-cyber',
        title: 'VAPT – Vulnerability Assessment & Penetration Testing',
        icon: '🔍', // Magnifying glass/search icon
        description: 'Identify, exploit, and remediate weaknesses in your web apps, APIs, infrastructure, and mobile systems.',
      },
      {
        id: 'threat-intelligence',
        title: 'Threat Intelligence & Reporting',
        icon: '🧠', // Brain/intelligence icon
        description: 'Get curated intelligence reports on cyber threats, adversary TTPs, and IOC mapping using dark web and APT feeds.',
      },
      {
        id: 'malware-forensics',
        title: 'Malware Analysis & Forensics',
        icon: '🔬', // Microscope/analysis icon
        description: 'Reverse engineering and forensic investigation to uncover malware behavior and identify breach vectors.',
      },
      {
        id: 'blue-teaming',
        title: 'Blue Teaming Solutions',
        icon: '🔒', // Lock/security icon
        description: 'Defense-centric services for threat hunting, SIEM correlation, incident response planning, and tabletop exercises.',
      },
    ],
  },
  {
    id: 'satellite',
    name: 'Satellite Security Services',
    icon: '🛰️',
    description: 'Advanced security for space assets and ground systems.',
    services: [
      {
        id: 'protocol-vapt',
        title: 'Satellite Protocol VAPT',
        icon: '📡', // Satellite dish/communication icon
        description: 'Audit satellite communication protocols (e.g., CCSDS, DVB-S2) for vulnerabilities and misconfigurations',
      },
      {
        id: 'secure-code-analysis',
        title: 'Secure Code Analysis for Satellite Systems',
        icon: '💻', // Laptop/code icon
        description: 'Perform SAST/DAST on embedded software in satellites to ensure mission-critical security compliance.',
      },
      {
        id: 'cyber-architecture',
        title: 'Cyber Architecture of Satellite Networks',
        icon: '🏗️', // Building/architecture icon
        description: 'Design and secure satellite-ground network architectures with zero-trust principles.',
      },
      {
        id: 'ground-station-auditing',
        title: 'Ground Station Auditing',
        icon: '⚙️', // Gear/operations icon
        description: 'End-to-end auditing of telemetry, tracking, and control (TT&C) operations, with asset hardening guidance.',
      },
      {
        id: 'ground-station-vapt',
        title: 'Ground Station VAPT',
        icon: '🚨', // Siren/alert icon
        description: 'Test the physical and digital layers of ground segment systems including SATCOM hubs and control centers.',
      },
    ],
  },
  {
    id: 'blockchain',
    name: 'Blockchain Solutions',
    icon: '🔗',
    description: 'Ensuring security in decentralized, smart, and tokenized infrastructures.',
    services: [
      {
        id: 'smart-contract-vapt',
        title: 'Smart Contract VAPT',
        icon: '📜', // Scroll/contract icon
        description: 'Auditing and testing smart contracts for vulnerabilities such as reentrancy attacks, integer overflows, and other common exploits to ensure their integrity and security.',
      },
      {
        id: 'blockchain-protocol-auditing',
        title: 'Blockchain Protocol Auditing',
        icon: '⛓️', // Chains/protocol icon
        description: 'Inspect consensus protocols (PoW, PoS, DAG) and node-to-node communication security.',
      },
      {
        id: 'network-infra-auditing',
        title: 'Network Infrastructure Auditing',
        icon: '🌐', // Globe/network icon
        description: 'Secure underlying networking stacks (RPC servers, P2P nodes, relays) and prevent DDoS/mitm attacks.',
      },
    ],
  },
];