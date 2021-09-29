

const PieceOfArt = ({title, imgPath})=> {
  return (
    <div>
      <h2>{title}</h2>
      <img src={imgPath} alt={title} />
    </div>
  )
}

export default PieceOfArt;