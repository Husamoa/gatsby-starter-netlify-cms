import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'


export default class Index extends React.Component {

  render() {
    return (
      <Layout>
            <div
              className="full-width-image-container margin-top-0"
              style={{
                backgroundImage: `url('/img/tsd-start-2.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <h2
                className="has-text-weight-bold is-size-1"
                style={{
                  boxShadow: '0.5rem 0 0 rgba(0, 0, 0, 0.5), -0.5rem 0 0 rgba(0, 0, 0, 0.5)',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  color: 'white',
                  padding: '1rem',
                }}
              >
                Cele fundacji
              </h2>
            </div>
            <section className="section section-">
              <div className="container">
                <div className="content">
                <h3>Naszymi głównymi celami są...</h3>
                <ul>
                  <li>do uzupełnienia</li>
                  <li>do uzupełnienia</li>
                  <li>do uzupełnienia</li>
                  <li>do uzupełnienia</li>
                </ul>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
