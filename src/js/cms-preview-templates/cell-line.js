import React from "react";
import format from "date-fns/format";

export default class CellLinePreview extends React.Component {
  render() {
    const {entry} = this.props;

    return <div className="mw6 center ph3 pv4">
      <h1 className="f2 lh-title b mb3">{ entry.getIn(["data", "title"])}</h1>
      <div className="flex justify-between grey-3">
        <p>{ format(entry.getIn(["data", "date"]), "iii, MMM d, yyyy") }</p>
      </div>
    </div>;
  }
}
