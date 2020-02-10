/**
 * @flow
 */

import React from 'react'
import Section from './Section'
import LabeledInput from '../fragments/LabeledInput'

function Profile() {
  return (
    <Section heading="你的个人信息">
      <LabeledInput
        name="basics.name"
        label="* 全名"
        placeholder="张学礼"
      />
      <LabeledInput
        name="basics.email"
        label="* 邮箱地址"
        placeholder="xueli@gmail.com"
      />
      <LabeledInput
        name="basics.phone"
        label="电话号码"
        placeholder="133-44455555"
      />
      <LabeledInput
        name="basics.location.address"
        label="* 求职意向"
        placeholder="Java 开发工程师"
      />
      <LabeledInput
        name="basics.website"
        label="其他链接"
        placeholder="github.com/myname"
      />
    </Section>
  )
}

export default Profile
