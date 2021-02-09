import React from 'react';
import { notify, formatBalance } from '../../utils/utils';

const Title = ({ claimable_amount, web3, isStock, isSPCx, isCoinbase, isBakkt }) => {
    const isClaimBtn = web3 && claimable_amount && claimable_amount !== "" && claimable_amount !== "0" && formatBalance(claimable_amount) !== 0
    const isMobile = window.innerWidth < 670

    const handleClaim = async () => {
        try {
            await web3.withdrawPayment(notify())
        } catch (error) {

        }
    }

    return (<>
        {isClaimBtn && isMobile && <div className="grad-wrap claimable-btn" onClick={handleClaim}>
            <div className={`grad `}>
                <div> {formatBalance(claimable_amount)} ETH</div>
                <div>claim</div>
            </div>
        </div>
        }
        <div className="swap-title">
            {!(isStock || isSPCx) && <> <img src={process.env.PUBLIC_URL + "/img/DEUSName.svg"} alt="DEUS" />
                <div className="swap-wrap">
                    <div className="swap">
                        Swap
                    </div>
                </div>
            </>}

            {isStock && <> <img src={process.env.PUBLIC_URL + "/img/sync-logo.svg"} alt="DEUS" />
                <div className="sync-wrap" >
                    <div className="sync" style={{ textTransform: "uppercase" }}>
                        synchronizer
                    </div>
                </div>
            </>}

        </div>
        {isCoinbase && <div className="coinbase-wrap">
            <div className="top">coinbase</div>
            <img src={process.env.PUBLIC_URL + "/img/futures.svg"} alt="CoinBase" />
        </div>}

        {isBakkt && <div className="bakkt-wrap" style={{ textAlign: "center", marginBottom: "20px" }}>
            <img src={process.env.PUBLIC_URL + "/img/bakkt.svg"} alt="bakkt" />
        </div>}

        {isSPCx && <div className="spcx-wrap" style={{ textAlign: "center", marginBottom: "20px" }}>
            <img src={process.env.PUBLIC_URL + "/img/musk-logo.svg"} alt="spcx" />
            <div className="main-title">SPACEX FUTURE, ...</div>
            <div className="desc">
                <div >Trade SPACEX futures before anyone else.</div>
            </div>
        </div>}
    </>);
}

export default Title;