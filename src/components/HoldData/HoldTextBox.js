import * as React from "react"
import Styles from "./HoldTextBox.module.css"

class HoldTextBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: this.props.data ? this.props.data : "HoldTextBox",
      val: "",
      ...props,
    }
  }
  update(event) {
    this.setState({ val: event.target.value })
    localStorage.setItem(this.state.data, event.target.value)
  }
  render() {
    const text = localStorage.getItem(this.state.data)
      ? localStorage.getItem(this.state.data)
      : this.state.val
    return (
      <>
        <input
          type="text"
          className={Styles.data}
          onChange={e => {
            this.update(e)
          }}
          value={text}
          {...this.state}
        />
      </>
    )
  }
}
export default HoldTextBox
