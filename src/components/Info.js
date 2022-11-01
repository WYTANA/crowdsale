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
      {accountBalance > 500 ? (
        <h4>
          <strong>Your percentage of the total supply: </strong>
          {accountBalance / maxTokens}%
        </h4>
      ) : (
        <h4>
          <strong>Your percentage of the total supply: </strong>0%
        </h4>
      )}
      <h4>
        <strong>
          RUSH Token contract verified
          <a
            href="https://goerli.etherscan.io/address/0x8188b6859b2ddd72Df01dCe8649ae980C0092f25"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            &nbsp;here
          </a>
        </strong>
      </h4>
      <h4>
        <strong>
          Crowdsale contract verified
          <a
            href="https://goerli.etherscan.io/address/0xe1Fbcb1525A941f4f6409171f3Fe59BeABE1b4D1"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            &nbsp;here
          </a>
        </strong>
      </h4>
    </div>
  )
}

export default Info
