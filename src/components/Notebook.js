import JupViewer from "./jupView/JupView"

const Notebook = () => {
  return (
    <div style={{ marginBottom: "100px" }}>
      <JupViewer file="https://raw.githubusercontent.com/faikaydin/product_forecast/master/src/assets/coles.ipynb"></JupViewer>
    </div>
  )
}
export default Notebook
