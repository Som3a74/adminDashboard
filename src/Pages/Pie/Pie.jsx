import React from 'react'
import Header from './../../Components/Header';
import PieChartComponent from '../../Components/PieChartComponent';
import { data } from '../../utils/dataPie';

export default function Pie() {
  return <>
    <Header title="Pie Chart" subTitle="Simple Pie Chart programming language" />
    <PieChartComponent height={'75vh'} dataPie={data}/>
  </>
}
