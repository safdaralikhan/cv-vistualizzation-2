import React, { useState } from 'react'
import Chart from "../components/chart/Index"

export default function Form() {

    const [startdate, setStartdate] = useState("")
    const [enddate, setEnddate] = useState("")
    const [expname, setExpname] = useState("")
    const [expdetail, setExpdetail] = useState("")
    const [selectradio, setSelectradio] = useState("")
    const [data, setData] = useState([])
    const obj = { startdate, enddate, expname, expdetail, selectradio }


    const handleInputChange = (event, func) => {
        func(event.target.value)

    }


    const DataSend = () => {

        setData([...data, obj])
        let newdata = [...data, obj]
        setSeries([
            {
                // name: data[data.length - 1].expname,
                name: "Bob",

                data: newdata.map(item => ({
                    x: item.expname + " " + item.expdetail,
                    y: [
                        new Date(item.startdate).getTime(),
                        new Date(item.enddate).getTime()
                    ]
                }))

            }]
        )

        // name: "Safdar",

        // setTimeout(() => {

        //     navigate('/Chart', { state: { data: data } })
        // }, 3000);

    }

    const [options] = useState({
        chart: {
            height: 400,
            type: 'rangeBar',
        },
        plotOptions: {
            bar: {
                barHeight: '100%',
                distributed: true,
                horizontal: true,
                // dataLabels: {
                //     position: 'bottom'
                // },
            }
        },
        colors: ['#33b2df', '#d4526e', '#13d8aa',

        ],
        // dataLabels: {
        //     enabled: true,
        //     textAnchor: 'start',
        //     // style: {
        //     //     colors: ['#fff']
        //     // },
        //     formatter: function (val, opt) {
        //         console.log("val, opt", val, opt)
        //         return opt.w.globals.labels[opt.dataPointIndex]
        //     },
        // },


        dataLabels: {
            enabled: true,
            enabledOnSeries: undefined,
            formatter: function (val, opts) {
                console.log("val", opts.w.globals.labels)
                return opts.w.globals.labels[opts.dataPointIndex]
            },
            textAnchor: 'start',
            distributed: false,
            offsetX: 0,
            offsetY: 0,
            style: {
                fontSize: '20px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 'bold',
                colors: undefined
            },
            background: {
                enabled: true,
                // foreColor: '#fff',
                // padding: 4,
                borderRadius: 2,
                borderWidth: 3,
                borderColor: '#fff',
                // opacity: 0.9,
                dropShadow: {
                    // enabled: false,
                    // top: 1,
                    // left: 1,
                    blur: 1,
                    color: '#000',
                    // opacity: 0.45
                }
            },
            // dropShadow: {
            //     enabled: false,
            //     top: 1,
            //     left: 1,
            //     blur: 1,
            //     color: '#000',
            //     opacity: 0.45
            // }
        },

        xaxis: {
            type: 'datetime',
        },
        legend: {
            position: 'top',
            horizontalAlign: 'left'
        },
        title: {
            text: 'Work Experience Detail',
            align: 'center',
            // floating: true
        },
        tooltip: {
            theme: 'dark',
            x: {
                show: false
            },
        }
    });



    const [series, setSeries] = useState([
        {
            // name: data[data.length - 1].expname,
            name: "Bob`",

            data: data.map(item => ({
                x: item.expname + " " + item.expdetail,
                y: [
                    new Date(item.startdate).getTime(),
                    new Date(item.enddate).getTime()
                ]
            }))
            // data: [
            //     {
            //         x: 'Design',
            //         y: [
            //             new Date('2019-03-05').getTime(),
            //             new Date('2019-03-08').getTime()
            //         ]
            //     },
            //     {
            //         x: 'Code',
            //         y: [
            //             new Date('2019-03-02').getTime(),
            //             new Date('2019-03-05').getTime()
            //         ]
            //     },
            //     {
            //         x: 'Code',
            //         y: [
            //             new Date('2019-03-05').getTime(),
            //             new Date('2019-03-07').getTime()
            //         ]
            //     },
            //     {
            //         x: 'Test',
            //         y: [
            //             new Date('2019-03-03').getTime(),
            //             new Date('2019-03-09').getTime()
            //         ]
            //     },
            //     {
            //         x: 'Test',
            //         y: [
            //             new Date('2019-03-08').getTime(),
            //             new Date('2019-03-11').getTime()
            //         ]
            //     },
            //     {
            //         x: 'Validation',
            //         y: [
            //             new Date('2019-03-11').getTime(),
            //             new Date('2019-03-16').getTime()
            //         ]
            //     },
            //     {
            //         x: 'Design',
            //         y: [
            //             new Date('2019-03-01').getTime(),
            //             new Date('2019-03-03').getTime()
            //         ],
            //     }
            // ]
        },
        // {
        //     name: 'Joe',
        //     data: [
        //         {
        //             x: 'Design',
        //             y: [
        //                 new Date('2019-03-02').getTime(),
        //                 new Date('2019-03-05').getTime()
        //             ]
        //         },
        //         {
        //             x: 'Test',
        //             y: [
        //                 new Date('2019-03-06').getTime(),
        //                 new Date('2019-03-16').getTime()
        //             ],
        //             goals: [
        //                 {
        //                     name: 'Break',
        //                     value: new Date('2019-03-10').getTime(),
        //                     strokeColor: '#CD2F2A'
        //                 }
        //             ]
        //         },
        //         {
        //             x: 'Code',
        //             y: [
        //                 new Date('2019-03-03').getTime(),
        //                 new Date('2019-03-07').getTime()
        //             ]
        //         },
        //         {
        //             x: 'Deployment',
        //             y: [
        //                 new Date('2019-03-20').getTime(),
        //                 new Date('2019-03-22').getTime()
        //             ]
        //         },
        //         {
        //             x: 'Design',
        //             y: [
        //                 new Date('2019-03-10').getTime(),
        //                 new Date('2019-03-16').getTime()
        //             ]
        //         }
        //     ]
        // },
        // {
        //     name: 'Dan',
        //     data: [
        //         {
        //             x: 'Code',
        //             y: [
        //                 new Date('2019-03-10').getTime(),
        //                 new Date('2019-03-17').getTime()
        //             ]
        //         },
        //         {
        //             x: 'Validation',
        //             y: [
        //                 new Date('2019-03-05').getTime(),
        //                 new Date('2019-03-09').getTime()
        //             ],
        //             goals: [
        //                 {
        //                     name: 'Break',
        //                     value: new Date('2019-03-07').getTime(),
        //                     strokeColor: '#CD2F2A'
        //                 }
        //             ]



        //         },
        //     ]
        // }
    ]);

    console.log("series", series)

    return (
        <div className='container mb-2'>
            <div className='row'>
                <div className="col-md-12 text-center mt-4">
                    <h1 > Enter all relevant details</h1>
                </div>

                <div className="col-md-12">

                    <form>
                        <div class="mb-3">
                            <label htmlFor="exampleInputEmail1" class="form-label">Name of experience</label>
                            <input value={expname} onChange={(e) => handleInputChange(e, setExpname)} type="text" class="form-control" id="exampleInputEmail1" placeholder='*Name of experience' />

                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Experience</label>
                            <textarea value={expdetail} onChange={(e) => handleInputChange(e, setExpdetail)} type="text" class="form-control" id="exampleInputPassword1" placeholder='Description of Experience (max 100 words)' rows={7} col={10} />
                        </div>
                        <div className='row'>


                            <div className='col-md-6'>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Start Date</label>
                                    <input value={startdate} onChange={(e) => handleInputChange(e, setStartdate)} type="date" class="form-control" id="exampleInputEmail1" placeholder='*Start Date' />

                                </div>


                            </div>
                            <div className='col-md-6'>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">End Date</label>
                                    <input value={enddate} onChange={(e) => handleInputChange(e, setEnddate)} type="date" class="form-control" id="exampleInputEmail1" placeholder='*End Date' />

                                </div>

                            </div>
                        </div>
                        <div class="mb-3 form-check">
                            <input value="Education" onChange={(e) => handleInputChange(e, setSelectradio)} type="radio" class="form-check-input" name='selectradio' id="exampleCheck1" checked={selectradio === "Education"} />
                            <label class="form-check-label" for="exampleCheck1">Education (max 3 experiences)</label>
                        </div>

                        <div class="mb-3 form-check">
                            <input value="Work experience" onChange={(e) => handleInputChange(e, setSelectradio)} type="radio" class="form-check-input" name='selectradio' id="exampleCheck2" checked={selectradio === "Work experience"} />
                            <label class="form-check-label" for="exampleCheck2">Work experience</label>
                        </div>
                        <div class="mb-3 form-check">
                            <input value="Extracurricular" onChange={(e) => handleInputChange(e, setSelectradio)} type="radio" class="form-check-input" name='selectradio' id="exampleCheck3" checked={selectradio === "Extracurricular"} />
                            <label class="form-check-label" for="exampleCheck3">Extracurricular</label>
                        </div>
                        <button type="button" onClick={() => DataSend()} class="btn btn-primary">Submit</button>
                    </form>

                    <ul>
                        {data.map((item, index) => (
                            <li key={index}>{item.expname}</li>
                        ))}
                    </ul>

                </div>
            </div>

            <Chart data={data} series={series} options={options} />
        </div>
    )
}
