import React from 'react'
import Link from 'gatsby-link'
import Layout from '../../components/Layout'

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section section-large-padding">
          <div className="container">
            <div className="content">
              <h1>W budowie...</h1>
              <p>
                Prosimy o kontakt telefoniczny, bądź przez formularz kontaktowy.
              </p>
              <ul>
                <li>
                  <Link to="/contact">Formularz kontaktowy</Link>
                </li>
                <li>
                  mail: <a href="mailto:tenisstolowydzwiekowy@gmail.com">tenisstolowydzwiekowy@gmail.com</a>
                </li>
                <li>
                  tel: <a href="tel:+48668336781">668 336 781</a>

                </li>
              </ul>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
