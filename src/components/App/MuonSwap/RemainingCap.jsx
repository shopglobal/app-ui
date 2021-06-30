import React from 'react';
import BigNumber from 'bignumber.js';
import { FlexCenter } from '../Container';
import { ExternalLink } from '../Link';
import { SmallWrapper } from '.';
import { Type } from '../Text';

const RemainingCap = ({ remindedAmount = 0 }) => {
    return (<SmallWrapper>
        <ExternalLink href="https://medium.com/deus-finance/exclusive-muon-presale-for-deus-community-everything-you-need-to-know-bccd76ef2b00">
            <u><Type.SM className="title">Your Presale Allocation ↗</Type.SM></u>
        </ExternalLink>

        <FlexCenter>
            <Type.SM >$</Type.SM>
            <Type.SM >
                {new BigNumber(remindedAmount).toFormat(2)}
            </Type.SM>
        </FlexCenter>

    </SmallWrapper>);
}

export default RemainingCap;