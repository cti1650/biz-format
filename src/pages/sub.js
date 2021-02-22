import React from "react"
import { Link } from "gatsby"
import Page from "../components/page"

export default () => (
  <Page>
    <div>
      <p>サブコンテンツ！</p>
      <Link to={"/"}>トップページへのリンク</Link>
    </div>
  </Page>
)
