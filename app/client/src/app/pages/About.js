/**
 * @flow
 */

import React from 'react'
import styled from 'styled-components'
import { darken, rgba } from 'polished'
import {
  Logo,
  Divider,
  RoundButton,
  Icon,
  Loader
} from '../../common/components'
import {
  Label,
  Input
} from '../../features/form/components/fragments/LabeledInput'
import { LoadingBar } from '../../features/preview/components'
import { colors } from '../../common/theme'

const Wrapper = styled.div`
  max-width: 850px;
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Header = styled.header`
  width: 100%;
  margin-top: 50px;
`

const Link = styled.a`
  color: ${colors.primary};
`

const SectionDivider = Divider.extend`
  width: 100%;
  margin: 4em 0;
  padding: 0;
`

const Content = styled.main`
  width: 100%;
`

const Heading = styled.h2`
  color: white;
  font-size: 2.25em;
  margin: 10px 0;
`

const Question = styled.p`
  font-size: 1.5em;
`

const Answer = styled.p`
  padding-left: 1em;
`

const ListAnswer = styled.ol`
  padding-left: 2em;
  li {
    padding: 2px 0;
  }
`

const Box = styled.div`
  width: calc(100% - 4px);
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  border: 2px solid ${colors.borders};
`

const Color = styled.div`
  width: 100px;
  height: 100px;
  background: ${props => props.color};
  color: ${props => (props.dark ? 'black' : colors.foreground)};
  margin: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 850px) {
    width: 75px;
    height: 75px;
    margin: 2px;
  }
`

const Button = styled.button`
  width: 100px;
  height: 35px;
  padding: 5px 10px;
  border: 1px solid;
  border-color: ${colors.primary};
  border-radius: 2px;
  background: transparent;
  color: ${colors.primary};
  margin: 15px;
  outline: none;
  transition: all 0.4s ease;
  user-select: none;

  &:hover {
    background: ${colors.primary};
    color: ${colors.background};
    cursor: pointer;
  }

  i {
    color: ${colors.primary};
  }

  &:disabled {
    border-color: #444;
    color: #444;

    &:hover {
      background: ${colors.background};
      border-color: #444;
      color: #444;
      cursor: not-allowed;
    }

    i {
      color: #444;
    }

    &:active {
      position: initial;
    }
  }
`

const PrimaryButton = Button.extend`
  background: linear-gradient(
    40deg,
    ${darken(0.3, colors.primary)},
    ${colors.primary}
  );
  color: white;
  border-radius: 100px;
  border: 1px solid ${darken(0.1, colors.primary)};
  box-shadow: 0 0 0 0 ${rgba(colors.primary, 0.7)};

  &:hover {
    background: linear-gradient(
      40deg,
      ${darken(0.4, colors.primary)},
      ${colors.primary}
    );
    color: white;
    cursor: pointer;
  }
`

const UnfilledButton = PrimaryButton.extend`
  background: transparent;
  &:hover {
    background: linear-gradient(
      40deg,
      ${darken(0.5, colors.primary)},
      ${darken(0.3, colors.primary)}
    );
    animation: none;
    cursor: pointer;
  }
`

const RoundedButton = RoundButton.extend`
  margin: 15px;
`

const VerticalBox = Box.extend`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const FormLabel = Label.extend`
  margin-top: 0;
`

const FormInput = Input.withComponent('input').extend`
  width: 50%;
  margin-bottom: 25px;

  @media screen and (max-width: 850px) {
    width: 50%;
  }
`

const FormDivider = Divider.extend`
  width: 50%;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 850px) {
    width: 50%;
  }
`

function About() {
  return (
    <Wrapper>
      <Header>
        <Logo big />
        <p>
          Overseas Rabbit 简历生成器方便用户生成排版整齐的 PDF 简历。
        </p>
        <p>
          这个应用大部分代码基于 Saad Quadri 的 MIT 协议的 Resumake 项目二次修改，
          我们增加了中文支持以及本地化的翻译。此项目获得的一部分利润我们也会捐献
          给 Saad Quadri。谢谢他优秀的工作。
        </p>
      </Header>
      <SectionDivider />
      <Content>
        <section>
          <Heading>帮助</Heading>
          <Question>如何使用此网站？</Question>
          <ListAnswer>
            <li>选择一个模版</li>
            <li>填写你的简历信息</li>
            <li>
              点击 <strong>预览</strong> 按钮进行预览简历。
            </li>
            <li>
              点击 预览页面中的 PDF 下载 PDF 版本的简历。
            </li>
          </ListAnswer>
          <Question> 如何提交 Bug？</Question>
         <Answer>
           <Link href="mailto:contact@osjobs.net">可以发送邮件给我们</Link>.
         </Answer>
        </section>
        <SectionDivider />
      </Content>
    </Wrapper>
  )
}

export default About
