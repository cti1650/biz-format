import React from "react"
import { Link } from "gatsby"
import PageA4 from "../components/page"

export default () => (
  <>
    <PageA4>
      <div>
        <p>2つ目のページのメインコンテンツ！</p>
        <Link to={"/"}>トップページへのリンク</Link>
      </div>
    </PageA4>
  </>
)
