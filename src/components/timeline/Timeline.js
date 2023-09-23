import React, { useState } from 'react';
import "./timeline.css"
function Timeline() {
    const [events, setEvents] = useState([]);
    const [companyName, setCompanyName] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [expname, setExpname] = useState("")
    const [expdetail, setExpdetail] = useState("")
    const [startDate, setStartDate] = useState(''); // State for the start date
    const [endDate, setEndDate] = useState('');     // State for the end date

    const addEvent = () => {
        if (expname && expdetail && startDate && endDate) {
            // Create a range of years between the start and end dates
            const startYear = new Date(startDate).getFullYear();
            const endYear = new Date(endDate).getFullYear();
            const yearRange = `${startYear}-${endYear}`;

            const newEvent = {
                yearRange,
                expname,
                expdetail,
            };

            setEvents([...events, newEvent]);
            setExpdetail('');
            setExpname('');
            // setStartDate('');
            // setEndDate('');
        }
    };
    const handleInputChange = (event, func) => {
        func(event.target.value)

    }

    // Generate an array of years based on the start and end dates
    const generateYears = () => {
        if (startDate && endDate) {
            const startYear = new Date(startDate).getFullYear();
            const endYear = new Date(endDate).getFullYear();
            const years = [];

            for (let year = startYear; year <= endYear; year += 2) {
                years.push(year);
            }

            return years;
        }

        return [];
    };

    return (
        <div>
            <h1>Timeline</h1>


            <div className='container mb-2'>
                <div className='row'>
                    <div className="col-md-12 text-center mt-4">
                        {/* <h1 > Enter all relevant details</h1> */}
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
                                        <input value={startDate} onChange={(e) => handleInputChange(e, setStartDate)} type="date" class="form-control" id="exampleInputEmail1" placeholder='*Start Date' />

                                    </div>


                                </div>
                                <div className='col-md-6'>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">End Date</label>
                                        <input value={endDate} onChange={(e) => handleInputChange(e, setEndDate)} type="date" class="form-control" id="exampleInputEmail1" placeholder='*End Date' />

                                    </div>

                                </div>
                            </div>


                            <button type="button" onClick={addEvent} class="btn btn-primary">Submit</button>
                        </form>



                    </div>
                </div>
                <ul className="timeline-events">
                    {events.map((event, index) => (
                        <li key={index} className="timeline-event-years-2">
                            <h2>{event.yearRange}</h2>
                            <h3>{event.expname}</h3>
                            <h4 >{event.expdetail}</h4>
                        </li>
                    ))}
                </ul>
                {/* Render the years list dynamically */}
                <ul className="timelines-years">
                    {generateYears().map((year) => (
                        <li key={year}>{year}</li>
                    ))}
                </ul>

            </div>
        </div>
    );
}

export default Timeline;
