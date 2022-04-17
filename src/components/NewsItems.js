import React, { Component } from 'react'

export class NewsItems extends Component {
    render() {
      const  {title , desc ,iurl , newsurl } = this.props
        return (
            <div>
              <div className="card" style={{width: "18rem"}}>
  <img src={!iurl?"https://cdn.vox-cdn.com/thumbor/XmknKJh3j5gnJUmXJc573XAYwF0=/0x0:4781x2503/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22876554/1341968229.jpg":iurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{desc}...</p>
    <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-danger">Read More</a>
  </div>
</div>
            </div>
        )
    }
}

export default NewsItems
