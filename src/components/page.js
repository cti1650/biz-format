import * as React from "react"
import A4 from "../components/PrintArea/A4"
import TodayStamp from "../components/Stamp/todayStamp"
import Styles from "./page.module.css"
import "tailwindcss/dist/base.css"
import "twin.macro"

class PageA4 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      to_name: "Example 御中",
      items: [
        { val: "" },
        { val: "" },
        { val: "" },
        { val: "" },
        { val: "" },
        { val: "" },
        { val: "" },
        { val: "" },
        { val: "" },
        { val: "" },
      ],
      ...props,
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({ to_name: event.target.value })
  }

  render() {
    return (
      <>
        {" "}
        {/* <React.Fragment>の省略形 */}
        <A4>
          <p tw="border-black border-l-8 border-b my-6 py-1 pl-4 h-auto">
            <input
              type="text"
              tw="text-xl text-left py-1 tracking-widest border-white border-0 w-full"
              value="書類送付のご案内"
            />
          </p>
          <TodayStamp />
          <p tw="text-sm p-0 text-left">
            <input
              type="text"
              className="syncdata"
              tw="text-lg border-white border-0 underline w-full"
              id="to_Name"
              onChange={this.handleChange}
              value={this.state.to_name}
            />
          </p>
          <p tw="text-sm text-left h-auto">
            <textarea
              className="syncdata"
              tw="text-sm text-left break-words border-white border-0 w-full h-full"
              id="to_Address"
            >
              東京都○○区○○1-2-3 ○○　○○ 000-0000-0000
            </textarea>
          </p>
          <p tw="text-lg p-0 text-right">
            <input
              type="text"
              className="syncdata"
              tw="text-lg text-right border-white border-0 w-full"
              id="from_Name"
              value="Example Example"
            />
          </p>
          <p tw="text-sm text-right h-auto">
            <textarea
              className="syncdata"
              tw="text-sm text-right break-words border-white border-0 w-full h-full"
              id="from_Address"
            >
              東京都○○区○○1-2-3 ○○　○○ 00-0000-0000
            </textarea>
          </p>
          <p tw="text-left break-words mt-8">
            拝啓　時下ますますご清栄のこととお喜び申し上げます。平素は格別のお引き立てを賜り
            <br />
            誠にありがとうございます。
            <br />
            <br />
            さて、下記のとおり書類を送付いたしますので、ご査収の程よろしくお願い申し上げます。
            <br />
            まずは、書類送付のご案内まで。
          </p>
          <p tw="text-right">敬具</p>
          <p tw="text-center my-8">記</p>
          <ol tw="border-2 border-black border-solid divide-y-2 divide-gray-400 divide-dotted p-0 my-6">
            {this.state.items.map((item, index) => (
              <li>
                <input
                  type="text"
                  tw="text-xl text-left py-1 px-4 tracking-widest border-white border-0 w-full"
                  value={item.val}
                  key={index}
                />
              </li>
            ))}
          </ol>
          <p tw="text-right">以上</p>
        </A4>
      </>
    )
  }
}
export default PageA4
