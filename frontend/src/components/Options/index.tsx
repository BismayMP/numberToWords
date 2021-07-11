import React from 'react'
import './index.scss'
import { Col, Row } from 'react-bootstrap'
import { OptionTypes } from '../../utils/types'
import Switch from '../Switch'

type Props = {
  handleSwitch: (type: OptionTypes) => void
  apiType: boolean
  wordsFilter: boolean
  realTimeFetch: boolean
}

const Options = ({
  handleSwitch,
  apiType,
  wordsFilter,
  realTimeFetch,
}: Props) => {
  return (
    <Row noGutters className="optionsContainer">
      <Col xs={12} md={4} className="option">
        <h4>Pick the API to use</h4>
        <Switch
          labelStart="Rest Api"
          labelEnd="Graphql"
          value={apiType}
          handleSwitch={() => handleSwitch(OptionTypes.api)}
        />
      </Col>
      <Col xs={12} md={4} className="option">
        <h4>Filter real words</h4>
        <Switch
          value={wordsFilter}
          handleSwitch={() => handleSwitch(OptionTypes.filter)}
        />
      </Col>
      <Col xs={12} md={4} className="option">
        <h4>See results as you type</h4>
        <Switch
          value={realTimeFetch}
          handleSwitch={() => handleSwitch(OptionTypes.realTime)}
        />
      </Col>
    </Row>
  )
}

export default Options
