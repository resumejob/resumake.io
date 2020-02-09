/**
 * @flow
 */

import React from 'react'
import { connect } from 'react-redux'
import Section from './Section'
import { Button, Divider } from '../../../../common/components'
import LabeledInput from '../fragments/LabeledInput'
import { Skill } from '..'
import {
  addSkill,
  removeSkill,
  addSkillKeyword,
  removeSkillKeyword
} from '../../actions'
import type { FormValues } from '../../types'
import type { State } from '../../../../app/types'

type Props = {
  skills: $PropertyType<FormValues, 'skills'>,
  addSkill: () => void,
  removeSkill: () => void,
  addSkillKeyword: (index: number) => void,
  removeSkillKeyword: (index: number) => void
}

function Skills({
  skills,
  addSkill,
  removeSkill,
  addSkillKeyword,
  removeSkillKeyword
}: Props) {
  return (
    <Section heading="技能列表">
      <LabeledInput
        name="headings.skills"
        label="标题（可选）"
        placeholder="技能列表"
      />
      <Divider />
      {skills.map((skill, i) => (
        <Skill
          key={i}
          index={i}
          keywords={skill.keywords}
          addKeyword={addSkillKeyword}
          removeKeyword={removeSkillKeyword}
        />
      ))}
      <Button onClick={addSkill} type="button">
        增加
      </Button>
      <Button
        onClick={removeSkill}
        disabled={skills.length === 1}
        type="button"
      >
        删除
      </Button>
    </Section>
  )
}

function mapState(state: State) {
  return {
    skills: state.form.resume.values.skills
  }
}

const mapActions = {
  addSkill,
  removeSkill,
  addSkillKeyword,
  removeSkillKeyword
}

export default connect(mapState, mapActions)(Skills)
