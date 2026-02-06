// src/data/networks.js

export const networks = [
    // === MAINNET ===
    {
        id: "pushchain",
        name: "Push Chain",
        type: "TESNET",
        icon: "/networks/push.jpg",
        explorer: "https://explorer.vinjan-inc.com/pushchain-testnet",
        stake: "https://explorer.vinjan-inc.com/pushchain-testnet/staking/pushvaloper12j7hljxxyj5m9f08fsc8ad9lwe8asvz0lr9pg5",
        // Tambahan data untuk Halaman Detail nanti:
        description: "The first true blockchain for Universal Apps",
        chainId: "push_42101-1",
        version: "v0.0.15",
        rpc: "https://rpc-t.pushchain.nodestake.org",
        api: "https://api-t.pushchain.nodestake.org"
    },
    {
        id: "republic",
        name: "Republic",
        type: "TESNET",
        icon: "/networks/republic.jpg",
        explorer: "https://explorer.republicai.io",
        stake: "https://explorer.vinjan-inc.com/republic-testnet/staking/raivaloper1h8kaeqsc50m72c35eel207nc4x0c2g0d8a775v",
        // Tambahan data untuk Halaman Detail nanti:
        description: "Layer 1 Blockchain Backed by Compute",
        chainId: "raitestnet_77701-1",
        version: "v0.1.0",
        rpc: "https://rpc.republicai.io",
        api: "https://rest.republicai.io"
    },
    {
        id: "lumen",
        name: "Lumen",
        type: "MAINNET",
        icon: "/networks/lumen.png",
        explorer: "https://explorer.indonode.net/lumen",
        stake: "https://explorer.indonode.net/lumen/validators/lmnvaloper1y39w6xc7wwjrr0qeke7en9n2w4rdjx0ka06gxc",
        // Tambahan data untuk Halaman Detail nanti:
        description: "Lumen is a community-driven blockchain project focused on decentralized finance.",
        chainId: "lumen-1",
        version: "v1.2.0",
        rpc: "https://rpc.lumen.network",
        api: "https://api.lumen.network"
    },
    {
        id: "safrochain",
        name: "SafroChain",
        type: "TESTNET",
        icon: "/networks/safro.jpg",
        explorer: "https://explorer.testnet.safrochain.com/safrochain",
        stake: "https://explorer.testnet.safrochain.com/safrochain/staking/addr_safrovaloper1wgh7vxd3mfq3lsfdkyz6wdp6yc0ym44mwwnnf2",
        description: "SafroChain Testnet environment for developers.",
        chainId: "safro-test-1",
        version: "v0.5.0",
        rpc: "https://rpc.safro.network",
        api: "https://api.safro.network"
    },
    {
        id: "aztec",
        name: "Aztec",
        type: "TESTNET",
        icon: "/networks/aztec.jpg",
        explorer: "#",
        stake: "#",
        description: "Privacy-first zk-rollup on Ethereum.",
        chainId: "aztec-testnet",
        version: "v0.1.0",
        rpc: "Pending",
        api: "Pending"
    },
    {
        id: "drosera-network",
        name: "Drosera Network",
        type: "TESTNET",
        icon: "/networks/drosera.jpg",
        explorer: "#",
        stake: "#",
        description: "Automated incident response protocol.",
        chainId: "drosera-test",
        version: "alpha",
        rpc: "Pending",
        api: "Pending"
    },
    
    // === TESTNET ===
    {
        id: "dill",
        name: "Dill",
        type: "TESTNET",
        icon: "/networks/dill.jpg",
        explorer: "#",
        stake: "#",
        description: "Data availability network.",
        chainId: "dill-test",
        version: "v1",
        rpc: "Pending",
        api: "Pending"
    },
    {
        id: "avail",
        name: "Avail",
        type: "TESTNET",
        icon: "/networks/avail.png",
        explorer: "#",
        stake: "#",
        description: "Web3 infrastructure layer.",
        chainId: "avail-test",
        version: "v1",
        rpc: "Pending",
        api: "Pending"
    },
    {
        id: "prysm",
        name: "Prysm",
        type: "TESTNET",
        icon: "/networks/prysm.png",
        explorer: "#",
        stake: "#",
        description: "Layer 1 blockchain specialized for gaming.",
        chainId: "prysm-test",
        version: "v1",
        rpc: "Pending",
        api: "Pending"
    },
    {
        id: "symphony",
        name: "Symphony",
        type: "TESTNET",
        icon: "/networks/symphoni.jpg",
        explorer: "#",
        stake: "#",
        description: "Orchestrating the decentralized economy.",
        chainId: "symphony-test",
        version: "v1",
        rpc: "Pending",
        api: "Pending"
    },
    {
        id: "dymension",
        name: "Dymension",
        type: "TESTNET",
        icon: "/networks/dymension.jpg",
        explorer: "#",
        stake: "#",
        description: "Home of the RollApps.",
        chainId: "dymension_100-1",
        version: "v1",
        rpc: "Pending",
        api: "Pending"
    },
    {
        id: "nillion",
        name: "Nillion",
        type: "TESTNET",
        icon: "/networks/nillion.jpg",
        explorer: "#",
        stake: "#",
        description: "Decentralized computation network.",
        chainId: "nillion-test",
        version: "v1",
        rpc: "Pending",
        api: "Pending"
    },
    {
        id: "story-protocol",
        name: "Story Protocol",
        type: "TESTNET",
        icon: "/networks/story.jpg",
        explorer: "#",
        stake: "#",
        description: "Programmable IP layer.",
        chainId: "story-test",
        version: "v1",
        rpc: "Pending",
        api: "Pending"
    },
    {
        id: "nubit",
        name: "Nubit",
        type: "TESTNET",
        icon: "/networks/nubit.jpg",
        explorer: "#",
        stake: "#",
        description: "Bitcoin-native data availability layer.",
        chainId: "nubit-test",
        version: "v1",
        rpc: "Pending",
        api: "Pending"
    },
    {
        id: "cysic",
        name: "Cysic",
        type: "TESTNET",
        icon: "/networks/cysic.jpg",
        explorer: "#",
        stake: "#",
        description: "Network for interwoven rollups.",
        chainId: "initia-test",
        version: "v1",
        rpc: "Pending",
        api: "Pending"
    }
];
