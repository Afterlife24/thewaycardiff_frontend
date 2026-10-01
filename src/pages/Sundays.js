import React from 'react';
import { Link } from 'react-router-dom';
import { getImageUrl } from '../imageConfig';
import SEO from '../components/SEO';
import './Sundays.css';

/* -----------------------------------------------------------------------
   JSON-LD structured data — ReligiousOrganization with venue/service info
   Validates at: https://validator.schema.org
   ----------------------------------------------------------------------- */
const churchSchema = {
    '@context': 'https://schema.org',
    '@type': 'ReligiousOrganization',
    '@id': 'https://thewaycardiff.co.uk/#church',
    name: 'The Way Church Cardiff',
    alternateName: 'The Way Cardiff',
    description:
        'A Christian church gathering in Penarth and serving Cardiff, Cardiff Bay and the Vale of Glamorgan.',
    url: 'https://thewaycardiff.co.uk',
    logo: 'https://thewaycardiff.co.uk/images-new/logo.png',
    address: {
        '@type': 'PostalAddress',
        streetAddress: 'The Paget Rooms, Stanwell Road',
        addressLocality: 'Penarth',
        addressRegion: 'Vale of Glamorgan',
        postalCode: 'CF64 3EG',
        addressCountry: 'GB',
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: '51.4344',
        longitude: '-3.1761',
    },
    openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '11:00',
        closes: '12:30',
    },
    sameAs: [
        'https://www.youtube.com/channel/UCoxbIC_3Gr9b91S38SlML0w',
        'https://www.instagram.com/thewaycardiff',
        'https://www.facebook.com/share/1Bj44P8xUq/?mibextid=wwXIfr',
        'https://www.tiktok.com/@thewaychurchcardiff',
    ],
};

