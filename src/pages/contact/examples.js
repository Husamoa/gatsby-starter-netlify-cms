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
              <h4>Zapraszam do obejrzenia spotu promującego Tenis Stołowy Dźwiękowy</h4>
              <div className="responsive-container">
              <iframe className="responsive-iframe" title="Spot Tenisa Stołowego Dźwiękowego" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fdzwiekowy%2Fvideos%2F363264254438433%2F&show_text=0&width=560" allowFullScreen={true}></iframe>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
