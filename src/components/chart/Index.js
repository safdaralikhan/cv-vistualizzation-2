import React, { useState } from 'react'
import Chart from "react-apexcharts";
import moment from 'moment';
export default function Index() {

    const [options] = useState({
        chart: {
            height: 350,
            type: 'rangeBar',
        },
        plotOptions: {
            bar: {
                barHeight: '100%',
                distributed: true,
                horizontal: true,
                dataLabels: {
                    position: 'bottom'
                },
            }
        },
        colors: ['#33b2df', '#d4526e', '#13d8aa',

        ],
        dataLabels: {
            enabled: true,
            textAnchor: 'start',
            style: {
                colors: ['#fff']
            },
            formatter: function (val, opt) {
                return opt.w.globals.labels[opt.dataPointIndex]
            },
        },

        xaxis: {
            type: 'datetime',
        },
        legend: {
            position: 'top',
        },
        title: {
            text: 'Work Experience Detail',
            align: 'center',
            floating: true
        },
        tooltip: {
            theme: 'dark',
            x: {
                show: false
            },
        }
    });

    const [series] = useState([
        {
            name: 'Bob',
            data: [
                {
                    x: 'Work',
                    y: [
                        new Date('2019').getTime(),
                        new Date('2024').getTime(),
                    ],
                },
                {
                    x: 'Education',
                    y: [
                        new Date('2015').getTime(),
                        new Date('2018').getTime(),
                    ],
                },
                {
                    x: 'Extracurricular',
                    y: [
                        new Date('2009').getTime(),
                        new Date('2012').getTime(),
                    ],
                },
            ],
        },

    ]);


    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <div id="chart">
                        <Chart
                            options={options}
                            series={series}
                            type="rangeBar"
                            height={350}
                        />
                    </div>
                </div>
            </div>
        </div>


    )
}
