import React from "react"
import Styles from "./page.module.css"

export default ({ children }) => (
  <> {/* <React.Fragment>の省略形 */}
      <section className="page">
      <p className="border-black border-l-8 border-b my-6 py-1 pl-4 h-auto">
        <input
          type="text"
          className="text-xl text-left py-1 tracking-widest border-white border-0 w-full"
          value="書類送付のご案内"
        />
      </p>
      <p id="today" className="text-sm text-right">{}</p>
      <p className="text-sm p-0 text-left">
        <input
          type="text"
          className="syncdata text-lg border-white border-0 underline w-full"
          id="to_Name"
          value="Example 御中"
        />
      </p>
      <p className="text-sm text-left h-auto">
        <textarea
          className="syncdata text-sm text-left break-words border-white border-0 w-full h-full"
          id="to_Address"
        >
東京都○○区○○1-2-3
○○　○○
000-0000-0000</textarea
        >
      </p>
      <p className="text-lg p-0 text-right">
        <input
          type="text"
          className="syncdata text-lg text-right border-white border-0 w-full"
          id="from_Name"
          value="Example Example"
        />
      </p>
      <p className="text-sm text-right h-auto">
        <textarea
          className="syncdata text-sm text-right break-words border-white border-0 w-full h-full"
          id="from_Address"
        >
        東京都○○区○○1-2-3
        ○○　○○
        00-0000-0000
    </textarea
        >
      </p>
      <p className="text-left break-words mt-8">
        拝啓　時下ますますご清栄のこととお喜び申し上げます。平素は格別のお引き立てを賜り<br />誠にありがとうございます。<br /><br />さて、下記のとおり書類を送付いたしますので、ご査収の程よろしくお願い申し上げます。<br />まずは、書類送付のご案内まで。
      </p>
      <p className="text-right">敬具</p>
      <p className="text-center my-8">記</p>
      <ol
        className="border-2 border-black border-solid divide-y-2 divide-gray-400 divide-dotted p-0 my-6"
      >
        <li>
          <input
            type="text"
            className="text-xl text-left py-1 px-4 tracking-widest border-white border-0 w-full"
            value=""
          />
        </li>
        <li>
          <input
            type="text"
            className="text-xl text-left py-1 px-4 tracking-widest border-white border-0 w-full"
            value=""
          />
        </li>
        <li>
          <input
            type="text"
            className="text-xl text-left py-1 px-4 tracking-widest border-white border-0 w-full"
            value=""
          />
        </li>
        <li>
          <input
            type="text"
            className="text-xl text-left py-1 px-4 tracking-widest border-white border-0 w-full"
            value=""
          />
        </li>
        <li>
          <input
            type="text"
            className="text-xl text-left py-1 px-4 tracking-widest border-white border-0 w-full"
            value=""
          />
        </li>
        <li>
          <input
            type="text"
            className="text-xl text-left py-1 px-4 tracking-widest border-white border-0 w-full"
            value=""
          />
        </li>
        <li>
          <input
            type="text"
            className="text-xl text-left py-1 px-4 tracking-widest border-white border-0 w-full"
            value=""
          />
        </li>
        <li>
          <input
            type="text"
            className="text-xl text-left py-1 px-4 tracking-widest border-white border-0 w-full"
            value=""
          />
        </li>
        <li>
          <input
            type="text"
            className="text-xl text-left py-1 px-4 tracking-widest border-white border-0 w-full"
            value=""
          />
        </li>
        <li>
          <input
            type="text"
            className="text-xl text-left py-1 px-4 tracking-widest border-white border-0 w-full"
            value=""
          />
        </li>
      </ol>
      <p className="text-right">以上</p>
      {children}
    </section>
    <script type="text/javascript">
    </script>
  </>
)
