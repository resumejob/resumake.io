/**
 * @flow
 */

import React from 'react'
import styled from 'styled-components'
import { Divider, RoundButton, Icon } from '../../../../common/components'
import LabeledInput, { Label, Input } from './LabeledInput'

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

const ButtonRow = styled.div`
  display: inline-flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: 15px;
  ${props => props.hidden && 'opacity: 0;'} transition: none;
`

const MiniInput = Input.extend`
  width: 65%;

  @media screen and (max-width: 850px) {
    width: 65%;
  }
`

type Props = {
  highlights: Array<?string>,
  index: number,
  addHighlight: (index: number) => void,
  removeHighlight: (index: number) => void
}

function Job({ highlights, index, addHighlight, removeHighlight }: Props) {
  return (
    <div>
      {index > 0 ? <Divider /> : null}
      <LabeledInput
        name={`work[${index}].company`}
        label="* 公司名称"
        placeholder="谷歌"
      />
      <LabeledInput
        name={`work[${index}].position`}
        label="* 岗位"
        placeholder="Java 工程师"
      />
      <LabeledInput
        name={`work[${index}].location`}
        label="所在城市"
        placeholder="上海"
      />
      <LabeledInput
        name={`work[${index}].startDate`}
        label="* 开始时间"
        placeholder="2016年11月"
      />
      <LabeledInput
        name={`work[${index}].endDate`}
        label="* 结束时间"
        placeholder="默认为至今"
      />
      <Label>* 工作职责</Label>
      {highlights.map((highlight, i) => (
        <Row key={i}>
          <MiniInput
            type="text"
            name={`work[${index}].highlights[${i}]`}
            placeholder="负责 Gmail 服务端的开发以及新功能研究"
            component="input"
          />
          <ButtonRow hidden={i !== highlights.length - 1}>
            <RoundButton
              inverted
              disabled={i !== highlights.length - 1}
              type="button"
              onClick={() => addHighlight(index)}
            >
              <Icon type="add" />
            </RoundButton>
            <RoundButton
              inverted
              disabled={highlights.length === 1}
              type="button"
              onClick={() => removeHighlight(index)}
            >
              <Icon type="remove" />
            </RoundButton>
          </ButtonRow>
        </Row>
      ))}
    </div>
  )
}

export default Job
