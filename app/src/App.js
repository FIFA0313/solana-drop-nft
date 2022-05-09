import React, {useEffect} from "react";
import "./App.css";
import twitterLogo from "./assets/twitter-logo.svg";

const TWITTER_HANDLE = "_buildspace";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {
    const checkIfWalletIsConnected = async () => {
        try {
            const {solana} = window

            if (solana) {
                if (solana.isPhantom) {
                    const response = await solana.connect({ onlyIfTrusted: true })
                    console.log(response.publicKey.toString())
                }
            } else {
                alert("Solana object was not found. Get a Phantom Wallet")
            }
        } catch (error) {
            console.error(error)
        }
    }

    const connectWallet = async () => {

    }

    const renderNotConnectedContainer = async () => {
        <button className="cta-button connect-wallet-button" onClick={connectWallet}>connect to wallet</button>
    }

    useEffect(() => {
        const onLoad = async () => {
            await checkIfWalletIsConnected()
        }

        window.addEventListener("load", onLoad)

        return () => window.removeEventListener("load", onLoad)
    }, [])

    return (
        <div className="App">
            <div className="container">
                <div className="header-container">
                    <p className="header">🍭 Candy Drop</p>
                    <p className="sub-text">NFT drop machine with fair mint</p>
                    {renderNotConnectedContainer}
                </div>
                <div className="footer-container">
                    <img
                        alt="Twitter Logo"
                        className="twitter-logo"
                        src={twitterLogo}
                    />
                    <a
                        className="footer-text"
                        href={TWITTER_LINK}
                        target="_blank"
                        rel="noreferrer"
                    >{`Adapted from @${TWITTER_HANDLE}`}</a>
                </div>
            </div>
        </div>
    );
};

export default App;
