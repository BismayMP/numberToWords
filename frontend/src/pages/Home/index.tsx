import React, { useState } from 'react'
import './index.scss'
import { Row, InputGroup, FormControl } from 'react-bootstrap'
import Options from '../../components/Options'
import { OptionTypes } from '../../utils/types'

const HomePage = () => {
  /** false for rest api
   *  true for graphql
   */
  const [apiType, setApiType] = useState(false)
  const [wordsFilter, setWordsFilter] = useState(false)
  const [realTimeFetch, setRealTimeFetch] = useState(false)
  const [showKeyboard, setShowKeyboard] = useState(false)

  const handleSwitch = (type: OptionTypes) => {
    const { api, filter, realTime } = OptionTypes
    switch (type) {
      case api:
        setApiType(!apiType)
        break
      case filter:
        setWordsFilter(!wordsFilter)
        break
      case realTime:
        setRealTimeFetch(!realTimeFetch)
        break
      default:
        break
    }
  }

  return (
    <div className="home-container">
      <Row>
        <InputGroup className="mb-3">
          <FormControl
            className="input"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
      </Row>
      <Options
        handleSwitch={handleSwitch}
        apiType={apiType}
        wordsFilter={wordsFilter}
        realTimeFetch={realTimeFetch}
      />
    </div>
  )
}

export default HomePage
