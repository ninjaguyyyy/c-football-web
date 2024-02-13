'use client';

import { Collapse, CollapseProps } from 'antd';
import { GiSoccerField, GiSoccerBall } from 'react-icons/gi';

import styles from './index.module.scss';
import MatchInfo from 'app/teams/[teamHashId]/matches/components/MatchInfo';
import { MatchType } from 'constants/common';
import MatchResultDetail from 'app/teams/[teamHashId]/matches/components/MatchResult/MatchResultDetail';

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: <MatchInfo type={MatchType.RESULT} />,
    children: <MatchResultDetail />,
  },
];

export default function MatchResult() {
  return (
    <div className={`${styles.container}`}>
      <div className="flex bg-gray-1 py-3 px-4 gap-4 text-[13px]">
        <span>Sun 11 Feb</span>
        <span>|</span>
        <div className="flex items-center gap-2">
          <GiSoccerField className="text-lg" />
          <span className="text-gray-3">Villa Park</span>
        </div>
      </div>

      <Collapse
        defaultActiveKey={['1']}
        ghost
        items={items}
        expandIconPosition={'end'}
      />
    </div>
  );
}
