import React, { useState } from 'react'
import Chart from "react-apexcharts";

export default function Index(props) {
    console.log("location", props.series)
    const data = props.data
    const series = props.series
    const options = props.options




    // const [options] = useState({
    //     chart: {
    //         height: 350,
    //         type: 'rangeBar',
    //     },
    //     plotOptions: {
    //         bar: {
    //             barHeight: '80%',
    //             distributed: true,
    //             horizontal: true,
    //             // dataLabels: {
    //             //     position: 'bottom'
    //             // },
    //         }
    //     },
    //     colors: ['#33b2df', '#d4526e', '#13d8aa',

    //     ],
    //     dataLabels: {
    //         enabled: true,
    //         // textAnchor: 'start',
    //         // style: {
    //         //     colors: ['#fff']
    //         // },
    //         formatter: function (val, opt) {
    //             return opt.w.globals.labels[opt.dataPointIndex]
    //         },
    //     },

    //     xaxis: {
    //         type: 'datetime',
    //     },
    //     legend: {
    //         position: 'top',
    //         horizontalAlign: 'left'
    //     },
    //     title: {
    //         text: 'Work Experience Detail',
    //         align: 'center',
    //         // floating: true
    //     },
    //     tooltip: {
    //         theme: 'dark',
    //         x: {
    //             show: false
    //         },
    //     }
    // });



    // const [series] = useState([
    //     {
    //         name: data[data.length - 1].expname,

    //         data: data.map(item => ({
    //             x: item.expname,
    //             y: [
    //                 new Date(item.startdate).getTime(),
    //                 new Date(item.enddate).getTime()
    //             ]
    //         }))
    //         // data: [
    //         //     {
    //         //         x: 'Design',
    //         //         y: [
    //         //             new Date('2019-03-05').getTime(),
    //         //             new Date('2019-03-08').getTime()
    //         //         ]
    //         //     },
    //         //     {
    //         //         x: 'Code',
    //         //         y: [
    //         //             new Date('2019-03-02').getTime(),
    //         //             new Date('2019-03-05').getTime()
    //         //         ]
    //         //     },
    //         //     {
    //         //         x: 'Code',
    //         //         y: [
    //         //             new Date('2019-03-05').getTime(),
    //         //             new Date('2019-03-07').getTime()
    //         //         ]
    //         //     },
    //         //     {
    //         //         x: 'Test',
    //         //         y: [
    //         //             new Date('2019-03-03').getTime(),
    //         //             new Date('2019-03-09').getTime()
    //         //         ]
    //         //     },
    //         //     {
    //         //         x: 'Test',
    //         //         y: [
    //         //             new Date('2019-03-08').getTime(),
    //         //             new Date('2019-03-11').getTime()
    //         //         ]
    //         //     },
    //         //     {
    //         //         x: 'Validation',
    //         //         y: [
    //         //             new Date('2019-03-11').getTime(),
    //         //             new Date('2019-03-16').getTime()
    //         //         ]
    //         //     },
    //         //     {
    //         //         x: 'Design',
    //         //         y: [
    //         //             new Date('2019-03-01').getTime(),
    //         //             new Date('2019-03-03').getTime()
    //         //         ],
    //         //     }
    //         // ]
    //     },
    //     // {
    //     //     name: 'Joe',
    //     //     data: [
    //     //         {
    //     //             x: 'Design',
    //     //             y: [
    //     //                 new Date('2019-03-02').getTime(),
    //     //                 new Date('2019-03-05').getTime()
    //     //             ]
    //     //         },
    //     //         {
    //     //             x: 'Test',
    //     //             y: [
    //     //                 new Date('2019-03-06').getTime(),
    //     //                 new Date('2019-03-16').getTime()
    //     //             ],
    //     //             goals: [
    //     //                 {
    //     //                     name: 'Break',
    //     //                     value: new Date('2019-03-10').getTime(),
    //     //                     strokeColor: '#CD2F2A'
    //     //                 }
    //     //             ]
    //     //         },
    //     //         {
    //     //             x: 'Code',
    //     //             y: [
    //     //                 new Date('2019-03-03').getTime(),
    //     //                 new Date('2019-03-07').getTime()
    //     //             ]
    //     //         },
    //     //         {
    //     //             x: 'Deployment',
    //     //             y: [
    //     //                 new Date('2019-03-20').getTime(),
    //     //                 new Date('2019-03-22').getTime()
    //     //             ]
    //     //         },
    //     //         {
    //     //             x: 'Design',
    //     //             y: [
    //     //                 new Date('2019-03-10').getTime(),
    //     //                 new Date('2019-03-16').getTime()
    //     //             ]
    //     //         }
    //     //     ]
    //     // },
    //     // {
    //     //     name: 'Dan',
    //     //     data: [
    //     //         {
    //     //             x: 'Code',
    //     //             y: [
    //     //                 new Date('2019-03-10').getTime(),
    //     //                 new Date('2019-03-17').getTime()
    //     //             ]
    //     //         },
    //     //         {
    //     //             x: 'Validation',
    //     //             y: [
    //     //                 new Date('2019-03-05').getTime(),
    //     //                 new Date('2019-03-09').getTime()
    //     //             ],
    //     //             goals: [
    //     //                 {
    //     //                     name: 'Break',
    //     //                     value: new Date('2019-03-07').getTime(),
    //     //                     strokeColor: '#CD2F2A'
    //     //                 }
    //     //             ]



    //     //         },
    //     //     ]
    //     // }
    // ]);


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
