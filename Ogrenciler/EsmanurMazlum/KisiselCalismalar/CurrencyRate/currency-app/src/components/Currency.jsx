import { useState } from "react";
import { Button, CurrencyDiv, Header, Input, Select, Wrapper } from "../styled";
import { FaArrowRight } from "react-icons/fa6";
import axios from 'axios';

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_NHm5If6bafVy5ElkjDZMFkMm618UkP82rwPr12Vc" ;

function Currency() {
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("TRY");
    const [result, setResult] = useState(1);

    const exchange = async () => {
        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`); // doların (veya başka bir para biriminin) diğer para birimlerindeki değeri dönüyor 
        const result = (response.data.data[toCurrency] * amount).toFixed(2);// o değerlerden birini seçiyoruz ve miktarla çarpıyoruz
        setResult(result);
    }


  return (
    <CurrencyDiv>
      <Header>Currency Rate App</Header>
      <Wrapper>
        <Input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}/>

        <Select onChange={(e) => setFromCurrency(e.target.value)}>
          <option>USD</option>
          <option>EUR</option>
          <option>TRY</option>
        </Select>

        <FaArrowRight style={{ fontSize: 20 }} />

        <Select onChange={(e) => setToCurrency(e.target.value)}>
          <option>TRY</option>
          <option>EUR</option>
          <option>USD</option>
        </Select>

        <Input type="number" value={result}/>
      </Wrapper>
      <Button onClick={exchange} >EXCHANGE</Button>
    </CurrencyDiv>
  );
}

export default Currency;
