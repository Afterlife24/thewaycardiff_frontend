import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://thewaycardiff.co.uk';
const DEFAULT_OG_IMAGE = `${SITE_URL}/images-desktop/home-section-1.jpg`;

/**
 * SEO component — injects per-page <title>, <meta>, <link rel="canonical">,
 * Open Graph tags, and optional JSON-LD structured data into <head>.
 *
 * Props:
 *   title       {string}  Full page title (already formatted, e.g. "Page | The Way Church Cardiff")
 *   description {string}  Unique meta description for this page (≤160 chars recommended)
 *   canonical   {string}  Canonical path, e.g. "/sundays" (SITE_URL is prepended automatically)
 *   noindex     {boolean} Set true to add noindex,nofollow (e.g. /policies)
 *   ogImage     {string}  Absolute URL for Open Graph image (optional, falls back to default)
 *   schema      {object|object[]} JSON-LD structured data object(s) to inject
 */
function SEO({
    title,
    description,
    canonical,
    noindex = false,
    ogImage = DEFAULT_OG_IMAGE,
    schema = null,
}) {
    const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : SITE_URL;

    const schemaArray = schema
        ? Array.isArray(schema)
            ? schema
            : [schema]
        : [];

    return (
        <Helmet>
            {/* Core */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonicalUrl} />

            {/* Robots */}
            {noindex && <meta name="robots" content="noindex,nofollow" />}

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="The Way Church Cardiff" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:locale" content="en_GB" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />

            {/* JSON-LD structured data */}
            {schemaArray.map((item, i) => (
                <script key={i} type="application/ld+json">
                    {JSON.stringify(item)}
                </script>
            ))}
        </Helmet>
    );
}

export default SEO;
