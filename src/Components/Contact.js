import React, { Component } from 'react'

class Contact extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name
      var street = this.props.data.address.street
      var city = this.props.data.address.city
      var state = this.props.data.address.state
      var zip = this.props.data.address.zip
      var phone = this.props.data.phone
      var email = this.props.data.email
      var message = this.props.data.contactmessage
    }

    return (
      <section id='contact'>
        <div className='row section-head'>
          <div className='two columns header-col'>
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>

          <div className='ten columns'>
            <p className='lead'>{message}</p>
          </div>
        </div>

        <div className='row'>
          <div className='eight columns'>
            <form
              method='POST'
              action='/contact'
              data-netlify='true'
              name='contact'
            >
              <div>
                <input type='hidden' name='form-name' value='contact' />
                <label htmlFor='contactName'>
                  Name <span className='required'>*</span>
                </label>
                <input
                  required
                  type='text'
                  defaultValue=''
                  size='35'
                  name='name'
                  onChange={this.handleChange}
                />
              </div>

              <div>
                <label htmlFor='contactEmail'>
                  Email <span className='required'>*</span>
                </label>
                <input
                  required
                  type='text'
                  defaultValue=''
                  size='35'
                  id='contactEmail'
                  name='email'
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label htmlFor='contactMessage'>
                  Message <span className='required'>*</span>
                </label>
                <textarea
                  required
                  cols='50'
                  rows='15'
                  id='contactMessage'
                  name='message'
                />
              </div>

              <div>
                <button type='submit' className='submit'>
                  Submit
                </button>
                <span id='image-loader'>
                  <img alt='' src='images/loader.gif' />
                </span>
              </div>
            </form>

            <div id='message-warning'> Error boy</div>
            <div id='message-success'>
              <i className='fa fa-check'></i>Your message was sent, thank you!
              <br />
            </div>
          </div>

          <aside className='four columns footer-widgets'>
            <div className='widget widget_contact'>
              <h4>Address and Phone</h4>
              <p className='address'>
                {name}
                <br />
                {street} <br />
                {city}, {state} {zip}
                <br />
                <span>{phone}</span>
              </p>
            </div>
          </aside>
        </div>
      </section>
    )
  }
}

export default Contact
