import { createGlobalStyle } from 'styled-components'
import { ConstantBlack } from './Constants'

const Global = createGlobalStyle`
    * {
      margin: 0px;
      padding: 0px;
      box-sizing: border-box;
    }
    body {
      background-color: ${ConstantBlack};
    }
    `
export default Global
