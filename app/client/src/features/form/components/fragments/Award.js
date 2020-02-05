/**
 * @flow
 */

import React from 'react'
import { Divider } from '../../../../common/components'
import LabeledInput from '../fragments/LabeledInput'

type Props = {
  index: number
}

function Award({ index }: Props) {
  return (
    <div>
      {index > 0 ? <Divider /> : null}
      <LabeledInput
        name={`awards[${index}].title`}
        label="奖项名"
        placeholder="国家一等奖学金"
      />
      <LabeledInput
        name={`awards[${index}].date`}
        label="时间"
        placeholder="2015年1月"
      />
      <LabeledInput
        name={`awards[${index}].awarder`}
        label="奖励机构"
        placeholder="国家教育部"
      />
      <LabeledInput
        name={`awards[${index}].summary`}
        label="简述"
        placeholder="国家奖学金也是当前高等学校学生能够获得的荣誉等级最高的国家级奖学金。"
      />
    </div>
  )
}

export default Award
