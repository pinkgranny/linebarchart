import React from "react"
import { ReactD3, BarChart, LineChart, tooltipLine } from "react-d3-components"

const securityJson = require("./Detectifywebcodingchallengev2.json")

export default class App extends React.Component {

  // data = [{
  //   label: "high",
  //   values: securityJson.map(item => ({
  //     x: item.date,
  //     y: item.high
  //   }))
  // },
  // {
  //   label: "low",
  //   values: securityJson.map(item => ({
  //     x: item.date,
  //     y: item.low
  //   }))
  // }]
  data = [
    {
      label: "high",
      values: securityJson.map(item => ({
        x: item.date,
        y: item.high
      }))

    },
    {
      label: "low",
      values: securityJson.map(item => ({
        x: item.date,
        y: item.low
      }))
    }
  ]

  dashFunc = label => {
    if (label === "high") {
      return "4 4 4"
    }
    if (label === "low") {
      return "3 4 3"
    }
  }

    widthFunc = label => {
      if (label === "high") {
        return "4"
      }
      if (label === "low") {
        return "2"
      }
    }

    linecapFunc = label => {
      if (label === "high") {
        return "round"
      }
    }

    data2 = [{
      label: "medium",
      values: securityJson.map(item => ({
        x: item.date,
        y: item.medium
      }))
    }]

    render() {
      return (
        <div>
          <div className="logo">
            <img src="https://detectify.com/static/gfx/assets/website/logo_w_text.svg" alt="Detectify" />
          </div>
          <div className="chartWrapper">
            <LineChart
              data={this.data}
              width={750}
              height={300}
              margin={{
                top: 10,
                bottom: 60,
                left: 50,
                right: 10
              }}
              tooltipHtml={tooltipLine}
              xAxis={{
                innerTickSize: 10
              }}
              fill="#c43a31"
              stroke={{
                strokeDasharray: this.dashFunc,
                strokeWidth: this.widthFunc,
                strokeLinecap: this.linecapFunc
              }} />
            <div className="recommendations">
              <p>In order to get rid of the last remaining red high threat IT security
                vulnerability, you can do:
              </p>
              <ol>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
              </ol>
              <p>The green line represents you low level IT security vulnerabilities.
              </p>
            </div>
            <BarChart
              data={this.data2}
              width={750}
              height={310}
              margin={
                {
                  top: 10,
                  bottom: 60,
                  left: 50,
                  right: 10
                }} />
            <div className="recommendations">
              <p>In order to get rid of the increasing amount of yellow medium threat
                IT security vulnerabilities, you can do:
              </p>
              <ol>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
              </ol>
            </div>
          </div>
        </div>
      )
    }

}
