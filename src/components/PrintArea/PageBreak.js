import * as React from "react"
import Styles from "./PageBreak.module.css"

class PageBreak extends React.Component {
  render() {
    return (
      <>
        {/* <React.Fragment>の省略形 */}
        <div className={Styles.pageBreak}></div>
      </>
    )
  }
}
export default PageBreak
