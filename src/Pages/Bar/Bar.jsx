import React from 'react'
import Header from './../../Components/Header';
import BarChartComponent from './../../Components/BarChartComponent';
import { data } from './../../utils/dataBar';

export default function Bar() {

  return <>
    <Header title="Bar Chart" subTitle="The minimum wage in Germany, France and Spain (EUR/month)" />
    <BarChartComponent dataBars={data} keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']} />
  </>
}