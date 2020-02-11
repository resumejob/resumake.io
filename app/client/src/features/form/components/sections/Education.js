/**
 * @flow
 */

import React from 'react'
import { connect } from 'react-redux'
import Section from './Section'
import { Button, Divider } from '../../../../common/components'
import LabeledInput from '../fragments/LabeledInput'
import { School } from '..'
import { addSchool, removeSchool } from '../../actions'
import type { FormValues } from '../../types'
import type { State } from '../../../../app/types'

type Props = {
  education: $PropertyType<FormValues, 'education'>,
  addSchool: () => void,
  removeSchool: () => void
}

function Education({ education, addSchool, removeSchool }: Props) {
  return (
    <Section heading="你的教育背景">
      <LabeledInput
        name="headings.education"
        label="模块名称（可选）"
        placeholder="教育背景"
      />
      <Divider />
      {education.map((school, i) => <School key={i} index={i} />)}
      <Button onClick={addSchool} type="button">
        新建
      </Button>
      <Button
        onClick={removeSchool}
        disabled={education.length === 1}
        type="button"
      >
        删除
      </Button>
    </Section>
  )
}

function mapState(state: State) {
  return {
    education: state.form.resume.values.education
  }
}

const mapActions = {
  addSchool,
  removeSchool
}

export default connect(mapState, mapActions)(Education)
