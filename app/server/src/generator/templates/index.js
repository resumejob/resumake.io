/**
 * @flow
 */

import { join } from 'path'
import template2 from './template2'
import template4 from './template4'
import template6 from './template6'
import {
  TEMPLATE1,
  TEMPLATE2,
  TEMPLATE3,
} from './constants'
import type { SanitizedValues, TemplateData } from '../../types'

/**
 * Generates the LaTeX document based on the selected template
 * as well as the necessary options needed for it to create a
 * pdf via node-latex.
 *
 * @param data - The sanitized form data from the request body.
 *
 * @return The generated LaTeX document as well as its additional opts.
 */

function getTemplateData(data: SanitizedValues): TemplateData {
  switch (data.selectedTemplate) {
    case TEMPLATE1:
      return {
        texDoc: template2(data),
        opts: {
          cmd: 'xelatex',
          inputs: join(__dirname, 'template2', 'inputs'),
          fonts: join(__dirname, 'template2', 'inputs')
        }
      }

    case TEMPLATE2:
      return {
        texDoc: template4(data),
        opts: {
          cmd: 'xelatex',
          inputs: join(__dirname, 'template4', 'inputs'),
          fonts: join(__dirname, 'template4', 'inputs')
        }
      }

    case TEMPLATE3:
      return {
        texDoc: template6(data),
        opts: {
          cmd: 'xelatex',
          inputs: join(__dirname, 'template6', 'inputs'),
          fonts: join(__dirname, 'template6', 'inputs')
        }
      }

    default:
      return {
        texDoc: template2(data),
        opts: {
          cmd: 'xelatex',
          inputs: join(__dirname, 'template2', 'inputs'),
          fonts: join(__dirname, 'template2', 'inputs')
        }
      }
  }
}

export default getTemplateData
