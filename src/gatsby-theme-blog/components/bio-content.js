import React, { Fragment } from "react"
import { Styled } from "theme-ui"

/**
 * Change the content to add your own bio
 */


export default () => (
  <Fragment>
    This is where <Styled.a href="http://example.com/">Shravya</Styled.a>
    {` `}
    goes.
    <br />
    Or whatever, you make the rules.
  <div style={{ margin: `10rem auto`, padding: `0 1rem` }}>
    <header style={{ marginBottom: `1.5rem` }}>
      <ul style={{ float: `right` }}>
        <li style={{ margin: `3rem auto` , float: `right` }}><a href="/">   Blog Posts </a></li>
        <li style={{ margin: `3rem auto` ,float: `right` }}><a href="/about/">   Videos </a></li>
        <li style={{ margin: `3rem auto` ,float: `right` }}><a href="/contact/">   Pictures </a></li>
      </ul>
    </header>
  </div>
  </Fragment>
)
