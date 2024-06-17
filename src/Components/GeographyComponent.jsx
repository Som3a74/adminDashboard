import React from 'react'
import { Box, useTheme } from '@mui/material'
import { ResponsiveChoropleth } from '@nivo/geo'
import { data } from './../utils/dataGeo';
import { worldCountries } from '../Pages/Geography/world_countries';
import { themeBar } from './../Pages/Bar/themeBar';

export default function GeographyComponent({ heightGeo = '75vh', Scale = 150, legend = true }) {
    const theme = useTheme()
    return (
        <Box sx={{ height: heightGeo, border: legend ? `1px solid ${theme.palette.text.primary}` : '0px' }}>
            <ResponsiveChoropleth
                projectionScale={Scale}
                data={data}
                theme={themeBar()}
                features={worldCountries.features}
                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                colors="spectral"
                domain={[0, 1000000]}
                unknownColor="#666666"
                label="properties.name"
                valueFormat=".2s"
                projectionTranslation={[0.5, 0.5]}
                projectionRotation={[0, 0, 0]}
                enableGraticule={false}
                graticuleLineColor="#dddddd"
                borderWidth={1.1}
                borderColor="#fff"
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: '#38bcb2',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: '#eed312',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    },
                    {
                        id: 'gradient',
                        type: 'linearGradient',
                        colors: [
                            {
                                offset: 0,
                                color: '#000'
                            },
                            {
                                offset: 100,
                                color: 'inherit'
                            }
                        ]
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: 'CAN'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'CHN'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'ATA'
                        },
                        id: 'gradient'
                    }
                ]}
                legends={
                    legend ?
                        [
                            {
                                anchor: "bottom-left",
                                direction: "column",
                                justify: true,
                                translateX: 20,
                                translateY: -20,
                                itemsSpacing: 0,
                                itemWidth: 94,
                                itemHeight: 18,
                                itemDirection: "left-to-right",
                                itemTextColor: theme.palette.text.primary,
                                itemOpacity: 0.85,
                                symbolSize: 18,
                                effects: [
                                    {
                                        on: "hover",
                                        style: {
                                            itemTextColor: theme.palette.text.primary,
                                            itemOpacity: 1,
                                        },
                                    },
                                ],
                            },
                        ]
                        : []
                }
            />
        </Box>
    )
}


