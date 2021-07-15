import React, { useEffect, useState } from 'react'
import './index.scss'
import {
  Row,
  InputGroup,
  FormControl,
  Button,
  Badge,
  Spinner,
  Alert,
} from 'react-bootstrap'
import _ from 'lodash'
import Options from '../../components/Options'
import { OptionTypes, getWordsResponseType } from '../../utils/types'
import axios from 'axios'
import { gql, useLazyQuery } from '@apollo/client'

const HomePage = () => {
  const apiUrl = process.env.REACT_APP_API_HOST
  /** false for rest api
   *  true for graphql
   */
  const [apiType, setApiType] = useState(false)
  const [wordsFilter, setWordsFilter] = useState(false)
  const [realTimeFetch, setRealTimeFetch] = useState(false)
  const [error, setError] = useState('')
  const [isLoading, setLoading] = useState(false)
  const [showKeyboard, setShowKeyboard] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState('')
  const [words, setWords] = useState<string[]>([])
  const [getWords, { loading, data }] = useLazyQuery(GET_WORDS)

  useEffect(() => {
    if (apiType) {
      data?.getWords?.success
        ? setWords(data?.getWords?.words)
        : setError(data?.getWords?.error)
    }
  }, [data, loading, apiType])

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

  const fetchWords = async (str?: string) => {
    if (apiType) {
      getWords({
        variables: { phoneNumber: phoneNumber },
      })
    } else {
      setLoading(true)
      axios
        .get(`${apiUrl}/api/${str}`)
        .then(({ data }: getWordsResponseType) => {
          if (data?.success) {
            setWords(data?.words)
          } else {
            setError(data?.error)
            setTimeout(() => {
              setError('')
            }, 5000)
            setWords([])
          }
          setLoading(false)
        })
        .catch(({ response }) => {
          setWords([])
          setError(response?.data?.error)
          setTimeout(() => {
            setError('')
          }, 5000)
          setLoading(false)
        })
    }
  }

  const handleInputChange = async ({ target: { value } }: any) => {
    setError('')
    setPhoneNumber(value)
    if (realTimeFetch) {
      _.debounce(async () => await fetchWords(value), 1000, {
        leading: false,
      })()
    }
  }

  return (
    <div className="home-container">
      <Row noGutters className="input-container">
        <h4>Phoneword generator</h4>
        <InputGroup className="mb-3">
          <FormControl
            id="numbers-input"
            className="input"
            type="tel"
            aria-label="Default"
            value={phoneNumber}
            onChange={handleInputChange}
            aria-describedby="inputGroup-sizing-default"
          />
          {!realTimeFetch && (
            <Button
              variant="text"
              className="btn-search"
              onClick={() => fetchWords(phoneNumber)}
            >
              Generate
            </Button>
          )}
        </InputGroup>
      </Row>
      <Options
        handleSwitch={handleSwitch}
        apiType={apiType}
        wordsFilter={wordsFilter}
        realTimeFetch={realTimeFetch}
      />
      <Row noGutters className="words-container">
        {words.length > 0 && (
          <>
            <h4>Generated Words</h4>
            {words.map((word: string, index: number) => {
              return (
                <Badge
                  key={index}
                  pill
                  variant="primary"
                  className="word-badge"
                >
                  {word}
                </Badge>
              )
            })}
          </>
        )}
      </Row>
      {(isLoading || loading) && (
        <div className="isLoading">
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      )}
      {error && (
        <Alert variant="danger" className="alert">
          {error}
        </Alert>
      )}
    </div>
  )
}

export default HomePage

const GET_WORDS = gql`
  query GetWords($phoneNumber: String) {
    getWords(phoneNumber: $phoneNumber) {
      success
      words
      error
    }
  }
`