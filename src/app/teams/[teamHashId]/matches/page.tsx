import { Col, Row } from 'antd';
import MatchResult from 'app/teams/[teamHashId]/matches/components/MatchResult';
import MatchTexture from 'app/teams/[teamHashId]/matches/components/MatchTexture';

export default function TeamGames() {
  return (
    <Row className="w-full" justify="space-between">
      <Col span={16} className="rounded-xl px-0">
        <div className="px-4 bg-white pt-4 rounded-xl mb-4">
          <span className="mb-3 block font-semibold text-base">
            FEBRUARY 2024
          </span>

          <MatchTexture />
          <MatchTexture />
        </div>

        <div className="px-4 bg-white pt-4 rounded-xl mb-4">
          <span className="mb-3 block font-semibold text-base">
            FEBRUARY 2024
          </span>

          <MatchResult />
        </div>
      </Col>

      <Col span={7}>
        <div className="bg-white p-6 rounded-xl">
          <p className="font-bold text-base mt-0">Group Info</p>
          <div>
            <div className="flex font-medium text-sm mb-2">
              <span className="basis-[100px] text-gray-4">Created</span>
              <span className="flex-1">September 25, 2020</span>
            </div>

            <div className="flex font-medium text-sm">
              <span className="basis-[100px] text-gray-4">Type</span>
              <span className="flex-1">Public</span>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
}
