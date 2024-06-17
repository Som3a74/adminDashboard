import React from 'react'
import { ResponsivePie } from '@nivo/pie'
import { Box } from '@mui/material'
import { data } from './../utils/dataPie';
import { themeBar } from './../Pages/Bar/themeBar';
import { useTheme } from '@mui/material';

export default function PieChartComponent({ height = '75vh', dataPie = data, colorSchema = 'nivo', Dash = true, Radius = .5 }) {
    const Theme = useTheme()
    return (
        <Box sx={{ height: height }}>
            <ResponsivePie
                theme={themeBar()}
                data={dataPie}
                projectionScale={20}
                margin={
                    Dash ? { top: 40, right: 80, bottom: 80, left: 80 }
                        : { top: 10, right: 0, bottom: 10, left: 0 }
                }
                innerRadius={Radius}
                padAngle={0.7}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                colors={{ scheme: colorSchema }}
                borderWidth={1}
                borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            0.2
                        ]
                    ]
                }}
                enableArcLabels={Dash}
                enableArcLinkLabels={Dash}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor={Theme.palette.text.primary}
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: 'color' }}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            2
                        ]
                    ]
                }}
                defs={
                    Dash ? [
                        {
                            id: 'dots',
                            type: 'patternDots',
                            background: 'inherit',
                            color: 'rgba(255, 255, 255, 0.3)',
                            size: 4,
                            padding: 1,
                            stagger: true
                        },
                        {
                            id: 'lines',
                            type: 'patternLines',
                            background: 'inherit',
                            color: 'rgba(255, 255, 255, 0.3)',
                            rotation: -45,
                            lineWidth: 6,
                            spacing: 10
                        }
                    ] : []
                }
                fill={
                    Dash ? [
                        {
                            match: {
                                id: 'ruby'
                            },
                            id: 'dots'
                        },
                        {
                            match: {
                                id: 'c'
                            },
                            id: 'dots'
                        },
                        {
                            match: {
                                id: 'go'
                            },
                            id: 'dots'
                        },
                        {
                            match: {
                                id: 'python'
                            },
                            id: 'dots'
                        },
                        {
                            match: {
                                id: 'scala'
                            },
                            id: 'lines'
                        },
                        {
                            match: {
                                id: 'lisp'
                            },
                            id: 'lines'
                        },
                        {
                            match: {
                                id: 'elixir'
                            },
                            id: 'lines'
                        },
                        {
                            match: {
                                id: 'javascript'
                            },
                            id: 'lines'
                        }
                    ] : []
                }
                legends={
                    Dash ? [
                        {
                            anchor: 'bottom',
                            direction: 'row',
                            justify: false,
                            translateX: 0,
                            translateY: 56,
                            itemsSpacing: 0,
                            itemWidth: 100,
                            itemHeight: 18,
                            itemTextColor: '#999',
                            itemDirection: 'left-to-right',
                            itemOpacity: 1,
                            symbolSize: 18,
                            symbolShape: 'circle',
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemTextColor: Theme.palette.text.primary
                                    }
                                }
                            ]
                        }
                    ] : []
                }
            />
        </Box>
    )
}