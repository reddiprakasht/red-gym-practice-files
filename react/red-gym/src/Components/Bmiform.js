import React from 'react'

//     document.getElementById('bmiform').addEventListener('submit', function(e) {

//     e.preventDefault();

//     const weight=document.getElementById("weight").value;

//     const height=document.getElementById("height").value;

//     const Bmi=weight/(height*height)

//     document.getElementById('result').innerHTML=Bmi

// })


const demo = () => {
    const weight = document.getElementById("weight").value;

    const height = document.getElementById("height").value / 100;

    const Bmi = weight / (height * height)

    let bmicategiry = ''

    if (Bmi <= 18.5) {
        bmicategiry = 'Underweight';

        document.getElementById('recomendedplan').style.color = 'pink'
    } else if (Bmi <= 24.9) {
        bmicategiry = 'Normal weight';

        document.getElementById('recomendedplan').style.color = 'green'
    } else if (Bmi <= 29.9) {
        bmicategiry = 'Overweight';

        document.getElementById('recomendedplan').style.color = 'yellow'

    } else {
        bmicategiry = 'Obesity'

        document.getElementById('recomendedplan').style.color = 'red'
    }


    document.getElementById('result').innerHTML = `<p>your Bmi is ${Bmi.toFixed(2)} <p/>`

    document.getElementById('recomendedplan').innerHTML = bmicategiry



}



export default function Bmiform() {
    return (
        <div>

            <div className="container" id="BMI">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card my-5">
                            <div className="card-header bg-danger text-white">
                                <h4>BMI Calculator</h4>
                            </div>
                            <div className="card-body">
                                <form id="bmiForm">
                                    <div className="form-group">
                                        <label htmlFor="weight">Weight (kg)</label>
                                        <input type="number" className="form-control m-2" id="weight" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="height">Height (cm)</label>
                                        <input type="number" className="form-control m-2" id="height" required />
                                    </div>
                                    <br />
                                    <button type="button" className="btn btn-danger btn-block" onClick={demo}>Calculate BMI</button>
                                </form>
                                <div id="result" className="mt-3"></div>
                                <div id="recomendedplan" className="mt-3 text-decoration-none"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
