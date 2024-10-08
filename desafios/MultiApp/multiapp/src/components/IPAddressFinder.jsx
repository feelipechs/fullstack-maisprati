import { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  max-width: 800px;
  margin: 50px auto;
`
const Title = styled.h2`
  color: #333;
  margin-bottom: 20px;
  font-size: 24px;
  text-align: center;
`

const Input = styled.input`
  margin-bottom: 20px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`

const Button = styled.button`
  padding: 12px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`

const ResultsContainer = styled.div`
    color: #fff;
`

const IPAddressFinder = () => {
    const [ ip, setIp ] = useState('')
    const [ ipData, setIpData] = useState(null)

    const ipFinder = async () => {
        try {
            const response = await axios.get(`https://ipinfo.io/${ip}/json`)
            setIpData(response.data)
        } catch (error) {
            console.error("Please provide a valid IP address", error)
        }
    }

    return (
        <Container>
            <Title>Ip Address Finder</Title>
            <Input
                type="text"
                value={ip}
                onChange={(event) => setIp(event.target.value)}
            />
            <Button onClick={ipFinder}>Search</Button>
            {ipData && (
                <ResultsContainer>
                    <p><strong>IP:</strong> {ipData.ip}</p>
                    <p><strong>Location:</strong> {ipData.city}, {ipData.region}, {ipData.country}</p>
                    <p><strong>ISP:</strong> {ipData.org}</p>
                </ResultsContainer>
            )}
        </Container>
    )
}

export default IPAddressFinder