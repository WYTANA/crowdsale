import Spinner from "react-bootstrap/Spinner"

const Loading = () => {
  return (
    <div className="text-center my-5">
      <Spinner animation="grow" />
      <p className="my-2">
        Please connect Goerli account ... preparing data ...
      </p>
    </div>
  )
}

export default Loading
