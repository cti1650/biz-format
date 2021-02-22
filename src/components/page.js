import * as React from 'react'
import Styles from "./page.module.css"

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {today: (() => {
        let utc = new Date()
        //現在時刻とUTCの時差を求める。ハワイなら600分 * 60秒 * 1000ミリ秒
        let offset = utc.getTimezoneOffset() * 60 * 1000 //ローカルタイムとして協定時を出すために時差分調整

        utc = new Date(utc.getTime() + offset)
        //日本時間に調整(UTC+9)
        let timeJP = new Date(utc.getTime() + 9 * 60 * 60 * 1000)
        let jpYear = timeJP.getFullYear()
        let jpMonth = timeJP.getMonth() + 1
        let jpDate = timeJP.getDate()
        return jpYear + "年" + jpMonth + "月" + jpDate + "日"
      })()};
  }

  render() {
    return (
      <> {/* <React.Fragment>の省略形 */}
        <h2>test</h2>
        <p>{this.state.today}</p>
      </>
    )
  }
}
