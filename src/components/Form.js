import React from 'react'

export default function Form() {
    return (
        <div className='container'>
            <div className='row'>
                <div className="col-md-12 text-center mt-4">
                    <h1 > Enter all relevant details</h1>
                </div>

                <div className="col-md-12">

                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Name of experience</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" placeholder='*Name of experience' />

                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Experience</label>
                            <textarea type="text" class="form-control" id="exampleInputPassword1" placeholder='Description of Experience (max 100 words)' rows={7} col={10} />
                        </div>
                        <div className='row'>


                            <div className='col-md-6'>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Start Date</label>
                                    <input type="date" class="form-control" id="exampleInputEmail1" placeholder='*Start Date' />

                                </div>


                            </div>
                            <div className='col-md-6'>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">End Date</label>
                                    <input type="date" class="form-control" id="exampleInputEmail1" placeholder='*End Date' />

                                </div>

                            </div>
                        </div>
                        <div class="mb-3 form-check">
                            <input type="radio" class="form-check-input" name='exampleCheck' id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Education (max 3 experiences)</label>
                        </div>

                        <div class="mb-3 form-check">
                            <input type="radio" class="form-check-input" name='exampleCheck' id="exampleCheck2" />
                            <label class="form-check-label" for="exampleCheck2">Work experience</label>
                        </div>
                        <div class="mb-3 form-check">
                            <input type="radio" class="form-check-input" name='exampleCheck' id="exampleCheck3" />
                            <label class="form-check-label" for="exampleCheck3">Extracurricular</label>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>

                </div>
            </div>

        </div>
    )
}
