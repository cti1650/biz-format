import React, { useState, useEffect } from "react"
import Styles from "./HoldTextArea.module.css"

class HoldTextArea extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: this.props.data ? this.props.data : "HoldTextArea",
      val: "",
      ...props,
    }
  }
  update(event) {
    this.setState({ val: event.target.value })
    localStorage.setItem(this.state.data, event.target.value)
    let ele = event.target
    ele.innerHTML = ele.innerHTML.trim()
    ele.style.height = "10px"
    let wSclollHeight = parseInt(ele.scrollHeight)
    // 1行の長さを取得する
    let wLineH = parseInt(ele.style.lineHeight.replace(/px/, ""))
    // 最低2行の表示エリアにする
    if (wSclollHeight < wLineH * 2) {
      wSclollHeight = wLineH * 2
    }
    // テキストエリアの高さを設定する
    ele.style.height = wSclollHeight + "px"
    ele.focus()
    ele.blur()
  }
  render() {
    const text = localStorage.getItem(this.state.data)
      ? localStorage.getItem(this.state.data)
      : this.state.val
    return (
      <>
        <textarea
          className={Styles.data}
          onBlur={e => {
            this.update(e)
          }}
          value={text}
          {...this.state}
        />
      </>
    )
  }
}
export default HoldTextArea