function Sundays() {
    return (
        <div className="home-page sundays-page">
            <SEO
                title="Sunday Church Cardiff &amp; Penarth | The Way Church"
                description="Join us this Sunday at 11:00 AM. The Way Church gathers at The Paget Rooms, Stanwell Road, Penarth CF64 3EG — serving Cardiff, Cardiff Bay and the Vale of Glamorgan."
                canonical="/sundays"
                schema={churchSchema}
            />

            {/* ── Hero ── */}
            <section
                className="sundays-hero"
                style={{
                    backgroundImage: `url(${getImageUrl('invitationHero')})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                }}
                aria-label="Sunday service hero"
            >
                <div className="sundays-hero-overlay">
                    <h1 className="sundays-hero-heading">Join Us This Sunday</h1>
                    <p className="sundays-hero-sub">
                        A Church in Penarth for Cardiff and the Vale
                    </p>
                </div>
            </section>

            {/* ── Service Details ── */}
            <section className="content-section sundays-details-section">
                <div className="section-content animate-in">
                    <h2>Sunday Morning Service</h2>
                    <p>
                        We meet every Sunday morning and warmly welcome everyone — whether you have
                        attended church your whole life, are returning after a long time away, or are
                        simply curious. You do not need to have all the answers, and you do not need
                        to commit to anything. Come as you are.
                    </p>

                    <div className="sundays-info-grid">
                        <div className="sundays-info-card">
                            <span className="sundays-info-label">When</span>
                            <span className="sundays-info-value">Every Sunday</span>
                            <span className="sundays-info-value">11:00 AM</span>
                        </div>
                        <div className="sundays-info-card">
                            <span className="sundays-info-label">Where</span>
                            <span className="sundays-info-value">The Paget Rooms</span>
                            <span className="sundays-info-value">Stanwell Road</span>
                            <span className="sundays-info-value">Penarth</span>
                            <span className="sundays-info-value sundays-postcode">CF64 3EG</span>
                        </div>
                        <div className="sundays-info-card">
                            <span className="sundays-info-label">Who for</span>
                            <span className="sundays-info-value">Everyone welcome</span>
                            <span className="sundays-info-value">Cardiff · Cardiff Bay</span>
                            <span className="sundays-info-value">Penarth · Vale of Glamorgan</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Full-width image break ── */}
            <section className="image-section sundays-image-break loaded">
                <div
                    className="bg-image-wrapper"
                    style={{
                        backgroundImage: `url(${getImageUrl('homeSection1')})`,
                    }}
                />
            </section>

            {/* ── What to Expect ── */}
            <section className="split-section how-we-live-section">
                <div className="split-left how-we-live-heading">
                    <div className="animate-in">
                        <h2>What to Expect</h2>
                    </div>
                </div>
                <div className="split-right">
                    <div className="split-content animate-in">
                        <p>
                            Our Sunday gathering is relaxed, welcoming and centred on Jesus. Each
                            week you can expect worship through contemporary and traditional songs,
                            teaching from the Bible, and time for prayer. The atmosphere is warm and
                            genuine — we are a community still forming, walking together honestly and
                            faithfully.
                        </p>
                        <p>
                            The service typically lasts around 90 minutes. Afterwards we make time
                            to connect over tea and coffee, and we would love to meet you.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Full-width image break ── */}
            <section className="image-section sundays-image-break loaded">
                <div
                    className="bg-image-wrapper"
                    style={{
                        backgroundImage: `url(${getImageUrl('homeSection3')})`,
                    }}
                />
            </section>

            {/* ── Families & Children ── */}
            <section className="split-section mission-section">
                <div className="split-right mission-heading">
                    <div className="animate-in">
                        <h2>Families &amp; Children</h2>
                    </div>
                </div>
                <div className="split-left">
                    <div className="split-content animate-in">
                        <p>
                            Families are a central part of our community. Children are fully welcome
                            in the Sunday gathering. Please speak to one of our team on arrival if
                            you have any questions about how we accommodate younger children during
                            the service.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Getting Here ── */}
            <section className="split-section how-we-live-section">
                <div className="split-left how-we-live-heading">
                    <div className="animate-in">
                        <h2>Getting Here</h2>
                    </div>
                </div>
                <div className="split-right">
                    <div className="split-content animate-in">
                        <p>
                            <strong>Address:</strong> The Paget Rooms, Stanwell Road, Penarth,
                            CF64 3EG.
                        </p>
                        <p>
                            Penarth is a short drive or bus journey from Cardiff city centre and
                            Cardiff Bay. The venue is close to Penarth town centre with on-street
                            parking nearby and good access by public transport. Penarth railway
                            station is approximately a 10-minute walk.
                        </p>
                        <p>
                            <a
                                href="https://maps.google.com/?q=The+Paget+Rooms,+Stanwell+Road,+Penarth,+CF64+3EG"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="sundays-map-link"
                            >
                                Open in Google Maps →
                            </a>
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Accessibility ── */}
            <section className="split-section mission-section">
                <div className="split-right mission-heading">
                    <div className="animate-in">
                        <h2>Accessibility</h2>
                    </div>
                </div>
                <div className="split-left">
                    <div className="split-content animate-in">
                        <p>
                            The Paget Rooms has step-free access and is wheelchair accessible.
                            If you have specific accessibility requirements, please get in touch
                            before your visit and we will do our best to help make your experience
                            as comfortable as possible.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Full-width image before CTA ── */}
            <section className="image-section sundays-image-break loaded">
                <div
                    className="bg-image-wrapper"
                    style={{
                        backgroundImage: `url(${getImageUrl('homeSection5')})`,
                    }}
                />
            </section>

            {/* ── CTA / Connect ── */}
            <section className="content-section sundays-cta-section">
                <div className="section-content animate-in">
                    <h2>Plan Your Visit</h2>
                    <p>
                        If you would like to let us know you are coming, have any questions, or
                        simply want to say hello before your first Sunday, we would love to hear
                        from you.
                    </p>
                    <div className="sundays-cta-links">
                        <Link to="/#see-you-there" className="sundays-cta-btn sundays-cta-primary">
                            Get in Touch
                        </Link>
                        <Link to="/about-the-story" className="sundays-cta-btn sundays-cta-secondary">
                            About The Way
                        </Link>
                        <Link to="/the-invitation" className="sundays-cta-btn sundays-cta-secondary">
                            Get Involved
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Sundays;
