import * as React from "react"
import A4 from "../components/PrintArea/A4"
import TodayStamp from "../components/Stamp/TodayStamp"
import HoldTextBox from "../components/HoldData/HoldTextBox"
import HoldTextArea from "../components/HoldData/HoldTextArea"
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
          <TodayStamp tw="text-sm text-right" />
          <p tw="text-sm p-0 text-left">
            <HoldTextBox
              tw="text-lg border-white border-0 underline w-full"
              data="to_Name"
              val="Example 御中"
            />
          </p>
          <p tw="text-sm text-left h-auto">
            <HoldTextArea
              tw="text-sm text-left break-words border-white border-0 w-full h-full"
              data="to_Address"
              val="東京都○○区○○1-2-3
              ○○　○○
              000-0000-0000"
            />
          </p>
          <p tw="text-lg p-0 text-right">
            <HoldTextBox
              tw="text-lg text-right border-white border-0 w-full"
              data="from_Name"
              val="Example Example"
            />
          </p>
          <p tw="text-sm text-right h-auto">
            <HoldTextArea
              tw="text-sm text-right break-words border-white border-0 w-full h-full"
              data="from_Address"
              val="東京都○○区○○1-2-3
              ○○　○○
              000-0000-0000"
            />
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
                <HoldTextBox
                  tw="text-xl text-left py-1 px-4 tracking-widest border-white border-0 w-full"
                  data={"comment_" + index}
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
