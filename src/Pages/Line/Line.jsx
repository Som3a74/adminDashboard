import React from 'react'
import LineChartComponent from '../../Components/LineChartComponent'
import Header from './../../Components/Header';

export default function Line() {
  return <>
    <Header title="Line Chart" subTitle="Simple Line Chart" />
    <LineChartComponent heightLine='75vh'/>
  </>
}
