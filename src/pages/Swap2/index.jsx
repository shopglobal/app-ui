import React, { useEffect, useState } from 'react';
import { Image } from 'rebass/styled-components';
import { MainWrapper, SwapTitle, SwapWrapper, SwapArrow } from '../../components/App/Swap';
import TokenBox from '../../components/App/Swap/TokenBox';
import RouteBox from '../../components/App/Swap/RouteBox';
import SlippageTelorance from '../../components/App/Swap/SlippageTelorance';
import SwapAction from '../../components/App/Swap/SwapAction';
import SearchBox from '../../components/App/Swap/SearchBox';
import RateBox from '../../components/App/Swap/RateBox';
import PriceImpact from '../../components/App/Swap/PriceImpact';
import { getSwapVsType } from '../../utils/utils';
import { useWeb3React } from '@web3-react/core';

//close with esc
const tokens = [
    { logo: "/tokens/eth-logo.svg", symbol: "ETH", balance: "35.284456129464577913" },
    { logo: "/tokens/deus.svg", symbol: "DEUS", address: "0x3b62F3820e0B035cc4aD602dECe6d796BC325325", decimals: 18 },
    { logo: "/tokens/dea.svg", symbol: "DEA", address: "0x80aB141F324C3d6F2b18b030f1C4E95d4d658778", decimals: 18 },
    { logo: "/tokens/usdc.svg", symbol: "USDC", decimals: 6, address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48" },
]

const Swap2 = () => {
    const [activeSearchBox, setActiveSearchBox] = useState(false)
    const [invert, setInvert] = useState(false)
    const [escapedType, setEscapedType] = useState("from")
    const [slipage, setSlipage] = useState(0.5)
    const [swapState, setSwapState] = useState({
        from: tokens[2],
        to: tokens[1],
    })

    const showSearchBox = (active = false, type) => {
        setEscapedType(type)
        setActiveSearchBox(active)
    }

    const changeToken = (token, type) => {
        setActiveSearchBox(false)
        const vsType = getSwapVsType(type)

        if (swapState[vsType].symbol === token.symbol) {
            return setSwapState({ ...swapState, [type]: token, [vsType]: swapState[type] })
        }

        setSwapState({ ...swapState, [type]: token })
    }


    return (<>
        <SearchBox currencies={tokens} swapState={swapState} escapedType={escapedType} changeToken={changeToken} active={activeSearchBox} setActive={setActiveSearchBox} />

        <MainWrapper>
            <SwapTitle className="title"> SWAP</SwapTitle>
            <SwapWrapper>
                <TokenBox
                    setActive={showSearchBox}
                    hasMax={true}
                    type="from"
                    currency={swapState.from}
                />
                <SwapArrow onClick={() => setSwapState({ from: swapState.to, to: swapState.from })}>
                    <Image src="/img/swap/swap-arrow.svg" size="20px" my="15px" />
                </SwapArrow>

                <TokenBox
                    type="to"
                    setActive={showSearchBox}
                    currency={swapState.to}
                />

                <RateBox state={swapState} invert={invert} setInvert={setInvert} />

                <SwapAction isPreApproved={false} />

            </SwapWrapper>

            <PriceImpact />

            <RouteBox />

            <SlippageTelorance slipage={slipage} setSlipage={setSlipage} />
        </MainWrapper>
    </>);
}

export default Swap2;