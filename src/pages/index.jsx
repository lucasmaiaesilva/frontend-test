import React, { useState } from 'react';
import Header from '../components/Header';
import SearchFlights from '../components/SearchFlights';
import Display from '../components/Display';

const Home = () => {

  const [ data, setData ] = useState({
    origin: '',
    destiny: '',
    date: '',
    people: '',
  });

  const [ displayData, setDisplayData ] = useState('{}');

  const handleChange = (value, name) => {
    setData(prevState => {
      return {
        ...prevState,
        [name]: value
      };
    });
  }

  const submitData = async (e) => {
    e.preventDefault();
    const { origin, destiny, date, people } = data;

    await setData({
      origin,
      destiny,
      date,
      people,
    });

    setDisplayData(JSON.stringify(data));
  };

  const fields = [
    {
      label: 'Origem',
      field: 'origin',
      type: 'text',
      value: data.origin,
      handleChange: (e) => handleChange(e.target.value, 'origin')
    },
    {
      label: 'Destino',
      field: 'destiny',
      type: 'text',
      value: data.destiny,
      handleChange: (e) => handleChange(e.target.value, 'destiny')
    },
    {
      label: 'Data de ida / Retorno',
      field: 'date',
      type: 'date',
      value: data.date,
      handleChange: (e) => handleChange(e.target.value, 'date')
    },
    {
      label: 'Numero de pessoas',
      field: 'people',
      type: 'number',
      value: data.people,
      handleChange: (e) => handleChange(e.target.value, 'people')
    },
  ];

  return (
    <>
      <Header>
        <SearchFlights fields={fields} submit={submitData} />
      </Header>

      <Display data={displayData} />
    </>
  )
};

export default Home;
