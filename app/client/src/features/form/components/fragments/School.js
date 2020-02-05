/**
 * @flow
 */

import React from 'react'
import { Divider } from '../../../../common/components'
import LabeledInput from './LabeledInput'

type Props = {
  index: number
}

function School({ index }: Props) {
  return (
    <div>
      {index > 0 ? <Divider /> : null}
      <LabeledInput
        name={`education[${index}].institution`}
        label="学校名称"
        placeholder="中山大学"
      />
      <LabeledInput
        name={`education[${index}].location`}
        label="学校城市"
        placeholder="广州"
      />
      <LabeledInput
        name={`education[${index}].studyType`}
        label="学历"
        placeholder="本科"
      />
      <LabeledInput
        name={`education[${index}].area`}
        label="专业"
        placeholder="软件工程"
      />
      <LabeledInput
        name={`education[${index}].gpa`}
        label="绩点"
        placeholder="3.6"
      />
      <LabeledInput
        name={`education[${index}].startDate`}
        label="开始时间"
        placeholder="2012年9月"
      />
      <LabeledInput
        name={`education[${index}].endDate`}
        label="结束时间"
        placeholder="2016年6月"
      />
    </div>
  )
}

export default School
