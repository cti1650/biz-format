import * as React from "react"
import Styles from "./A4.module.css"

class A4 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ...props,
    }
  }
  render() {
    return (
      <>
        {/* <React.Fragment>の省略形 */}
        <section className={Styles.pageA4}>{this.props.children}</section>
      </>
    )
  }
}
export default A4
