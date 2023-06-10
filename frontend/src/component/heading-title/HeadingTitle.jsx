

const HeadingTitle = ({title}) => {
  return (
    <div style={wrabberStyle}>
      <h2 style={titleStyle}>{title}</h2>
    </div>
  )
}


const wrabberStyle = {
  marginRight : `20px`,
  marginTop : `40px`
}

const titleStyle = {
color : `var(--primary-color)`
}


export default HeadingTitle