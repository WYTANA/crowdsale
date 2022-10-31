const Info = ({ account, accountBalance, maxTokens }) => {
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
      <h4>
        <strong>Your percentage of the total supply: </strong>
        {accountBalance / maxTokens}%
      </h4>
    </div>
  )
}

export default Info
