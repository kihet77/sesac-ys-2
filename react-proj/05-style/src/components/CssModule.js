import sytles from "../styles/origin.module.css"

export default function CssModule() {
  return (
    <>
      <div className={sytles.origin}>
        <div className={`${sytles.box} ${sytles.red}`}></div>
        <div className={[sytles.box, sytles.orange].join(" ")}></div>
        <div className={`${sytles.box} ${sytles.yellow}`}></div>
        <div className={`${sytles.box} ${sytles.green}`}></div>
        <div className={`${sytles.box} ${sytles.blue}`}></div>
        <div className={`${sytles.box} ${sytles.purple}`}></div>
      </div>
      
      <div className={`${sytles.box} ${sytles.redd}`}></div>

    </>

  )
}