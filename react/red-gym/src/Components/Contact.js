import React from 'react'

export default function Contact() {
  return (
    <div>
     
    <section id="contact" className="section">
        <div className="container">
            <h2 className="text-center mb-4 text-red">Contact Us</h2>
            <form>
                <div className="row">
                    <div className="col-12 col-md-6 mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" required/>
                    </div>
                    <div className="col-12 col-md-6 mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" required/>
                    </div>
                    <div className="col-12 mb-3">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea className="form-control" id="message" rows="4" required></textarea>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-danger">Send Message</button>
                    </div>
                </div>
            </form>
        </div>
    </section>
    </div>
  )
}
