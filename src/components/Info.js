const Info = ({ account, accountBalance }) => {
  return (
    <div className="my-5">
      <h4>
        <strong>Connected Account: </strong>
        {account}
      </h4>
      <h4>
        <strong>Your Balance of RUSH Tokens: </strong>
        {accountBalance}
      </h4>
    </div>
  )
}

export default Info
