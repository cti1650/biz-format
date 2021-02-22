import React from "react"
import { Link } from "gatsby" //追加
import Layout from "../components/layout"

export default () => (
  <Layout>
    <div>
      <p>トップページのメインコンテンツ！</p>
      <Link to={"/second/"}>Secondページへのリンク</Link> {/* 追加 */}
      <Link to={"/sub/"}>サブコンテンツへのリンク</Link> {/* 追加 */}
    </div>
  </Layout>
)
