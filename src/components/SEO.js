/** @jsxImportSource theme-ui */
import * as React from 'react'
import { Helmet } from 'react-helmet'
import parse from 'html-react-parser'

/**
 * @param {Object} props
 * @param {Object} [props.seo]
 * @param {String} props.seo.fullHead
 * @param {string} [props.title]
 */

export default function Seo({ seo, title }) {
  const head = seo?.fullHead && parse(seo.fullHead)

  return <Helmet title={title && title}>{head}</Helmet>
}
