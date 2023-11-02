/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

import * as React from 'react';
const OuiIconPolygon = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
    aria-labelledby={titleId}
    {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M15 11v4h-4v-1.5H5V15H1v-4h1.5V5H1V1h4v1.3h6V1h4v4h-2.9l-.8 1h.7v4h-.8l.8 1h3zm-1 3v-2h-2v2h2zm0-10V2h-2v2h2zm-3 8.5v-1.2L10 10H8V6h2l1-1.3V3.3H5V5H3.5v6H5v1.5h6zM11 9V7H9v2h2zm-7 5v-2H2v2h2zM4 4V2H2v2h2z" />
  </svg>
);
export const icon = OuiIconPolygon;
