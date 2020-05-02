import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'

export default class Services extends Component {

    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "Free Cocktails",
                info: 'Enjoy free cocktails while you crash the waves or relax while enjoying the sunset.'
            },
            {
                icon: <FaHiking />,
                title: "Endless Hiking",
                info: 'Outdoorsy and adventurous? Pack a bag and come out on a hiking trail!'
            },
            {
                icon: <FaShuttleVan />,
                title: "Free Shuttle",
                info: 'Available at any time at your disposal'
            },
            {
                icon: <FaBeer />,
                title: "Best Beers",
                info: 'Are you someone who enjoy drinking a nice fine ale? We outsource the best beer around!'
            }
        ]
    }

    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">{this.state.services.map((service, index) => {
                    return <article key={index} className="service">
                        <span>{service.icon}</span>
                        <h6>{service.title}</h6>
                        <p>{service.info} </p>
                    </article>
                })}</div>
            </section>
        )
    }
}
