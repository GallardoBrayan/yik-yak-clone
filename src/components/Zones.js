import React, { Component } from "react";
import Zone from "./Zone";

class Zones extends Component {
  constructor() {
    super();
    this.state = {
      list: [
        {
          name: "Zone 1",
          zipCode: "20204",
          numComments: 4
        },
        {
          name: "Zone 2",
          zipCode: "20205",
          numComments: 31
        },
        {
          name: "Zone 3",
          zipCode: "20206",
          numComments: 1
        },
        {
          name: "Zone 4",
          zipCode: "20207",
          numComments: 23
        }
      ]
    };
  }

  render() {
    const listItems = this.state.list.map((zone, i) => {});
    return (
      <div>
        <ol>
          <li>
            <Zone currentZone={firstZone} />
          </li>
          <li>
            <Zone currentZone={secondZone} />
          </li>
          <li>
            <Zone currentZone={thirdZone} />
          </li>
          <li>
            <Zone currentZone={fourthZone} />
          </li>
        </ol>
      </div>
    );
  }
}

export default Zones;
