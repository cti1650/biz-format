import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <div>
      <p>2つ目のページのメインコンテンツ！</p>
      <Link to={"/"}>トップページへのリンク</Link>
    </div>
  </Layout>
)
