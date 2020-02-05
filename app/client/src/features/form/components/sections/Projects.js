/**
 * @flow
 */

import React from 'react'
import { connect } from 'react-redux'
import Section from './Section'
import { Button, Divider } from '../../../../common/components'
import LabeledInput from '../fragments/LabeledInput'
import { Project } from '..'
import {
  addProject,
  removeProject,
  addProjectKeyword,
  removeProjectKeyword
} from '../../actions'
import type { FormValues } from '../../types'
import type { State } from '../../../../app/types'

type Props = {
  projects: $PropertyType<FormValues, 'projects'>,
  addProject: () => void,
  removeProject: () => void,
  addProjectKeyword: (index: number) => void,
  removeProjectKeyword: (index: number) => void
}

function Projects({
  projects,
  addProject,
  removeProject,
  addProjectKeyword,
  removeProjectKeyword
}: Props) {
  return (
    <Section heading="项目经验">
      <LabeledInput
        name="headings.projects"
        label="显示名称"
        placeholder="项目经验"
      />
      <Divider />
      {projects.map((project, i) => (
        <Project
          key={i}
          index={i}
          keywords={project.keywords}
          addKeyword={addProjectKeyword}
          removeKeyword={removeProjectKeyword}
        />
      ))}
      <div>
        <Button onClick={addProject} type="button">
          增加
        </Button>
        <Button
          onClick={removeProject}
          disabled={projects.length === 1}
          type="button"
        >
          删除
        </Button>
      </div>
    </Section>
  )
}

function mapState(state: State) {
  return {
    projects: state.form.resume.values.projects
  }
}

const mapActions = {
  addProject,
  removeProject,
  addProjectKeyword,
  removeProjectKeyword
}

export default connect(mapState, mapActions)(Projects)
