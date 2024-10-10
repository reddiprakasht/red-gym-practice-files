import React from 'react'

export default function Services() {
  return (
    <div>
    <section id="services" className="section">
        <div className="container">
            <h2 className="text-center mb-4 text-red">Our Services</h2>
            <div className="row">
                <div className="col-12 col-md-4 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title text-danger">Personal Training</h5>
                            <p className="card-text">Get personalized workout plans and one-on-one sessions with our expert trainers.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title text-danger">Group classNamees</h5>
                            <p className="card-text">Join our dynamic group classNamees for motivation and community support.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title text-danger">Nutrition Advice</h5>
                            <p className="card-text">Receive tailored nutrition advice to complement your fitness goals.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
class