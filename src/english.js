import React from "react";
import { Twitter, Translate } from "react-bootstrap-icons";
import "./App.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import noodles from "./noodles.JPG";
import noodlesgif from "./noodles.gif";
import tgicon from "./tg.png";
import whitePaper from "./whitepaper.pdf";


function App() {
  var openInNewTab = (url) => {
    var newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  var openInSameTab = (url) => {
    var newWindow = window.open(url, '_self', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return (
    <div className="app">
      <Navbar expand="lg" className="custom-nav" sticky="top">
        <div class="d-flex justify-content-center">
          <div className="icon-container">
            <img
              className="icon"
              src="https://uploads-ssl.webflow.com/60a9140e4874de04164387e8/60a95c6f4693009ed5838675_pancakeswap.png"
              onClick={() => openInNewTab('https://exchange.pancakeswap.finance/#/swap?inputCurrency=0x55d398326f99059ff775485246999027b3197955&outputCurrency=0x50feDA21961B8097f18Ba884f03842377980761f')}
            />
          </div>
          <div className="icon-container">
            <img
              className="icon"
              src="https://uploads-ssl.webflow.com/60a9140e4874de04164387e8/60a95c5852279b878aa9a098_tele.png"
              onClick={() => openInNewTab('https://t.me/CupNoodlesCoin_English')}
            />
          </div>

          <div className="icon-container twitter">
            <Twitter onClick={() => openInNewTab('https://twitter.com/CupNoodlesCoin')}/>
          </div>

          <div className="icon-container twitter">
            <Translate onClick={() => openInSameTab('https://www.cupnoodlescoin.org/')}/>
          </div>
        </div>
      </Navbar>


        <div className="d-flex justify-content-center">
          <img className="noodles" src={noodles} />
        </div>
        <div className="d-flex justify-content-center coin-title">
          CNC（Cup Noodles Coin)
        </div>
      <div className="content">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-sm-6 col-xs-6 col-md-6">
              <div className="divider" />
              <div className="content-title">
                <div>Cup Noodles Coin's</div>
                <div>Story</div>
              </div>
              A younge guy, named C, lost tons of money after a rug pull. He couldn't afford his in-house Michelin star chef. With the low balance in his bank account, all he can eat and cook is cup noodles. That's how Cup Noodles Coin was created.
              <div className="button-container">
                <Button variant="primary" size="lg">
                  Price Chart
                </Button>
                <Button variant="primary" size="lg" onClick={() => openInSameTab(whitePaper)}>
                  White Paper
                </Button>
              </div>
            </div>
            <div className="col-sm-6 col-xs-6 col-md-6">
              <img className="noodlesgif" src={noodlesgif} />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-sm-6 col-xs-6 col-md-6">
            <div className="content">
              <div className="divider" />
              <div className="content-title">
                <div>Cup Noodles Coin's</div>
                <div>Project Details</div>
              </div>
              <em>Smart Chain:</em> BSC (Binance Smart Chain)
              <br />
              <em>Token Standard:</em> BEP-20
              <br />
              <em>Contract Address:</em> 0x50feDA21961B8097f18Ba884f03842377980761f
              <br />
              <em>Mechanism:</em> 2% dividends from each transaction，3% into Liquidity Pool，Support swap with cup noodles in real life.
              <br />
              <em>Total Circulation:</em> 10,000,000,000
              <br />
              <em>PancakeSwap Liquidity（In Progress）:</em> 4,000,000,000
              <br />
              <em>CNC Farm:</em> 3,000,000,000
              <br />
              <em>Community Incentives :</em> 2,000,000,000
              <br />
              <em>Protocol Development and Daily Operation（In Progress）: </em> 1,000,000,000
            </div>
          </div>
          <div className="col-sm-6 col-xs-6 col-md-6">
          <div className="content">
            <div className="divider" />
            <div className="content-title">
              <div>Cup Noodles Coin's</div>
              <div>Official Social Media Channels</div>
            </div>
            <em>Telegram English Group:</em> <a href="https://t.me/CupNoodlesCoin_English" target="_blank" > https://t.me/CupNoodlesCoin_English </a>
            <br />
            <em>Twitter:</em>  <a href="https://twitter.com/CupNoodlesCoin" target="_blank" > https://twitter.com/CupNoodlesCoin </a>
            <br />
            <em>Telegram Chinese Group:</em> <a href="https://t.me/CupNoodlesCoin_China" target="_blank" > https://t.me/CupNoodlesCoin_China </a>
            <br />
          </div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="divider" />
        <div className="content-title">
          <div>Cup Noodles Coin's</div>
          <div>Roadmap</div>
        </div>
        <em>June 2021:</em> CNC on Pancake Swap
        <br />
        <em>Aug 2021:</em> CNC Farm release
        <br />
        <em>Oct 2021:</em> CNC exchange for cup noodles in real life
        <br />
      </div>

      <div className="container-fluid p-0">
        <div className="content">
          <div className="divider" />
          <div className="content-title">
            <div>Cup Noodles Coin's</div>
            <div>Purchase Steps</div>
          </div>
          <div className="row">
            <div className="col-sm-4 col-xs-4 col-md-4">
              <div className="buy-step step-1">
                <div className="step-button"> &nbsp; &nbsp; STEP 1 </div>
                <div className="step-title"> Create BSC Wallet </div>
                <p className="step-content"> If you don't have a BSC wallet，We recommend you to use Trust Wallet to create your own BSC Wallet.</p>
              </div>
            </div>
            <div className="col-sm-4 col-xs-4 col-md-4">
            <div className="buy-step step-2">
              <div className="step-button"> &nbsp; &nbsp; STEP 2 </div>
              <div className="step-title"> Adding CNC on Pancake Swap </div>
              <p className="step-content"> Click the Pancake icon on the top of the screen，then connect your BSC wallet in Pancake Swap and confirm to add CNC.</p>

            </div>
            </div>
            <div className="col-sm-4 col-xs-4 col-md-4">
            <div className="buy-step step-3">
              <div className="step-button"> &nbsp; &nbsp; STEP 3 </div>
              <div className="step-title"> Swap CNC using USDT </div>
              <p className="step-content"> To purcahse CNC, you need to have USDT balance. Please make the purchase in Panckae Swap using USDT/CNC with the amount of USDT you want.</p>
            </div>
            </div>
            </div>

        </div>
      </div>
      <div className="content end-content">
        Copyright © Cup Noodles Coin Teams
      </div>
      <div className='tg-icon-container' onClick={() => openInNewTab('https://t.me/CupNoodlesCoin_English')}>
        <img className="tgicon" src={tgicon} />
      </div>
    </div>
  );
}

export default App;
