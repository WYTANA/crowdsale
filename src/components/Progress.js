import ProgressBar from "react-bootstrap/ProgressBar"

const Progress = ({ maxTokens, tokensSold }) => {
  return (
    <div className="my-3">
      <ProgressBar
        animated
        striped
        variant="success"
        now={(tokensSold / maxTokens) * 100}
        label={`${(tokensSold / maxTokens) * 100}%`}
        visuallyHidden
      />
      <h5 className="text-center my-4">
        {tokensSold} out of {maxTokens} RUSH Tokens have sold
      </h5>
    </div>
  )
}

export default Progress
