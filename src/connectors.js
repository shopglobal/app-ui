import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { FrameConnector } from '@web3-react/frame-connector'
import { WalletLinkConnector } from '@web3-react/walletlink-connector'
import { FortmaticConnector } from '@web3-react/fortmatic-connector'
import { ChainId, rpcConfig } from './constant/web3'

const supportedChainIds = Object.values(ChainId)
const INFURA_KEY = process.env.REACT_APP_INFURA_KEY
const FORTMATIC_KEY = process.env.REACT_APP_FORTMATIC_KEY

const RPC_URLS = {
  1: 'https://mainnet.infura.io/v3/' + INFURA_KEY,
  4: 'https://rinkeby.infura.io/v3/' + INFURA_KEY,
  56: 'https://bsc-dataseed1.binance.org',
  97: 'https://data-seed-prebsc-1-s1.binance.org:8545',
  100: 'https://rpc.xdaichain.com',
  4002: 'https://rpc.testnet.fantom.network/',
  128: 'https://http-mainnet-node.huobichain.com',
  256: 'https://http-testnet.hecochain.com',
  250: 'https://rpcapi.fantom.network'
}

export const injected = new InjectedConnector({
  supportedChainIds
})

const POLLING_INTERVAL = 15000

//only mainnet (walletconnect only one chain supports)
export const walletconnect_eth = new WalletConnectConnector({
  rpc: { 1: RPC_URLS[1] },
  // bridge: 'https://bridge.walletconnect.org',
  // qrcode: true,
  pollingInterval: POLLING_INTERVAL
})

export const walletconnect_polygon = new WalletConnectConnector({
  rpc: { [ChainId.MATIC]: rpcConfig[ChainId.MATIC].rpcUrls[0] },
  qrcode: true,
  pollingInterval: POLLING_INTERVAL
})

export const walletlink = new WalletLinkConnector({
  url: RPC_URLS[1],
  appName: 'app.deus.finance'
})

export const fortmatic = new FortmaticConnector({
  apiKey: FORTMATIC_KEY,
  chainId: 1
})

export const frame = new FrameConnector({ supportedChainIds: [1] })

export const ConnectorNames = {
  Injected: 'MetaMask',
  WalletConnect_ETH: 'WalletConnect (ETH)',
  WalletConnect_Polygon: 'WalletConnect (Polygon)',
  WalletLink: 'WalletLink (ETH)',
  Ledger: 'Ledger',
  Trezor: 'Trezor',
  Lattice: 'Lattice',
  Frame: 'Frame',
  Fortmatic: 'Fortmatic'
}

export const connectorsByName = {
  [ConnectorNames.Injected]: injected,
  [ConnectorNames.WalletConnect_ETH]: walletconnect_eth,
  [ConnectorNames.WalletConnect_Polygon]: walletconnect_polygon,
  [ConnectorNames.WalletLink]: walletlink,
  [ConnectorNames.Fortmatic]: fortmatic
}
