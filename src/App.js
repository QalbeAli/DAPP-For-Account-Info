import { useState } from "react";
import {
  checkCorrectNetwork,
  checkWalletAvailable,
  GetNodeInformation,
  getMainBalance,
  getUserAddress,
} from "./actions/Web3Actions";
import "./App.css";

function App() {
  const [data, setData] = useState({
    wallet: false,
    chainId: "not found",
    address: "Unavailable",
    balance: "0",
    NodeInformaion: "Unavailable",
  });

  const connectButton = async () => {
    let wallet = await checkWalletAvailable();
    let address = await getUserAddress();
    let balance = await getMainBalance();
    let chainID = await checkCorrectNetwork();
    let NodeInfo = await GetNodeInformation();
    setData({
      wallet: wallet,
      chainId: chainID,
      address: address,
      balance: balance,
      NodeInformaion: NodeInfo,
    });
  };

  return (
    <div>
      <h2>DAPP For Account Info</h2>
      <div>
        <h2>
          ALL RIGHTS RESERVED TO @RANA QALB E ALI
        </h2>
      </div>
      <div className="section">
        <div className="card">
          <div className="card-section">
            <h3>Wallet available</h3>
            <p>
              <strong>{data.wallet ? "Yes" : "No"}</strong>
            </p>
          </div>
          <div className="card-section">
            <h3>Address</h3>
            <p>
              <strong>{data.address}</strong>
            </p>
          </div>
          <div className="card-section">
            <h3>GetNode</h3>
            <p>
              <strong>{data.NodeInformaion}</strong>
            </p>
          </div>
          <div className="card-section">
            <h3>Selected Network Chain ID</h3>

            <p>
              <strong>{data.chainId}</strong>
            </p>
          </div>
          <div className="card-section">
            <h3>Main Balance</h3>
            <p>
              <strong>{parseFloat(data.balance).toFixed(3)} BNB</strong>
            </p>
          </div>
          <button onClick={connectButton}>Sign In</button>
        </div>
      </div>
    </div>
  );
}

export default App;
