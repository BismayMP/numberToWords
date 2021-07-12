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
  const [numbers, setNumbers] = useState('')
  const [words, setWords] = useState<string[]>([])
  const [getWords, { loading, data }] = useLazyQuery(GET_WORDS)

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

  useEffect(() => {
    if (apiType) {
      data?.getWords?.success
        ? setWords(data?.getWords?.words)
        : setError(data?.getWords?.error)
    }
  }, [data, loading, apiType])

  const fetchWords = async (str?: string) => {
    if (apiType) {
      getWords({
        variables: { number: numbers },
      })
    } else {
      setLoading(true)
      axios
        .get(`${apiUrl}/api/${str}`)
        .then(({ data }: getWordsResponseType) => {
          if (data?.success) {
            setWords(data?.words)
          } else {
            setError(data.error)
          }
          setLoading(false)
        })
        .catch((err) => {
          setLoading(false)
          setError(err)
        })
    }
  }

  const handleInputChange = ({ target: { value } }: any) => {
    setNumbers(value)
    if (realTimeFetch) {
      fetchWords(value)
    }
  }

  return (
    <div className="home-container">
      <Row noGutters className="input-container">
        <InputGroup className="mb-3">
          <FormControl
            className="input"
            type="phone"
            aria-label="Default"
            value={numbers}
            onChange={handleInputChange}
            aria-describedby="inputGroup-sizing-default"
          />
          {!realTimeFetch && (
            <Button
              variant="text"
              className="btn-search"
              onClick={() => fetchWords(numbers)}
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
            <h4>Generated Words for {numbers}</h4>
            {words.map((word: string, index: number) => {
              return (
                <>
                  <Badge
                    key={index}
                    pill
                    variant="primary"
                    className="word-badge"
                  >
                    {word}
                  </Badge>
                </>
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
      {error && <Alert variant="danger">{error}</Alert>}
    </div>
  )
}

export default HomePage

const GET_WORDS = gql`
  query GetWords($number: String) {
    getWords(number: $number) {
      success
      words
      error
    }
  }
`
