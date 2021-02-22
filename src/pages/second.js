import React from "react"
import { Link } from "gatsby"
import Page from "../components/page"

export default () => (
  <Page>
    <div>
      <p>2つ目のページのメインコンテンツ！</p>
      <Link to={"/"}>トップページへのリンク</Link>
    </div>
  </Page>
)
