import React from 'react'
import Layout from '../components/Layout'

const VideoPage = () => (
  <Layout>
    <section className="section section-medium-padding">
      <div className="container">
        <div className="content">
        <h1>Video</h1>
        <hr />
        <div className="columns">
        <div className="column">
        <h3>Spot TSD</h3>
        <iframe style={{width: '560px', height: '315px'}} title="Spot Tenisa Stołowego Dźwiękowego" src="https://www.youtube.com/embed/znShAVTNPPo" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
        </div>
        <div className="column">
        <h3>Instruktaż TSD</h3>
        <iframe style={{width: '560px', height: '315px'}} src="https://www.youtube.com/embed/n1Cue3_GE1k" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
        </div>
        </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default VideoPage
