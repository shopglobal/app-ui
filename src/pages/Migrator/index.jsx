import React, { useState } from 'react';
import { Type } from '../../components/App/Text';
import MultipleBox from '../../components/App/Migrator/MultipleBox';
import MigrateChains from '../../components/App/Migrator/MigrateChains';
import SwapAction from '../../components/App/Migrator/SwapAction';
import { Image } from 'rebass/styled-components';
import { useWeb3React } from '@web3-react/core';
import { useLocation } from 'react-router';
import { ChainId } from '../../constant/web3';
import { getCorrectChains } from '../../constant/correctChain';
import DeusV2Tokens from '../../components/App/Migrator/DeusV2Tokens';
import MigrationTitle from '../../components/App/Migrator/MigrationTitle';
import { RowBetween } from '../../components/App/Row';
import { MainWrapper, MainDiv, Container, Line } from '../../components/App/Migrator';
import { MIGRATION_CONFIG, snapShotMaker } from '../../constant/migration';
import snapshot from '../../config/snapshot.json'
import { useEffect } from 'react/cjs/react.development';

const Migrator = () => {
    const { account, chainId } = useWeb3React()
    const [fastUpdate, setFastUpdate] = useState(0)
    const [userSnap, setUserSnap] = useState([])
    const contractAddress = "";

    useEffect(() => {
        const snap = snapshot.filter(snap => snap.HolderAddress === account.toLowerCase())
        if (snap.length > 0) {
            setUserSnap(snapShotMaker(snap[0]))
        }
    }, [account])

    console.log(userSnap);
    const location = useLocation()
    const search = useLocation().search;
    const queryParams = {
        network: new URLSearchParams(search).get('network')?.toUpperCase(),
    }
    const tempChain = queryParams.network && ChainId[queryParams.network] ? ChainId[queryParams.network] : null
    const userChain = tempChain ? tempChain : chainId
    const validChains = getCorrectChains(location.pathname)
    const currChain = userChain && validChains.indexOf(userChain) !== -1 ? userChain : ChainId.ETH
    const [SyncChainId, setSyncChainId] = useState(currChain)
    const [migrateList, setMigrateList] = useState({})
    const toggleId = (id, active, token) => {
        if (active) {
            delete migrateList[id]
        } else {
            migrateList[id] = {
                targetToken: token ?? userSnap[id].tokens.to[0].symbol
            }
        }
        setMigrateList({ ...migrateList })
    }

    // Array of migrated id
    const migratedList = []

    return (<MainWrapper>
        <Type.XXL fontWeight="300" marginBottom="30px">Migrator</Type.XXL>
        <MainDiv>
            {userSnap.filter(config => !migratedList.includes(config.id) && config.tokens.from.filter(token => token.balance > 0).length > 0).map(config => {
                return <div key={config.id}>
                    <Container >
                        <MigrationTitle toggleId={toggleId} active={migrateList[config.id]} config={config} />
                        <RowBetween align={"flex-start"}>
                            <MultipleBox currency={config.tokens.from} fastUpdate={fastUpdate} />
                            <DeusV2Tokens toggleId={toggleId} config={config} active={migrateList[config.id]} />
                        </RowBetween>
                    </Container>
                    {(config.id + 1) !== userSnap.length && <Image src="/img/dei/arrow-down.svg" size="35px" my="15px" />}
                </div>
            })}
        </MainDiv>

        <div style={{ margin: "40px 0" }}></div>

        <Container pb={"20px"}>
            <MigrateChains
                title="Select Destination Network"
                SyncChainId={SyncChainId}
                setSyncChainId={setSyncChainId}
            />

            <Line bgColor={'black'}></Line>

            <SwapAction
                bgColor={"grad_dei"}
                text="Migrate"
                isPreApproved={true}
                isApproved={false}
                validNetworks={validChains}
                loading={false}
                swapLoading={false}
                handleApprove={null}
                handleSwap={null}
                amountIn={1}
                amountOut={0}
            />
        </Container>
    </MainWrapper>);
}

export default Migrator;
