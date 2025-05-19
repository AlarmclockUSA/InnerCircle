import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  ogImage = '/assets/InnerCircleLogo.png',
  ogType = 'website',
  canonicalUrl
}) => {
  // Default meta values if not provided
  const defaultTitle = 'Inner Circle | Build A High Performance Team';
  const defaultDescription = 'Transform your leadership and build a high performance team that functions from rest. Experience monthly executive trainings and Kingdom leadership.';
  const defaultKeywords = 'leadership, executive training, kingdom leadership, high performance team, LeaderForge';
  
  // Use provided values or defaults
  const pageTitle = title ? `${title} | Inner Circle` : defaultTitle;
  const pageDescription = description || defaultDescription;
  const pageKeywords = keywords || defaultKeywords;
  
  // Determine canonical URL
  const siteUrl = 'https://innercircle.com'; // Update with actual domain
  const canonical = canonicalUrl 
    ? `${siteUrl}${canonicalUrl}` 
    : `${siteUrl}${window.location.pathname}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      
      {/* Canonical Link */}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />

      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <html lang="en" />
    </Helmet>
  );
};

export default SEO; 