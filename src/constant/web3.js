export const ChainId = {
    ETH: 1,
    ROPSTEN: 3,
    RINKEBY: 4,
    XDAI: 100,
    FTM: 250,
    FTM_TESTNET: 4002,
    BSC: 56,
    BSC_TESTNET: 97,
    HECO: 128,
    HECO_TESTNET: 256,
    MATIC: 137,
    MATIC_TESTNET: 0,
    AVALANCHE: 43114,
    METIS: 1088,
    ARBITRUM: 42161,
    OPTIMISTIC: 10,
}

export const NameChainId = {
    1: "ETH",
    2: "Ropsten",
    4: "RINKEBY",
    100: "xDAI",
    250: "FTM",
    4002: "FTMT",
    56: "BSC",
    128: "HECO",
    256: "HECOT",
    97: "BSCTEST",
    137: "POLYGON",
    43114: "AVALANCHE",
    1088: "METIS",
    42161: "ARBITRUM",
    10: "OPTIMISTIC",
}

export const rpcConfig = {
    [ChainId.ETH]: {
        chainId: "0x1",
        chainName: "Ethereum Mainnet",
        nativeCurrency: {
            name: "ETH",
            symbol: "ETH",
            decimals: 18,
        },
        rpcUrls: ["https://mainnet.infura.io/v3/" + process.env.REACT_APP_INFURA_KEY],
        blockExplorerUrls: ["https://etherscan.io"],
    },
    [ChainId.RINKEBY]: {
        chainId: "0x4",
        chainName: "Rinkeby Testnet",
        nativeCurrency: {
            name: "ETH",
            symbol: "ETH",
            decimals: 18,
        },
        rpcUrls: ["https://rinkeby.infura.io/v3/" + process.env.REACT_APP_INFURA_KEY],
        blockExplorerUrls: ["https://rinkeby.etherscan.io"],
    },
    [ChainId.XDAI]: {
        chainId: "0x64",
        chainName: "xDAI Chain",
        nativeCurrency: {
            name: "xDAI",
            symbol: "xDAI",
            decimals: 18,
        },
        rpcUrls: ["https://rpc.xdaichain.com/"],
        blockExplorerUrls: ["https://blockscout.com/poa/xdai"],
    },
    [ChainId.MATIC]: {
        chainId: "0x89",
        chainName: "Matic Mainnet",
        nativeCurrency: {
            name: "Matic",
            symbol: "MATIC",
            decimals: 18,
        },
        rpcUrls: ["https://polygon-rpc.com/"],
        blockExplorerUrls: ["https://polygonscan.com"],
        iconUrls: []
    },
    [ChainId.BSC]: {
        chainId: "0x38",
        chainName: "Binance Smart Chain Mainnet",
        nativeCurrency: {
            name: "BNB",
            symbol: "BNB",
            decimals: 18,
        },
        rpcUrls: ["https://bsc-dataseed.binance.org/", "https://bsc-dataseed1.defibit.io/", "https://bsc-dataseed1.ninicoin.io/"],
        blockExplorerUrls: ["https://bscscan.com"],
    },
    [ChainId.BSC_TESTNET]: {
        chainId: "0x61",
        chainName: "Binance Smart Chain Testnet",
        nativeCurrency: {
            name: "BNB",
            symbol: "BNB",
            decimals: 18,
        },
        rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545/"],
        blockExplorerUrls: ["https://testnet.bscscan.com"],
    },
    [ChainId.HECO]: {
        chainId: "0x80",
        chainName: "Huobi ECO Chain Mainnet",
        nativeCurrency: {
            name: "HT",
            symbol: "HT",
            decimals: 18,
        },
        rpcUrls: ["https://http-mainnet.hecochain.com"],
        blockExplorerUrls: ["https://hecoinfo.com"],
    },
    [ChainId.HECO_TESTNET]: {
        chainId: "0x100",
        chainName: "Huobi ECO Chain Testnet",
        nativeCurrency: {
            name: "htt",
            symbol: "htt",
            decimals: 18,
        },
        rpcUrls: ["https://http-testnet.hecochain.com"],
        blockExplorerUrls: ["https://testnet.hecoinfo.com"],
    },
    [ChainId.AVALANCHE]: {
        chainId: "0xa86a",
        chainName: "Avalanche Network",
        nativeCurrency: {
            name: "AVAX",
            symbol: "AVAX",
            decimals: 18,
        },
        rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
        blockExplorerUrls: ["https://cchain.explorer.avax.network"],
    },
    [ChainId.FTM]: {
        chainId: "0xFA",
        chainName: "Fantom Opera",
        nativeCurrency: {
            name: "Fantom",
            symbol: "FTM",
            decimals: 18,
        },
        rpcUrls: ["https://ftmrpc.ultimatenodes.io/"],
        blockExplorerUrls: ["https://ftmscan.com"],
    },
    [ChainId.METIS]: {
        chainId: "0x440",
        chainName: "Metis Andromeda Mainnet",
        nativeCurrency: {
            name: "METIS",
            symbol: "METIS",
            decimals: 18,
        },
        rpcUrls: ["https://andromeda.metis.io/?owner=1088"],
        blockExplorerUrls: ["https://andromeda-explorer.metis.io"],
    },
    [ChainId.ARBITRUM]: {
        chainId: "0xA4B1",
        chainName: "Arbitrum",
        nativeCurrency: {
            name: "ETH",
            symbol: "ETH",
            decimals: 18,
        },
        rpcUrls: ["https://arb1.arbitrum.io/rpc"],
        blockExplorerUrls: ["https://arbiscan.io"],
    },
    [ChainId.OPTIMISTIC]: {
        chainId: "0xA",
        chainName: "Optimistic Ethereum",
        nativeCurrency: {
            name: "ETH",
            symbol: "ETH",
            decimals: 18,
        },
        rpcUrls: ["https://mainnet.optimism.io"],
        blockExplorerUrls: ["https://optimistic.etherscan.io"],
    },
}


export const isSupportEIP1559 = {
    [ChainId.MATIC]: true,
    [ChainId.ETH]: true
}

export const TransactionState = {
    SUCCESS: 0,
    FAILED: 1,
    LOADING: 2,
}