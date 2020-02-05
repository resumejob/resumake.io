/**
 * @flow
 */

import React from 'react'
import styled from 'styled-components'
import { Divider, RoundButton, Icon } from '../../../../common/components'
import LabeledInput, { Label, Input } from './LabeledInput'

const ButtonRow = styled.div`
  margin-left: 15px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`

const MiniInput = Input.extend`
  width: 50%;

  @media screen and (max-width: 850px) {
    width: 60%;
  }
`

type Props = {
  keywords: Array<?string>,
  index: number,
  addKeyword: (index: number) => void,
  removeKeyword: (index: number) => void
}

function Project({ keywords, index, addKeyword, removeKeyword }: Props) {
  return (
    <div>
      {index > 0 ? <Divider /> : null}
      <LabeledInput
        name={`projects[${index}].name`}
        label="项目名称"
        placeholder="Gmail"
      />
      <LabeledInput
        name={`projects[${index}].description`}
        label="项目描述"
        placeholder="让所有人都能使用的最方便的邮箱。"
      />
      <LabeledInput
        name={`projects[${index}].url`}
        label="项目链接"
        placeholder="http://gmail.com"
      />
      <Label>技术栈</Label>
      {keywords.map((_, i) => (
        <div key={i}>
          <MiniInput
            name={`projects[${index}].keywords[${i}]`}
            placeholder="Java"
            component="input"
          />
          {i === keywords.length - 1 && (
            <ButtonRow>
              <RoundButton inverted onClick={() => addKeyword(index)}>
                <Icon type="add" />
              </RoundButton>
              <RoundButton
                inverted
                disabled={keywords.length === 1}
                onClick={() => removeKeyword(index)}
              >
                <Icon type="remove" />
              </RoundButton>
            </ButtonRow>
          )}
        </div>
      ))}
    </div>
  )
}

export default Project
