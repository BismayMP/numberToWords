import React from 'react'
import './index.scss'
import { Button, Card, Col } from 'react-bootstrap'

type Props = {
  handleClick: (value: string) => void
}

const Keyboard = ({ handleClick }: Props) => {
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#']
  return (
    <Col className="keyboard-card">
      <Card>
        <Card>
          <Card.Header>
            <h4>Phone Keyboard </h4>
          </Card.Header>
          <Card.Body>
            <div className="keyboard">
              {numbers.map((char, index) => (
                <Button
                  type="secondary"
                  onClick={() => handleClick(char)}
                  key={index}
                >
                  {char}
                </Button>
              ))}
            </div>
          </Card.Body>
        </Card>
      </Card>
    </Col>
  )
}

export default Keyboard
